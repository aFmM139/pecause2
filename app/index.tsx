import "@/global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <View className="bg-blue-500 w-screen h-screen">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
