import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { fetchRecipes } from "../../store/recipesSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeInput = ({ inputText, setInputText }) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);

  const onChange=(value)=>{
    setInputText(value)
    console.log(value)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search any recipe"
        value={inputText}
        onChangeText={(value)=>onChange(value)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.icon}>
        <Feather name="search" size={22} />
      </TouchableOpacity>
    </View>
  );
};
export default HomeInput;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,

    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: "rgba(192, 192, 192, 0.3)",
    borderRadius: 999,
  },
  input: {
    maxWidth: "85%",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
