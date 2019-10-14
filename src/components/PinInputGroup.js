import React, {useState, useEffect} from 'react';
import PinInput from './PinInput';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const PinInputGroup = props => {
  let [pinInput, setPinInput] = useState(null);
  let [pinInputInfo, setPinInputInfo] = useState({});

  const init = () => {
    const pinInput = {};
    for (let i = 0; i < props.pinLength; i++) {
      pinInput[i] = '';
    }
    setPinInput(pinInput);
  };

  const initInput = (ref, index) => {
    const info = {
      ref: ref,
      prev: index - 1 >= 0 ? index - 1 : null,
      next: index + 1 < props.pinLength ? index + 1 : null,
    };

    pinInputInfo[index] = info;
    setPinInputInfo(pinInputInfo);
  };

  const pinInputOnFocus = index => {
    let pinInputCopy = {...pinInput};
    if(!pinInputCopy[index]) {
      return
    }
    pinInputCopy[index] = '';
    setPinInput(pinInputCopy);
  };

  const pinInputOnChange = (value, index) => {
    let pinInputCopy = {...pinInput};

    pinInputCopy[index] = value;
    setPinInput(pinInputCopy);

    if (pinInputInfo[index].next !== null) {
      pinInputInfo[pinInputInfo[index].next].ref.focus();
    }
  };

  const pinInputOnKeyPress = (key, index) => {
    if (key === 'Backspace') {
      if (pinInput[index] !== '') {
        return;
      }
      if (pinInputInfo[index].prev !== null) {
        pinInputInfo[pinInputInfo[index].prev].ref.focus();
      }
    }
  };

  const renderPinInput = () => {
    const pinInputView = [];

    if (pinInput === null) {
      return null;
    }

    for (let i = 0; i < props.pinLength; i++) {
      pinInputView.push(
        <PinInput
          pinInputOnFocus={pinInputOnFocus}
          pinInputOnChange={pinInputOnChange}
          pinInputOnKeyPress={pinInputOnKeyPress}
          onInitInput={initInput}
          value={pinInput[i]}
          key={i}
          _index={i}
        />,
      );
    }
    return pinInputView;
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    props.onInputTextChange(pinInput);
  }, [pinInput]);

  return <View style={styles.container}>{renderPinInput()}</View>;
};

export default PinInputGroup;
