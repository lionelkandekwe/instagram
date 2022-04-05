import React from "react"
import { StyleSheet } from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import { SafeAreaProvider } from "react-native-safe-area-context"
import AddNewPost from "../components/newPost/AddNewPost"

const NewPostScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AddNewPost />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
})
export default NewPostScreen
