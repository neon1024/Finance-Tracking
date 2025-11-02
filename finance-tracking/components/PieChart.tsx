import { Dimensions, Platform, View } from "react-native";
import Expense from "../models/Expense";

const platform = Platform.OS;
const VictoryPie =
    platform === "web"
        ? require("victory").VictoryPie
        : require("victory-native").VictoryPie;

type PieChartProps = {
    data: Expense[];
};

// TODO redo
export default function PieChart({ data }: PieChartProps) {
    const { width } = Dimensions.get("window");

    // Aggregate expenses by category
    const categoryTotals: Record<string, number> = {};
    data.forEach((item) => {
        const category = item.getCategory().trim();
        categoryTotals[category] =
            (categoryTotals[category] || 0) + item.getCost();
    });

    const baseColors = [
        "#00ffff",
        "#ff007f",
        "#ffbf00",
        "#00ff7f",
        "#d80bebff",
        "#2817c5ff",
        "#ff8c00",
        "#9400d3",
        "#1e90ff",
        "#00fa9a",
    ];

    // Build aggregated data with assigned colors
    const aggregatedData = Object.entries(categoryTotals).map(
        ([category, total], i) => ({
            category,
            total,
            color: baseColors[i], // assign a color directly
        })
    );

    // Color scale matches aggregatedData order
    const colorScale = aggregatedData.map((item) => item.color);

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <VictoryPie
                data={aggregatedData}
                x="category"
                y="total"
                width={platform === "web" ? width * 0.25 : width * 0.5}
                height={platform === "web" ? width * 0.25 : width * 0.5}
                colorScale={colorScale}
                innerRadius={50}
                labelRadius={80}
                style={{
                    labels: { fill: "black", fontSize: 16, fontWeight: "bold" },
                }}
            />
        </View>
    );
}
