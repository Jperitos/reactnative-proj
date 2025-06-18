import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
    </Stack>
  );
}
