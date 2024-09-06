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
import {RecoilRoot, useRecoilValue} from 'recoil';
import AddTodo from './components/addTodo';
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {authState} from './store/atoms';

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
          paddingBottom: 25,
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
                  state.focused ? 'bg-black scale-110' : 'bg-[#f06d55]'
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

function OnBoardTabs() {
  const user = useRecoilValue(authState);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user.isLoggedIn ? 'hometabs' : 'onboarding-one'}>
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

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
        <OnBoardTabs />
      </ReactNativeRecoilPersistGate>
    </RecoilRoot>
  );
}

export default App;
