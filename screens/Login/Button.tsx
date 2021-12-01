import React, { FC } from 'react'
import { Text, View } from '../../components/Themed'
import { StyleSheet, TouchableHighlight } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    title: string;
    colorBackGround: string;
    colorText: string;
    borderBackGround: string;
}
export const ButtonComponent: FC<ButtonProps> = ({ onPress, title, colorBackGround, colorText, borderBackGround }) => {
    return (
        <TouchableHighlight underlayColor="white" style={[styles.container, { backgroundColor: colorBackGround, borderColor: borderBackGround }]} onPress={onPress}>
            <Text style={[styles.title, { color: colorText }]} >{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "auto",
        paddingVertical: 10,
        textAlign: 'center',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 7
    },
    title: {
        fontSize: 14,
        textAlign: "center"
    }
})