import { Image, Text, View } from "react-native"
import styles from './styles'

const WelcomePageWLogo = () => {
   return(
      <View style={styles.container}>
         <Image 
          source={require("../../../assets/littleLemonHeader.png")}
          style={styles.logo}
         />
         <Text style={styles.title}>
            Little lemon, your local Mediterranean Bistro
         </Text>
      </View>
   )
}

export default WelcomePageWLogo