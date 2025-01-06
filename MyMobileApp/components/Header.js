import {  StyleSheet, Text, View, Image} from 'react-native';

export default function(){
    return(
        <View style={styles.header}>
            <Image source={require('../assets/profilepic/uovlogo.png')} style={styles.image}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },

      image: {
        height: 100,
        resizeMode: 'contain',
    },
})