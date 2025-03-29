import React, { useCallback, useRef } from 'react';
import { Text } from 'react-native';
import { useStyles } from '@/assets/style/style';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { openBottomSheet } from '@/redux/slices/wallpaperSlice';

export const DownloadPicture = () => {
    const dispatch = useDispatch<AppDispatch>();
    const styles = useStyles();
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        if (index === -1){
            dispatch(openBottomSheet(null))
        }
    }, []);

    // renders
    return (
        <BottomSheet
            // onClose={onClose}
            snapPoints={["100%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ display: "none" }}
            handleStyle={{ display: "none" }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome</Text>
            </BottomSheetView>
        </BottomSheet>
    );
};
