import { configureStore } from '@reduxjs/toolkit';
import WallpaperReducer from '@/redux/slices/wallpaperSlice';

export const store = configureStore({
    reducer: {
        Wallpaper: WallpaperReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
