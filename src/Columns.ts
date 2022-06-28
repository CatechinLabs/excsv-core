export class Columns {
  static getColumNumber(suffix: string): number {
    return Columns.logic(suffix)
  }
  
  // https://qiita.com/kawanet/items/25540cf64f37e4c85172
  static logic(suffix: string): number {
    const splitList = suffix.toUpperCase().split('')

    const num = splitList.reduce((previousValue, currentValue) => {
      return previousValue * 26 + parseInt(currentValue, 36) - 9
    }, 0)

    return num - 1
  }
}
