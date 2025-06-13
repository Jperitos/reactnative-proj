import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNavBar({ activeTab, setActiveTab }: Props) {
  const router = useRouter();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/navbar/homepage")}>
        <View style={[styles.iconCircle, activeTab === "Home" && styles.activeIcon]}>
          <Feather name="home" size={18} color={activeTab === "Home" ? "#fff" : "#888"} />
        </View>
        <Text style={[styles.navText, activeTab === "Home" && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/navbar/explore")}>
        <View style={[styles.iconCircle, activeTab === "Explore" && styles.activeIcon]}>
          <Feather name="search" size={18} color={activeTab === "Explore" ? "#fff" : "#888"} />
        </View>
        <Text style={[styles.navText, activeTab === "Explore" && styles.activeText]}>Explore</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.navItem}
      onPress={() => router.push("/navbar/wishlist")}>
      <View style={[styles.iconCircle, activeTab === "Wish" && styles.activeIcon]}>
        <Feather name="heart" size={18} color={activeTab === "Wish" ? "#fff" : "#888"} />
      </View>
      <Text style={[styles.navText, activeTab === "Wish" && styles.activeText]}>Wishlist</Text>
    </TouchableOpacity>
    
      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/navbar/cart")}>
        <View style={[styles.iconCircle, activeTab === "Cart" && styles.activeIcon]}>
          <MaterialCommunityIcons name="cart-outline" size={18} color={activeTab === "Cart" ? "#fff" : "#888"} />
        </View>
        <Text style={[styles.navText, activeTab === "Cart" && styles.activeText]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push("/navbar/profile")}>
        <View style={[styles.iconCircle, activeTab === "Profile" && styles.activeIcon]}>
          <Ionicons name="person-outline" size={18} color={activeTab === "Profile" ? "#fff" : "#888"} />
        </View>
        <Text style={[styles.navText, activeTab === "Profile" && styles.activeText]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    zIndex: 10,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 10,
    color: "#888",
    marginTop: 2,
  },
  iconCircle: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 25,
  },
  activeIcon: {
    backgroundColor: "#000",
  },
  activeText: {
    color: "#000",
    fontWeight: "bold",
  },
});
