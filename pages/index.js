import React from 'react'

import Head from 'next/head';

import Container from '../components/Container';

export default function Home({data}) {
  return (
    <>
      <Head>
          <title>Learning nextjs</title>
      </Head>
      {
        data.anime.map(ani => (
          <Container name={ani.title} image={ani.image_url}/>
        ))
      }
    </>
  )
}

export async function getStaticProps(context) {
  try {
      const response = await fetch(`https://api.jikan.moe/v3/season/2020/fall`);
      const data = await response.json();
      return {
          props: {
              data
          }
      };
  } catch (err) {
      console.log(err);
  };
}