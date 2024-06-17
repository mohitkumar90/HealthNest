import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import {
    Actionsheet,
    useDisclose,
} from 'native-base';
import { shareModalStyles } from '../utils/GlobalStylesSheet';

export default function SharePopup({ openShareModal, setOpenShareModal }) {
    const { isOpen, onOpen, onClose } = useDisclose();

    useEffect(() => {
        if (openShareModal) {
            onOpen();
        } else {
            onClose()
        }

    }, [openShareModal])

    return (
        <View>
            <Actionsheet
                isOpen={isOpen}
                onClose={() => {
                    setOpenShareModal(false);
                }}>
                <Actionsheet.Content>
                    <View>
                        <Text style={shareModalStyles.title}>Share post</Text>
                    </View>
                    <View style={shareModalStyles.shareOption}>
                        <Image style={shareModalStyles.icon} source={require('../assests/icons/Send.png')} />
                        <Text style={shareModalStyles.text}>Send as a private message</Text>
                    </View>
                    <View style={shareModalStyles.shareOption}>
                        <Image style={shareModalStyles.icon} source={require('../assests/icons/Feed.png')} />
                        <Text style={shareModalStyles.text}>Share as a post</Text>
                    </View>
                    <View style={shareModalStyles.seprator} />
                    <View style={shareModalStyles.shareOption}>
                        <Image style={shareModalStyles.icon} source={require('../assests/icons/Facebook.png')} />
                        <Text style={shareModalStyles.text}>Share on Facebook</Text>
                    </View>
                    <View style={shareModalStyles.shareOption}>
                        <Image style={shareModalStyles.icon} source={require('../assests/icons/Whatsapp.png')} />
                        <Text style={shareModalStyles.text}>Send via WhatsApp</Text>
                    </View>

                </Actionsheet.Content>
            </Actionsheet>
        </View>
    )
}
