import { ExCsv } from '@/ExCsv'

describe('neko', (): void => {
  test('nekoって表示される', (): void => {
    const exCsv = new ExCsv()
    expect(exCsv.neko()).toBe('neko')
    exCsv.load('tests/test.csv')
    const e = exCsv.execute()
    console.log('🐱いったん出す', e)

    const a1 = exCsv.get('A1')
    const a2 = exCsv.get('A2')
    console.log('🐱a1', a1)
    console.log('🐱a2', a2)

    const response: string = exCsv.neko()
    expect(response).toBe('neko')
  })
})
