import { ScrollView, View, Text } from "react-native"
import styles from './MenuItemsStyles'

const menuItemsToDisplay = ['Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant \n Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramsu \n Pannan Cotta',
]

//!=> You can set horizontal={boolean} or vertical={boolean} values to the ScrollView component
//TODO=> By doing that you can set the scrolling elements be horizontal view or vertical view

//!=> You can set indicatorStyle={'colorName'} to the ScrollView and you can set the color style to the indicator

const MenuItems = () => {
   return(
      <View style={styles.menu_items_wrapper}>
         <ScrollView 
         horizontal={false} 
         style={styles.scroll_view}
         indicatorStyle={'white'}
         >
            <Text style={styles.view_menu}>View Menu</Text>
            <Text style={styles.menu_items}>{menuItemsToDisplay[0]}</Text>
         </ScrollView>
      </View>
   )
}

export default MenuItems
