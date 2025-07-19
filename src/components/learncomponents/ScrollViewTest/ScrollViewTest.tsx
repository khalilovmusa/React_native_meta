import { ScrollView, View } from "react-native";
import styles from './ScrollViewStyles'

const ScrollViewTest = () => {
   return(
      <View style={styles.scrollview_container}>
      <ScrollView style={styles.scrollview}>
         {null}
      </ScrollView>
      </View>
   )
}

export default ScrollViewTest
