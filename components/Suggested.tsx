import { useStyles } from '@/assets/style/style'
import { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const images: string[] = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1020/400/300",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1040/400/300",
    "https://picsum.photos/id/1060/400/300",
    "https://picsum.photos/id/1075/400/300"
];

const Suggested = () => {
    const styles = useStyles();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <View style={styles.fYTab}>
            <FlatList
                data={images}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.ImgContainer} onPress={() => setSelectedImage(item)}>
                        <Image source={{ uri: item }} style={styles.Images} resizeMode="cover" />
                        <View style={styles.ImgTextCon}>
                            <Text style={styles.ImgText}>Demo</Text>
                            <AntDesign name="hearto" size={18} color="white" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Suggested