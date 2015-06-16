function require(e) {
    return modules[e]
}

function define() {
    var e = arguments[arguments.length - 1];
    if ("function" != typeof e) return void modules.push(e);
    var r = {
        exports: {}
    };
    r.exports = e(require, r.exports, r) || r.exports, modules.push(r.exports)
}
var modules = [];
define.amd = define.cmd = !0;
! function() {
    define(function(r, e, o) {
        "use strict";

        function d() {
            return function(r, e) {
                var o = {
                        width: r.width + "px",
                        height: r.height + "px"
                    },
                    d = "",
                    t = 0,
                    i = 0;
                return r.border && "none" !== r.border && (t = i = -r.borderSize, o.borderWidth = r.borderSize + "px"), "dx" in r && (t += r.dx, i += r.dy), (t || i) && (d += " translate3d(" + t + "px, " + i + "px, 0)"), r.rotate && (d += "rotate(" + r.rotate + "deg)"), o.webkitTransform = o.transform = d, "simple" === e ? o : (r.opacity < 1 && (o.opacity = r.opacity), "ellipse" === r.shape ? o.borderRadius = "50%" : "rect" == r.shape && r.borderRadius && (o.borderRadius = r.borderRadius + "px"), "none" !== r.border && (o.borderStyle = r.border, o.borderWidth = r.borderSize + "px", o.borderColor = r.borderColor), "true" === r.shadow && (o.boxShadow = [r.shadowOffsetX + "px", r.shadowOffsetY + "px", r.shadowBlur + "px", r.shadowSpread + "px", r.shadowColor].join(" ")), o)
            }
        }
        return o.exports = d()
    })
}();


