import { BlurView } from 'expo';
import theme from '../theme'
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const displayText = (number) => {
  let no;
  if (number && number < 1000) {
    no = number;
  }
  if (number > 1000) {
    no = (number/1000).toFixed(1) + 'k';
  }
  return no;
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    height: 160,
    backgroundColor: theme.colors.white
  },
  header: {
    flex: 1,
    paddingTop: 2,
    flexDirection: 'row',
    width: 320,
  },
  headerImg: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    marginRight: 20,
  },
  badge: {
    backgroundColor: theme.colors.language,
    color: theme.colors.white,
    flexDirection: 'row',
    borderColor: 'blue',
    borderWidth: 1,
    marginLeft: 70,
    paddingTop: 3,
    paddingHorizontal: 20,
    paddingBottom: 3,
    borderRadius: 20,
    width: 150,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  centerFooter: {
    alignItems: 'center'
  }
  
});

const Header = ({ownerAvatarUrl, description, fullName}) => {
  return (
    <View style={styles.header}>
      <View>
        <Image  style={styles.headerImg} source={{
          uri: ownerAvatarUrl,
        }} />
      </View>
      <View>
        <View>
          <Text fontWeight='bold'>{fullName}</Text>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  )
}

const Badge = ({language}) => {
  return (
    <View >
      <Text style={styles.badge} fontWeight='bold' >{language}</Text>
    </View>
  )
}

const Footer = ({stargazersCount, forksCount, reviewCount, ratingAverage}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.centerFooter}>
        <Text fontWeight='bold'>{displayText(stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.centerFooter}>
        <Text fontWeight='bold'>{displayText(forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.centerFooter}>
        <Text fontWeight='bold'>{displayText(reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.centerFooter}>
        <Text fontWeight='bold'>{displayText(ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

const  RepositoryItem = ({fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl}) => {
  return (
    <View style={styles.container}>
     <Header ownerAvatarUrl={ownerAvatarUrl} description={description} fullName={fullName} />
     <Badge language={language} />
     <Footer stargazersCount={stargazersCount} forksCount={forksCount} reviewCount={reviewCount} ratingAverage={ratingAverage} />
    </View>
  );
};
  
  

export default RepositoryItem;