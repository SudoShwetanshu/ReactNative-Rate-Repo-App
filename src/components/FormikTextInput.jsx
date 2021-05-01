import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from '../theme'
import TextInput from './TextInput';
import Text from './Text';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
      color: theme.colors.error,
      marginLeft: 20
    },
    input: {
      flex: 0,
      marginHorizontal: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderColor: showError ? theme.colors.error : 'black',
      borderRadius: 20,
      borderWidth: 1,
      marginVertical: 15
    },
  });

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;