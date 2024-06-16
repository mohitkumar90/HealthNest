import { StyleSheet } from "react-native";

export const bottomNavStyles = StyleSheet.create({
    footer:{
        height: 66,
        paddingVertical: 8
    },
    bottomIcons: {
        width: 32,
        height: 32
    },
    bottomAddIcon: {
        width: 42,
        height: 42
    },
})

export const postStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 15
    },
    profileImg: {

    },
    categorySection:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    cardSection: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 11,
    },
    reactSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    avatar:{
        // width: 40,
        // height: 40
        marginRight: 10
    },
    optionIcon: {
        width:32,
        height: 32,
    },
    details: {
        flex: 1,
    },
    question: {
        fontFamily: 'Proxima Nova',
        fontSize: 16,
        fontWeight: '700',
        color: '#4a4a4a',
        marginTop: 15
    },
    content: {
        fontFamily: 'Proxima Nova',
        fontSize: 14,
        fontWeight: '400',
        color: '#545B63',
        marginTop: 5,
        marginBottom: 10
    },
    category: {
        fontFamily: 'Proxima Nova',
        color: '#A5B1C2',
        fontSize: 12,
        // lineHeight: '13.46px'
    },
    time: {
        fontFamily: 'Proxima Nova',
        color: '#545B63',
        fontSize: 12,
        // lineHeight: '14.62px'
    },
    name: {
        color: '#000000',
        fontFamily: 'Proxima Nova',
        fontSize: 14,
        fontWeight: '400',
    },
    location: {
        color: '#00A981',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'inter'
    },
    status: {
        color: '',
        paddingLeft: 5
    },
    recent: {
        color: '#00A981',
        fontFamily:'Proxima Nova',
        fontSize: 10,
        paddingLeft: 5,
    },
    seprator: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#E8EBEF',
        marginVertical: 8
    },
    react: {
        width: 24,
        height: 24,
        color: '#545B63'
    },
    reactCounts: {
        fontFamily: 'Proxima Nova',
        fontSize: 12,
        color: '#545B63',
        marginLeft: 10
    },
    eventLoc: {
        color: '#A5B1C2',
        fontSize: 12
    }
})

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        padding: 20,
    },
    logo: {
        // width: 70,
        // height: 70,
        marginBottom: 20,
        shadowColor: '0px 4px 10px 0px #0000001A'
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 30,
        color: '#545B63'
    },
    input: {
        borderBottomColor: '#A5B1C2',
        borderBottomWidth: 1,
        // paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: '400'
    },
    securityText: {
        fontSize: 12,
        color: '#A5B1C2',
    },
    helperText: {
        fontSize: 12,
        color: '#A5B1C2',
        marginBottom: 20,
    },
    subTitle: {
        lineHeight: "16.8px",
    },
    sendOTPButton: {
        width: 107,
        height: 51,
        backgroundColor: '#00A981',
        padding: 15,
        borderRadius: 2,
        gap: 10,
        marginHorizontal: 'auto',
        marginTop: 30
    },
    sendOTPButtonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16
    },
});

export const eventStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      backgroundColor: '#EEFAF9',
      justifyContent: 'space-between',
      padding: 20,
      marginTop: 9
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 3,
      color: '#545B63'
    },
    people: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    peopleText: {
      fontSize: 12,
      color: '#545B63',
      fontFamily: 'Proxima Nova'
    },
    peopleIcon: {
      fontSize: 12,
      marginRight: 5,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
        width: 66,
      padding: 10,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#CCEEE6',
    },
    buttonYes: {
    marginLeft: 10
    },
    buttonText: {
      fontSize: 14,
      textAlign: 'center',
      color: '#00A981',
    },
  });

  export const pollResultStyles = StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#545B63',
      marginBottom: 11,
    },
    option: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 9,
    },
    optionBox: {
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 5,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      fontSize: 12,
      color: '#545B63',
      fontWeight: '400'
    },
    percent: {
        fontSize: 12,
        color: '#545B63',
        fontWeight: '400'
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      color: '#A5B1C2'
    },
    footerDot: {
        marginHorizontal: 4,
        fontSize: 14
    },
    footerText: {
      fontSize: 14,
    },
  });