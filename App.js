import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/BottomTab/Home';
import Profile from './src/BottomTab/Profile';
import Detail from './src/Stack/Detail';
import Product
 from './src/BottomTab/Product';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Tabnavigator(){
  return(
<Tab.Navigator>
<Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Product"component={Product}/>
</Tab.Navigator>
  )
}
 function StackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
   
  );
}
export default function  App(){
return(
  <NavigationContainer>
    <Tabnavigator/>
  </NavigationContainer>
)
}