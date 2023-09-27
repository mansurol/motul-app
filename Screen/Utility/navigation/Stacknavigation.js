import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "../Router";
import CApp from "../../CApp";

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Router.Capp} component={CApp} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
