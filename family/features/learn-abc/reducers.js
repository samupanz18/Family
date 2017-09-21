'use strict';

import _ from 'lodash';
import {
    START,
    SHOW_LETTER,
    CLEAR_STARTED,
} from './actions';

const learnABC = (state = {
    started: false,
    letter: '',
}, action) => {
    switch (action.type) {
        case START:
            return _.assign({}, state, {
                started: true,
            });
        case SHOW_LETTER:
            const {
                started,
            } = state;

            if (!started) {
                return state;
            }

            return _.assign({}, state, {
                letter: action.letter,
            });
        case CLEAR_STARTED:
            return _.assign({}, state, {
                started: false,
            });
        default:
            return state;
    }
};

export default learnABC;