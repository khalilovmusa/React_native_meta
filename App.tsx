import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePageWLogo from "./src/components/learncomponents/WelcomePageWLogo";
import LoginScreen from "./src/components/organisms/LoginScreen/LoginScreen";

// import WelcomeScreen from './src/components/organisms/WelcomeScreen/WelcomeScreen';
// import ToggleTheme from "./src/hooks/learningHooks/useColorSheme";
// import MenuItems from "./src/components/organisms/MenuItems/MenuItems";
// import FeedbackForm from "./src/components/organisms/FeedbackForm/FeedbackForm";


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={WelcomePageWLogo}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    {/* <ToggleTheme /> */}
    {/* <WelcomePageWLogo /> */}
    {/* <WelcomeScreen /> */}
    {/* <FeedbackForm /> */}
    {/* <LoginScreen /> */}
    {/* <MenuItems /> */}
    </NavigationContainer>
  );
}

export default App;
