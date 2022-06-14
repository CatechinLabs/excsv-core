export class Columns {
  static convertTable = [
    { key: 'A', val: 0 },
    { key: 'B', val: 1 },
    { key: 'C', val: 2 },
  ]

  static getColumNumber(suffix: string): number {
    let num: number
    try {
      num = Columns.convertTable.find((v) => {
        return v.key === suffix
      })!.val
    } catch (error) {
      throw new RangeError()
    }
    return num
  }
}
