import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CategoryFiltering from '../../components/categoryFiltering/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering/TypeFiltering';

import ProductContainer from '../../components/ProductContainer/ProductContainer';

const CategoryFilterScreen = ({route}) => {
  const [category, setCategory] = useState(route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
