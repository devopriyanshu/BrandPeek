import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';

const BrandCard = ({ brand, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(brand)}
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={Colors.gradients.subtle}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: brand.logo || 'https://via.placeholder.com/60x60/6366F1/FFFFFF?text=' + brand.name?.charAt(0)
              }}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.brandName} numberOfLines={1}>
              {brand.name}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {brand.description}
            </Text>
            {brand.category && (
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{brand.category}</Text>
              </View>
            )}
          </View>
          
          <View style={styles.arrow}>
            <LinearGradient
              colors={Colors.gradients.primary}
              style={styles.arrowGradient}
            >
              <Text style={styles.arrowText}>→</Text>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  gradient: {
    borderRadius: 16,
    padding: 1,
  },
  content: {
    backgroundColor: Colors.surface,
    borderRadius: 15,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  logo: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  brandName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  arrow: {
    width: 32,
    height: 32,
  },
  arrowGradient: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: Colors.textInverse,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BrandCard;