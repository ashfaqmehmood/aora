import { View, Text, Image } from "react-native";
import React from "react";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View>
        <Image
          source={{ uri: thumbnail }}
          className="w-full h-44 rounded-2xl"
          resizeMode="cover"
        />
        <View className="flex-row items-center mt-2">
          <Image
            source={{ uri: avatar }}
            className="w-8 h-8 rounded-full"
            resizeMode="cover"
          />
          <Text className="text-sm text-gray-100 ml-2">{username}</Text>
        </View>
      </View>
      <Text className="text-2xl  text-white">{title}</Text>
    </View>
  );
};

export default VideoCard;
