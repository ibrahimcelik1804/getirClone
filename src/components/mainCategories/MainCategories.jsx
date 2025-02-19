import {View,  StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import categoriesGetir from '../../assets/categoriesGetir';


const MainCategories = () => {

  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default MainCategories;
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
