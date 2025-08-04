import { StyleSheet } from "react-native";

export default StyleSheet.create({
   logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain'
   },
   container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff'
   },
   title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#1e1e1e',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
   }
})