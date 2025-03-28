import { useStyles } from '@/assets/style/style';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useState } from 'react';
import { liked } from '@/redux/slices/wallpaperSlice';

const Liked = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const styles = useStyles();
    const { likedWallpapers } = useSelector((state: RootState) => state.Wallpaper);

    return (
        <View style={styles.fYTab}>
            <FlatList
                data={likedWallpapers}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isLiked = likedWallpapers.some(wallpaper => wallpaper.id === item.id);
                    return (
                        <TouchableOpacity style={styles.ImgContainer} onPress={() => setSelectedImage(item.url)}>
                            <Image source={{ uri: item.url }} style={styles.Images} resizeMode="cover" />
                            <View style={styles.ImgTextCon}>
                                <Text style={styles.ImgText}>{item.Name}</Text>
                                <TouchableOpacity style={styles.ImgHeartCon} onPress={() => dispatch(liked(item))}>
                                    <AntDesign name={isLiked ? "heart" : "hearto"} size={18} color={isLiked ? "red" : "white"} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default Liked;
