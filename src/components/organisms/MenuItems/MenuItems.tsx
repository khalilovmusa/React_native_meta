import { View, Text, FlatList } from "react-native"
import styles from './MenuItemsStyles'
import menuItemsToDisplay from '../../../../store/menuItems'
import Item from "../../molecules/Item/Item"
import React from "react"

// const menuItemsToDisplay = ['Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant \n Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramsu \n Pannan Cotta',
// ]

//!=> You can set horizontal={boolean} or vertical={boolean} values to the ScrollView component
//TODO=> By doing that you can set the scrolling elements be horizontal view or vertical view

//!=> You can set indicatorStyle={'colorName'} to the ScrollView and you can set the color style to the indicator

// const MenuItems = () => {
//    return(
//       <View style={styles.menu_items_wrapper}>
//          <ScrollView 
//          horizontal={false} 
//          style={styles.scroll_view}
//          indicatorStyle={'white'}
//          >
//             <Text style={styles.view_menu}>View Menu</Text>
//             <Text style={styles.menu_items}>{menuItemsToDisplay[0]}</Text>
//          </ScrollView>
//       </View>
//    )
// }

//TODO=> In this part we will render the items using FlatList component

interface RenderItemProps {
   name: string, 
   price: string 
}

const Seperator = () => <View style={styles.seperator_styles} />

const MenuHeader = () => <Text style={styles.view_menu} >View menu</Text>

const MenuFooter = () => (
   <Text style={styles.menu_footer}>
      All Rights Reserved by Little Lemon @2025
   </Text>
)

const MenuItems = () => {

   const renderItem = ({ item }: { item: RenderItemProps }) => (
      <Item price={item.price} name={item.name} />
   )

   return(
      <View style={styles.menu_items_wrapper}>
         <FlatList 
         data={menuItemsToDisplay}  
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         ItemSeparatorComponent={Seperator}
         ListHeaderComponent={MenuHeader}
         ListFooterComponent={MenuFooter}
         />
      </View>
   )
} 

export default MenuItems
