import { Stack } from "expo-router";

export default function GameShow() {
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
