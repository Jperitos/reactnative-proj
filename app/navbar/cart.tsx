import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import BottomNavBar from "@/components/bottomnavbar";
import { useState } from "react";

// Define type for cart item
interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: { uri: string };
}

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Nike Air Force 1",
    price: "$199.99",
    quantity: 1,
    image: { uri: "https://i.imgur.com/1Wv1B3f.png" },
  },
  {
    id: "2",
    name: "Converse Classic",
    price: "$330.00",
    quantity: 2,
    image: { uri: "https://i.imgur.com/X1FzC6b.png" },
  },
];

export default function Cart() {
const [activeTab, setActiveTab] = useState("Cart");
  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="trash-2" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: $859.99</Text>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>

      <BottomNavBar  activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  itemPrice: {
    color: "#666",
    marginTop: 4,
  },
  itemQty: {
    color: "#aaa",
    marginTop: 2,
    fontSize: 13,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 20,
  },
  totalText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  checkoutBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },
});
