import React, { FC } from "react";
import { Button } from "react-native";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
interface ButtonProps {
  title: string;
  onPress: () => void;
  stylesButton: string;
  stylesTitle: string;
  borderColor: string;
}
export const ButtonComponent: FC<ButtonProps> = (props) => {
  return (
    <View
      onTouchStart={props.onPress}
      style={[
        styles.containerButton,
        { backgroundColor: props.stylesButton, borderColor: props.borderColor },
      ]}
    >
      <Text style={[styles.text, { color: props.stylesTitle }]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    textAlign: "center",
    marginHorizontal:5
  },
  text: {
    fontSize: 15,
    padding: 10,
  },
});
