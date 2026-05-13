import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Stack } from "expo-router";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function GameShow() {
  useEffect(() => {
    // Hide the splash screen after a short delay to ensure app is ready
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Business Details",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
