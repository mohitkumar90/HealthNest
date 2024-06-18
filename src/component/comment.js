import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { commentStyles, eventStyles } from '../utils/GlobalStylesSheet'
import { Avatar } from 'react-native-paper'
import PollResults from './pollResults'
import SharePopup from './sharePopup'
import PostOptions from './postoptions'

export default function Comment({ title }) {
    const [openShareModal, setOpenShareModal] = useState(false);
    const [openPostOptionModal, setOpenPostOptionModal] = useState(false)

    return (
        <>
        <SharePopup openShareModal={openShareModal} setOpenShareModal={setOpenShareModal} />
            <PostOptions openPostOptionModal={openPostOptionModal} setOpenPostOptionModal={setOpenPostOptionModal} />
            {!title.myComment ? 
            <View style={commentStyles.commentSection}>
            {title.profileImage && <Avatar.Image size={24} source={{ uri: title.profileImage }} style={commentStyles.avatar} />}
            <View style={commentStyles.container}>
                <View style={commentStyles.cardSection}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={commentStyles.name}>{title.name}</Text>
                                <Text style={commentStyles.dot}>.</Text>
                                <Text style={commentStyles.time}>{title.time}</Text>
                            </View>
                            <Text style={commentStyles.recent}>{title.recent}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setOpenPostOptionModal(true)}>
                        <Image style={commentStyles.optionIcon} source={require('../assests/icons/option.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Text style={commentStyles.content}>{title.content}</Text>
                <View style={commentStyles.seprator} />
                <View style={commentStyles.reactSection}>
                    <TouchableOpacity style={eventStyles.buttons}>
                        <Image style={commentStyles.react} source={require('../assests/icons/Up.png')} />
                        <Text>24</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={eventStyles.buttons}>
                        <Image style={commentStyles.react} source={require('../assests/icons/Down.png')} />
                        <Text>24</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={eventStyles.buttons} onPress={() => setOpenShareModal(true)}>
                        <Image style={commentStyles.shareIcon} source={require('../assests/icons/Share.png')} />
                    </TouchableOpacity>
                    <View style={commentStyles.sepratorVertical} />
                    <TouchableOpacity>
                        <Text style={commentStyles.replyText}>Reply</Text>
                    </TouchableOpacity>
                </View>
                <Text style={commentStyles.reactCounts}>2 replies</Text>
            </View>
        </View>
        :
        <View style={commentStyles.commentSection}>
                <View style={commentStyles.myCommentContainer}>
                    <Text style={commentStyles.content}>{title.content}</Text>
                    <View style={commentStyles.seprator} />
                    <View style={commentStyles.reactSection}>
                        <TouchableOpacity style={eventStyles.buttons}>
                            <Image style={commentStyles.react} source={require('../assests/icons/Up.png')} />
                            <Text>24</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={eventStyles.buttons}>
                            <Image style={commentStyles.react} source={require('../assests/icons/Down.png')} />
                            <Text>24</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={eventStyles.buttons} onPress={() => setOpenShareModal(true)}>
                            <Image style={commentStyles.shareIcon} source={require('../assests/icons/Share.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={eventStyles.buttons} onPress={() => setOpenPostOptionModal(true)}>
                            <Image style={commentStyles.shareIcon} source={require('../assests/icons/tripledot.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                {title.profileImage && <Avatar.Image size={24} source={{ uri: title.profileImage }} style={commentStyles.myAvatar} />}
            </View>
            }
        </>
    )
}
