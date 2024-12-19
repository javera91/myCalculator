import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
