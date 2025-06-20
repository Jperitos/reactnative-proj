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
        uri: "https://i.ebayimg.com/images/g/WyoAAOSwFDVnN5-N/s-l1200.png",
      },
      rating: 4.5,
      sold: 220,
    },
    {
      name: "Ultraboost",
      image: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYksAkIaLPPJz5H1fb8OA0twb15-FXBTpRaBx3zEeQZL463U1iMNO7VxEywT3aN2H_P50&usqp=CAU",
      },
      rating: 4.7,
      sold: 340,
    },
    {
      name: "Chuck Taylor",
      image: {
        uri: "https://www.pngkey.com/png/full/83-837858_antique-converse-shoes-drawing-chuck-taylor-all-star.png",
      },
      rating: 4.3,
      sold: 180,
    },
    {
      name: "RS-X",
      image: {
        uri: "https://images.stockx.com/images/Puma-RS-X-Black-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1639998052",
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
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsx2uUedyYqJUtnw83yfuEu2DHMVtf_AN8Q&s",
      },
      rating: 4.4,
      sold: 200,
    },
    {
      name: "Nike Dunk Low",
      image: {
        uri: "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
      },
      rating: 4.6,
      sold: 310,
    },
    {
      name: "Adidas Gazelle",
      image: {
        uri: "https://hypedfam.com/cdn/shop/files/adidas-gazelle-core-black-cloud-white-gold4.webp?v=1712103161",
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
