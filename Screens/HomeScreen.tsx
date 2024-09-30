import { Button, StyleSheet, Text, View } from 'react-native';

export function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home! 🐛🐛</Text>
      <Button title="To Second" onPress={() => navigation.navigate('Second')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
