import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RenderInlineStyles } from './inlineStyle';
import Synonyms from './synonyms';
import { RenderIndents } from './misc';

// STYLES
const ToolbarContainer = styled.div`\
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 48px;
    padding: 5px 7px;
    margin-bottom: 8px;
    border-radius: 2px 2px 0 0;
    box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17)
`;

// COMPONENT
class Toolbar extends Component {
    render() {
        const { editorState, updateEditorState } = this.props
        
        return (
            <ToolbarContainer>
                <RenderInlineStyles
                    editorState={editorState}
                    updateEditorState={updateEditorState}
                />
                <RenderIndents
                    editorState={editorState}
                    updateEditorState={updateEditorState}
                />
                <Synonyms 
                    editorState={editorState}
                    updateEditorState={updateEditorState}
                />
            </ToolbarContainer>
        );
    }
}

Toolbar.propTypes = {
    editorState: PropTypes.object.isRequired,
    // contentState: PropTypes.object.isRequired,
    updateEditorState: PropTypes.func.isRequired,
};

export default Toolbar;