import client from "../client";
import Homepage from "../layout/Homepage";

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

  const categories = await client.fetch(
    `*[_type == 'category'] {
      title,
      slug
    }`
  );
  return {
    props: {
      listings,
      locations,
      categories,
    },
  };
}
export default Homepage;
