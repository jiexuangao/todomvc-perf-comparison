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


                if (r.border && "none" !== r.border) {
                    t = i = -r.borderSize, o.borderWidth = r.borderSize + "px";
                }
                if ("dx" in r) {
                    t += r.dx;
                    i += r.dy;
                }

                if (t || i) {
                    d += " translate3d(" + t + "px, " + i + "px, 0)";
                }

                if (r.rotate) {
                    d += "rotate(" + r.rotate + "deg)";
                }

                o.webkitTransform = o.transform = d;

                if (e === 'simple') {
                    return o;
                } else {
                    if (r.opacity < 1) {
                        o.opacity = r.opacity;
                    }

                    if ("ellipse" === r.shape) {
                        o.borderRadius = "50%";
                    } else {
                        if ("rect" == r.shape && r.borderRadius) {
                            o.borderRadius = r.borderRadius + "px";
                        }

                        if ("none" !== r.border) {
                            o.borderStyle = r.border, o.borderWidth = r.borderSize + "px", o.borderColor = r.borderColor
                        }

                        if ("true" === r.shadow) {
                            o.boxShadow = [
                                r.shadowOffsetX + "px",
                                r.shadowOffsetY + "px",
                                r.shadowBlur + "px",
                                r.shadowSpread + "px",
                                r.shadowColor
                            ].join(" ");
                        }

                        return o;
                    }
                }
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
                        e.style.marginTop = 0, /^(https?|mailto):/.test(t) ? window.location = t : /^#page(\d+)$/.test(t) && hubble.gotoPage(parseInt(RegExp.$1, 10) - 1)
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
                        var c = hubble.components[e.type];
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
            }, !1), hubble.swiper = r, hubble.isWeixin = o, hubble.gotoPage = function(e) {
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
            hubble = {
                version: "0.1.1",
                components: {}
            };
        hubble.init = function(e) {
            function t(components, type) {
                var html = "";
                switch (type) {
                    case "back":
                    case "front":
                        html += '<div class="lg-' + type + '-stage">';
                        break;
                    default:
                        html += '<div class="lg-page swiper-slide">'
                }
                html += '<div class="lg-backface"></div>';
                components && (html += new Array(components.length + 1).join('<div class="lg-trailer"><div class="lg-surface"></div></div>'));
                return html += "</div>"
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
            hubble.init = function() {}, document.querySelector(".lg-container").insertAdjacentHTML("beforeend", t(e.backStage.components, "back") + '<div class="lg-page-container swiper-container">' + n(e.pages) + a() + "</div>" + t(e.frontStage.components, "front"));
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
        hubble.getComponentsByName = function(e) {
            var t = [];
            return b.forEach(function(n) {
                (n.data.name === e || e instanceof RegExp && e.test(n.data.name) || e instanceof Array && e.indexOf(n.data.name) >= 0) && t.push(n)
            }), t
        };

        n.exports = window.hubble = hubble;
    })
}();

! function() {
    define(function(t, e) {
        function n(t, e, n, a) {
            var i = document.createElement("img");
            i.classList.add("lg-component-img");
            var r = {},
                s = {
                    name: "å›¾ç‰‡",
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
    define(function(e, t) {
        function n(e, t, n, a) {
            var i = document.createElement("div");
            i.classList.add("lg-component-label"), i.style.display = "table-cell";
            var hubble = {
                name: "æ–‡æœ¬",
                attributeChange: function(e) {
                    e = e || {}, i.innerHTML = e.html, i.style.verticalAlign = e.verticalAlign, this.name = i.textContent.substr(0, 10), i.style.textShadow = "true" === e.shadow ? [e.shadowOffsetX + "px", e.shadowOffsetY + "px", e.shadowBlur + "px", e.shadowColor].join(" ") : "none"
                },
                sizeChange: function(e, t) {
                    i.style.width = e + "px", i.style.height = t + "px"
                }
            };
            hubble.attributeChange(t);
            hubble.sizeChange(n, a);
            e.appendChild(i);
            return hubble;
        }
        t.create = n
    })
}();

require("2").components.label = require("4");