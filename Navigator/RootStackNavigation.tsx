import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../Screens/HomeScreen";
import { SecondScreen } from "../Screens/SecondScreen";

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Second" component={SecondScreen} />
    </RootStack.Navigator>
  );
}
