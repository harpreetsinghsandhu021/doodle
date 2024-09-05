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
  ScrollView,
} from 'tamagui';
import {config} from '@tamagui/config';
import {useState} from 'react';
import {fontFamilies} from '../utils/fonts';
import {TextInput} from 'react-native';

const tamaguiConfig = createTamagui(config);

const SignUp = ({navigation}: {navigation: any}) => {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>(
    'off',
  );

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView>
        <View className="px-6 mt-24">
          <Form onSubmit={() => setStatus('submitting')}>
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

            <View className="mt-6">
              <Image
                className="absolute z-50 h-6 w-6 left-4 top-4"
                src={require('../assets/images/user.png')}
              />

              <TextInput
                className="text-black pl-[52px] py-3 border-2 text-xl rounded-xl border-black bg-white"
                placeholder="Full Name"
                textContentType="name"
                autoCapitalize="none"
                placeholderTextColor="#000"
                style={{fontFamily: fontFamilies.ROBOTO.normal}}
              />
            </View>

            <View className="my-6">
              <Image
                className="absolute z-50 h-6 w-6 left-4 top-4"
                src={require('../assets/images/mail.png')}
              />
              <TextInput
                className="text-black pl-[52px] py-3 border-2 text-xl rounded-xl border-black bg-white"
                placeholder="Email Address"
                textContentType="emailAddress"
                style={{fontFamily: fontFamilies.ROBOTO.normal}}
                placeholderTextColor="#000"
              />
            </View>
            <View>
              <Image
                className="absolute z-50 h-6 w-6 left-4 top-4"
                src={require('../assets/images/lock.png')}
              />
              <TextInput
                className="text-black pl-[52px] py-3 border-2 text-xl rounded-xl border-black bg-white"
                placeholder="*************"
                textContentType="password"
                secureTextEntry={true}
                style={{fontFamily: fontFamilies.ROBOTO.normal}}
                autoCapitalize="none"
                placeholderTextColor="#000"
              />
            </View>

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
