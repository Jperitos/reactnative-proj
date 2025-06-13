import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CartItemCard from "@/components/carts/cartcard";
import BottomNavBar from "@/components/explore/bottomnavbar";

interface CartItem {
  id: string;
  name: string;
  category: string;
  size: number;
  color: string;
  price: number;
  quantity: number;
  image: { uri: string };
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Nike Air Force 1",
    category: "Sneakers",
    size: 9,
    color: "#f54242",
    price: 199.99,
    quantity: 1,
    image: { uri: "https://i.imgur.com/1Wv1B3f.png" },
  },
  {
    id: "2",
    name: "Converse Classic",
    category: "Canvas",
    size: 8,
    color: "#4287f5",
    price: 330.0,
    quantity: 2,
    image: { uri: "https://i.imgur.com/X1FzC6b.png" },
  },
  {
    id: "3",
    name: "Adidas Ultraboost",
    category: "Running",
    size: 10,
    color: "#000000",
    price: 180.0,
    quantity: 1,
    image: { uri: "https://i.imgur.com/fYONwQl.png" },
  },
  {
    id: "4",
    name: "Puma RS-X",
    category: "Lifestyle",
    size: 9,
    color: "#4CAF50",
    price: 150.0,
    quantity: 1,
    image: { uri: "https://i.imgur.com/8Km9tLL.png" },
  },
  {
    id: "5",
    name: "Vans Old Skool",
    category: "Skate",
    size: 8,
    color: "#FF9800",
    price: 75.0,
    quantity: 2,
    image: { uri: "https://i.imgur.com/VZ2gTsd.png" },
  },
  {
    id: "6",
    name: "New Balance 574",
    category: "Casual",
    size: 10,
    color: "#607D8B",
    price: 90.0,
    quantity: 1,
    image: { uri: "https://i.imgur.com/IkCzDQx.png" },
  },
];


export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [activeTab, setActiveTab] = useState("cart");

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, change: number) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updated);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Feather name="shopping-cart" size={24} color="black" />
          <Text style={styles.heading}>My Cart</Text>
        </View>

        <View style={styles.list}>
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </View>

      </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Place Order</Text>
          </TouchableOpacity>
        </View>

      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 10,
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 130,
  },
  scrollContent: {
  paddingHorizontal: 20,
  paddingBottom: 160,
  paddingTop: 20,
},
  card: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 16,
    width: "100%",
    padding: 12,
    marginBottom: 15,
    alignItems: "center",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  itemCategory: {
    fontSize: 13,
    color: "#666",
  },
  itemMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#555",
    marginRight: 10,
  },
  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    backgroundColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
  },
  qtyValue: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutBtn: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});