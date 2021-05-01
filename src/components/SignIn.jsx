import React from 'react';
import { Text, Pressable, View, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Minimum 3 characters required!')
    .required('Username is required'),
  password: yup
    .string()
    .min(0.5, 'Height must be greater or equal to 0.5')
    .required('Password is required'), 
   /* confirm: yup
    .oneOf([yup.ref('password'), null], 'Password must match!') */
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  pressable: {
    flex: 0,
    marginTop: 15,
    marginHorizontal: 20,
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username"  />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <View style={styles.pressable}>
        <Button onPress={onSubmit} title="Sign in"/>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const response = console.log({ username, password });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;