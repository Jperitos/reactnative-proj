// components/CartItemCard.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  size: number;
  color: string;
  price: number;
  quantity: number;
  image: { uri: string } | number;
}

interface Props {
  item: CartItem;
  onQuantityChange: (id: string, change: number) => void;
  onRemove: (id: string) => void;
}

function CartItemCard({ item, onQuantityChange, onRemove }: Props) {
  const renderRightActions = () => (
    <View style={styles.rightAction}>
      <TouchableOpacity
        onPress={() => onRemove(item.id)}
        style={styles.deleteBtn}
        accessibilityLabel="Remove item"
        accessible={true}
      >
        <Feather name="trash-2" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>Size: {item.size}</Text>
            <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => item.quantity > 1 && onQuantityChange(item.id, -1)}
                style={styles.qtyBtn}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyNumber}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => onQuantityChange(item.id, 1)}
                style={styles.qtyBtn}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

export default React.memo(CartItemCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 12,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  category: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: "#444",
    marginRight: 10,
  },
  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyBtn: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: "600",
  },
  qtyNumber: {
    fontSize: 14,
    marginHorizontal: 6,
    fontWeight: "500",
  },
  rightAction: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    marginVertical: 8,
  },
  deleteBtn: {
    backgroundColor: "#FF6B6B",
    borderRadius: 16,
    padding: 12,
  },
});
