import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../assets/constants/colors";

const Ingredients = ({ recipe }) => {
    return (
        <View>
            <Text style={styles.subhead}>Ingredients</Text>
            {[...Array(20).keys()].map((index) => {
                if (recipe[`strIngredient${index + 1}`]) {
                    return (
                        <View key={index} style={styles.ingredientContainer}>
                            <View style={styles.yellowDot} />
                            <Text style={styles.measure}>
                                {recipe[`strMeasure${index + 1}`]}
                            </Text>
                            <Text style={styles.ingredient}>
                                {recipe[`strIngredient${index + 1}`]}
                            </Text>
                        </View>
                    );
                }
            })}
        </View>
    );
};

export default Ingredients;

const styles = StyleSheet.create({
    subhead: { fontWeight: "800", fontSize: 22, marginBottom: 16 },
    ingredientContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    yellowDot: {
        backgroundColor: colors.amber700,
        borderRadius: 90,
        width: 10,
        height: 10,
    },
    measure: { fontWeight: "800", fontSize: 16 },
    ingredient: { fontSize: 16 },
});
