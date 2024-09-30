import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🐛🐛🐛🐛🐛🐛🐛🐛</Text>
    </View>
  );
}

export function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home! 🐛</Text>
      <StatusBar style="auto" />
      <Button title="To Second" onPress={() => navigation.navigate("Second")} />
    </View>
  );
}

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Second" component={SecondScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
