import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
    const router = useRouter();

    const [fallAlerts, setFallAlerts] = useState(true);
    const [sosAlerts, setSosAlerts] = useState(true);
    const [batteryLow, setBatteryLow] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [backButtonScale] = useState(new Animated.Value(1));

    const handleBackPress = () => {
        Animated.sequence([
            Animated.timing(backButtonScale, {
                toValue: 0.85,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(backButtonScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
            router.push('/');
        });
    };

    const bgMain = darkMode ? 'bg-gray-900' : 'bg-blue-500';
    const bgCard = darkMode ? 'bg-gray-800' : 'bg-white';
    const bgInner = darkMode ? 'bg-gray-700' : 'bg-gray-200';
    const textMain = darkMode ? 'text-white' : 'text-black';

    return (
        <View className={`flex-1 ${bgMain}`}>

            {/* Header */}
            <View className="items-center pt-16 pb-8">

                {/* Back Button */}
                <View className="absolute left-6 top-16">
                    <Animated.View style={{ transform: [{ scale: backButtonScale }] }}>
                        <TouchableOpacity
                            onPress={handleBackPress}
                            className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'
                                } items-center justify-center shadow`}
                        >
                            <Text className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-500'}`}>
                                ←
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <Text className="text-white text-4xl font-bold">
                    Vision<Text className="text-gray-800">Assist</Text>
                </Text>

                <View className="bg-white px-4 py-1 mt-2 rounded">
                    <Text className="text-gray-700 text-xs font-semibold tracking-widest">
                        SMART VISION. SMART LIVING
                    </Text>
                </View>

                <View className="bg-white rounded-full px-12 py-3 mt-6">
                    <Text className="text-blue-500 text-lg font-bold">
                        SETTINGS
                    </Text>
                </View>
            </View>

            {/* Content */}
            <ScrollView className={`flex-1 rounded-t-3xl px-6 pt-10 ${bgCard}`}>

                {/* Notifications */}
                <Text className={`text-xl font-bold mb-4 ${textMain}`}>
                    Notification Preferences
                </Text>

                <View className={`rounded-2xl p-5 mb-6 ${bgInner}`}>
                    {[
                        ['Fall Alerts', fallAlerts, setFallAlerts],
                        ['SOS Alerts', sosAlerts, setSosAlerts],
                        ['Battery Low', batteryLow, setBatteryLow],
                    ].map(([label, value, setter]: any) => (
                        <View
                            key={label}
                            className={`bg-white rounded-full px-5 py-3 mb-3 flex-row items-center justify-between`}
                        >
                            <Text className="text-blue-500 font-bold">{label}</Text>
                            <TouchableOpacity
                                onPress={() => setter(!value)}
                                className={`w-14 h-8 rounded-full ${value ? 'bg-blue-500' : 'bg-gray-300'
                                    } justify-center px-1`}
                            >
                                <View className="w-6 h-6 bg-white rounded-full" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Theme */}
                <Text className={`text-xl font-bold mb-4 ${textMain}`}>
                    Theme Preferences
                </Text>

                <View className={`rounded-2xl p-5 mb-6 ${bgInner}`}>
                    <View className="flex-row">
                        <TouchableOpacity
                            onPress={() => setDarkMode(false)}
                            className={`flex-1 mr-2 py-3 rounded-full items-center ${!darkMode ? 'bg-white' : 'bg-gray-400'
                                }`}
                        >
                            <Text className="text-blue-500 font-bold">Light</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setDarkMode(true)}
                            className={`flex-1 ml-2 py-3 rounded-full items-center ${darkMode ? 'bg-white' : 'bg-gray-400'
                                }`}
                        >
                            <Text className="text-blue-500 font-bold">Dark</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Language */}
                <Text className={`text-xl font-bold mb-4 ${textMain}`}>
                    Language
                </Text>

                <View className={`rounded-2xl p-5 mb-6 ${bgInner}`}>
                    {['English', 'French', 'Russia'].map(lang => (
                        <TouchableOpacity
                            key={lang}
                            onPress={() => setSelectedLanguage(lang)}
                            className="bg-white rounded-full px-5 py-3 mb-3 flex-row justify-between"
                        >
                            <Text className="text-blue-500 font-bold">{lang}</Text>
                            {selectedLanguage === lang && (
                                <Text className="text-blue-500 font-bold">✓</Text>
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Footer */}
                <View className="items-center mt-4 mb-6">
                    <Text className={`font-bold ${textMain}`}>CONNECTED TO</Text>
                    <Text className="text-blue-500 font-bold text-xl">#VAH-1023</Text>
                </View>
            </ScrollView>
        </View>
    );
}
