import {
  TamaguiProvider,
  Text,
  View,
  createTamagui,
  Image,
  Button,
  Form,
  H3,
  Spinner,
  H4,
  XStack,
  H1,
  ScrollView,
  H6,
} from 'tamagui';
import {config} from '@tamagui/config';
import Navbar from '../components/navbar';
import {fontFamilies} from '../utils/fonts';
import TodoStatus from '../components/todoStatus';
import Recents from '../components/recents';
import Drawer from '../components/sheets';

const tamaguiConfig = createTamagui(config);

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView className="px-4">
        <Navbar />
        <Drawer />
        <Heading title="Your" subtitle="Todos" />
        <TodoStatus />
        <Recents />
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
