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
    name: "Vans Old Skool",
    price: "$70.00",
    brand: "Vans",
    year: "2023",
    material: "Canvas & Suede",
    releaseDate: "2023-02-15",
    rating: 4.3,
    sold: "110k",
    reviews: 4200,
    likes: 5000,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "2",
    name: "Nike Air Max 270",
    price: "$150.00",
    brand: "Nike",
    year: "2022",
    material: "Mesh & Rubber",
    releaseDate: "2022-05-10",
    rating: 4.6,
    sold: "200k",
    reviews: 7800,
    likes: 8200,
    liked: false,
    image: require("@/assets/images/v2.1.png"),
  },
  {
    id: "3",
    name: "Adidas Ultraboost 22",
    price: "$180.00",
    brand: "Adidas",
    year: "2023",
    material: "Primeknit & Foam",
    releaseDate: "2023-01-20",
    rating: 4.8,
    sold: "250k",
    reviews: 9200,
    likes: 11000,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "4",
    name: "Converse Chuck Taylor",
    price: "$60.00",
    brand: "Converse",
    year: "2021",
    material: "Canvas",
    releaseDate: "2021-07-12",
    rating: 4.2,
    sold: "300k",
    reviews: 5000,
    likes: 4600,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "5",
    name: "New Balance 990v5",
    price: "$175.00",
    brand: "New Balance",
    year: "2022",
    material: "Suede & Mesh",
    releaseDate: "2022-04-01",
    rating: 4.7,
    sold: "80k",
    reviews: 3500,
    likes: 3900,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "6",
    name: "Puma RS-X",
    price: "$110.00",
    brand: "Puma",
    year: "2023",
    material: "Textile & Leather",
    releaseDate: "2023-03-25",
    rating: 4.5,
    sold: "95k",
    reviews: 4100,
    likes: 4300,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "7",
    name: "Reebok Classic Leather",
    price: "$75.00",
    brand: "Reebok",
    year: "2021",
    material: "Leather",
    releaseDate: "2021-09-10",
    rating: 4.1,
    sold: "60k",
    reviews: 2900,
    likes: 2700,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "8",
    name: "Nike Dunk Low",
    price: "$110.00",
    brand: "Nike",
    year: "2023",
    material: "Leather",
    releaseDate: "2023-02-10",
    rating: 4.9,
    sold: "210k",
    reviews: 8400,
    likes: 10000,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "9",
    name: "Yeezy Boost 350 V2",
    price: "$220.00",
    brand: "Adidas",
    year: "2022",
    material: "Primeknit",
    releaseDate: "2022-08-15",
    rating: 4.7,
    sold: "180k",
    reviews: 7600,
    likes: 9400,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "10",
    name: "Fila Disruptor II",
    price: "$65.00",
    brand: "Fila",
    year: "2020",
    material: "Synthetic",
    releaseDate: "2020-11-30",
    rating: 4.0,
    sold: "50k",
    reviews: 1800,
    likes: 2000,
    liked: false,
   image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "11",
    name: "Asics Gel-Kayano 28",
    price: "$160.00",
    brand: "Asics",
    year: "2022",
    material: "Mesh & Foam",
    releaseDate: "2022-06-20",
    rating: 4.6,
    sold: "100k",
    reviews: 4100,
    likes: 4500,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "12",
    name: "Under Armour HOVR Phantom",
    price: "$140.00",
    brand: "Under Armour",
    year: "2021",
    material: "Knit & Rubber",
    releaseDate: "2021-04-05",
    rating: 4.4,
    sold: "70k",
    reviews: 3200,
    likes: 3100,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "13",
    name: "Nike Air Force 1 '07",
    price: "$90.00",
    brand: "Nike",
    year: "2023",
    material: "Leather",
    releaseDate: "2023-01-01",
    rating: 4.9,
    sold: "500k",
    reviews: 9000,
    likes: 15000,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "14",
    name: "Adidas Forum Low",
    price: "$100.00",
    brand: "Adidas",
    year: "2022",
    material: "Leather & Suede",
    releaseDate: "2022-09-10",
    rating: 4.3,
    sold: "110k",
    reviews: 3900,
    likes: 4200,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "15",
    name: "Saucony Shadow 5000",
    price: "$120.00",
    brand: "Saucony",
    year: "2021",
    material: "Suede & Mesh",
    releaseDate: "2021-08-22",
    rating: 4.2,
    sold: "30k",
    reviews: 1600,
    likes: 1700,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "16",
    name: "Balenciaga Triple S",
    price: "$950.00",
    brand: "Balenciaga",
    year: "2023",
    material: "Leather, Mesh, Rubber",
    releaseDate: "2023-05-05",
    rating: 4.5,
    sold: "15k",
    reviews: 1200,
    likes: 5000,
    liked: false,
 image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "17",
    name: "Jordan 1 Retro High OG",
    price: "$170.00",
    brand: "Jordan",
    year: "2022",
    material: "Leather",
    releaseDate: "2022-03-10",
    rating: 4.8,
    sold: "300k",
    reviews: 9500,
    likes: 12000,
    liked: false,
   image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "18",
    name: "Nike Blazer Mid '77",
    price: "$100.00",
    brand: "Nike",
    year: "2023",
    material: "Leather & Suede",
    releaseDate: "2023-04-10",
    rating: 4.4,
    sold: "130k",
    reviews: 4700,
    likes: 5300,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "19",
    name: "Hoka One One Clifton 9",
    price: "$145.00",
    brand: "Hoka",
    year: "2023",
    material: "Mesh & EVA",
    releaseDate: "2023-03-01",
    rating: 4.6,
    sold: "85k",
    reviews: 3100,
    likes: 3600,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
  },
  {
    id: "20",
    name: "Crocs Classic Clog",
    price: "$50.00",
    brand: "Crocs",
    year: "2022",
    material: "Croslite Foam",
    releaseDate: "2022-07-07",
    rating: 4.0,
    sold: "220k",
    reviews: 5600,
    likes: 6400,
    liked: false,
    image: require("@/assets/images/v1.1.png"),
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
    marginTop: 30,
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
    borderRadius: 12,
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
