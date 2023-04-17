import { ConversionService } from "../routes/conversion.service"

describe('Conversion', () => {
  it('should return converted amount in EUR ', async () => {
    const service = new ConversionService();
    const data = await service.convert("USD", "EUR", 1);
    expect("1.09").toEqual(data.convertedAmount)
  }, 100000)

})