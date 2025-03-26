import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles } from '@/assets/style/style'
import { useTheme } from '@/context/Theme';

export default function Tab() {
    const theme = useTheme();
    const styles = useStyles();
    
    return (
        <View style={styles.AccContainer}>
            <View style={styles.AccSubContainer}>
                {/* Heading & SubHeading */}
                <Text style={styles.AccHeading}>Settings</Text>
                <Text style={styles.AccSubHeading}>Theme</Text>
                {/* Theme Color Box */}
                <View style={styles.themeColorBox }>
                    <TouchableOpacity onPress={() => theme.toggleTheme('system')}>
                        <Text style={[styles.themeColor, theme.isTheme == 'system' ? styles.activeThemeColor : null ]}>System</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => theme.toggleTheme('light')}>
                        <Text style={[styles.themeColor, theme.isTheme == 'light' ? styles.activeThemeColor : null]}>Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => theme.toggleTheme('dark')}>
                        <Text style={[styles.themeColor, theme.isTheme == 'dark' ? styles.activeThemeColor : null]}>Dark</Text>
                    </TouchableOpacity>
                </View>
                {/* Copyright */}
                <View style={styles.CRContaner}>
                    <Text style={styles.CR}>Wallpaper © 2025</Text>
                    <Text style={styles.CR}>Wallpaper Mobile App LLC.</Text>
                </View>
            </View>
        </View>
    );
}