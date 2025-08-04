import { Text, View, useWindowDimensions } from "react-native"
import styles from "./styles"

const ResponsiveApp = () => {
   const { width, height, fontScale } = useWindowDimensions()

   return(
      <View style={styles.container}>
         <Text style={styles.regularText}>Window Dimensions: Width {width}px, Height {height}, Font size {fontScale}px</Text>
      </View>
   )
}

export default ResponsiveApp
