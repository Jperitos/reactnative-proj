import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BottomNavBar from "@/components/explore/bottomnavbar";
import ShoeCard from "@/components/home/shoecard";
const shoes = [
  {
    id: "1",
    name: "Nike Air Force 1",
    price: "$199.99",
    brand: "Nike",
    rating: 4,
    sold: "85k",
    reviews: 3200,
    likes: 5400,
    liked: false,
    image: "https://www.pngkey.com/png/full/204-2046997_air-force-1-png-nike-air-force-1.png", // Nike AF1
  },
  {
    id: "2",
    name: "NikeCourt Air",
    price: "$250.00",
    brand: "Nike",
    rating: 5,
    sold: "62k",
    reviews: 4100,
    likes: 6200,
    liked: false,
    image: "https://images.stockx.com/images/Nike-Court-Air-Zoom-Vapor-Pro-3-Premium-HC-White-Midnight-Navy.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=41&dpr=3&trim=color&updated_at=1749674955", // NikeCourt
  },
  {
    id: "3",
    name: "Adidas Air Force",
    price: "$450.99",
    brand: "Adidas",
    rating: 4.5,
    sold: "70k",
    reviews: 3700,
    likes: 4800,
    liked: false,
    image: "https://cdn.imgbin.com/11/7/18/imgbin-sneakers-air-force-1-adidas-nike-air-jordan-adidas-medhT9jvjjCNEsv0cuKzxLRwF.jpg", // Adidas style
  },
  {
    id: "4",
    name: "Converse Classic",
    price: "$330.00",
    brand: "Converse",
    rating: 3,
    sold: "40k",
    reviews: 1900,
    likes: 2600,
    liked: false,
    image: "https://cdn.imgbin.com/12/17/8/imgbin-chuck-taylor-all-stars-high-top-converse-sneakers-shoe-tow-mater-beJmvvG9dJDnphWh4R6Rt2ddw.jpg", // Converse
  },
  {
    id: "5",
    name: "Puma Air Max",
    price: "$299.99",
    brand: "Puma",
    rating: 4,
    sold: "50k",
    reviews: 2200,
    likes: 3100,
    liked: false,
    image: "https://cdn.imgbin.com/3/24/3/imgbin-nike-air-max-97-sneakers-shoe-huarache-air-max-97-Q3T5nNVXyjpJqzQbWVFNTaWjN.jpg", // Puma
  },
  {
    id: "6",
    name: "Vans Blazer",
    price: "$189.00",
    brand: "Vans",
    rating: 4,
    sold: "30k",
    reviews: 1700,
    likes: 2100,
    liked: false,
    image: "https://p7.hiclipart.com/preview/189/485/209/vans-old-skool-sneakers-shoe-converse-old-skool.jpg", // Vans
  },
];

const categories = ["All", "Nike", "Addidas", "Converse", "Puma", "Vans", "UnderArmor"];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Home");
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [shoeData, setShoeData] = useState(shoes);



  const filteredShoes = selectedCategory === "All"
  ? shoeData
  : shoeData.filter((shoe) => shoe.brand === selectedCategory);


const searchedShoes = filteredShoes.filter((shoe) =>
  shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <View>
          <Text style={styles.greet}>Hi Damoslo!</Text>
          <Text style={styles.goodMorning}>Good Morning!</Text>
        </View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_xXMYRNugAnQWuh9DIUNNC6SwVDuYHJTqQ&s",
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.searchSection}>
        <TextInput placeholder="Search" style={styles.input} />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={14} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryBtn,
              selectedCategory === cat && styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.activeCategoryText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );

  return (
  <View style={styles.container}>
    <FlatList
      data={searchedShoes}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListHeaderComponent={renderHeader}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ShoeCard item={item} />}
    />

    <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
  </View>
);

}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20,},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  greet: { fontSize: 14, color: "#888" },
  goodMorning: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  searchSection: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 13.5,
    color: "#888",
  },
  searchButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 10,
  },
  categoryScroll: {
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
  },
  categoryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 23,
    backgroundColor: "#eee",
    height: 40,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  activeCategory: {
    backgroundColor: "#000",
  },
  activeCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    width: "48%",
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 12,
    marginTop: 20,
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: { fontWeight: "bold", marginBottom: 5 },
  cardPrice: { color: "#333" },
  navBar: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  borderTopWidth: 1,
  borderColor: "#eee",
  zIndex: 10,         
  elevation: 10,     
},
navItem: {
  alignItems: "center",
  justifyContent: "center",
},
navText: {
  fontSize: 10,
  color: "#888",
  marginTop: 2,
},
iconCircle: {
  backgroundColor: "transparent",
  padding: 10,
  borderRadius: 25,
},
activeIcon: {
  backgroundColor: "#000",
},
activeText: {
  color: "#000",
  fontWeight: "bold",
},


});
