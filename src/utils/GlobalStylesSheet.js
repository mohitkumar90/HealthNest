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
    categorySection:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    postImage: {
        width: '100%',
        height: 250,
        marginBottom: 10
    },
    details: {
        flex: 1,
        paddingRight: 15
    },
    eventDetails: {
        flex: 1,
        paddingRight: 25
    },
    question: {
        fontFamily: 'Proxima Nova',
        fontSize: 16,
        fontWeight: '700',
        color: '#545B63',
        marginTop: 15,
        lineHeight: 20
    },
    eventName: {
        fontFamily: 'Proxima Nova',
        fontSize: 16,
        fontWeight: '700',
        color: '#545B63',
        marginTop: 15,
        lineHeight: 20,
        textTransform: 'uppercase'
    },
    content: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        color: '#545B63',
        marginTop: 5,
        marginBottom: 10,
        lineHeight: 21
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
        fontWeight: '700',
    },
    location: {
        color: '#00A981',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Inter'
    },
    status: {
        color: '',
        paddingLeft: 5
    },
    recent: {
        color: '#00A981',
        fontFamily:'Proxima Nova',
        fontSize: 10,
        // paddingLeft: 5,
        textTransform:'uppercase'
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
    reactText: {
        fontFamily: 'Proxima Nova',
         fontSize: 12,
        color: '#545B63',
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

export const commentStyles = StyleSheet.create({
    commentSection: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderColor: "#E8EBEF",
        borderWidth: 1,
        borderRadius: 10
    },
    myCommentContainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderColor: "#D1D8E0",
        borderWidth: 1,
        borderRadius: 10
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
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    avatar:{
        // width: 40,
        // height: 40
        marginRight: 10
    },
    myAvatar:{
        // width: 40,
        // height: 40
        marginLeft: 10
    },
    optionIcon: {
        width:32,
        height: 32,
    },
    details: {
        flex: 1,
    },
    dot: {
        marginHorizontal: 4
    },
    question: {
        fontFamily: 'Proxima Nova',
        fontSize: 16,
        fontWeight: '700',
        color: '#545B63',
        marginTop: 15
    },
    content: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        color: '#545B63',
        marginTop: 5,
        marginBottom: 10,
        lineHeight: 21
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
        textTransform: 'uppercase'
    },
    seprator: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#E8EBEF',
        marginVertical: 8
    },
    sepratorVertical: {
        width: 1,
        height: 24,
        backgroundColor: '#E8EBEF',
        marginVertical: 8
    },
    react: {
        width: 12,
        height: 14,
        color: '#545B63',
        marginHorizontal: 4
    },
    shareIcon:{
        width: 24,
        height: 24,
        color: '#545B63',
        marginHorizontal: 4
    },
    replyText:{
        color: '#00A981',
        fontSize: 16,
        fontWeight: '500'
    },
    reactCounts: {
        fontFamily: 'Proxima Nova',
        fontSize: 12,
        color: '#00A981',
        marginVertical: 10
    },
    eventLoc: {
        color: '#A5B1C2',
        fontSize: 12
    },
    commentFooter:{
        backgroundColor: 'white',
        height: 60,
        padding: 8,
        borderColor: '#F2F2F2',
        borderWidth: 1

    },
    replyInputSection: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 47,
    paddingHorizontal: 20
    },
    inputReply: {
        flex: 1,
        padding: 10,
        fontSize: 14,
        marginRight: 10,
      },
      buttonPost: {
        padding: 10,
        borderRadius: 20,
      },
      buttonTextPost: {
        color: '#00A981',
        fontSize: 14,
        fontWeight: 'bold',
      },
   
})

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: 'white',
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
        fontFamily: 'Inter',
        fontWeight: '700',
        marginBottom: 30,
        color: '#545B63',
        lineHeight: 36
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
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        color: '#A5B1C2',
        lineHeight: 16.8
    },
    helperText: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        color: '#A5B1C2',
        lineHeight: 16.8,
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
        marginTop: 30,

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
      alignItems: 'center',
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
        fontSize: 14,
        fontWeight: 'bold'
    },
    footerText: {
      fontSize: 14,
    },
  });

  export const shareModalStyles = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        color: '#545B63',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 14,
        marginTop: 10
    },
    icon: {
        width: 30,
        height: 30
    },
    text:{
        fontFamily: 'Inter',
        color: '#545B63',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10
    },
    seprator: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#E8EBEF',
        marginVertical: 8
    },
    shareOption:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
        marginBottom: 15,
        marginLeft: 15
    }
  })

  export const optionModalStyles = StyleSheet.create({
    title: {
        fontFamily: 'Inter',
        color: '#545B63',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 14,
        marginTop: 10
    },
    icon: {
        width: 12,
        height: 12,
        marginTop: 4
    },
    textSection:{
        width: '100%'
    },
    text:{
        fontFamily: 'Inter',
        color: '#545B63',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
        marginBottom: 4
    },
    text2: {
        fontFamily: 'Inter',
        color: '#A5B1C2',
        fontSize: 10,
        fontWeight: '400',
        marginLeft: 10
    },
    seprator: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#E8EBEF',
        marginLeft: 12,
        marginVertical: 10
    },
    shareOption:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        marginBottom: 10,
        marginLeft: 15
    }
  })

  export const headerStyles = StyleSheet.create({
    communityScreen: {
        padding: 15,
        backgroundColor: 'white',
        marginBottom: 10
      },
      topSection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      heading: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#A5B1C2',
        fontFamily: 'Proxima Nova',
        letterSpacing: 1
      },
      subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00A981',
        marginBottom: 10,
      },
      searchBar: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
      },
      categoryButtons: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 15,
      },
      categoryText: {
        color: '#00A981'
      },
      buttonAllPost: {
        flex: 1,
        backgroundColor: '#CCEEE6',
        borderRadius: 13,
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginRight: 10,
      },
      button: {
        flex: 1,
        borderRadius: 13,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#CCEEE6',
        marginRight: 10,
      },
      replyInputSection: {
        width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 5,
          paddingHorizontal: 10,
          borderColor: '#CCEEE6',
          borderWidth: 1
      },
    inputReply: {
        flex: 1,
        padding: 5,
        fontSize: 14,
        marginRight: 10,
        height: 32
      },
      buttonPost: {
        // padding: 5,
        borderRadius: 20,
      },
      buttonTextPost: {
        width: 24,
        height: 24
      },
      searchSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
  })
