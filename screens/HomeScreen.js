import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Header from "../components/Home/Header"
import Post from "../components/Home/Post"
import Stories from "../components/Home/Stories"
import { POSTS } from "../data/posts"

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </ScrollView>
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
export default HomeScreen
