import React from 'react';
import {
  View, Text
} from 'react-native'
import { Button,TextInput } from "react-native-paper";

import { useDispatch, useSelector } from 'react-redux'

import { loginAction,logoutAction } from '../actions'
const account = () => {
    const dispatch = useDispatch()
    const logout= ()=>{
        dispatch(logoutAction())
      }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button onPress={logout}>LOGOUT</Button>
    </View>
  );
};

export default account;
