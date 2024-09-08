import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  TamaguiProvider,
  Form,
  YStack,
  createTamagui,
  H4,
  Spinner,
  Text,
  View,
} from 'tamagui';
import {Heading} from '../screens/home';
import Navbar from '../components/navbar';
import {config} from '@tamagui/config';
import {TextInput} from 'react-native';
import {fontFamilies} from '../utils/fonts';
import SelectDemoItem from './ui/select';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import todoSchema from '../types/todo/schema';
import {createTodo} from '../types/todo';
import axios from 'axios';
import {useRecoilValue} from 'recoil';
import {authState} from '../store/atoms';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const tamaguiConfig = createTamagui(config);

const AddTodo = () => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  const user = useRecoilValue(authState);
  const navigation = useNavigation();

  const form = useForm<createTodo>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
      status: 'ongoing',
      description: '',
    },
  });

  function handleSelectChange(item: any) {
    // console.log(item, 'from parent');
    form.setValue('status', item.value);
  }

  async function onSubmit(values: createTodo) {
    setStatus('submitting');
    try {
      const res = await axios.post(
        `http://10.0.2.2:8000/api/v1/todos/${user.user?.id}`,
        {
          title: values.title,
          status: values.status,
          description: values.description,
        },
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        },
      );

      if (res.status === 201) {
        Toast.show({
          text1: 'Todo Added SuccessFull',
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
        form.setValue('title', '');
        form.setValue('description', '');
        setTimeout(() => {
          navigation.goBack();
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
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView className="px-4">
        <Toast />
        <Navbar />
        <Heading title="Add " subtitle="New Todo" />
        <Form {...Form} onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          <YStack gap={20}>
            <View>
              <Controller
                control={form.control}
                name={'title'}
                render={({field: {value, onChange, onBlur}}) => (
                  <TextInput
                    placeholder="Todo Title"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className={`text-black pl-4 py-3 border-2 text-xl  rounded-xl border-black ${
                      form.formState.errors.title && 'border-red-400'
                    } bg-white`}
                    placeholderTextColor={
                      form.formState.errors.title ? 'red' : '#000'
                    }
                    style={{fontFamily: fontFamilies.ROBOTO.normal}}
                  />
                )}
              />

              {form.formState.errors.title && (
                <Text className="text-red-400 capitalize translate-y-2 text-base">
                  {form.formState.errors.title.message}
                </Text>
              )}
            </View>

            <SelectDemoItem onChange={handleSelectChange} />

            <View>
              <Controller
                control={form.control}
                name={'description'}
                render={({field: {value, onChange, onBlur}}) => (
                  <TextInput
                    placeholder="Add Your Todo Details"
                    autoCapitalize="none"
                    numberOfLines={6}
                    multiline={true}
                    textAlignVertical="top"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className={`text-black pl-4 py-3 border-2 text-xl overflow-hidden h-48  rounded-xl border-black ${
                      form.formState.errors.title && 'border-red-400'
                    } bg-white`}
                    placeholderTextColor={
                      form.formState.errors.title ? 'red' : '#000'
                    }
                    style={{fontFamily: fontFamilies.ROBOTO.normal}}
                  />
                )}
              />
              {form.formState.errors.description && (
                <Text className="text-red-400 capitalize translate-y-2 text-base">
                  {form.formState.errors.description.message}
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
                Create Todo
              </H4>
            </Button>
          </Form.Trigger>
        </Form>
      </ScrollView>
    </TamaguiProvider>
  );
};

export default AddTodo;
