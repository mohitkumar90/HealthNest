import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
// import {
//     Actionsheet,
//     useDisclose,
//     Modal
// } from 'native-base';
import { createPostStyles } from '../utils/GlobalStylesSheet';
import Modal from "react-native-modal";

export default function AddPost({openAddPostModal, setOpenAddPostModal}) {
    return (
        <Modal isVisible={openAddPostModal}>
                    <View style={createPostStyles.addPostSection}>
                        <View style={createPostStyles.shareOption}>
                            <Image style={createPostStyles.icon} source={require('../assests/icons/create.png')} />
                            <View style={createPostStyles.textSection}>
                                <Text style={createPostStyles.text}>Hide Post</Text>
                                <Text style={createPostStyles.text2}>See fewer posts like this</Text>
                            </View>
                            <Image style={createPostStyles.iconArrow} source={require('../assests/icons/rightarrow.png')} />
                        </View>
                        <View style={createPostStyles.seprator} />
                        <View style={createPostStyles.shareOption}>
                            <Image style={createPostStyles.icon} source={require('../assests/icons/question.png')} />
                            <View style={createPostStyles.textSection}>
                                <Text style={createPostStyles.text}>Unfollow User</Text>
                                <Text style={createPostStyles.text2}>See fewer posts like this</Text>
                               
                            </View>
                            <Image style={createPostStyles.iconArrow} source={require('../assests/icons/rightarrow.png')} />
                        </View>
                        <View style={createPostStyles.seprator} />
                        <View style={createPostStyles.shareOption}>
                            <Image style={createPostStyles.icon} source={require('../assests/icons/poll.png')} />
                            <View style={createPostStyles.textSection}>
                                <Text style={createPostStyles.text}>Report Post</Text>
                                <Text style={createPostStyles.text2}>See fewer posts like this</Text>
                            </View>
                            <Image style={createPostStyles.iconArrow} source={require('../assests/icons/rightarrow.png')} />
                        </View>
                        <View style={createPostStyles.seprator} />
                        <View style={createPostStyles.shareOption}>
                            <Image style={createPostStyles.icon} source={require('../assests/icons/Event.png')} />
                            <View style={createPostStyles.textSection}>
                                <Text style={createPostStyles.text}>Copy Post link</Text>
                                <Text style={createPostStyles.text2}>See fewer posts like this</Text>
                            </View>
                            <Image style={createPostStyles.iconArrow} source={require('../assests/icons/rightarrow.png')} />
                        </View>
                    </View>
                    <View style={{position: 'absolute', bottom: 0, right: 155}}>
                    <TouchableOpacity onPress={()=>setOpenAddPostModal(false)}>
                    <Image style={createPostStyles.cross} source={require('../assests/icons/Expanded.png')} />
                    </TouchableOpacity>
                    </View>
         </Modal>
    )
}
