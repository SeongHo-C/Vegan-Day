import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { theme } from '../../color';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AutoHeightImage from 'react-native-auto-height-image';

const Header = ({ navigation }) => {
  const logout = async () => {
    const loginData = await AsyncStorage.getItem('@veganDay');
    if (loginData !== null) {
      Alert.alert('알림', '로그아웃하시겠습니까?', [
        {
          text: '로그아웃',
          onPress: async () => {
            if (loginData !== null) {
              AsyncStorage.removeItem('@veganDay');
            }
          },
        },
        { text: '취소' },
      ]);
    } else {
      Alert.alert('알림', '로그인하시겠습니까?', [
        {
          text: '로그인',
          onPress: async () => {
            await navigation();
          },
        },
        { text: '취소' },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <AutoHeightImage
          width={200}
          source={require('../../assets/logo.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
    color: theme.mainColor,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Header;
