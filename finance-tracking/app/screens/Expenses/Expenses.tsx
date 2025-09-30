import { Octicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Button, Menu, Provider } from "react-native-paper";

import { FlatList, Modal } from "react-native";

import Expense from "../../Expense";
import PieChart from "../../PieChart";

import {
    addExpenseModalStyles,
    categoriesStyles,
    expensesStyles,
    monthPickerAndAddExpenseButtonStyles,
    styles,
    visualizationStyles,
} from "./Expenses.styles";

import { Picker } from "@react-native-picker/picker";

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

    // keep the data "constant" from re rendering
    const [dummyData] = useState([
        new Expense({ name: "pizza", category: "food", cost: 650 }),
        new Expense({ name: "rent", category: "bills", cost: 1800 }),
        new Expense({ name: "gas", category: "car", cost: 500 }),
        new Expense({ name: "shoes", category: "misc", cost: 250 }),
    ]);

    let total: number = 0;
    dummyData.forEach((data) => (total += data.getCost()));

    const [selectedExpenses, setSelectedExpenses] = useState<string[]>([]);

    const [addExpenseModalVisibility, setAddExpenseModalVisibility] =
        useState(false);

    const [expenseName, setExpenseName] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseCost, setExpenseCost] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <Provider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={monthPickerAndAddExpenseButtonStyles.container}>
                    <Menu
                        visible={menuVisible}
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
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",

                                        width: "100%",

                                        margin: 4,

                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                    }}
                                >
                                    <Text>Category</Text>

                                    <Picker
                                        selectedValue={selectedCategory}
                                        onValueChange={(category) =>
                                            setSelectedCategory(category)
                                        }
                                        style={{
                                            color: "cyan",
                                            backgroundColor: "#000",
                                            borderRadius: 16,

                                            paddingTop: 4,
                                            paddingBottom: 4,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                        }}
                                    >
                                        {dummyData.map((expense) => {
                                            const category =
                                                expense.getCategory();
                                            return (
                                                <Picker.Item
                                                    key={category}
                                                    label={category}
                                                    value={category}
                                                />
                                            );
                                        })}
                                    </Picker>
                                </View>

                                <TextInput
                                    style={addExpenseModalStyles.input}
                                    placeholder="Cost"
                                    value={expenseCost}
                                    onChangeText={(text) => {
                                        // only allow numbers or empty string
                                        if (
                                            /^(0|[1-9]\d*)?$/.test(text) ||
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
                    <PieChart data={dummyData} />
                    <Text style={visualizationStyles.totalText}>
                        Total -${total}
                    </Text>
                </View>

                <View style={categoriesStyles.container}>
                    <FlatList
                        horizontal={true}
                        data={dummyData}
                        renderItem={({ item }) => (
                            <Text style={categoriesStyles.item}>
                                {item.getCategory()}
                            </Text>
                        )}
                        keyExtractor={(item) => item.getId()}
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
                        data={dummyData}
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
