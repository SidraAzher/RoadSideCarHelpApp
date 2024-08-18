import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/authStack';
import { MainStack } from './navigation/mainStack';
import { Context } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Navigations() {

    const [isLogin, setLogin] = useState(false)


    useEffect(() => {
        checkIsUserLogin()
    }, [])


    const checkIsUserLogin = async () => {
        const token = await AsyncStorage.getItem('authToken');
        if (token != null) setLogin(true)
        console.log('token initial ==>', token)

    }


    return (
        <Context.Provider value={{ isLogin, setLogin }}>
            <NavigationContainer>
                {
                    isLogin ? <MainStack /> : <AuthStack />
                }
            </NavigationContainer>
        </Context.Provider>

    )

}
export default Navigations
