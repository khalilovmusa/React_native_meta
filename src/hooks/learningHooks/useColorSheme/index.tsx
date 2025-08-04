import { View, Pressable, Text, useColorScheme } from "react-native"
import styles from './styles'
import ResponsiveApp from "../useWindowDimensions"

const ToggleTheme = () => {
   const colorScheme = useColorScheme()

   return(
      <View style={[
         styles.container,
         colorScheme === 'light' ? styles.lightMode
         : styles.darkMode
      ]}>
         <ResponsiveApp />
         <Text style={[styles.headerText,  colorScheme === 'light' ? { color: '#1e1e1e'} : { color: '#fff'}]}>Toggle the theme in Little Lemon App</Text>
         <Pressable
            style={styles.button}
         >
            <Text style={styles.buttonText}>
               Toggle theme
            </Text>
         </Pressable>
         <Text style={[styles.regularText,  colorScheme === 'light' ? { color: '#1e1e1e'} : { color: '#fff'}]}>Color Scheme: {colorScheme}</Text>
      </View>
   )
}

export default ToggleTheme
