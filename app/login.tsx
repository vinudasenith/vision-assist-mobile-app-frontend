import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="flex-1 bg-blue-500">

            {/* Logo Section */}
            <View className="items-center pt-20 pb-16">
                <Text className="text-white text-4xl font-bold">VisionAssist</Text>
                <Text className="text-white text-sm mt-2">SMART VISION. SMART LIVING</Text>
            </View>

            {/* Form Card */}
            <View className="flex-1 bg-white rounded-t-3xl px-8 pt-12">

                {/* Email Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Email</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="email-address"
                        placeholder="Enter your email"
                    />
                </View>

                {/* Password Input */}
                <View className="mb-4">
                    <Text className="text-black font-semibold mb-2">Password</Text>
                    <View className="flex-row items-center border-b border-gray-300">
                        <TextInput
                            className="flex-1 py-2"
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text className="text-gray-400 px-2">👁</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity className="self-end mb-8">
                    <Text className="text-blue-500">Forgot Password?</Text>
                </TouchableOpacity>

                {/* Sign In Button */}
                <TouchableOpacity className="bg-blue-500 py-4 rounded-full mb-8">
                    <Text className="text-white text-center font-bold text-lg">
                        SIGN IN
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View className="flex-row justify-center">
                    <Text className="text-black">Don't have an Account? </Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500 font-semibold">SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
