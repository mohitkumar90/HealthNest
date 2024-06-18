import React, { useState } from 'react'
import { View, Text, Box, Stagger, HStack, IconButton, PresenceTransition, Center } from 'native-base'
import { useDisclose } from 'native-base'
import MaterialIconsIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { Image, TouchableOpacity } from 'react-native';
import { bottomNavStyles } from '../utils/GlobalStylesSheet';
import AddPost from './addPost';


const FloatingButton = ({ setShowModal, setShowUnavailability }) => {

    const {
        isOpen,
        onToggle
    } = useDisclose()
    const [openAddPostModal, setOpenAddPostModal] = useState(false);

    const getchoicesunavailability = async () => {
        // console.log('SHIFT_START SHIFT_START SHIFT_START SHIFT_START SHIFT_START')
        // await getChoicesDataByKey('absence_type')
        // await getChoicesDataByKey('absence_reason')
        // await getChoicesDataByKey('sickness_reason')
        // await getChoicesDataByKey('absence_informed_method')
        // await getChoicesDataByKey('absence_planned')
        // // await getChoicesDataByKey('travel_type')
        // // await getChoicesDataByKey('regular_shift_type')
        // await getChoicesDataByKey('absence_paid')
        // console.log('SHIFT_COMPLETE SHIFT_COMPLETE SHIFT_COMPLETE SHIFT_COMPLETE ')
    }
    const getchoicesAvalibility = async () => {
        // console.log('SHIFT_START SHIFT_START SHIFT_START SHIFT_START SHIFT_START')
        // await getChoicesDataByKey('travel_type')
        // await getChoicesDataByKey('regular_shift_type')
        // console.log('SHIFT_COMPLETE SHIFT_COMPLETE SHIFT_COMPLETE SHIFT_COMPLETE ')
    }
    return (
        <Box alignItems="flex-end" >
            <View style={{ display: isOpen ? null : "none" }}>
            <PresenceTransition visible={isOpen} initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      transition: {
        duration: 250
      }
    }}>
                <View style={{marginTop: -240}}>
                <AddPost />
                </View>


        </PresenceTransition>
            </View>
            <TouchableOpacity  onPress={onToggle}>
              <Image style={bottomNavStyles.bottomAddIcon} source={require('../assests/icons/Default.png')} />
              </TouchableOpacity>
        </Box>
    )

}

export default React.memo(FloatingButton);
