import React from 'react'
import AniCard from '../components/AniCard'
import { getPopularAnime } from '../lib/api'

export default function AnimeList({ anilist }) {
  console.log(anilist)
    return (
        <div className='bg-gray-100 h-full'>
          {
            anilist.Page.media.map(show => (
              <AniCard name={show.title.romaji} image={show.coverImage.medium} description={show.description}/>
            ))
          }
        </div>
    )
};

//AniList graphql API
export async function getStaticProps() {
  const anilist = (await getPopularAnime())
  return {
    props: {
      anilist
    }
  }
}

//Jikan MAL API 
// export async function getStaticProps() {
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
