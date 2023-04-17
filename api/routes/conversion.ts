import * as bodyParser from "body-parser";
import * as express from "express";
import { Logger } from "../logger/logger";
import * as https from 'https';
import { ConversionService } from "./conversion.service";
class Conversion {

  public express: express.Application;
  public logger: Logger;

  // array to hold users
  public conversions: any[];
  private conversionService:ConversionService;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.conversions = [];
    this.logger = new Logger();
    this.conversionService = new ConversionService();


  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {

    this.express.get("/conversion", (req, res, next) => {
      res.json(this.conversions);
    });

    this.express.post("/conversion", async (req, res, next) => {
      console.log("HERE")
      const amount: number = req.body.converion.amount; // the amount to convert
      const fromCurrency: string = req.body.converion.fromCurrency; // the currency to convert from
      const toCurrency: string = req.body.converion.toCurrency; // the currency to convert to
      const conversionData = await this.conversionService.convert(toCurrency, fromCurrency, amount);
      this.conversions.push(conversionData)
      res.json(conversionData);
    });
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

export default new Conversion().express;