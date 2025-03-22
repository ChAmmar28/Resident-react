import React from "react";
import SectionsHeader from "../../elements/SectionsHeader";
import Card from "../../elements/Card";
import styles from "./style.module.css";

const Block2 = ({ title }) => {
  const popularPosts = [
    {
      image: "/imges/1.png",

      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
      category: "Недвижимость",
      title: "Москва - жилой дом премиум-класса",
      date: "1 февраля 2024",
      readingTime: "3 мин",
    },
    {
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
        <SectionsHeader headline={title} />
        <div className={styles.gridСontainer}>
          <div
            className={styles.div1}
            style={{
              background: `url(${popularPosts[0].image}) no-repeat center/cover`,
            }}
          >
            <div className={styles.specialCard}>
              <p className={styles.specialCategoryName}>
                {popularPosts[0].category}
              </p>
              <h3>{popularPosts[0].title}</h3>
              <div className={styles.specialCardDate}>
                <p>{popularPosts[0].date}</p>
                <p>●</p>
                <p>{popularPosts[0].readingTime}</p>
              </div>
            </div>
          </div>

          {popularPosts.slice(1, 9).map((post, i) => (
            <Card
              key={i}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              readingTime={post.readingTime}
              classes={`.gridCard .div${i + 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
