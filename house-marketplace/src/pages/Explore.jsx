import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';
import Slider from '../components/Slider';

export default function Explore() {
  return (
    <div className="explore">
      <header></header>
      <p className="pageHeader">Explore</p>
      <main>
        <Slider />
      </main>
      <p className="exploreCategoryHeading">Categories</p>
      <div className="exploreCategories">
        <Link to="/category/rent">
          <img src={rentCategoryImage} alt="Rent" className="exploreCategoryImg" />
          <p className="exploreCategoryName">Places for Rent</p>
        </Link>
        <Link to="/category/sale">
          <img src={sellCategoryImage} alt="Sell" className="exploreCategoryImg" />
          <p className="exploreCategoryName">Places for Sale</p>
        </Link>
      </div>
    </div>
  );
}
