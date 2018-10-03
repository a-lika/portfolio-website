import { CHANGE_LANGUAGE } from '../constants';

const initialState = {
    language: 'russian'
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE: {
            return { ...state, language: action.payload }
        }        
        default:
            return state;
    }
};