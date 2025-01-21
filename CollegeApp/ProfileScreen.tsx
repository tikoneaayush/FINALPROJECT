import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>PROFILE</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✎</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/472cecd2bfaeb252e0b35b7b82771090-1668370980/8C206951-7970-4018-950E-345B59C56280/create-a-custom-bitmoji-account-for-you.png", // Replace with actual profile image URL
          }}
        />
        <Text style={styles.name}>Student</Text>
        <Text style={styles.class}>STD - Diploma 3rd Year</Text>
        <Text style={styles.description}>
          Diploma in Computer Engineering
        </Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>📞 +91 9999900000</Text>
          <Text style={styles.contactText}>✉ co2022.student@gmail.com</Text>
        </View>
        </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Personal Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Friends List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIcon: {
    fontSize: 20,
    color: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  editIcon: {
    fontSize: 20,
    color: "#fff",
  },
  profileCard: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  class: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
  },
  contactInfo: {
    alignItems: "center",
  },
  contactText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#007bff",
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
