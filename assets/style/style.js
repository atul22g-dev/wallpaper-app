import { StyleSheet } from "react-native";
import { scale, moderateScale } from 'react-native-size-matters';
import { useTheme } from '@/context/Theme';

export const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        // Account Tab
        AccContainer: {
            padding: 10,
            height: scale(700),
            backgroundColor: theme.theme.primaryColor,
        },
        AccSubContainer:{
            padding: 10
        },
        AccHeading: {
            color: theme.theme.secandaryColor,
            fontSize: moderateScale(24),
            fontWeight: "700",
            marginBottom: 10
        },
        AccSubHeading: {
            color: theme.theme.secandaryColor,
            fontSize: moderateScale(14),
            fontWeight: "500",
        },
        themeColorBox:{
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
            marginVertical: 10
        },
        themeColor:{
            color: theme.theme.secandaryColor,
            paddingHorizontal: 30,
            paddingVertical: 12,
            borderRadius: 8,
            fontSize: 16,
            fontWeight: "600",
            borderColor: theme.theme.thirdColor,
            borderWidth: 1
        },
        activeThemeColor:{
            backgroundColor: theme.theme.secandaryColor,
            color: theme.theme.primaryColor,
        },
        CRContaner:{
            display: "flex",
            alignItems: "center",
            marginVertical: 20
        },
        CR:{
            color: theme.theme.thirdColor,
        }
    });
};
