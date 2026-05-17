import React from 'react';
import type ReactNative from 'react-native';

declare module '@react-navigation/native' {
  export function useNavigation<T = any>(): T;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  location?: string;
}

export interface Prescription {
  spheric: number;
  cylindric: number;
  axis: number;
  dnp: number;
}
