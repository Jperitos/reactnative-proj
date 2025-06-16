import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function SignupScreen() {
  const router = useRouter();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.backButton}>
        <Text style={styles.backText}>SoleCraft</Text>
      </TouchableOpacity>

      {/* Logo & Header */}
      <Text style={styles.logo}>Welcome Back</Text>
      <Text style={styles.header}>Create your Account</Text>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={16}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesome
              name={showConfirmPassword ? "eye" : "eye-slash"}
              size={16}
              color="#666"
            />
          </TouchableOpacity>
        </View>

      <View style={styles.checkboxContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => setAcceptedTerms(!acceptedTerms)}
      >
        {acceptedTerms && <Text style={styles.checkMark}>✓</Text>}
      </TouchableOpacity>
      <Text style={styles.termsText}>
        I accept the{" "}
        <Text style={styles.link} onPress={() => router.push("/terms")}>
          Terms & Conditions
        </Text>
      </Text>
    </View>


        <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
    <Text style={styles.buttonText}>Sign Up</Text>
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
          <FontAwesome5 name="linkedin" size={24} color="#0e76a8" />
        </TouchableOpacity>
      </View>

      {/* Switch to Login */}
      <Text style={styles.switchText}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => router.push("/login")}>
          Sign in
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
    top: 40,
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
    color: "000",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    gap: 14,
  },
  input: {
    backgroundColor: "1c1c1c",
    color: "#000",
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
  inputWrapper: {
    position: "relative",
  },
  inputWithIcon: {
    backgroundColor: "F2F2F2",
    color: "#000",
    padding: 16,
    paddingRight: 45,
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
  icon: {
    position: "absolute",
    right: 16,
    top: 18,
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
    marginTop: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
  color: "black",
  fontSize: 15,
  fontWeight: "bold",
},

  termsText: {
    color: "222831",
    fontSize: 13,
    flexShrink: 1,
    marginTop: 40,
  },
  button: {
    backgroundColor: "#000",
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
    color: "#fff",
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
    color: "222831",
    textAlign: "center",
  },
  link: {
    color: "#000",
    fontWeight: "bold",
  },
});
