import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
}

export default function CardStat({
  title,
  value,
  icon,
  color = "#007bff",
}: Props) {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        width: "48%",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>
            {title}
          </Text>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 22 }}>
            {value}
          </Text>
        </View>
        <Ionicons name={icon as any} size={28} color="#fff" />
      </View>
    </View>
  );
}
