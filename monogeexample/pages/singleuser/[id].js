import React from "react";
import { useRouter } from "next/router";

function SingleUser({ data }) {
  const route = useRouter();
  return (
    <>
      <div> singleUser</div>
      <div> {data.name}</div>
    </>
  );
};

export default SingleUser;

// can also fetch single document with getServerSideProps && below is the code for that
// export async function getServerSideProps({ params: id }) {
//   const response = await fetch(
//     `${process.env.API_URL}/api/suser/single_user?id=${id.id}`
//   );

//   const data = await response.json();

//   return {
//     props: { data: data },
//   };
// }

export async function getStaticPaths() {

  const res = await fetch(`${process.env.API_URL}/api/users`)
  const data = await res.json()

  const paths = data?.map((data) => ({
    params: { id: data._id }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  
  const response = await fetch(
    `${process.env.API_URL}/api/suser/single_user?id=${params.id}`
  );

  const data = await response.json();

  return {
    props: { data: data },
  };
}