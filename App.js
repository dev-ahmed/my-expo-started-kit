import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import Exponent from 'expo';
import Main from '@src/main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Exponent.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
    this.setState({ isReady: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isReady ? (
            <Main />
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
