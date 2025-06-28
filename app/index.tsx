import { useRouter } from "expo-router";
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo + Clickable */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SoleCraft</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Image source={require("../assets/images/logo.png")} style={styles.logoImage} />
          </TouchableOpacity>
        </View>

        {/* Shoe Image */}
        <Image source={require("../assets/images/11.png")} style={styles.shoeImage} resizeMode="contain" />

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Comfort is{"\n"}
            <Text style={styles.bold}>everything</Text>
          </Text>
          <Text style={styles.subtitle}>
            Find the best shoes for comfort in your daily activities.{"\n"}
            Designed for movement, built for style into confidence.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => router.push("/login")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 60 : 80,
    paddingBottom: 30,
    marginTop: -30,
    paddingHorizontal: 24,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "110%",
    paddingHorizontal: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  shoeImage: {
    width: width * 1.2,
    height: height * 0.6,
    transform: [{ rotate: "-30deg" }],
    marginRight: 10,
    marginTop: -100,
  },

  textContainer: {
    alignItems: "center",
    marginTop: -80,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: width * 0.08,
    color: "#000",
    textAlign: "center",
    fontWeight: "500",
  },
  bold: {
    fontWeight: "800",
  },
  subtitle: {
    fontSize: width * 0.035,
    color: "#000f",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginTop: -20,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
