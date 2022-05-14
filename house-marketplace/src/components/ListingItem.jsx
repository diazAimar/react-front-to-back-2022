import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';

export default function ListingItem({ listing, id, onDelete }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div>
      <li className="categoryListing">
        <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
          <img src={listing.imgUrls[0]} alt={listing.name} className="categoryListingImg" />
          <div className="categoryListindDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">
              $
              {listing.offer
                ? formatPrice(listing.discountedPrice)
                : formatPrice(listing.regularPrice)}
              {listing.type === 'rent' && ' / Month'}
            </p>
            <div className="categoryListingInfoDiv">
              <img src={bedIcon} alt="rooms" />
              <p className="categoryListingInfoText">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : `${listing.bedrooms} Bedroom`}
              </p>
              <img src={bathtubIcon} alt="bathrooms" />
              <p className="categoryListingInfoText">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : `${listing.bathrooms} Bathroom`}
              </p>
            </div>
          </div>
        </Link>
        {onDelete && (
          <DeleteIcon
            className="removeIcon"
            fill="rgb(231, 76, 60"
            onClick={() => onDelete(listing.id, listing.name)}
          />
        )}
      </li>
    </div>
  );
}
