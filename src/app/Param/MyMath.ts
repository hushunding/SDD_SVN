import * as assert from 'assert';
export function Ceil(n: number, r: number) {
    assert.strictEqual(Math.floor(r), r, "r is not int");
    let res = Math.ceil(n);
    const rest = res % r;
    if(rest > 0 ){
        res = res - rest + r
    }
    return res;
}

