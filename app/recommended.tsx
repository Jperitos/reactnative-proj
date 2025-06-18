import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useRouter } from "expo-router";
import { recommendations } from "@/components/explore/recomendation";
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";
export default function RecommendedListScreen() {
  const router = useRouter();

  const [filteredData, setFilteredData] = useState(recommendations);
  const [sortType, setSortType] = useState<"asc" | "desc" | null>(null);
  const [priceFilter, setPriceFilter] = useState<"all" | "under100" | "above100">("all");

  useEffect(() => {
    let data = [...recommendations];

    if (priceFilter === "under100") {
      data = data.filter((item) => parseFloat(item.price.replace("$", "")) < 100);
    } else if (priceFilter === "above100") {
      data = data.filter((item) => parseFloat(item.price.replace("$", "")) >= 100);
    }

    if (sortType === "asc") {
      data.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    } else if (sortType === "desc") {
      data.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
    }

    setFilteredData(data);
  }, [sortType, priceFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
          <FontAwesome name="chevron-left" size={16} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>All Recommendations</Text>
      </View>

      {/* Dropdown Filters */}
      <View style={styles.dropdownRow}>
        <View style={styles.dropdownWrapper}>
          <Text style={styles.dropdownLabel}>Filter by Price:</Text>
          <RNPickerSelect
            value={priceFilter}
            onValueChange={(value) => setPriceFilter(value)}
            items={[
              { label: "All", value: "all" },
              { label: "Under $100", value: "under100" },
              { label: "$100 & Up", value: "above100" },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>

        <View style={styles.dropdownWrapper}>
          <Text style={styles.dropdownLabel}>Sort by:</Text>
         <RNPickerSelect
  value={sortType}
  onValueChange={(value) => setSortType(value)}
  items={[
    { label: "Price: Low to High", value: "asc" },
    { label: "Price: High to Low", value: "desc" },
  ]}
  style={{
    inputIOS: pickerSelectStyles.inputIOS,
    inputAndroid: pickerSelectStyles.inputAndroid,
    inputWeb: pickerSelectStyles.inputWeb,
  }}
  useNativeAndroidPickerStyle={false}
/>

        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/shoedetail", params: { ...item } })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  backIcon: {
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  dropdownRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: 16,
  },

  dropdownWrapper: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    borderRadius: 14,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  dropdownLabel: {
    fontSize: 13,
    color: "#888",
    marginBottom: 4,
    fontWeight: "500",
  },

  card: {
    width: "48%",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    fontSize: 13,
    color: "gray",
  },
});
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    color: "#333",
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    color: "#333",
    backgroundColor: "#f5f5f5",
    elevation: 2,
  },
  inputWeb: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    color: "#333",
    appearance: "none",
  },
};

