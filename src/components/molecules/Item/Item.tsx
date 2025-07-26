import { Text, View } from "react-native"
import styles from './ItemStyles'

interface ItemProps {
   name: string
   price: string
}

const Item = ({ name, price } : ItemProps) => {
return(
   <View style={styles.container}>
      <Text style={styles.item_text}>{name}</Text>
      <Text>{price}</Text>
   </View>
)
}

export default Item