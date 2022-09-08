import { useEffect } from "react";
import client from "../../client";

const listingQuery = `*[_type == "product" && _id == $id][0]{
    title,
    'slug': slug.current,
    price, 
    'blurb': blurb.en,
    'image': images[0].asset -> url,
    body,
   'postTime': _createdAt,
   'updatedTime': _updatedAt
  }`;

const CartItem = ({ itemData }) => {
  //   async function getData() {
  //     const data = await client.fetch(
  //       `*[_type == 'product'] {
  //               'id': _id,
  //               title,
  //               price,
  //             }`
  //     );
  //     console.log(data, "dd");
  //   }

  //   useEffect(() => {
  // async function getData() {
  //   let response = await client.fetch(`*[_type == 'product'] {
  //     'id': _id,
  //     title,
  //     price,
  //   }`);
  //   console.log(response);
  //   //   response = await response.json();
  // }

  // getData()
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((e) => {
  //     console.log(e, "sos help");
  //   });
  //     const query = `*[_type == 'product']`;
  //     client
  //       .fetch(
  //         `*[_type == 'location'] {
  //         city,
  //         state,
  //        'slug':slug.current
  //     }`
  //       )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data, "did it work"))
  //       .catch(console.error);
  //     console.log("hello");
  //   }, []);

  //   client.fetch(`*[_type == 'location']`).then((data) => console.log(data));

  useEffect(() => {
    const consoleFetch = async () => {
      const listing = await client.fetch(listingQuery, {
        id: "35f78f0b-8938-412d-aae0-80937ee4a744",
      });
      console.log(listing);
    };
    consoleFetch();
  }, []);
  return (
    <div>
      <div>{itemData.id}</div>
      <span>qty:{itemData.quantity}</span>
    </div>
  );
};

// export async function getData() {
//   const data = await client.fetch(
//     `*[_type == 'product'] {
//         'id': _id,
//         title,
//         price,
//       }`
//   );
//   return {
//     props: {
//       data,
//     },
//   };
// }
export default CartItem;
