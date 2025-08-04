import { Text, View } from 'react-native'
import styles from './LittleLemonHeaderStyles.tsx'
import TestImage from '../../learncomponents/WelcomePageWLogo/index.tsx'
const LittleLemonHeader = () => {
   return(
   <View style={styles.lemon_header}>
      <Text style={styles.lemon_header_text} numberOfLines={1}>Little Lemon Restaurant</Text>
      <TestImage />
   </View>)
}

export default LittleLemonHeader
