import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
export const recommendations = [
  {
    id: "1",
    name: "Nike Air Max 2023",
    brand: "Nike",
    image: "https://parkaccess.com.ph/cdn/shop/files/AURORA_DV6840-005_PHSLH001-2000.png?v=1718878055",
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
    image: "https://livelifeegy.com/wp-content/uploads/2024/06/adidas-ultraboost-2088318_nobg.png",
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
    image: "https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dw6d7d3c22/images/a_107/162050C_A_107X1.jpg?sw=964",
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
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390025/01/sv01/fnd/PHL/fmt/png/RS-X-3D-Sneakers",
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
    image: "https://cdn.shopify.com/s/files/1/2358/2817/products/NewBalance550TripleWhite.png?v=1676973461",
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
    image: "https://reebok.ph/cdn/shop/files/100074160_2.jpg?v=1710223245&width=470",
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
    image: "https://images.prodirectsport.com/ProductImages/Main/262247_Main_Thumb_1125254.jpg",
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
    image: "https://www.coutie.com/cdn/shop/files/vans-old-skool-old-c-logo-5-custom-01_d7ef6731-5cb7-4dcb-8847-bca0a3d15d5c.jpg?v=1731594725&width=1740",
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
  image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3b3181ae-4363-4e7b-ad0b-028b7732a22c/ZOOMX+VAPORFLY+NEXT%25+2+NBY.png",
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
  image: "https://static.ftshp.digital/img/p/1/0/7/5/2/5/8/1075258-full_product.jpg",
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
  image: "https://i1.t4s.cz//products/3025684-406/under-armour-curry-9-465868-3025684-406-960.webp",
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
  image: "https://images.ctfassets.net/hnk2vsx53n6l/5GoigHhlJLfFQQwDsS557d/01f14c5e10beef144418ae7d5f8d1aba/e19702c1bd15700a222e25f95d69669868ddd763.png?fm=webp",
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
  image: "https://cdn.etrias.nl/media/cache/product_thumb_md/s/7/s70368-2031-no-bg.png",
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
  image: "https://akn-ss.a-cdn.akinoncloud.com/products/2021/05/31/303430/6f94191c-df5b-45f8-bdac-9ae570087d0a_size3840_cropCenter.jpg",
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
  image: "https://i.ebayimg.com/images/g/PuMAAOSw2m1kXmJ7/s-l400.jpg",
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