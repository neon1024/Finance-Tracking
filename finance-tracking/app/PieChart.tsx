import { Dimensions, Platform, View } from "react-native";

const VictoryPie =
    Platform.OS === "web"
        ? require("victory").VictoryPie
        : require("victory-native").VictoryPie;

type PieChartProps = {
    data: { category: string; total: number }[];
};

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
                data={data}
                x="category"
                y="total"
                width={width * 0.25}
                height={width * 0.25}
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
