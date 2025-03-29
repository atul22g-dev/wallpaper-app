import React, { useCallback, useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useStyles } from '@/assets/style/style';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { liked, openBottomSheet } from '@/redux/slices/wallpaperSlice';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export const DownloadPicture: React.FC = () => {
    const { selectedWallpapers, likedWallpapers } = useSelector((state: RootState) => state.Wallpaper);
    const isLiked = likedWallpapers.some(wallpaper => wallpaper.id === selectedWallpapers?.id);
    const dispatch = useDispatch<AppDispatch>();
    const styles = useStyles();
    const [permission, setPermission] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dispatch(openBottomSheet(null));
        }
    }, [dispatch]);

    const saveImage = async () => {
        if (!selectedWallpapers?.url) {
            Alert.alert("Error", "No wallpaper selected.");
            return;
        }

        if (!permission) {
            Alert.alert("Permission Denied", "Please grant media library permission.");
            return;
        }

        try {
            const fileUri = FileSystem.cacheDirectory + `${selectedWallpapers.id}.jpg`;
            const { uri } = await FileSystem.downloadAsync(selectedWallpapers.url, fileUri);
            
            await MediaLibrary.saveToLibraryAsync(uri);
            Alert.alert("Success", "Image saved to gallery!");
        } catch (error: any) {
            Alert.alert("Error", "Failed to save image: " + error.message);
        }
    };

    return (
        <BottomSheet
            snapPoints={["100%"]}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ display: "none" }}
            handleStyle={{ display: "none" }}>
            <BottomSheetView style={styles.contentContainer}>
                {selectedWallpapers?.url && (
                    <Image source={{ uri: selectedWallpapers.url }} style={styles.BSImage} resizeMode="cover" />
                )}
                <View style={styles.topCon}>
                    <TouchableOpacity style={styles.closecon} onPress={() => dispatch(openBottomSheet(null))}>
                        <Entypo name="cross" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heartcon} onPress={() => dispatch(liked(selectedWallpapers))}>
                        <AntDesign name={isLiked ? "heart" : "hearto"} size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.bsName}>{selectedWallpapers?.Name}</Text>
                
                {/* Download Button */}
                <TouchableOpacity style={styles.DownloadCon} onPress={saveImage}>
                    <MaterialIcons style={styles.DownloadImg} name="wallpaper" size={24} />
                    <Text style={styles.DownloadText}>Save Wallpaper</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    );
};
