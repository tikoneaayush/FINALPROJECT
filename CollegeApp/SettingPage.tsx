import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';

const SettingPage = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleSwitch = () => setNotificationsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Notifications</Text>
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#007bff' }}
            thumbColor={isNotificationsEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#E0E0E0"
            onValueChange={toggleSwitch}
            value={isNotificationsEnabled}
          />
        </View>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Terms and Condition</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Share with your Friends</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>About us</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Help</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Rate the app</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    paddingVertical: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
  },
  arrow: {
    fontSize: 18,
    color: '#007bff',
  },
  logoutButton: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default SettingPage;
