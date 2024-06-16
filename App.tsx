/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import MainNavigationStack from './src/navigation/mainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react'


import {store, persistor} from './src/store/main';
import { Provider } from 'react-redux';
import { Text } from 'react-native';

function App(): React.JSX.Element {

  return (
    <>
    <SafeAreaProvider>
        <PaperProvider>
        <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
    <MainNavigationStack />
    </PersistGate>
    </Provider>
            
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
