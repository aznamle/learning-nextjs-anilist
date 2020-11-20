import React from 'react'

import Link from 'next/link';
import Head from 'next/head';

import { getUserList } from '../lib/api'
import AniCard from '../components/AniCard';
 
export default function Home({ list }) {
  console.log(list);
  return (
    <div className='bg-gray-100 h-full'>
      <Head>
          <title>Learning nextjs</title>
      </Head>
      <div>
      <Link href='/AnimeList'>
        <a>View</a>
      </Link>
        <div>
        {
          list.map(show => (
            <AniCard name={show.media.title.romaji} description={show.notes}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data  = (await getUserList())
  return {
    props: {
      list: data.entries
    }
  }
}

