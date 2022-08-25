import client from "../../client";
import Category from "../../layout/Category";

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "category"][].slug.current`);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

// query to filter out what to return
const categoryQuery = `*[_type == "product" && $slug in categories[] -> slug.current][]{
    title,
    'slug': slug.current,
    price, 
    categories[] -> {
      title,
      'slug':slug.current
    },
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

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const category = await client.fetch(categoryQuery, { slug });
  return {
    props: {
      category,
    },
  };
}

export default Category;
