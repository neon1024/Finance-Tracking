import { Octicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    swipeEnabled: true,

                    drawerItemStyle: { margin: 8 },
                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerLabel: "Home",

                        headerTitle: "Finance Tracking",

                        drawerIcon: ({ size }) => (
                            <Octicons name="home" size={size} color="cyan" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="account"
                    options={{
                        drawerLabel: "Account",

                        headerTitle: "Account",

                        drawerIcon: ({ size }) => (
                            <Octicons name="person" size={size} color="cyan" />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="income"
                    options={{
                        drawerLabel: "Income",

                        headerTitle: "Income",

                        drawerIcon: ({ size }) => (
                            <Octicons
                                name="arrow-up-right"
                                size={size}
                                color="cyan"
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="expenses"
                    options={{
                        drawerLabel: "Expenses",

                        headerTitle: "Expenses",

                        drawerIcon: ({ size }) => (
                            <Octicons
                                name="arrow-down-right"
                                size={size}
                                color="cyan"
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="+not-found"
                    options={{
                        drawerItemStyle: { display: "none" },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
