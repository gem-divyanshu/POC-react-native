import { Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import {Redirect , router} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../constants';
import { CustomButton} from '../components/CustomButton';
import { useGlobalContext } from '@/context/GlobalProvider';

const RootLayout = () => {
  const {isLoading, isLoggedIn} = useGlobalContext();

  console.log(`Hello`, isLoggedIn);
  if(!isLoading && isLoggedIn)
  {
    return <Redirect href="/home" />
  }
  return (
    //   <View className="flex-1 items-center justify-center bg-red">
    //    <Text className="test-3xl">Divyanshu</Text>
    //    <StatusBar style="auto" />
    //   <Link href="/home" style={{color:'red'}}>Go to Home</Link>
    // </View>

    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center h-[100vh] px-4">
          <Image source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          ></Image>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain">
            </Image>
          <View
          className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">First text in page{' '}
              <Text className="text-secondary-200">POC app Aora</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            This is a POC app made to gain hand's on experience on React native environment.
          </Text>

          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
          />

          <CustomButton 
          title="Explore POC"
          handlePress={() => router.push('/home')}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}

export default RootLayout
