import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login2 from './login';
import Login1 from './signUp';
import TodoApp from './todoApp';
import HomeScreen from './homeScreen';
import ItemDetail from './detail'

const Stack = createNativeStackNavigator();

export default function Navigator() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   name="Home" component={Login2} />
        <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SignUp" component={Login1} />
        <Stack.Screen options={{headerShown:false}} name="Detail" component={ItemDetail} />          
      </Stack.Navigator>
    </NavigationContainer>
  );
}
