import React from "react"
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native"

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Phone number, username or email"
          placeholderTextColor="#444"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#444"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#6BB0F5" }}>Forgot password</Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => console.log("YOU CLICKED ME")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 12,
    borderColor: "#FAFAFA",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0096f6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
  signupText: { color: "#6BB0F5" },
})

export default LoginForm
