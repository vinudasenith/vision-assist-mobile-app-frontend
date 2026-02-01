import { BASE_URL } from '@/config';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function RegisterScreen() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!fullName || !email || !phone || !password || !confirmPassword) {
            alert("Please fill all the fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(`${BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                console.log("Backend error:", data);
                return Alert.alert('Error', data.message);
            }

            Alert.alert('Success', 'Account created successfully!');

        } catch (error) {
            console.log("Fetch error:", error);
            alert("Registration failed. Please try again.");
        } finally {
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

                {/* Full Name Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Full Name</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="email-address"
                        placeholder="Enter your full name "
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

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

                {/* Phone Number Input */}
                <View className="mb-6">
                    <Text className="text-black font-semibold mb-2">Phone Number</Text>
                    <TextInput
                        className="border-b border-gray-300 py-2"
                        keyboardType="phone-pad"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChangeText={setPhone}
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

                {/* Password Input */}
                <View className="mb-4">
                    <Text className="text-black font-semibold mb-2">Confirm Password</Text>
                    <View className="flex-row items-center border-b border-gray-300">
                        <TextInput
                            className="flex-1 py-2"
                            placeholder="Enter your password again"
                            secureTextEntry={!showPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text className="text-gray-400 px-2">👁</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity className="bg-blue-500 py-4 rounded-full mb-8"
                    onPress={handleRegister}
                    disabled={loading}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
                    </Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View className="flex-row justify-center">
                    <Text className="text-black">Already have an Account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text className="text-blue-500 font-semibold">SIGN IN</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
