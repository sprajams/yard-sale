import client from "../client";
import ShoppingBag from "../layout/Cart";

export async function getServerSideProps(context) {
  const cookiesArr = JSON.parse(context.req.cookies.cartItems);
  const cookiesIDs = cookiesArr.map((item) => item.id) || "";

  const cookieQuery = `*[_id in $ids] {
    'id': _id,
    title,
    'image': images[0].asset -> url,
    price,
  }`;

  const bag = await client.fetch(cookieQuery, { ids: cookiesIDs });

  return {
    props: {
      bag,
    },
  };
}
export default ShoppingBag;
