import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID P3Mw9qAMjweHU9ejWCDgPtBcwvzmntGamnAdw8FPrJ0'
      }
});