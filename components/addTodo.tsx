import React, {useState} from 'react';
import {
  Button,
  H2,
  ScrollView,
  TamaguiProvider,
  Form,
  YStack,
  createTamagui,
  H4,
  Spinner,
  Select,
} from 'tamagui';
import {Heading} from '../screens/home';
import Navbar from '../components/navbar';
import {config} from '@tamagui/config';
import {TextInput} from 'react-native';
import {fontFamilies} from '../utils/fonts';
import SelectDemoItem from './ui/select';
import {PortalProvider} from '@tamagui/portal';

const tamaguiConfig = createTamagui(config);

const AddTodo = () => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView className="px-4">
        <Navbar />
        <Heading title="Add " subtitle="New Todo" />
        <Form className="mt-4">
          <YStack gap={20}>
            <TextInput
              className="text-black pl-4 py-3 border-2 text-xl rounded-xl border-black bg-white"
              placeholder="Todo Title"
              placeholderTextColor={'#000'}
              textContentType="givenName"
            />
            <SelectDemoItem />

            <TextInput
              className="text-black pl-4 border-2 text-xl rounded-xl border-black bg-white"
              placeholder="Add Your Todo Details"
              placeholderTextColor={'#000'}
              numberOfLines={6}
              multiline={true}
              textAlignVertical="top"
            />
          </YStack>

          <Form.Trigger className="mt-10" asChild disabled={status !== 'off'}>
            <Button
              size={'$5'}
              className="bg-primary w-full"
              icon={status === 'submitting' ? () => <Spinner /> : undefined}>
              <H4
                style={{
                  fontFamily: fontFamilies.ROBOTO.normal,
                }}
                className="text-white text-xl">
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
