import { Stack } from 'expo-router';

export default function IcerikStack() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[ders]" />
            <Stack.Screen name="detay" />
        </Stack>
    );
}