
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { posts } from '../../staticData/data';
import PostDescription from '../component/postDescription';

const Home = () => {

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostDescription title={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
