import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png",
        }}
        style={styles.img}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 23,
  },
  img: {
    height: 30,
    width: 30,
  },
})
export default AddNewPost
