import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from 'src/utils/themes';
import styles from './styles';

type Props = React.ComponentProps<typeof Input> & {errorText?: string};

const TextInput = ({errorText, ...props}: Props) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

export default memo(TextInput);