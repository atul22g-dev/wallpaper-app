import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://atualapis.pages.dev/Wallpapers/index.json';

interface Wallpaper {
    id: string;
    Name: string;
    url: string;
}

interface WallpaperState {
    wallpaper: Wallpaper[];
    likedWallpapers: Wallpaper[];
    loading: boolean;
    error: string | null;
}

const initialState: WallpaperState = {
    wallpaper: [],
    likedWallpapers: [],
    loading: false,
    error: null,
};

// Load liked wallpapers from AsyncStorage when the app starts
export const loadLikedWallpapers = createAsyncThunk('wallpaper/loadLikedWallpapers', async () => {
    const savedData = await AsyncStorage.getItem('likedWallpapers');
    return savedData ? JSON.parse(savedData) : [];
});

// Fetch wallpapers from API
export const fetchData = createAsyncThunk<Wallpaper[]>('data/fetchData', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

const WallpaperSlice = createSlice({
    name: 'Wallpaper',
    initialState,
    reducers: {
        liked: (state, action: PayloadAction<Wallpaper>) => {
            const wallpaper = action.payload;
            const isAlreadyLiked = state.likedWallpapers.some(item => item.id === wallpaper.id);

            if (isAlreadyLiked) {
                state.likedWallpapers = state.likedWallpapers.filter(item => item.id !== wallpaper.id);
            } else {
                state.likedWallpapers.push(wallpaper);
            }

            // Save updated liked wallpapers to AsyncStorage
            AsyncStorage.setItem('likedWallpapers', JSON.stringify(state.likedWallpapers));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.wallpaper = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(loadLikedWallpapers.fulfilled, (state, action) => {
                state.likedWallpapers = action.payload;
            });
    },
});

export const { liked } = WallpaperSlice.actions;
export default WallpaperSlice.reducer;
