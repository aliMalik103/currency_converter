import * as https from 'https';
export  class ConversionService {

    constructor(){}

   public async convert(toCurrency:string,fromCurrency:string,amount:number){

        const accessKey = '5u90lRvl1nbQ9mPLqBnZqu2vrBr2mFRQ';
        const options: https.RequestOptions = {
            hostname: 'api.apilayer.com',
            path: `/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}&apikey=${accessKey}`,
            method: 'GET'
        };

        try {
            const convertedAmount = await fetchData(options);
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

const fetchData = async (options: any) => {
    return new Promise((resolve, reject) => {
      const request = https.request(options, (response: any) => {
        let data: string = '';
        response.on('data', (chunk: any) => {
          data += chunk;
        });
        response.on('end', () => {
          const res: any = JSON.parse(data);
          const convertedAmount: string = res.result.toFixed(2);
          resolve(convertedAmount);
        });
      });
      request.on('error', (error: Error) => {
        reject(error);
      });
      request.end();
    });
  };