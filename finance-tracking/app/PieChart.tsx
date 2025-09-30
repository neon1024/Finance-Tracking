import { Dimensions, Platform, View } from "react-native";

import Expense from "./Expense";

const platform = Platform.OS;

const VictoryPie =
    platform === "web"
        ? require("victory").VictoryPie
        : require("victory-native").VictoryPie;

type PieChartProps = {
    data: Expense[];
};

// TODO convert PieChart into a class in order to access its colors to display them in the category section on Expenses page

export default function PieChart({ data }: PieChartProps) {
    const { width } = Dimensions.get("window"); // full screen width

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <VictoryPie
                data={data.map((item) => ({
                    category: item.getCategory(),
                    total: item.getCost(),
                }))}
                x="category"
                y="total"
                width={platform === "web" ? width * 0.25 : width * 0.5}
                height={platform === "web" ? width * 0.25 : width * 0.5}
                colorScale={["#00ffff", "#ff007f", "#ffbf00", "#00ff7f"]}
                innerRadius={50} // donut effect
                labelRadius={80}
                style={{
                    labels: { fill: "black", fontSize: 16, fontWeight: "bold" },
                }}
            />
        </View>
    );
}
