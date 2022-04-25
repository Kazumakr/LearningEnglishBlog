import type { NextApiRequest, NextApiResponse } from 'next'
import { getPaginatedPost } from '../../lib/api'

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const offset = req.query.offset ? parseInt(req.query.offset as string, 10) : 0
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 3
  const categoryName: string = req.query.categoryName
    ? (req.query.categoryName as string)
    : ''

  const data = await getPaginatedPost({ offset, limit, categoryName })
  res.status(200).json(data)
}
