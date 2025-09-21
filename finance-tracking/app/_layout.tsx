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
                        title: "Home",

                        drawerIcon: ({ size }) => (
                            <Octicons name="home" size={size} color="cyan" />
                        ),

                        headerTitle: "Finance Tracking",
                    }}
                />
                <Drawer.Screen
                    name="account"
                    options={{
                        title: "Account",

                        drawerIcon: ({ size }) => (
                            <Octicons name="person" size={size} color="cyan" />
                        ),

                        headerTitle: "Account",
                    }}
                />
                <Drawer.Screen
                    name="income"
                    options={{
                        title: "Income",

                        drawerIcon: ({ size }) => (
                            <Octicons
                                name="arrow-up-right"
                                size={size}
                                color="cyan"
                            />
                        ),

                        headerTitle: "Income",
                    }}
                />
                <Drawer.Screen
                    name="expenses"
                    options={{
                        title: "Expenses",

                        drawerIcon: ({ size }) => (
                            <Octicons
                                name="arrow-down-right"
                                size={size}
                                color="cyan"
                            />
                        ),

                        headerTitle: "Expenses",
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
