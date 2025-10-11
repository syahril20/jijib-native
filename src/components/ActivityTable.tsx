import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

type Activity = {
    username: string;
    action: string;
    description: string;
    created_at: string;
};

interface ActivityTableProps {
    data: Activity[];
}

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
    return (
        <ScrollView style={{ marginTop: 12 }}>
            {data.length === 0 ? (
                <View style={styles.emptyRow}>
                    <Text style={styles.emptyText}>Belum ada aktivitas yang tercatat.</Text>
                </View>
            ) : (
                data.map((activity, index) => (
                    <View
                        key={index}
                        style={[
                            styles.card,
                            index % 2 === 0 ? styles.evenCard : styles.oddCard,
                        ]}
                    >
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                                {getInitials(activity.username)}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.header}>
                                <Text style={styles.username}>{activity.username}</Text>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{activity.action}</Text>
                                </View>
                            </View>
                            <Text style={styles.description}>{activity.description}</Text>
                            <Text style={styles.timestamp}>{activity.created_at}</Text>
                        </View>
                    </View>
                ))
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    evenCard: {
        backgroundColor: "#f8f9fa",
    },
    oddCard: {
        backgroundColor: "#fff",
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    avatarText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#0056b3",
        marginRight: 8,
    },
    badge: {
        backgroundColor: "#e9ecef",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    badgeText: {
        color: "#007bff",
        fontSize: 13,
        fontWeight: "600",
    },
    description: {
        color: "#212529",
        fontSize: 15,
        marginBottom: 6,
    },
    timestamp: {
        color: "#6c757d",
        fontSize: 13,
        fontStyle: "italic",
    },
    emptyRow: {
        padding: 20,
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        borderRadius: 12,
    },
    emptyText: {
        color: "#6c757d",
        fontSize: 15,
        fontStyle: "italic",
    },
});

export default ActivityTable;
