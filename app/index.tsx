import { Redirect } from "expo-router";

export default function Index() {
    // Redirect directly to the (tabs) group
    return <Redirect href="/(tabs)" />;
}