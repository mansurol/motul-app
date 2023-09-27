import { Camera } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation from react-navigation

export default function CApp() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null); // State to store captured photo
  const cameraRef = useRef(null);
  const navigation = useNavigation(); // Access the navigation prop

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const toggleCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      // You can handle the captured photo data as needed (e.g., save it, display it, etc.)
      console.log("Captured photo data:", photoData);

      // Set the captured photo data in state
      setCapturedPhoto(photoData.uri);
      setCameraVisible(false); // Hide the camera preview
    }
  };

  if (hasCameraPermission === null) {
    return <View style={styles.container} />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {cameraVisible ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={capturePhoto}
            >
              <FontAwesome name="camera" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={toggleCamera}
            >
              <FontAwesome name="refresh" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : capturedPhoto ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: capturedPhoto }} style={styles.capturedImage} />
        </View>
      ) : null}
      {capturedPhoto ? null : (
        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={() => setCameraVisible(true)}
        >
          <Text style={styles.text}>Take Selfie</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  toggleButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
  },
  captureButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  imageContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  capturedImage: {
    width: 300,
    height: 350,
    marginBottom: 20,
  },
  buttonTwo: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
