import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper'
import { headerStyles } from '../utils/GlobalStylesSheet';

const Header = () => {
    const [clickEvent, setClickEvent]= useState('All Posts')
    return (
        
  <View style={headerStyles.communityScreen}>
            <View style={headerStyles.searchSection}>
            <View style={headerStyles.replyInputSection}>
                    <TextInput
                        style={headerStyles.inputReply}
                        placeholder="Search posts and members"
                        value={''}
                    // onChangeText={setComment}
                    />
                    <TouchableOpacity style={headerStyles.buttonPost}>
                    <Image
                    source={require('../assests/icons/search.png')} // Replace with your actual notification image
                    // style={{ marginRight: 10 }}
                />
                    </TouchableOpacity>
                </View>
                <Image
                    source={require('../assests/icons/bell.png')} // Replace with your actual notification image
                />
            </View>
            <ScrollView  horizontal={true}>
            <View style={headerStyles.categoryButtons}>
                <TouchableOpacity style={(clickEvent == 'All Posts') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('All Posts')}>
                    <Text style={headerStyles.categoryText}>All Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(clickEvent == 'News') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('News')}>
                    <Text style={headerStyles.categoryText}>News</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(clickEvent == 'Diet') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('Diet')}>
                    <Text style={headerStyles.categoryText}>Diet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(clickEvent == 'Lifestyle') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('Lifestyle')}>
                    <Text style={headerStyles.categoryText}>Lifestyle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(clickEvent == 'Fitness') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('Fitness')}>
                    <Text style={headerStyles.categoryText}>Fitness</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(clickEvent == 'Health') ? headerStyles.buttonAllPost : headerStyles.button} onPress={()=>setClickEvent('Health')}>
                    <Text style={headerStyles.categoryText}>Health</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        
    );
};




export default Header;
