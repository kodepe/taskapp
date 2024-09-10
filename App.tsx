import React from 'react';
import {Dimensions, SafeAreaView, StatusBar, View} from 'react-native';

import {AppNavigator, HomePage, TaskProvider} from './src';

function App(): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle="light-content" />
        <TaskProvider>
          <HomePage />
        </TaskProvider>
      </SafeAreaView>
    </View>
  );
}

export default App;
