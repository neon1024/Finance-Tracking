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

export const addExpenseModalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)", // dim background
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",

        backgroundColor: "#fff",

        width: "80%",
        maxWidth: 350,

        borderRadius: 16,
    },

    closeButtonContainer: {
        width: "100%",

        flexDirection: "row",

        justifyContent: "flex-end",
        alignItems: "center",
    },

    closeButton: {
        padding: 16,

        backgroundColor: "black",

        borderRadius: 16,

        marginTop: 16,
        marginRight: 16,
    },

    titleText: {
        fontSize: 24,
    },

    formContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        borderStyle: "solid",
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#000",

        padding: 16,

        margin: 16,
    },

    input: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 16,

        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,

        margin: 4,
    },

    addButton: {
        backgroundColor: "#000",
        borderRadius: 16,

        padding: 16,

        marginBottom: 16,
    },

    addButtonText: {
        color: "#0ff",

        fontSize: 16,
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
