import { Columns } from '@/Columns'

describe('カラムテスト', (): void => {
  test('Aは0になる', (): void => {
    //when
    const assert = Columns.getColumNumber('A');
    //assert
    expect(assert).toBe(0)
  })
  test('Bは1になる', (): void => {
    //when
    const assert = Columns.getColumNumber('B');
    //assert
    expect(assert).toBe(1)
  })

  test('Zは25になる', (): void => {
    //when
    const assert = Columns.getColumNumber('Z');
    //assert
    expect(assert).toBe(25)
  })

  test('AAは26になる', (): void => {
    //when
    const assert = Columns.getColumNumber('AA');
    //assert
    expect(assert).toBe(26)
  })

  test('ABは27になる', (): void => {
    //when
    const assert = Columns.getColumNumber('AB');
    //assert
    expect(assert).toBe(27)
  })

  test('BBは53になる', (): void => {
    //when
    const assert = Columns.getColumNumber('BB');
    //assert
    expect(assert).toBe(53)
  })

  test('ZZZは18277になる', (): void => {
    //when
    const assert = Columns.getColumNumber('ZZZ');
    //assert
    expect(assert).toBe(18277)
  })

})
