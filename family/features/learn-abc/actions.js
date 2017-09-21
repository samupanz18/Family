export const START = 'START';
export const SHOW_LETTER = 'SHOW_LETTER';
export const CLEAR_STARTED = 'CLEAR_STARTED';

export const start = () => ({
    type: START,
});

export const showLetter = letter => ({
    type: SHOW_LETTER,
    letter,
});

export const clearStarted = () => ({
    type: CLEAR_STARTED,
});