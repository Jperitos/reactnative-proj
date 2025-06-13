import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Product = {
  name: string;
  image: { uri: string };
  rating: number;
  sold: number;
};

export default function ExploreProductSection() {
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (name: string) => {
    setLikedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const products: Product[] = [
    {
      name: "Air Max 90",
      image: {
        uri: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/24e27f14-7351-41a8-8b1e-0b3e306d40ce/air-max-90-shoes.png",
      },
      rating: 4.5,
      sold: 220,
    },
    {
      name: "Ultraboost",
      image: {
        uri: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f0d46b9e8f824c8e9f1eaf1d015e8a64_9366/Ultraboost_Light_Shoes_White_HQ6338_01_standard.jpg",
      },
      rating: 4.7,
      sold: 340,
    },
    {
      name: "Chuck Taylor",
      image: {
        uri: "https://www.converse.ph/media/catalog/product/cache/1/small_image/600x/9df78eab33525d08d6e5fb8d27136e95/M/9/M9697C_0.jpg",
      },
      rating: 4.3,
      sold: 180,
    },
    {
      name: "RS-X",
      image: {
        uri: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/390777/01/sv01/fnd/PHL/fmt/png",
      },
      rating: 4.6,
      sold: 290,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i < fullStars ? "star" : "star-o"}
          size={12}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>LATEST SHOES</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        {products.map((product) => (
          <View key={product.name} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.infoContainer}>
              <View style={styles.nameRow}>
                <Text style={styles.productName}>{product.name}</Text>
                <TouchableOpacity onPress={() => toggleLike(product.name)} style={styles.inlineHeart}>
                  <FontAwesome
                    name={likedItems[product.name] ? "heart" : "heart-o"}
                    size={14}
                    color={likedItems[product.name] ? "red" : "#aaa"}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ratingRow}>{renderStars(product.rating)}</View>
              <Text style={styles.soldText}>{product.sold}+ sold</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  seeAll: {
    fontSize: 12,
    color: "gray",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    width: "48%",
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: "flex-start",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 4,
  },
  productName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  inlineHeart: {
    paddingLeft: 8,
  },
  ratingRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  soldText: {
    fontSize: 11,
    color: "#666",
  },
});
