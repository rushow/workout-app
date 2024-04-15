import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from "react-native";
import React, {useContext} from "react";
import FitnessCards from "../components/FitnessCards";
const HomeScreen = () => {
    // const {
    //     minutes,
    //     calories,
    //     workout,
    // } = useContext(FitnessItems);

    return (
        <ScrollView style={styles.homeContainer}>
            <View style={styles.homePanel}>
                <Text style={styles.homeTitle}>Home Workout</Text>


                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.headerCount}>0</Text>
                        <Text style={styles.headerSubtext}>WORKOUTS</Text>
                    </View>
                    <View>
                        <Text style={styles.headerCount}>0</Text>
                        <Text style={styles.headerSubtext}>KCAL</Text>
                    </View>
                    <View>
                        <Text style={styles.headerCount}>0</Text>
                        <Text style={styles.headerSubtext}>MINS</Text>
                    </View>
                </View>

                {/*<View style={styles.headerImageContainer}>*/}
                {/*    <Image*/}
                {/*        style={styles.headerImage}*/}
                {/*        source={{*/}
                {/*            uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</View>*/}

                <FitnessCards />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 30,
    },
    homePanel: {
        backgroundColor: "#CD853F",
        padding: 10,
        width: "100%",
    },
    homeTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    headerCount: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
    },
    headerSubtext: {
        color: "#D0D0D0",
        fontSize: 17,
        marginTop: 6
    },
    headerImageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerImage: {
        width: "90%",
        height: 120,
        marginTop: 20,
        borderRadius: 7,
    }
});