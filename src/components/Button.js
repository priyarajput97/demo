import React from 'react';
import {Button, useTheme} from 'react-native-paper';

const ButtonComponent = ({size, color, label, mode}) => {
  const theme = useTheme();

  const capitalize = text => text[0].toUpperCase() + text.slice(1);

  return (
    <Button
      theme={{
        colors: {
          primary: theme.colors[color],
          onPrimary: theme.colors[`on${capitalize(color)}`],
        },
      }}
      mode={mode}
      compact
      style={theme.buttonSizes[size]}
      labelStyle={{fontSize: theme.buttonSizes[size].fontSize}}
      onPress={() => console.log('hey')}>
      {label}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconButton icon="chevron-left" size={20} />
        <Text>{label}</Text>
        <IconButton icon="chevron-right" size={20} />
      </View>
    </Button>
  );
};

export default ButtonComponent;
