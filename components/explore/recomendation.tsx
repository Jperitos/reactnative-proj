import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const recommendations = [
  {
    id: "1",
    name: "Nike Air Max 2023",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef29a2d9-08f2-45fd-b7c6-8b140c21f260/air-max-90-shoes.png",
    price: "$129.99",
  },
  {
    id: "2",
    name: "Adidas UltraBoost",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e1a7eb4173e4d62a3dbac79011f97b2_9366/Ultraboost_22_Shoes_White_GX5462_01_standard.jpg",
    price: "$149.99",
  },
  {
    id: "3",
    name: "Converse Chuck 70",
    image: "https://www.converse.ph/media/catalog/product/1/6/169013c_std1.jpg",
    price: "$89.99",
  },
  {
    id: "4",
    name: "Puma RS-X",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/388847/01/sv01/fnd/PHL/fmt/png",
    price: "$109.99",
  },
];

export default function RecommendationSection() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Recommended for You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 0,
      padding:10,
      marginLeft: -20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
     fontSize: 15,
    fontWeight: "bold",
    color: "#555",
  },
  seeAll: {
    fontSize: 13,
    color: "gray",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 15,
    marginRight: 14,
    width: 200,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textWrapper: {
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },
});