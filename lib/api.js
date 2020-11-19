async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`https://graphql.anilist.co`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function getPopularAnime() {
  const data = await fetchAPI(
    `
    query {
      Page {
        media(isAdult: false, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          description
        }
      }
    }
  `,
    {
      variables: {
        },
      },
  );
  return data
}

export async function getUserList() {
  const data = await fetchAPI(
    `
    query {
      MediaListCollection(userName: "aznamle", type: ANIME, status:COMPLETED){
        lists {
          entries {
            score,
            media {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
            }
            notes
          }
        }
      }
    }
    `,
    {
      variables: {
        },
      },
  );
  return data
}