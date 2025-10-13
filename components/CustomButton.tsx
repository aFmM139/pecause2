import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  children: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const CustomButton = ({ 
  children, 
  onPress, 
  variant = 'primary' 
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        variant === 'primary' ? 'bg-[#0F626F]' : 'bg-gray-200'
      } rounded-lg p-4 items-center`}
      activeOpacity={0.8}
    >
      <Text className={`${
        variant === 'primary' ? 'text-white' : 'text-gray-800'
      } text-base font-semibold`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

