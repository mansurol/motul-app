import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActivityScreen() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <SafeAreaView>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: 30,
                fontWeight: "800",
                fontSize: 35,
                color: "red",
              }}
            >
              Motul Awareness Program 2023
            </Text>
          </View>

          <View style={{ marginVertical: 50 }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: "80%",
                backgroundColor: "red",
                borderWidth: 1,
                borderColor: "black",
                marginHorizontal: 10,
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 7,
                padding: 10,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 25, color: "white", fontWeight: "600" }}>
                Attendance
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                width: "80%",
                backgroundColor: "red",
                borderWidth: 1,
                borderColor: "black",
                marginHorizontal: 10,
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 7,
                padding: 10,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 25, color: "white", fontWeight: "600" }}>
                Survey Form
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                width: "80%",
                backgroundColor: "red",
                borderWidth: 1,
                borderColor: "black",
                marginHorizontal: 10,
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 7,
                padding: 10,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 25, color: "white", fontWeight: "600" }}>
                Campaign
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                width: "80%",
                backgroundColor: "red",
                borderWidth: 1,
                borderColor: "black",
                marginHorizontal: 10,
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 7,
                padding: 10,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 25, color: "white", fontWeight: "600" }}>
                Corporate Activation
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "100%",
    backgroundColor: "#B4C7E7",
    justifyContent: "space-between", // Arrange the two views vertically
  },
});
