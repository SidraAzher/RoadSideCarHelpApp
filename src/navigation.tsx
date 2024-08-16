import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/authStack';
import { MainStack } from './navigation/mainStack';
import { Context } from './context';

function Navigations() {

    const [isLogin, setLogin] = useState(false)
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
