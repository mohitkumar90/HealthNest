import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { postStyles, eventStyles } from '../utils/GlobalStylesSheet'
import { Avatar } from 'react-native-paper'
import PollResults from './pollResults'
import SharePopup from './sharePopup'
import PostOptions from './postoptions'
import { ADD_LIKE, addLikes } from '../store/action'
// import Svg, {
//     Use,
//     Image,
//   } from 'react-native-svg';

export default function PostDescription({ title, navigation, dispatch }) {

    const [openShareModal, setOpenShareModal] = useState(false);
    const [openPostOptionModal, setOpenPostOptionModal] = useState(false)

    return (
        <>
            <SharePopup openShareModal={openShareModal} setOpenShareModal={setOpenShareModal} />
            <PostOptions openPostOptionModal={openPostOptionModal} setOpenPostOptionModal={setOpenPostOptionModal} />

            <View style={postStyles.container}>
                <View style={postStyles.categorySection}>
                    <Text style={postStyles.category}>{title.category}</Text>
                    <Text style={postStyles.time}>{title.time}</Text>
                </View>
                <View style={postStyles.cardSection}>
                    {title.profileImage && <Avatar.Image size={40} source={{ uri: title.profileImage }} style={postStyles.avatar} />}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View >
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={postStyles.name}>{title.name}</Text>
                                <Text style={postStyles.status}>{title.status}</Text>
                            </View>
                            <Text style={postStyles.recent}>{title.recent}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setOpenPostOptionModal(true)}>
                            <Image style={postStyles.optionIcon} source={require('../assests/icons/option.png')} />
                        </TouchableOpacity>

                    </View>

                </View>
                {title.events ?
                    <View>
                        <View style={postStyles.eventDetails}>
                            <Text style={postStyles.eventName}>{title.events.eventName}</Text>
                            <Text style={postStyles.content}>{title.events.eventDate}</Text>
                            <Text style={postStyles.eventLoc}>{title.events.eventLocation}</Text>
                        </View>
                        <View style={eventStyles.container}>
                            <View>
                                <Text style={eventStyles.title}>Are you going?</Text>
                                <View style={eventStyles.people}>
                                    <Text style={eventStyles.peopleText}>
                                        <Text style={eventStyles.peopleIcon}>🧑‍🤝‍🧑</Text> {title.events.numberOfpeopleAttending} People Going
                                    </Text>
                                </View>
                            </View>
                            <View style={eventStyles.buttons}>
                                <TouchableOpacity style={eventStyles.button}>
                                    <Text style={eventStyles.buttonText}>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[eventStyles.button, eventStyles.buttonYes]}>
                                    <Text style={eventStyles.buttonText}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    :
                    <>
                        {!title.pollResult && <View style={postStyles.details}>
                            <Text style={postStyles.question}>{title.question}</Text>
                            <Text style={postStyles.content}>{title.content}</Text>
                        </View>}
                    </>

                }
                {title.pollResult && <PollResults />}

                {title.postImage && <Image style={postStyles.postImage} source={{ uri: title.postImage }} />}

                {!title.events && 
                     <View style={postStyles.locationSection}>
                        <Image style={postStyles.locIcon} source={require('../assests/icons/map.png')} />
                        <Text style={postStyles.location}>{title.location}</Text>
                    </View>}
                <View style={postStyles.seprator} />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Avatar.Image size={20} source={{ uri: title.profileImage }} />
                    <Avatar.Image size={20} source={{ uri: 'https://picsum.photos/200/300' }} style={{ marginLeft: -10 }} />
                    <Avatar.Image size={20} source={{ uri: title.profileImage }} style={{ marginLeft: -10 }} />
                    <Text style={postStyles.reactCounts}>24 members reacted to this post</Text>
                </View>
                <View style={postStyles.seprator} />

                <View style={postStyles.reactSection}>
                    <TouchableOpacity style={eventStyles.buttons} onPress={() => {
                        dispatch(addLikes(title.id))
                    }}>
                        <Image style={postStyles.react} source={require('../assests/icons/Like.png')} />
                        <Text style={postStyles.reactText}>{title.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation?.navigate('Question', { state: title })} style={eventStyles.buttons}>
                        <Image style={postStyles.react} source={require('../assests/icons/comment-lines.png')} />
                        <Text style={postStyles.reactText}>{title.comments.length}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={eventStyles.buttons}>
                        <Image style={postStyles.react} source={require('../assests/icons/Group.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={eventStyles.buttons} onPress={() => setOpenShareModal(true)}>
                        <Image style={postStyles.react} source={require('../assests/icons/Share.png')} />
                    </TouchableOpacity>
                </View>

            </View>

        </>
    )
}
