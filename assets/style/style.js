import { Dimensions, StyleSheet } from "react-native";
import { scale, moderateScale } from 'react-native-size-matters';
import { useTheme } from '@/context/Theme';
const { width } = Dimensions.get("window");

export const useStyles = () => {
    const theme = useTheme();

    return StyleSheet.create({
        // ForYou Tab
        fYTab:{
            padding: 10,
            paddingBottom: 55,
            height: scale(700),
            backgroundColor: theme.theme.primaryColor,
        },
        ImgContainer:{
            position: 'relative',
            marginBottom: 15
        },
        Images:{
            width: width/2 - 20,
            height: 260, 
            margin: 5,
            borderRadius: 10
        },
        ImgTextCon:{
            backgroundColor: "#0000008a",
            width: width/2 - 15,
            height: 40,
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            paddingLeft: 15,
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
        },
        ImgText:{
            color: "white",
            fontWeight: "800",
        },
        ImgHeartCon:{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 30
        },
        // liked Tab
        likedCon:{
            paddingVertical: 40,
            display: "flex",
            alignItems: "center",
            gap: 20
        },
        likedText:{
            color: theme.theme.secandaryColor
        },
        // Bottom Sheets
        contentContainer:{
            flex: 1,
        },
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