! function() {
    define(function(t, e, n) {
        "use strict";

        function r() {
            var t = 325;
            return function(e, n, r) {
                r = r || t;
                var i = {
                    left: e.x + "px",
                    width: e.width + "px",
                    height: e.height + "px"
                };
                switch (e.coordinate) {
                    case "bottom":
                        i.bottom = -e.height - e.y + "px";
                        break;
                    case "central":
                        i.top = e.y + r + "px";
                        break;
                    default:
                        i.top = e.y + "px"
                }
                return i
            }
        }
        return n.exports = r()
    })
}();
! function() {
    define(function(e, t, n) {
        function a(e) {
            for (; e && e.getAttribute;) {
                if (e.classList.contains("lg-trailer")) {
                    var t = e.getAttribute("data-link");
                    e.style.marginTop = "5px", setTimeout(function() {
                        e.style.marginTop = 0, /^(https?|mailto):/.test(t) ? window.location = t : /^#page(\d+)$/.test(t) && l.gotoPage(parseInt(RegExp.$1, 10) - 1)
                    }, 100);
                    break
                }
                e = e.parentNode
            }
        }

        function i(e) {
            function t(e) {
                return s(e)
            }

            function n(e) {
                return c(e, "none", r)
            }

            function i(e) {
                for (var t in h) "undefined" == typeof e[t] && (e[t] = h[t])
            }
            d = document.querySelector(".lg-container"), u = document.querySelectorAll(".lg-page"), g = u.length, f = document.querySelector(".lg-back-stage"), p = document.querySelector(".lg-front-stage");
            var r = d.clientHeight / 2,
                h = {
                    coordinate: "top",
                    rotate: 0,
                    opacity: 1,
                    gravity: 0,
                    link: "",
                    exist: "false",
                    shape: "rect",
                    borderRadius: 0,
                    border: "none",
                    borderSize: 1,
                    borderColor: "black",
                    fill: "transparent",
                    shadow: "false",
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowBlur: 0,
                    shadowSpread: 0,
                    shadowColor: "black"
                },
                v = function(e, a, r) {
                    var s = ["back", "front"][r + 2];
                    s = s || "page";
                    var c = e.attributes || {},
                        d = e.components || [],
                        u = a.querySelector(".lg-backface");
                    c.background && (u.style.background = c.background), c.backgroundOpacity < 1 && (u.style.opacity = c.backgroundOpacity);
                    var f = a.querySelectorAll(".lg-surface");
                    d.forEach(function(e, a) {
                        var c = l.components[e.type];
                        if (c) {
                            var d = e.surface || {};
                            i(d);
                            var u = f[a],
                                p = u.parentNode,
                                h = t(d);
                            for (var v in h) u.style[v] = h[v];
                            var y = n(d);
                            for (var v in y) p.style[v] = y[v];
                            d.link && p.setAttribute("data-link", d.link), d.gravity && d.gravity > 0 && (u.classList.add("layer"), u.setAttribute("data-depth", d.gravity)), o || "true" !== d.exist || (e.hidden = !0), e.animations && (animate = e.animations.enter, animate && "none" !== animate.name && (p.style["-webkit-animation-duration"] = p.style["animation-duration"] = (animate.duration || 1) + "s", p.style["-webkit-animation-delay"] = p.style["animation-delay"] = (animate.delay || 0) + "s", p.style["-webkit-animation-iteration-count"] = p.style["animation-iteration-count"] = animate.repeat || 1, p.style["-webkit-animation-direction"] = p.style["animation-direction"] = animate.direction || "normal", p.className = "lg-trailer animated " + animate.name, p.style["-webkit-animation-fill-mode"] = p.style["animation-fill-mode"] = "backwards")), e.hidden && (p.setAttribute("data-hidden", "hidden"), p.style.display = "none");
                            var w = {
                                data: e,
                                pageIndex: m,
                                pageCount: g,
                                stage: r,
                                stageType: s,
                                stageIndex: r,
                                trailerElement: p,
                                surfaceElement: u,
                                show: function() {
                                    this.trailerElement.removeAttribute("data-hidden"), this.trailerElement.style.display = ""
                                },
                                hide: function() {
                                    this.trailerElement.setAttribute("data-hidden", "hidden"), this.trailerElement.style.display = "none"
                                }
                            };
                            w.instance = c.create(u, e.attributes, d.width, d.height, {
                                pageIndex: m,
                                pageCount: g,
                                stage: r,
                                stageType: s
                            }), b.push(w)
                        }
                    }), window.Parallax && document.querySelectorAll(".lg-container .layer").length > 0 && new Parallax(document.querySelector(".lg-container"))
                };
            e.backStage && v(e.backStage, f, -2), e.frontStage && v(e.frontStage, p, -1), e.pages.forEach(function(e, t) {
                var n = u[t];
                v(e, n, t)
            });
            var y = "ontouchend" in window ? "touchend" : "click";
            document.addEventListener(y, function(e) {
                a(e.target)
            })
        }

        function r(e) {
            function t() {
                if (!(0 > a)) {
                    b.forEach(function(e) {
                        e.instance.pageChange && e.instance.pageChange(a, g), (e.stageIndex < 0 || e.stageIndex === a) && e.instance.start && !e.instance.$started && (e.instance.start(), e.instance.$started = !0)
                    });
                    var e = u[a];
                    e && !e.classList.contains("running") && e.classList.add("running")
                }
            }

            function n(e) {
                a !== e && "undefined" != typeof e && (a = e, t())
            }
            var a = -1,
                i = 0;
            String(location.hash).replace(/\bpage=(\d+)/, function(e, t) {
                i = +t
            });
            var r = new Swiper(".lg-page-container", {
                speed: 800,
                initialSlide: i,
                loop: e.attributes.swiperLoop,
                resistance: !0,
                fade: {
                    crossFade: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !1,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                lazyLoading: !0,
                lazyLoadingInPrevNext: !0,
                direction: e.attributes.swiperDirection || "vertical",
                effect: e.attributes.swiperEffect || "slide",
                pagination: e.attributes.swiperPagination ? ".swiper-pagination" : null,
                onSetTranslate: function(t, n) {
                    var a = document.querySelector(".lg-container"),
                        i = "horizontal" == e.attributes.swiperDirection ? "x" : "y",
                        r = "x" == i ? (t.slides.length - 1) * t.width : (t.slides.length - 1) * t.height;
                    n > 0 ? (a.style.webkitTransition = "none", a.style.webkitTransform = "translate3d(0, " + n + "px, 0)") : -n > r ? (a.style.webkitTransition = "none", a.style.webkitTransform = "translate3d(0, " + (r + n) + "px, 0)") : (a.style.webkitTransition = "-webkit-transform .8s ease", a.style.webkitTransform = "")
                },
                onInit: function(e) {
                    n(e.activeIndex)
                },
                onProgress: function(e) {
                    n(e.activeIndex)
                },
                onSlideChangeStart: function(e) {
                    n(e.activeIndex)
                },
                onSlideChangeEnd: function(e) {
                    n(e.activeIndex)
                }
            });
            window.addEventListener("hashchange", function() {
                String(location.hash).replace(/\bpage=(\d+)/, function(e, t) {
                    r.slideTo(+t)
                })
            }), window.addEventListener("message", function(e) {
                "pageUp" === e.data ? r.slidePrev() : "pageDown" === e.data && r.slideNext()
            }, !1), l.swiper = r, l.isWeixin = o, l.gotoPage = function(e) {
                switch (e) {
                    case "first":
                        r.slideTo(0);
                        break;
                    case "next":
                        r.slideNext();
                        break;
                    case "prev":
                        r.slidePrev();
                        break;
                    case "last":
                        r.slideTo(r.slides.length - 1);
                        break;
                    default:
                        r.slideTo(e)
                }
            }
        }
        var o = /micromessenger/i.test(navigator.userAgent),
            s = e("0"),
            c = e("1"),
            l = {
                version: "0.1.1",
                components: {}
            };
        l.init = function(e) {
            function t(e, t) {
                var n = "";
                switch (t) {
                    case "back":
                    case "front":
                        n += '<div class="lg-' + t + '-stage">';
                        break;
                    default:
                        n += '<div class="lg-page swiper-slide">'
                }
                return n += '<div class="lg-backface"></div>', e && (n += new Array(e.length + 1).join('<div class="lg-trailer"><div class="lg-surface"></div></div>')), n += "</div>"
            }

            function n(e) {
                var n = '<div class="lg-page-wrapper swiper-wrapper">';
                return e.forEach(function(e) {
                    n += t(e.components)
                }), n += "</div>"
            }

            function a() {
                var t = "";
                return e.attributes.swiperPagination && (t += '<div class="swiper-pagination"></div>'), e.attributes.swiperButton && (t += '<div class="swiper-button-prev"></div>', t += '<div class="swiper-button-next"></div>'), t
            }

            function o(e) {
                e && e.components && e.components.forEach(function(e) {
                    e.surface && e.surface.link && String(e.surface.link).replace(/^#page(\d+)$/, function(e, t) {
                        f[t] = !0
                    }), "image" === e.type && e.attributes && e.attributes.src && (g[e.attributes.src] = g[e.attributes.src] || 0, g[e.attributes.src]++)
                })
            }

            function s(e, t) {
                e && e.components && e.components.forEach(function(e) {
                    "image" === e.type && e.attributes && e.attributes.src && ((u.length < 5 || f[t]) && u.push(e.attributes.src), e.attributes.lazy = t >= 0 && g[e.attributes.src] < 2)
                })
            }

            function c() {
                setTimeout(function() {
                    r(e);
                    var t = document.querySelector("body > .lg-container");
                    m.classList.add("done"), t.classList.add("ready"), setTimeout(function() {
                        m.parentNode.removeChild(m)
                    }, 200)
                }), clearTimeout(c.timer)
            }

            function d(e, t) {
                m.querySelector(".progress").textContent = parseInt(e / t * 100) + "%", !b && .005 > t - e && (c(), b = !0)
            }
            l.init = function() {}, document.querySelector(".lg-container").insertAdjacentHTML("beforeend", t(e.backStage.components, "back") + '<div class="lg-page-container swiper-container">' + n(e.pages) + a() + "</div>" + t(e.frontStage.components, "front"));
            var u = [],
                g = {},
                f = {};
            o(e.backStage), o(e.frontStage), e.pages.map(o), s(e.backStage, -1), s(e.frontStage, -2), e.pages.forEach(function(e, t) {
                s(e, t)
            });
            var p = 0,
                m = document.querySelector("#loading");
            i(e), u.length ? (u.forEach(function(e) {
                if (e) {
                    var t = document.createElement("img");
                    t.onload = t.onerror = function(e) {
                        p++, d(p, u.length)
                    }, t.src = e
                }
            }), c.timer = setTimeout(c, 3e4)) : c();
            var b = !1
        };
        var d, u, g, f, p, m = 0,
            b = [];
        l.getComponentsByName = function(e) {
            var t = [];
            return b.forEach(function(n) {
                (n.data.name === e || e instanceof RegExp && e.test(n.data.name) || e instanceof Array && e.indexOf(n.data.name) >= 0) && t.push(n)
            }), t
        }, n.exports = window.legend = l
    })
}();
! function() {
    define(function(t, e) {
        function n(t, e, n, a) {
            var i = document.createElement("img");
            i.classList.add("lg-component-img");
            var r = {},
                s = {
                    name: "图片",
                    attributeChange: function(t) {
                        t = t || {};
                        for (var e in t) r[e] = t[e];
                        var n = "src";
                        r.lazy && (n = "data-src", i.classList.add("swiper-lazy")), i.setAttribute(n, t.src)
                    },
                    sizeChange: function(t, e) {
                        i.style.width = t + "px", i.style.height = e + "px"
                    }
                };
            return s.sizeChange(n, a), s.attributeChange(e), t.appendChild(i), s
        }
        e.create = n
    })
}();
require("2").components.image = require("3");
! function() {
    define(function(n, r) {
        var t = function(n, r, t) {
            var e = function(f, o) {
                var i, a, c;
                if ("function" == typeof f) return a = f["-z-params"], a || (a = [], String(f).replace(/\(\s*([^()]+?)\s*\)/, function(n, r) {
                    a = r.split(/\s*,\s*/)
                }), f["-z-params"] = a), e(a, f);
                if ("string" == typeof f || "number" == typeof f) return f = t ? u(f) : f, "function" == typeof o ? (o.call(n, r(f)), n) : r(f);
                if ("object" == typeof f) {
                    if (f instanceof Array) return "function" == typeof o ? (i = [], f.forEach(function(n) {
                        i.push(r(t ? u(n) : n))
                    }), o.apply(n, i), n) : (i = {}, f.forEach(function(n) {
                        i[n] = r(t ? u(n) : n)
                    }), i);
                    if ("function" == typeof o) {
                        i = [];
                        for (c in f) i.push(r(t ? u(c) : c) || f[c]);
                        return n
                    }
                    i = {};
                    for (c in f) i[c] = r(t ? u(c) : c) || f[c];
                    return i
                }
            };
            return e
        };
        r.createGetter = t;
        var e = function(n, r, t) {
            return function(e, f) {
                if ("string" == typeof e || "number" == typeof e) r(t ? u(e) : e, f);
                else if ("object" == typeof e)
                    if (e instanceof Array) e.forEach(function(n, t) {
                        r(t, n)
                    });
                    else
                        for (var o in e) r(t ? u(o) : o, e[o]);
                return n
            }
        };
        r.createSetter = e;
        var f = function(n, r) {
            return n.replace(/#\{(.*?)\}/g, function(n, t) {
                return r && t in r ? r[t] : ""
            })
        };
        r.format = f;
        var o = function(n, r) {
            for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
            return n
        };
        r.extend = o;
        var i = function(n) {
            var r = [];
            return n.forEach(function(n) {
                n instanceof Array ? r = r.concat(i(n)) : r.push(n)
            }), r
        };
        r.flatten = i;
        var a = {},
            u = function(n) {
                if (!n || "string" != typeof n) return n;
                var r = a[n];
                return r ? r : (r = n.indexOf("-") < 0 && n.indexOf("_") < 0 ? n : n.replace(/[-_]+([a-z])/gi, function(n, r) {
                    return r.toUpperCase()
                }), a[n] = r, r)
            };
        r.camelCase = u;
        var c = function(n) {
            return String(n).replace(/[.*?^=$:|(){}\[\]\\\/]/g, "\\$&")
        };
        r.regexEncode = c
    })
}();
! function() {
    define(function(e, t) {
        var r = e("4"),
            n = 1,
            f = function(e) {
                var t = {
                        id: n++
                    },
                    f = {},
                    c = {},
                    i = {},
                    u = r.createSetter(i, function(e, t) {
                        var r = f[e];
                        r ? r.push(t) : f[e] = [t]
                    });
                i.on = u, i.un = r.createSetter(i, function(e, t) {
                    var r = f[e];
                    if (r) return f[e] = r.filter(function(e) {
                        return e !== t
                    }), i
                }), i.fire = function(e) {
                    var t = f[e];
                    if (t) {
                        for (var r = [], n = arguments, c = 1; c < n.length; c++) r.push(n[c]);
                        return t.forEach(function(e) {
                            e.apply(i, r)
                        }), i
                    }
                }, i.set = r.createSetter(i, function(e, r) {
                    if (r !== t[e]) {
                        "string" == typeof e && "function" == typeof r && e.indexOf("on") >= 0 && i.on(e.substring(2).toLowerCase(), r);
                        var n = t[e];
                        t[e] = r, i.fire("change", e, r, n)
                    }
                }, !0), i.get = r.createGetter(i, function(e) {
                    return t[e]
                }, !0), i.set(e);
                var a = r.createSetter(i, function(e, t) {
                    c[e] = t
                }, !0);
                return i.setSchema = a, i.getSchema = r.createGetter(i, function(e) {
                    return c[e]
                }, !0), i.free = function() {
                    i.fire("free"), t = {}, f = []
                }, i
            };
        t.create = f;
        var c = {};
        t.setClass = r.createSetter(t, function(e, t) {
            c[e] = t
        }), t.getClass = r.createGetter(t, function(e) {
            return c[e]
        })
    })
}();
! function() {
    define(function(t, e) {
        var n = t("5"),
            a = n,
            r = [],
            i = function(t) {
                var i = [],
                    o = a.create(t);
                o["class"] = e;
                var s, u, f, c, h, l, d, g;
                o.on("change", function(t, e) {
                    "origin" === t && (d = e, o.render())
                });
                var p = function(t) {
                        t.canvas.width = t.canvas.width, 1 !== g && t.scale(g, g), t.translate(.5, .5), d && t.translate(d.x, d.y), i.forEach(function(e) {
                            t.save(), t.beginPath(), e.get(["x", "y", "angle", "center", "alpha", "zoom"], function(e, n, a, r, i, o) {
                                "undefined" != typeof e && "undefined" != typeof n && t.translate(e, n), a && r && t.translate(r.x, r.y), "undefined" != typeof o && t.scale(o, o), a && t.rotate(a), a && r && t.translate(-r.x, -r.y), "undefined" != typeof i && (t.globalAlpha = i)
                            }), e.draw(t), t.restore()
                        })
                    },
                    y = function(t) {
                        i.forEach(function(e) {
                            var n = [];
                            d && n.push(utils.format("translate(#{x}, #{y})", d)), e.get(["node", "x", "y", "angle", "center", "alpha", "zoom"], function(a, r, i, o, s, u, f) {
                                "undefined" != typeof r && "undefined" != typeof i && n.push(utils.format("translate(#{x}, #{y})", {
                                    x: r,
                                    y: i
                                })), o && s && n.push(utils.format("translate(#{x}, #{y})", s)), "undefined" != typeof f && n.push(utils.format("scale(#{zoom})", {
                                    zoom: f
                                })), o && n.push(utils.format("rotate(#{angle})", {
                                    angle: o / (2 * Math.PI) * 360
                                })), o && s && n.push(utils.format("translate(#{x}, #{y})", {
                                    x: -s.x,
                                    y: -s.y
                                })), "undefined" != typeof u && a.setAttribute("opacity", u), n.length && a.setAttribute("transform", n.join(" ")), e.draw(t)
                            })
                        })
                    };
                o.render = function() {
                    return o.fire("render", s), o
                }, o.on("render", function(t) {
                    "canvas" == u ? p(t) : "svg" == u && y(t)
                });
                var v = function(t, e) {
                    1 === arguments.length && (e = t), h = isNaN(t) ? 0 : t, l = isNaN(e) ? 0 : e, o.set({
                        width: h,
                        height: l
                    }), f ? (f.width = h * g, f.height = l * g, f.style.width = h + "px", f.style.height = l + "px") : c && (c.style.width = h, c.style.height = l, c.setAttribute("width", h), c.setAttribute("height", l), c.setAttribute("viewBox", [.5, .5, h, l].join(" "))), o.fire("resize", h, l), o.render()
                };
                return o.resize = v, o.get(["layerNode", "width", "height", "origin", "hd"], function(t, e, a, r, h) {
                    g = "undefined" == typeof h ? 2 : h ? Number(h) : 1, "canvas" == t.tagName.toLowerCase() ? (u = "canvas", f = t, s = t.getContext("2d"), u = "canvas", s = t.getContext("2d"), o.set({
                        canvas: f
                    })) : t instanceof SVGElement && (u = "svg", s = t, "svg" === t.tagName && (c = t), [].forEach.call(t.querySelectorAll("*[mog-shape]"), function(t) {
                        var e = t.getAttribute("mog-shape") || t.id,
                            a = t.getAttribute("mog-shape-class"),
                            r = n.getClass(a),
                            o = r.create({
                                node: t
                            });
                        o.name = e, i.push(o)
                    })), o.set("context", s), d = r, e = e || t.getAttribute("width"), a = a || t.getAttribute("height"), (e || a) && v(e, a)
                }), o.push = function(t) {
                    return t instanceof Array ? i.push.apply(i, t) : i.push(t), o
                }, o.remove = function(t) {
                    return "*" === t ? (i = [], void("svg" === u && (s.innerHTML = ""))) : (i = i.filter(function(e) {
                        return e !== t
                    }), o)
                }, o.getShape = function(t) {
                    for (var e = 0; e < i.length; e++)
                        if (i[e].name == t) return i[e];
                    return null
                }, o.each = function(t) {
                    return i.forEach(function(e, n, a) {
                        t.call(o, e, n, a)
                    }), o
                }, o.on("free", function() {
                    r = r.filter(function(t) {
                        return t !== o
                    })
                }), r.push(o), o
            };
        e.create = i
    })
}();
! function() {
    define(function(t, a) {
        var n, e = t("4"),
            r = {},
            i = function(t) {
                if (r[t]) return r[t];
                if (!n) {
                    var a = document.createElement("canvas");
                    a.width = 1, a.height = 1, n = a.getContext("2d"), n.globalCompositeOperation = "copy"
                }
                n.fillStyle = t, n.fillRect(0, 0, 1, 1);
                var e = n.getImageData(0, 0, 1, 1).data;
                return r[t] = [e[0], e[1], e[2], e[3]], r[t]
            };
        a.rgba = i;
        var o = {},
            u = function(t) {
                if (o[t]) return o[t];
                var a = i(t),
                    n = a[0] / 255,
                    e = a[1] / 255,
                    r = a[2] / 255,
                    u = a[3] / 255,
                    f = Math.min(n, e, r),
                    c = Math.max(n, e, r),
                    m = (c + f) / 2,
                    l = 0;
                return c === f ? h = Number.NaN : l = .5 > m ? (c - f) / (c + f) : (c - f) / (2 - c - f), n === c ? h = (e - r) / (c - f) : e === c ? h = 2 + (r - n) / (c - f) : r === c && (h = 4 + (n - e) / (c - f)), h *= 60, h < 0 && (h += 360), o[t] = [h, 100 * l, 100 * m, u], o[t]
            };
        a.hsla = u;
        var f = function(t, a, n, r, h) {
            var o = i(a),
                u = i(n);
            return e.format("rgba(#{0}, #{1}, #{2}, #{3})", o.map(function(a, n) {
                return parseInt(Math.min(255, Math.max(h(t, a, u[n] - a, r), 0)))
            }))
        };
        a.tween = f
    })
}();
! function() {
    define(function() {
        var n = {
            linear: function(n, t, e, u) {
                return e * (n / u) + t
            },
            swing: function(t, e, u, a) {
                return n.easeOutQuad(t, e, u, a)
            },
            ease: function(t, e, u, a) {
                return n.easeInOutCubic(t, e, u, a)
            },
            easeInQuad: function(n, t, e, u) {
                return e * (n /= u) * n + t
            },
            easeOutQuad: function(n, t, e, u) {
                return -e * (n /= u) * (n - 2) + t
            },
            easeInOutQuad: function(n, t, e, u) {
                return (n /= u / 2) < 1 ? e / 2 * n * n + t : -e / 2 * (--n * (n - 2) - 1) + t
            },
            easeInCubic: function(n, t, e, u) {
                return e * (n /= u) * n * n + t
            },
            easeOutCubic: function(n, t, e, u) {
                return e * ((n = n / u - 1) * n * n + 1) + t
            },
            easeInOutCubic: function(n, t, e, u) {
                return (n /= u / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t
            },
            easeInQuart: function(n, t, e, u) {
                return e * (n /= u) * n * n * n + t
            },
            easeOutQuart: function(n, t, e, u) {
                return -e * ((n = n / u - 1) * n * n * n - 1) + t
            },
            easeInOutQuart: function(n, t, e, u) {
                return (n /= u / 2) < 1 ? e / 2 * n * n * n * n + t : -e / 2 * ((n -= 2) * n * n * n - 2) + t
            },
            easeInQuint: function(n, t, e, u) {
                return e * (n /= u) * n * n * n * n + t
            },
            easeOutQuint: function(n, t, e, u) {
                return e * ((n = n / u - 1) * n * n * n * n + 1) + t
            },
            easeInOutQuint: function(n, t, e, u) {
                return (n /= u / 2) < 1 ? e / 2 * n * n * n * n * n + t : e / 2 * ((n -= 2) * n * n * n * n + 2) + t
            },
            easeInSine: function(n, t, e, u) {
                return -e * Math.cos(n / u * (Math.PI / 2)) + e + t
            },
            easeOutSine: function(n, t, e, u) {
                return e * Math.sin(n / u * (Math.PI / 2)) + t
            },
            easeInOutSine: function(n, t, e, u) {
                return -e / 2 * (Math.cos(Math.PI * n / u) - 1) + t
            },
            easeInExpo: function(n, t, e, u) {
                return 0 === n ? t : e * Math.pow(2, 10 * (n / u - 1)) + t
            },
            easeOutExpo: function(n, t, e, u) {
                return n == u ? t + e : e * (-Math.pow(2, -10 * n / u) + 1) + t
            },
            easeInOutExpo: function(n, t, e, u) {
                return 0 === n ? t : n == u ? t + e : (n /= u / 2) < 1 ? e / 2 * Math.pow(2, 10 * (n - 1)) + t : e / 2 * (-Math.pow(2, -10 * --n) + 2) + t
            },
            easeInCirc: function(n, t, e, u) {
                return -e * (Math.sqrt(1 - (n /= u) * n) - 1) + t
            },
            easeOutCirc: function(n, t, e, u) {
                return e * Math.sqrt(1 - (n = n / u - 1) * n) + t
            },
            easeInOutCirc: function(n, t, e, u) {
                return (n /= u / 2) < 1 ? -e / 2 * (Math.sqrt(1 - n * n) - 1) + t : e / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t
            },
            easeInElastic: function(n, t, e, u) {
                var a = 1.70158,
                    r = 0,
                    i = e;
                return 0 === n ? t : 1 == (n /= u) ? t + e : (r || (r = .3 * u), i < Math.abs(e) ? (i = e, a = r / 4) : a = r / (2 * Math.PI) * Math.asin(e / i), -(i * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n * u - a) * Math.PI / r)) + t)
            },
            easeOutElastic: function(n, t, e, u) {
                var a = 1.70158,
                    r = 0,
                    i = e;
                return 0 === n ? t : 1 == (n /= u) ? t + e : (r || (r = .3 * u), i < Math.abs(e) ? (i = e, a = r / 4) : a = r / (2 * Math.PI) * Math.asin(e / i), i * Math.pow(2, -10 * n) * Math.sin(2 * (n * u - a) * Math.PI / r) + e + t)
            },
            easeInOutElastic: function(n, t, e, u) {
                var a = 1.70158,
                    r = 0,
                    i = e;
                if (0 === n) return t;
                if (2 == (n /= u / 2)) return t + e;
                r || (r = .3 * u * 1.5);
                var a;
                return i < Math.abs(e) ? (i = e, a = r / 4) : a = r / (2 * Math.PI) * Math.asin(e / i), 1 > n ? -.5 * i * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n * u - a) * Math.PI / r) + t : i * Math.pow(2, -10 * (n -= 1)) * Math.sin(2 * (n * u - a) * Math.PI / r) * .5 + e + t
            },
            easeInBack: function(n, t, e, u, a) {
                return void 0 == a && (a = 1.70158), e * (n /= u) * n * ((a + 1) * n - a) + t
            },
            easeOutBack: function(n, t, e, u, a) {
                return void 0 == a && (a = 1.70158), e * ((n = n / u - 1) * n * ((a + 1) * n + a) + 1) + t
            },
            easeInOutBack: function(n, t, e, u, a) {
                return void 0 == a && (a = 1.70158), (n /= u / 2) < 1 ? e / 2 * n * n * (((a *= 1.525) + 1) * n - a) + t : e / 2 * ((n -= 2) * n * (((a *= 1.525) + 1) * n + a) + 2) + t
            },
            easeInBounce: function(t, e, u, a) {
                return u - n.easeOutBounce(a - t, 0, u, a) + e
            },
            easeOutBounce: function(n, t, e, u) {
                return (n /= u) < 1 / 2.75 ? 7.5625 * e * n * n + t : 2 / 2.75 > n ? e * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + t : 2.5 / 2.75 > n ? e * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + t : e * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + t
            },
            easeInOutBounce: function(t, e, u, a) {
                return a / 2 > t ? .5 * n.easeInBounce(2 * t, 0, u, a) + e : .5 * n.easeOutBounce(2 * t - a, 0, u, a) + .5 * u + e
            }
        };
        return n
    })
}();
! function() {
    void
    function(n) {
        "use strict";

        function e(n) {
            1 === c.push(n) && (u = d(i))
        }

        function i() {
            var n = c;
            for (c = []; n.length;) r(n.pop());
            u = 0
        }

        function t(n) {
            var i = a(n);
            return e(i), i
        }

        function o(n) {
            var e = c.indexOf(n);
            ~e && c.splice(e, 1), 0 === c.length && w(u)
        }

        function a(n) {
            var i = {
                index: 0,
                time: +new Date,
                elapsed: 0,
                action: n,
                next: function() {
                    e(i)
                }
            };
            return i
        }

        function r(n) {
            var e = +new Date,
                i = e - n.time;
            n.dur = i, n.elapsed += i, n.time = e, n.action.call(null, n), n.index++
        }
        var u, m = m || {},
            d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function() {
                var n = 0,
                    e = +new Date;
                return function(i) {
                    var t = +new Date,
                        o = Math.max(0, 16 - (t - n)),
                        a = window.setTimeout(function() {
                            i(t - e)
                        }, o);
                    return n = t + o, a
                }
            }(),
            w = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout,
            c = [];
        m.request = t, m.release = o, "function" == typeof define ? (define.amd || define.cmd) && define(function() {
            return m
        }) : "undefined" != typeof module && module.exports ? module.exports = m : window[n] = m
    }("jframes")
}();
! function() {
    define(function(t, n) {
        var a = t("4"),
            e = t("7"),
            r = t("5"),
            i = t("8"),
            o = t("9"),
            f = r,
            c = function(t) {
                var r, c = f.create(t),
                    u = 0,
                    m = u;
                c.update = function(t) {
                    function n(t) {
                        t.get(["animationName", "animationDuration", "animationDelay", "animationTimingFunction", "animationIterationCount", "animationDirection"], function(n, a, o, f, v, s) {
                            if (o = o || 0, f = f || "linear", v = v || 1, s = s || "normal", o >= u || 0 === u) return void(r = !0);
                            var l, g = a * v + o;
                            if (u > g) {
                                if (!(g > m)) return;
                                l = g
                            }
                            r = !0, l = l || u;
                            var p = c.getKeyframe(n),
                                y = 0,
                                d = (l - o) / a;
                            "normal" === s || 0 === parseInt(d % 2) && d !== v ? (l = (l - o) % a, 0 === l && (l = a)) : (l = a - (l - o) % a, l === a && (l = 0)), p.forEach(function(t, n) {
                                a * t.time >= l || (y = n)
                            });
                            var K = p[y],
                                h = p[y + 1];
                            h || (h = K, K = p[y - 1]);
                            var D, w = (h.time - K.time) * a,
                                I = l - K.time * a,
                                N = {},
                                S = K.attrs;
                            D = "function" == typeof f ? f : i[f] || i.linear;
                            for (var q in S) {
                                var x = t.getSchema(q);
                                N[q] = x && "color" === x.format ? e.tween(I, S[q], h.attrs[q], w, D) : D(I, S[q], h.attrs[q] - S[q], w)
                            }
                            t.set(N)
                        })
                    }
                    m = u, u += t, r = !1;
                    var a = c.get("layers");
                    for (var o in a) {
                        var f = a[o],
                            v = !1;
                        f.each(function(t) {
                            t.get("animationName") && (n(t), v = !0)
                        }), v && f.render()
                    }
                };
                var v = "wait";
                c.start = function() {
                    v = "playing", u = 0, o.request(function(t) {
                        c.update(t.dur), r ? "playing" === v && t.next() : c.stop()
                    }), c.fire("start")
                }, c.stop = function() {
                    "playing" === v && c.fire("stop")
                };
                var s = {};
                return c.getKeyframe = a.createGetter(n, function(t) {
                    return s[t]
                }), c.setKeyframe = a.createSetter(n, function(t, n) {
                    s[t] = n
                }), c.clearKeyframe = function() {
                    s = {}
                }, c
            };
        n.create = c
    })
}();
! function() {
    define(function(e, t) {
        function n(e) {
            e = e || "", this.node = null, e instanceof NodeList ? (this.nodeList = e, this.node = e[0]) : e && e.tagName && "style" == e.tagName.toLowerCase() ? this.node = e : (this.node = document.createElement("style"), this.node.classList.add(".mog-generated-style"), u ? document.head.insertBefore(this.node, u.nextElementSibling) : document.head.insertBefore(this.node, document.head.querySelector("style")), u = this.node, this.node.textContent = e), this.update = function(e) {
                e && this.node && (this.node.textContent = e), e = this.nodeList ? [].map.call(this.nodeList, function(e) {
                    return e.textContent
                }).join("\n") : e || this.node && this.node.textContent || "", this.rules = s(e)
            }, this.remove = function() {
                this.rules = {}, this.node.parentNode && this.node.parentNode.removeChild(this.node)
            }, this.find = function(e) {
                "string" == typeof e && (e = new RegExp(e));
                for (var t in this.rules)
                    if (e.test(t)) return this.rules[t];
                return null
            }, this.update()
        }

        function i(e) {
            return new n(e)
        }

        function s(e) {
            var t = {};
            return e = String(e).replace(/(\/\*[^]+?\*\/)|(@-[^]+?}[\n]*})/g, ""), e.replace(/\s*([^\{]+?)\s*\{([^\}]+?)\s*\}/g, function(e, n, i) {
                var s = n.split(/,\s*/);
                s.forEach(function(e) {
                    /\S/.test(e) && (t[e] = t[e] || {}, r(t[e], i))
                })
            }), t
        }

        function r(e, t) {
            String(t).replace(/\s*([\w-]+)\s*\:\s*(.+?)(;|$)/g, function(t, n, i) {
                e[n] = e[a.camelCase(n)] = o(i)
            })
        }

        function o(e) {
            function t(e) {
                var i = e.split(/\s*,\s*/);
                return i.length > 1 ? {
                    type: "array",
                    value: i.map(t)
                } : (i = e.split(/\s+/), i.length > 1 ? {
                    type: "array",
                    value: i.map(t)
                } : n(e))
            }

            function n(e) {
                return e = e.replace(/\$\d+\$/g, function(e) {
                    return s[e]
                }), i(e)
            }

            function i(e) {
                return /^\s*([\d\.]+)(px|%|em|pt)?/i.test(e) ? {
                    type: RegExp.$2 || "number",
                    value: parseFloat(RegExp.$1, 10)
                } : {
                    type: /(rgb|hsl|#)/.test(e) ? "color" : "string",
                    value: e
                }
            }
            var s = {},
                r = 0;
            return e = String(e).replace(/\(([^()]*)\)/g, function(e) {
                var t = "$" + r++ + "$";
                return s[t] = e, t
            }), t(e)
        }
        var u, a = e("4");
        t.create = i, t.resolve = s, t.resolveValue = o
    })
}();
! function() {
    define(function(e, t) {
        var n = e("4"),
            r = e("5"),
            a = e("6"),
            i = e("10"),
            u = e("11"),
            o = r,
            f = !0,
            c = function(e) {
                function t(e, t, n) {
                    var r, a = h.get("style"),
                        i = y.rules,
                        o = l[g] && l[g].rules,
                        f = [];
                    f.push(a), f.push(i[t]), f.push(i[e]), o && (f.push(o[t]), f.push(o[e]));
                    for (var c; f.length;)
                        if (r = f.shift(), c = r && r[n], "undefined" != typeof c) return c && c.type ? c : "function" == typeof c ? {
                            type: "function",
                            value: c
                        } : u.resolveValue(c instanceof Array ? c.map(function(e) {
                            return e instanceof Array ? e.join(" ") : e
                        }).join(",") : c);
                    return null
                }

                function r(e, t, n) {
                    if ("array" == t.type) return t.value.map(function(t, n) {
                        return r(e, t, n)
                    });
                    var a = t.value;
                    return "%" == t.type ? (a = t.value / 100, void 0 !== n ? n % 2 ? v * a : m * a : -1 != e.toLowerCase().indexOf("height") ? m * a : v * a) : (-1 !== ["em", "pt", "mm"].indexOf(t.type) && (a += t.type), a)
                }
                var c, s, g, y, h = o.create(e),
                    d = {},
                    p = {},
                    v = {},
                    m = {},
                    S = n.createSetter(h, function(e, t) {
                        d[e] = t
                    }, !0);
                h.setStyleSchema = S, h.getStyleSchema = n.createGetter(h, function(e) {
                    return d[e]
                }, !0);
                var w;
                h.getLayer = n.createGetter(h, function(e) {
                    return p[e]
                });
                var A = function(e) {
                    var n = ".mog-" + g,
                        r = "#" + s + n;
                    return t(n, r, e)
                };
                h.getStyleRaw = A;
                var H = function(e, t, n) {
                    function a(e, t) {
                        return e instanceof Array || (e = [e]), "*" == t ? e : e[t % e.length]
                    }
                    var i = A(e);
                    if (i) {
                        if (i = r(e, i), "function" == typeof i) {
                            var u = h.get("data");
                            return isNaN(t) ? u.map(function(e, t) {
                                return e.map(function(e, n) {
                                    return i(t, n, u)
                                })
                            }) : isNaN(n) ? u[t].map(function(e, n) {
                                return i(t, n, u)
                            }) : i(t, n, u)
                        }
                        return (void 0 !== t || void 0 !== n) && (i = a(i, t), void 0 !== n && (i = a(i, n))), i
                    }
                    return "*" == t ? [] : null
                };
                h.getStyle = H;
                var N = function() {
                    v = c.clientWidth || h.get("width"), m = c.clientHeight || h.get("height"), h.set({
                        width: v,
                        height: m
                    });
                    for (var e in p) {
                        var t = p[e];
                        t.resize(h.getStyle(e + "-width") || v, h.getStyle(e + "-height") || m)
                    }
                    h.fire("resize")
                };
                h.resize = N;
                var b = {};
                h.setElement = n.createSetter(h, function(e, t) {
                    b[e] = t, [].forEach.call(c.querySelectorAll('*[mog-element="' + e + '"]'), function(e) {
                        e.innerHTML = t
                    })
                });
                var L = function(e, t) {
                        for (; e;) {
                            if (e.getAttribute) {
                                var n = e.getAttribute("mog-event-" + t);
                                if (n) return {
                                    name: n,
                                    data: e.getAttribute("mog-data"),
                                    target: e
                                }
                            }
                            if (e === c) return;
                            e = e.parentNode
                        }
                    },
                    E = i.create(),
                    q = function() {
                        E.setKeyframe.apply(E, arguments)
                    };
                h.setKeyframe = q;
                var D, z = function() {
                        "playing" !== D && (E.set({
                            layers: p
                        }), E.start(), h.fire("start", E), D = "playing")
                    },
                    C = function() {
                        for (var e in p) p[e].render()
                    };
                h.render = C;
                var G = function() {
                    C()
                };
                h.init = G, h.start = z;
                var M = function() {
                    "stop" !== D && (E.stop(), h.fire("stop", E), D = "stop")
                };
                h.stop = M, h.toggle = function() {
                    "playing" === D ? M() : z()
                };
                var R = function() {
                        for (var e in b)[].forEach.call(c.querySelectorAll('*[mog-element="' + e + '"]'), function(t) {
                            t.innerHTML = b[e]
                        });
                        h.fire("bind");
                        for (var t in p) p[t].free();
                        p = {}, v = c.clientWidth, m = c.clientHeight, [].forEach.call(c.querySelectorAll("*[mog-layer]"), function(e) {
                            var t = e.getAttribute("mog-layer"),
                                n = {
                                    layerNode: e,
                                    hd: w,
                                    width: h.getStyle(t + "-width") || v,
                                    height: h.getStyle(t + "-height") || m
                                },
                                r = a.create(n);
                            r.getStyle = function(e, n) {
                                return h.getStyle(t + "-" + e, n)
                            }, r.getStyleRaw = function(e) {
                                return h.getStyleRaw(t + "-" + e)
                            }, p[t] = r
                        }), N()
                    },
                    T = function(e) {
                        return e ? (c.innerHTML = e, N(), h) : h
                    },
                    j = function(e) {
                        return e ? (y.update(e), N(), h) : h
                    };
                return h.get(["container", "className", "html", "css", "hd"], function(e, t, n, r, a) {
                    if ("string" == typeof e && (e = document.querySelector(e), h.set("container", e)), c = e, g = t, w = "undefined" == typeof a ? f : a, c.classList.add("mog-" + g), s = c.getAttribute("id"), "undefined" != typeof Hammer) {
                        var i = new Hammer(c);
                        ["tap", "pan", "panstart", "panend"].forEach(function(e) {
                            i.on(e, function(t) {
                                var n = L(t.target, e);
                                n && h.fire(e, n.name, n.data, n.target, t)
                            })
                        })
                    }
                    y = u.create(r), 0 === c.childNodes.length && T(n), R()
                }), h.on("change", function(e, t) {
                    switch (e) {
                        case "html":
                            T(t), R();
                            break;
                        case "css":
                            j(t)
                    }
                }), h
            };
        t.create = c, t.setDefaultHD = function(e) {
            f = e
        };
        var l = {};
        t.setDefaultCss = n.createSetter(t, function(e, t) {
            l[e] = u.create(t)
        }), t.getDefaultCss = n.createGetter(t, function(e) {
            return l[e]
        })
    })
}();
! function() {
    define(function(n, r) {
        var e = n("5"),
            a = e,
            c = function(n) {
                var e = a.create(n);
                return e["class"] = r, e.draw = function(n) {
                    e.fire("draw", n)
                }, e
            };
        r.create = c
    })
}();
! function() {
    define(function(t, n) {
        var a = t("13"),
            e = a,
            r = function(t) {
                var n = e.create(t);
                return n.on("draw", function(t) {
                    n.get(["innerRadius", "outerRadius", "background"], function(n, a, e) {
                        t.fillStyle = e, t.beginPath(), t.arc(0, 0, a, 0, 2 * Math.PI, !0), t.arc(0, 0, n, 0, 2 * Math.PI, !1), t.closePath(), t.fill()
                    })
                }), n.setSchema({
                    color: {
                        type: "string",
                        format: "color"
                    }
                }), n
            };
        n.create = r
    })
}();
! function() {
    define(function(n, t) {
        var a = n("13"),
            e = a,
            r = function(n) {
                var t = e.create(n);
                return t.on("draw", function(n) {
                    t.get(["innerRadius", "outerRadius", "background", "sAngle", "eAngle", "style"], function(t, a, e, r, o, i) {
                        if (r !== o) {
                            t = t || 0, a = a || 100, e = e || "black", n.strokeStyle = e, n.lineWidth = a - t, "round" === i && (n.lineCap = "round"), n.beginPath();
                            var c = (a + t) / 2,
                                u = (a - t) / (2 * c),
                                d = Math.asin(u);
                            c = parseInt(c), (o - r > 2 * d || "normal" === i) && (o - r === 2 * Math.PI ? (n.lineCap = "butt", n.arc(0, 0, c, 0, 2 * Math.PI, !1)) : "round" === i ? n.arc(0, 0, c, r + d, o - d, !1) : n.arc(0, 0, c, r, o, !1)), n.stroke()
                        }
                    })
                }), t.setSchema({
                    background: {
                        type: "string",
                        format: "color"
                    }
                }), t
            };
        t.create = r
    })
}();
! function() {
    define(function(t, e) {
        var n = t("13"),
            i = n,
            o = function(t) {
                var e = i.create(t);
                return e.on("draw", function(t) {
                    e.get(["text", "color", "fontSize", "fontFamily", "textAlign", "textBaseline"], function(e, n, i, o, l, r) {
                        return void 0 === e ? !1 : (t.textAlign = l || "center", t.textBaseline = r || "middle", t.font = i + "px " + o, t.fillStyle = n, void t.fillText(e, 0, 0))
                    })
                }), e.get(["text", "color", "fontSize", "fontFamily", "textAlign", "textBaseline"], function(t, n, i, o, l, r) {
                    e.set("fontSize", i || 16), e.set("fontFamily", o || "Arial"), e.set("color", n || "white"), e.set("textAlign", l || "middle"), e.set("textBaseline", r || "middle");
                    var a = document.createElement("canvas").getContext("2d");
                    a.font = i + "px " + o;
                    var c = a.measureText(t);
                    e.set("width", c.width), e.set("height", i)
                }), e.setSchema({
                    color: {
                        type: "string",
                        format: "color"
                    }
                }), e
            };
        e.create = o
    })
}();
! function() {
    define(function(n, e) {
        var t = n("16"),
            i = t,
            o = function(n) {
                var e = i.create(n);
                return e.on("draw", function(n) {
                    e.get(["bind", "lineColor", "lineAngle", "lineLength", "text"], function(t, i, o, c, r) {
                        t && t.func.call(e, t.obj), n.strokeStyle = i
                    })
                }), e
            };
        e.create = o
    })
}();
! function() {
    define(function(e, t) {
        var a = e("12");
        e("14");
        var i = e("15"),
            n = e("17"),
            r = a,
            l = "pie-chart";
        a.setDefaultCss(l, "\n.mog-pie-chart{width:300px;margin:0 auto;plot-size:100%;pie-space:5;pie-outer-radius:50%;pie-inner-radius:20%;ring-background:rgba(22,191,201,.05),rgba(92,193,95,.05);fan-background:#19bcc6,#a9e810,#f5a932,#ee6969,#8d4ccf;fan-style:round;label-visibility:visible;label-color:#fff;label-font-size:12px;label-font-family:Arial;plot-animation:ease;plot-animation-duration:1000;plot-animation-timing-function:ease-in;plot-animation-delay:0}.mog-pie-chart .pie{width:100%;position:relative}.mog-pie-chart [mog-layer]{position:absolute;width:100%;height:100%;left:0;top:0}.mog-pie-chart .title{width:100%;height:100%;font-size:24px;position:absolute;text-align:center;color:#1cdadd;display:table}.mog-pie-chart .title p{vertical-align:middle;display:table-cell}.mog-pie-chart .title p span{font-size:8px}.mog-pie-chart .category{width:100%;text-align:center;font-size:10px}.mog-pie-chart .category span{display:inline-block}\n");
        var o = function(e) {
            function t() {
                o.remove("*"), s.remove("*");
                var e = a.getStyle("ring-background", "*"),
                    t = a.getStyle("label-color"),
                    r = a.getStyle("label-font-size"),
                    l = a.getStyle("label-font-family"),
                    g = a.getStyle("pie-space"),
                    c = a.getStyle("pie-outer-radius"),
                    u = a.getStyle("pie-inner-radius"),
                    h = a.getStyle("fan-style"),
                    p = a.getStyle("label-visibility");
                a.get(["container", "data", "title", "category", "dataRange"], function(d, f, y, m, v) {
                    var b = !0;
                    f.forEach(function(e) {
                        return e.length > 1 ? b = !1 : void 0
                    }), v = v || [0, 1], "auto" === v[0] && (v[0] = 0), "auto" === v[1] && (v[1] = 1);
                    var x = d.querySelector(".pie");
                    x.style.height = d.clientWidth + "px";
                    for (var S = a.getStyle("plot-size"), A = f.length, M = S / 2, R = S / 2, I = (c - u - g * (A - 1)) / A, z = function() {
                            for (var e = [], t = 0; A > t; t++) {
                                var a = u + t * (I + g);
                                e.push({
                                    innerRadius: a,
                                    outerRadius: a + I
                                })
                            }
                            return e
                        }(), P = 0; A > P; P++) {
                        var k = i.create({
                            x: parseInt(M),
                            y: parseInt(R),
                            sAngle: 0,
                            eAngle: 2 * Math.PI,
                            innerRadius: z[P].innerRadius,
                            outerRadius: z[P].outerRadius,
                            background: e[P % e.length]
                        });
                        o.push(k)
                    }
                    for (var w = S / 2, L = S / 2, C = s.getStyle("background", "*"), j = 0, q = [], B = 0; B < f.length; B++) {
                        for (var D = f[B], E = z[B], F = [], K = -Math.PI / 2, N = 0; N < D.length; N++) {
                            var W = D[N] / v[1],
                                G = "kfan" + j++,
                                H = 2 * Math.PI * W + K,
                                J = a.getStyle("plot-animation"),
                                O = a.getStyle("plot-animation-duration"),
                                Q = a.getStyle("plot-animation-timing-function"),
                                T = a.getStyle("plot-animation-delay"),
                                U = {
                                    x: w,
                                    y: L,
                                    innerRadius: E.innerRadius,
                                    outerRadius: E.outerRadius,
                                    background: 1 === f[0].length ? C[B % C.length] : C[N % C.length],
                                    percent: W,
                                    sAngle: -Math.PI / 2,
                                    eAngle: -Math.PI / 2,
                                    targetAngle: H,
                                    idx: N,
                                    style: h
                                };
                            K = H;
                            var V = i.create(U);
                            if (F.push(V), "none" !== J ? (a.setKeyframe(G, [{
                                    time: 0,
                                    attrs: {
                                        eAngle: -Math.PI / 2
                                    }
                                }, {
                                    time: 1,
                                    attrs: {
                                        eAngle: H
                                    }
                                }]), V.set({
                                    "animation-name": G,
                                    "animation-duration": O || 1e3,
                                    "animation-timing-function": Q || "linear",
                                    "animation-delay": T || 0
                                })) : V.set("eAngle", H), "visible" === p) {
                                var X = n.create({
                                    text: "",
                                    color: t,
                                    fontSize: r,
                                    fontFamily: l,
                                    textAlign: "center",
                                    bind: {
                                        obj: V,
                                        func: function(e) {
                                            var t = e.get("sAngle"),
                                                a = e.get("eAngle"),
                                                i = e.get("targetAngle"),
                                                n = e.get("percent"),
                                                l = a - t,
                                                o = l / (i + Math.PI / 2) * n,
                                                s = e.get("innerRadius"),
                                                g = e.get("outerRadius"),
                                                u = (s + g) / 2;
                                            if (this.set({
                                                    lineColor: e.get("background"),
                                                    lineAngle: a - Math.PI,
                                                    lineLength: (g - s + r) / 2
                                                }), o > 0) {
                                                o > n && (o = n);
                                                var h = parseInt(n * (o / n) * 100);
                                                this.set("text", h + "%")
                                            } else this.set("text", "");
                                            var p = a - Math.asin((g - s) / (2 * u));
                                            return n >= .04 ? this.set({
                                                x: e.get("x") + u * Math.cos(p),
                                                y: e.get("y") + u * Math.sin(p)
                                            }) : (this.set({
                                                x: e.get("x") + (c + 10) * Math.cos(a),
                                                y: e.get("y") + (c + 10) * Math.sin(a),
                                                textBaseline: "bottom"
                                            }), p >= -Math.PI / 2 && p < Math.PI / 2 ? this.set("textAlign", "left") : this.set("textAlign", "right")), !0
                                        }
                                    }
                                });
                                q.push(X)
                            }
                        }
                        s.push(F.reverse())
                    }
                    s.push(q), o.resize(S), s.resize(S)
                }), a.render()
            }
            e.html = e.html || '\n        <div class="pie">\n            <canvas mog-layer="ring"></canvas>\n            <canvas mog-layer="fan"></canvas>\n        </div>\n        ', e.className = l;
            var a = r.create(e),
                o = a.getLayer("ring"),
                s = a.getLayer("fan");
            return t(), a.on("resize", function() {
                t()
            }), a.on("change", function(e) {
                /data|css|dataRange/.test(e) && t()
            }), a
        };
        t.create = o
    })
}();
! function() {
    define(function(t, e) {
        function n(e, n, i, a, s) {
            s = s || {};
            var c = document.createElement("div");
            c.classList.add("lg-component-piechart"), c.style.width = i + "px", c.style.height = a + "px", e.appendChild(c);
            var r = t("18"),
                h = r.create({
                    hd: 1.6,
                    container: c,
                    width: i,
                    height: a,
                    title: "",
                    data: [
                        [.25, .05, .1],
                        [.05, .05, .1],
                        [.05, .05, .1]
                    ]
                });
            h.init();
            var o = {
                name: "饼图",
                attributeChange: function(t) {
                    var e = [];
                    String(t.data).split(/[\n\r]/).forEach(function(t) {
                        var n = [];
                        t.split(/\s*[,;]\s*/).forEach(function(t) {
                            n.push(+t)
                        }), e.push(n)
                    }), h.set({
                        data: e,
                        css: t.css
                    })
                },
                sizeChange: function(t, e) {
                    c.style.width = t + "px", c.style.height = e + "px", h.resize()
                },
                start: function() {
                    h.start()
                },
                stop: function() {
                    h.stop()
                }
            };
            return o.attributeChange(n), o.sizeChange(i, a), o
        }
        e.create = n
    })
}();
require("2").components.piechart = require("19");
! function() {
    define(function(e, t) {
        function n(e, t, n, a) {
            var i = document.createElement("div");
            i.classList.add("lg-component-label"), i.style.display = "table-cell";
            var l = {
                name: "文本",
                attributeChange: function(e) {
                    e = e || {}, i.innerHTML = e.html, i.style.verticalAlign = e.verticalAlign, this.name = i.textContent.substr(0, 10), i.style.textShadow = "true" === e.shadow ? [e.shadowOffsetX + "px", e.shadowOffsetY + "px", e.shadowBlur + "px", e.shadowColor].join(" ") : "none"
                },
                sizeChange: function(e, t) {
                    i.style.width = e + "px", i.style.height = t + "px"
                }
            };
            return l.attributeChange(t), l.sizeChange(n, a), e.appendChild(i), l
        }
        t.create = n
    })
}();
require("2").components.label = require("20");
