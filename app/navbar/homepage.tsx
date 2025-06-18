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
    id: "6",
    name: "Vans Old Skool",
    price: "$70.00",
    brand: "Vans",
    rating: 4.3,
    sold: "110k",
    reviews: 4200,
    likes: 5000,
    liked: false,
    image: require('../../assets/images/v1.1.png'),
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
