import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Définir le type des routes (associé au stack dans App.js)
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

// Typage de la navigation
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View  style={tw`bg-white h-full w-full`} >
        <StatusBar style="light"/>
        <Image style={tw`h-full w-full absolute`} source={require('../assets/images/background.png')} />

        {/* lights */}
        <View style={tw`flex-row justify-around w-full absolute`}>
          <Animated.Image entering={FadeInUp.delay(200).duration(1500).springify().damping(2)} style={tw`h-[58] w-[23.5]`} source={require('../assets/images/light.png')} />
          <Animated.Image entering={FadeInUp.delay(400).duration(1500).springify().damping(2)} style={tw`h-[42] w-[17]`} source={require('../assets/images/light.png')} />
        </View>

        {/* title and form */}
        <View style={tw`h-full w-full flex justify-around pt-55 pb-10`}>
          {/* title */}
          <View style={tw` flex items-center`}>
            <Animated.Text entering={FadeInUp.duration(1000).springify()} style={tw`text-white font-bold tracking-wider text-5xl `}>Sign Up</Animated.Text>
          </View>

          {/* form */}
          <View style={tw`flex items-center mx-4 gap-y-4`}>
            <Animated.View entering={FadeInDown.duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full`}>
              <TextInput style={tw`pl-2`} placeholder='Username' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full`}>
              <TextInput style={tw`pl-2`} placeholder='Email' placeholderTextColor={'gray'}/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full mb-3`}>
              <TextInput style={tw`pl-2`} placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={tw`w-full`}>
              <TouchableOpacity style={tw`w-full bg-sky-400 p-3 rounded-2xl mb-3`}>
                <Text style={tw`text-xl font-bold text-white text-center`}>SignUp</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} style={tw`flex-row justify-center`}>
              <Text>Do you already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={tw`text-sky-600`}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

        </View>
    </View>
  )
};