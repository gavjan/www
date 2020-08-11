"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = void 0;
function fib(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fib(n - 1) + fib(n - 2);
}
exports.fib = fib;
