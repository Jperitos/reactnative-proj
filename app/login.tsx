import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
        <Text style={styles.backText}>SoleCraft</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Text style={styles.logo}>Welcome Back</Text>
      <Text style={styles.header}>Login your Account</Text>

      {/* Inputs */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#888" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.or}>or sign up with</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socials}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="linkedin" size={24} color="#0e76a8" />
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <Text style={styles.switchText}>
        Don&apos;t have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/signup")}>
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backText: {
    color: "#aaa",
    fontSize: 16,
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  header: {
    color: "#bbb",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    gap: 14,
  },
  input: {
    backgroundColor: "#1c1c1c",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  or: {
    color: "#777",
    textAlign: "center",
    marginVertical: 24,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
    marginHorizontal: 8,
  },

  socials: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 32,
  },
  socialButton: {
    padding: 14,
    borderRadius: 20,
    shadowColor: "#0000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  switchText: {
    color: "#aaa",
    textAlign: "center",
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
  },
});
