import React from 'react'
import AniCard from '../components/AniCard'
import { getPopularAnime } from '../lib/api'

export default function AnimeList({ anilist }) {
  console.log(anilist)
    return (
        <div>
          {
            anilist.Page.media.map(show => (
              <AniCard  name={show.title.romaji} image={show.coverImage.large} description={show.description}/>
            ))
          }
        </div>
    )
};

export async function getStaticProps() {
  const anilist = (await getPopularAnime())
  return {
    props: {
      anilist
    }
  }
}

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
