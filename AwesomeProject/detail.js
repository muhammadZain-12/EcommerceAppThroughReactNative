import React from 'react'
import { View,Image,Text,TouchableOpacity } from "react-native"


const ItemDetail = ({navigation, route}) => {
    const data = route.params
    console.log(data, 'dataaaaa')
    return (
        <View>
            <Image resizeMode="contain" source={{ uri:data.image }} style={{height:120,width:'100%'}} />
                <Text style={{color:"black"}} numberOfLines={1} >{data.title}</Text>
                <Text style={{color:"black",marginTop:5}} >Price : {data.price}</Text>
        </View>
    )
}


export default ItemDetail