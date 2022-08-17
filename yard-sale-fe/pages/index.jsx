import client from "../client";

const Index = ({ listings }) => {
  console.log(listings);
  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {listings.length > 0 &&
          listings.map((listing, i) => {
            return (
              <li key={i}>
                <h3>{listing.title}</h3>
                {listing.categories.length > 0 &&
                  listing.categories.map((category, i) => {
                    return <span key={i}>{category.title}</span>;
                  })}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const listings = await client.fetch(
    `*[_type == 'product']{
      title,
      categories[] -> {
        title,
        'slug':slug.current
},
    'slug':slug.current,
    }`
  );
  return {
    props: {
      listings,
    },
  };
}
export default Index;
