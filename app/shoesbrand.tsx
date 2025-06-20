import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function ShoesBrand() {
  const { brandIndex } = useLocalSearchParams();
  const index = Number(brandIndex);
  const router = useRouter();

  const brandNames = [
    "Jordan", "Adidas", "Nike", "Converse","Puma" , "Vans", "Under Armour", "Hoka", "Asics","Balenciaga", "Saucony","Fila","Reebok",
  ];

 const sampleShoes = [
  // Adidas
  {
    id: "ad1",
    name: "Adidas Ultraboost",
    brand: "Adidas",
    image: "https://thumbs.dreamstime.com/b/adidas-ultraboost-white-sneaker-vienna-austria-august-background-147521469.jpg",
    price: "$180.00",
    rating: 4.2,
  },
  {
    id: "ad2",
    name: "Adidas NMD_R1",
    brand: "Adidas",
    image: "https://i.ebayimg.com/images/g/froAAOSwvbRkS42U/s-l1200.jpg",
    rating: 4.3,
  },
  {
    id: "ad3",
    name: "Adidas Forum Low",
    brand: "Adidas",
    image: "https://minio.yalispor.com.tr/yalispor/images/adidas-forum-low-cl-kadin-spor-ayakkabi-beyaz-1.jpg",
    price: "$100.00",
    rating: 4.1,
  },
  {
    id: "ad4",
    name: "Adidas Superstar",
    brand: "Adidas",
    image: "https://bluetilesc.com/cdn/shop/products/adidassuperstaradvflatwhitecoreblackflatwhite.jpg?v=1643920127",
    price: "$95.00",
    rating: 4.5,
  },
  {
    id: "ad5",
    name: "Adidas Yeezy Boost 350",
    brand: "Adidas",
    image: "https://mysportsshoe.com/wp-content/uploads/2019/09/152975_01-250x250.jpg",
    price: "$220.00",
    rating: 4.8,
  },
  {
    id: "ad6",
    name: "Adidas Gazelle",
    brand: "Adidas",
    image: "https://hypedfam.com/cdn/shop/files/adidas-gazelle-core-black-cloud-white-gold4.webp?v=1712103161",
    price: "$80.00",
    rating: 4.0,
  },

  // Nike
  {
    id: "nk1",
    name: "Nike Air Max",
    brand: "Nike",
    image: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/91425231-f563-454b-0cd5-44a321aa2900/product",
    price: "$150.00",
    rating: 4.3,
  },
  {
    id: "nk2",
    name: "Nike Air Force 1",
    brand: "Nike",
    image: "https://thn.pe/cdn/shop/files/FV5948-104_1.jpg?v=1729287182",
    price: "$110.00",
    rating: 4.6,
  },
  {
    id: "nk3",
    name: "Nike React Infinity Run",
    brand: "Nike",
    image: "https://static.nike.com/a/images/t_default/9f0c78f7-f7f0-4778-8ba5-806ccfeac665/W+REACT+INFINITY+RUN+FK+2.png",
    rating: 4.5,
  },
  {
    id: "nk4",
    name: "Nike Blazer Mid '77",
    brand: "Nike",
    image: "https://www.footlocker.ph/media/catalog/product/0/8/0803-NIKFN693710100W07Y-2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200",
    price: "$100.00",
    rating: 4.4,
  },
  {
    id: "nk5",
    name: "Nike Dunk Low",
    brand: "Nike",
    image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F05%2Fnike-dunk-low-university-red-cu1727-100-official-release-date-info-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    price: "$120.00",
    rating: 4.7,
  },
  {
    id: "nk6",
    name: "Nike ZoomX Vaporfly",
    brand: "Nike",
    image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/3b4dedd5-fa80-4253-8cb1-4041c81e26dd/nike-zoomx-vaporfly-next-4-and-nike-zoomx-streakfly-2-a-look-at-the-innovation-behind-the-brand-s-latest-racing-shoes.jpg",
    price: "$250.00",
    rating: 4.9,
  },

  // Converse
  {
    id: "cv1",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    image: "https://deichmann.scene7.com/asset/deichmann/US_01_431055_01?$rr_main$&defaultImage=default_obs",
    price: "$70.00",
    rating: 4.0,
  },
  {
    id: "cv2",
    name: "Converse Run Star Hike",
    brand: "Converse",
    image: "https://cdn.laredoute.com/products/4/3/c/43ca47b8a8944650dafaf1698d0ff678.jpg",
    price: "$110.00",
    rating: 4.2,
  },
  {
    id: "cv3",
    name: "Converse One Star",
    brand: "Converse",
    image: "https://images.stockx.com/images/Converse-One-Star-Ox-Undefeated-White.png?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1617290232",
    price: "$85.00",
    rating: 4.1,
  },
  {
    id: "cv4",
    name: "Converse Weapon CX",
    brand: "Converse",
    image: "https://i.ebayimg.com/images/g/WOEAAOSwWJFl61eI/s-l400.jpg",
    price: "$120.00",
    rating: 4.3,
  },
  {
    id: "cv5",
    name: "Converse Chuck 70",
    brand: "Converse",
    image: "https://i.ebayimg.com/00/s/MTM3OVgxNjAw/z/sp4AAOSwIXtjKc9w/$_57.JPG?set_id=8800005007",
    price: "$90.00",
    rating: 4.4,
  },
  {
    id: "cv6",
    name: "Converse Pro Leather",
    brand: "Converse",
    image: "https://images.stockx.com/images/Converse-Pro-Leather-Hi-White-Coast-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1738193358",
    price: "$95.00",
    rating: 4.2,
  },

  // Puma
  {
    id: "pm1",
    name: "Puma RS-X",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391174/01/sv01/fnd/PNA/fmt/png/PUMA-x-Pokemon-RS-X-Sneakers",
    price: "$120.00",
    rating: 4.1,
  },
  {
    id: "pm2",
    name: "Puma Suede Classic",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/352634/03/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
    price: "$65.00",
    rating: 4.3,
  },
  {
    id: "pm3",
    name: "Puma Future Rider",
    brand: "Puma",
    image: "https://www.standout.co.uk/images/product/52143a.jpg",
    price: "$80.00",
    rating: 4.2,
  },
  {
    id: "pm4",
    name: "Puma Clyde",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374539/01/sv01/fnd/PNA/fmt/png/PUMA-Clyde-Men's-Sneakers",
    price: "$85.00",
    rating: 4.0,
  },
  {
    id: "pm5",
    name: "Puma Cell Alien",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/372434/01/sv01/fnd/PNA/fmt/png/CELL-Alien-NYC-Sneakers",
    price: "$100.00",
    rating: 4.4,
  },
  {
    id: "pm6",
    name: "Puma Mirage Sport",
    brand: "Puma",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/382044/03/sv01/fnd/PNA/fmt/png/Mirage-Sport-Tech-Men's-Sneakers",
    price: "$110.00",
    rating: 4.1,
  },

  // Vans
  {
    id: "vn1",
    name: "Vans Old Skool",
    brand: "Vans",
    image: "https://www.contrabanda.bg/files/images/products/KL_1598861195.jpg",
    price: "$65.00",
    rating: 4.0,
  },
  {
    id: "vn2",
    name: "Vans Sk8-Hi",
    brand: "Vans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcACU1QK41_UrHVdV52-0XqeneapRQJPprbA&s",
    price: "$70.00",
    rating: 4.2,
  },
  {
    id: "vn3",
    name: "Vans Authentic",
    brand: "Vans",
    image: "https://i.pinimg.com/736x/a4/20/54/a4205481c0228c303bfcd13f99e543af.jpg",
    price: "$50.00",
    rating: 4.1,
  },
  {
    id: "vn4",
    name: "Vans Slip-On",
    brand: "Vans",
    image: "https://greenmachinebmx.com/wp-content/uploads/2019/11/eng_pl_Vans-Classic-Slip-on-VN000EYEBWW1-1048_1-356x356.jpg",
    price: "$55.00",
    rating: 4.0,
  },
  {
    id: "vn5",
    name: "Vans Era",
    brand: "Vans",
    image: "https://www.therail.com.ph/cdn/shop/files/VANSERAMENS-BLACKWHITE.jpg?v=1686273840",
    price: "$60.00",
    rating: 4.1,
  },
  {
    id: "vn6",
    name: "Vans UltraRange",
    brand: "Vans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_w8hX084rWlSKIdoDrMnKt82Uxw4TftEkzQ&s",
    price: "$90.00",
    rating: 4.3,
  },

  // Under Armour
  {
    id: "ua1",
    name: "UA HOVR Phantom",
    brand: "Under Armour",
    image: "https://images.stockx.com/images/Under-Armour-HOVR-Phantom-White-Black.png?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1627414874",
    price: "$140.00",
    rating: 4.2,
  },
  {
    id: "ua2",
    name: "UA Charged Assert 9",
    brand: "Under Armour",
    image: "https://underarmour.scene7.com/is/image/Underarmour/3021952-002_DEFAULT?fmt=jpg&wid=1200&qlt=75",
    price: "$70.00",
    rating: 4.0,
  },
  {
    id: "ua3",
    name: "UA Project Rock 4",
    brand: "Under Armour",
    image: "https://classic.cdn.media.amplience.net/i/hibbett/3290H_1000_main/Under%20Armour%20Project%20Rock%20BSR%204%20%22White/Distant%20Grey/Black%22%20Men's%20Training%20Shoe-1000?$medium$&fmt=webp",
    price: "$150.00",
    rating: 4.5,
  },
  {
    id: "ua4",
    name: "UA Curry 8",
    brand: "Under Armour",
    image: "https://i.ebayimg.com/images/g/xZMAAOSwvBpjT2Lt/s-l1200.jpg",
    price: "$160.00",
    rating: 4.6,
  },
  {
    id: "ua5",
    name: "UA HOVR Sonic 4",
    brand: "Under Armour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldS4cUXYNE9vZBq7YxaA6llOmfyef2Zie7w&s",
    price: "$100.00",
    rating: 4.3,
  },
  {
    id: "ua6",
    name: "UA HOVR Rise 3",
    brand: "Under Armour",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENR9HidXcuaOyNBofeTXV4hPflXalVzhKtg&s",
    price: "$120.00",
    rating: 4.2,
  },
  // hoka
  {
    id: "hk1",
    name: "Hoka Clifton 8",
    brand: "Hoka",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1D_iYA21ddu3WwzqhsnkVELXupD_cZOOp-w&s",
    price: "$140.00",
    rating: 4.6,
  },
  {
    id: "hk2",
    name: "Hoka Bondi 7",
    brand: "Hoka",
    image: "https://dms.deckers.com/hoka/image/upload/t_product-medium/v1733160234/1162012-CYWH_1.png?_s=RAABAB0",
    price: "$160.00",
    rating: 4.7,
  },
  {
    id: "hk3",
    name: "Hoka Arahi 6",
    brand: "Hoka",
    image: "https://dms.deckers.com/hoka/image/upload/t_pdp-slider-large/v1719498502/1147791-AQL_1.png?_s=RAABAB0",
    price: "$140.00",
    rating: 4.5,
  },
  {
    id: "hk4",
    name: "Hoka Mach 5",
    brand: "Hoka",
    image: "https://images.stockx.com/images/Hoka-One-One-Mach-5-White-Blue-Glass-Womens.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1697126043",
    price: "$140.00",
    rating: 4.4,
  },
  {
    id: "hk5",
    name: "Hoka Speedgoat 5",
    brand: "Hoka",
    image: "https://images.stockx.com/images/Hoka-One-One-Speedgoat-5-White-Nimbus-Cloud.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1720719256",
    price: "$155.00",
    rating: 4.8,
  },
  {
    id: "hk6",
    name: "Hoka Gaviota 4",
    brand: "Hoka",
    image: "https://www.runningshoesguru.com/wp-content/uploads/2023/03/38469%20-%20Hoka%20Gaviota%204%20Review%20-%20white%20background_clipped_rev_1.png",
    price: "$170.00",
    rating: 4.6,
  },

  // Asics
  {
    id: "as1",
    name: "Asics Gel-Kayano 28",
    brand: "Asics",
    image: "https://images.asics.com/is/image/asics/1012B047_100_SR_RT_GLB?$sfcc-product$",
    price: "$160.00",
    rating: 4.7,
  },
  {
    id: "as2",
    name: "Asics Gel-Nimbus 25",
    brand: "Asics",
    image: "https://runnerslab.com/wp-content/uploads/2023/03/asics_gel_nimbus_25_hero.jpeg",
    price: "$160.00",
    rating: 4.8,
  },
  {
    id: "as3",
    name: "Asics GT-2000 10",
    brand: "Asics",
    image: "https://images.asics.com/is/image/asics/1011B185_002_SR_RT_GLB-1?$sfcc-product$",
    price: "$140.00",
    rating: 4.5,
  },
  {
    id: "as4",
    name: "Asics Novablast 3",
    brand: "Asics",
    image: "https://images.asics.com/is/image/asics/1012B288_104_SR_RT_GLB?$sfcc-product$",
    price: "$140.00",
    rating: 4.6,
  },
  {
    id: "as5",
    name: "Asics Gel-Cumulus 24",
    brand: "Asics",
    image: "https://images.asics.com/is/image/asics/1012B206_102_SR_RT_GLB?$sfcc-product$",
    price: "$130.00",
    rating: 4.4,
  },
  {
    id: "as6",
    name: "Asics Gel-Quantum 360",
    brand: "Asics",
    image: "https://www.asics.com/nz/en-nz/media/catalog/product/image/12880127de/gel-quantum-360-viii-utility.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=512&width=683&canvas=683:512",
    price: "$150.00",
    rating: 4.3,
  },

  // Jordan (different from "Air Jordan")
  {
    id: "jd1",
    name: "Jordan Jumpman 2021",
    brand: "Jordan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwRjlpAftx0NSoYje6k944q_8l3i-Ij0ueQ&s",
    price: "$120.00",
    rating: 4.4,
  },
  {
    id: "jd2",
    name: "Jordan Zion 2",
    brand: "Jordan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGA7y0vlV80-V62IaLFN7V8iUui9y67WpNxw&s",
    price: "$140.00",
    rating: 4.5,
  },
  {
    id: "jd3",
    name: "Jordan Luka 1",
    brand: "Jordan",
    image: "https://images.stockx.com/images/Air-Jordan-Luka-1-White-Fire-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    price: "$110.00",
    rating: 4.3,
  },
  {
    id: "jd4",
    name: "Jordan Max Aura 4",
    brand: "Jordan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-B0HIviSiOoAAWaVcz04xdRvjNU7kxwyNw&s",
    price: "$125.00",
    rating: 4.4,
  },
  {
    id: "jd5",
    name: "Jordan Why Not Zer0.5",
    brand: "Jordan",
    image: "https://captaincreps.com/wp-content/uploads/2022/02/pixlr-bg-result-2022-02-01T200639.814.png",
    price: "$130.00",
    rating: 4.2,
  },
  {
    id: "jd6",
    name: "Jordan Delta 3",
    brand: "Jordan",
    image: "https://captaincreps.com/wp-content/uploads/2022/07/pixlr-bg-result-49-1.png",
    price: "$150.00",
    rating: 4.5,
  },

  // Balenciaga
  {
    id: "ba1",
    name: "Balenciaga Triple S",
    brand: "Balenciaga",
    image: "https://images.stockx.com/images/Balenciaga-Triple-S-Allover-Logo-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    price: "$995.00",
    rating: 4.6,
  },
  {
    id: "ba2",
    name: "Balenciaga Speed Trainer",
    brand: "Balenciaga",
    image: "https://images.novelship.com/product/balenciaga_speed_trainer_low__silver___women__0_3499.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400",
    price: "$850.00",
    rating: 4.5,
  },
  {
    id: "ba3",
    name: "Balenciaga Track Sneaker",
    brand: "Balenciaga",
    image: "https://images.stockx.com/images/Balenciaga-Track-White-Blue-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    price: "$975.00",
    rating: 4.7,
  },
  {
    id: "ba4",
    name: "Balenciaga X-Pander",
    brand: "Balenciaga",
    image: "https://images.stockx.com/images/Balenciaga-Pander-Silver-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    price: "$1100.00",
    rating: 4.8,
  },
  {
    id: "ba5",
    name: "Balenciaga Defender",
    brand: "Balenciaga",
    image: "https://images.stockx.com/images/Balenciaga-Defender-Black-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    price: "$1050.00",
    rating: 4.6,
  },
  {
    id: "ba6",
    name: "Balenciaga Runner",
    brand: "Balenciaga",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt0FptAKOV7jnyrZhMAsxI03629tU6E2oUA&s",
    price: "$950.00",
    rating: 4.5,
  },

  // Saucony
  {
    id: "sc1",
    name: "Saucony Ride 15",
    brand: "Saucony",
    image: "https://images.novelship.com/product/_women__saucony_ride_15__blue_white__s10729-90_0_48374.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400",
    price: "$140.00",
    rating: 4.6,
  },
  {
    id: "sc2",
    name: "Saucony Endorphin Speed 3",
    brand: "Saucony",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHYqq-7pLo9BqeD4rKbDoF1Aopbud4YMR4w&s",
    price: "$160.00",
    rating: 4.7,
  },
  {
    id: "sc3",
    name: "Saucony Kinvara 13",
    brand: "Saucony",
    image: "https://images.stockx.com/images/Saucony-Kinvara-13-Shamrock-Irish-Cream.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1652290679",
    price: "$120.00",
    rating: 4.5,
  },
  {
    id: "sc4",
    name: "Saucony Triumph 20",
    brand: "Saucony",
    image: "https://keypowersports.sg/cdn/shop/files/Screenshot2024-02-23112911.png?v=1708659030",
    price: "$160.00",
    rating: 4.8,
  },
  {
    id: "sc5",
    name: "Saucony Peregrine 12",
    brand: "Saucony",
    image: "https://runnerslab.com/wp-content/uploads/2022/02/Saucony_Peregrine_12_hero.jpg",
    price: "$130.00",
    rating: 4.6,
  },
  {
    id: "sc6",
    name: "Saucony Guide 15",
    brand: "Saucony",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjC3UM23J4l9VwKxZBD8kXQx7-Cyei7IOWA&s",
    price: "$140.00",
    rating: 4.4,
  },

  // Fila
  {
    id: "fl1",
    name: "Fila Disruptor II",
    brand: "Fila",
    image: "https://images.stockx.com/images/Fila-Disruptor-2-White-Navy-Red-W-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1738193358",
    price: "$65.00",
    rating: 4.2,
  },
  {
    id: "fl2",
    name: "Fila Ray Tracer",
    brand: "Fila",
    image: "https://images.novelship.com/product/fila_ray_tracer__pink_white_green__1rm01153_108_0_75954.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400",
    price: "$75.00",
    rating: 4.3,
  },
  {
    id: "fl3",
    name: "Fila Renno",
    brand: "Fila",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZpCTaHaH9FBBEr0SrVtNoCo4F-DDiv4cnw&s",
    price: "$80.00",
    rating: 4.1,
  },
  {
    id: "fl4",
    name: "Fila Original Fitness",
    brand: "Fila",
    image: "https://images.stockx.com/images/Fila-Original-Fitness-DGK-Off-White.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1626900666",
    price: "$60.00",
    rating: 4.0,
  },
  {
    id: "fl5",
    name: "Fila Mindblower",
    brand: "Fila",
    image: "https://images.stockx.com/images/Fila-Mindblower-Kasina-Back-To-Core.png?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1626900443",
    price: "$85.00",
    rating: 4.2,
  },
  {
    id: "fl6",
    name: "Fila Axilus 2 Energized",
    brand: "Fila",
    image: "https://images.stockx.com/images/Fila-Axilus-2-Energized-White-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1733521818",
    price: "$110.00",
    rating: 4.4,
  },

  // Reebok
  {
    id: "rb1",
    name: "Reebok Classic Leather",
    brand: "Reebok",
    image: "https://images.stockx.com/images/Reebok-Classic-Leather-White-Blue-Slate.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1734381784",
    price: "$75.00",
    rating: 4.3,
  },
  {
    id: "rb2",
    name: "Reebok Nano X2",
    brand: "Reebok",
    image: "https://images.novelship.com/product/reebok_nano_x2__white_black_gum__gz6434_0_66997.png?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=75&h=400",
    price: "$135.00",
    rating: 4.6,
  },
  {
    id: "rb3",
    name: "Reebok Zig Kinetica",
    brand: "Reebok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnpwU9AzMZ5WNPoKHqJ5orSBU13L-BrcBXA&s",
    price: "$120.00",
    rating: 4.4,
  },
  {
    id: "rb4",
    name: "Reebok Floatride Energy 4",
    brand: "Reebok",
    image: "https://shoegeeks.in/shoeimages/008003004.jpg",
    price: "$110.00",
    rating: 4.5,
  },
  {
    id: "rb5",
    name: "Reebok Club C 85",
    brand: "Reebok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS83z02eJENDiVGOKOXyjJgRCTwOPIAoLKA&s",
    price: "$70.00",
    rating: 4.2,
  },
  {
    id: "rb6",
    name: "Reebok DMX Trail Shadow",
    brand: "Reebok",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReIg7rhkuhsXJvUFltDEpiDrQZhLONVnFFw&s",
    price: "$140.00",
    rating: 4.5,
  }
];


  const filteredShoes = sampleShoes.filter((shoe) => shoe.brand === brandNames[index]);
  const [likedShoes, setLikedShoes] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedShoes((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const icon = i <= Math.floor(rating)
        ? "star"
        : i - rating < 1
        ? "star-half-empty"
        : "star-o";
      stars.push(<FontAwesome key={i} name={icon} size={10} color="#f1c40f" style={{ marginRight: 2 }} />);
    }
    return <View style={styles.stars}>{stars}</View>;
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <FontAwesome name="angle-left" size={18} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{brandNames[index]}</Text>

      <FlatList
        data={filteredShoes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/shoedetail",
                params: {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  rating: item.rating?.toString(),
                  image: item.image,
                },
              })
            }
            style={styles.card}
          >
            <BlurView intensity={50} tint="light" style={styles.blur}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              {renderStars(item.rating)}
              <View style={styles.infoRow}>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <FontAwesome
                    name={likedShoes.includes(item.id) ? "heart" : "heart-o"}
                    size={15}
                    color={likedShoes.includes(item.id) ? "red" : "#777"}
                  />
                </TouchableOpacity>
              </View>
            </BlurView>
          </Pressable>
        )}
      />
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    marginTop: 30,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },
  blur: {
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
  },
});
