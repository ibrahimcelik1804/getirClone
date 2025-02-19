import {LogBox, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
