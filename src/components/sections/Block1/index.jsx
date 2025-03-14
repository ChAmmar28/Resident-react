import React from "react";
import Card from "../../elements/Card";
import styles from "./style.module.css";

const Block1 = () => {
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
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Популярные</h2>
          <a href="#" className={styles.sectionLink}>
            <img src="icons/goToArrowIcon.svg" alt="" />
          </a>
        </header>
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
