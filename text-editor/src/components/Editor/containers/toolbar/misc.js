import React from 'react';
import { Container, ToolbarItem } from './common';
import { Modifier, EditorState } from 'draft-js';
import getFragmentFromSelection from 'draft-js/lib/getFragmentFromSelection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndent, faOutdent } from '@fortawesome/free-solid-svg-icons';

export function RenderIndents(props) {
    const { editorState, updateEditorState } = props;

    const increaseIndent = () => {
        const contentState = editorState.getCurrentContent();
        const currentSelectionState = editorState.getSelection();
        const selected = getFragmentFromSelection(editorState);
        const selectedText = selected ? selected.map(x => x.getText()).join('\n') : ''
        const tabbedText = `    ${selectedText}`
        const currentFocus = editorState.getSelection().getFocusKey()
        const inlineStyle = editorState.getCurrentInlineStyle(currentFocus);
        let newContentState = Modifier.replaceText(
            contentState,
            currentSelectionState,
            tabbedText,
            inlineStyle
        );
        let newEditorState = EditorState.push(editorState, newContentState, 'insert-characters')
        updateEditorState(newEditorState)
    };

    const decreaseIndent = () => {
        const contentState = editorState.getCurrentContent();
        const currentSelectionState = editorState.getSelection();
        const selected = getFragmentFromSelection(editorState);
        const selectedText = selected ? selected.map(x => x.getText()).join('\n') : ''
        const tabbedText = selectedText.startsWith('    ') ?  selectedText.substring('    '.length) : `${selectedText}`
        const currentFocus = editorState.getSelection().getFocusKey()
        const inlineStyle = editorState.getCurrentInlineStyle(currentFocus);
        let newContentState = Modifier.replaceText(
            contentState,
            currentSelectionState,
            tabbedText,
            inlineStyle
        );
        let newEditorState = EditorState.push(editorState, newContentState, 'insert-characters')
        updateEditorState(newEditorState)
    };

    return <Container>
        <ToolbarItem
            onClick={increaseIndent}>
                <FontAwesomeIcon icon={faIndent} />
        </ToolbarItem>
        <ToolbarItem
            onClick={decreaseIndent}>
                <FontAwesomeIcon icon={faOutdent} />
        </ToolbarItem>
    </Container>
};