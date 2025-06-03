import Steps from "@/components/steps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function StepsScreen() {
  const router = useRouter();

  const handleFinish = async () => {
    await AsyncStorage.setItem("stepsSeen", "true");
   router.push("/(tabs)");
  };

  return <Steps handleFinish={handleFinish} />;
}
