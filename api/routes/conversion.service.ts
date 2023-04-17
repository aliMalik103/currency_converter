import * as https from 'https';

interface apiRespone {
  rates: {

  }
}
export class ConversionService {

  constructor() { }

  public async convert(toCurrency: string, fromCurrency: string, amount: number) {

    const accessKey = 'bee9f72971924e0fbe44a6010278730f';
    const options: https.RequestOptions = {
      hostname: 'openexchangerates.org',
      path: `/api/latest.json?app_id=${accessKey}`,
      method: 'GET'
    };
    try {
      const convertedAmount = await fetchData(options, toCurrency, amount);
      const conversion = {
        fromCurrency,
        toCurrency,
        amount,
        convertedAmount
      };
      return conversion;
    } catch (error) {
      console.error(error);
    }
  }
}

const fetchData = async (options: any, targetCurrency: string, amount: number) => {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response: any) => {
      let data: string = '';
      response.on('data', (chunk: any) => {
        data += chunk;
      });
      response.on('end', () => {
        const responseData = JSON.parse(data);
        const exchangeRate = responseData.rates[targetCurrency];

        // Convert the amount to the target currency
        const convertedAmount = amount / exchangeRate;
        resolve(convertedAmount.toFixed(2));
      });
    });
    request.on('error', (error: Error) => {
      reject(error);
    });
    request.end();
  });
};