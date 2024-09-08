import React, {useCallback} from 'react';
import {H3, View, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import TodoItem from './todo';
import Toast from 'react-native-toast-message';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Todo} from '../types/todo';
import {useRecoilState} from 'recoil';
import {authState} from '../store/atoms';
import {colors} from '../screens/todos';
import {useFocusEffect} from '@react-navigation/native';

const Recents = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [user, setUser] = useRecoilState(authState);

  const fetchUserTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://10.0.2.2:8000/api/v1/todos/${user.user?.id}/recents`,
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

        if (error.status === 401) {
          navigation.navigate('login');
          setUser({isLoggedIn: false, user: null, token: null});
        }

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
        // console.error('Network Error:', error.request);

        Toast.show({
          text1: 'Error',
          text2: 'Network Connection Failed, Please Try Again',
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
      } else {
        // console.error('Error:', error.message);
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
    <View>
      <H3
        fontFamily={fontFamilies.ROBOTO.medium}
        className="text-black text-2xl">
        Recent Todos
      </H3>

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
        {!loading && todos.length === 0 && (
          <H3 className="text-black"> No Data Found </H3>
        )}
      </YStack>
    </View>
  );
};

export default Recents;
