import React from 'react'
import { Text, View } from '../../components/Themed'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;
export default function Detail(props:Props) {
    return (
        <View>
            <Text>Detail:{props.route.params.id}</Text>
        </View>
    )
}
