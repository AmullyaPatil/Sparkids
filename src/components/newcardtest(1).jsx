import React, { useRef } from "react";
import "../styles/newcardtest(1).css";
import courseAge from "../Assets/home-img/course-age.png";
import courseLevel from "../Assets/home-img/course-level.png";
import courseTime from "../Assets/home-img/course-time.png";
import courseLearnMore from "../Assets/home-img/course-learnmore.png";
import vedicMathsImage from "../Assets/home-img/courseimg2.png";
import handwritingImage from "../Assets/home-img/courseimg4.png";
import rubiksCubeImage from "../Assets/home-img/courseimg3.png";
import readingImage from "../Assets/home-img/courseimg5.png";
import abacusImage from "../Assets/home-img/courseimg1.png";

const BoxLayoutCard1 = () => {
  const cardContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = cardContainerRef.current;
    const cardWidth = container.firstElementChild.offsetWidth + 45.01;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Updated card data
  const cards = [
    {
      image: abacusImage,
      title: "Abacus",
      rating: "4.9",
      description: "Improve calculation speed and mental math skills",
      age: "4+",
      levels: "8 Levels",
      duration: "12 Months",
    },
    {
      image: vedicMathsImage,
      title: "Vedic Maths",
      rating: "4.9",
      description: "Learn faster and efficient ways of solving complex problems",
      age: "12+",
      levels: "2 Levels",
      duration: "6 Months",
    },
    {
      image: rubiksCubeImage,
      title: "Rubik's Cube",
      rating: "4.9",
      description: "Enhance problem-solving and critical thinking",
      age: "7+",
      levels: "2 Levels",
      duration: "6 Months",
    },
    {
      image: handwritingImage,
      title: "Handwriting",
      rating: "4.9",
      description: "Master beautiful handwriting techniques",
      age: "4+",
      levels: "3 Levels",
      duration: "9 Months",
    },
    {
      image: readingImage,
      title: "Reading",
      rating: "4.9",
      description: "Strengthen language and reading comprehension skills",
      age: "3+",
      levels: "2 Levels",
      duration: "6 Months",
    },
    
  ];

  return (
    <div className="card-wrapper">
      <div className="Card" ref={cardContainerRef}>
        {cards.map((card, index) => (
          <div className="product-box1" key={index}>
            <img src={card.image} alt={card.title} className="product-image" />
            <div className="description-box1">
              <h3>
                {card.title} <span>{card.rating}</span>
              </h3>
              <p>{card.description}</p>
              <div className="course-info">
                <span className="info-item2">
                  <img src={courseAge} alt="Age" className="icon" /> Age {card.age}
                </span>
                <span className="info-item2">
                  <img src={courseLevel} alt="Levels" className="icon" /> {card.levels}
                </span>
                <span className="info-item2">
                  <img src={courseTime} alt="Time" className="icon" /> {card.duration}
                </span>
                <span className="info-item1">
                  <img className="learn-more" src={courseLearnMore} alt="Learn More" />
                  <h2>Learn More</h2>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button className="prev" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <button className="next" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default BoxLayoutCard1;
