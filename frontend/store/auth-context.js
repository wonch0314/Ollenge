import React, { useEffect } from "react"

import { createContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  isSigned: false,
  authenticate: (token) => {},
  signed: (flag) => {},
  logout: () => {},
})

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState()
  const [userFalg, setUserFlag] = useState()

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token")
      if (storedToken) {
        setAuthToken(storedToken)
      }
    }
  }, [])

  function authenticate(token) {
    setAuthToken(token)
    AsyncStorage.setItem("token", token)
  }

  function signed(flag) {
    setUserFlag(flag)
  }

  function logout() {
    setAuthToken(null)
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    isSigned: userFalg,
    authenticate: authenticate,
    signed: signed,
    logout: logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
