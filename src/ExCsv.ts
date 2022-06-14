import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync';

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
      columns: true,
      skip_empty_lines: true,
    })

    this.data = records
  }

  execute(){
    // TODO: 計算する
    return stringify(this.data,{
        header: true,
    })
  }
  
}
