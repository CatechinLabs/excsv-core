# excsv-core

## ロードマップ

### 機能の優先順位

- [x] CSVの読み込み
- [x] セルの参照
- [ ] CONCATENATE // 文字結合
- [ ] IFERROR
- [ ] 演算子 +-*/

## 使い方

```ts
import ExCsv from ('ExCsv')

// インスタンス化
const exCsv = new ExCsv();

// ロード
await exCsv.load('path/to/file.ex.csv');

// 参照(関数の計算をする)
const a1 = exCsv.get('A1'); // 値
const a1a10 = exCsv.get('A1:A10'); // 一次元配列
const a1b10 = exCsv.get('A1:B10'); // 二次元配列

// 参照(セルをそのまま)
const option = {
  execute: false, // 関数を実行するか
}
const a1sonomama = exCsv.get('A1', option); // 値

// 値のセット
// exCsv.get('A1');

// すべての関数を評価した結果を返す
const csvText = exCsv.execute();

// 出力する
exCsv.saveFile('path/to/file.csv', option);
```

### memo

- <https://ja.vitejs.dev/>
