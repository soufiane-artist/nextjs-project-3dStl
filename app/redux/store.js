// @reduxjs/toolkit store

import {configureStore} from '@reduxjs/toolkit' 
import { authReducer} from './slices/sliceAuth';

const store = configureStore({
    reducer :{
        auth: authReducer,
    }
});
export default store;