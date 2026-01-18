import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function AboutUsScreen() {
    return (
        <View className="flex-1 bg-blue-500">

            {/* Header Section */}
            <View className="items-center pt-16 pb-8">
                <Text className="text-white text-4xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>
                <View className="bg-white px-4 py-1 mt-2">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>
                <View className="bg-white border-4 border-white rounded-full px-12 py-3 mt-6">
                    <Text className="text-blue-500 text-lg font-bold">
                        ABOUT US
                    </Text>
                </View>
            </View>

            {/* Content Card */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl px-6 pt-10">

                {/* Vision Assist Title */}
                <Text className="text-blue-500 text-2xl font-bold mb-6 text-center">
                    VISION ASSIST
                </Text>

                {/* Version Info */}
                <View className="bg-gray-200 rounded-2xl p-5 mb-6">
                    <Text className="text-black font-bold text-base mb-1">
                        Version : 1.0.0
                    </Text>
                    <Text className="text-black font-semibold text-sm">
                        Developed By VisionAssist Team
                    </Text>
                </View>

                {/* Mission Section */}
                <View className="bg-blue-500 rounded-2xl p-6 mb-6">
                    <Text className="text-white text-center font-semibold text-base mb-4 leading-6">
                        <Text className="font-bold">Mission :</Text> To empower caregivers to protect visually impaired loves through smart technology
                    </Text>

                    <TouchableOpacity className="bg-white rounded-full py-3 px-6 mb-3">
                        <Text className="text-blue-500 text-center font-bold">
                            www.visionassist.com
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="mb-2">
                        <Text className="text-white text-center font-bold text-base">
                            Terms of Use
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text className="text-white text-center font-bold text-base">
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>
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

            {/* Back Button */}
            <TouchableOpacity className="absolute bottom-6 left-6">
                <Text className="text-blue-500 text-4xl">←</Text>
            </TouchableOpacity>

        </View>
    );
}