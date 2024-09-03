import React, {useEffect} from 'react';
import {TamaguiProvider, Text, View, createTamagui} from 'tamagui';
import {config} from '@tamagui/config/v3';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from './screens/screen1';
import prisma from './lib/db';
import Login from './screens/login';

const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text className="text-3xl text-black">Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </TamaguiProvider>
  );
}

function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text className="text-3xl text-black">Details Screen</Text>
      <Button
        title="Go to Home"
        color={'red'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
