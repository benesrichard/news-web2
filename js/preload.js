// Načtení dat z url
function getJsonFromUrl(e) {
    e || (e = location.href);
    var t = e.indexOf("?"),
        n = e.indexOf("#");
    if (-1 == n && -1 == t) return {}; - 1 == n && (n = e.length);
    var o = -1 == t || n == t + 1 ? e.substring(n) : e.substring(t + 1, n),
        d = {};
    return o.split("&").forEach(function (e) {
        if (e) {
            var t = (e = e.split("+").join(" ")).indexOf("="),
                n = -1 < t ? e.substr(0, t) : e,
                o = -1 < t ? decodeURIComponent(e.substr(t + 1)) : "",
                l = n.indexOf("[");
            if (-1 == l) d[decodeURIComponent(n)] = o;
            else {
                var s = n.indexOf("]", l),
                    r = decodeURIComponent(n.substring(l + 1, s));
                n = decodeURIComponent(n.substring(0, l)), d[n] || (d[n] = []), r ? d[n][r] = o : d[n].push(o)
            }
        }
    }), d
}

urlParams = getJsonFromUrl(location.search);

if(urlParams.theme == "dark" || urlParams.theme == "light")
{    
    document.getElementById("main-content").style.display = "none";
    if(urlParams.theme == "dark")
    {
        document.getElementById("dark-css").rel = "stylesheet";
    }
}
else
{    
    document.getElementById("main-content").style.display = "block";
}