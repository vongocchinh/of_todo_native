import React, { FC } from "react";
import { TextInputComponent, TextInput } from "react-native";
import { Text, View } from "./Themed";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";

interface InputProps extends RNTextInputProps {
  label?: string;
  defaultValue?: string;
  placeholder:string
}
export const Input: FC<InputProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          onBlur={props.onBlur}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          style={[styles.input]}
          placeholder={props.placeholder}
        />
      </View>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: "center",
    width: "100%",
    marginVertical:10,
  },
  containerInput: {
    width: "100%",
    borderBottomWidth:1,
    borderColor:"blue",

  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius:7,
    color:"blue",
    fontSize:15
  },
});
