import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabIcon({ iconName, color, focused }) {
  return <MaterialCommunityIcons name={iconName} color={color} size={22} />;
}
