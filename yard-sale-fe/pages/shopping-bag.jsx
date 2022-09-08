import client from "../client";
import ShoppingBag from "../layout/Cart";

export async function getServerSideProps() {
  const bag = await client.fetch(
    `*[_type == 'product'] {
    'id': _id,
    title,
    price,
  }`
  );
  return {
    props: {
      bag,
    },
  };
}
export default ShoppingBag;
