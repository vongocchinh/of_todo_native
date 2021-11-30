import React, { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

interface DetailProps{
    title:string,
    children:ReactNode
}
export const  DetailIcon:FC<DetailProps>=(props)=> {
    return (
        <View style={style.container}>
            <Text style={style.title} >{props.title}</Text>
            <View style={style.description_link}>
                    {props.children}
            </View>
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
    description_link:{
        width: "100%",
        height: "auto",
        justifyContent:"space-around",
        alignItems:'center'
    }
})