import { ScrollView, View, Text } from "react-native"
import styles from './MenuItemsStyles'

const menuItemsToDisplay = ['Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant \n Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramsu \n Pannan Cotta',
]

const MenuItems = () => {
   return(
      <View style={styles.menu_items_wrapper}>
         <ScrollView style={styles.scroll_view}>
            <Text style={styles.view_menu}>View Menu</Text>
            <Text style={styles.menu_items}>{menuItemsToDisplay[0]}</Text>
         </ScrollView>
      </View>
   )
}

export default MenuItems
