import { Alert, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import styles from './LoginScreenStyles'
import LittleLemonFooter from "../LittleLemonFooter/LittleLemonFooter"
import { useState } from "react"

const LoginScreen = () => {
   const [ email, setEmail ] = useState('')
   const [ password, setPassword ] = useState('')
   const [ isLoggedIn, setIsLoggedIn ] = useState(false)

   const loginFunc = () => {
      if(!isLoggedIn) {
         Alert.alert(`Your email: ${email},\nPassword: ${password}`)
      }
      setIsLoggedIn(!isLoggedIn)
   }

   return(
      <View style={styles.container}>
         {isLoggedIn ? <Text style={styles.headerText}>You are logged in!</Text> : (
         <ScrollView>
            <Text style={styles.headerText}>Welcome to the Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue</Text>
            <TextInput 
            style={styles.input}
            value={email}
            placeholder={"example@email.com"}
            onChangeText={setEmail}
            // onFocus={() => Alert.alert("You've opened the textInput component")}
            keyboardType={'email-address'}
            clearButtonMode="always" //!=> Only for IOS
            />
            <TextInput 
            style={styles.input}
            value={password}
            secureTextEntry={true}
            placeholder={"password"}
            // onFocus={() => Alert.alert("You've opened the TextInput component")}
            // onBlur={() => Alert.alert('Now youre leaving the TexInput component')}
            onChangeText={setPassword}
            keyboardType={'default'}
            />
      </ScrollView>)}
      <Pressable
            style={styles.button}
            onPress={loginFunc}
         >
         <Text style={styles.buttonText}>{isLoggedIn? 'Log out' : 'Log In'}</Text>
      </Pressable>
         <LittleLemonFooter />
      </View>
   )
}

export default LoginScreen
