import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
export const recommendations = [
  {
    id: "1",
    name: "Nike Air Max 2023",
    brand: "Nike",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef29a2d9-08f2-45fd-b7c6-8b140c21f260/air-max-90-shoes.png",
    price: "$129.99",
    provider: "Nike",
    year: "2023",
    sold: "90k",
    description: "Latest iteration of the Air Max with improved cushioning and sleek design.",
    category: "Running",
    colorway: "White/Gray",
    material: "Mesh & Synthetic",
    rating: 4.7,
    releaseDate: "2023-04-10",
    totalReviews: 7150,
  },
  {
    id: "2",
    name: "Adidas UltraBoost",
    brand: "Adidas",
    image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/6e1a7eb4173e4d62a3dbac79011f97b2_9366/Ultraboost_22_Shoes_White_GX5462_01_standard.jpg",
    price: "$149.99",
    provider: "Adidas",
    year: "2022",
    sold: "130k",
    description: "High-performance sneaker with responsive Boost cushioning.",
    category: "Running",
    colorway: "White/Core Black",
    material: "Primeknit & Boost",
    rating: 4.8,
    releaseDate: "2022-06-20",
    totalReviews: 9820,
  },
  {
    id: "3",
    name: "Converse Chuck 70",
    brand: "Converse",
    image: "https://www.converse.ph/media/catalog/product/1/6/169013c_std1.jpg",
    price: "$89.99",
    provider: "Converse",
    year: "2021",
    sold: "75k",
    description: "Revamped retro sneaker with premium materials and stitching.",
    category: "Casual",
    colorway: "Egret/Black",
    material: "Canvas & Rubber",
    rating: 4.6,
    releaseDate: "2021-09-12",
    totalReviews: 6100,
  },
  {
    id: "4",
    name: "Puma RS-X",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/388847/01/sv01/fnd/PHL/fmt/png",
    price: "$109.99",
    provider: "Puma",
    year: "2022",
    sold: "60k",
    description: "Chunky silhouette inspired by retro style and updated with comfort tech.",
    category: "Lifestyle",
    colorway: "Multi-color",
    material: "Mesh & Rubber",
    rating: 4.5,
    releaseDate: "2022-05-11",
    totalReviews: 4200,
  },
  {
    id: "5",
    name: "New Balance 550",
    brand: "New Balance",
    image: "https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    price: "$119.99",
    provider: "New Balance",
    year: "2021",
    sold: "50k",
    description: "Classic basketball silhouette revived with vintage flair.",
    category: "Basketball",
    colorway: "White/Red",
    material: "Leather",
    rating: 4.4,
    releaseDate: "2021-08-05",
    totalReviews: 3800,
  },
  {
    id: "6",
    name: "Reebok Club C 85",
    brand: "Reebok",
    image: "https://assets.reebok.com/images/w_600,f_auto,q_auto/5d7b91d3f3994c889c7cac4f0130e75e_9366/Club_C_85_Shoes_White_AR0456_01_standard.jpg",
    price: "$74.99",
    provider: "Reebok",
    year: "2020",
    sold: "65k",
    description: "Clean, minimalist design for everyday casual style.",
    category: "Casual",
    colorway: "Chalk/Green",
    material: "Leather",
    rating: 4.3,
    releaseDate: "2020-02-19",
    totalReviews: 2950,
  },
  {
    id: "7",
    name: "ASICS Gel-Kayano 29",
    brand: "ASICS",
    image: "https://asics.com/media/catalog/product/1/0/1011b440_400_sr_rt_glb.jpg",
    price: "$159.99",
    provider: "ASICS",
    year: "2023",
    sold: "45k",
    description: "Reliable stability and soft cushioning for long-distance running.",
    category: "Running",
    colorway: "Blue/White",
    material: "Mesh & Gel",
    rating: 4.7,
    releaseDate: "2023-03-15",
    totalReviews: 4200,
  },
  {
    id: "8",
    name: "Vans Old Skool",
    brand: "Vans",
    image: "https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$PDP-FULL-IMAGE$",
    price: "$64.99",
    provider: "Vans",
    year: "2019",
    sold: "150k",
    description: "Iconic skate shoe with timeless side stripe design.",
    category: "Skate",
    colorway: "Black/White",
    material: "Canvas & Suede",
    rating: 4.6,
    releaseDate: "2019-09-10",
    totalReviews: 10750,
  },
  {
  id: "9",
  name: "Nike ZoomX Vaporfly Next% 2",
  brand: "Nike",
  image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/857e77c0-dbd1-47fc-a26e-8f96f0b0dbd1/zoomx-vaporfly-next-2-road-racing-shoes.png",
  price: "$249.99",
  provider: "Nike",
  year: "2023",
  sold: "35k",
  description: "Elite racing shoe with ZoomX foam and a carbon fiber plate for speed.",
  category: "Running",
  colorway: "Volt/Black",
  material: "Mesh & Carbon Plate",
  rating: 4.9,
  releaseDate: "2023-02-10",
  totalReviews: 3100,
},
{
  id: "10",
  name: "Adidas Forum Low",
  brand: "Adidas",
  image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ae50e9296ec841bcabf4ad59010ddab8_9366/Forum_Low_Shoes_White_GY4970_01_standard.jpg",
  price: "$99.99",
  provider: "Adidas",
  year: "2021",
  sold: "70k",
  description: "Retro basketball classic with timeless strap design.",
  category: "Basketball",
  colorway: "White/Navy",
  material: "Leather & Rubber",
  rating: 4.4,
  releaseDate: "2021-06-25",
  totalReviews: 5100,
},
{
  id: "11",
  name: "Under Armour Curry Flow 9",
  brand: "Under Armour",
  image: "https://underarmour.scene7.com/is/image/Underarmour/3025565-100_DEFAULT?wid=640&hei=640&fmt=jpg",
  price: "$159.99",
  provider: "Under Armour",
  year: "2022",
  sold: "40k",
  description: "Stephen Curry’s signature shoe with UA Flow cushioning.",
  category: "Basketball",
  colorway: "White/Gold",
  material: "Textile & Rubber",
  rating: 4.5,
  releaseDate: "2022-01-18",
  totalReviews: 3900,
},
{
  id: "12",
  name: "On Cloud X",
  brand: "On",
  image: "https://images.ctfassets.net/9ku1rkfby3y6/6MJ3ZnOdv1Nlx3TD35ZpKn/ea2d6d7fa2f7608cb8ef44f8aaf5e88f/ON_Men_s_Cloud_X_3_AD_White_Black_1.png",
  price: "$139.99",
  provider: "On",
  year: "2023",
  sold: "25k",
  description: "Lightweight training and running shoe with CloudTec cushioning.",
  category: "Training",
  colorway: "White/Black",
  material: "Mesh & EVA",
  rating: 4.6,
  releaseDate: "2023-04-01",
  totalReviews: 2100,
},
{
  id: "13",
  name: "Saucony Jazz Original Vintage",
  brand: "Saucony",
  image: "https://www.saucony.com/on/demandware.static/-/Sites-saucony_us-Library/default/dw7b56e5d6/images/product-images/S70368-2_1.png",
  price: "$84.99",
  provider: "Saucony",
  year: "2020",
  sold: "33k",
  description: "Retro runner with vintage aesthetics and everyday comfort.",
  category: "Casual",
  colorway: "Navy/Silver",
  material: "Nylon & Suede",
  rating: 4.3,
  releaseDate: "2020-03-22",
  totalReviews: 1900,
},
{
  id: "14",
  name: "Fila Disruptor II",
  brand: "Fila",
  image: "https://fila.com.ph/cdn/shop/files/disruptoriiwhite1.png?v=1684305306",
  price: "$69.99",
  provider: "Fila",
  year: "2019",
  sold: "80k",
  description: "Chunky, retro-style sneaker that made a bold comeback.",
  category: "Lifestyle",
  colorway: "Triple White",
  material: "Synthetic Leather",
  rating: 4.2,
  releaseDate: "2019-08-01",
  totalReviews: 3300,
},
{
  id: "15",
  name: "Jordan 1 Retro High OG",
  brand: "Nike Jordan",
  image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-UNC-To-Chicago-W-Product.png",
  price: "$170.00",
  provider: "Nike",
  year: "2020",
  sold: "95k",
  description: "Iconic silhouette with premium build and historic colorway.",
  category: "Basketball",
  colorway: "UNC/Chicago",
  material: "Leather",
  rating: 4.9,
  releaseDate: "2020-02-14",
  totalReviews: 11200,
}

];



export default function RecommendationSection() {
   const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Recommended for You</Text>
     <TouchableOpacity onPress={() => router.push("/recommended")}>
  <Text style={styles.seeAll}>See All</Text>
</TouchableOpacity>
      </View>
        <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "/shoedetail", params: { ...item } })}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 0,
      padding:10,
      marginRight: -30,
      marginLeft: -25,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
     fontSize: 15,
    fontWeight: "bold",
    color: "#555",
  },
  seeAll: {
    fontSize: 13,
    color: "gray",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 15,
    marginRight: 14,
    width: 200,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textWrapper: {
    marginTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },
});