import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 60) / 2;

const likedShoes = [
  {
    id: "1",
    name: "Nike Air Force 1",
    price: "$199.99",
    brand: "Nike",
    size: "9",
    color: "White",
    liked: true,
    likedAt: "2025-06-16 10:45 AM",
    image: {
      uri: "https://www.pngkey.com/png/full/204-2046997_air-force-1-png-nike-air-force-1.png",
    },
  },
  {
    id: "2",
    name: "Adidas Ultraboost",
    price: "$180.00",
    brand: "Adidas",
    size: "10",
    color: "Midnight Navy",
    liked: true,
    likedAt: "2025-06-16 10:50 AM",
    image: {
      uri: "https://images.stockx.com/images/Nike-Court-Air-Zoom-Vapor-Pro-3-Premium-HC-White-Midnight-Navy.jpg",
    },
  },
  {
    id: "3",
    name: "Nike Air Max 270",
    price: "$160.00",
    brand: "Nike",
    size: "8",
    color: "Black/Red",
    liked: true,
    likedAt: "2025-06-16 11:00 AM",
    image: {
      uri: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dc098127-382e-452f-b89d-d305e52e4a6a/air-max-270-shoes-KkLcGR.png",
    },
  },
  {
    id: "4",
    name: "Puma RS-X",
    price: "$140.00",
    brand: "Puma",
    size: "11",
    color: "Grey/Blue",
    liked: true,
    likedAt: "2025-06-16 11:10 AM",
    image: {
      uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/01/sv01/fnd/PNA/fmt/png",
    },
  },
   {
    id: "4",
    name: "Puma RS-X",
    price: "$140.00",
    brand: "Puma",
    size: "11",
    color: "Grey/Blue",
    liked: true,
    likedAt: "2025-06-16 11:10 AM",
    image: {
      uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/01/sv01/fnd/PNA/fmt/png",
    },
  },
   {
    id: "4",
    name: "Puma RS-X",
    price: "$140.00",
    brand: "Puma",
    size: "11",
    color: "Grey/Blue",
    liked: true,
    likedAt: "2025-06-16 11:10 AM",
    image: {
      uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/01/sv01/fnd/PNA/fmt/png",
    },
  },
  {
    id: "4",
    name: "Puma RS-X",
    price: "$140.00",
    brand: "Puma",
    size: "11",
    color: "Grey/Blue",
    liked: true,
    likedAt: "2025-06-16 11:10 AM",
    image: {
      uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/01/sv01/fnd/PNA/fmt/png",
    },
  },
  {
    id: "4",
    name: "Puma RS-X",
    price: "$140.00",
    brand: "Puma",
    size: "11",
    color: "Grey/Blue",
    liked: true,
    likedAt: "2025-06-16 11:10 AM",
    image: {
      uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/391174/01/sv01/fnd/PNA/fmt/png",
    },
  },
];

export default function WishlistScreen() {
  const router = useRouter();
  const [wishlist, setWishlist] = useState(likedShoes);

  const toggleLike = (id: string) => {
    const updated = wishlist
      .map((shoe) => (shoe.id === id ? { ...shoe, liked: !shoe.liked } : shoe))
      .filter((shoe) => shoe.liked);
    setWishlist(updated);
  };

  const renderItem = ({ item }: { item: typeof likedShoes[0] }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.brand}>{item.brand}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <FontAwesome
            name="heart"
            size={18}
            color="#e74c3c"
            style={styles.heartIconInline}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.detail}>Size: {item.size}</Text>
      <Text style={styles.detail}>Color: {item.color}</Text>
      <Text style={styles.time}>{item.likedAt}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Arrow-only back button */}
      <TouchableOpacity onPress={() => router.push("/navbar/cart")} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={12} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Your Wishlist</Text>

      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>No items in wishlist.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 50,
    fontSize: 16,
  },
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  brand: {
    fontSize: 12,
    color: "#666",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 55,
    marginVertical: 4,
  },
  price: {
    fontSize: 13,
    color: "#000",
  },
  heartIconInline: {
    marginLeft: 25,
  },
  detail: {
    fontSize: 12,
    color: "#444",
  },
  time: {
    fontSize: 11,
    color: "#999",
    marginTop: 6,
  },
});
