// src/components/MainContent.js
import React from "react";
import styles from "./style.module.css";
import Block1 from "../Block1";
import Block2 from "../Block2";
import Ad from "../../elements/Ad";
import Slider from "../Slider";

const Main = () => {
  return (
    <main className={styles.mainContent}>
      <Block1></Block1>
      <Ad></Ad>
      <Block1></Block1>
      <Ad></Ad>
      <Block2></Block2>
      <Ad></Ad>
      <Block1></Block1>
      <Ad></Ad>
      <Block2></Block2>
      <Ad></Ad>
      <Slider></Slider>
    </main>
  );
};

export default Main;
