import React from 'react'
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PostDescription from '../component/postDescription'
import Comment from '../component/comment';
import { commentStyles } from '../utils/GlobalStylesSheet';

export default function CommentSection({ route }) {

    const { params } = route;
    return (
       <>
        <ScrollView>
            <View style={{ backgroundColor: '#fff' }}>
                <PostDescription title={params.state ? params.state : {}} />
                <View>
                    <FlatList
                        data={params.state.comments}
                        renderItem={({ item }) => <Comment title={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            </ScrollView>
            <View style={commentStyles.commentFooter}>
                <View style={commentStyles.replyInputSection}>
                    <TextInput
                        style={commentStyles.inputReply}
                        placeholder="Add a cheerful comment..."
                        value={'hgjbhm'}
                    // onChangeText={setComment}
                    />
                    <TouchableOpacity style={commentStyles.buttonPost}>
                        <Text style={commentStyles.buttonTextPost}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </>
       
    )
}
