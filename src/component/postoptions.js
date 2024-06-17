import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import {
    Actionsheet,
    useDisclose,
} from 'native-base';
import { optionModalStyles } from '../utils/GlobalStylesSheet';

export default function PostOptions({ openPostOptionModal, setOpenPostOptionModal }) {
    const { isOpen, onOpen, onClose } = useDisclose();

    useEffect(() => {
        if (openPostOptionModal) {
            onOpen();
        } else {
            onClose()
        }

    }, [openPostOptionModal])

    return (
        <View>
            <Actionsheet
                isOpen={isOpen}
                onClose={() => {
                    setOpenPostOptionModal(false);
                }}>
                <Actionsheet.Content>
                    <View style={optionModalStyles.shareOption}>
                        <Image style={optionModalStyles.icon} source={require('../assests/icons/visible.png')} />
                        <View style={optionModalStyles.textSection}>
                        <Text style={optionModalStyles.text}>Hide Post</Text>
                        <Text style={optionModalStyles.text2}>See fewer posts like this</Text>
                        <View style={optionModalStyles.seprator} />
                        </View>
                    </View>
                    
                    <View style={optionModalStyles.shareOption}>
                        <Image style={optionModalStyles.icon} source={require('../assests/icons/Unfollow.png')} />
                        <View style={optionModalStyles.textSection}>
                        <Text style={optionModalStyles.text}>Unfollow User</Text>
                        <Text style={optionModalStyles.text2}>See fewer posts like this</Text>
                        <View style={optionModalStyles.seprator} />
                        </View>
                    </View>
                    <View style={optionModalStyles.shareOption}>
                        <Image style={optionModalStyles.icon} source={require('../assests/icons/report.png')} />
                        <View style={optionModalStyles.textSection}>
                        <Text style={optionModalStyles.text}>Report Post</Text>
                        <Text style={optionModalStyles.text2}>See fewer posts like this</Text>
                        <View style={optionModalStyles.seprator} />
                        </View>
                    </View>
                    <View style={optionModalStyles.shareOption}>
                        <Image style={optionModalStyles.icon} source={require('../assests/icons/copy.png')} />
                        <View style={optionModalStyles.textSection}>
                        <Text style={optionModalStyles.text}>Copy Post link</Text>
                        <Text style={optionModalStyles.text2}>See fewer posts like this</Text>
                        </View>
                    </View>

                </Actionsheet.Content>
            </Actionsheet>
        </View>
    )
}
