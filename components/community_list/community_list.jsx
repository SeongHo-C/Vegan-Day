import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CommunityList = ({ list }) => {
  const { title, userId, writeDt, hit, comment } = list;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.user}>
          <Text style={styles.text}>{userId}</Text>
          <Text style={styles.text}>{writeDt}</Text>
          <Text style={styles.text}>조회 {hit}</Text>
        </View>
      </View>
      <View style={styles.comments}>
        <MaterialCommunityIcons
          name='note-edit-outline'
          size={24}
          color='black'
        />
        <Text style={styles.text}>댓글 {comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  user: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'grey',
  },
  content: {
    flex: 1,
  },
  comments: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default CommunityList;
