export default interface GeoLocationModel {
  ip?: string;
  city: string;
  zipcode: string;
  latitude: string;
  longitude: string;
  state_prov: string;
  district: string;
  country_code2: string;
  country_code3: string;
  country_name: string;
  country_capital: string;
  geoname_id: string;
  time_zone: {
    name: string;
    offset: number;
    current_time: string;
    current_time_unix: number;
    is_dst: boolean;
    dst_savings: number;
  };
}
