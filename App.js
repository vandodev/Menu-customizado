import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import profile from "./assets/profile.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 20 }}></View>
      <Image
        source={profile}
        style={{ width: 60, height: 60, borderRadius: 10, marginTop: 8 }}
      ></Image>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          marginTop: 20,
        }}
      >
        Elaine husenberg
      </Text>

      <TouchableOpacity>
        <Text
          style={{
            marginTop: 6,
            color: "white",
          }}
        >
          Ver perfil
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
