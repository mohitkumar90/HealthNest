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

function App(): React.JSX.Element {

  return (
    <>
    <SafeAreaProvider>
        <PaperProvider>
            <MainNavigationStack />
        </PaperProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
