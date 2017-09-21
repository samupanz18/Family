'use strict';

import React from 'react';
import Promise from 'bluebird';
import ShowAlphabetTask from '../ShowAlphabetTask';
import store from '../../../store';
import {
    start,
    showLetter,
    clearStarted,
} from '../actions';

export default LearnABC => (
    class Container extends React.Component {
        constructor(props) {
            super(props);

            this.showAlphabetTask = new ShowAlphabetTask(this);

            this.onStart = ::this.onStart;

            this.unsubscribe = store.subscribe(() => {
                this.setState(store.getState());
            });

            this.state = store.getState();
        }

        render() {
            const {
                started,
                letter,
            } = this.state;

            return (
                <LearnABC
                    started={started}
                    letter={letter}
                    onStart={this.onStart}
                />
            );
        }

        componentWillUnmount() {
            this.showAlphabetTask.interrupt();
            this.unsubscribe();
        }

        onStart() {
            this.start();
        }

        start() {
            const action = start();

            store.dispatch(action);
            this.showAlphabetTask.run();
        }

        showLetter(letter) {
            const action = showLetter(letter);

            store.dispatch(action);
        }

        clearStarted() {
            const action = clearStarted();

            store.dispatch(action);
        }

        getShowAlphabetTaskSupport() {
            return {
                showLetter: ::this.showLetter,
                clearStarted: ::this.clearStarted,
            };
        }
    }
)