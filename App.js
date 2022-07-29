import LogIn from './screen/LogIn';
import SignUp from './screen/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Log In"
          component={LogIn}
        />
        <Stack.Screen
        name="Sign Up"
        component={SignUp}
        />
        </Stack.Navigator>
      </NavigationContainer>
)};
