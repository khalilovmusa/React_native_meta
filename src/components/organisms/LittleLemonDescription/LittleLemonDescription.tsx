import { Text, View } from "react-native"
import styles from './LittleLemonDescriptionStyles'

const LittleLemonDescription = () => {
   return(
      <View style={styles.description_container}>
         <Text style={[styles.welcome_text, styles.general_text]}>
            Welcome to Little Lemon
         </Text>
         <Text style={[styles.general_text, styles.description]}>
            Little Lemon is a charming neighborhood bistro that serves 
            simple food and classic cocktails in a lively but casual envrionment.
            We would love to hear more about your experience with us!
         </Text>
      </View>
   )
}

export default LittleLemonDescription
