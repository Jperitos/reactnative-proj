import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
        <Text style={styles.backText}>SoleCraft</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Text style={styles.logo}>Welcome Back</Text>
      <Text style={styles.header}>Login to your Account</Text>

      {/* Inputs */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" />

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={16} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/forgetpass")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAcceptedTerms(!acceptedTerms)}>
            {acceptedTerms && <Text style={styles.checkMark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I accept the{" "}
            <Text style={styles.link} onPress={() => router.push("/terms")}>
              Terms & Conditions
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/navbar/homepage")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
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
          <FontAwesome name="linkedin" size={24} color="#0e76a8" />
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
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
  },
  backText: {
    color: "#888",
    fontSize: 16,
  },
  logo: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  header: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    gap: 14,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  inputWrapper: {
    position: "relative",
  },
  inputWithIcon: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 16,
    paddingRight: 45,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  icon: {
    position: "absolute",
    right: 16,
    top: 18,
  },
  forgotPassword: {
    color: "#578FCA",
    textAlign: "right",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -30,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  termsText: {
    color: "#222831",
    fontSize: 13,
    flexShrink: 1,
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
    elevation: 3,
  },
  switchText: {
    color: "#222831",
    textAlign: "center",
  },
  link: {
    color: "#000",
    fontWeight: "bold",
  },
});
