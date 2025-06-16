import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import BottomNavBar from "@/components/explore/bottomnavbar";
import { router } from "expo-router";

export default function ProfileSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("Profile");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    Alert.alert("Theme", darkMode ? "Switched to Light Mode" : "Switched to Dark Mode");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Edit Profile")}>
            <Feather name="user" size={16} color="#555" />
            <Text style={styles.itemText}>Edit Profile</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Change Password")}>
            <Feather name="lock" size={16} color="#555" />
            <Text style={styles.itemText}>Change Password</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <View style={styles.item}>
            <Ionicons name="notifications-outline" size={16} color="#555" />
            <Text style={styles.itemText}>Push Notifications</Text>
            <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
          </View>

          <View style={styles.item}>
            <Ionicons name="moon-outline" size={16} color="#555" />
            <Text style={styles.itemText}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={toggleDarkMode} />
          </View>

          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Language Settings")}>
            <Ionicons name="globe-outline" size={16} color="#555" />
            <Text style={styles.itemText}>Language</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>
        </View>

        {/* Security Section */}
        <View style={styles.section}>
          <View style={styles.item}>
            <MaterialIcons name="security" size={16} color="#555" />
            <Text style={styles.itemText}>Face ID</Text>
            <Switch value={faceIdEnabled} onValueChange={setFaceIdEnabled} />
          </View>

          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("2FA Settings")}>
            <Feather name="shield" size={16} color="#555" />
            <Text style={styles.itemText}>2-Factor Authentication</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Privacy Settings")}>
            <Feather name="lock" size={16} color="#555" />
            <Text style={styles.itemText}>Privacy Settings</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Help Center")}>
            <Feather name="help-circle" size={16} color="#555" />
            <Text style={styles.itemText}>Help Center</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Contact Us")}>
            <Feather name="mail" size={16} color="#555" />
            <Text style={styles.itemText}>Contact Us</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>
        </View>

        {/* Legal Info Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.item} onPress={() => Alert.alert("Terms of Service")}>
            <Feather name="file-text" size={16} color="#555" />
            <Text style={styles.itemText}>Terms of Service</Text>
            <Feather name="chevron-right" size={18} color="#bbb" />
          </TouchableOpacity>

          <View style={[styles.item]}>
            <Feather name="info" size={16} color="#555" />
            <Text style={styles.itemText}>App Version</Text>
            <Text style={{ fontSize: 13, color: "#999" }}>v1.0.0</Text>
          </View>

          <TouchableOpacity
            style={[styles.item, { borderBottomWidth: 0 }]}
            onPress={() =>
              Alert.alert("Confirm Deletion", "Are you sure you want to delete your account?", [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: () => Alert.alert("Account Deleted") },
              ])
            }
          >
            <Feather name="trash-2" size={16} color="#e74c3c" />
            <Text style={[styles.itemText, { color: "#e74c3c" }]}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => router.replace("/")}
          >
            <Feather name="log-out" size={16} color="#e74c3c" />
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
    paddingBottom: 60,
    backgroundColor: "#F4F4F5",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: "#f4f4f5",
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  section: {
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 16,
    overflow: "hidden",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#333",
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
