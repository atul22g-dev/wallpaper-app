import { useStyles } from '@/assets/style/style';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { liked, openBottomSheet } from '@/redux/slices/wallpaperSlice';


const Liked = () => {
    const dispatch = useDispatch<AppDispatch>();
    const styles = useStyles();
    const { likedWallpapers } = useSelector((state: RootState) => state.Wallpaper);

    return (
        <View style={styles.fYTab}>
            {likedWallpapers.length !== 0 ?
                <FlatList
                    data={likedWallpapers}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        const isLiked = likedWallpapers.some(wallpaper => wallpaper.id === item.id);
                        return (
                            <TouchableOpacity style={styles.ImgContainer} onPress={() => dispatch(openBottomSheet(item))}>
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
                : <View style={styles.likedCon}>
                    <Text style={styles.likedText}>No favorites found</Text>
                    <AntDesign name='heart' size={80} color={'red'} />
                    <Text style={styles.likedText}>(wallpapers you "like" will appear here)</Text>
                </View>
            }
        </View>
    );
};

export default Liked;
