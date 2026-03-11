import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const convex = new ConvexReactClient("https://merry-koala-461.convex.cloud", {
    unsavedChangesWarning: false,
});

export default function RootLayout() {
    return (

        <SafeAreaProvider>
            <ConvexProvider client={convex}>
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#4ECDC4',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: {
                            height: 70,
                            paddingBottom: 10,
                            paddingTop: 10,
                            backgroundColor: '#fff',
                            borderTopWidth: 0,
                            elevation: 10,
                            shadowColor: '#000',
                            shadowOpacity: 0.1,
                            shadowRadius: 5
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: '600'
                        }
                    }}
                >

                    <Tabs.Screen name="index" options={{ href: null, tabBarStyle: { display: 'none' } }} />
                    <Tabs.Screen name="data" options={{ href: null, tabBarStyle: { display: 'none' } }} />
                    <Tabs.Screen name="kayit" options={{ href: null, tabBarStyle: { display: 'none' } }} />



                    <Tabs.Screen
                        name="icerik"
                        options={{
                            title: 'Dersler',
                            tabBarIcon: ({ color, focused }) => (
                                <Ionicons name={focused ? "library" : "library-outline"} size={26} color={color} />
                            ),
                        }}
                    />


                    <Tabs.Screen
                        name="favorilerim"
                        options={{
                            title: 'Favoriler',
                            tabBarIcon: ({ color, focused }) => (
                                <Ionicons name={focused ? "heart" : "heart-outline"} size={26} color={color} />
                            ),
                        }}
                    />


                    <Tabs.Screen
                        name="pomodoro"
                        options={{
                            title: 'Pomodoro',
                            tabBarIcon: ({ color, focused }) => (
                                <Ionicons name={focused ? "timer" : "timer-outline"} size={26} color={color} />
                            ),
                        }}
                    />

                </Tabs>
            </ConvexProvider>
        </SafeAreaProvider>
    );
}