// import { StyleSheet, Text, View } from "react-native";
// import React, { useState, useEffect } from "react";
// import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
// import Recipes from "../components/Recipes/Recipes";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Favorites from "../components/Favorites/Favorites";

// const FavoritesScreen = () => {
//   const [recipe, setRecipe] = useState([]);
//   useEffect(() => {
//     (async () => {
//       try {
//         const newRecipe = await AsyncStorage.getItem("like");
//         if (newRecipe !== null) {
//           const recipeArr = JSON.parse(newRecipe);
//           setRecipe(recipeArr);
//           console.log(recipeArr);
//         } else {
//           const recipeArr = [];
//           setRecipe(recipeArr);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     })();
//   }, []);
//   return (
//     <SafeAreaView>
//       <View>
//         {recipe.length > 0 ? (
          
//            <Favorites recipe={recipe}/>
          
//         ) : (
//           <Text>Ничего нет </Text>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default FavoritesScreen;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import Favorites from "../components/Favorites/Favorites";

const FavoritesScreen = () => {
  return (
    <SafeAreaView>
      <Favorites/>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
