import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import screen
import introScreen from '../src/Screen/intro';
import SignInScreen from '../src/Screen/SignIn';
import SignUpScreen from '../src/Screen/SignUp';
import BottomTabScreen from '../src/Component/BottomTab';
import EventDetail from '../src/Screen/EventDetail';

//
import COLOR from '../src/Config/color';

const Stack = createNativeStackNavigator();

//stack screen login logout intro eventDetail
const stackLog = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="introScreen"
        component={introScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign In',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="Event Detail"
        component={EventDetail}
        options={{
          title: 'Event Detail',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//st
const Router = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({type: 'loginSuccess'});
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Event Detail"
            component={EventDetail}
            options={{
              title: 'Event Detail',
              headerTitleStyle: {
                color: '#fff',
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Stack Log"
          component={stackLog}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
