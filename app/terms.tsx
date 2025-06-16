import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function TermsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>SoleCraft</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Terms & Conditions</Text>

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.paragraph}>
          By using SoleCraft, you agree to comply with and be bound by the following terms and conditions.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of the App</Text>
        <Text style={styles.paragraph}>
          You agree not to misuse the platform, attempt unauthorized access, or interfere with its operations.
        </Text>

        <Text style={styles.sectionTitle}>3. User Accounts</Text>
        <Text style={styles.paragraph}>
          You are responsible for maintaining the confidentiality of your login credentials and any activities under your account.
        </Text>

        <Text style={styles.sectionTitle}>4. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          All content, trademarks, and data on this app are the property of SoleCraft and may not be used without permission.
        </Text>

        <Text style={styles.sectionTitle}>5. Termination</Text>
        <Text style={styles.paragraph}>
          We reserve the right to suspend or terminate accounts for any violation of these terms.
        </Text>

        <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          SoleCraft may update these terms at any time. Continued use implies agreement to the new terms.
        </Text>

        <Text style={styles.paragraph}>
          Last updated: June 13, 2025
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backText: {
    color: "#888",
    fontSize: 16,
  },
  title: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop:30,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 4,
  },
  paragraph: {
    color: "#000",
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 10,
  },
});
