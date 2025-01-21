import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';

const LoginPage = () => {
  const [isRememberMeEnabled, setRememberMeEnabled] = useState(false);

  const toggleSwitch = () => setRememberMeEnabled(!isRememberMeEnabled);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.row}>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#767577', true: 'blue' }}
            thumbColor={isRememberMeEnabled ? 'white' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isRememberMeEnabled}
          />
          <Text style={styles.switchText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Text */}
      <Text style={styles.signupText}>
        Don’t have an account?{' '}
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </Text>

      {/* Terms and Conditions */}
      <Text style={styles.terms}>
        By creating or logging into an account, you are agreeing with our{' '}
        <TouchableOpacity>
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>{' '}
        and{' '}
        <TouchableOpacity>
          <Text style={styles.link}>Privacy Statement</Text>
        </TouchableOpacity>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 50,
  },
  label: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    color:'black',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  terms: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default LoginPage;
