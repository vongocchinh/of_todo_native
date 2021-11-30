import React, { FC } from 'react'
import { Image } from 'react-native';
interface ImagesProps{
    url:string;
    styles:any
}
export const  ImageComponent:FC<ImagesProps>=({url,styles})=> {
    return (
        <Image style={styles}  source={{uri:url}} />
    )
}
