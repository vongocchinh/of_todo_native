import React, { FC } from 'react'
import { Text, View } from './Themed'
import { StyleSheet } from 'react-native';

interface DetailTextProps{
    title:string;
    description:string;
}
export const  DetailText:FC<DetailTextProps>=(props)=> {
    return (
        <View style={style.container}>
            <Text style={style.title} >{props.title}</Text>
            <Text style={style.description} >{props.description}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:"100%",
        height:"auto",
        flex:1,
        flexDirection:'column'
    },
    title:{
        fontSize:17,
        fontWeight:"600",
        textAlign:"left",
        color:"#000",
        marginVertical:10
    },
    description:{
        fontSize:14,
        width:"100%",
        height: "auto",
        color:"#A4A4A4"
    }
})