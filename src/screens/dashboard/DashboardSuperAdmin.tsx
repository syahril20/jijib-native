import React, { useEffect } from "react";
import { ScrollView, View, Text, Button, Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import CardStat from "../../components/CardStat";
import ActivityTable from "../../components/ActivityTable";

export default function DashboardSuperAdmin() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldShowBanner: true, // tampilkan banner di atas layar
      shouldShowList: true, // tampilkan di daftar notifikasi juga
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  // ✅ Setup izin notifikasi
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  // Fungsi minta izin notifikasi
  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    console.log("🔍 Izin notifikasi:", finalStatus);

    if (finalStatus !== "granted") {
      Alert.alert(
        "Izin belum diberikan",
        "Aplikasi tidak dapat menampilkan notifikasi."
      );
      return;
    }
  }

  // ✅ Fungsi tampilkan notifikasi lokal
  async function showNotification() {
    console.log("🔔 Menampilkan notifikasi...");
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Halo dari Jijib Native 🚀",
        body: "Ini notifikasi uji coba dari aplikasi kamu!",
      },
      trigger: null, // tampil langsung
    });
  }

  const stats = [
    {
      title: "Total Pengguna",
      value: 120,
      icon: "people-outline",
      color: "#007bff",
    },
    {
      title: "Total Admin",
      value: 8,
      icon: "shield-checkmark-outline",
      color: "#28a745",
    },
    {
      title: "Total Transaksi",
      value: 245,
      icon: "swap-horizontal-outline",
      color: "#ffc107",
    },
    {
      title: "Laporan Masuk",
      value: 5,
      icon: "flag-outline",
      color: "#dc3545",
    },
  ];

  const activities = [
    {
      username: "superadmin",
      action: "LOGIN",
      description: "Berhasil login ke sistem",
      created_at: "2025-10-11 09:30:00",
    },
    {
      username: "admin1",
      action: "UPDATE",
      description: "Mengubah data user #102",
      created_at: "2025-10-11 09:45:00",
    },
    {
      username: "admin2",
      action: "DELETE",
      description: "Menghapus laporan #58",
      created_at: "2025-10-11 10:00:00",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
          marginTop: 30,
          color: "#333",
        }}
      >
        Dashboard Super Admin
      </Text>

      {/* Card Statistik */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {stats.map((s, i) => (
          <CardStat
            key={i}
            title={s.title}
            value={s.value}
            icon={s.icon}
            color={s.color}
          />
        ))}
      </View>

      {/* Tombol Notifikasi */}
      <View style={{ marginVertical: 16 }}>
        <Button
          title="🔔 Tampilkan Notifikasi"
          color="#007bff"
          onPress={showNotification}
        />
      </View>

      {/* Activity Log */}
      <View
        style={{
          marginTop: 8,
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>
          📋 Activity Log
        </Text>
        <ActivityTable data={activities} />
      </View>
    </ScrollView>
  );
}
