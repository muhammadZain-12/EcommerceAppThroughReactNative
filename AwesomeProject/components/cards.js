import React from "react"
import { View,Image,Text,TouchableOpacity } from "react-native"

function Cards (props) {

   const {data} = props



   return (
        
            <TouchableOpacity style={{width:"48%",height:220,padding:10,margin:3,marginTop:5,borderRadius:10,borderWidth:1,borderColor:'black'}} >
                    
                 
                <Image resizeMode="contain" source={{ uri:data.image }} style={{height:120,width:'100%'}} />
                <Text style={{color:"black"}} numberOfLines={1} >{data.title}</Text>
                <Text style={{color:"black",marginTop:5}} >Price : {data.price}</Text>
                <TouchableOpacity style={{borderWidth:1,padding:5,borderRadius:10,marginTop:5,backgroundColor:"skyblue"}} >
                    <Text style={{color:"black",textAlign:"center"}} >More Details</Text>
                
                </TouchableOpacity>
                

            </TouchableOpacity>
        )

   

}

export default Cards