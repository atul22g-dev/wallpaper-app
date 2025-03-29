import { Stack } from 'expo-router/stack';
import { ThemeProvider } from '@/context/Theme';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function Layout() {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </ThemeProvider>
        </Provider>
    );
}
