function vowelsAndConsonants(s) {
    var vow=['a', 'e', 'i', 'o', 'u']
    for (var i=0; i<s.length; i++) {
        if (vow.indexOf(s[i])>-1) 
        console.log(s[i])
    }
    for (var i=0; i<s.length; i++) {
        if (vow.indexOf(s[i])<0) 
        console.log(s[i])
    }
}
