import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button, Menu, Provider } from "react-native-paper";

import { FlatList } from "react-native";

import Expense from "./Expense";
import PieChart from "./PieChart";

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

    const dummyData = [
        new Expense({ name: "pizza", category: "food", cost: 650 }),
        new Expense({ name: "rent", category: "bills", cost: 1800 }),
        new Expense({ name: "gas", category: "car", cost: 500 }),
        new Expense({ name: "shoes", category: "misc", cost: 250 }),
    ];

    let total: number = 0;
    dummyData.forEach((data) => (total += data.getCost()));

    return (
        <Provider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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

                <View style={visualizationStyles.visualizationContainer}>
                    <Text style={visualizationStyles.titleText}>Overview</Text>
                    <PieChart data={dummyData} />
                    <Text style={visualizationStyles.totalText}>
                        Total -${total}
                    </Text>
                </View>

                <Text>Categories</Text>

                <View style={categoriesStyles.categoriesContainer}>
                    <FlatList
                        data={dummyData}
                        renderItem={({ item }) => (
                            <Text>{item.getCategory()}</Text>
                        )}
                        keyExtractor={(item) => item.getCategory()}
                    />
                </View>

                <Text>Recent Expenses</Text>
            </ScrollView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 32, // so content isn't cut at bottom
    },
    monthPickerAndAddExpenseButtonContainer: {
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

const visualizationStyles = StyleSheet.create({
    visualizationContainer: {
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

const categoriesStyles = StyleSheet.create({
    categoriesContainer: {
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        paddingLeft: 16,
        paddingRight: 16,
    },
});
