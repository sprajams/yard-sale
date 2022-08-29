import HomeIcon from "../../components/HomeIcon";

const Listing = ({ listing }) => {
  console.log(listing);
  const {
    slug,
    title,
    price,
    image,
    location,
    blurb,
    body,
    postTime,
    updatedTime,
  } = listing;
  return (
    <article>
      <HomeIcon />
      <h1>{title}</h1>
      <div>${price}</div>
      <div>{location.city}</div>
      <div>
        <img src={image} alt={`${title}`}></img>
      </div>
      <div>Posted: {new Date(postTime).toDateString()}</div>
      <div>Last Updated: {new Date(updatedTime).toDateString()}</div>
      <p>{blurb}</p>
    </article>
  );
};

export default Listing;
