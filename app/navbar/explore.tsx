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
import BottomNavBar from "@/components/explore/bottomnavbar";
import PopularBrandSection from "@/components/explore/popbrand";
import ExploreProductSection from "@/components/explore/product";
import TopRatedShoesSection from "@/components/explore/toprated";
import RecommendationSection from "@/components/explore/recomendation";
const shoes = [
  { id: "1", name: "Nike Air Force 1", price: "$199.99", brand: "Nike", image: { uri: "https://images.unsplash.com/photo-1606813908511-06b97b0936f1" } },
  { id: "2", name: "NikeCourt Air", price: "$250.00", brand: "Nike", image: { uri: "https://images.unsplash.com/photo-1596464716121-7b7d9c3b153d" } },
  { id: "3", name: "Adidas Air Force", price: "$450.99", brand: "Addidas", image: { uri: "https://images.unsplash.com/photo-1589187155479-1c1c7d1f8b15" } },
  { id: "4", name: "Converse Classic", price: "$330.00", brand: "Converse", image: { uri: "https://images.unsplash.com/photo-1519741491158-0f04b7b93385" } },
  { id: "5", name: "Puma Air Max", price: "$299.99", brand: "Puma", image: { uri: "https://images.unsplash.com/photo-1622470953274-01405ca2c7b7" } },
  { id: "6", name: "Vans Blazer", price: "$189.00", brand: "Vans", image: { uri: "https://images.unsplash.com/photo-1618354691321-7e62df2207c3" } },
];

const categories = ["All", "Nike", "Addidas", "Converse", "Puma", "Vans"];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Explore");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredShoes =
    selectedCategory === "All"
      ? shoes
      : shoes.filter((shoe) => shoe.brand === selectedCategory);

  const searchedShoes = filteredShoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer}  showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Explore</Text>
          <View style={styles.searchSection}>
            <TextInput
              placeholder="Search for shoes"
              style={styles.input}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={14} color="#fff" />
            </TouchableOpacity>
          </View>

          <PopularBrandSection />
          <ExploreProductSection />
          <TopRatedShoesSection />
          <RecommendationSection />
        </View>
      </ScrollView>

      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, marginTop: 30,},
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  searchSection: {
    flexDirection: "row",
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
    color: "#555",
  },
  wrapper: {
  flex: 1,
  backgroundColor: "#fff",
},
scrollContainer: {
  paddingBottom: 80, 
},

  searchButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  categoryBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  categoryText: { fontSize: 14, color: "#333" },
  activeCategory: { backgroundColor: "#000" },
  activeCategoryText: { color: "#fff", fontWeight: "bold" },
  card: {
    width: "48%",
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 12,
    marginTop: 20,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTitle: { fontWeight: "bold", marginBottom: 5 },
  cardPrice: { color: "#333" },
  latest: {
  fontWeight: "bold",
  fontSize: 20,
  },
  popularBrandTitle: {
  fontSize: 12,
  fontWeight: "bold",
  color: "#555",
  marginBottom: 10,
},

brandScroll: {
  marginBottom: 15,
},

brandCard: {
  backgroundColor: "#fff",
  padding: 10,
  borderRadius: 12,
  marginRight: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 3,
  width: 78,
  height: 78,
  justifyContent: "center",
  alignItems: "center",
},

brandImage: {
  width: 40,
  height: 40,
  resizeMode: "contain",
},
});
