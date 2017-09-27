import util from "../../utils/util";
import app from "../app";

describe("hoge fuga", function() {
  describe("when util.fuga returns hoge", function() {
    beforeAll(function() {
      util.fuga.mockReturnsValue("hoge");
    });
    it("should return hogehoge", function() {
      expect(app.hogefuga()).toEqual("hogehoge");
    });
  });
});