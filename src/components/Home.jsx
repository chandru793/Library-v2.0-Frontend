import React from 'react';
import HCarousel from './HCarousel';

const Home = () => {
  return (
    <div>
      <HCarousel />
      <div className="home-main">
        <div className="home-inner-one">
          <div className="home-text-leftDiv">
            <h1 className="home-text-left">Welcome to the Library</h1>
            <p><br />A digital library, also called an online library, an internet library, a digital repository, or a digital collection is an online database of digital objects that can include text, still images, audio, video, digital documents, or other digital media formats or a library accessible through the internet. <br /><br />Objects can consist of digitized content like print or photographs, as well as originally produced digital content like word processor files or social media posts. In addition to storing content, digital libraries provide means for organizing, searching, and retrieving the content contained in the collection.</p>
          </div>
          <div className="home-img-rightDiv">
            <img src="https://cdn.vectorstock.com/i/preview-1x/81/62/man-taking-books-from-bookcase-in-library-vector-44758162.webp" alt="image" className='home-img-right' />
          </div>
        </div>
        <div className="home-inner-two">
          <div className="home-img2-leftDiv">
            <img src="https://t3.ftcdn.net/jpg/04/67/54/74/240_F_467547411_0wU0h5S0tOYq7QFIrydQHBGPY05niz6R.jpg" alt="img2" className='home-img2-left' />
          </div>
          <div className="home-text2-rightDiv">
            <h1 className="home-text2-right">About Us</h1>
            <p>
              <br />
              We contain a wide range of books, magazines, journals, and other materials. We also provide a wide range of services to our users. We are open 24/7 and you can access our library from anywhere in the world. We are also open to suggestions and feedback from our users.
              <br />
              <br />
              We contain a wide database which is updated regularly. Our database are always up to date and we are always adding new books and other materials to our database. Non interrupt service is also provided to our users.Users are also allowed to download the books and other materials from our database.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home