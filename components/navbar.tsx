import React from 'react';
import {H2, H3, Image, Text, View, XStack, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';

const Navbar = () => {
  return (
    <View className="mb-4">
      <XStack className="mt-4">
        <View className="bg-primary border-2 overflow-hidden w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <Image
            className="w-12 translate-y-1 h-12"
            src={require('../assets/images/user2.png')}
          />
        </View>
        <YStack className="pl-2">
          <H3
            style={{fontFamily: fontFamilies.ROBOTO.normal}}
            className="text-black text-2xl">
            Hi Bruce 👋
          </H3>
          <Text
            className="text-gray-500 text-lg"
            style={{fontFamily: fontFamilies.ROBOTO.normal}}>
            Your daily adventure starts now
          </Text>
        </YStack>
      </XStack>
    </View>
  );
};

export default Navbar;
