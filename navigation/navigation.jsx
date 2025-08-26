import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {HistoryScreen} from '../src/HistoryScreen';
import {HomeScreen} from '../src/HomeScreen';
import {LogInScreen} from '../src/LogInScreen';
import {PaymentsScreen} from '../src/PaymentsScreen';
import {SettingsScreen} from '../src/SettingsScreen';
import {SignUpScreen} from '../src/SignUpScreen';
import {SplashScreen} from '../src/SplashScreen';
import {AddBalancesScreen} from '../src/AddBalancesScreen';
import {ContactUsScreen} from '../src/ContactUsScreen';
import {ForgottenScreen} from '../src/ForgottenScreen';
import {HelpCenterScreen} from '../src/HelpCenterScreen';
import { PaymentsMethodsScreen } from "../src/PaymentsMethodsScreen";
import {VehicleScreen} from '../src/VehicleScreen';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">    
                <Stack.Screen component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="LogIn" component={LogInScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
                <Stack.Screen name="History" component={HistoryScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="Payments" component={PaymentsScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="Settings" component={SettingsScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="AddBalances" component={AddBalancesScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="ContactUs" component={ContactUsScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="Forgotten" component={ForgottenScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="HelpCenter" component={HelpCenterScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="PaymentsMethods" component={PaymentsMethodsScreen} options= {{headerShown: false}}/>
                <Stack.Screen name="Vehicle" component={VehicleScreen} options= {{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;