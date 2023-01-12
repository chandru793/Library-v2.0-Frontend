import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import '../assets/css/Home.css';
import C1 from '../assets/img/c1.jpg';
import C2 from '../assets/img/c2.jpg';
import C3 from '../assets/img/c3.jpg';

const items = [
  {
    // src:'https://t4.ftcdn.net/jpg/03/32/82/91/240_F_332829173_V4kiRCM2s24t1h5xs2mamqchsQmFLedg.jpg',
    src:C1,
    altText: 'Slide 1',
    key: 1,
  },
  {
    // src: 'https://t4.ftcdn.net/jpg/02/52/76/41/240_F_252764153_iJawRIU9YeMjHNflcOh08e0qIm7gGa2o.jpg',
    src:C2,
    altText: 'Slide 2',
    key: 2,
  },
  {
    // src: 'https://t3.ftcdn.net/jpg/03/15/03/20/240_F_315032003_2AxYIkQ9cGUXVUjYBQ0RLD5mEJedz0Jr.jpg',
    src:C3,
    altText: 'Slide 3',
    key: 3,
  },
];

function HCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="Cimg" />
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default HCarousel;