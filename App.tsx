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
import { NativeBaseProvider } from "native-base";


import { store, persistor } from './src/store/main';
import { Provider } from 'react-redux';
import { Platform, Text } from 'react-native';

function App(): React.JSX.Element {

  return (
    <>

      <SafeAreaProvider style={Platform.OS === 'ios' && { 
  flex: 1, 
  paddingTop:  40,
 }}>
        <PaperProvider>
        <NativeBaseProvider>
           
          <Provider store={store}>
            <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
              <MainNavigationStack />
            </PersistGate>
          </Provider>
          </NativeBaseProvider>

        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
