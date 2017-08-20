'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'native-base';
import PropTypes from 'prop-types';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          transparent
          onPress={() => { this.testButton(); }}
          style={styles.button}
        >
          <Text>Take a pic</Text>
        </Button>
      </View>
    );
  }
}

Main.propTypes = {
  started: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
