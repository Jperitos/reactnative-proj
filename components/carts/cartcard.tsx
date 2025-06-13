import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

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

interface Props {
  item: CartItem;
  onQuantityChange: (id: string, change: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItemCard({
  item,
  onQuantityChange,
  onRemove,
}: Props) {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={() => onRemove(item.id)}>
      <FontAwesome name="trash" size={20} color="white" />
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions} enabled>
      <View style={styles.card}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>

          <View style={styles.itemMetaRow}>
            <Text style={styles.metaText}>Size: {item.size}</Text>
            <Text style={styles.metaText}>Color:</Text>
            <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
          </View>

          <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>

          <View style={styles.qtyRow}>
            <Text style={styles.metaText}>Quantity:</Text>
            <TouchableOpacity
              onPress={() => onQuantityChange(item.id, -1)}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => onQuantityChange(item.id, 1)}
              style={styles.qtyButton}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 16,
    padding: 12,
    marginBottom: 15,
    alignItems: "flex-start",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 15,
    marginTop: 4,
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
    marginBottom: 4,
  },
  itemMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },
  metaText: {
    fontSize: 12,
    color: "#555",
  },
  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginTop: 6,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
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
    fontSize: 16,
    minWidth: 24,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 10,
    marginVertical: 4,
  },
  deleteText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
