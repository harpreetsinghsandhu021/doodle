import React from 'react';
import {H2, ListItem, Text, View, XStack, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import {useSetRecoilState} from 'recoil';
import {modal} from '../store/atoms';

interface TodoItemProps {
  backgroundColor: string;
}

const TodoItem = ({backgroundColor}: TodoItemProps) => {
  const setModal = useSetRecoilState(modal);

  return (
    <ListItem
      onPress={() =>
        setModal(prev => {
          return {...prev, visible: true, background: backgroundColor};
        })
      }
      className={`${backgroundColor} py-6 px-6 rounded-xl border-2 border-b-[8px] border-black`}>
      <YStack>
        <Text className="text-white absolute -top-3.5 -right-2 py-1.5 px-3 rounded-xl bg-black">
          Completed
        </Text>
        <View>
          <Text
            fontFamily={fontFamilies.ROBOTO.bold}
            className=" text-base text-slate-700">
            12 March 2024
          </Text>
        </View>
        <H2
          fontFamily={fontFamilies.ROBOTO.bold}
          className="text-black text-2xl">
          I’m post title, Please keep it 2 line onely...
        </H2>
      </YStack>
    </ListItem>
  );
};

export default TodoItem;
