import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { theme } from '../color';
import axios from 'axios';
import { URL } from '@env';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CommunityWrite = ({ navigation, route }) => {
  const [inputs, setInputs] = useState('');
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUrl, setImageUrl] = useState('');

  const name = route.params.name;

  const onChange = (key, e) => {
    setInputs({
      ...inputs,
      [key]: e,
    });
  };

  const onEnroll = async () => {
    if (inputs === '') {
      Alert.alert('입력값 확인!');
      return;
    }

    const formData = new FormData();

    if (imageUrl !== '') {
      const localUri = imageUrl;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename ?? '');
      const type = match ? `image/${match[1]}` : `image`;

      formData.append('file', { uri: localUri, name: filename, type });
    }
    formData.append('title', inputs['title']);
    formData.append('cn', inputs['content'] || '');
    formData.append('userName', name);

    try {
      const response = await axios.post(`${URL}/community`, formData, {
        headers: { 'content-type': 'multipart/form-data' },
        transformRequest: (formData) => formData,
      });
      const data = response.data;

      if (data.statusCode === 400) {
        Alert.alert('제목 및 내용을 입력해 주세요!');
      } else {
        setInputs('');
        setImageUrl('');
        navigation.goBack();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const uploadImage = async (e) => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    // 이미지 업로드 기능
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
    });

    if (result.cancelled) {
      return null;
    }
    setImageUrl(result.uri);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>제목</Text>
          <TextInput
            name='title'
            style={styles.input}
            maxLength={30}
            onChangeText={(e) => onChange('title', e)}
          ></TextInput>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>내용</Text>
          <TextInput
            name='content'
            style={styles.input}
            multiline={true}
            maxLength={200}
            numberOfLines={10}
            textAlignVertical='top'
            onChangeText={(e) => onChange('content', e)}
          />
          <View style={styles.imageView}>
            <Text style={styles.text}>사진첨부</Text>
            <Text style={{ marginTop: 10, color: 'grey' }}>
              관련 사진을 첨부해주세요. (1장)
            </Text>
            <View style={styles.imageInput}>
              <TouchableOpacity style={styles.imageBtn} onPress={uploadImage}>
                <FontAwesome name='plus' size={30} color='white' />
              </TouchableOpacity>
              <Pressable style={styles.imageBtn}>
                {imageUrl.length === 0 ? (
                  <AntDesign name='picture' size={30} color='white' />
                ) : (
                  <Image style={styles.image} source={{ uri: imageUrl }} />
                )}
              </Pressable>
            </View>
          </View>
        </View>
        <Button title='등록' color={theme.mainColor} onPress={onEnroll} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    fontSize: 18,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  title: {
    marginTop: 30,
  },
  text: {
    fontSize: 18,
  },
  imageBtn: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  imageInput: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
export default CommunityWrite;
