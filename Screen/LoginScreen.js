import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

export default function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/motul-logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>
            <View>
              <Text style={{ paddingBottom: 3, color: "red" }}>User ID:</Text>
              <TextInput
                placeholder="User ID"
                style={styles.input}
                // Add onChangeText and value props to handle user ID input
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <Text style={{ paddingBottom: 3, color: "red" }}>Password:</Text>

              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                // Add onChangeText and value props to handle password input
              />
            </View>
          </View>
        </View>

        <View style={styles.bottomRightContainer}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
            Managed by:
          </Text>
          <Image
            source={require("../assets/motul-logo.png")}
            style={styles.managedByLogo}
            resizeMode="contain"
          />
        </View>
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
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 170,
    height: 150,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  bottomRightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end", // Align to the right
    alignItems: "center", // Center vertically
    marginRight: 10,
    marginBottom: 10, // Add margin to move it up from the bottom
  },
  managedByLogo: {
    width: 100,
    height: 30,
  },
});
