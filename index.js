define("typed", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ClassList(...args) {
        return args.filter(x => x && typeof x === 'string' && x !== '' && x !== ' ').join(' ');
    }
    exports.default = ClassList;
});
