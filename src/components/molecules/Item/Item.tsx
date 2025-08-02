import { Text, View } from "react-native"
import styles from './ItemStyles'

interface ItemProps {
   name: string
   price?: string
}

const Item = ({ name } : ItemProps) => {
return(
   <View style={styles.container}>
      <Text style={styles.item_text}>{name}</Text>
      {/* <Text>{price}</Text> 
      !=> Removed the price because now im trying to use SectionList component
      */}
   </View>
)
}

export default Item