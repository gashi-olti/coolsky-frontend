import type { NextApiRequest, NextApiResponse } from 'next';

import cors from '@/lib/corsMiddleware';
import { fetchJson } from '@/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);

  if (req.method === 'GET') {
    const apiKey = '44198110d5554f5896e222014231603';
    const query = req.query;

    try {
      const data = await fetchJson(
        `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query.q}`,
        { method: 'GET' }
      );

      return res.json(data);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }
}
