// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'
export default async function handler(req, res
) {
  try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.status(200).json(data)
  }
  catch(e){
    res.status(404).json(e.message)
  }
}
