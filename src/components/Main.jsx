import React from 'react';
import RepositoryList from './RepositoryList';
import AppBar from './/AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import SignIn from './SignIn';
import theme from '../theme'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar />
    <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
   </View>
  );
};

export default Main;