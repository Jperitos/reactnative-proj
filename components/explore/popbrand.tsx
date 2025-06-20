import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function PopularBrandSection() {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const brands = [
    {
      image: {
        uri: "https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png",
      },
    },
    {
      image: {
        uri: "https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg",
      },
    },
    {
      image: {
        uri: "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png",
      },
    },
    {
      image: {
        uri: "https://anthembranding.com/imager/media/Case-Studies/Bushmills-Irish-Whiskey/60524/Converse-Logo-2003-Update_50fddbcdf1bc5728890207d304f83f3a.webp",
      },
    },
    {
      image: {
        uri: "https://1000logos.net/wp-content/uploads/2017/05/Puma-Logo-tumb.png",
      },
    },
    {
      image: {
        uri: "https://logos-world.net/wp-content/uploads/2020/04/Vans-Emblem.png",
      },
    },
    {
      image: {
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Under_armour_logo.svg/1280px-Under_armour_logo.svg.png",
      },
    },
     {
      image: {
        uri: "https://elephantsperch.com/wp-content/uploads/2024/10/HOKA-logo.png",
      },
    },
    {
      image: {
        uri: "https://images.seeklogo.com/logo-png/49/2/asics-logo-png_seeklogo-499804.png",
      },
    },
    {
      image: {
        uri: "https://images.seeklogo.com/logo-png/36/1/balenciaga-logo-png_seeklogo-365962.png",
      },
    },
     {
      image: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbP30ygfAcTOpeUmbOFnrGLloe34-8_0xq6w&s",
      },
    },
     {
      image: {
        uri: "https://static.vecteezy.com/system/resources/previews/023/870/519/non_2x/fila-brand-logo-symbol-black-design-clothes-fashion-illustration-free-vector.jpg",
      },
    },
    {
      image: {
        uri: "https://static.vecteezy.com/system/resources/previews/021/963/705/non_2x/reebok-logo-illustration-free-vector.jpg",
      },
    },
  ];

  const displayedBrands = showAll ? brands : brands.slice(0, 4);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  const handleBrandPress = (index: number) => {
    router.push({
      pathname: "/shoesbrand",
      params: { brandIndex: index.toString() },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.popularBrandTitle}>POP BRAND</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={styles.seeAll}>{showAll ? "Show Less" : "See All"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        {displayedBrands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBrandPress(index)}
            style={styles.brandCard}
          >
            <Image source={brand.image} style={styles.brandImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingTop: 10,
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
    fontSize: 10,
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
    width: "48%",
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
