import React from "react";
import { View } from "../../components/Themed";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ButtonComponent } from "./Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
type Props = NativeStackScreenProps<RootStackParamList, "Social">;
export default function Setting(prop: Props) {
  const logout = () => {
    prop.navigation.replace("Login");
  };
  return (
    <View style={styles.container}>
      <ButtonComponent
        borderBackGround="#7F7F7F"
        colorBackGround="#7F7F7F"
        colorText={Colors.dark.text}
        title="Đăng Xuất"
        onPress={logout}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.background,
    flex: 1,
    justifyContent: "center",
  },
});
