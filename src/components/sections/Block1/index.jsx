import React from "react";
import SectionsHeader from "../../elements/SectionsHeader";
import Card from "../../elements/Card";
import styles from "./style.module.css";

const Block1 = ({ title, herf }) => {
  const popularPosts = [
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      image: "/imges/1.png",
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <SectionsHeader headline={title} herf={herf} />
        <div className={styles.cards}>
          {popularPosts.slice(0, 4).map((post, i) => (
            <Card
              key={i}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              readingTime={post.readingTime}
              classes={["card"]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block1;
