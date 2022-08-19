import client from "../client";
import Hero from "../components/Hero";
import Listing from "../components/Listing";
import utils from "../styles/utils.module.scss";

const Index = ({ listings, locations }) => {
  return (
    <div>
      <Hero locationData={locations} />
      <ul className={utils.grid}>
        {listings.length > 0 &&
          listings.map((listing, i) => {
            return (
              <li key={i}>
                <Listing data={listing} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const listings = await client.fetch(
    `*[_type == 'product'] {
      title,
      categories[] -> {
        title,
        'slug':slug.current
      },
      'slug': slug.current,
      location[0] -> {
        city,
        state,
       'slug':slug.current
      },
      'image': images[0].asset->url
    }`
  );

  const locations = await client.fetch(
    `*[_type == 'location'] {
        city,
        state,
       'slug':slug.current
    }`
  );
  return {
    props: {
      listings,
      locations,
    },
  };
}
export default Index;
