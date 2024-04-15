import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FitnessCards = () => {
    const FitnessData = fitness;
    return (
        <View>
            {FitnessData.map((item, key) => (
                <Pressable style={styles.card} key={key}>
                    <Image style={styles.cardImg} source={{ uri: item.image }} />
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <MaterialCommunityIcons style={styles.cardIcon} name="lightning-bolt" size={24} color="black" />
                </Pressable>

            ))}
        </View>
    );
}

export default FitnessCards;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    cardTitle: {
        position: "absolute",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        left: 20,
        top: 20,
    },
    cardImg: {
        width: "95%",
        height: 140,
        borderRadius: 7
    },
    cardIcon: {
        position: "absolute",
        color: "white",
        bottom: 15,
        left:20
    }
});