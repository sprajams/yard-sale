import client from "../client";
import Homepage from "../layout/Homepage";

export async function getServerSideProps(context) {
  //  assign locationFilter the query to filter for posts if a location is defined
  const location = context.query.location;
  const locationFilter = location
    ? location == "all"
      ? ""
      : `&& location[0]->slug.current == "${location}"`
    : "";
  //  query to filter by category if one is selected
  const category = context.query.category;
  const categoryFilter = category
    ? `&& "${category}" in categories[] -> slug.current`
    : "";

  const listings = await client.fetch(
    `*[_type == 'product' ${locationFilter} ${categoryFilter}] | order(_updatedAt desc) {
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
