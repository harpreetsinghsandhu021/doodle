import {
  TamaguiProvider,
  Text,
  View,
  createTamagui,
  Image,
  Button,
  H4,
} from 'tamagui';
import {config} from '@tamagui/config';
import {Circle, Rect, Svg} from 'react-native-svg';
import {fontFamilies} from '../utils/fonts';
import {ArrowRight} from '@tamagui/lucide-icons';
import {useRecoilCallback, useRecoilValue} from 'recoil';
import {authState} from '../store/atoms';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tamaguiConfig = createTamagui(config);

const ScreenOne = ({navigation}: {navigation: any}) => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View className="px-6 h-full items-center justify-center">
        <Image
          className="scale-90"
          src={require('../assets/images/onBoarding-1.png')}
        />

        <Text
          style={{fontFamily: fontFamilies.ROBOTO.bold}}
          className="text-4xl mt-4 w-full text-black">
          Your Tasks, Simplified
        </Text>
        <Text
          style={{fontFamily: fontFamilies.ROBOTO.medium}}
          className="text-xl w-full mt-2 text-gray-400">
          Get organized and boost your productivity by managing tasks
          efficiently with our app.
        </Text>
        <Button
          size={'$4'}
          onPress={() => navigation.navigate('signup')}
          className="mt-8 bg-black w-full text-base">
          <H4
            style={{
              fontFamily: fontFamilies.ROBOTO.bold,
            }}>
            {' '}
            Get Started
          </H4>
          <Image
            className="w-6 h-4"
            src={require('../assets/images/arrow.png')}
          />
        </Button>
      </View>
    </TamaguiProvider>
  );
};

export default ScreenOne;
