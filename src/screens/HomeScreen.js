import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import BrandCard from "../components/brand/BrandCard";
import { Colors } from "../constants/Colors";
import { useBrands } from "../hooks/useBrands";

export default function HomeScreen({ navigation }) {
  const { data: brands = [], isLoading, isRefetching, refetch, error } = useBrands();

  const handleBrandPress = (brand) => {
    navigation.navigate("BrandDetail", {
      brandId: brand.id,
      brandName: brand.name,
    });
  };

  const renderBrandCard = ({ item }) => (
    <BrandCard brand={item} onPress={handleBrandPress} />
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Top Brands Today</Text>
      <Text style={styles.headerSubtitle}>
        Discover amazing brands and their stories
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.gradients.primary}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={styles.loadingText}>Loading brands...</Text>
            </View>
          ) : (
            <FlatList
              data={brands}
              renderItem={renderBrandCard}
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={renderHeader}
              refreshControl={
                <RefreshControl
                  refreshing={isRefetching}
                  onRefresh={refetch}
                  colors={[Colors.primary]}
                />
              }
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <Text style={styles.emptyStateText}>No brands found</Text>
                  <Text style={styles.emptyStateSubtext}>
                    Pull down to refresh and try again
                  </Text>
                </View>
              }
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  safeArea: { flex: 1 },
  headerContainer: { padding: 20, alignItems: "center" },
  headerTitle: { fontSize: 28, fontWeight: "800", color: Colors.textInverse },
  headerSubtitle: { fontSize: 16, color: Colors.textInverse, opacity: 0.9 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, color: Colors.textInverse },
  emptyState: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyStateText: { fontSize: 20, color: Colors.textInverse },
  emptyStateSubtext: { fontSize: 14, color: Colors.textInverse, opacity: 0.8 },
});
