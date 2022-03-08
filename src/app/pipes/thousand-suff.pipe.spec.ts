import { ThousandSuffPipe } from './thousand-suff.pipe';

describe('ThousandSuffPipe', () => {
  it('create an instance', () => {
    const pipe = new ThousandSuffPipe();
    expect(pipe).toBeTruthy();
  });
});
