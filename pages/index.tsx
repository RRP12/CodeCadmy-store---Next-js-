import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"

import React from "react"
import styles from "@/styles/Home.module.css"
import { App } from "../components/app/App"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return <App />
}
Home()
