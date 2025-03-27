import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from '@/components/Suggested'
import { useTheme } from '@/context/Theme';

export default function Tab() {
    const theme = useTheme();
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: theme.theme.secandaryColor },
                tabBarActiveTintColor: theme.theme.secandaryColor,
                tabBarStyle: {
                    backgroundColor: theme.theme.primaryColor,
                    height: 55, // Tab Height 
                },
            }}>
            <Tab.Screen name="Suggested" component={Suggested} />
            <Tab.Screen name="Liked" component={Suggested} />
        </Tab.Navigator>
    );
}