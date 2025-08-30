import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/Auth/LoginScreen";
import AdminDashboard from "../screens/Admin/AdminDashboard";
import EmployeeDashboard from "../screens/Employee/EmployeeDashboard";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="EmployeeDashboard" component={EmployeeDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
