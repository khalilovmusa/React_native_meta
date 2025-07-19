import { Text, View } from 'react-native'
import styles from './LittleLemonFooterStyles'

const LittleLemonFooter = () => {
   return(
      <View style={styles.lemon_footer}>
         <Text style={styles.lemon_footer_text}>All rights reserved by Little Lemon @2022</Text>
      </View>
   )
}

export default LittleLemonFooter
