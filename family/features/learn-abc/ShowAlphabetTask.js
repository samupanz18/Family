'use strict';

import {
    CountdownTask,
} from '../../common/BinaryTask';
import Alphabet from './alphabet-en_US';

export default class ShowAlphabetTask extends CountdownTask {
    constructor(learnABCContainer) {
        super(26, 0);

        this.support = learnABCContainer.getShowAlphabetTaskSupport();
    }

    getLetter() {
        const letterIndex = Alphabet.length - this.currentNumber;
        
        if (letterIndex >= 0 && letterIndex < Alphabet.length) {
            const {
                upper: letter,
            } = Alphabet[letterIndex];
            
            return letter;
        } else {
            throw new Error(`Invalid letter index: ${letterIndex}`);
        }
    }

    onStart(done) {
        const letter = this.getLetter();
        this.support.showLetter(letter);
        done();
    }

    onWork(done) {
        this.invokeCallback(done => super.onWork(done))
            .then(() => {
                if (this.currentNumber > 0) {
                    const letter = this.getLetter();
                    
                    this.support.showLetter(letter);
                }

                done();
            });
    }

    onComplete() {
        this.reset();

        this.support.clearStarted();
    }
}