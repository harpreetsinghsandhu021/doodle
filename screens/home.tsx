import React from 'react';
import {TamaguiProvider, createTamagui, H1, ScrollView} from 'tamagui';
import {config} from '@tamagui/config';
import Navbar from '../components/navbar';
import {fontFamilies} from '../utils/fonts';
import TodoStatus from '../components/todoStatus';
import Recents from '../components/recents';
import Drawer from '../components/sheets';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const tamaguiConfig = createTamagui(config);

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Toast />

      <ScrollView className="px-4">
        <Navbar />
        <Drawer />
        <Heading title="Your" subtitle="Todos" />
        <TodoStatus />
        <Recents navigation={navigation} />
      </ScrollView>
    </TamaguiProvider>
  );
}

export function Heading({title, subtitle}: {title: string; subtitle: string}) {
  return (
    <>
      <H1
        style={{
          textShadowColor: '#000',
          textShadowRadius: 2,
          textShadowOffset: {
            width: 3,
            height: 3,
          },
          fontFamily: fontFamilies.ROBOTO.bold,
        }}
        className="text-white shadow-lg text-6xl">
        {title}
      </H1>
      <H1
        style={{
          textShadowColor: '#000',
          textShadowRadius: 2,
          textShadowOffset: {
            width: 3,
            height: 3,
          },
          fontFamily: fontFamilies.ROBOTO.bold,
        }}
        className="text-black text-6xl pl-6">
        {subtitle}
      </H1>
    </>
  );
}
