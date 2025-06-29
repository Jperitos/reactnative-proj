import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="forgetpass" options={{ headerShown: false }} />
        <Stack.Screen name="terms" options={{ headerShown: false }} />
        <Stack.Screen name="navbar/homepage" options={{ headerShown: false }} />
        <Stack.Screen name="navbar/explore" options={{ headerShown: false }} />
        <Stack.Screen name="navbar/cart" options={{ headerShown: false }} />
        <Stack.Screen name="navbar/profile" options={{ headerShown: false }} />
        <Stack.Screen name="shoedetail" options={{ headerShown: false }} />
        <Stack.Screen name="navbar/wishlist" options={{ headerShown: false }} />
        <Stack.Screen name="shoesbrand" options={{ headerShown: false }} />
        <Stack.Screen name="recommended" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
