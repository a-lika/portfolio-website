import { CHANGE_LANGUAGE } from '../constants';

export const changeLanguage = id => ({
    type: CHANGE_LANGUAGE,
    payload: id,
});
