import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// ✅ Import semua halaman utama
import DashboardScreen from "./src/screens/dashboard/DashboardScreen";
import DashboardSuperadmin from "./src/screens/dashboard/DashboardSuperAdmin";

// 🔹 Inisialisasi bottom tab
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hilangkan header/tab di atas
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName: string = "home-outline";

            if (route.name === "Dashboard") iconName = "speedometer-outline";
            else if (route.name === "User") iconName = "people-outline";
            else if (route.name === "Role")
              iconName = "shield-checkmark-outline";
            else if (route.name === "Order") iconName = "cube-outline";

            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardSuperadmin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
