import React, { FC } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Login from "../screens/Login/Login";
import Navigation from "./index";
import { Button, ColorSchemeName } from "react-native";
import LinkingConfiguration from "./LinkingConfiguration";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail/Detail";
import { Text } from "../components/Themed";
import { useNavigation } from '@react-navigation/native';
interface appProps {
  colorScheme: ColorSchemeName;
}
const Stack = createNativeStackNavigator<RootStackParamList>();
const App: FC<appProps> = ({ colorScheme }) => {
  // const navigation = useNavigation();
  return (
    <>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="Social" component={Navigation}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen
            options={{
              headerBackVisible:true,
              headerTitle: (props) => <Text>{props.children}</Text>,
              // headerRight: () => (
              //   <Button
              //     onPress={() =>{} }
              //     title="Back"
              //     color="blue"
              //   />
              // ),
            }}
            name="Detail"
            component={Detail}
          ></Stack.Screen>
          {/* {true ?  : } */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
