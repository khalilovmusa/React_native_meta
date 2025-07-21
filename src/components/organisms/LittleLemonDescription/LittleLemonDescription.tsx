import { ScrollView, Text, View } from "react-native"
import styles from './LittleLemonDescriptionStyles'

//!=> indicatorStyle only works on IOS devices it is ignored on android

const LittleLemonDescription = () => {
   return(
      <View style={styles.description_container}>
         <ScrollView indicatorStyle={ "white" }>
         <Text style={[styles.welcome_text, styles.general_text]}>
            Welcome to Little Lemon
         </Text>
         <Text style={[styles.general_text, styles.description]}>
            Little Lemon is a charming neighborhood bistro that serves 
            simple food and classic cocktails in a lively but casual envrionment.
            We would love to hear more about your experience with us!
         </Text>
         </ScrollView>
      </View>
   )
}

export default LittleLemonDescription
