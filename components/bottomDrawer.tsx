import React, {useRef, useMemo} from 'react';
import {View, Button, Text} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Drawer = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Open Bottom Sheet" onPress={handlePresentModal} />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => {
            console.log('Bottom sheet dismissed');
          }}>
          <View style={{padding: 20}}>
            <Text>This is the content of the bottom sheet!</Text>
            <Button
              title="Close"
              onPress={() => bottomSheetModalRef.current?.dismiss()}
            />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Drawer;
