import client from "../client";
import Hero from "../components/Hero";
import Listing from "../components/Listing";
import utils from "../styles/utils.module.scss";

const Index = ({ listings, locations }) => {
  return (
    <div className={utils.outer}>
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

export async function getServerSideProps(context) {
  // nullish coalescing operator default to la if query is undefined
  const location = context.query.location ?? "los-angeles";

  const listings = await client.fetch(
    `*[_type == 'product' && location[0]->slug.current == "${location}" ] | order(_updatedAt desc) {
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
      price,
      'image': images[0].asset->url,
      'updatedTime': _updatedAt
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
