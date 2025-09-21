import { Octicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
    return (
        <Drawer screenOptions={{ drawerItemStyle: { margin: 8 } }}>
            <Drawer.Screen
                name="index"
                options={{
                    title: "Home",

                    drawerIcon: ({ size }) => (
                        <Octicons name="home" size={size} color="cyan" />
                    ),

                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerTitle: "Finance Tracking",
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                }}
            />
            <Drawer.Screen
                name="account"
                options={{
                    title: "Account",

                    drawerIcon: ({ size }) => (
                        <Octicons name="person" size={size} color="cyan" />
                    ),

                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerTitle: "Account",
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
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

                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerTitle: "Income",
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
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

                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerTitle: "Expenses",
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                }}
            />
            <Drawer.Screen
                name="+not-found"
                options={{
                    drawerItemStyle: { display: "none" },
                }}
            />
        </Drawer>
    );
}
