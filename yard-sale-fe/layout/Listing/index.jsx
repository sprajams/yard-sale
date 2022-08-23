import Link from "next/link";
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
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
            style={{ width: "35px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
      </Link>
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
