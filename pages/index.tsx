import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero/Hero";
import FeatureList from "@/components/featureList/FeatureList";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureList />
    </>
  );
}
