import { Stock } from './stock.model';

describe('Portfolio', () => {
  it('should create an instance', () => {
    expect(new Stock()).toBeTruthy();
  });
});
