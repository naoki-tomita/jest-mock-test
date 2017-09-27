# これはなに？
jestというテストフレームワークのテストプロジェクトです。
jestの利用方法を学ぶために作られました。

# jest？
facebook先生が作ったテストフレームワークです。
jasmineをベースに作られています。

# 何がしたいの？
jestでのMockのやりかたを調べたかったのです。

# 結果
jestでMockできるようになりました。

# 解説
詳細はコードを参考にしてください。

## jestを走らせる
1. package.jsonにjestというキーを作ることで設定が記述できる
1. jestでMockしたければ、`automock: true`を設定する
1. `jest [テストするディレクトリ]`
    * このプロジェクトでは`npm run test`でいけます

## apps/app.js
* utils/util.jsに依存しています
* `hogefuga()`というメソッドを持ち、`"hogefuga"`という文字列を返します
    * 内部では`utils.hoge()`と`utils.fuga()`を呼んでいるだけです

## utils/util.js
* `hoge()`, `fuga()`というメソッドを持ちます
* そんだけです

## app.test.js
* jestでは`__test__`というフォルダを作っておくと、その中のjsをテストコードとして実行してくれます。便利！！！！！

```js
// jestの設定でautomock: trueとしているので、すべてのモジュールはrequire時にMockされます。
// dontMockで指定したモジュールはMockされないので、テストしたいモジュールはdontMockしておきましょう。
jest.dontMock("../app");

var util = require("../../utils/util"); // こいつはMock済み。
var app = require("../app"); // こいつはMockされない

// テストの記述方法はjasmineを参考にしてください。
// bddとかいう書き方だった気がします。
describe("hoge fuga", function() {
  describe("when util.fuga returns hoge", function() {
    beforeAll(function() {
      // util.fugaおよびutil.hogeはMock化されていて、中身は空です(正確に言うと、undefinedを返す関数になっています)
      // mockReturnValueというメソッドがjestによって追加されているので、こいつを使うと、いい感じに好きな値を返すことができるようになります。
      util.fuga.mockReturnValue("hoge");
      util.hoge.mockReturnValue("hoge");
    });
    it("should return hogehoge", function() {
      // util.hoge(), util.fuga()が両方hogeを返したら、app.hogefuga()は"hogehoge"を返すよね？という意味のないテスト
      // ですが、jestの威力を知るにはこれで十分なのです。
      expect(app.hogefuga()).toEqual("hogehoge");
    });
  });
});
```