import React from "react";
import { Text, View } from "../../components/Themed";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Input } from "./../../components/Input";
import { RootStackParamList } from "./../../types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { ButtonComponent } from "./Button";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;

interface LoginProps {
  userName: string;
  password: string;
}
// const schema =Proty

export default function Login(props: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    // resolver:yupResolver(schema)
  });
  const Login = (data: LoginProps) => {
    if (data.userName === "chinh" && data.password === "chinh") {
      props.navigation.replace("Social");
    }
  };
  const Register = () => {};
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Username"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="userName"
      />
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 5,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <View style={[styles.containerButton, { marginTop: 20 }]}>
        <ButtonComponent
          borderBackGround="blue"
          colorBackGround="blue"
          colorText="white"
          onPress={handleSubmit(Login)}
          title="Login"
        />
      </View>
      <Text>or</Text>
      <View style={styles.containerButton}>
        <ButtonComponent
          borderBackGround="blue"
          colorBackGround="white"
          colorText="blue"
          onPress={Register}
          title="Register"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width:"100%",
    // height:"100%",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    paddingVertical: 20,
  },

  containerInput: {
    width: "80%",
    height: "auto",
  },
  containerButton: {
    width: "100%",
    height: "auto",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 10,
    height: 2,
    width: "100%",
  },
});
