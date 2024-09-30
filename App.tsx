import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNavigation from "./Navigator/RootStackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNavigation />
    </NavigationContainer>
  );
}
