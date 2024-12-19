import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const Calculator: React.FC = () => {
  const [operation, setOperation] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    const lastChar = operation.charAt(operation.length - 1);
    const operators = ['+', '-', '*', '/'];

    if ((operators.includes(value) || value === '%') && operation === '') return;

    if (value === '0' && operation === '') return;
    if (operation === '0' && value !== '0') {
      setOperation(value);
      return;
    }

    if (operators.includes(lastChar) && operators.includes(value)) {
      setOperation(operation.slice(0, -1) + value);
      return;
    }

    if (result) {
      setOperation(result + value);
      setResult('');
    } else {
      setOperation(operation + value);
    }
  };

  const handlePercentage = () => {
    try {
      const percentage = eval(operation) / 100;
      setResult(percentage.toString());
      setOperation('');
    } catch (error) {
      setResult('Error');
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(operation).toString();
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setOperation('');
    setResult('');
  };

  const clearLastDigit = () => {
    if (result) {
      setResult(result.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>
          {operation || ''}
          {result ? ` = ${result}` : ''}
        </Text>
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="÷" onPress={() => handlePress('/')} isOperator />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="×" onPress={() => handlePress('*')} isOperator />
      </View>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="-" onPress={() => handlePress('-')} isOperator />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="." onPress={() => handlePress('.')} />
        <Button title="%" onPress={handlePercentage} />
        <Button title="+" onPress={() => handlePress('+')} isOperator />
      </View>
      <View style={styles.buttonRow}>
        <Button title="AC" onPress={clearInput} buttonStyle={{ backgroundColor: '#D0D1D6' }} />
        <Button title="C" onPress={clearLastDigit} buttonStyle={{ backgroundColor: '#D0D1D6' }} />
        <Button title="=" onPress={calculateResult} isOperator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  displayContainer: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  display: {
    fontSize: 48,
    color: '#000000',
    textAlign: 'right',
    height: 75,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
});

export default Calculator;