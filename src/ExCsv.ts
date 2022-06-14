import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync'
import { Columns } from '@/Columns'

import * as fs from 'fs'
export class ExCsv {
  data: any

  neko(): string {
    return 'neko'
  }

  /**
   * ファイルを読み込ます
   * @param path ファイルパス
   */
  load(path: string): void {
    const file = fs.readFileSync(path)

    const records = parse(file, {
      columns: false,
      skip_empty_lines: true,
    })

    this.data = records
    console.log("🐕 this.data", this.data)
  }

  // ex: A1
  get(cell: string): string {
    const column = cell.match(/([A-Z]+)/)![0] //"A"; // -> 0
    const row = +cell.match(/([0-9]+)/)![0] // -> row-1 -> 0

    const columnNumber = Columns.getColumNumber(column)
    const rowNumber = row - 1

    return this.data[rowNumber][columnNumber]
  }

  /**
   * 関数を評価した結果をCSVで返す
   */
  execute() {
    // TODO: 計算する
    return stringify(this.data, {
      header: false,
    })
  }
}
