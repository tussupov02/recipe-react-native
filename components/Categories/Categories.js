import { StyleSheet } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Category from '../Category/Category';
import { useSelector } from 'react-redux';

const Categories = ({}) => {
    const categories = useSelector((state) => state.categories.categories);
    const activeCategory = useSelector(
        (state) => state.categories.activeCategory
    );

    return (
        <Animated.ScrollView
            entering={FadeInDown.duration(500)}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {categories.map((category, index) => {
                const isActive = activeCategory === category.strCategory;
                return (
                    <Category
                        key={index}
                        name={category.strCategory}
                        thumbnail={category.strCategoryThumb}
                        isActive={isActive}
                    />
                );
            })}
        </Animated.ScrollView>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});
