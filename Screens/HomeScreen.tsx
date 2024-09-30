import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../Navigator/RootStackNavigation';

type prop = NativeStackScreenProps<RootStackParamList>;

export function HomeScreen({ navigation }: prop) {
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
