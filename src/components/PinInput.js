import React, {useEffect, useRef, memo} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: 30,
    height: 30,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});

const _rule = /^[0-9]*$/;

const PinInputGroup = memo(props => {
  const updateRef = () => {
    props.onInitInput(this._input, props._index);
  };
  const validation = props.rull || _rule;

  useEffect(() => {}, []);
  return (
    <TextInput
      keyboardType="numeric"
      ref={component => {
        this._input = component;
        updateRef();
      }}
      onFocus={() => {
        props.pinInputOnFocus(props._index);
      }}
      onChangeText={value => {
        if (!validation.test(value)) {
          return;
        }
        props.pinInputOnChange(value, props._index);
      }}
      onKeyPress={({nativeEvent: {key}}) => {
        props.pinInputOnKeyPress(key, props._index);
      }}
      style={{...styles.input, ...props.pinInputStyle}}
      value={props.value}
      maxLength={1}
    />
  );
});

export default PinInputGroup;

// onKeyPress onFocus onChangeText
