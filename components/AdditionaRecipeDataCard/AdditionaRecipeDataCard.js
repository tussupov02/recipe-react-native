import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../assets/constants/colors";

const AdditionaRecipeDataCard = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>{icon}</View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default AdditionaRecipeDataCard;

const styles = StyleSheet.create({
    container: {
        height: 140,
        alignItems: "center",
        backgroundColor: colors.amber300,
        borderRadius: 90,
        justifyContent: "space-evenly",
        paddingHorizontal: 12,
    },
    iconWrapper: {
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 90,
    },
    textContainer: { alignItems: "center" },
    title: { fontWeight: "800", fontSize: 18 },
    subtitle: { fontWeight: "800", fontSize: 12 },
});
