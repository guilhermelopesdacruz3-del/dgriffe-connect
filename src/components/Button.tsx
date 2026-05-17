import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from '@/utils/constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
    },
    secondary: {
      backgroundColor: COLORS.secondary,
      borderColor: COLORS.secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: COLORS.primary,
    },
    success: {
      backgroundColor: COLORS.success,
      borderColor: COLORS.success,
    },
    danger: {
      backgroundColor: COLORS.error,
      borderColor: COLORS.error,
    },
  };

  const sizeStyles = {
    small: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 6,
    },
    medium: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    large: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  };

  const textColorStyle = {
    color:
      variant === 'outline'
        ? COLORS.primary
        : COLORS.background,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        styles.button,
        variantStyles[variant],
        sizeStyles[size],
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline'
              ? COLORS.primary
              : COLORS.background
          }
        />
      ) : (
        <Text
          style={[
            styles.text,
            sizeStyles[size].paddingVertical && {
              fontSize:
                size === 'small'
                  ? 12
                  : size === 'medium'
                    ? 14
                    : 16,
            },
            textColorStyle,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.6,
  },
});
