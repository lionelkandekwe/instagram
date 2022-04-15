import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

const Header = ({ navigation }) => {
  const handleSignout = async () => {
    try {
      await signOut(auth).then(() => console.log("signed out"))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../assets/instalogo.jpeg")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBagde}>
            <Text style={styles.unreadBagdeText}>10</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  unreadBagde: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBagdeText: {
    color: "white",
    fontWeight: "600",
  },
})

export default Header
