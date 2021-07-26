import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import profile from "./assets/profile.png";
import home from "./assets/home.png";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ justifyContent: "flex-start", padding: 20, marginTop: 10 }}
      >
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

        <View>
          {
            //Tab bar Buttons...
          }
          {TabButton()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const TabButton = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: "white",
          paddingLeft: 20,
          paddingRight: 40,
          borderBottomEndRadius: 8,
        }}
      >
        <Image source={home} style={{ width: 25, height: 25 }}></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
          }}
        >
          Home
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
