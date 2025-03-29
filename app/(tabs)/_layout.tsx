import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useTheme } from '@/context/Theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DownloadPicture } from '@/components/BottomSheet';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function TabLayout() {
    const theme = useTheme();
    const { selectedWallpapers } = useSelector((state: RootState) => state.Wallpaper);

    return (
        <GestureHandlerRootView>
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.theme.secandaryColor, // Tab Text Color & Active Color
                tabBarStyle: {
                    backgroundColor: theme.theme.primaryColor, // Tab Backgroung color
                    height: 55, // Tab Height 
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'For You',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome size={20} name="home" color={focused ? theme.theme.secandaryColor : theme.theme.thirdColor} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Account"
                options={{
                    title: 'Account',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome size={20} name="user" color={focused ? theme.theme.secandaryColor : theme.theme.thirdColor} />
                    ),
                }}
            />
        </Tabs>
        {selectedWallpapers && <DownloadPicture />}
        </GestureHandlerRootView>
    );
}
