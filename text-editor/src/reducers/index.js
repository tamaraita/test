import { handleActions } from 'redux-actions';
import { NEW_SYNS } from '../constants';

export default handleActions({
    [NEW_SYNS]: (state, action) => ({...state, synonyms_list: action.payload})
},{synonyms_list: [""]})