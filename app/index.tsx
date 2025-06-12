import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform, ScrollView } from "react-native";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Top Left Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SoleCraft</Text>
        </View>

        {/* Shoe Image */}
        <Image source={require("../assets/images/shoe4.png")} style={styles.shoeImage} resizeMode="contain" />

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Comfort is{"\n"}
            <Text style={styles.bold}>everything</Text>
          </Text>
          <Text style={styles.subtitle}>Find the best shoes for comfort in your daily activities</Text>
        </View>

        {/* Get Started Button */}
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 60 : 80,
    paddingBottom: 30,
    marginTop: -50,
    paddingHorizontal: 24,
  },
  logoContainer: {
    position: "absolute",
    top: Platform.OS === "android" ? 50 : 70,
    left: 24,
    marginTop: 10,
    zIndex: 10,
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  shoeImage: {
    width: width * 1.9,
    height: height * 0.7,
    transform: [{ rotate: "-30deg" }],
    marginRight: 70,
    marginTop: -80,
  },
  textContainer: {
    alignItems: "center",
    marginTop: -80,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: width * 0.08,
    color: "#fff",
    textAlign: "center",
    fontWeight: "300",
  },
  bold: {
    fontWeight: "700",
  },
  subtitle: {
    fontSize: width * 0.035,
    color: "#ccc",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginTop: -20,
    marginBottom: 50,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
