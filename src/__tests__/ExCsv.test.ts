import { ExCsv } from '@/ExCsv'

describe('neko', (): void => {
  test('nekoって表示される', (): void => {
    const exCsv = new ExCsv()
    expect(exCsv.neko()).toBe('neko')
    exCsv.load('src/__tests__/test.csv')
    const e = exCsv.execute()
    console.log('🐱いったん出す', e)

    const a1 = exCsv.get('A1')
    const a2 = exCsv.get('A2')
    console.log('🐱a1', a1)
    console.log('🐱a2', a2)

    const response: string = exCsv.neko()
    expect(response).toBe('neko')
  })

  test('CONCATENATEのテスト', (): void => {
    const exCsv = new ExCsv()
    const res: string = exCsv.get('=CONCATENATE("猫", "犬")')
    expect(res).toBe('猫犬')

    expect(exCsv.get('=CONCATENATE("A1", "cat")')).toBe('A1cat')
    expect(exCsv.get('=CONCATENATE("1", "1")')).toBe('11')
  })
})
