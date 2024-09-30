import { StyleSheet, Text, View } from "react-native";

export function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🐛🐛🐛🐛🐛🐛🐛🐛</Text>
    </View>
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
