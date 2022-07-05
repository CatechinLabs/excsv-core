import {calc} from '@/Calc'

describe('計算関数のテスト', (): void => {
  test('「1+1」', (): void => {
    // TODO: parseエラーを考慮したい
   const result=  calc.parse('1+1')
    const assert = calc.evaluate(result);
    expect(assert).toBe(2)
  })
})
