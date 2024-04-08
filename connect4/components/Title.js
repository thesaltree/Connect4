import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Title = () => {

    return (
        <View style={styles.headerText}><Text style={styles.headerTitle}>Thrill & Chill</Text></View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: wp(8),
        fontWeight: 600,
    }
})

export default Title;