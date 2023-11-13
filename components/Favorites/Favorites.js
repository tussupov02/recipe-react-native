import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Favorites = () => {
  const [recipe, setRecipe] = useState([]);
  async function onPress() {
    try {
      const newRecipe = await AsyncStorage.getItem("like");
      if (newRecipe !== null) {
        const recipeArr = JSON.parse(newRecipe);
        setRecipe(recipeArr);
        console.log(recipeArr);
      } else {
        const recipeArr = [];
        setRecipe(recipeArr);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    onPress();
  }, []);
  return (
    <View style={styles.container}>
      {recipe.length > 0 ? (
        <>
          <FlatList
            data={recipe}
            numColumns={2}
            renderItem={({ item }) => {
              return <Recipe recipe={item} />;
            }}
            keyExtractor={(item) => item.idMeal}
            style={styles.recipeList}
            columnWrapperStyle={styles.recipeListColumnWrapper}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="update"
              color="white"
              size={50}
              onPress={onPress}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="update"
              color="white"
              size={50}
              onPress={onPress}
            />
          </View>
          <Text style={styles.text}>Ничего нет </Text>
        </>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    gap: 20,
  },
  recipeList: {
    gap: 18,
  },
  recipeListColumnWrapper: {
    justifyContent: "space-between",
    gap: 12,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    marginTop:50,
  },
  icon: {
    position: "absolute",
    left: "44%",
    backgroundColor: "black",
    borderRadius: 999,
    zIndex:1,
  },
});
