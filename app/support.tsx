import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HelpSupportScreen() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-blue-500">

            {/* Header Section */}

            <TouchableOpacity
                onPress={() => router.back()}
                className="absolute left-6 top-16 w-12 h-12 bg-white rounded-full items-center justify-center shadow z-50"
                activeOpacity={0.7}
            >
                <Text className="text-blue-500 text-2xl font-bold">←</Text>
            </TouchableOpacity>

            <View className="items-center pt-16 pb-8">
                <Text className="text-white text-4xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>
                <View className="bg-white px-4 py-1 mt-2">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>
                <View className="bg-white border-4 border-white rounded-full px-8 py-3 mt-6">
                    <Text className="text-blue-500 text-lg font-bold">
                        HELP & SUPPORT
                    </Text>
                </View>
            </View>

            {/* Content Card */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl px-6 pt-10">

                {/* Contact Support Section */}
                <Text className="text-black text-2xl font-bold mb-5">
                    Contact Support
                </Text>

                <View className="bg-gray-200 rounded-2xl p-6 mb-6">
                    <View className="bg-white rounded-xl p-4 mb-3 flex-row items-center">
                        <Text className="text-xl mr-3">📞</Text>
                        <Text className="text-black font-semibold">+94 70 345 6789</Text>
                    </View>
                    <View className="bg-white rounded-xl p-4 flex-row items-center">
                        <Text className="text-xl mr-3">✉️</Text>
                        <Text className="text-black font-semibold text-xs">
                            support@visionassist.gmail.com
                        </Text>
                    </View>
                </View>

                {/* Support Actions */}
                <View className="bg-blue-500 rounded-2xl p-6 mb-6">
                    <Text className="text-white text-center font-bold mb-4">
                        Click Here To 👇
                    </Text>
                    <TouchableOpacity className="bg-white rounded-full py-3 px-6 mb-4">
                        <Text className="text-blue-500 text-center font-bold">
                            View Common Questions
                        </Text>
                    </TouchableOpacity>
                    <View className="bg-white rounded-2xl py-8 items-center justify-center">
                        <Text className="text-blue-500 font-semibold">
                            💬 Chat With Support
                        </Text>
                    </View>
                </View>

                {/* Connection Status */}
                <View className="items-center mb-5">
                    <Text className="text-black font-bold text-sm mb-1">
                        CONNECTED TO
                    </Text>
                    <Text className="text-blue-500 font-bold text-xl">
                        #VAH-1023
                    </Text>
                </View>

                {/* Logout Button */}
                <TouchableOpacity className="bg-blue-500 rounded-full py-4 mb-6 w-3/4 self-center">
                    <Text className="text-white text-center font-bold text-lg">
                        LOGOUT
                    </Text>
                </TouchableOpacity>

            </ScrollView>


        </View>
    );
}