export const log = console.log

export const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const curryTwo = f =>
  (a, b, ..._) => _.length ? f(a, b, ..._) : (..._) => f(a, b, ..._);

// 동기적 코드는 첫 callstack 내에서 해결하고,
// Promise 객체는 Promise 체이닝으로 해결하도록 return문을 설계
export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  return function recur(acc) {
    for (const a of iter) {
      acc = f(acc, a);
      if (a instanceof Promise) return a.then(recur)
    }
    return acc;
  }(acc)
})

export const go = (...args) => reduce((a, f) => { if (a === null) return a; return f(a) }, args);
export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)