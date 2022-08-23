import client from "../../client";
import { useRouter } from "next/router";

const Listing = ({ listing }) => {
  console.log(listing);
  const router = useRouter();
  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  );
};

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
const listingQuery = `*[_type == "product"]{
  title,
  'slug': slug.current,
  price, 
  'blub': blub.en,
  'image': images[0].asset -> url,
  location,
}`;

// get data from CMS for listing
export async function getStaticProps() {
  const listing = await client.fetch(listingQuery);
  return {
    props: {
      listing,
    },
  };
}

export default Listing;
