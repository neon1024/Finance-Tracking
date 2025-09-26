import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";
import Expense from "./Expense";

export default function Expenses() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <Provider>
            <View style={styles.container}>
                <View style={styles.monthPickerAndAddExpenseButtonContainer}>
                    <Menu
                        visible={menuVisible}
                        onDismiss={closeMenu}
                        anchor={
                            <Button
                                mode="outlined"
                                onPress={openMenu}
                                style={styles.monthButton}
                                textColor="cyan"
                            >
                                {selectedMonth || "Month"}
                            </Button>
                        }
                        contentStyle={{
                            backgroundColor: "black",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderRadius: 16,
                            borderColor: "cyan",
                        }}
                    >
                        {months.map((month) => (
                            <Menu.Item
                                key={month}
                                onPress={() => {
                                    setSelectedMonth(month);
                                    closeMenu();
                                }}
                                title={month}
                                titleStyle={{ color: "cyan" }}
                            />
                        ))}
                    </Menu>

                    <TouchableOpacity style={styles.addExpenseButtonContainer}>
                        <Octicons name="plus" size={24} color="#fff" />
                        <Text style={styles.addExpenseButtonText}>
                            Add Expense
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>Chart + Total</View>
                <View>Categories</View>
                <View>Recent Expenses</View>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    monthPickerAndAddExpenseButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
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
