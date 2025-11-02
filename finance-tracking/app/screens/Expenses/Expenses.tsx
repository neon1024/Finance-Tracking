import { Octicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { useEffect, useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Button, List, Menu, Provider } from "react-native-paper";

import { FlatList, Modal } from "react-native";

import PieChart from "../../../components/PieChart";
import Expense, { ExpenseData } from "../../../models/Expense";

import {
    addExpenseModalStyles,
    categoriesStyles,
    expensesStyles,
    monthPickerAndAddExpenseButtonStyles,
    styles,
    visualizationStyles,
} from "./Expenses.styles";

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

    const [menuVisibility, setMenuVisibility] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

    const openMenu = () => setMenuVisibility(true);
    const closeMenu = () => setMenuVisibility(false);

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [expenseCategories, setExpenseCategories] = useState<Set<String>>();

    async function fetchExpenses() {
        await fetch("http://localhost:3000/expenses", { method: "GET" })
            .then((response) => response.json())
            .then((json) => {
                const fetchedExpenses = json.map(
                    (expense: any) =>
                        new Expense({
                            name: expense.name,
                            description: expense.description,
                            category: expense.category,
                            cost: expense.cost,
                        })
                );
                setExpenses(fetchedExpenses);

                const fetchedExpenseCategories = new Set<String>();

                for (const expense of fetchedExpenses) {
                    fetchedExpenseCategories.add(expense.getCategory());
                }

                setExpenseCategories(fetchedExpenseCategories);
            })
            .catch((error) => console.log(error));
    }

    // calls fetchExpenses each time the screen renders
    useEffect(() => {
        fetchExpenses();
    }, []);

    function computeTotalExpensesCost() {
        let total: number = 0;

        expenses.forEach((expense) => (total += expense.getCost()));

        return total;
    }

    const [selectedExpenses, setSelectedExpenses] = useState<string[]>([]);

    const [addExpenseModalVisibility, setAddExpenseModalVisibility] =
        useState(false);

    const [expenseName, setExpenseName] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");
    const [expenseCost, setExpenseCost] = useState("");

    return (
        <Provider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={monthPickerAndAddExpenseButtonStyles.container}>
                    <Menu
                        visible={menuVisibility}
                        onDismiss={closeMenu}
                        anchor={
                            <Button
                                mode="outlined"
                                onPress={openMenu}
                                style={
                                    monthPickerAndAddExpenseButtonStyles.monthButton
                                }
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

                    <TouchableOpacity
                        style={
                            monthPickerAndAddExpenseButtonStyles.addExpenseButtonContainer
                        }
                        onPress={() => setAddExpenseModalVisibility(true)}
                    >
                        <Octicons name="plus" size={24} color="#fff" />
                        <Text
                            style={
                                monthPickerAndAddExpenseButtonStyles.addExpenseButtonText
                            }
                        >
                            Add Expense
                        </Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    visible={addExpenseModalVisibility}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => setAddExpenseModalVisibility(false)}
                >
                    <View style={addExpenseModalStyles.overlay}>
                        <View style={addExpenseModalStyles.container}>
                            <View
                                style={
                                    addExpenseModalStyles.closeButtonContainer
                                }
                            >
                                <TouchableOpacity
                                    style={addExpenseModalStyles.closeButton}
                                    onPress={() =>
                                        setAddExpenseModalVisibility(false)
                                    }
                                >
                                    <Octicons
                                        name={"x"}
                                        size={24}
                                        color="cyan"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={addExpenseModalStyles.formContainer}>
                                <View>
                                    <Text
                                        style={addExpenseModalStyles.titleText}
                                    >
                                        Add Expense
                                    </Text>
                                </View>

                                <TextInput
                                    style={addExpenseModalStyles.input}
                                    placeholder="Name"
                                    value={expenseName}
                                    onChangeText={(text) =>
                                        setExpenseName(text)
                                    }
                                />
                                <TextInput
                                    style={addExpenseModalStyles.input}
                                    placeholder="Description"
                                    value={expenseDescription}
                                    onChangeText={(text) =>
                                        setExpenseDescription(text)
                                    }
                                />

                                <TextInput
                                    style={addExpenseModalStyles.input}
                                    placeholder="Category"
                                    value={expenseCategory}
                                    onChangeText={(text) =>
                                        setExpenseCategory(text)
                                    }
                                />

                                <TextInput
                                    style={addExpenseModalStyles.input}
                                    placeholder="Cost"
                                    value={expenseCost}
                                    onChangeText={(text) => {
                                        // only allow numbers or empty string
                                        if (
                                            /^(0|[1-9]\d*)(\.\d*)?$/.test(
                                                text
                                            ) ||
                                            text === ""
                                        ) {
                                            setExpenseCost(text);
                                        }
                                    }}
                                    keyboardType="numeric" // shows numeric keyboard on mobile
                                />
                            </View>

                            <TouchableOpacity
                                style={addExpenseModalStyles.addButton}
                                onPress={() => alert("Add")}
                            >
                                <Text
                                    style={addExpenseModalStyles.addButtonText}
                                >
                                    Add
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={visualizationStyles.container}>
                    <Text style={visualizationStyles.titleText}>Overview</Text>
                    <PieChart data={expenses} />
                    <Text style={visualizationStyles.totalText}>
                        Total -${computeTotalExpensesCost()}
                    </Text>
                </View>

                <View style={categoriesStyles.container}>
                    <FlatList
                        horizontal={true}
                        data={Array.from(expenseCategories ?? [])}
                        renderItem={({ item }) => (
                            <Text style={categoriesStyles.item}>{item}</Text>
                        )}
                        keyExtractor={(item, index) => item + " " + index} // ✅ unique key per item
                    />
                </View>

                <View style={expensesStyles.container}>
                    <View
                        style={expensesStyles.deleteAndViewAllButtonsContainer}
                    >
                        <TouchableOpacity style={expensesStyles.deleteButton}>
                            <Octicons name="trash" size={32} color="cyan" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={expensesStyles.viewAllButton}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ width: "100%" }}
                        data={expenses}
                        renderItem={({ item }) => {
                            const id = item.getId();
                            const isSelected = selectedExpenses.includes(id);

                            return (
                                <View style={expensesStyles.itemContainer}>
                                    <Checkbox
                                        value={isSelected}
                                        onValueChange={() => {
                                            setSelectedExpenses(
                                                (prev) =>
                                                    prev.includes(id)
                                                        ? prev.filter(
                                                              (selectedId) =>
                                                                  selectedId !==
                                                                  id
                                                          )
                                                        : [...prev, id] // check
                                            );
                                        }}
                                        color={isSelected ? "#0ff" : undefined}
                                        style={expensesStyles.itemCheckbox}
                                    />
                                    <Text style={expensesStyles.itemText}>
                                        {item.toString()}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </ScrollView>
        </Provider>
    );
}
