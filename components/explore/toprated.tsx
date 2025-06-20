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
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");

const topRatedShoes = [
  {
    id: "1",
    name: "Air Max 90",
    image:
      "https://i.ebayimg.com/images/g/WyoAAOSwFDVnN5-N/s-l1200.png",
    year: "2020",
    sold: "85k",
    description: "A timeless classic known for comfort and iconic style.",
    price: "$120",
    category: "Running",
    colorway: "White/Infrared",
    material: "Mesh & Leather",
    rating: 4.8,
    releaseDate: "2020-03-15",
    reviews: 6340,
  },
  {
    id: "2",
    name: "Yeezy Boost 350",
    image:
      "https://i.pinimg.com/736x/0f/62/04/0f62049b68f25da00c320086887a40b4.jpg",
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
    reviews: 7920,
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    image:
      "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
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
    reviews: 5480,
  },
  {
    id: "4",
    name: "Puma RS-X",
    image:
      "https://images.stockx.com/images/Puma-RS-X-Black-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1639998052",
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
    reviews: 4200,
  },
  {
    id: "5",
    name: "Vans Old Skool",
    image:
      "https://www.shooos.com/media/catalog/product/cache/2/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/v/n/vn0009q6cbt1-1.jpg",
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
    reviews: 8800,
  },
];

export default function TopRatedShoesSection() {
  const [liked, setLiked] = useState<string[]>([]);
  const listRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
const scrollRef = useRef<ScrollView>(null);
const router = useRouter();
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
      pagingEnabled={false}
      onTouchStart={() => {
        setIsScrolling(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      }}
      onTouchEnd={() => {
        scrollTimeout.current = window.setTimeout(() => setIsScrolling(false), 2000);
      }}
    >
      {topRatedShoes.map((item) => (
        <TouchableOpacity
  key={item.id}
onPress={() =>
  router.push({
    pathname: "/shoedetail",
    params: {
      name: item.name,
      price: item.price,
      image: item.image,
      rating: item.rating.toString(),
      brand: item.provider,
      year: item.year,
      sold: item.sold,
      material: item.material,
      releaseDate: item.releaseDate,
      description: item.description,
      category: item.category,
      colorway: item.colorway,
      reviews:item.reviews,
    },
  })
}

>
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
        </TouchableOpacity>
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
