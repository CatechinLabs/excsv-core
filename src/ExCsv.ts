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
    console.log('🐕 this.data', this.data)
  }

  // ex: A1
  get(cell: string): string {
    // この辺で参照か関数か?
    const isConcatlate = cell.match(/^=CONCATENATE/) !== null
    if (isConcatlate) {
      console.log('関数だよ')
      // ↓CONCATENATE
      // カッコの中の値をカンマ区切りで取得する
      const reg = /\((\S+), *(\S+)\)/g
      const hgoe = cell.matchAll(reg)
      const huga = [...hgoe].map((x) => x.map((y) => y))
      const a = huga[0][1].trim().replaceAll('"', '')
      const b = huga[0][2].trim().replaceAll('"', '')
      const res = a + b
      
      return res
      // ↑CONCATENATE
    } else {
      console.log('参照だよ')
      // ↓ 参照の処理
      const column = cell.match(/([A-Z]+)/)![0] //"A"; // -> 0
      const row = +cell.match(/([0-9]+)/)![0] // -> row-1 -> 0

      const columnNumber = Columns.getColumNumber10(column)
      const rowNumber = row - 1

      return this.data[rowNumber][columnNumber]
      // ↑ 参照の処理
    }
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
