import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from '@/components/Suggested'
import { useTheme } from '@/context/Theme';
import { useDispatch } from 'react-redux';
import { fetchData, loadLikedWallpapers } from '@/redux/slices/wallpaperSlice';
import { AppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import Liked from '@/components/Liked';

export default function Tab() {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();
    const Tab = createMaterialTopTabNavigator();

    useEffect(() => {
        dispatch(loadLikedWallpapers());
        dispatch(fetchData());
    }, [dispatch]);

    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarIndicatorStyle: { backgroundColor: theme.theme.secandaryColor },
                    tabBarActiveTintColor: theme.theme.secandaryColor,
                    tabBarStyle: {
                        backgroundColor: theme.theme.primaryColor,
                        height: 55,
                    },
                }}>
                <Tab.Screen name="Suggested" component={Suggested} />
                <Tab.Screen name="Liked" component={Liked} />
            </Tab.Navigator>
    );
}