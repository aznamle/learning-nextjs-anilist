
import React from 'react'
import { getPopularAnime } from '../../lib/api/api'

import AniCard from '../../components/AniCard'

export default function AnimeList({ anilist }) {
    console.log(anilist)
    return (
        <div>
            {
                anilist.Page.media.map(show => (
                  <AniCard name={show.title.romaji} image={show.coverImage.large} description={show.description}/>
                ))
            }
        </div>
    )
};

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
    const anilist = (await getPopularAnime())
    return {
      props: {
        anilist 
      }
    }
  }