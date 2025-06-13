import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { ScrollView } from "react-native";

const { width } = Dimensions.get("window");

const topRatedShoes = [
  {
    id: "1",
    name: "Air Max 90",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dfdf1a09-cd11-49bb-b558-5c2b5dfb011f/air-max-90-mens-shoes-nw30Kz.png",
    provider: "Nike",
    year: "2020",
    sold: "85k",
    description: "A timeless classic known for comfort and iconic style.",
    price: "$120",
    category: "Running",
    colorway: "White/Infrared",
    material: "Mesh & Leather",
    rating: 4.8,
    releaseDate: "2020-03-15",
  },
  {
    id: "2",
    name: "Yeezy Boost 350",
    image:
      "https://sneakernews.com/wp-content/uploads/2019/11/adidas-yeezy-boost-350-v2-yecheil-release-date.jpg",
    provider: "Adidas",
    year: "2019",
    sold: "100k",
    description: "Kanye West's signature sneaker with futuristic vibes.",
    price: "$220",
    category: "Lifestyle",
    colorway: "Yecheil",
    material: "Primeknit & Boost",
    rating: 4.7,
    releaseDate: "2019-12-20",
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    image:
      "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg",
    provider: "Nike",
    year: "2021",
    sold: "76k",
    description: "A streetwear staple with bold, minimal colorways.",
    price: "$110",
    category: "Casual",
    colorway: "White/Black",
    material: "Leather",
    rating: 4.6,
    releaseDate: "2021-01-08",
  },
  {
    id: "4",
    name: "Puma RS-X",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/369666/19/sv01/fnd/PHL/fmt/png",
    provider: "Puma",
    year: "2022",
    sold: "60k",
    description: "Chunky, retro-inspired design with modern comfort.",
    price: "$100",
    category: "Training",
    colorway: "White/Multi",
    material: "Mesh & Rubber",
    rating: 4.5,
    releaseDate: "2022-05-11",
  },
  {
    id: "5",
    name: "Vans Old Skool",
    image:
      "https://images.vans.com/is/image/Vans/D3HY28-HERO?$PDP-FULL-IMAGE$",
    provider: "Vans",
    year: "2018",
    sold: "120k",
    description: "Skateboarding legend with an iconic stripe.",
    price: "$70",
    category: "Skate",
    colorway: "Black/White",
    material: "Canvas & Suede",
    rating: 4.9,
    releaseDate: "2018-09-01",
  },
];

export default function TopRatedShoesSection() {
  const [liked, setLiked] = useState<string[]>([]);
  const listRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
const scrollRef = useRef<ScrollView>(null);

  const toggleLike = (id: string) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

 useEffect(() => {
  if (isScrolling) return;

  const interval = setInterval(() => {
    const nextIndex = currentIndex < topRatedShoes.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);

    const offset = nextIndex * (width * 0.85 + 15); // card width + marginRight
    scrollRef.current?.scrollTo({ x: offset, animated: true });
  }, 2000);

  return () => clearInterval(interval);
}, [isScrolling, currentIndex]);



return (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>TOP RATED</Text>
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false} // we scroll manually
      onTouchStart={() => {
        setIsScrolling(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      }}
      onTouchEnd={() => {
        scrollTimeout.current = window.setTimeout(() => setIsScrolling(false), 2000);
      }}
    >
      {topRatedShoes.map((item) => (
        <BlurView key={item.id} intensity={50} tint="light" style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.details}>
            <View style={styles.titleRow}>
              <Text style={styles.name}>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleLike(item.id)}>
                <AntDesign
                  name={liked.includes(item.id) ? "heart" : "hearto"}
                  size={20}
                  color={liked.includes(item.id) ? "red" : "#555"}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.meta}>
              {item.provider} • {item.year} • Sold: {item.sold}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.info}>Price: {item.price}</Text>
            <Text style={styles.info}>
              Category: {item.category} • Rating: {item.rating}⭐
            </Text>
            <Text style={styles.info}>
              Colorway: {item.colorway} • Material: {item.material}
            </Text>
            <Text style={styles.info}>Released: {item.releaseDate}</Text>
          </View>
        </BlurView>
      ))}
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  card: {
    width: width * 0.85,
    marginRight: 15,
    borderRadius: 20,
    overflow: "hidden",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 140,
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
  name: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#222",
  },
  meta: {
    fontSize: 12,
    color: "#666",
  },
  description: {
    fontSize: 12,
    color: "#444",
    marginTop: 4,
  },
  info: {
    fontSize: 12,
    color: "#555",
  },
});
