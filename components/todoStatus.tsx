import React, {useEffect} from 'react';
import {Text, View, XStack, YStack} from 'tamagui';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import {faRecycle} from '@fortawesome/free-solid-svg-icons/faRecycle';
import {fontFamilies} from '../utils/fonts';

const TodoStatus = () => {
  useEffect(() => {}, []);

  return (
    <View className="my-4">
      <XStack gap={15} className="flex">
        <XStack className="flex-1 bg-blue-200 rounded-xl p-4 border-2 border-b-[8px] border-black">
          <YStack>
            <Text
              fontFamily={fontFamilies.ROBOTO.bold}
              className="text-black text-xl capitalize">
              on going
            </Text>
            <Text className="text-black text-base">24 tasks</Text>
          </YStack>
        </XStack>
        <XStack className="flex-1 bg-amber-200 rounded-xl p-4 border-2 border-b-[8px] border-black">
          <YStack>
            <Text
              fontFamily={fontFamilies.ROBOTO.bold}
              className="text-black text-xl capitalize">
              in process
            </Text>
            <Text className="text-black text-base">24 tasks</Text>
          </YStack>
        </XStack>
      </XStack>
      <XStack gap={15} className="flex mt-3">
        <XStack className="flex-1 bg-[#53C0C3] rounded-xl p-4 border-2 border-b-[8px] border-black">
          <YStack>
            <Text
              fontFamily={fontFamilies.ROBOTO.bold}
              className="text-black text-xl capitalize">
              completed
            </Text>
            <Text className="text-black text-base">24 tasks</Text>
          </YStack>
        </XStack>
        <XStack className="flex-1 bg-[#F06D55] rounded-xl p-4 border-2 border-b-[8px] border-black">
          <YStack>
            <Text
              fontFamily={fontFamilies.ROBOTO.bold}
              className="text-black text-xl capitalize">
              canceled
            </Text>
            <Text className="text-black text-base">24 tasks</Text>
          </YStack>
        </XStack>
      </XStack>
    </View>
  );
};

export default TodoStatus;
