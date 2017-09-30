import { hoge, fuga } from "../../iutils/util";
import { hogefuga } from "../app";
jest.unmock("../app");

describe("hoge fuga", function() {
  describe("when util.fuga returns hoge", function() {
    beforeAll(function() {
      fuga.mockReturnValue("hoge");
      hoge.mockReturnValue("hoge");
    });
    it("should return hogehoge", function() {
      expect(hogefuga()).toEqual("hogehoge");
    });
  });
});