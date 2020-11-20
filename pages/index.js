import React from 'react'

import Link from 'next/link';
import Head from 'next/head';

import { getUserList } from '../lib/api'
import AniCard from '../components/AniCard';
 
export default function Home({ data }) {
  console.log(data);
  return (
    <div className='bg-blue-50 h-full'>
      <Head>
          <title>Learning nextjs</title>
      </Head>
      <div>
      <Link href='/AnimeList'>
        <a>View</a>
      </Link>
        <div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const data = (await getUserList())
  return {
    props: {
      data
    }
  }
}

