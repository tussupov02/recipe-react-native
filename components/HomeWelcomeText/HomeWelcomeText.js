import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/constants/colors';

const HomeWelcomeText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subhead}>Hello, Students!</Text>
            <Text style={styles.heading}>
                Make your own food, stay at{' '}
                <Text style={styles.highlight}>home</Text>
            </Text>
        </View>
    );
};
export default HomeWelcomeText;
const styles = StyleSheet.create({
    container: { marginTop: 25, gap: 5 },
    subhead: {},
    heading: { fontSize: 35 },
    highlight: { color: colors.amber600 },
});
