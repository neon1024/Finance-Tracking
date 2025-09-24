import { FlatList, StyleSheet, Text, View } from "react-native";
import Expense from "./Expense";

// TODO use FlashList for better performance

export default function Expenses() {
    return (
        <View style={styles.container}>
            <Text>Expenses</Text>
            <FlatList
                style={{
                    flex: 1,
                }}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                data={[
                    new Expense({ name: "Breakfast", cost: 10 }),
                    new Expense({ name: "Lunch", cost: 20 }),
                    new Expense({ name: "Dinner", cost: 15 }),
                    new Expense({ name: "Gas", cost: 30 }),
                    new Expense({ name: "Groceries", cost: 40 }),
                ]}
                renderItem={({ item }) => <Text>{item.toString()}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
