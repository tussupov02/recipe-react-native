import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const HomeTopBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    source={require('../../assets/images/avatar.png')}
                    style={styles.avatar}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <SimpleLineIcons
                    name="bell"
                    size={25}
                />
            </TouchableOpacity>
        </View>
    );
};
export default HomeTopBar;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
    },
});
