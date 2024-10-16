import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Button from './src/components/Button';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {colors} from './src/utils/theme';

const MyTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    onPrimary: colors.white,
    secondary: colors.secondary,
    onSecondary: colors.primary,
    tertiary: colors.red,
    onTertiary: colors.yellow,
  },
  buttonSizes: {
    small: {
      minWidth: 50,
      paddingVertical: 0,
      paddingHorizontal: 4,
      fontSize: 10,
      alignSelf: 'flex-start',
    },
    medium: {
      minWidth: 80,
      paddingVertical: 2,
      paddingHorizontal: 4,
      fontSize: 12,
      alignSelf: 'flex-start',
    },
    large: {
      minWidth: 100,
      paddingVertical: 4,
      paddingHorizontal: 4,
      fontSize: 16,
      alignSelf: 'flex-start',
    },
  },
};

const App = () => {
  return (
    <PaperProvider theme={MyTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button label="Label" size="large" color="primary" mode="contained" />
        <Button label="Label" size="medium" color="primary" mode="contained" />
        <Button label="Label" size="small" color="primary" mode="contained" />

        <Button label="Label" size="large" color="secondary" mode="contained" />
        <Button
          label="Label"
          size="medium"
          color="secondary"
          mode="contained"
        />
        <Button label="Label" size="small" color="secondary" mode="contained" />

        <Button label="Label" size="large" color="tertiary" mode="contained" />
        <Button label="Label" size="medium" color="tertiary" mode="contained" />
        <Button label="Label" size="small" color="tertiary" mode="contained" />
      </ScrollView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: 20,
    gap: 10,
  },
});
