import { Text,StyleSheet,View,ImageBackground,Image, TextInput,TouchableOpacity,ScrollView} from "react-native"
import Images from "./Assets/todoImage.jpg"
import Logo from "./Assets/logoTodo.jpg"
import { useState } from "react"
import { setWithPriority } from "firebase/database"
import Todo from "./todo"

function TodoApp () {

    
const [input,setInput] = useState('')
const [todo,setTodo] = useState([])

const addTodo = () => {
    setTodo([...todo,{txt:input}])
    setInput('')
}

const deleteTodo = (ind) => {
    setTodo(todo.filter((e,i)=>{
        return i !== ind
    }))
}

const editTodo = (ind) => {
    setTodo(todo.map((e,i)=>{
        if(i===ind){
            return {
                ...e,
                edit: e.edit?false : true
            }
        }
        else{
            return {
                ...e,
                edit:false
            }
        }
    }))
}


const showTodo = todo.map((e,i)=>{
    
    return (
        
                
            <View>
            <TouchableOpacity style={{width:"100%",backgroundColor:'#aabbec',marginTop:5,padding:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} >
            
            {e.edit?<TextInput onChangeText={(events)=>setTodo(todo.map((value,index)=>{
                if(index===i){
                    return{
                        ...value,
                        txt:events
                    }
                }
                else{
                    return value
                }
            }))}  style={{borderColor:"black",borderWidth:1,width:"70%",backgroundColor:"white",fontSize:20,color:"black",textDecoration:"none"}}  />:<Text style={{color:"black",fontSize:18,width:"60%"}} >{e.txt}</Text>}
                <View style={{flexDirection:"row",justifyContent:"space-between",width:"40%",alignitems:"center"}} >
                    <TouchableOpacity onPress={()=>editTodo(i)} >
                        <Text style={{color:"black",fontSize:18,fontWeight:"600"}} >{e.edit?"Save":"Edit"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>deleteTodo(i)}  >
                       {!e.edit ? <Text style={{color:"black",fontSize:18,fontWeight:"600"}} >Delete</Text>:""}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            </View>
        
    )
})



    return(
        
        <View style={styles.Container} >
        <Image style={styles.image} source={Logo} />
        <View style={styles.innerContainer} >
        <Text style={styles.textHeading} >
            TODO APP
        </Text>
        <TextInput value={input} onChangeText={setInput} style={styles.textInput} placeholderTextColor="black" placeholder="Enter Todo Here..." />
        <TouchableOpacity onPress={addTodo} style={styles.touchableOpacity} >
            <Text style={styles.textHeading} >ADD TODO</Text>
        </TouchableOpacity>
        <ScrollView style={{width:"90%"}} vertical={true} >
                <View>    
                {showTodo}
                </View>
        </ScrollView>
        
        </View>
        </View>
        
        
    )
}


const styles = StyleSheet.create({
    Container : {
        width:"100%",
        height:"100%",
        color:"black",
        backgroundColor:"white",
        fontSize:18
    },
    image:{
        width:"100%",
        height:'30%',

    },
    textHeading:{
        fontSize:24,
        fontWeight:"700",
        color:"black"
    },
    innerContainer:{
        alignItems:"center",
        marginTop:10,
    },
    textInput:{
        color:"black",
        borderColor:"black",
        borderBottomColor:"black",
        borderWidth:1,
        width:"90%",
        marginTop:10,
        fontSize:22,
        padding:10,
        borderRadius:15
    },
    touchableOpacity:{
        width:"90%",
        alignItems:"center",
        marginTop:10,
        borderWidth:1,
        borderColor:"black",
        padding:6,
        backgroundColor:"rgba(90,120,220,0.7)",
        borderRadius:10


    }
    
})



export default TodoApp