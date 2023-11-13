import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import AdditionaRecipeDataCard from "../components/AdditionaRecipeDataCard/AdditionaRecipeDataCard";
import Ingredients from "../components/Ingredients/Ingredients";
import VideoInstruction from "../components/VideoInstruction/VideoInstruction";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getRecipeById } from "../lib/getRecipeById";
import AsyncStorage from "@react-native-async-storage/async-storage";

const additionalData = [
  {
    title: "35",
    subtitle: "Mins",
    icon: <Feather name="clock" size={26} />,
  },
  {
    title: "03",
    subtitle: "Servings",
    icon: <Ionicons name="people" size={26} />,
  },
  {
    title: "103",
    subtitle: "Cal",
    icon: <SimpleLineIcons name="fire" size={26} />,
  },
  {
    title: "",
    subtitle: "Easy",
    icon: <Octicons name="stack" size={26} />,
  },
];

const RecipeDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [favor, setFavor] = useState([]);

  const youtubeVideoId = recipe?.strYoutube && recipe.strYoutube.split("=")[1];

  useEffect(() => {
    (async () => {
      const res = await getRecipeById(route.params.recipeId);
      setRecipe(res.meals[0]);
      try {
        const newRecipe = await AsyncStorage.getItem("like");
        if (newRecipe !== null) {
          const recipeArr = JSON.parse(newRecipe);
          setFavor(recipeArr);
          console.log(recipeArr)
        } else {
          const recipeArr = [];
          setFavor(recipeArr);
        }
        // const checkFavorite = favor.filter(
        //   (fav) => fav.idMeal === recipe.idMeal
        // );
        // if (checkFavorite.length < 0) {
        //   setIsFavorite(true);
        // } else {
        //   setIsFavorite(false);
        // }
        // console.log(favor);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(()=>{
    const checkFavorite = favor.filter(
        (fav) => fav.idMeal === recipe.idMeal
      );
      if (checkFavorite.length>0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
  },[favor],[recipe])
  const onClick = async (rec) => {
    try {
      if (isFavorite) {
        const delRecipe = favor.filter((fav) => fav.idMeal !== rec.idMeal);
        setIsFavorite(false);
        setFavor([...delRecipe])
        await AsyncStorage.setItem("like", JSON.stringify(delRecipe));
      } else {
        await AsyncStorage.setItem("like", JSON.stringify([...favor, rec]));
        setFavor([...favor, rec]);
        setIsFavorite(true);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  if (!recipe) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIcon}
        >
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onClick(recipe)}
          style={styles.headerIcon}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            color={isFavorite ? "red" : "#000"}
            size={30}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{recipe.strMeal}</Text>
          <Text style={styles.country}>{recipe.strArea}</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.additionalDataContent}
        >
          {additionalData.map((data, index) => {
            return <AdditionaRecipeDataCard key={index} {...data} />;
          })}
        </ScrollView>
        <Ingredients recipe={recipe} />
        <View>
          <Text style={styles.subhead}>Instruction</Text>
          <Text>{recipe.strInstructions}</Text>
        </View>
        {/* <VideoInstruction videoId={youtubeVideoId} /> */}
      </View>
    </ScrollView>
  );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    left: 20,
    right: 20,
    top: 20,
    zIndex: 1,
  },
  headerIcon: { backgroundColor: "#fff", padding: 8, borderRadius: 99 },
  container: {
    flex: 1,
  },
  recipeImage: {
    alignSelf: "center",
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content: { paddingHorizontal: 15, marginTop: 32, gap: 15 },
  title: { fontWeight: "800", fontSize: 28 },
  subhead: { fontWeight: "800", fontSize: 22, marginBottom: 16 },
  country: { color: "gray", fontSize: 16 },
  additionalDataContent: { width: "100%", justifyContent: "space-around" },
});
