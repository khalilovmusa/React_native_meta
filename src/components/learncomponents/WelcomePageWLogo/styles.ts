import { StyleSheet } from "react-native";

export default StyleSheet.create({
   logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain'
      //!=> cover:  This is used to scale the image uniformly and maintain the image’s aspect ratio
      //!=> contain: This scales the image uniformly so that both dimensions of the image will be equal to or less than the corresponding dimension of the view.
      //!=> stretch: This is used to scale with height independently and may change the original image's aspect ratio.
      //!=> repeat: The image is repeated to cover the frame of the view. 
      //!=> center:  The image is centered in the view along with both dimensions.
   },
   container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff'
   },
   title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#1e1e1e',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
   },
   image: {
      height: 300,
      width: 300,
      resizeMode: 'cover',
      borderWidth: 2,
      borderColor: 'yellow',
      borderRadius: 8
   }
})