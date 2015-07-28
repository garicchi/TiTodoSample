function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function backMaster() {
        $.detailWindow.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "detailWindow"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Back Master",
        id: "__alloyId0"
    });
    $.__views.detailWindow.add($.__views.__alloyId0);
    backMaster ? $.__views.__alloyId0.addEventListener("click", backMaster) : __defers["$.__views.__alloyId0!click!backMaster"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!backMaster"] && $.__views.__alloyId0.addEventListener("click", backMaster);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;