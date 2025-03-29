import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export const DownloadPicture = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: "70%",
        // borderRadius: 15,
    },
    topbar: {
        position: "absolute",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    topbarInner: {
        display: "flex",
        flexDirection: "row",
    },
    textContainer: {
        width: "100%"
    },
    text: {
        paddingTop: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600"
    }
});