import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useTheme } from '@/context/Theme';

export default function TabLayout() {
    const theme = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.theme.secandaryColor, // Tab Text Color & Active Color
                tabBarStyle: {
                    backgroundColor: theme.theme.primaryColor // Tab Backgroung color
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'For You',
                    tabBarIcon: () => (
                        <FontAwesome size={23} name="home" color={theme.theme.secandaryColor} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: 'Account',
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome size={23} name="user" color={theme.theme.secandaryColor} />
                    ),
                }}
            />
        </Tabs>
    );
}
