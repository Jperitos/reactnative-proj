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
import { useRouter } from "expo-router";

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
    image: { uri: "https://www.pngkey.com/png/full/204-2046997_air-force-1-png-nike-air-force-1.png" },
  },

];


export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [activeTab, setActiveTab] = useState("Cart");
  const router = useRouter();


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
      <ScrollView contentContainerStyle={styles.scrollContent}
       showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
           <Feather name="shopping-cart" size={20} color="#333"/>
          <Text style={styles.heading}>My Cart</Text>

          <TouchableOpacity style={styles.wishContainer} onPress={() => router.push("/navbar/wishlist")}>
          <Text style={styles.wish}>Wishlist</Text>
          </TouchableOpacity>

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
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    width: "105%",
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
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
  wishContainer: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6, 
},
wish: {
  fontSize: 14,
  color: "#f54242",
  fontWeight: "500",
},

});