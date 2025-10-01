import CustomText from "@/components/CustomText";
import "@/global.css";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-[#E3C69F] w-screen h-screen">
      <Text></Text>
      <CustomText variant="large" dark={false}>
        Hello World
      </CustomText>
    </View>
  );
}
