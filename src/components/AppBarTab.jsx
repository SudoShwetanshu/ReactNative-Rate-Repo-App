import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    color: 'white'
  },
});

const AppBarTab = ({ tabName, to }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text style={styles.container} fontWeight="bold"> {tabName} </Text>
      </Link> 
    </Pressable>
  );
};

export default AppBarTab;