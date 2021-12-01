import React from 'react'
import { View } from '../../components/Themed'
import { StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, "Social">;
export default function Home(props:Props) {
    const onDetail=()=>{
        props.navigation.navigate("Detail",{id:"1"})
    }
    return (
        <View>
            <Button onPress={onDetail} title='next detail' color={"blue"} />
        </View>
    )
}

const styles =StyleSheet.create({
    container:{

    },
    item:{

    }
})
