import { StyleSheet } from "react-native";


const green = '#495E57'
const yellow = '#F4CE14'

export default StyleSheet.create({
   menu_items_wrapper: {
      flex: 0.75,
      padding: 20,
      paddingRight: 10
   },
   scroll_view: {
      padding: 40,
      backgroundColor: green,
   },
   view_menu: { 
      fontSize: 40, 
      flexWrap: 'wrap', 
      color: 'white', 
   },
   menu_items: {
      color: yellow, 
      fontSize: 15
   },
   seperator_styles: {
      borderWidth: 1,
      borderColor: '#EDEFEE'
   },
   menu_footer: {
      width: '100%',
      height: 30,
      backgroundColor: '#F4CE14',
      color: '#fff',
      textAlign: 'center',
      textAlignVertical: 'center'
   }
})