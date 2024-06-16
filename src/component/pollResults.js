import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pollResultStyles } from '../utils/GlobalStylesSheet';

const PollResults = () => {
  return (
    <View style={pollResultStyles.container}>
      <Text style={pollResultStyles.title}>What's the best Hospital in India for cancer?</Text>
      <View style={pollResultStyles.option}>
        <View style={pollResultStyles.optionBox}>
          <Text style={pollResultStyles.optionText}>Apollo Hospital, Bangalore</Text>
        </View>
        <Text style={pollResultStyles.percent}>20%</Text>
      </View>
      <View style={pollResultStyles.option}>
        <View style={pollResultStyles.optionBox}>
          <Text style={pollResultStyles.optionText}>AIIMS, Delhi</Text>
        </View>
        <Text style={pollResultStyles.percent}>30%</Text>
      </View>
      <View style={pollResultStyles.option}>
        <View style={pollResultStyles.optionBox}>
          <Text style={pollResultStyles.optionText}>Kokilaben Dhirubhai Ambani Hospital & Medical Research Institute, Mumbai</Text>
        </View>
        <Text style={pollResultStyles.percent}>50%</Text>
      </View>
      <View style={pollResultStyles.footer}>
        <Text style={pollResultStyles.footerText}>203 votes</Text>
        <Text style={pollResultStyles.footerText}>• Poll Ended</Text>
      </View>
    </View>
  );
};



export default PollResults;
