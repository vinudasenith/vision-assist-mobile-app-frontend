import { Text, View } from 'react-native';

export default function SplashScreen() {
    return (
        <View className="flex-1 bg-blue-500 items-center justify-center">

            {/* Logo */}
            <View className="items-center">
                <Text className="text-white text-5xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>
                <View className="bg-white px-6 py-1 mt-3">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>
            </View>

        </View>
    );
}