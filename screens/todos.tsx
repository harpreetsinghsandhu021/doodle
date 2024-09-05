import React from 'react';
import {
  Button,
  H2,
  ScrollView,
  TamaguiProvider,
  YStack,
  createTamagui,
} from 'tamagui';
import {Heading} from './home';
import Navbar from '../components/navbar';
import Recents from '../components/recents';
import TodoItem from '../components/todo';
import {PortalProvider} from '@tamagui/portal';
import {config} from '@tamagui/config';
import Drawer from '../components/sheets';
import {RecoilRoot} from 'recoil';

const tamaguiConfig = createTamagui(config);

export const colors = [
  'bg-purple-100',
  'bg-red-100',
  'bg-green-100',
  'bg-gray-200',
  'bg-amber-200',
  'bg-teal-200',
  'bg-blue-200',
];

const Todos = () => {
  return (
    <RecoilRoot>
      <TamaguiProvider config={tamaguiConfig}>
        <ScrollView className="px-4">
          <Navbar />
          <Drawer />
          <Heading title="All" subtitle="Todos" />
          <YStack className="my-2" gap={20}>
            {Array.from({length: 20}).map((_, i) => (
              <TodoItem key={i} backgroundColor={colors[i % colors.length]} />
            ))}
          </YStack>
        </ScrollView>
      </TamaguiProvider>
    </RecoilRoot>
  );
};

export default Todos;
