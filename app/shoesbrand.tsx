import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function ShoesBrand() {
  const { brandIndex } = useLocalSearchParams();
  const index = Number(brandIndex);
  const router = useRouter();

  const brandNames = [
    "Air Jordan", "Adidas", "Nike", "Converse", "Puma", "Vans", "Under Armour",
  ];

  const sampleShoes = [
    {
      id: "1",
      name: "Air Jordan 1 Retro",
      brand: "Air Jordan",
      image: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/d77aadd5-3386-4d04-b9de-bac64877912e/air-jordan-1-retro-high-og-black-white-release-date.jpg",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Adidas Ultraboost",
      brand: "Adidas",
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/9c292b9ff89b40a5bc3aad8d012acc66_9366/Ultraboost_1.0_Shoes_Black_GX5918_01_standard.jpg",
      price: "$180.00",
      rating: 4.2,
    },
    {
      id: "3",
      name: "Nike Air Max",
      brand: "Nike",
      image: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/bb8ad7e0-26b0-4d90-8d39-f01007bb6de7/air-max-90-shoes.png",
      price: "$150.00",
      rating: 4.3,
    },
    {
      id: "4",
      name: "Chuck Taylor All Star",
      brand: "Converse",
      image: "https://www.converse.com/on/demandware.static/-/Sites-converse-master-catalog/default/dwda0e1eb0/images/a_107/170824C_A_107X1.jpg",
      price: "$70.00",
      rating: 4.0,
    },
    {
      id: "5",
      name: "Puma RS-X",
      brand: "Puma",
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391174/01/sv01/fnd/PNA/fmt/png/PUMA-x-Pokemon-RS-X-Sneakers",
      price: "$120.00",
      rating: 4.1,
    },
    {
      id: "6",
      name: "Vans Old Skool",
      brand: "Vans",
      image: "https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$PDP-FULL-IMAGE$",
      price: "$65.00",
      rating: 4.0,
    },
    {
      id: "7",
      name: "UA HOVR Phantom",
      brand: "Under Armour",
      image: "https://underarmour.scene7.com/is/image/Underarmour/3024155-003_DEFAULT?fmt=jpg&wid=1200&qlt=75",
      price: "$140.00",
      rating: 4.2,
    },
  ];

  const filteredShoes = sampleShoes.filter((shoe) => shoe.brand === brandNames[index]);
  const [likedShoes, setLikedShoes] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedShoes((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const icon = i <= Math.floor(rating)
        ? "star"
        : i - rating < 1
        ? "star-half-empty"
        : "star-o";
      stars.push(<FontAwesome key={i} name={icon} size={10} color="#f1c40f" style={{ marginRight: 2 }} />);
    }
    return <View style={styles.stars}>{stars}</View>;
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <FontAwesome name="angle-left" size={18} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{brandNames[index]}</Text>

      <FlatList
        data={filteredShoes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/shoedetail",
                params: {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  rating: item.rating?.toString(),
                  image: item.image,
                },
              })
            }
            style={styles.card}
          >
            <BlurView intensity={50} tint="light" style={styles.blur}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              {renderStars(item.rating)}
              <View style={styles.infoRow}>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <FontAwesome
                    name={likedShoes.includes(item.id) ? "heart" : "heart-o"}
                    size={15}
                    color={likedShoes.includes(item.id) ? "red" : "#777"}
                  />
                </TouchableOpacity>
              </View>
            </BlurView>
          </Pressable>
        )}
      />
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    marginTop: 30,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },
  blur: {
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
  },
});
