import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import PinInputGroup from '../components/PinInputGroup';

const styles = StyleSheet.create({
  button: {
    color: '#000',
    backgroundColor: '#ccc',
  },
  active: {
    backgroundColor: '#f00',
  },
});

const ResultsShowScreen = ({navigation}) => {
  const [pinFilled, setPinFilled] = useState(false);

  return (
    <View>
      <PinInputGroup
        pinLength="5"
        onInputTextChange={pin => {
          if (!pin) {
            return;
          }
          let result = true;
          for (let i in pin) {
            if (!pin[i]) {
              result = false;
            }
          }
          setPinFilled(result);
        }}
      />
      <View
        style={
          pinFilled ? {...styles.button, ...styles.active} : {...styles.button}
        }>
        <Text>Button</Text>
      </View>
    </View>
  );
};

export default ResultsShowScreen;
