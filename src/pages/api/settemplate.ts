// @ts-ignore
import { NextApiRequest, NextApiResponse } from 'next'
import { setTemplate } from '../../utils/utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const setTemplateData: any = await setTemplate(req.body)
    res.status(200).json(setTemplateData)
  } else {
    // 如果请求方法不是POST，返回405方法不允许
    res.status(405).end('Method Not Allowed')
  }
}
