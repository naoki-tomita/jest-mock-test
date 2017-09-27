jest.dontMock("../app");

var util = require("../../utils/util");
var app = require("../app");

describe("hoge fuga", function() {
  describe("when util.fuga returns hoge", function() {
    beforeAll(function() {
      util.fuga.mockReturnValue("hoge");
      util.hoge.mockReturnValue("hoge");
    });
    it("should return hogehoge", function() {
      expect(app.hogefuga()).toEqual("hogehoge");
    });
  });
});