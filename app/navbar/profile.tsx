import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import BottomNavBar from "@/components/bottomnavbar";
import { router } from "expo-router";

export default function ProfileSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: "https://i.imgur.com/0y8Ftya.png" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.item}>
            <Feather name="user" size={18} color="#444" />
            <Text style={styles.itemText}>Edit Profile</Text>
            <Feather name="chevron-right" size={18} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Feather name="lock" size={18} color="#444" />
            <Text style={styles.itemText}>Change Password</Text>
            <Feather name="chevron-right" size={18} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.item}>
            <Ionicons name="notifications-outline" size={18} color="#444" />
            <Text style={styles.itemText}>Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>
          <View style={styles.item}>
            <Ionicons name="moon-outline" size={18} color="#444" />
            <Text style={styles.itemText}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <View style={styles.item}>
            <MaterialIcons name="security" size={18} color="#444" />
            <Text style={styles.itemText}>Face ID</Text>
            <Switch value={faceIdEnabled} onValueChange={setFaceIdEnabled} />
          </View>
          <TouchableOpacity style={styles.item}>
            <Feather name="shield" size={18} color="#444" />
            <Text style={styles.itemText}>2-Factor Authentication</Text>
            <Feather name="chevron-right" size={18} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.item}>
            <Feather name="help-circle" size={18} color="#444" />
            <Text style={styles.itemText}>Help Center</Text>
            <Feather name="chevron-right" size={18} color="#ccc" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Feather name="mail" size={18} color="#444" />
            <Text style={styles.itemText}>Contact Us</Text>
            <Feather name="chevron-right" size={18} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => { router.replace("/");
            }}
            >
  <Feather name="log-out" size={18} color="#e74c3c" />
  <Text style={[styles.itemText, { color: "#e74c3c" }]}>Logout</Text>
</TouchableOpacity>

        </View>
      </ScrollView>

      <View style={styles.navContainer}>
        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 120,
    backgroundColor: "#F9F9F9",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  section: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    padding: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    justifyContent: "space-between",
  },
  itemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  navContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
