
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { posts } from '../../staticData/data';
import PostDescription from '../component/postDescription';
import AddPost from '../component/addPost';
import Header from '../component/header';
import FloatingButton from '../component/floatingButton';

const Home = ({navigation}) => {

  return (
   <View>
    <Header />
    <ScrollView>
     <View style={{marginBottom: 200}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostDescription title={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
    </ScrollView>
    

   </View>
  );
};

export default Home;
