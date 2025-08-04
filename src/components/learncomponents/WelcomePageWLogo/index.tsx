import { Image, Text, ScrollView } from "react-native"
import styles from './styles'

const WelcomePageWLogo = () => {
   return(
      <ScrollView style={styles.container}>
         <Image 
            source={require("../../../assets/littleLemonHeader.png")}
            style={styles.logo}
            accessible={true}
            //!=> It is always good to keep accessibility as a priority while developing applications. The accessible prop accepts a Boolean true or false. When it is set to true, it indicates that the image is an accessibility element.
            accessibilityLabel="Little Lemon Header"
            //!=> Once the image is set to be accessible, it is time to provide an accessible label for the image. This is the text that the screen reader reads when the user interacts with the image. Make sure to give a meaningful and descriptive name to the prop.
         />
         <Text style={styles.title}>
            Little lemon, your local Mediterranean Bistro
         </Text>
         <Image 
            source={require("../../../assets/pic1.png")}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Food picture 1"
         />
         <Image 
            source={require("../../../assets/pic2.png")}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Food picture 2"
         />
         <Image 
            source={require("../../../assets/pic3.png")}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Food picture 3"
         />
         <Image 
            source={require("../../../assets/pic4.png")}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Food picture 4"
         />
      </ScrollView>
   )
}

export default WelcomePageWLogo