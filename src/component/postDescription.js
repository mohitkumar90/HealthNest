import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { postStyles, eventStyles } from '../utils/GlobalStylesSheet'
import { Avatar } from 'react-native-paper'
import PollResults from './pollResults'

export default function PostDescription({ title }) {
    console.log(title)
    return (
        <>
            <ScrollView>
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
                            <Image style={postStyles.optionIcon} source={require('../assests/icons/option.png')} />
                        </View>

                    </View>
                    {title.events ?
                        <View>
                            <View style={postStyles.details}>
                                <Text style={postStyles.question}>{title.events.eventName}</Text>
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

                    {!title.events && <Text style={postStyles.location}>{title.location}</Text>}
                    <View style={postStyles.seprator} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Avatar.Image size={20} source={{ uri: title.profileImage }} />
                        <Avatar.Image size={20} source={{ uri: 'https://picsum.photos/200/300' }} style={{ marginLeft: -10 }} />
                        <Avatar.Image size={20} source={{ uri: title.profileImage }} style={{ marginLeft: -10 }} />
                        <Text style={postStyles.reactCounts}>24 members reacted to this post</Text>
                    </View>
                    <View style={postStyles.seprator} />

                    <View style={postStyles.reactSection}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={postStyles.react} source={require('../assests/icons/Like.png')} />
                            <Text>24</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={postStyles.react} source={require('../assests/icons/comment-lines.png')} />
                            <Text>24</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={postStyles.react} source={require('../assests/icons/Group.png')} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={postStyles.react} source={require('../assests/icons/Share.png')} />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}
