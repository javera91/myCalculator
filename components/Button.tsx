import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isOperator?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, isOperator = false, buttonStyle, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isOperator ? styles.operatorButton : styles.numberButton, buttonStyle, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isOperator ? styles.operatorText : styles.numberText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    margin: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  numberButton: {
    backgroundColor: '#FFFFFF',
  },
  operatorButton: {
    backgroundColor: '#4B5EFC',
  },
  buttonText: {
    fontSize: 24,
  },
  numberText: {
    color: '#000',
  },
  operatorText: {
    color: '#FFF',
  },
});

export default Button;