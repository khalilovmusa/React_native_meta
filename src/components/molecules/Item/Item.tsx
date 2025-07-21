import { Text, View } from "react-native"
import styles from './ItemStyles'

interface ItemProps {
   name: string
}

const Item = ({ name } : ItemProps) => {
return(
   <View style={styles.container}>
      <Text style={styles.item_text}>{name}</Text>
   </View>
)
}

export default Item