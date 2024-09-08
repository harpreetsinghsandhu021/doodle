import React, {useState} from 'react';

import {
  TamaguiProvider,
  Text,
  View,
  createTamagui,
  Image,
  Button,
  Form,
  Spinner,
  H4,
  H1,
  ScrollView,
  YStack,
} from 'tamagui';
import {config} from '@tamagui/config';
import {fontFamilies} from '../utils/fonts';
import {TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import authSchema from '../types/auth/schema';
import {auth} from '../types/auth/types';
import axios from 'axios';

import Toast from 'react-native-toast-message';
import {useSetRecoilState} from 'recoil';
import {authState} from '../store/atoms';

const tamaguiConfig = createTamagui(config);

const SignUp = ({navigation}: {navigation: any}) => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );
  const setAuth = useSetRecoilState(authState);
  const form = useForm<auth>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      fullName: '',
      emailAddress: '',
      password: '',
    },
  });

  const onSubmit = async (data: auth) => {
    setStatus('submitting');

    try {
      const res = await axios.post(`http://10.0.2.2:8000/api/v1/users/signup`, {
        name: data.fullName,
        email: data.emailAddress,
        password: data.password,
      });

      if (res.status === 201) {
        Toast.show({
          text1: 'Sign Up SuccessFull',
          text2: 'Redirecting to Home',
          position: 'top',
          type: res.data.status,
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

        setAuth({
          isLoggedIn: true,
          user: res.data.user,
          token: res.data.token,
        });

        setTimeout(() => {
          navigation.navigate('hometabs');
        }, 100);
      }
    } catch (error: any) {
      if (error.response) {
        // console.error('Server Error:', error.response.data.message);
        // ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);

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
    setStatus('submitted');
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Toast />
      <ScrollView>
        <View className="px-4 mt-24">
          <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
            <H1
              style={{
                fontFamily: fontFamilies.ROBOTO.bold,
              }}
              className="text-black">
              SignUp
            </H1>
            <Text
              style={{fontFamily: fontFamilies.ROBOTO.medium}}
              className="text-xl w-full mt-2  text-gray-400">
              You have chance to create new account if you really want to.
            </Text>
            <YStack gap={20} className="mt-6">
              <View>
                <Image
                  tintColor={form.formState.errors.fullName ? 'red' : '#000'}
                  className="absolute z-50 h-6 w-6 left-4 top-4"
                  src={require('../assets/images/user.png')}
                />

                <Controller
                  control={form.control}
                  name={'fullName'}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextInput
                      placeholder="Full Name"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      className={`text-black pl-[52px] py-3 border-2 text-xl  rounded-xl border-black ${
                        form.formState.errors.fullName && 'border-red-400'
                      } bg-white`}
                      placeholderTextColor={
                        form.formState.errors.fullName ? 'red' : '#000'
                      }
                      style={{fontFamily: fontFamilies.ROBOTO.normal}}
                    />
                  )}
                />

                {form.formState.errors.fullName && (
                  <Text className="text-red-400 translate-y-2 text-base">
                    {form.formState.errors.fullName.message}
                  </Text>
                )}
              </View>

              <View>
                <Image
                  tintColor={form.formState.errors.emailAddress && 'red'}
                  className="absolute z-50 h-6 w-6 left-4 top-4"
                  src={require('../assets/images/mail.png')}
                />
                <Controller
                  control={form.control}
                  name={'emailAddress'}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextInput
                      placeholder="Email Address"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      className={`text-black pl-[52px] py-3 border-2 text-xl  rounded-xl border-black ${
                        form.formState.errors.emailAddress && 'border-red-400'
                      } bg-white`}
                      placeholderTextColor={
                        form.formState.errors.emailAddress ? 'red' : '#000'
                      }
                      style={{fontFamily: fontFamilies.ROBOTO.normal}}
                    />
                  )}
                />
                {form.formState.errors.emailAddress && (
                  <Text className="text-red-400 leading-3 translate-y-2 text-base">
                    {form.formState.errors.emailAddress.message}
                  </Text>
                )}
              </View>
              <View>
                <Image
                  tintColor={form.formState.errors.password && 'red'}
                  className="absolute z-50 h-6 w-6 left-4 top-4"
                  source={require('../assets/images/lock.png')}
                />
                <Controller
                  control={form.control}
                  name={'password'}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextInput
                      placeholder="password"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      className={`text-black pl-[52px] py-3 border-2 text-xl  rounded-xl border-black ${
                        form.formState.errors.password && 'border-red-400'
                      } bg-white`}
                      placeholderTextColor={
                        form.formState.errors.password ? 'red' : '#000'
                      }
                      style={{fontFamily: fontFamilies.ROBOTO.normal}}
                    />
                  )}
                />
                {form.formState.errors.password && (
                  <Text className="text-red-400 leading-3 translate-y-2 text-base">
                    {form.formState.errors.password.message}
                  </Text>
                )}
              </View>
            </YStack>
            <Form.Trigger className="mt-10" asChild disabled={status !== 'off'}>
              <Button
                disabled={status === 'submitting'}
                size={'$5'}
                className="bg-[#FFBD12] border-b-[5px] disabled:bg-gray-400 border-black w-full text-xl"
                icon={
                  status === 'submitting'
                    ? () => <Spinner color={'#000'} />
                    : undefined
                }>
                <H4
                  style={{
                    fontFamily: fontFamilies.ROBOTO.bold,
                  }}
                  className="text-black">
                  Sign Up
                </H4>
              </Button>
            </Form.Trigger>
          </Form>
          <Text
            style={{
              fontFamily: fontFamilies.ROBOTO.bold,
            }}
            className="text-black mt-4 text-base capitalize">
            Already have account?{' '}
            <Text
              onPress={() => navigation.navigate('login')}
              className="text-[#F95A2C]">
              Go here
            </Text>
          </Text>
        </View>
      </ScrollView>
    </TamaguiProvider>
  );
};

export default SignUp;
