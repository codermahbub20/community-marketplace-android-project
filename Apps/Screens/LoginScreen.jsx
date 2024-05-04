import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-web'

export default function LoginScreen() {
    return (
        <View>
            {/* Login Page Image Part */}
            <Image className="w-full h-[400px] object-cover" source={require('../../assets/images/loginA.png')}></Image>

            {/* Text Container */}
            <View className="p-8">
                <Text className="font-bold text-4xl">Community Marketplace</Text>
            </View>

        </View>
    )
}