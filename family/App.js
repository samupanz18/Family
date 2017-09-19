import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LearnABC from './features/learn-abc/components/LearnABC';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LearnABC />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
