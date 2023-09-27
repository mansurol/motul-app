import { Camera } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Attendance() {
  const [workArea, setWorkArea] = useState("");
  const [photoUri, setPhotoUri] = useState(null);

  const handleWorkAreaChange = (text) => {
    setWorkArea(text);
  };

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

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
      console.log("Captured photo data:", photoData);
      setCapturedPhoto(photoData.uri);
      setCameraVisible(false);
    }
  };

  if (hasCameraPermission === null) {
    return <View style={styles.container} />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = () => {
    console.log("Work Area/Station:", workArea);
    console.log("Photo URI:", capturedPhoto);
    // Add further logic to handle the submission
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginTop: 15 }}>
          <Text
            style={{
              textAlign: "center",
              color: "red",
              fontSize: 35,
              fontWeight: "800",
            }}
          >
            Attendance
          </Text>
        </View>

        <View style={{ marginTop: 10, marginHorizontal: "8%" }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Work Area/Station:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter work area/station"
              onChangeText={handleWorkAreaChange}
              value={workArea}
            />
          </View>

          <View>
            <Text style={styles.label}>Selfie:</Text>

            <View>
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
                  <Image
                    source={{ uri: capturedPhoto }}
                    style={styles.capturedImage}
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {!cameraVisible && !capturedPhoto && (
                <TouchableOpacity
                  style={styles.buttonTwo}
                  onPress={() => setCameraVisible(true)}
                >
                  <Text style={styles.text}>Take Selfie</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "100%",
    backgroundColor: "#B4C7E7",
  },
  inputContainer: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "900",
    color: "red",
    textAlign: "left",
  },
  input: {
    height: 40,
    width: 320,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginTop: 5,
  },

  camera: {
    flex: 0,
    width: "100%",
    height: "82%",
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
    textAlign: "center",
  },
  imageContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  capturedImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonTwo: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
    width: 120,
  },
  submitButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  submitButtonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
