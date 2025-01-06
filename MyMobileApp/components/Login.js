import { PaperProvider } from "react-native-paper";
import { ScrollViewComponent, StyleSheet, Text, View } from 'react-native';


export default function Login(){
    return(
        <PaperProvider>
            <ScrollViewComponent>
                <View style={styles.header}>
                    <Text variants='headlineLarge'>UoV Student Care</Text>

                </View>
                <View style={styles.body}>
                    
                </View>
                <View style={styles.footer}>
                    
                </View>
    
    
            </ScrollViewComponent>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  