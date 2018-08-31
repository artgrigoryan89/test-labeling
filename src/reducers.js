import { combineReducers } from 'redux';
import {formFieldReducer} from './module/form_module';

const rootReducer = combineReducers({
    data: formFieldReducer,
});

export default rootReducer;
