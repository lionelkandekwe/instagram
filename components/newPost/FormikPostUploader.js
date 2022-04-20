import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native"
import React, { useState, useEffect } from "react"
import * as Yup from "yup"
import { Formik } from "formik"
import { Divider } from "react-native-elements"
import validUrl from "valid-url"
import { auth, db } from "../../firebase"
import { onAuthStateChanged } from "firebase/auth"
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"
import { async } from "@firebase/util"

const PLACEHOLDER_IMAGE =
  "https://image.shutterstock.com/image-vector/vector-graphic-no-thumbnail-symbol-260nw-1391095985.jpg"

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().required("Image URL is required"),
  caption: Yup.string().max(2200, "Caption is too long"),
})

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE)
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

  const getUsername = () => {
    const user = auth.currentUser

    const q = query(
      collection(db, "users"),
      where("owner_uid", "==", `${user.uid}`)
    )

    const unsubsribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture: doc.data().profile_picture,
        })
      })
    })

    return unsubsribe
  }

  useEffect(() => {
    getUsername()
  }, [])

  // https://randomuser.me/api/portraits/women/17.jpg
  const uploadPostToFirebase = async (imageUrl, caption) => {
    const unsubsribe = await addDoc(
      collection(db, "users", auth.currentUser.email, "posts"),
      {
        imageUrl: imageUrl,
        username: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: auth.currentUser.uid,
        caption: caption,
        createAt: serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      }
    ).then(() => navigation.goBack())

    return unsubsribe
  }
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        uploadPostToFirebase(values.imageUrl, values.caption)
        console.log("Your post has been uploaded!")
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_IMAGE,
              }}
              style={styles.img}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red", fontSize: 10 }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
})
