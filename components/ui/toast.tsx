// CustomToast.js

import React from 'react';
import {View, Text} from 'tamagui';

const CustomToast = ({text1, text2}: {text1?: string; text2?: string}) => {
  return (
    <View zIndex={999} className={'bg-white absolute z-50 p-4 rounded-lg'}>
      <Text className={'text-black font-bold'}>{text1}</Text>
      {text2 && <Text className={'text-gray-500'}>{text2}</Text>}
    </View>
  );
};

export default CustomToast;
