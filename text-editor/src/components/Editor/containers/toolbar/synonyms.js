import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ToolbarItem, PopUpBox, BoxItem } from './common';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';
import { Modifier, EditorState } from 'draft-js';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { findsyns } from '../../../../actions';


class Synonyms extends Component {
    constructor(props){
        super(props)
        this.state = {
            displaySynonyms: false,
            selection: ""
        }
    };

    DisplaySynonyms = (selection) => {
        this.props.findsyns(selection);

        const changeText = (newText) => {
            const { editorState, updateEditorState } = this.props;
            const currentSelectionState = editorState.getSelection();
            const contentState = editorState.getCurrentContent();
            const currentFocus = editorState.getSelection().getFocusKey()
            const inlineStyle = editorState.getCurrentInlineStyle(currentFocus);
            let newContentState = Modifier.replaceText(contentState, currentSelectionState, newText, inlineStyle)
            let newEditorState = EditorState.push(
                editorState,
                newContentState,
                `change-block-data`,
                inlineStyle
              );
            updateEditorState(newEditorState);
            this.setState({displaySynonyms: !this.state.displaySynonyms, selection: ""})
        }

        return <PopUpBox>
            {this.props.synonyms_list ?
                this.props.synonyms_list.map((opt, idx) => {
                    return <BoxItem
                        key={`${opt.word}-${idx}`}
                        onClick={() => changeText(opt.word)}
                    >
                        {opt.word}
                    </BoxItem>
                })
                :
                <FontAwesomeIcon icon={faSpinner} />
            }
        </PopUpBox>
    };
    
    handleClick = () => {
        this.setState({displaySynonyms: !this.state.displaySynonyms})
    };

    render () {
        const { editorState } = this.props;
        const selected = getFragmentFromSelection(editorState);
        return <Container>
            <ToolbarItem
                onClick={this.handleClick}>
                <FontAwesomeIcon icon={faSearchPlus} />
            </ToolbarItem>
            {this.state.displaySynonyms ?
                this.DisplaySynonyms(selected ? selected.map(x => x.getText()).join('\n') : '')
                :
                null
            }
        </Container>
    };
};

Synonyms.propTypes = {
    editorState: PropTypes.object.isRequired,
    updateEditorState: PropTypes.func.isRequired,
};


const mstp = (state, props) => ({
    synonyms_list: state.synonyms_list
})

const mdtp = {
    findsyns,
}

export default connect(mstp,mdtp)(Synonyms);