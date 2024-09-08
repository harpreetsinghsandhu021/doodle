import React, {useEffect, useState} from 'react';
import {H3, Image, Text, View, XStack, YStack} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import {useRecoilState} from 'recoil';
import {authState} from '../store/atoms';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const Navbar = () => {
  const [user, setUser] = useRecoilState(authState);
  const [loading, setLoading] = useState(true);

  // async function getStorage() {
  //   await AsyncStorage.clear();
  // }

  // useEffect(() => {
  //   getStorage();
  // }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/api/v1/users/me`, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      });

      if (response.status === 200) {
        setUser(prevState => {
          return {...prevState, user: response.data.user};
        });
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
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <View className="mb-4">
      <Toast />
      <XStack className="mt-4 -z-20">
        <View className="bg-primary border-[3px] overflow-hidden w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <Image
            className="w-12 translate-y-1 h-12"
            source={require('../assets/images/user2.png')}
          />
        </View>
        <YStack className="pl-2">
          {!loading ? (
            <H3
              style={{fontFamily: fontFamilies.ROBOTO.normal}}
              className="text-black text-2xl">
              Hi {user.user?.name} 👋
            </H3>
          ) : (
            <View className="w-full h-4 bg-gray-200 rounded-full animate-pulse" />
          )}
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
