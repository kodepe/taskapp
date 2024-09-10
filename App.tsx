import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {AppNavigator, TaskProvider} from './src';
import {NativeBaseProvider} from 'native-base';
function App(): React.JSX.Element {
  return (
    <NativeBaseProvider isSSR={false} initialWindowMetrics={false}>
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
            <AppNavigator />
          </TaskProvider>
        </SafeAreaView>
      </View>
    </NativeBaseProvider>
  );
}

export default App;
