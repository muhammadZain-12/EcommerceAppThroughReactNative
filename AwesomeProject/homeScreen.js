import React, { useCallback, useEffect } from "react"
import { View,Text,StyleSheet,TextInput,Image,ScrollView, TouchableOpacity } from "react-native"
import axios from "axios"
import Cards from "./components/cards"


function HomeScreen () { 

const [data,setData] = React.useState([])
const [categories,setCategories] = React.useState([])
const [searchItem,setSearchItem] = React.useState([])
const [searchValue,setSearchValue] = React.useState('')


const getDataFromApi = () => axios 
.get("https://fakestoreapi.com/products").then((success)=>{
    
    setData(success.data)
    getCategories()


}).catch((error)=>{
    console.log(error,"error")
})



useEffect(()=>{
    getDataFromApi()
},[])


const getCategories = () =>{
    let item = []
    
    data && data.map((e,i)=>{   
        item.push(e.category)
        
    })

    item = [...new Set([...item])]

    setCategories(item.map((e,i)=>{
        return {
            txt : e
        }
    }))
    

    // setCategories(item)
}


// const getClickedCategory = (event,ind) => {
//     setCategories(categories.map((e,i)=>{
//         if(ind==i){
//             return {
//                 txt : e,
//                 clicked: e.clicked ? false:true
//             }

//         }
//         else{
//             return {
//                 txt : e,
//                 clicked : false 
//             }
//         }

//     }))
// }



useEffect (()=>{

    setSearchItem(data.filter((e,i)=>{
        if(e.title.includes(searchValue)){
            return e
        }
    }))


},[searchValue])





    return (

        

        <View style={styles.Container} >
            <View style={styles.innerContainer} >
                <View style={{flexDirection:"row",borderWidth:1,borderColor:"black",justifyContent:"center",alignItems:"center",borderRadius:30,backgroundColor:"rgba(210,210,210,0.3)"}} >
                <Image source={require("./Assets/searchIcon.png")} style={{width:50,height:50}} />
                <TextInput onChangeText={setSearchValue} style={styles.textInput}  placeholder="What are you looking for?" placeholderTextColor={"black"} />
                </View>

                <ScrollView style={{height:"100%"}} >
                <View style={{width:"100%",height:"100%",flexDirection:"row",flexWrap:"wrap",backgroundColor:"white",marginTop:15,justifyContent:"space-between"}}> 
                
                

                    {searchItem&&searchItem.length>0?searchItem.map((e,i)=>{
                        return (
                            <Cards key={i} data={e} />
                        )
                    })
                    


                    :
                    data && data.length>0 && data.map((e,i)=>{
                            
                            return (
                                <Cards key={i} data={e} />
                                
                            )
                    
                    })
                    
                    } 
                 </View>
                    </ScrollView>
                
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({

    Container:{
        backgroundColor:"white",
        width:"100%",
        height:"100%",
        alignItems:"center"

        
    },
    innerContainer:{
        width:"90%",
        height:"100%",
        padding:10,
        marginTop:25
        
    },
    textInput:{
        textAlign:"center",
        color:"black"
    }

})


export default HomeScreen