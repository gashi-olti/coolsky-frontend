import { NextApiRequest, NextApiResponse } from 'next';

import { fetchJson } from '@/lib/api';
import cors from '@/lib/corsMiddleware';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);

  if (req.method === 'GET') {
    const apiKey = '5ca2b42eb7764804aee8d66847208d31';

    try {
      const data = await fetchJson(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&fields=city,zipcode,latitude,longitude,state_prov,district,country_code2,country_code3,country_name,country_capital,geoname_id,time_zone`,
        {
          method: 'GET',
        }
      );

      return res.json(data);
    } catch (error: any) {
      const { response } = error;
      return res.status(response?.status || 500).json(error.data);
    }
  }
}
