import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Pressable, View} from 'react-native';
import {
  Button,
  H2,
  Image,
  ListItem,
  ScrollView,
  Text,
  XStack,
  YStack,
} from 'tamagui';
import {fontFamilies} from '../utils/fonts';
import {useRecoilState} from 'recoil';
import {modal} from '../store/atoms';
import {MoreHorizontal, MoreVertical} from '@tamagui/lucide-icons';

const Drawer = () => {
  const [modalState, setModalState] = useRecoilState(modal);
  const [showActionsTab, setShowActionsTab] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState.visible}>
        <View className="bg-black/20 absolute top-0 left-0 w-full h-[25%]"></View>

        <View
          className={`h-[80%] rounded-t-2xl border-t-[8px] border-r-2 border-l-2 p-4 mt-auto ${
            modalState.background ? `${modalState.background}` : 'bg-white'
          } `}>
          <Pressable
            onPress={() => setModalState({...modalState, visible: false})}
            className="absolute -top-14 left-1/2 -translate-x-1/2 border-2 border-b-4 bg-white rounded-full w-10
          h-10 flex justify-center items-center">
            <Image
              className="w-8 h-8"
              src={require('../assets/images/cross.png')}
            />
          </Pressable>
          <ScrollView className="px-2">
            <XStack alignItems="center" justifyContent="space-between">
              <View className="bg-[#f06d55] mb-4 border-2 overflow-hidden w-[60px] h-[60px] flex justify-center items-center rounded-full">
                <Image
                  className="w-12 translate-y-1 h-12"
                  src={require('../assets/images/user2.png')}
                />
              </View>
              <Pressable onPress={() => setShowActionsTab(!showActionsTab)}>
                <MoreHorizontal size={35} color={'black'} />
              </Pressable>
            </XStack>
            {showActionsTab && (
              <YStack
                background={'#fff'}
                className="absolute z-50 border-2 overflow-hidden rounded-xl top-14 right-0 w-36">
                <ListItem className="bg-white py-0">
                  <Pressable>
                    <Text className="text-black text-xl">Edit</Text>
                  </Pressable>
                </ListItem>
              </YStack>
            )}
            <H2
              fontFamily={fontFamilies.ROBOTO.bold}
              className="text-black text-4xl pb-2">
              {modalState.activeTodo?.title}
            </H2>

            <Text className="text-lg text-gray-500">
              {modalState.activeTodo?.description}
            </Text>
            <Text className="text-lg text-gray-500">
              Ensure that users can register with their email and password, and
              implement validation to check for strong passwords. After
              registration, users should receive a confirmation email. For the
              login process, create a session management system to keep users
              logged in and handle token storage securely. Finally, add a logout
              feature that clears user sessions and redirects to the login page.
            </Text>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Drawer;
