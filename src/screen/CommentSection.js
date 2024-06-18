import React, { useRef, useState } from 'react'
import { FlatList, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PostDescription from '../component/postDescription'
import Comment from '../component/comment';
import { commentStyles } from '../utils/GlobalStylesSheet';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../store/action';

export default function CommentSection({ route }) {

    const { params } = route;
    const posts = useSelector(state => state.posts)
    const flatRef = useRef()
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    console.log(posts.filter(val => val.id === params.state.id))
    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: '#fff' }}>
                    <PostDescription title={params.state ? params.state : {}} />
                    <View>
                        <FlatList
                            ref={flatRef}
                            data={posts.filter(val => val.id === params.state.id)[0].comments}
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
                        value={comment}
                        onChangeText={(text) => {
                            setComment(text)
                        }}
                    />
                    <TouchableOpacity style={commentStyles.buttonPost} onPress={() => {
                        Keyboard.dismiss()
                        dispatch(addComments(params.state, comment))
                        setComment("")
                        setTimeout(()=>{
                            flatRef.current.scrollToEnd({ animated: true })
                        },1000)
                    }}>
                        <Text style={commentStyles.buttonTextPost}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    )
}
