import React from "react";
import Block1 from "../Block1";
import Block2 from "../Block2";
import Carousel from "../../elements/Carousel";
import Ad from "../../elements/Ad";
import styles from "./style.module.css";

const Main = () => {
  return (
    <main className={styles.mainContent}>
      <Block1 title="ПОПУЛЯРНЫЕ" herf={"/"}></Block1>
      <Ad></Ad>
      <Block1 title="НЕДВИЖИМОСТЬ" herf={"/RealEstatePage"}></Block1>
      <Ad></Ad>
      <Block2 title="РОСКОШНЫЙ ОТДЫХ" herf={"/LuxuryVacationPage"}></Block2>
      <Ad></Ad>
      <Block1 title="ИНТЕРВЬЮ" herf={"/InterviewPage"}></Block1>
      <Ad></Ad>
      <Block2 title="ПРОДУКТЫ" herf={"/ProductsPage"}></Block2>
      <Ad></Ad>
      <Carousel></Carousel>
    </main>
  );
};

export default Main;
