export function fib(n: number): number {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fib(n - 1) + fib(n - 2);
 }
