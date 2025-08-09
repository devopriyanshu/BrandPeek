import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, BrandDetailScreen } from "../screens";
import { Colors } from "../constants/Colors";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.textInverse,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "BrandPeek",
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerShown: false,
            headerTransparent: true,
            headerBlurEffect: "light",
          }}
        />
        <Stack.Screen
          name="BrandDetail"
          component={BrandDetailScreen}
          options={({ route }) => ({
            title: route.params?.brandName || "Brand Details",
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTransparent: true,
            headerBlurEffect: "light",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
