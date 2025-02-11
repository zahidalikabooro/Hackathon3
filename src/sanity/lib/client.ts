import { createClient } from 'next-sanity';

export const client = createClient({
  projectId:  '0jlers78',
  dataset:'production',
  apiVersion: '2024-02-07',
  useCdn: false, 
  token:  "sk57l3BUXhMcMOMPWK8Ip44oxnLDel3WOV0HCxBLiusscFcM2GiVm7tsUbWEUUwntBDJdJiE4tszOgr01qHfeFxa5Wpm6Ivu8I2kjYzCukCSEqexUXgw6qe35um3WJkj1x6EEgGzDLiGdHkZJg6ckFVuoK5mX4MITYj0WPdIEoRry0uR9fV0"
});


