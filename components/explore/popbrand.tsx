import React from "react";
import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PopularBrandSection() {
  const brands = [
    {
      name: "Jordan",
      image: {
        uri: "https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png",
      },
    },
    {
      name: "Addidas",
      image: {
        uri: "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
      },
    },
    {
      name: "Nike",
      image: {
        uri: "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png",
      },
    },
    {
      name: "Converse",
      image: {
        uri: "https://anthembranding.com/imager/media/Case-Studies/Bushmills-Irish-Whiskey/60524/Converse-Logo-2003-Update_50fddbcdf1bc5728890207d304f83f3a.webp",
      },
    },
    {
      name: "Puma",
      image: {
        uri: "https://1000logos.net/wp-content/uploads/2017/05/Puma-Logo-tumb.png",
      },
    },
    {
      name: "Vans",
      image: {
        uri: "https://logos-world.net/wp-content/uploads/2020/04/Vans-Emblem.png",
      },
    },
    {
      name: "UnderArmor",
      image: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/1280px-Under_armour_logo.svg.png",
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.popularBrandTitle}>POP BRAND</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {brands.slice(0, 4).map((brand) => (
          <View key={brand.name} style={styles.brandCard}>
            <Image source={brand.image} style={styles.brandImage} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingTop:10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  popularBrandTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  seeAll: {
    fontSize: 12,
    color: "gray",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  brandCard: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    width: '48%',
    height: 100,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  brandImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});