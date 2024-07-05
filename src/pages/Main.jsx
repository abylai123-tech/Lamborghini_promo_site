import React from 'react'

import { Header } from '../components/Header';
import { Banner } from '../components/MainPage/Banner';
import { Lamborghini } from "../components/MainPage/Lamborghini";
import { Footer } from '../components/Footer';
import Lambo from '../components/MainPage/Lambo'; 

export const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Lambo />
      <Lamborghini />
      <Footer />
    </>
  )
}
