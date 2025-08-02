import * as React from 'react'
import { TextInput, Text, ScrollView } from 'react-native'
import styles from './FeedbackFormStyles'

const FeedbackForm = () => {
   const [ firstName, setFirstName ] = React.useState('')
   const [ lastName, setLastName ] = React.useState('')
   const [ message, setMessage ] = React.useState('')
   const [ password, setPassword ] = React.useState('')
   return(
      <ScrollView style={styles.container}>
         <Text style={styles.headingSection}>
            How was your visit top Little Lemon?
         </Text>
         <Text style={styles.infoSection}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vel explicabo, nihil recusandae exercitationem, odit quia ex ducimus, 
            commodi neque nam totam id asperiores magnam beatae similique enim? 
         </Text>
         <TextInput 
               value={firstName}
               style={styles.input}
               onChangeText={setFirstName}
               />
         <TextInput 
               value={lastName}
               style={styles.input}
               onChangeText={setLastName}
               />
         <TextInput 
               value={message}
               style={styles.messageInput}
               onChangeText={setMessage}
               multiline={true}
               />
         <TextInput 
               placeholder='Password'
               value={password}
               style={styles.input}
               onChangeText={setPassword}
               secureTextEntry={true} //!=> With this we can hide the password typed in this place
               />
         <TextInput 
               style={styles.input}
               placeholder='Phone number'
               keyboardType={"phone-pad"}
               maxLength={10}
               />
      
      </ScrollView>
   )
}

//?=> Common TextInput component props

{/* 

   <TextInput 
   style={styles.input} 
   value={firstName} 
   onChangeText={onChangeFirstName} 
   placeholder={'First Name'} 

   multiline={boolean: true ? false}
   maxLength={number: 250}
   keyboardType={"phone-pad" || "default"}
/>  

*/}

export default FeedbackForm
