import { useState } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import SafeAreaView from '../components/SafeAreaView/SafeAreaView';
import HomeTopBar from '../components/HomeTopBar/HomeTopBar';
import HomeWelcomeText from '../components/HomeWelcomeText/HomeWelcomeText';
import HomeInput from '../components/HomeInput/HomeInput';
import Categories from '../components/Categories/Categories';
import Recipes from '../components/Recipes/Recipes';

const HomeScreen = () => {
    const [inputText, setInputText] = useState('');

    return (
        <SafeAreaView>
            <FlatList
                style={styles.container}
                ListHeaderComponent={
                    <>
                        <HomeTopBar />
                        <HomeWelcomeText />
                        <HomeInput
                            inputText={inputText}
                            setInputText={setInputText}
                        />
                        <Categories />
                    </>
                }
                ListFooterComponent={<Recipes  inputText={inputText}/>}
            ></FlatList>
        </SafeAreaView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
});
