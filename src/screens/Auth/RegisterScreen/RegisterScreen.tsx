import React, {memo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Page from 'src/components/page/Page';
import BackButton from 'src/components/backButton/BackButton';
import Header from 'src/components/header/Header';
import TextInput from 'src/components/textInput/TextInput';
import Button from 'src/components/button/Button';

import {Navigation} from 'src/utils/types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from 'src/utils/validator';

import styles from './styles';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({navigation}: Props) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Page>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Header>Register</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

export default memo(RegisterScreen);
