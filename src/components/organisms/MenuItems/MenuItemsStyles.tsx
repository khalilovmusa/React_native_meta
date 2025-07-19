import { StyleSheet } from "react-native";


const green = '#495E57'
const yellow = '#F4CE14'

export default StyleSheet.create({
   menu_items_wrapper: {
      flex: 0.75
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
      fontSize: 30
   }
})