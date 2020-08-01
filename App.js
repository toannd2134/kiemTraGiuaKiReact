import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import bacground from "../kiemTraGiuaKi/assets/background.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
export default function App() {
  return (
    <SafeAreaView styles={styles.container}>
      <Image
        style={styles.bacground}
        source={require("../kiemTraGiuaKi/assets/background.jpg")}
      />
      <Text style={styles.headerText}> QUIZ </Text>
      <View style={styles.midView}>
        <TouchableOpacity style={styles.touchStyle}>
          <View style={styles.logostyle}>
            <FontAwesome5 name="bars" size={24} style={styles.iconStyle} />
          </View>
          <Text style={styles.textStyle}> Play quiz</Text>
          <View style={{ width: 40 }}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchStyle}>
          <View style={styles.mutiStyle}>
            <FontAwesome5
              name="user-friends"
              size={24}
              style={styles.iconStyle}
            />
          </View>
          <Text style={styles.textStyle}>Multiplayer 1 to 1 </Text>
          <View style={{ width: 40 }}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchStyle}>
          <View style={styles.catgoryStyle}>
            <FontAwesome5 name="chart-bar" size={24} style={styles.iconStyle} />
          </View>
          <Text style={styles.textStyle}>More categories </Text>
          <View style={{ width: 40 }}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchStyle}>
          <View style={styles.charStyle}>
            <FontAwesome5 name="chart-bar" size={24} style={styles.iconStyle} />
          </View>
          <Text style={styles.textStyle}>More categories </Text>
          <View style={{ width: 40 }}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View></View>
        <View style={styles.borromlogoStyle}>
          <FontAwesome5 name="cog" size={24} style={styles.iconStyle} />
          <Text> Setting</Text>
        </View>
        <View style={styles.borromlogoStyle1}>
          <FontAwesome5 name="info-circle" size={24} style={styles.iconStyle} />
          <Text> About</Text>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bacground: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "red",
    fontSize: 40,
    textAlign: "center",
    padding: 90,
    fontWeight: "bold",
    height: 30,
  },
  midView: {
    alignItems: "center",
    marginBottom: 30,
  },
  touchStyle: {
    marginTop: 30,
    backgroundColor: "white",
    width: 300,
    height: 50,
    justifyContent: "space-between",

    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    width: 200,
  },
  iconStyle: {
    alignSelf: "center",
  },
  logostyle: {
    backgroundColor: "#03a9f4",
    width: 48,
    height: 46,
    justifyContent: "center",
    borderRadius: 30,
    marginLeft : 3
  },
  mutiStyle: {
    backgroundColor: "#ff5722",
    width: 48,
    height: 46,
    justifyContent: "center",
    borderRadius: 30,
    marginLeft : 3
  },
  catgoryStyle: {
    backgroundColor: "#9c27b0",
    width: 48,
    height: 46,
    justifyContent: "center",
    borderRadius: 30,
    marginLeft : 3
  },
  charStyle: {
    backgroundColor: "#58b458",
    width: 48,
    height: 46,
    justifyContent: "center",
    borderRadius: 30,
    marginLeft : 2
  },
  bottomView: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  borromlogoStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft : 30
  },
  borromlogoStyle1: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight : 30
  },
});
