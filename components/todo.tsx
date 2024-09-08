import React from 'react';
import {H2, ListItem, Text, View, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import {useSetRecoilState} from 'recoil';
import {modal} from '../store/atoms';
import {Todo} from '../types/todo';

interface TodoItemProps {
  backgroundColor: string;
  data: Todo;
}

const TodoItem = ({backgroundColor, data}: TodoItemProps) => {
  const setModal = useSetRecoilState(modal);

  return (
    <ListItem
      onPress={() => {
        setModal({
          visible: true,
          background: backgroundColor,
          activeTodo: data,
        });
      }}
      className={`${backgroundColor} py-6 px-6 rounded-xl border-2 border-b-[8px] border-black`}>
      <Text className="text-white absolute top-3 right-2 py-1.5 px-3 w-24 text-center rounded-xl bg-black capitalize">
        {data?.status || 'sorry darling'}
      </Text>
      <YStack>
        <View>
          <Text
            fontFamily={fontFamilies.ROBOTO.bold}
            className=" text-base text-slate-700 ">
            12 March 2024
          </Text>
        </View>
        <H2
          fontFamily={fontFamilies.ROBOTO.bold}
          numberOfLines={2}
          className="text-black text-2xl">
          {data?.title}
        </H2>
      </YStack>
    </ListItem>
  );
};

export default TodoItem;
