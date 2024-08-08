import React, { useState } from 'react';
import '../Css/Home.css';
import Navbar from '../Components/Navbar';
import TypingEffect from '../Components/TypingEffect';
import { useEffect } from 'react';
import BookScroll from '../Components/BookScroll'
import bg from '../Images/Background/bg3.jpg'
const Home = ({text}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);


  const episodes = [
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 1', description: 'Description of Episode 1' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 2', description: 'Description of Episode 2' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 3', description: 'Description of Episode 3' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 4', description: 'Description of Episode 4' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 1', description: 'Description of Episode 1' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 2', description: 'Description of Episode 2' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 3', description: 'Description of Episode 3' },
    { thumbnail: 'https://via.placeholder.com/200x120', title: 'Episode 4', description: 'Description of Episode 4' },
    // Add more episodes as needed
  ];

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);
  /*useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);*/

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const images = [
    { src: 'https://via.placeholder.com/800x400', caption: 'First slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
    { src: 'https://via.placeholder.com/800x400', caption: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { src: 'https://via.placeholder.com/800x400', caption: 'Third slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' }
  ];


  return (
    <div>
    <div className="background">
          <img src={bg} alt="Background Image" />
        </div>
          <Navbar/>
    <div style={{display:"flex"}}>
    <div>
           
          <br></br><br></br><br></br><br></br><br></br>
          <TypingEffect text="Bookfanatic..." className="line1" /><br></br>
      <TypingEffect text="Unlock a Treasure Trove of" className="line2" /><br></br>
      <TypingEffect text="Must-Reads with Us !!!" className="line3" />
         </div>
    {/*<div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={image.caption} className="carousel-img" />
            <div className="carousel-caption">
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>*/}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>



    {/*<BookScroll episodes={episodes} />
    <BookScroll episodes={episodes} />*/}
    <footer className="footer">
        <p>&copy; 2024 BookFanatic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
