import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

const HomeScreenNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        </Stack.Navigator>
    );
};

export default HomeScreenNavigation;

const styles = StyleSheet.create({});
