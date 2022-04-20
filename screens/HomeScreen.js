import { StyleSheet, ScrollView } from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Header from "../components/Home/Header"
import Post from "../components/Home/Post"
import Stories from "../components/Home/Stories"
import React, { useEffect, useState } from "react"
import BottomTabs from "../components/Home/BottomTabs"
import { POSTS } from "../data/posts"
import { bottomTabIcons } from "../data/bottomTabIcons"
import { db } from "../firebase"
import { onSnapshot, collectionGroup } from "firebase/firestore"

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    onSnapshot(collectionGroup(db, "posts"), (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Stories />
        <ScrollView>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
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
