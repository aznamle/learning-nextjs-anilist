import React from 'react'

import Head from 'next/head';
import { getAllPostsForHome } from '../lib/api/api.js'

import Container from '../components/Container';

export default function Home({data, anilist}) {
  console.log(anilist);
  //console.log(data);
  return (
    <>
      <Head>
          <title>Learning nextjs</title>
      </Head>
      {
        anilist.Page.media.map(show => (
          <Container name={show.title.romaji} />
          ))
      }
    </>
  )
}

// export async function getStaticProps(context) {
//   try {
//       const response = await fetch(`https://api.jikan.moe/v3/season/2020/fall`);
//       const data = await response.json();
//       return {
//           props: {
//               data
//           }
//       };
//   } catch (err) {
//       console.log(err);
//   };
// }

export async function getStaticProps() {
  const anilist = (await getAllPostsForHome())
  return {
    props: {
      anilist 
    }
  }
}