import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native"; 

interface Shoe {
  id: string;
  name: string;
  price: string;
  image: any;
  rating?: number;
  sold?: string;
  reviews?: number;
  likes?: number;
  liked?: boolean;
  brand?: string;
  year?: string;
  material?: string;
  releaseDate?: string;
}


const ShoeCard = ({ item }: { item: Shoe }) => {
  const [liked, setLiked] = useState(false);
const router = useRouter();
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

const renderStars = (rating: number = 0) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FontAwesome key={i} name="star" size={10} color="#f1c40f" style={{ marginRight: 2 }} />);
    } else if (i - rating < 1) {
      stars.push(<FontAwesome key={i} name="star-half-empty" size={10} color="#f1c40f" style={{ marginRight: 2 }} />);
    } else {
      stars.push(<FontAwesome key={i} name="star-o" size={10} color="#f1c40f" style={{ marginRight: 2 }} />);
    }
  }
  return <View style={styles.stars}>{stars}</View>;
};


  return (
<Pressable
  onPress={() =>
    router.push({
      pathname: "/shoedetail",
      params: {
        id: item.id,
        name: item.name,
        price: item.price,
        rating: item.rating?.toString(),
        sold: item.sold,
        reviews: item.reviews?.toString(),
        likes: item.likes?.toString(),
        imageKey: item.id, 
        brand: item.brand,
        year: item.year,
        material: item.material,
        releaseDate: item.releaseDate,
      },
    })
  }
  style={styles.card}
>



    <BlurView intensity={50} tint="light">
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <TouchableOpacity onPress={toggleLike}>
           <FontAwesome
            name={liked ? "heart" : "heart-o"}
            size={15}
            color={liked ? "red" : "#555"}
            />
          </TouchableOpacity>
        </View>
        {renderStars(item.rating)}
        <Text style={styles.cardPrice}>{item.price}</Text>
      </View>
    </BlurView>
    </Pressable>
  );
};

export default ShoeCard;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
    marginBottom: 16,
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    overflow: "hidden",
  },
  cardImage: {
    width: "90%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  details: {
    gap: 4,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#222",
    flex: 1,
    marginRight: 6,
  },
  stars: {
    flexDirection: "row",
    marginTop: 2,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    marginTop: 2,
  },
});
