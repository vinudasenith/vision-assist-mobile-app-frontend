import { ScrollView, Text, View } from 'react-native';

export default function AlertsScreen() {
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
                <View className="bg-white border-4 border-white rounded-full px-16 py-3 mt-6">
                    <Text className="text-blue-500 text-lg font-bold">
                        ALERTS
                    </Text>
                </View>
            </View>
            <ScrollView className="bg-white rounded-t-3xl flex-1 pt-6">

                {/* Connection Status */}
                <View className="items-center mb-5 mt-4">
                    <Text className="text-black font-bold text-sm mb-1">
                        CONNECTED TO
                    </Text>
                    <Text className="text-blue-500 font-bold text-xl">
                        #VAH-1023
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}