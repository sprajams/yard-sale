import client from "../../client";
import Listing from "../../layout/Listing";

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

// query to filter out what to return
const listingQuery = `*[_type == "product" && slug.current == $slug][0]{
  title,
  'slug': slug.current,
  price, 
  'blurb': blurb.en,
  'image': images[0].asset -> url,
  location[0] -> {
    city,
    state,
   'slug':slug.current
  },
  body,
 'postTime': _createdAt,
 'updatedTime': _updatedAt
}`;

// get data from CMS for listing
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const listing = await client.fetch(listingQuery, { slug });
  return {
    props: {
      listing,
    },
  };
}

export default Listing;
