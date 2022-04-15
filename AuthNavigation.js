import React, { useState, useEffect } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"
import { SignedInStack, SignedOutStack } from "./navigation"

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => userHandler(user))
  }, [])
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation
