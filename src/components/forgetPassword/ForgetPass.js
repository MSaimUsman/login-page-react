import React from "react"
import { Routes, Route } from "react-router-dom"

export const ForgetPass = () => {
  return (
    <>
      <Routes>
        <Route path="forget-password" element={<ForgetPass />} />
      </Routes>
    </>
  )
}
