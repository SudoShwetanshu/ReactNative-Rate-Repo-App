import React from 'react';
import RepositoryItem  from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   
  },
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <RepositoryItem
      key={item.id}
      id={item.id}
      fullName={item.fullName}
      description={item.description}
      language={item.language}
      stargazersCount={item.stargazersCount}
      forksCount={item.forksCount}
      reviewCount={item.reviewCount}
      ratingAverage={item.ratingAverage}
      ownerAvatarUrl={item.ownerAvatarUrl}
    />
);
  
const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderItem}
            // other props
          />
    </View>
    
  );
};

export default RepositoryList;