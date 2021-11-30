import React, { FC } from 'react'
import { View } from '../../components/Themed'
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SocialProps{

}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }


export const  SocialIcon:FC<SocialProps>=(props)=> {
    return (
        <View style={style.container}>
            <TabBarIcon color='#383A3D' name='twitter-square' />
            <TabBarIcon color='#383A3D' name='instagram' />
            <TabBarIcon color='#383A3D' name='facebook-square' />
            <TabBarIcon color='#383A3D' name='linkedin' />
        </View>
    )
}



const  style=StyleSheet.create({
    container:{
        width: "100%",
        height: "auto",
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:'row',
        marginVertical:5
    }
});