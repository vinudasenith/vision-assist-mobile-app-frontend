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

                <Text className="text-blue-500 text-3xl font-bold text-center mb-12">
                    Sign in!
                </Text>

                {/* Full Name Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Full Name</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="email-address"
                        placeholder="Enter your full name "
                    />
                </View>

                {/* Email Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Email</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="email-address"
                        placeholder="Enter your email"
                    />
                </View>

                {/* Phone Number Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Phone Number</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="phone-pad"
                        placeholder="Enter your phone number"
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

                {/* Password Input */}
                <View className="mb-4">
                    <Text className="text-black font-semibold mb-2">Confirm Password</Text>
                    <View className="flex-row items-center border-b border-gray-300">
                        <TextInput
                            className="flex-1 py-2"
                            placeholder="Enter your password again"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text className="text-gray-400 px-2">👁</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity className="bg-blue-500 py-4 rounded-full mb-8">
                    <Text className="text-white text-center font-bold text-lg">
                        SIGN UP
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View className="flex-row justify-center">
                    <Text className="text-black">Already have an Account? </Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500 font-semibold">SIGN IN</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
