define("#switchable/0.9.5/slide-debug", ["./switchable-debug", "#widget/0.9.16/daparser-debug", "#widget/0.9.16/auto-render-debug", "#base/0.9.16/aspect-debug", "#base/0.9.16/attribute-debug", "#events/0.9.1/events-debug", "#class/0.9.2/class-debug"], function(require, exports, module) {
    var Switchable = require('./switchable-debug');

    // 卡盘轮播组件
    module.exports = Switchable.extend({
        attrs: {
            autoplay: true,
            circular: true
        }
    });
});