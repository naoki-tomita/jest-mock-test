var utils = require("../utils/util");

module.exports = {
  hogefuga: function() {
    return utils.hoge() + utils.fuga();
  }
}