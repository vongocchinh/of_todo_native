import React, { FC } from 'react'
import { Text, View } from './Themed'
import { StyleSheet } from 'react-native';

interface NumberProps{
    number:number,
    title:string;
}
export const NumberComponent:FC<NumberProps>=(props)=> {
    return (
        <View style={styles.container}>
            <Text style={styles.number} >{props.number}</Text>
            <Text style={styles.title} >{props.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width: 70,
        height: 70,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
    ,number:{
        fontSize:22,
        fontWeight:"600",
        color:"#000"
    }
    ,title:{
        fontSize:16,
        color:"#A4A4A4",
        textTransform:"capitalize"
    }
})
