import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screen/LoginScreen";
import ActivityScreen from "./Screen/ActivityScreen";

export default function App() {
  return (
    <View>
      <ActivityScreen />
    </View>
  );
}
