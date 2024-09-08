import React, {useCallback, useEffect, useState} from 'react';
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
import TodoItem from '../components/todo';
import {config} from '@tamagui/config';
import axios from 'axios';
import {useRecoilValue} from 'recoil';
import {authState} from '../store/atoms';
import Toast from 'react-native-toast-message';
import {Todo} from '../types/todo';
import {useFocusEffect} from '@react-navigation/native';

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
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const user = useRecoilValue(authState);

  const fetchUserTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://10.0.2.2:8000/api/v1/todos/${user.user?.id}`,
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      );

      if (response.status === 200) {
        setTodos(response.data.data);
      }
    } catch (error: any) {
      if (error.response) {
        // console.error('Server Error:', error.response.data.message);

        // if(error.response.status === 401) return navigator

        Toast.show({
          text1: 'Error',
          text2: error.response.data.message,
          position: 'top',
          type: 'error',
          visibilityTime: 4000,
          autoHide: true,
          text1Style: {
            fontSize: 17,
          },
          text2Style: {
            fontSize: 14,
            textTransform: 'capitalize',
          },
        });
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchUserTodos();
    }, []),
  );
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView className="px-4">
        <Navbar />
        <Heading title="All" subtitle="Todos" />
        <YStack className="my-2" gap={20}>
          {!loading &&
            todos.length > 0 &&
            todos.map((todo, i) => (
              <TodoItem
                data={todo}
                key={i}
                backgroundColor={colors[i % colors.length]}
              />
            ))}
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
};

export default Todos;
