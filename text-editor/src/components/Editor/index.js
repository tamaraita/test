import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { EditorState, Editor as DraftEditor } from 'draft-js';
import styled from 'styled-components';
import Toolbar from './containers/toolbar';

// STYLES
const EditorWrapper = styled.div`
    min-width: 700px;
    display: flex;
    height: fit-content;
    flex-direction: column;
    margin-top: 3em;
`;

const EditorContainer = styled.div`
    display: flex;
    min-heihght: 9em;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    padding: 5px;
    font-size: 17px;
    font-weight: 300;
    box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;


// COMPONENT
class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    };

    updateEditorState(editorState) {
        this.setState({editorState});
    };

    render() {
        return (
            <EditorWrapper>
                <Toolbar editorState={this.state.editorState} updateEditorState={this.updateEditorState.bind(this)} />
                <EditorContainer>
                    <DraftEditor 
                        placeholder="Type here.."
                        editorState={this.state.editorState}
                        onChange={this.updateEditorState.bind(this)}
                    />
                </EditorContainer>
            </EditorWrapper>
        );
    };
}

// Editor.propTypes = {

// };

export default Editor;