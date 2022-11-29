import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function Todo () {
    const [todo, setTodo] = useState('');
    const [listTodo, setListTodo] = useState([]);
    const addButtonClicked = () => {
      setListTodo([...listTodo, {txt: todo}]);
      setTodo('');
    };
  
    const onDelete = index => {
      setListTodo(listTodo.filter((e, i) => i !== index));
    };
  
    const onEdit = index => {
      setListTodo(
        listTodo.map((e, i) => {
          if (index === i) {
            return {
              ...e,
              edit: e.edit ? false : true,
            };
          } else {
            return {
              ...e,
              edit: false,
            };
          }
        }),
      );
    };
    return (
      <View style={styles.sectionContainer}>
        <Text>TODO APP</Text>
  
        <View>
          <TextInput
            value={todo}
            onChangeText={e => setTodo(e)}
            style={styles.input}
            placeholder="Enter Todo Here"
          />
          <TouchableOpacity
            onPress={addButtonClicked}
            style={styles.touchableOpacity}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Add Items
            </Text>
          </TouchableOpacity>
        </View>
  
        {listTodo.map((e, i) => (
          <View key={i} >
            {e.edit ? <TextInput placeholder='enter Edit Text' onChangeText={(events)=>setListTodo(listTodo.map((myEvent, myIndex)=>{
              if(myIndex == i){
                return{
                  ...myEvent,
                  txt: events
                }
              }
              else{
                return{
                  myEvent
                }
              }
            }))} /> : <Text>{e.txt}</Text>}
            <TouchableOpacity onPress={() => onDelete(i)}>
              <Text style={{backgroundColor: 'white', color: 'black',padding:10}}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEdit(i)}>
              <Text style={{backgroundColor: 'white', color: 'black', padding:10}}>{e.edit? 'save': 'edit'}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    sectionContainer: {
      padding: 24,
      height: '100%',
      backgroundColor: 'black',
    },
    touchableOpacity: {
      color: 'black',
      backgroundColor: 'aqua',
      alignItems: 'center',
      padding: 10,
      marginTop: 10,
    },
    input: {
      borderColor: 'white',
      borderWidth: 1,
      marginTop: 10,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
export default Todo