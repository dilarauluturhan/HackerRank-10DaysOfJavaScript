function sides(literals, ...expressions) {
    const area = expressions[0]
    const peri = expressions[1]
    const d = Math.sqrt(peri * peri - 16 * area)
    const s1 = (peri + d) / 4
    const s2 = (peri - d) / 4

    return [s1, s2].sort()
}