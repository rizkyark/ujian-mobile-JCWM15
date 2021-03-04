import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from "react-native-paper";
// import { useNavigation } from '@react-navigation/native';
import Login from "../screen/loginScreen";

import drawerNavigation from "../navigations/drawerNavigation";

import { useSelector,useDispatch } from "react-redux";
import { keepLogin } from "../actions";

const mainNavigation =({navigation})=>{
    const dispatch = useDispatch()
    // const navigation = useNavigation();
    useEffect(() => {
        dispatch(keepLogin())
    }, [])
    const {username} = useSelector(state =>{
        return{
            username:state.userReducer.username
        }
    })


    const Stack = createStackNavigator()
    return(
        <Stack.Navigator >
            {!username?
            <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
            :
            <Stack.Screen options={{ headerShown: false }} name="draw-nav" component={drawerNavigation} />
            }
        </Stack.Navigator>
    )

}

export default mainNavigation