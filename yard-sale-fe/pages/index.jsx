import client from "../client";
import Listing from "../components/listing";

const Index = ({ listings }) => {
  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
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
      defaultProductVariant {
        images
      },
    }`
  );
  return {
    props: {
      listings,
    },
  };
}
export default Index;
