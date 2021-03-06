import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const FeatureContainer = () => {

  return (
    <div className="FeatureContainer">
      <Carousel autoPlay 
        showArrows={true} 
        showThumbs={false} 
        showStatus={false}
        infiniteLoop={true}
        interval={3000}
        transitionTime={500}
        stopOnHover={false}
      >
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/Header_Chosen_Family_2048x.jpg?v=1574097835" alt="img_1"/>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/0224_20_BlogHeader_BlackTerryFrenchTerry_2048x.jpg?v=1582675671" alt="img_2" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/WFHBlogHeader_2048x.jpg?v=1587140467" alt="img_3" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/UnisuitBlogHeader_6d0481be-c0b5-4fba-b3c7-e9fad5d44ea3_2048x.jpg?v=1583440179" alt="img_4" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/TomboyXFirstLine_ChemicalFree_Blog_2048x.jpg?v=1582223946" alt="img_5" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0204/2302/articles/0930_HALL_2048x.jpg?v=1569948116" alt="img_6" />
        </div>
      </Carousel>
    </div>
  )
}

export default FeatureContainer;