// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

import cors from '@/lib/corsMiddleware';
import { fetchJson } from '@/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);

  const apiKey = '44198110d5554f5896e222014231603';

  const param = req.query.param as string[];
  const baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=' + apiKey;
  const url = [baseUrl, ...param].join('');

  if (req.method === 'GET') {
    const query = queryString.stringify(req.query);
    const formattedUrl = query ? `${url}?${query}` : url;

    try {
      const data = await fetchJson(formattedUrl, { method: 'GET' });

      return res.json(data);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }
}
