import React from 'react';
import {View, createTamagui} from 'tamagui';
import {config} from '@tamagui/config/v3';
import {NavigationContainer} from '@react-navigation/native';
import ScreenOne from './screens/screen1';
import Login from './screens/login';
import SignUp from './screens/signup';
import HomeScreen from './screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import Todos from './screens/todos';
import {faList, faPlus} from '@fortawesome/free-solid-svg-icons';
import {RecoilRoot} from 'recoil';
import AddTodo from './components/addTodo';

const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 30,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: state => {
            return (
              <View
                className={`p-4 rounded-full ${
                  state.focused ? 'bg-black scale-125' : 'bg-[#f06d55]'
                }`}>
                <FontAwesomeIcon
                  style={{color: 'white'}}
                  size={25}
                  icon={faHome}
                />
              </View>
            );
          },
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: state => {
            return (
              <View
                className={`p-4 rounded-full ${
                  state.focused ? 'bg-black scale-125' : 'bg-[#f06d55]'
                }`}>
                <FontAwesomeIcon
                  style={{color: 'white'}}
                  size={25}
                  icon={faPlus}
                />
              </View>
            );
          },
        }}
        name="addTodo"
        component={AddTodo}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: state => {
            return (
              <View
                className={`p-4 rounded-full ${
                  state.focused ? 'bg-black scale-125' : 'bg-[#f06d55]'
                }`}>
                <FontAwesomeIcon
                  style={{color: 'white'}}
                  size={25}
                  icon={faList}
                />
              </View>
            );
          },
        }}
        name="todos"
        component={Todos}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding-one">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="onboarding-one"
          component={ScreenOne}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="hometabs"
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
