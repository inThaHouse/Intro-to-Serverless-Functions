const fetch = require('node-fetch')

// query param can be a mutation too
const query = async ({ query, variables = {} }) => {
  const { data, errors } = await fetch(process.env.HASURA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json())

  // Skipping error handling as there was no time in the course to cover it.

  return data
}

exports.query = query
