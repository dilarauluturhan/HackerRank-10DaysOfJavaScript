function modifyArray(nums) {
    let res = []
    for (const e of nums) {
        if (e % 2 == 0)
            res.push(e * 2)
        else
            res.push(e * 3)
    }
    return res;
}