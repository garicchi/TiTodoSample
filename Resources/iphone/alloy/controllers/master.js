function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goDetail(e) {
        $.trigger("detail", e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
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
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Go Detail",
        id: "__alloyId2"
    });
    $.__views.master.add($.__views.__alloyId2);
    goDetail ? $.__views.__alloyId2.addEventListener("click", goDetail) : __defers["$.__views.__alloyId2!click!goDetail"] = true;
    $.__views.__alloyId4 = Ti.UI.createSearchBar({
        barColor: "#000",
        id: "__alloyId4"
    });
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#DDD",
        height: Ti.UI.SIZE,
        id: "__alloyId6"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Header View",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "red",
        height: "50",
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Release to reload",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    var __alloyId13 = [];
    $.__views.__alloyId14 = {
        properties: {
            title: "Number 1",
            id: "__alloyId14"
        }
    };
    __alloyId13.push($.__views.__alloyId14);
    $.__views.__alloyId15 = {
        properties: {
            title: "Number 2",
            id: "__alloyId15"
        }
    };
    __alloyId13.push($.__views.__alloyId15);
    $.__views.__alloyId11 = Ti.UI.createListSection({
        id: "__alloyId11"
    });
    $.__views.__alloyId11.items = __alloyId13;
    var __alloyId16 = [];
    __alloyId16.push($.__views.__alloyId11);
    $.__views.__alloyId3 = Ti.UI.createListView({
        sections: __alloyId16,
        searchView: $.__views.__alloyId4,
        headerView: $.__views.__alloyId6,
        pullView: $.__views.__alloyId9,
        id: "__alloyId3"
    });
    $.__views.master.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!goDetail"] && $.__views.__alloyId2.addEventListener("click", goDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;