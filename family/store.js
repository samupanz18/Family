'use strict';

import {
    createStore,
} from 'redux';
import learnABC from './features/learn-abc/reducers';

export default createStore(learnABC, {
    started: false,
    letter: '',
});
