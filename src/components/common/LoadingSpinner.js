import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';

const LoadingSpinner = ({ 
  size = 'large', 
  color = Colors.primary, 
  text = 'Loading...', 
  showBackground = false,
  gradient = false 
}) => {
  const LoadingContent = () => (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={[styles.text, { color }]}>{text}</Text>}
    </View>
  );

  if (gradient) {
    return (
      <LinearGradient
        colors={Colors.gradients.subtle}
        style={[styles.fullScreen, showBackground && styles.background]}
      >
        <LoadingContent />
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.fullScreen, showBackground && styles.background]}>
      <LoadingContent />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    backgroundColor: Colors.background,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LoadingSpinner;