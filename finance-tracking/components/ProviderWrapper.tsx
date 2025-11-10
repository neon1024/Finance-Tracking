import { ReactNode } from "react";
import { PaperProvider } from "react-native-paper";

export default function ProviderWrapper({ children }: { children: ReactNode }) {
    return <PaperProvider>{children}</PaperProvider>;
}
