import { BASE_URL } from '@/config';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill all the fields");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                setLoading(false);
                return;
            }

            alert("Login successful");
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

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
                        value={email}
                        onChangeText={setEmail}
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
                            value={password}
                            onChangeText={setPassword}
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
                <TouchableOpacity className="bg-blue-500 py-4 rounded-full mb-8"
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        {loading ? 'SIGNING IN...' : 'SIGN IN'}
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View className="flex-row justify-center">
                    <Text className="text-black">Don't have an Account? </Text>

                    <TouchableOpacity onPress={() => router.push('/register')}>
                        <Text className="text-blue-500 font-semibold">SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
