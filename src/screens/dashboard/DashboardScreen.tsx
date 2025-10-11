import React from "react";
import { ScrollView, View, Text } from "react-native";
import CardStat from "../../components/CardStat";

const DashboardScreen = () => {
  const stats = [
    { title: "Total User", value: 120, icon: "people-outline", color: "#007bff" },
    { title: "Total Role", value: 4, icon: "shield-checkmark-outline", color: "#28a745" },
    { title: "Total Order", value: 320, icon: "cube-outline", color: "#ffc107" },
    { title: "Revenue", value: "Rp 1.250.000", icon: "cash-outline", color: "#17a2b8" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12, color: "#333" }}>
        Dashboard
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {stats.map((s, i) => (
          <CardStat key={i} title={s.title} value={s.value} icon={s.icon} color={s.color} />
        ))}
      </View>

      <View style={{ marginTop: 16, backgroundColor: "#fff", borderRadius: 10, padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Recent Orders</Text>
        <Text style={{ color: "#6c757d" }}>Data order terbaru akan ditampilkan di sini.</Text>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
