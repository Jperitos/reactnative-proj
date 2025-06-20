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
  imageKey: rawImageKey,
  rating = "0",
  reviews = "0",
  likes = "0",
  brand = "Unknown",
  year = "Unknown",
  sold = "0",
  material = "Unknown",
  releaseDate = "Unknown",
} = useLocalSearchParams();

const imageKey = Array.isArray(rawImageKey) ? rawImageKey[0] : rawImageKey;

const imageMap: Record<string, any> = {
  "1": require("@/assets/images/v1.1.png"),
  "2": require("@/assets/images/2.png"),
  "3": require("@/assets/images/3.png"),
  "4": require("@/assets/images/4.png"),
  "5": require("@/assets/images/5.png"),
  "6": require("@/assets/images/6.png"),
  "7": require("@/assets/images/7.png"),
  "8": require("@/assets/images/8.png"),
  "9": require("@/assets/images/9.png"),
  "10": require("@/assets/images/10.png"),
  "11": require("@/assets/images/11.png"),
  "12": require("@/assets/images/12.png"),
  "13": require("@/assets/images/13.png"),
  "14": require("@/assets/images/14.png"),
  "15": require("@/assets/images/15.png"),
  "16": require("@/assets/images/16.png"),
  "17": require("@/assets/images/17.png"),
  "18": require("@/assets/images/18.png"),
  "19": require("@/assets/images/19.png"),
};

let imageSource;

if (image && typeof image === "string" && image.startsWith("http")) {
  imageSource = { uri: image };
} else if (imageKey && imageMap[imageKey]) {
  imageSource = imageMap[imageKey];
} 

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
const parsedDate = Array.isArray(releaseDate) ? releaseDate[0] : releaseDate;

const formattedReleaseDate = new Date(parsedDate).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

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
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}
>
  <FontAwesome name="chevron-left" size={12} color="#333" />
</TouchableOpacity>

 <Image
  source={
    imageSource ? imageSource : require("@/assets/images/v1.1.png")
  }
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
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.metaScroll}
  contentContainerStyle={styles.metaContainer}
>
  <View style={styles.metaTag}>
    <FontAwesome name="tag" size={12} color="#444" />
    <Text style={styles.metaText}>{brand}</Text>
  </View>
  <View style={styles.metaTag}>
    <FontAwesome name="calendar" size={12} color="#444" />
    <Text style={styles.metaText}>{year}</Text>
  </View>
  <View style={styles.metaTag}>
    <FontAwesome name="shopping-cart" size={12} color="#444" />
    <Text style={styles.metaText}>{sold} sold</Text>
  </View>
  <View style={styles.metaTag}>
    <FontAwesome name="cubes" size={12} color="#444" />
    <Text style={styles.metaText}>{material}</Text>
  </View>
  
<View style={styles.metaTag}>
  <FontAwesome name="clock-o" size={12} color="#444" />
  <Text style={styles.metaText}>Released: {formattedReleaseDate}</Text>
</View>

</ScrollView>


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
metaScroll: {
  marginTop: 12,
  marginBottom: 16,
},
metaContainer: {
  flexDirection: "row",
  gap: 10,
  paddingHorizontal: 4,
},
metaTag: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: 6,
  gap: 6,
},
metaText: {
  fontSize: 13,
  color: "#333",
},


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
    backgroundColor: "#fff",
    borderColor: "#f4f4f5"
  },
  image: {
    width: "95%",
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
