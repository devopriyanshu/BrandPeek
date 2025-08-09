import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Linking,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import { Colors } from "../constants/Colors";

import { useBrand, useFollowBrand } from "../hooks/useBrands";

const BrandDetailScreen = ({ route, navigation }) => {
  const { brandId } = route.params;

  const { data: brand, isLoading, isError } = useBrand(brandId);

  const followMutation = useFollowBrand();

  const [isFollowing, setIsFollowing] = React.useState(false);

  React.useEffect(() => {
    if (brand) {
      setIsFollowing(brand.isFollowing);
    }
  }, [brand]);

  const handleFollow = () => {
    // Optimistically update
    setIsFollowing((prev) => !prev);

    followMutation.mutate(brandId, {
      onSuccess: () => {
        Alert.alert(
          "Success!",
          isFollowing ? "Unfollowed brand" : "Now following this brand!"
        );
      },
      onError: () => {
        // Revert change on error
        setIsFollowing((prev) => !prev);
        Alert.alert("Error", "Failed to update follow status.");
      },
    });
  };

  const handleWebsitePress = () => {
    if (brand?.website) {
      Linking.openURL(brand.website).catch(() => {
        Alert.alert("Error", "Cannot open website");
      });
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.textInverse} />
        <Text style={styles.loadingText}>Loading brand details...</Text>
      </View>
    );
  }

  if (isError || !brand) {
    Alert.alert("Error", "Failed to fetch brand details");
    navigation.goBack();
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.gradients.brand}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <View style={styles.logoContainer}>
                <Image
                  source={{
                    uri:
                      brand.logo ||
                      `https://via.placeholder.com/100x100/6366F1/FFFFFF?text=${brand.name?.charAt(
                        0
                      )}`,
                  }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.brandName}>{brand.name}</Text>
              <Text style={styles.tagline}>{brand.description}</Text>

              {brand.followers && (
                <Text style={styles.followers}>
                  {brand.followers} followers
                </Text>
              )}
            </View>

            {/* Content Card */}
            <View style={styles.contentCard}>
              <LinearGradient
                colors={Colors.gradients.subtle}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}
              >
                <View style={styles.cardContent}>
                  {/* About Section */}
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.fullDescription}>
                      {brand.fullDescription}
                    </Text>
                  </View>

                  {/* Details Section */}
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Details</Text>

                    {brand.category && (
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Category:</Text>
                        <View style={styles.categoryBadge}>
                          <Text style={styles.categoryText}>
                            {brand.category}
                          </Text>
                        </View>
                      </View>
                    )}

                    {brand.founded && (
                      <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Founded:</Text>
                        <Text style={styles.detailValue}>{brand.founded}</Text>
                      </View>
                    )}

                    {brand.website && (
                      <TouchableOpacity
                        style={styles.detailRow}
                        onPress={handleWebsitePress}
                      >
                        <Text style={styles.detailLabel}>Website:</Text>
                        <Text style={[styles.detailValue, styles.websiteLink]}>
                          Visit Website →
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <View style={styles.buttonContainer}>
                    <Button
                      title={isFollowing ? "Following" : "Follow Brand"}
                      onPress={handleFollow}
                      loading={followMutation.isLoading}
                      gradient={
                        isFollowing
                          ? Colors.gradients.cool
                          : Colors.gradients.brand
                      }
                      style={styles.followButton}
                    />

                    {brand.website && (
                      <Button
                        title="Visit Website"
                        onPress={handleWebsitePress}
                        variant="outline"
                        style={styles.websiteButton}
                      />
                    )}
                  </View>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.textInverse,
    opacity: 0.8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  heroSection: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: 60,
    height: 60,
  },
  brandName: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.textInverse,
    marginBottom: 8,
    textAlign: "center",
  },
  tagline: {
    fontSize: 18,
    color: Colors.textInverse,
    opacity: 0.9,
    textAlign: "center",
    marginBottom: 12,
  },
  followers: {
    fontSize: 14,
    color: Colors.textInverse,
    opacity: 0.8,
    textAlign: "center",
  },
  contentCard: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  cardGradient: {
    borderRadius: 20,
    padding: 2,
  },
  cardContent: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 24,
    flex: 1,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 16,
  },
  fullDescription: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "space-between",
  },
  detailLabel: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "600",
  },
  categoryBadge: {
    backgroundColor: Colors.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
  websiteLink: {
    color: Colors.primary,
  },
  buttonContainer: {
    gap: 12,
    marginTop: 8,
  },
  followButton: {
    width: "100%",
  },
  websiteButton: {
    width: "100%",
  },
});

export default BrandDetailScreen;
