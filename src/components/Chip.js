import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {colors} from '../utils/theme';

const ChipComponent = () => {
  return (
    <Chip
      //   icon={() => <MaterialCommunityIcons name="tag-multiple" size={20} color="white" />}
      compact
      onPress={() => console.log('Pressed')}
      style={styles.chip}
      textStyle={styles.chipText}>
      Chip
    </Chip>
    
  );
};

export default ChipComponent;

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    backgroundColor: 'pink',
  },
  chipText: {
    color: 'white',
  },
});
