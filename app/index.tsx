// app/index.tsx
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    const router = useRouter();

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-xl mb-4">Home Page</Text>

            <TouchableOpacity
                onPress={() => router.push('/login')}
                className="bg-blue-600 px-6 py-3 rounded-lg"
            >
                <Text className="text-white">Go to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push('/register')}
                className="bg-blue-600 px-6 py-3 rounded-lg"
            >
                <Text className="text-white">Go to Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push('/splashScreen')}
                className="bg-blue-600 px-6 py-3 rounded-lg"
            >
                <Text className="text-white">Go to Splash Screen</Text>
            </TouchableOpacity>
        </View>
    );
}
