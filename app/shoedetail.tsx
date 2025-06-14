import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CommentSection from "@/components/home/comment";
import RecommendationSection from "@/components/explore/recomendation";

const ShoeDetail = () => {
const {
  name,
  price,
  image,
  rating = "0",
  reviews = "0",
  likes = "0",
} = useLocalSearchParams();

const numericRating = Number(rating);
const numericReviews = Number(reviews);
const numericLikes = Number(likes);

const router=useRouter();
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

const colors = [
  "#FFB3BA", // pastel red
  "#C2C2C2", // pastel gray (for black)
  "#A3C9F9", // pastel blue
  "#FFF2FF", // white (keep as is)
  "#B2F2BB", // pastel green
];

  const sizes = [6, 7, 8, 9, 10];
const formatCount = (count: number): string => {
  return count >= 1000 ? (count / 1000).toFixed(1) + "k" : count.toString();
};

  const toggleLike = () => setLiked(!liked);

const renderStars = (rating: number = 0, reviews: number = 0) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FontAwesome key={i} name="star" size={16} color="#f1c40f" />);
    } else if (i - rating < 1) {
      stars.push(<FontAwesome key={i} name="star-half-empty" size={16} color="#f1c40f" />);
    } else {
      stars.push(<FontAwesome key={i} name="star-o" size={16} color="#f1c40f" />);
    }
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
      <View style={{ flexDirection: "row" }}>{stars}</View>
      <Text style={{ marginLeft: 8, color: "#666", fontSize: 14 }}>
        ({numericReviews} reviews)
      </Text>
    </View>
  );
};

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => router.push("/navbar/homepage")}>
  <FontAwesome name="chevron-left" size={12} color="#333" />
</TouchableOpacity>

        <Image
          source={{ uri: Array.isArray(image) ? image[0] : image }}
          style={styles.image}
        />
  <View style={styles.likeWrapper}>
  <TouchableOpacity onPress={toggleLike}>
    <FontAwesome
      name={liked ? "heart" : "heart-o"}
      size={24}
      color={liked ? "red" : "#333"}
    />
  </TouchableOpacity>
  <Text style={styles.likeCount}>
    {formatCount(liked ? Number(likes) + 1 : Number(likes))}
  </Text>
</View>


      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        <View style={styles.ratingRow}>
          {renderStars(Number(rating))}
          <Text style={styles.ratingNumber}>({rating})</Text>
        </View>

        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.description}>
          This stylish shoe is designed for comfort and performance. Perfect for
          casual wear or athletic activities.
        </Text>

        <Text style={styles.sectionTitle}>Colors</Text>
        <View style={styles.colorRow}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[
                styles.colorBox,
                {
                  backgroundColor: color,
                  borderWidth: selectedColor === color ? 2 : 0,
                  borderColor: "#000",
                },
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Select Size</Text>
        <View style={styles.sizeRow}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.selectedSizeBox,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
  <TouchableOpacity style={styles.cartButton}>
    <Text style={styles.cartButtonText}>Add to Cart</Text>
  </TouchableOpacity>
</View>

<View style={{ paddingHorizontal: 10 }}>
  <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>Comments</Text>
  <CommentSection />
</View>

    <View style={{ padding: 20 }}>
      <RecommendationSection />
    </View>

    </View>
    </ScrollView>
  );
};

export default ShoeDetail;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backIcon: {
  position: "absolute",
  top: 40,
  left: 20,
  borderRadius: 20,
  padding: 8,
  elevation: 4,
  zIndex: 10,
},

footer: {
  paddingHorizontal: 20,
  paddingVertical: 16,
  backgroundColor: "#fff",

},

cartButton: {
  backgroundColor: "#000",
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: "center",
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},

cartButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

  likeWrapper: {
  position: "absolute",
  top: 40,
  right: 20,
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 8,
  elevation: 4,
  alignItems: "center",
},
likeCount: {
  fontSize: 12,
  color: "#555",
  marginTop: 4,
},

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: width,
    height: 400,
    resizeMode: "contain",
  },
  likeIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    elevation: 4,
  },
  detailsContainer: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 22,
    color: "#2c3e50",
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  ratingNumber: {
    marginLeft: 8,
    fontSize: 16,
    color: "#888",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  colorRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  sizeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectedSizeBox: {
    backgroundColor: "#000",
  },
  sizeText: {
    color: "#333",
  },
  selectedSizeText: {
    color: "#fff",
  },
});
