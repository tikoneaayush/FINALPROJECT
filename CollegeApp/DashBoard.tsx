import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

interface Teacher {
  id: string;
  uri: string;
}

const DashboardScreen = () => {
  const teachers: Teacher[] = [
    { id: "1", uri: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/472cecd2bfaeb252e0b35b7b82771090-1668370980/8C206951-7970-4018-950E-345B59C56280/create-a-custom-bitmoji-account-for-you.png" },
    { id: "2", uri: "https://via.placeholder.com/50" },
    { id: "3", uri: "https://via.placeholder.com/50" },
    { id: "4", uri: "https://via.placeholder.com/50" },
    { id: "5", uri: "https://via.placeholder.com/50" },
  ];

  const renderTeacher = ({ item }: { item: Teacher }) => (
    <View style={styles.teacherContainer}>
      <Image style={styles.teacherImage} source={{ uri: item.uri }} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.menuIcon}>☰</Text>
        <Text style={styles.headerText}>DASHBOARD</Text>
        <Text style={styles.notificationIcon}>🔔</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/472cecd2bfaeb252e0b35b7b82771090-1668370980/8C206951-7970-4018-950E-345B59C56280/create-a-custom-bitmoji-account-for-you.png", // Replace with the actual profile image URL
          }}
        />
        <Text style={styles.name}>Student</Text>
        <Text style={styles.class}>STD -Diploma 3rd Year</Text>
      </View>

      {/* Options Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>📖</Text>
          <Text style={styles.gridText}>Syllabus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>⏱</Text>
          <Text style={styles.gridText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>✏</Text>
          <Text style={styles.gridText}>Homework</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>📋</Text>
          <Text style={styles.gridText}>Result</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>✏</Text>
          <Text style={styles.gridText}>ChatBot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.gridIcon}>📋</Text>
          <Text style={styles.gridText}>Progress</Text>
        </TouchableOpacity>
      </View>

      {/* Teachers Section */}
      <Text style={styles.teachersHeading}>Teachers</Text>
      <FlatList
        horizontal
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={renderTeacher}
        contentContainerStyle={styles.teacherList}
      />
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
  menuIcon: {
    fontSize: 20,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationIcon: {
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
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  gridItem: {
    backgroundColor: "#fff",
    width: "40%",
    margin: 10,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  gridIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  teachersHeading: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  teacherList: {
    paddingHorizontal: 20,
  },
  teacherImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  teacherContainer: {
    marginHorizontal: 5,
  },
});

export default DashboardScreen;
