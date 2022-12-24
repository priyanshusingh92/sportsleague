import { dateFormat } from './dateFormat';

describe('dateFormat function test', () => {
  const timestamp = 1651744228685;

  it('With the timestamp, should return string', () => {
    expect(dateFormat(timestamp)).toEqual('5.5.2022 12:50');
  });
  it('With empty input, should return empty string', () => {
    expect(dateFormat()).toBe("")
  })
});
