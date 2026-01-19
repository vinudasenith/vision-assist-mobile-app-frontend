import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const router = useRouter();
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, []);

    const handleBarCodeScanned = ({ data }: { data: string }) => {
        if (scanned) return;
        setScanned(true);
        setTimeout(() => {

        }, 500);
    };

    if (!permission) {
        return (
            <View className="flex-1 bg-blue-500 items-center justify-center px-6">
                <Text className="text-white text-lg text-center">Requesting camera permission...</Text>
            </View>
        );
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 bg-blue-500 items-center justify-center px-6">
                <View className="items-center pt-16 pb-8 mb-12">
                    <Text className="text-white text-4xl font-bold">
                        Vision<Text className="text-gray-800">Assist</Text>
                    </Text>
                    <View className="bg-white px-4 py-1 mt-2">
                        <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                            SMART VISION. SMART LIVING
                        </Text>
                    </View>
                </View>
                <View className="items-center mb-8">
                    <Text className="text-6xl mb-4">📷</Text>
                    <Text className="text-white text-2xl font-bold mb-3">Camera Access Required</Text>
                    <Text className="text-white text-center text-base leading-6">
                        VisionAssist needs camera access to scan the QR code on your device
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={requestPermission}
                    className="bg-white rounded-full py-4 px-12 mb-4"
                >
                    <Text className="text-blue-500 font-bold text-lg">Grant Permission</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-white text-base">Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-blue-500">
            <View className="items-center pt-16 pb-6">
                <Text className="text-white text-4xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>
                <View className="bg-white px-4 py-1 mt-2">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>
            </View>

            <View className="flex-1 bg-gray-200 rounded-t-3xl mx-6 mb-6 overflow-hidden">
                <View className="items-center pt-8 pb-6 px-6">
                    <Text className="text-blue-500 text-sm font-bold text-center mb-1 tracking-wide">
                        SCAN THE QR CODE ON YOUR DEVICE
                    </Text>
                    <Text className="text-black text-base font-bold text-center">
                        TO LINK THE APPLICATION
                    </Text>
                </View>

                <View className="flex-1 items-center justify-center px-6">
                    <View className="bg-gray-800 rounded-3xl overflow-hidden w-full aspect-square relative">
                        <CameraView
                            style={StyleSheet.absoluteFillObject}
                            facing="back"
                            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                            barcodeScannerSettings={{
                                barcodeTypes: ['qr'],
                            }}
                        />

                        <View className="absolute inset-0 items-center justify-center">
                            <View className="w-48 h-48 border-2 border-white/50 rounded-2xl" />
                            <View className="absolute top-1/2 left-1/2 -ml-24 -mt-24 w-48 h-48">
                                <View className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white rounded-tl-2xl" />
                                <View className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white rounded-tr-2xl" />
                                <View className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white rounded-bl-2xl" />
                                <View className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white rounded-br-2xl" />
                            </View>
                        </View>

                        {scanned && (
                            <View className="absolute inset-0 bg-green-500/80 items-center justify-center">
                                <Text className="text-white text-2xl font-bold">✓ Scanned!</Text>
                            </View>
                        )}
                    </View>
                </View>

                <View className="items-center py-8">
                    <Animated.View
                        style={{ transform: [{ scale: pulseAnim }] }}
                        className="w-20 h-20 bg-gray-400 rounded-full items-center justify-center"
                    >
                        <View className="w-16 h-16 bg-gray-500 rounded-full" />
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}