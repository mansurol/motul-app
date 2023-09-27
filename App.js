import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screen/LoginScreen";
import ActivityScreen from "./Screen/ActivityScreen";
import CApp from "./Screen/CApp";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Screen/Utility/Router";
import StackNav from "./Screen/Utility/navigation/Stacknavigation";
import Attendance from "./Screen/Attendance";

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Attendance />
      </NavigationContainer>
    </View>
  );
}
