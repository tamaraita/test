import { createAction } from 'redux-actions';
import { NEW_SYNS } from '../constants';
import getSynsApi from '../apis';


export const findsyns = createAction(NEW_SYNS, (word) => getSynsApi(word))