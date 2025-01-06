export default function Courses(){
    return(
        <PaperProvider>

            <View style={styles.header}>
                <View >
                    <Header/>
                </View>
            </View>

                <View style={styles.body}>
                <View style={styles.section}>
                    <View><Text>Age: {student.age} | </Text></View>
                    <View><Text>Gender: {student.gender}</Text></View>
                </View>

                <View style={styles.section}>
                    <View><Text style={styles.heading}>Course Information</Text></View>
                    <View><Text>Code: {student.email}</Text></View>
                    <View><Text>Department: {student.phone}  </Text></View>
                    <View><Text>Duration: {student.address}</Text></View>
                    <View><Text>description: {student.address}</Text></View>
                </View>
                </View>

                <View style={styles.footer}>
                    <Footer/>
                </View>


            
        </PaperProvider>
    )
}