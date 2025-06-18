import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Import useRouter

const ForgetPass = () => {
  const router = useRouter(); // ✅ Initialize router

  return (
   <View style={styles.container}>
  <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
    <Text style={styles.backText}>SoleCraft</Text>
  </TouchableOpacity>

  <Image
    source={require('../assets/images/logo.png')}
    style={styles.logo}
  />

  <Text style={styles.title}>Forgot Password</Text>
  <Text style={styles.subtitle}>Please enter your email to reset your password</Text>

  <TextInput
    style={styles.input}
    placeholder="Enter your email"
    placeholderTextColor="#888"
    keyboardType="email-address"
    autoCapitalize="none"
  />

  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Send Reset Link</Text>
  </TouchableOpacity>
</View>

  );
};

export default ForgetPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  backText: {
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: "F2F2F2",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '1c1c1c',
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
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: "bold",
  },
  logo: {
  width: 200,
  height: 200,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginBottom: 10,
  marginTop: -100,
},

});
