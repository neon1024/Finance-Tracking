import { Octicons } from "@expo/vector-icons";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// TODO custom drawContent function
// TODO fix the drawer menu items spacing (adjust the padding inside the drawer container)

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{
                                paddingHorizontal: 24,
                            }}
                        >
                            <Octicons
                                name="three-bars"
                                size={24}
                                color="cyan"
                            />
                        </TouchableOpacity>
                    ),

                    swipeEnabled: true,

                    drawerItemStyle: { marginTop: 12 },
                    drawerLabelStyle: {
                        color: "cyan",
                    },
                    drawerActiveBackgroundColor: "black",

                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                })}
                drawerContent={(props) => (
                    <DrawerContentScrollView
                        {...props}
                        contentContainerStyle={{
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <DrawerItem
                                    label=""
                                    onPress={() =>
                                        props.navigation.toggleDrawer()
                                    }
                                    icon={({ size }) => (
                                        <Octicons
                                            name="x"
                                            size={size}
                                            color="cyan"
                                        />
                                    )}
                                />
                                <DrawerItemList {...props} />
                            </View>
                            <View>
                                <DrawerItem
                                    label="Logout"
                                    labelStyle={{ color: "red" }}
                                    icon={({ size }) => (
                                        <Octicons
                                            name="sign-out"
                                            size={size}
                                            color="red"
                                        />
                                    )}
                                    onPress={() => alert("Logout")}
                                />
                            </View>
                        </View>
                    </DrawerContentScrollView>
                )}
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
                <Drawer.Screen
                    name="Expense"
                    options={{
                        drawerItemStyle: { display: "none" },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
