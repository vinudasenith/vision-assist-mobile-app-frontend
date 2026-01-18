// welcome.tsx
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-blue-500 justify-center px-6">

            {/* Logo & Tagline */}
            <View className="items-center mb-16">
                <Text className="text-white text-5xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>

                <View className="bg-white px-6 py-1 mt-3">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View className="space-y-4">
                {/* SIGN IN */}
                <TouchableOpacity
                    className="bg-white rounded-full py-4"
                    onPress={() => router.push('/login')}
                >
                    <Text className="text-blue-500 text-center font-bold text-lg">
                        SIGN IN
                    </Text>
                </TouchableOpacity>

                {/* CREATE ACCOUNT */}
                <TouchableOpacity
                    className="bg-blue-600 border-2 border-white rounded-full py-4"
                    onPress={() => router.push('/register')}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        CREATE NEW ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
