import {H2, H3, ListItem, ScrollView, Text, View, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import TodoItem from './todo';

const Recents = () => {
  return (
    <View>
      <H3
        fontFamily={fontFamilies.ROBOTO.medium}
        className="text-black text-2xl">
        Recent Todos
      </H3>

      <YStack className="my-2" gap={20}>
        <TodoItem backgroundColor="bg-purple-100" />
        <TodoItem backgroundColor="bg-red-100" />
        <TodoItem backgroundColor="bg-green-100" />
        <TodoItem backgroundColor="bg-gray-200" />
      </YStack>
    </View>
  );
};

export default Recents;
