import CustomText from "@/Components/CustomText";
import "@/global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-[#026A75] w-screen h-screen">
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      <CustomText variant="large" dark={false}>
        Hello World
      </CustomText>
    </View>
  );
}
