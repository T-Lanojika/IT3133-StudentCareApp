import {  StyleSheet, Text, View, Image} from 'react-native';

export default function(){
    return(
        <View style={styles.footer}>
        <Text style={styles.footerText}>UoV © Care</Text>
    </View>
)
}

const styles = StyleSheet.create({
    footer: {
        width:'100%',
        backgroundColor: '#4b0150',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText:{
        color:'#FFFFFF',
        fontSize:12,
        textAlign:'center',
        padding:5,
      }
})