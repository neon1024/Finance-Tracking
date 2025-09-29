import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 32, // so content isn't cut at bottom
    },
});

export const monthPickerAndAddExpenseButtonStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
    },
    monthButton: {
        backgroundColor: "black",
        borderColor: "cyan",
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        minWidth: 150,
    },
    addExpenseButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "cyan",
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        minWidth: 180,
        justifyContent: "space-between",
    },
    addExpenseButtonText: {
        color: "#fff",
        fontSize: 20,
    },
});

export const visualizationStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,

        paddingLeft: 16,
        paddingRight: 16,

        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
    },

    titleText: {
        fontSize: 24,
        color: "cyan",

        padding: 16,
    },

    totalText: {
        fontSize: 24,
        color: "cyan",

        padding: 16,
    },
});

export const categoriesStyles = StyleSheet.create({
    container: {
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        marginTop: 16,

        paddingLeft: 16,
        paddingRight: 16,

        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
    },

    item: {
        margin: 8,
        padding: 16,

        backgroundColor: "black",
        color: "cyan",

        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "cyan",
    },
});

export const expensesStyles = StyleSheet.create({
    container: {
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        marginTop: 16,

        paddingLeft: 16,
        paddingRight: 16,

        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
    },

    deleteAndViewAllButtonsContainer: {
        width: "100%",

        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        marginTop: 8,
        marginBottom: 8,

        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "blue",
    },

    deleteButton: {
        backgroundColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "cyan",
        borderRadius: 16,
        padding: 8,
    },

    viewAllButton: {
        backgroundColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "cyan",
        borderRadius: 16,
        padding: 16,
        fontSize: 16,
        color: "cyan",
    },

    itemContainer: {
        width: "100%",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "black",

        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "cyan",

        padding: 16,

        marginBottom: 4,
    },

    itemCheckbox: {},

    itemText: {
        color: "cyan",
        fontSize: 16,
    },
});
