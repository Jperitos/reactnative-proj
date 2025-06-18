import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {useRouter} from 'expo-router';
type Product = {
  name: string;
  image: { uri: string };
  rating: number;
  sold: number;
};

export default function ExploreProductSection() {
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const [showAll, setShowAll] = useState(false);
 const router = useRouter();
  const toggleLike = (name: string) => {
    setLikedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const allProducts: Product[] = [
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
    {
      name: "Yeezy Boost",
      image: {
        uri: "https://cdn.flightclub.com/750/TEMPLATE/805558/1.jpg",
      },
      rating: 4.8,
      sold: 410,
    },
    {
      name: "New Balance 550",
      image: {
        uri: "https://nb.scene7.com/is/image/NB/m550bb1_nb_02_i?$pdpflexf2$&wid=440&hei=440",
      },
      rating: 4.4,
      sold: 200,
    },
    {
      name: "Nike Dunk Low",
      image: {
        uri: "https://static.nike.com/a/images/t_default/b0cc1193-8059-4a30-a9e6-2389d37fbb88/dunk-low-retro-shoes-BHFxMS.png",
      },
      rating: 4.6,
      sold: 310,
    },
    {
      name: "Adidas Gazelle",
      image: {
        uri: "https://assets.adidas.com/images/w_600,f_auto,q_auto/fb06d3a6c3424be2b158af11010a9a9e_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg",
      },
      rating: 4.5,
      sold: 270,
    },
  ];

  const productsToShow = showAll ? allProducts : allProducts.slice(0, 4);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }).map((_, i) => (
      <FontAwesome
        key={i}
        name={i < fullStars ? "star" : "star-o"}
        size={12}
        color="#FFD700"
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>LATEST SHOES</Text>
        <TouchableOpacity onPress={() => setShowAll(!showAll)}>
          <Text style={styles.seeAll}>{showAll ? "Show Less" : "See All"}</Text>
        </TouchableOpacity>
      </View>

    <View style={styles.gridContainer}>
        {productsToShow.map((product) => (
          <TouchableOpacity
            key={product.name}
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/shoedetail",
                params: {
                  name: product.name,
                  image: product.image.uri,
                  rating: product.rating.toString(),
                  sold: product.sold.toString(),
                  price: "$199", 
                   reviews: "45",
                },
              })
            }
          >
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
          </TouchableOpacity>
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
