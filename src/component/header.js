import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper'
import { headerStyles } from '../utils/GlobalStylesSheet';

const Header = () => {
    return (
        
  <View style={headerStyles.communityScreen}>
            <View style={headerStyles.searchSection}>
            <View style={headerStyles.replyInputSection}>
                    <TextInput
                        style={headerStyles.inputReply}
                        placeholder="Add a cheerful comment..."
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
                <TouchableOpacity style={headerStyles.buttonAllPost}>
                    <Text style={headerStyles.categoryText}>All Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyles.button}>
                    <Text style={headerStyles.categoryText}>News</Text>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyles.button}>
                    <Text style={headerStyles.categoryText}>Diet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyles.button}>
                    <Text style={headerStyles.categoryText}>Lifestyle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={headerStyles.button}>
                    <Text style={headerStyles.categoryText}>Sym</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        
    );
};




export default Header;
