import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View>
            {/* Login Page Image Part */}

            <Image className="w-full h-[400px] object-cover" source={require('../../assets/images/loginA.png')}></Image>

            {/* Text Container */}
            <View className="p-8 bg-white -mt-20 h-full rounded-3xl shadow-2xl ">
                <Text className="font-bold text-center text-2xl mt-16">Community Marketplace</Text>
                <Text className="text-md text-slate-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor sed sint, architecto facilis voluptates odio quae alias quidem recusandae.</Text>

                <TouchableOpacity onPress={onPress} className="bg-blue-500 p-3 rounded-3xl mt-10">
                    <Text className="text-center text-white">Get Started</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}