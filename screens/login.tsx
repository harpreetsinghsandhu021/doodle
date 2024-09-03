import {
  TamaguiProvider,
  Text,
  View,
  createTamagui,
  Image,
  Button,
  Form,
  H3,
  Spinner,
  H4,
  XStack,
  H1,
  H6,
} from 'tamagui';
import {config} from '@tamagui/config';
import {useState} from 'react';
import {fontFamilies} from '../utils/fonts';
import {TextInput} from 'react-native';
import {User, User2} from '@tamagui/lucide-icons';

const tamaguiConfig = createTamagui(config);

const Login = ({navigation}: {navigation: any}) => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View className="px-6 mt-24">
        <Form onSubmit={() => setStatus('submitting')}>
          <H1
            style={{
              fontFamily: fontFamilies.ROBOTO.bold,
            }}
            className="text-black">
            Login
          </H1>
          <Text
            style={{fontFamily: fontFamilies.ROBOTO.medium}}
            className="text-xl w-full mt-2  text-gray-500">
            You don’t think you should login first and behave like human not
            robot.
          </Text>

          <View className="my-6">
            <Image
              className="absolute z-50 h-6 w-6 left-4 top-3.5"
              src={require('../assets/images/user.png')}
            />
            <TextInput
              className="text-black pl-12 border-2 text-base rounded-xl border-black bg-white"
              value="random123@gmail.com"
            />
          </View>
          <View>
            <Image
              className="absolute z-50 h-6 w-6 left-4 top-3.5"
              src={require('../assets/images/lock.png')}
            />
            <TextInput
              className="text-black pl-12 border-2 text-base rounded-xl border-black bg-white"
              value="*************"
            />
          </View>

          <Form.Trigger className="mt-10" asChild disabled={status !== 'off'}>
            <Button
              size={'$5'}
              className="bg-[#FFBD12] border-b-[5px] border-black w-full text-xl"
              icon={status === 'submitting' ? () => <Spinner /> : undefined}>
              <H4
                style={{
                  fontFamily: fontFamilies.ROBOTO.bold,
                }}
                className="text-black">
                Sign In
              </H4>
            </Button>
          </Form.Trigger>
        </Form>
        <Text
          style={{
            fontFamily: fontFamilies.ROBOTO.bold,
          }}
          className="text-black mt-4 text-base capitalize">
          You are new?{' '}
          <Text
            onPress={() => navigation.navigate('singup')}
            className="text-[#F95A2C]">
            Create new
          </Text>
        </Text>
      </View>
    </TamaguiProvider>
  );
};

export default Login;
