import { StyleSheet, View } from "react-native"
import LittleLemonHeader from "../LittleLemonHeader/LittleLemonHeader"
import LittleLemonFooter from "../LittleLemonFooter/LittleLemonFooter"
import LittleLemonDescription from "../LittleLemonDescription/LittleLemonDescription"
// import MenuItems from "../MenuItems/MenuItems"

const WelcomeScreen = () => {
   return(
      <View style={styles.container}>
      <LittleLemonHeader />
      <LittleLemonDescription />
      {/* <MenuItems /> */}
      <LittleLemonFooter />
    </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#495E57',
   },
})

export default WelcomeScreen
