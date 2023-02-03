import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  BounceIn,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { styles } from "./styles";

type Props = {
  value: number;
  onMoveTop: () => void;
};

export function ProgressBar({ value, onMoveTop }: Props) {
  const widthContainer = useSharedValue(200);

  const endReached = value >= 95;

  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.3 });
  }, [value]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <TouchableAnimated
          entering={BounceIn}
          exiting={FadeOut}
          onPress={onMoveTop}
        >
          <Feather name="chevrons-up" size={24} color="#c4c4cc" />
        </TouchableAnimated>
      ) : (
        <Animated.View
          style={styles.progressContent}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={styles.value}>{value.toFixed(0)}%</Text>
          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
