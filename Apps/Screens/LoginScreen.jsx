import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'


export default function LoginScreen() {
    return (
        <View>
            {/* Login Page Image Part */}

            <Image className="w-full h-[400px] object-cover" source={require('../../assets/images/loginA.png')}></Image>

            {/* Text Container */}
            <View className="p-8 bg-white -mt-20 h-full rounded-3xl shadow-2xl ">
                <Text className="font-bold text-center text-2xl mt-16">Community Marketplace</Text>
                <Text className="text-md text-slate-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor sed sint, architecto facilis voluptates odio quae alias quidem recusandae.</Text>

                <TouchableOpacity onPress={()=>console.log("SignIn Now")} className="bg-blue-500 p-3 rounded-3xl mt-10">
                    <Text  className="text-center text-white">Get Started</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}