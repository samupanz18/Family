'use strict';

import React, {
    Component,
} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
} from 'react-native';
import Container from '../containers/LearnABCContainer';

@Container
export default class LearnABC extends Component {
    static propTypes = {
        started: React.PropTypes.bool.isRequired,
        letter: React.PropTypes.string.isRequired,
        onStart: React.PropTypes.func.isRequired,
    };

    render() {
        const {
            started,
            letter,
            onStart,
        } = this.props;

        return (
            <View style={styles.container}>
                {
                    started ? (
                        <Text style={styles.letter}>
                            {letter}
                        </Text>
                    ) : (
                        <Button 
                            title="开始" 
                            onPress={onStart}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },

    letter: {
        fontSize: 256,
    }
});