import { StyleSheet } from 'react-native';

export default StyleSheet.create({
   darkMode: {
      backgroundColor: '#1e1e1e',
      color: '#fff'
   },
   lightMode: {
      backgroundColor: '#fff',
      color: '#1e1e1e'
   },
   button: {
      borderWidth: 2,
      borderRadius: 12,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
   },
   headerText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
   },
   buttonText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
   },
   regularText: {
      fontSize: 22,
      textAlign: 'center',
      marginTop: 30,
      fontWeight: 'bold'
   }
})