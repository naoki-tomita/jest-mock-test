jest.mock("../../utils/util");
import { hoge, fuga } from "../../utils/util";
import { hogefuga } from "../app";

describe("hoge fuga", function() {
  describe("when util.fuga returns hoge", function() {
    beforeAll(function() {
      (fuga as jest.Mock).mockReturnValue("hoge");
      (hoge as jest.Mock).mockReturnValue("hoge");
    });
    it("should return hogehoge", function() {
      expect(hogefuga()).toEqual("hogehoge");
    });
  });
});
