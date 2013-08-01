var findAndRemoveTwoCharacters = function(s, c1, c2) {
    if (s.indexOf(c1) !== -1) {
        var nS = s.substring(0, s.indexOf(c1));     
    }
    else if (s.indexOf(c2) !== -1) {
        var nS = s.substring(0, s.indexOf(c2));        
    }
    return nS;
}

// Alternate Style
function findAndRemoveTwoCharacters(s, c1, c2) {
    if (s.indexOf(c1) !== -1) {
        var nS = s.substring(0, s.indexOf(c1));
    }
    else if (s.indexOf(c2) !== -1) {
        var nS = s.substring(0, s.indexOf(c2));
    }
    return nS;
}
