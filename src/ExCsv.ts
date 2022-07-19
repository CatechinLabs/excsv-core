import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync'
import { Columns } from '@/Columns'
import {calc} from '@/Calc'

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
    // const isConcatlate = cell.match(/^=CONCATENATE/) !== null
    const isFunction = cell.match(/^=/) !== null
    if (isFunction) {
      console.log('関数だよ')
      // ↓CONCATENATE
      // カッコの中の値をカンマ区切りで取得する
      // const reg = /\((\S+), *(\S+)\)/g
      // const hgoe = cell.matchAll(reg)
      // const huga = [...hgoe].map((x) => x.map((y) => y))
      // const a = huga[0][1].trim().replaceAll('"', '')
      // const b = huga[0][2].trim().replaceAll('"', '')
      // const res = a + b
      
      const reg = /^=/g
      const expr = cell.replace(reg,"")
      console.log({expr}) // 先頭の=を除去した文字列
      
      // TODO: 参照を解決する
      const ref = this.refer(expr)

      // BNFに食わす
      const result= calc.parse(ref)
      const res : number = calc.evaluate(result);

      return res.toString()
      // ↑CONCATENATE
    } else {
      console.log('参照だよ')
      // ↓ 参照の処理
      const column = cell.match(/([A-Z]+)/)![0] //"A"; // -> 0
      const row = +cell.match(/([0-9]+)/)![0] // -> row-1 -> 0

      const columnNumber = Columns.getColumNumber(column)
      const rowNumber = row - 1

      return this.data[rowNumber][columnNumber]
      // ↑ 参照の処理
    }
  }

  /**
   * セル参照を解決する
   */
  refer(expr: string) { 
    // A1
    // A1+A2

    const reg = /([A-Z]+[1-9][0-9]*)/g
    const ref = expr.matchAll(reg)
    const huga = [...ref].map((x) => x.map((y) => y))

    console.log({huga})


    huga.map(refStr => {
      // ↓ 参照の処理
      const column = refStr[0][1].match(/([A-Z]+)/)![0] //"A"; // -> 0
      const row = +refStr[0][1].match(/([0-9]+)/)![0] // -> row-1 -> 0

      const columnNumber = Columns.getColumNumber(column)
      const rowNumber = row - 1

      const refVal = this.data[rowNumber][columnNumber]
      // ↑ 参照の処理
    })


    // マッチした分、値の取得と置換
    const a = huga[0][1].trim().replaceAll('"', '')
    const res = this.get(a)
    return res
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
