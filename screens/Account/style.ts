import { dimensions } from "../../hooks/BorderRadius";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: "100%",
      height: "auto",
      backgroundColor: "white",
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    container_title: {
      width: "100%",
      height: "auto",
      justifyContent: "center",
      flexDirection: "row",
    },
    title_text: {
      width: "100%",
      textAlign: "center",
      fontSize: 22,
      fontWeight: "600",
      paddingTop: 10,
      paddingBottom: 5,
    },
    title_text_1: {
      width: "100%",
      textAlign: "center",
      fontSize: 16,
      color: "#7F7F7F",
      paddingBottom: 5,
    },
    title_text_2: {
      width: "auto",
      textAlign: "center",
      fontSize: 16,
      color: "#2148C0",
      paddingBottom: 10,
      marginHorizontal:5
    },
    container_avatar: {
      width: "100%",
      height: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
    images: {
      width: 150,
      height: 150,
      resizeMode: "contain",
    },
    container_text_detail: {
      width: "90%",
      height: "autp",
    },
    separator: {
      marginVertical: 10,
      height: 2,
      width: "80%",
    },
    circleView: {
      height: dimensions()._height * 0.2,
      width: dimensions()._height * 0.2,
      borderRadius: dimensions()._borderRadius,
      backgroundColor: "#E1EEF6",
    },
    buttonContainer: {
      marginVertical: 20,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      width: "80%",
    },
    containerNumber: {
      width: "90%",
      height: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    separatorMax: {
      width: "100%",
      marginVertical: 10,
      height: 2,
    },
  });
  