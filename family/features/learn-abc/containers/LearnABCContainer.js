'use strict';

import React from 'react';
import Promise from 'bluebird';
import ShowAlphabetTask from '../ShowAlphabetTask';

export default LearnABC => (
    class Container extends React.Component {
        constructor(props) {
            super(props);

            this.showAlphabetTask = new ShowAlphabetTask(this);

            this.onStart = ::this.onStart;

            this.state = {
                started: false,
                letter: '',
            };
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
        }

        onStart() {
            this.start();
        }

        start() {
            Promise.fromCallback(cb => {
                this.setState({
                    started: true,
                }, cb);
            })
                .then(() => {
                    this.showAlphabetTask.run();
                });
        }

        getShowAlphabetTaskSupport() {
            const showLetter = letter => Promise.fromCallback(cb => {
                this.setState({
                    letter,
                }, cb);
            });

            const clearStarted = () => Promise.fromCallback(cb => {
                this.setState({
                    started: false,
                }, cb);
            });

            return {
                showLetter,
                clearStarted,
            };
        }
    }
)