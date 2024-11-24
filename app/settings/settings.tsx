import { Component, useState } from "react";
import { Switch, Text, View, StyleSheet, Linking, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import Slider from '@react-native-community/slider'; // npm install @react-native-community/slider --save
import {Link} from 'expo-router';

const settings = () => {
    const [isMusicEnabled, setMusicIsEnabled] = useState(false);
    const toggleSwitchMusic = () => setMusicIsEnabled(previousState => !previousState);
    const [isDarkModeEnabled, setDarkModeIsEnabled] = useState(false);
    const toggleSwitchDarkMode = () => setDarkModeIsEnabled(previousState => !previousState);
    const [isVibrationEnabled, setVibrationIsEnabled] = useState(false);
    const toggleSwitchVibration = () => setVibrationIsEnabled(previousState => !previousState);
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40
            }}>
            <ScrollView>
                <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text> Volume </Text>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                    />
                </View>
                <View style={{ 
                    flexDirection:"row", 
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Text> Music? </Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isMusicEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchMusic}
                        value={isMusicEnabled}
                    />
                </View>
                <View style={{ 
                    flexDirection:"row", 
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Text> 
                        Dark Mode
                    </Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchDarkMode}
                        value={isDarkModeEnabled}
                    />
                </View>
                <View style={{ 
                    flexDirection:"row", 
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Text> 
                        Vibration
                    </Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isVibrationEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchDarkMode}
                        value={isDarkModeEnabled}
                    />
                </View>
                <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text> Resolution </Text>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                    />
                </View>
            </ScrollView>
            <Text>
                Our <Link href='https://www.youtube.com/watch?v=ytWz0qVvBZ0' style={{color: 'blue'}}>Terms</Link> and <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{color: 'blue'}}>Privacy Policy</Link>.
            </Text>
        </View>
    )
}

export default settings;