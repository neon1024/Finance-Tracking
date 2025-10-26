import { StyleSheet, useWindowDimensions } from "react-native";

const { height, width } = useWindowDimensions();

export const containerStyles = StyleSheet.create({
    cardContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",

        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        width: "65%",
        maxWidth: height * 0.5,
        minWidth: height * 0.3,

        borderStyle: "solid",
        borderWidth: 4,
        borderRadius: 16,

        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
    },

    passwordContainer: {
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",

        marginTop: 16,
    },
});

export const inputStyles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 16,

        width: "100%",

        marginTop: 16,
        padding: 8,
    },

    inputPassword: {
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 16,

        width: "80%",

        padding: 8,
    },
});

export const buttonStyles = StyleSheet.create({
    button: {
        borderStyle: "solid",
        borderWidth: 0,
        borderRadius: 16,

        backgroundColor: "black",
        color: "cyan",

        marginTop: 16,

        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
    },
});
