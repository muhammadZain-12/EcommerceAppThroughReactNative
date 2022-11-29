import { useState } from "react"
import { View,Text,StyleSheet,Image, TextInput,TouchableOpacity } from "react-native"
import loginImage from "./Assets/loginTodo.jpg"
import todoLogo from "./Assets/todoLogo.webp"
import { LoginUser } from "./Firebase Method/firebase methods"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

function Login2 ({ navigation }) {

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const getLoginData = () => {
        LoginUser(data).then((success)=>{
            console.log(success,"success")
            navigation.navigate('Todo')
        }).catch((reject)=>{
            console.log(reject)
        })
    }

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={loginImage} />
            <View style={styles.innerContainer} >
            <View style={{paddingLeft:15}} >
            <Text style={styles.textHeading} >
                Login
            </Text>
            <Text style={styles.text} >
                Login to Enter Your Profile
            </Text>
            </View>
            <View style={{padding:0,alignItems:"center"}} >
                <TextInput onChangeText={(e)=>setData({...data,email:e})} style={styles.textInput} placeholder="Email" placeholderTextColor={'black'} />
                <TextInput onChangeText={(e)=>setData({...data,password:e})} style={styles.textInput}  placeholder="Password"  placeholderTextColor={'black'} />
                <Text style={{fontSize:14,color:"black",marginVertical:10,textAlign:"right",width:"90%",color:"blue"}} >Forgot Password?</Text>
                <TouchableOpacity onPress={getLoginData}  style={styles.TouchableOpacity} >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <View style={{alignItems:"center",flexDirection:'row'}} >
            <Text style={[styles.text,{fontSize:16,marginTop:5}]} >Dont Have an Account ? </Text>
            <TouchableOpacity onPress={()=>navigation.push('SignUp')} >
            <Text style={{color:"blue",fontSize:18}} >Sign Up</Text>
            </TouchableOpacity>
            </View>
            <Image source={todoLogo} style={{height:"40%",width:"100%",marginVertical:5}} />

            </View>
            
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        borderColor:"green",
        borderWidth:1,
        backgroundColor:"white"

    },
    image:{
        height:"30%",
        width:"100%"
    },
    innerContainer:{
        backgroundColor:"white",
        height:"70%",
        marginTop:20    
    },
    text:{
        color:"black",
        fontSize:18,
        fontWeight:'500'
    },
    textHeading:{
        color:"black",
        fontSize:32,
        fontWeight:"700"
    },
    textInput:{
        borderBottomColor:"black",
        borderWidth:1,
        width:"90%",
        borderColor:"white",
        color:"black",
        padding:0,
        marginTop:20,
        fontSize:18

    },
    TouchableOpacity:{
        width:"90%",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10,
        backgroundColor:"rgba(80,100,200,0.6)",
        alignItems:"center"

    }
    
})


export default Login2