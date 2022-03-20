!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Tesseract = t())
    : (e.Tesseract = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 12))
    );
  })([
    function (e, t, r) {
      var n;
      !(function (o) {
        "use strict";
        function i(e, t, r) {
          var n,
            o = document.createElement("img");
          function a(t, a) {
            a && console.log(a),
              t && i.isInstanceOf("Blob", t)
                ? ((e = t), (n = i.createObjectURL(e)))
                : ((n = e),
                  r && r.crossOrigin && (o.crossOrigin = r.crossOrigin)),
              (o.src = n);
          }
          return (
            (o.onerror = function (a) {
              return i.onerror(o, a, e, n, t, r);
            }),
            (o.onload = function (a) {
              return i.onload(o, a, e, n, t, r);
            }),
            "string" == typeof e
              ? (i.hasMetaOption(r) ? i.fetchBlob(e, a, r) : a(), o)
              : i.isInstanceOf("Blob", e) || i.isInstanceOf("File", e)
              ? (n = i.createObjectURL(e))
                ? ((o.src = n), o)
                : i.readFile(e, function (e) {
                    var r = e.target;
                    r && r.result ? (o.src = r.result) : t && t(e);
                  })
              : void 0
          );
        }
        var a =
          (o.createObjectURL && o) ||
          (o.URL && URL.revokeObjectURL && URL) ||
          (o.webkitURL && webkitURL);
        function c(e, t) {
          !e ||
            "blob:" !== e.slice(0, 5) ||
            (t && t.noRevoke) ||
            i.revokeObjectURL(e);
        }
        (i.hasMetaOption = function (e) {
          return e && e.meta;
        }),
          (i.fetchBlob = function (e, t) {
            t();
          }),
          (i.isInstanceOf = function (e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]";
          }),
          (i.transform = function (e, t, r, n, o) {
            r(e, o);
          }),
          (i.onerror = function (e, t, r, n, o, i) {
            c(n, i), o && o.call(e, t);
          }),
          (i.onload = function (e, t, r, n, o, a) {
            c(n, a),
              o &&
                i.transform(e, a, o, r, {
                  originalWidth: e.naturalWidth || e.width,
                  originalHeight: e.naturalHeight || e.height,
                });
          }),
          (i.createObjectURL = function (e) {
            return !!a && a.createObjectURL(e);
          }),
          (i.revokeObjectURL = function (e) {
            return !!a && a.revokeObjectURL(e);
          }),
          (i.readFile = function (e, t, r) {
            if (o.FileReader) {
              var n = new FileReader();
              if (((n.onload = n.onerror = t), n[(r = r || "readAsDataURL")]))
                return n[r](e), n;
            }
            return !1;
          }),
          void 0 ===
            (n = function () {
              return i;
            }.call(t, r, t, e)) || (e.exports = n);
      })(("undefined" != typeof window && window) || this);
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                var t =
                  "undefined" != typeof Blob &&
                  (Blob.prototype.slice ||
                    Blob.prototype.webkitSlice ||
                    Blob.prototype.mozSlice);
                (e.blobSlice =
                  t &&
                  function () {
                    var e = this.slice || this.webkitSlice || this.mozSlice;
                    return e.apply(this, arguments);
                  }),
                  (e.metaDataParsers = { jpeg: { 65505: [], 65517: [] } }),
                  (e.parseMetaData = function (t, r, n, o) {
                    o = o || {};
                    var i = this,
                      a = (n = n || {}).maxMetaDataSize || 262144;
                    (!!(
                      "undefined" != typeof DataView &&
                      t &&
                      t.size >= 12 &&
                      "image/jpeg" === t.type &&
                      e.blobSlice
                    ) &&
                      e.readFile(
                        e.blobSlice.call(t, 0, a),
                        function (t) {
                          if (t.target.error)
                            return console.log(t.target.error), void r(o);
                          var a,
                            c,
                            s,
                            u,
                            l = t.target.result,
                            f = new DataView(l),
                            p = 2,
                            d = f.byteLength - 4,
                            h = p;
                          if (65496 === f.getUint16(0)) {
                            for (
                              ;
                              p < d &&
                              (((a = f.getUint16(p)) >= 65504 && a <= 65519) ||
                                65534 === a);

                            ) {
                              if (
                                p + (c = f.getUint16(p + 2) + 2) >
                                f.byteLength
                              ) {
                                console.log(
                                  "Invalid meta data: Invalid segment size."
                                );
                                break;
                              }
                              if (
                                (s = e.metaDataParsers.jpeg[a]) &&
                                !n.disableMetaDataParsers
                              )
                                for (u = 0; u < s.length; u += 1)
                                  s[u].call(i, f, p, c, o, n);
                              h = p += c;
                            }
                            !n.disableImageHead &&
                              h > 6 &&
                              (l.slice
                                ? (o.imageHead = l.slice(0, h))
                                : (o.imageHead = new Uint8Array(l).subarray(
                                    0,
                                    h
                                  )));
                          } else
                            console.log(
                              "Invalid JPEG file: Missing JPEG marker."
                            );
                          r(o);
                        },
                        "readAsArrayBuffer"
                      )) ||
                      r(o);
                  }),
                  (e.replaceHead = function (t, r, n) {
                    e.parseMetaData(
                      t,
                      function (o) {
                        n(
                          new Blob(
                            [r, e.blobSlice.call(t, o.imageHead.byteLength)],
                            { type: "image/jpeg" }
                          )
                        );
                      },
                      { maxMetaDataSize: 256, disableMetaDataParsers: !0 }
                    );
                  });
                var r = e.transform;
                e.transform = function (t, n, o, i, a) {
                  e.hasMetaOption(n)
                    ? e.parseMetaData(
                        i,
                        function (a) {
                          r.call(e, t, n, o, i, a);
                        },
                        n,
                        a
                      )
                    : r.apply(e, arguments);
                };
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t) {
      e.exports = function (e, t) {
        return ""
          .concat(e, "-")
          .concat(t, "-")
          .concat(Math.random().toString(16).slice(3, 8));
      };
    },
    function (e, t) {
      var r = this,
        n = !1;
      (t.logging = n),
        (t.setLogging = function (e) {
          n = e;
        }),
        (t.log = function () {
          for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          return n ? console.log.apply(r, t) : null;
        });
    },
    function (e, t) {
      var r,
        n,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          r = i;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          n = a;
        }
      })();
      var s,
        u = [],
        l = !1,
        f = -1;
      function p() {
        l &&
          s &&
          ((l = !1), s.length ? (u = s.concat(u)) : (f = -1), u.length && d());
      }
      function d() {
        if (!l) {
          var e = c(p);
          l = !0;
          for (var t = u.length; t; ) {
            for (s = u, u = []; ++f < t; ) s && s[f].run();
            (f = -1), (t = u.length);
          }
          (s = null),
            (l = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new h(e, t)), 1 !== u.length || l || c(d);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, r) {
      var n, o;
      void 0 ===
        (o =
          "function" ==
          typeof (n = function () {
            return function () {
              var e = arguments.length;
              if (0 === e)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var t = document.createElement("base");
              if (((t.href = arguments[0]), 1 === e)) return t.href;
              var r = document.getElementsByTagName("head")[0];
              r.insertBefore(t, r.firstChild);
              for (var n, o = document.createElement("a"), i = 1; i < e; i++)
                (o.href = arguments[i]), (n = o.href), (t.href = n);
              return r.removeChild(t), n;
            };
          })
            ? n.call(t, r, t, e)
            : n) || (e.exports = o);
    },
    function (e, t, r) {
      var n = r(2),
        o = 0;
      e.exports = function (e) {
        var t = e.id,
          r = e.action,
          i = e.payload,
          a = void 0 === i ? {} : i,
          c = t;
        return (
          void 0 === c && ((c = n("Job", o)), (o += 1)),
          { id: c, action: r, payload: a }
        );
      };
    },
    function (e, t, r) {
      function n(e, t, r, n, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, r);
            function c(e) {
              n(a, o, i, c, s, "next", e);
            }
            function s(e) {
              n(a, o, i, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                c(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = r(16),
        l = r(19),
        f = r(6),
        p = r(3).log,
        d = r(2),
        h = r(20).defaultOEM,
        g = r(21),
        m = g.defaultOptions,
        y = g.spawnWorker,
        b = g.terminateWorker,
        v = g.onMessage,
        w = g.loadImage,
        A = g.send,
        S = 0;
      e.exports = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = d("Worker", S),
          r = u(a({}, m, {}, e)),
          n = r.logger,
          i = r.errorHandler,
          c = s(r, ["logger", "errorHandler"]),
          g = {},
          O = {},
          x = y(c);
        S += 1;
        var E = function (e, t) {
            g[e] = t;
          },
          P = function (e, t) {
            O[e] = t;
          },
          j = function (e) {
            var r = e.id,
              n = e.action,
              o = e.payload;
            return new Promise(function (e, i) {
              p("[".concat(t, "]: Start ").concat(r, ", action=").concat(n)),
                E(n, e),
                P(n, i),
                A(x, { workerId: t, jobId: r, action: n, payload: o });
            });
          },
          k = function (e) {
            return j(f({ id: e, action: "load", payload: { options: c } }));
          },
          L = function (e, t, r) {
            return j(
              f({
                id: r,
                action: "FS",
                payload: { method: "writeFile", args: [e, t] },
              })
            );
          },
          R = function (e, t) {
            return j(
              f({
                id: t,
                action: "FS",
                payload: {
                  method: "readFile",
                  args: [e, { encoding: "utf8" }],
                },
              })
            );
          },
          I = function (e, t) {
            return j(
              f({
                id: t,
                action: "FS",
                payload: { method: "unlink", args: [e] },
              })
            );
          },
          D = function (e, t, r) {
            return j(
              f({ id: r, action: "FS", payload: { method: e, args: t } })
            );
          },
          T = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "eng",
              t = arguments.length > 1 ? arguments[1] : void 0;
            return j(
              f({
                id: t,
                action: "loadLanguage",
                payload: { langs: e, options: c },
              })
            );
          },
          C = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "eng",
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : h,
              r = arguments.length > 2 ? arguments[2] : void 0;
            return j(
              f({ id: r, action: "initialize", payload: { langs: e, oem: t } })
            );
          },
          B = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            return j(
              f({ id: t, action: "setParameters", payload: { params: e } })
            );
          },
          F = (function () {
            var e = o(
              regeneratorRuntime.mark(function e(t) {
                var r,
                  n,
                  o = arguments;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
                          (n = o.length > 2 ? o[2] : void 0),
                          (e.t0 = j),
                          (e.t1 = f),
                          (e.t2 = n),
                          (e.next = 7),
                          w(t)
                        );
                      case 7:
                        return (
                          (e.t3 = e.sent),
                          (e.t4 = r),
                          (e.t5 = { image: e.t3, options: e.t4 }),
                          (e.t6 = {
                            id: e.t2,
                            action: "recognize",
                            payload: e.t5,
                          }),
                          (e.t7 = (0, e.t1)(e.t6)),
                          e.abrupt("return", (0, e.t0)(e.t7))
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          M = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "Tesseract OCR Result",
              t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = arguments.length > 2 ? arguments[2] : void 0;
            return j(
              f({ id: r, action: "getPDF", payload: { title: e, textonly: t } })
            );
          },
          U = (function () {
            var e = o(
              regeneratorRuntime.mark(function e(t, r) {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = j), (e.t1 = f), (e.t2 = r), (e.next = 5), w(t)
                        );
                      case 5:
                        return (
                          (e.t3 = e.sent),
                          (e.t4 = { image: e.t3 }),
                          (e.t5 = {
                            id: e.t2,
                            action: "detect",
                            payload: e.t4,
                          }),
                          (e.t6 = (0, e.t1)(e.t5)),
                          e.abrupt("return", (0, e.t0)(e.t6))
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, r) {
              return e.apply(this, arguments);
            };
          })(),
          N = (function () {
            var e = o(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          null !== x && (b(x), (x = null)),
                          e.abrupt("return", Promise.resolve())
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          v(x, function (e) {
            var t = e.workerId,
              r = e.jobId,
              o = e.status,
              c = e.action,
              s = e.data;
            if ("resolve" === o) {
              p("[".concat(t, "]: Complete ").concat(r));
              var u = s;
              "recognize" === c
                ? (u = l(s))
                : "getPDF" === c &&
                  (u = Array.from(a({}, s, { length: Object.keys(s).length }))),
                g[c]({ jobId: r, data: u });
            } else if ("reject" === o) {
              if ((O[c](s), !i)) throw Error(s);
              i(s);
            } else "progress" === o && n(a({}, s, { userJobId: r }));
          }),
          {
            id: t,
            worker: x,
            setResolve: E,
            setReject: P,
            load: k,
            writeText: L,
            readText: R,
            removeFile: I,
            FS: D,
            loadLanguage: T,
            initialize: C,
            setParameters: B,
            recognize: F,
            getPDF: M,
            detect: U,
            terminate: N,
          }
        );
      };
    },
    function (e, t) {
      e.exports = {
        TESSERACT_ONLY: 0,
        LSTM_ONLY: 1,
        TESSERACT_LSTM_COMBINED: 2,
        DEFAULT: 3,
      };
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                var t = e.transform;
                (e.transform = function (r, n, o, i, a) {
                  t.call(e, e.scale(r, n, a), n, o, i, a);
                }),
                  (e.transformCoordinates = function () {}),
                  (e.getTransformedOptions = function (e, t) {
                    var r,
                      n,
                      o,
                      i,
                      a = t.aspectRatio;
                    if (!a) return t;
                    for (n in ((r = {}), t))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (r[n] = t[n]);
                    return (
                      (r.crop = !0),
                      (o = e.naturalWidth || e.width) /
                        (i = e.naturalHeight || e.height) >
                      a
                        ? ((r.maxWidth = i * a), (r.maxHeight = i))
                        : ((r.maxWidth = o), (r.maxHeight = o / a)),
                      r
                    );
                  }),
                  (e.renderImageToCanvas = function (
                    e,
                    t,
                    r,
                    n,
                    o,
                    i,
                    a,
                    c,
                    s,
                    u,
                    l
                  ) {
                    var f = e.getContext("2d");
                    return (
                      !1 === l.imageSmoothingEnabled
                        ? (f.imageSmoothingEnabled = !1)
                        : l.imageSmoothingQuality &&
                          (f.imageSmoothingQuality = l.imageSmoothingQuality),
                      f.drawImage(t, r, n, o, i, a, c, s, u),
                      e
                    );
                  }),
                  (e.hasCanvasOption = function (e) {
                    return e.canvas || e.crop || !!e.aspectRatio;
                  }),
                  (e.scale = function (t, r, n) {
                    r = r || {};
                    var o,
                      i,
                      a,
                      c,
                      s,
                      u,
                      l,
                      f,
                      p,
                      d,
                      h,
                      g = document.createElement("canvas"),
                      m =
                        t.getContext || (e.hasCanvasOption(r) && g.getContext),
                      y = t.naturalWidth || t.width,
                      b = t.naturalHeight || t.height,
                      v = y,
                      w = b;
                    function A() {
                      var e = Math.max((a || v) / v, (c || w) / w);
                      e > 1 && ((v *= e), (w *= e));
                    }
                    function S() {
                      var e = Math.min((o || v) / v, (i || w) / w);
                      e < 1 && ((v *= e), (w *= e));
                    }
                    if (
                      (m &&
                        ((l = (r = e.getTransformedOptions(t, r, n)).left || 0),
                        (f = r.top || 0),
                        r.sourceWidth
                          ? ((s = r.sourceWidth),
                            void 0 !== r.right &&
                              void 0 === r.left &&
                              (l = y - s - r.right))
                          : (s = y - l - (r.right || 0)),
                        r.sourceHeight
                          ? ((u = r.sourceHeight),
                            void 0 !== r.bottom &&
                              void 0 === r.top &&
                              (f = b - u - r.bottom))
                          : (u = b - f - (r.bottom || 0)),
                        (v = s),
                        (w = u)),
                      (o = r.maxWidth),
                      (i = r.maxHeight),
                      (a = r.minWidth),
                      (c = r.minHeight),
                      m && o && i && r.crop
                        ? ((v = o),
                          (w = i),
                          (h = s / u - o / i) < 0
                            ? ((u = (i * s) / o),
                              void 0 === r.top &&
                                void 0 === r.bottom &&
                                (f = (b - u) / 2))
                            : h > 0 &&
                              ((s = (o * u) / i),
                              void 0 === r.left &&
                                void 0 === r.right &&
                                (l = (y - s) / 2)))
                        : ((r.contain || r.cover) &&
                            ((a = o = o || a), (c = i = i || c)),
                          r.cover ? (S(), A()) : (A(), S())),
                      m)
                    ) {
                      if (
                        ((p = r.pixelRatio) > 1 &&
                          ((g.style.width = v + "px"),
                          (g.style.height = w + "px"),
                          (v *= p),
                          (w *= p),
                          g.getContext("2d").scale(p, p)),
                        (d = r.downsamplingRatio) > 0 &&
                          d < 1 &&
                          v < s &&
                          w < u)
                      )
                        for (; s * d > v; )
                          (g.width = s * d),
                            (g.height = u * d),
                            e.renderImageToCanvas(
                              g,
                              t,
                              l,
                              f,
                              s,
                              u,
                              0,
                              0,
                              g.width,
                              g.height,
                              r
                            ),
                            (l = 0),
                            (f = 0),
                            (s = g.width),
                            (u = g.height),
                            ((t = document.createElement("canvas")).width = s),
                            (t.height = u),
                            e.renderImageToCanvas(
                              t,
                              g,
                              0,
                              0,
                              s,
                              u,
                              0,
                              0,
                              s,
                              u,
                              r
                            );
                      return (
                        (g.width = v),
                        (g.height = w),
                        e.transformCoordinates(g, r),
                        e.renderImageToCanvas(g, t, l, f, s, u, 0, 0, v, w, r)
                      );
                    }
                    return (t.width = v), (t.height = w), t;
                  });
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0), r(1)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                function t(e) {
                  e &&
                    (Object.defineProperty(this, "map", {
                      value: this.privateIFDs[e].map,
                    }),
                    Object.defineProperty(this, "tags", {
                      value: (this.tags && this.tags[e]) || {},
                    }));
                }
                (t.prototype.map = {
                  Orientation: 274,
                  Thumbnail: 513,
                  Exif: 34665,
                  GPSInfo: 34853,
                  Interoperability: 40965,
                }),
                  (t.prototype.privateIFDs = {
                    34665: { name: "Exif", map: {} },
                    34853: { name: "GPSInfo", map: {} },
                    40965: { name: "Interoperability", map: {} },
                  }),
                  (t.prototype.get = function (e) {
                    return this[e] || this[this.map[e]];
                  });
                var r = {
                  1: {
                    getValue: function (e, t) {
                      return e.getUint8(t);
                    },
                    size: 1,
                  },
                  2: {
                    getValue: function (e, t) {
                      return String.fromCharCode(e.getUint8(t));
                    },
                    size: 1,
                    ascii: !0,
                  },
                  3: {
                    getValue: function (e, t, r) {
                      return e.getUint16(t, r);
                    },
                    size: 2,
                  },
                  4: {
                    getValue: function (e, t, r) {
                      return e.getUint32(t, r);
                    },
                    size: 4,
                  },
                  5: {
                    getValue: function (e, t, r) {
                      return e.getUint32(t, r) / e.getUint32(t + 4, r);
                    },
                    size: 8,
                  },
                  9: {
                    getValue: function (e, t, r) {
                      return e.getInt32(t, r);
                    },
                    size: 4,
                  },
                  10: {
                    getValue: function (e, t, r) {
                      return e.getInt32(t, r) / e.getInt32(t + 4, r);
                    },
                    size: 8,
                  },
                };
                function n(e, t, n, o, i, a) {
                  var c,
                    s,
                    u,
                    l,
                    f,
                    p,
                    d = r[o];
                  if (d) {
                    if (
                      !(
                        (s =
                          (c = d.size * i) > 4
                            ? t + e.getUint32(n + 8, a)
                            : n + 8) +
                          c >
                        e.byteLength
                      )
                    ) {
                      if (1 === i) return d.getValue(e, s, a);
                      for (u = [], l = 0; l < i; l += 1)
                        u[l] = d.getValue(e, s + l * d.size, a);
                      if (d.ascii) {
                        for (
                          f = "", l = 0;
                          l < u.length && "\0" !== (p = u[l]);
                          l += 1
                        )
                          f += p;
                        return f;
                      }
                      return u;
                    }
                    console.log("Invalid Exif data: Invalid data offset.");
                  } else console.log("Invalid Exif data: Invalid tag type.");
                }
                function o(e, t, r, o, i, a, c, s) {
                  var u, l, f, p, d, h;
                  if (r + 6 > e.byteLength)
                    console.log("Invalid Exif data: Invalid directory offset.");
                  else {
                    if (
                      !(
                        (l = r + 2 + 12 * (u = e.getUint16(r, o))) + 4 >
                        e.byteLength
                      )
                    ) {
                      for (f = 0; f < u; f += 1)
                        (p = r + 2 + 12 * f),
                          (d = e.getUint16(p, o)),
                          (c && !c[d]) ||
                            (s && !0 === s[d]) ||
                            ((h = n(
                              e,
                              t,
                              p,
                              e.getUint16(p + 2, o),
                              e.getUint32(p + 4, o),
                              o
                            )),
                            (i[d] = h),
                            a && (a[d] = p));
                      return e.getUint32(l, o);
                    }
                    console.log("Invalid Exif data: Invalid directory size.");
                  }
                }
                (r[7] = r[1]),
                  (e.parseExifData = function (e, r, n, i, a) {
                    if (!a.disableExif) {
                      var c,
                        s,
                        u = a.includeExifTags,
                        l = a.excludeExifTags || { 34665: { 37500: !0 } },
                        f = r + 10;
                      if (1165519206 === e.getUint32(r + 4))
                        if (f + 8 > e.byteLength)
                          console.log(
                            "Invalid Exif data: Invalid segment size."
                          );
                        else if (0 === e.getUint16(r + 8)) {
                          switch (e.getUint16(f)) {
                            case 18761:
                              c = !0;
                              break;
                            case 19789:
                              c = !1;
                              break;
                            default:
                              return void console.log(
                                "Invalid Exif data: Invalid byte alignment marker."
                              );
                          }
                          42 === e.getUint16(f + 2, c)
                            ? ((s = e.getUint32(f + 4, c)),
                              (i.exif = new t()),
                              a.disableExifOffsets ||
                                ((i.exifOffsets = new t()),
                                (i.exifTiffOffset = f),
                                (i.exifLittleEndian = c)),
                              (s = o(
                                e,
                                f,
                                f + s,
                                c,
                                i.exif,
                                i.exifOffsets,
                                u,
                                l
                              )) &&
                                !a.disableExifThumbnail &&
                                ((s = o(
                                  e,
                                  f,
                                  f + s,
                                  c,
                                  i.exif,
                                  i.exifOffsets,
                                  u,
                                  l
                                )),
                                i.exif[513] &&
                                  i.exif[514] &&
                                  (i.exif[513] = (function (e, t, r) {
                                    if (r && !(t + r > e.byteLength))
                                      return new Blob(
                                        [e.buffer.slice(t, t + r)],
                                        { type: "image/jpeg" }
                                      );
                                    console.log(
                                      "Invalid Exif data: Invalid thumbnail data."
                                    );
                                  })(e, f + i.exif[513], i.exif[514]))),
                              Object.keys(i.exif.privateIFDs).forEach(function (
                                r
                              ) {
                                !(function (e, r, n, i, a, c, s) {
                                  var u = e.exif[r];
                                  u &&
                                    ((e.exif[r] = new t(r)),
                                    e.exifOffsets &&
                                      (e.exifOffsets[r] = new t(r)),
                                    o(
                                      n,
                                      i,
                                      i + u,
                                      a,
                                      e.exif[r],
                                      e.exifOffsets && e.exifOffsets[r],
                                      c && c[r],
                                      s && s[r]
                                    ));
                                })(i, r, e, f, c, u, l);
                              }))
                            : console.log(
                                "Invalid Exif data: Missing TIFF marker."
                              );
                        } else
                          console.log(
                            "Invalid Exif data: Missing byte alignment offset."
                          );
                    }
                  }),
                  e.metaDataParsers.jpeg[65505].push(e.parseExifData),
                  (e.exifWriters = {
                    274: function (e, t, r) {
                      return (
                        new DataView(e, t.exifOffsets[274] + 8, 2).setUint16(
                          0,
                          r,
                          t.exifLittleEndian
                        ),
                        e
                      );
                    },
                  }),
                  (e.writeExifData = function (t, r, n, o) {
                    e.exifWriters[r.exif.map[n]](t, r, o);
                  }),
                  (e.ExifMap = t);
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0), r(1)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                function t() {}
                function r(e, t, r, n, o) {
                  return "binary" === t.types[e]
                    ? new Blob([r.buffer.slice(n, n + o)])
                    : "Uint16" === t.types[e]
                    ? r.getUint16(n)
                    : (function (e, t, r) {
                        for (var n = "", o = t + r, i = t; i < o; i += 1)
                          n += String.fromCharCode(e.getUint8(i));
                        return n;
                      })(r, n, o);
                }
                function n(e, t) {
                  return void 0 === e
                    ? t
                    : e instanceof Array
                    ? (e.push(t), e)
                    : [e, t];
                }
                function o(e, t, o, i, a, c) {
                  for (var s, u, l, f = t + o, p = t; p < f; )
                    28 === e.getUint8(p) &&
                      2 === e.getUint8(p + 1) &&
                      ((l = e.getUint8(p + 2)),
                      (a && !a[l]) ||
                        (c && c[l]) ||
                        ((u = e.getInt16(p + 3)),
                        (s = r(l, i.iptc, e, p + 5, u)),
                        (i.iptc[l] = n(i.iptc[l], s)),
                        i.iptcOffsets && (i.iptcOffsets[l] = p))),
                      (p += 1);
                }
                function i(e, t) {
                  return (
                    943868237 === e.getUint32(t) && 1028 === e.getUint16(t + 4)
                  );
                }
                function a(e, t) {
                  var r = e.getUint8(t + 7);
                  return r % 2 != 0 && (r += 1), 0 === r && (r = 4), r;
                }
                (t.prototype.map = { ObjectName: 5 }),
                  (t.prototype.types = {
                    0: "Uint16",
                    200: "Uint16",
                    201: "Uint16",
                    202: "binary",
                  }),
                  (t.prototype.get = function (e) {
                    return this[e] || this[this.map[e]];
                  }),
                  (e.parseIptcData = function (e, r, n, c, s) {
                    if (!s.disableIptc)
                      for (var u = r + n; r + 8 < u; ) {
                        if (i(e, r)) {
                          var l = a(e, r),
                            f = r + 8 + l;
                          if (f > u) {
                            console.log(
                              "Invalid IPTC data: Invalid segment offset."
                            );
                            break;
                          }
                          var p = e.getUint16(r + 6 + l);
                          if (r + p > u) {
                            console.log(
                              "Invalid IPTC data: Invalid segment size."
                            );
                            break;
                          }
                          return (
                            (c.iptc = new t()),
                            s.disableIptcOffsets || (c.iptcOffsets = new t()),
                            void o(
                              e,
                              f,
                              p,
                              c,
                              s.includeIptcTags,
                              s.excludeIptcTags || { 202: !0 }
                            )
                          );
                        }
                        r += 1;
                      }
                  }),
                  e.metaDataParsers.jpeg[65517].push(e.parseIptcData),
                  (e.IptcMap = t);
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r(13);
      var i = r(15),
        a = r(7),
        c = r(35),
        s = r(36),
        u = r(8),
        l = r(37),
        f = r(3).setLogging;
      e.exports = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })(
        {
          languages: s,
          OEM: u,
          PSM: l,
          createScheduler: i,
          createWorker: a,
          setLogging: f,
        },
        c
      );
    },
    function (e, t, r) {
      (function (e) {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var r = (function (e) {
          "use strict";
          var r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function s(e, t, r, n) {
            var o = t && t.prototype instanceof f ? t : f,
              i = Object.create(o.prototype),
              a = new O(n || []);
            return (
              (i._invoke = (function (e, t, r) {
                var n = "suspendedStart";
                return function (o, i) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return E();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var c = w(a, r);
                      if (c) {
                        if (c === l) continue;
                        return c;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = u(e, t, r);
                    if ("normal" === s.type) {
                      if (
                        ((n = r.done ? "completed" : "suspendedYield"),
                        s.arg === l)
                      )
                        continue;
                      return { value: s.arg, done: r.done };
                    }
                    "throw" === s.type &&
                      ((n = "completed"),
                      (r.method = "throw"),
                      (r.arg = s.arg));
                  }
                };
              })(e, r, a)),
              i
            );
          }
          function u(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = s;
          var l = {};
          function f() {}
          function p() {}
          function d() {}
          var h = {};
          h[i] = function () {
            return this;
          };
          var g = Object.getPrototypeOf,
            m = g && g(g(x([])));
          m && m !== r && n.call(m, i) && (h = m);
          var y = (d.prototype = f.prototype = Object.create(h));
          function b(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function v(e) {
            var r;
            this._invoke = function (o, i) {
              function a() {
                return new Promise(function (r, a) {
                  !(function r(o, i, a, c) {
                    var s = u(e[o], e, i);
                    if ("throw" !== s.type) {
                      var l = s.arg,
                        f = l.value;
                      return f && "object" === t(f) && n.call(f, "__await")
                        ? Promise.resolve(f.__await).then(
                            function (e) {
                              r("next", e, a, c);
                            },
                            function (e) {
                              r("throw", e, a, c);
                            }
                          )
                        : Promise.resolve(f).then(
                            function (e) {
                              (l.value = e), a(l);
                            },
                            function (e) {
                              return r("throw", e, a, c);
                            }
                          );
                    }
                    c(s.arg);
                  })(o, i, r, a);
                });
              }
              return (r = r ? r.then(a, a) : a());
            };
          }
          function w(e, t) {
            var r = e.iterator[t.method];
            if (void 0 === r) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = void 0),
                  w(e, t),
                  "throw" === t.method)
                )
                  return l;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return l;
            }
            var n = u(r, e.iterator, t.arg);
            if ("throw" === n.type)
              return (
                (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l
              );
            var o = n.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method &&
                    ((t.method = "next"), (t.arg = void 0)),
                  (t.delegate = null),
                  l)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                l);
          }
          function A(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function S(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(A, this),
              this.reset(!0);
          }
          function x(e) {
            if (e) {
              var t = e[i];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  o = function t() {
                    for (; ++r < e.length; )
                      if (n.call(e, r))
                        return (t.value = e[r]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (o.next = o);
              }
            }
            return { next: E };
          }
          function E() {
            return { value: void 0, done: !0 };
          }
          return (
            (p.prototype = y.constructor = d),
            (d.constructor = p),
            (d[c] = p.displayName = "GeneratorFunction"),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === p || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, d)
                  : ((e.__proto__ = d), c in e || (e[c] = "GeneratorFunction")),
                (e.prototype = Object.create(y)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            b(v.prototype),
            (v.prototype[a] = function () {
              return this;
            }),
            (e.AsyncIterator = v),
            (e.async = function (t, r, n, o) {
              var i = new v(s(t, r, n, o));
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            b(y),
            (y[c] = "Generator"),
            (y[i] = function () {
              return this;
            }),
            (y.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = x),
            (O.prototype = {
              constructor: O,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(S),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      n.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;
                function r(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (t.next = r),
                    n && ((t.method = "next"), (t.arg = void 0)),
                    !!n
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i.completion;
                  if ("root" === i.tryLoc) return r("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      s = n.call(i, "finallyLoc");
                    if (c && s) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  l
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), S(r), l;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      S(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, r) {
                return (
                  (this.delegate = {
                    iterator: x(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  l
                );
              },
            }),
            e
          );
        })("object" === t(e) ? e.exports : {});
        try {
          regeneratorRuntime = r;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(r);
        }
      }.call(this, r(14)(e)));
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, r) {
      var n = this;
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t];
              return r;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function i(e, t, r, n, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function a(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function c(e) {
              i(a, n, o, c, s, "next", e);
            }
            function s(e) {
              i(a, n, o, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      var c = r(6),
        s = r(3).log,
        u = r(2),
        l = 0;
      e.exports = function () {
        var e = u("Scheduler", l),
          t = {},
          r = {},
          i = [];
        l += 1;
        var f = function () {
            return Object.keys(t).length;
          },
          p = function () {
            if (0 !== i.length)
              for (var e = Object.keys(t), n = 0; n < e.length; n += 1)
                if (void 0 === r[e[n]]) {
                  i[0](t[e[n]]);
                  break;
                }
          },
          d = function (t, u) {
            return new Promise(function (l, f) {
              var d = c({ action: t, payload: u });
              i.push(
                (function () {
                  var e = a(
                    regeneratorRuntime.mark(function e(a) {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  i.shift(),
                                  (r[a.id] = d),
                                  (e.prev = 2),
                                  (e.t0 = l),
                                  (e.next = 6),
                                  a[t].apply(n, [].concat(o(u), [d.id]))
                                );
                              case 6:
                                (e.t1 = e.sent), (0, e.t0)(e.t1), (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10), (e.t2 = e.catch(2)), f(e.t2);
                              case 13:
                                return (
                                  (e.prev = 13),
                                  delete r[a.id],
                                  p(),
                                  e.finish(13)
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[2, 10, 13, 17]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
                s("[".concat(e, "]: Add ").concat(d.id, " to JobQueue")),
                s("[".concat(e, "]: JobQueue length=").concat(i.length)),
                p();
            });
          };
        return {
          addWorker: function (r) {
            return (
              (t[r.id] = r),
              s("[".concat(e, "]: Add ").concat(r.id)),
              s("[".concat(e, "]: Number of workers=").concat(f())),
              p(),
              r.id
            );
          },
          addJob: (function () {
            var t = a(
              regeneratorRuntime.mark(function t(r) {
                var n,
                  o,
                  i,
                  a = arguments;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (0 !== f()) {
                          t.next = 2;
                          break;
                        }
                        throw Error(
                          "[".concat(
                            e,
                            "]: You need to have at least one worker before adding jobs"
                          )
                        );
                      case 2:
                        for (
                          n = a.length, o = new Array(n > 1 ? n - 1 : 0), i = 1;
                          i < n;
                          i++
                        )
                          o[i - 1] = a[i];
                        return t.abrupt("return", d(r, o));
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          terminate: (function () {
            var e = a(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        Object.keys(t).forEach(
                          (function () {
                            var e = a(
                              regeneratorRuntime.mark(function e(r) {
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), t[r].terminate();
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        ),
                          (i = []);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          getQueueLen: function () {
            return i.length;
          },
          getNumWorkers: f,
        };
      };
    },
    function (e, t, r) {
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var i =
        "browser" === r(17)("type")
          ? r(5)
          : function (e) {
              return e;
            };
      e.exports = function (e) {
        var t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? n(Object(r), !0).forEach(function (t) {
                  o(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })({}, e);
        return (
          ["corePath", "workerPath", "langPath"].forEach(function (r) {
            void 0 !== e[r] && (t[r] = i(t[r]));
          }),
          t
        );
      };
    },
    function (e, t, r) {
      (function (t) {
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var o = r(18);
        e.exports = function (e) {
          var r = {};
          return (
            "undefined" != typeof WorkerGlobalScope
              ? (r.type = "webworker")
              : o()
              ? (r.type = "electron")
              : "object" ===
                ("undefined" == typeof window ? "undefined" : n(window))
              ? (r.type = "browser")
              : "object" === (void 0 === t ? "undefined" : n(t)) &&
                (r.type = "node"),
            void 0 === e ? r : r[e]
          );
        };
      }.call(this, r(4)));
    },
    function (e, t, r) {
      (function (t) {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e.exports = function () {
          return (
            ("undefined" != typeof window &&
              "object" === r(window.process) &&
              "renderer" === window.process.type) ||
            !(
              void 0 === t ||
              "object" !== r(t.versions) ||
              !t.versions.electron
            ) ||
            ("object" ===
              ("undefined" == typeof navigator ? "undefined" : r(navigator)) &&
              "string" == typeof navigator.userAgent &&
              navigator.userAgent.indexOf("Electron") >= 0)
          );
        };
      }.call(this, r(4)));
    },
    function (e, t) {
      function r(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      e.exports = function (e) {
        var t = [],
          r = [],
          o = [],
          i = [],
          a = [];
        return (
          e.blocks.forEach(function (c) {
            c.paragraphs.forEach(function (t) {
              t.lines.forEach(function (r) {
                r.words.forEach(function (o) {
                  o.symbols.forEach(function (i) {
                    a.push(
                      n({}, i, {
                        page: e,
                        block: c,
                        paragraph: t,
                        line: r,
                        word: o,
                      })
                    );
                  }),
                    i.push(
                      n({}, o, { page: e, block: c, paragraph: t, line: r })
                    );
                }),
                  o.push(n({}, r, { page: e, block: c, paragraph: t }));
              }),
                r.push(n({}, t, { page: e, block: c }));
            }),
              t.push(n({}, c, { page: e }));
          }),
          n({}, e, { blocks: t, paragraphs: r, lines: o, words: i, symbols: a })
        );
      };
    },
    function (e, t, r) {
      var n = r(8);
      e.exports = { defaultOEM: n.DEFAULT };
    },
    function (e, t, r) {
      var n = r(22),
        o = r(25),
        i = r(26),
        a = r(27),
        c = r(28),
        s = r(29);
      e.exports = {
        defaultOptions: n,
        spawnWorker: o,
        terminateWorker: i,
        onMessage: a,
        send: c,
        loadImage: s,
      };
    },
    function (e, t, r) {
      (function (t) {
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function o(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function i(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        var a = r(5),
          c = r(23),
          s = c.version,
          u = c.dependencies,
          l = r(24);
        e.exports = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })({}, l, {
          workerPath:
            void 0 !== t && "development" === t.env.TESS_ENV
              ? a(
                  "/dist/worker.dev.js?nocache=".concat(
                    Math.random().toString(36).slice(3)
                  )
                )
              : "https://unpkg.com/tesseract.js@v".concat(
                  s,
                  "/dist/worker.min.js"
                ),
          corePath: "https://unpkg.com/tesseract.js-core@v"
            .concat(u["tesseract.js-core"].substring(1), "/tesseract-core.")
            .concat(
              "object" ===
                ("undefined" == typeof WebAssembly
                  ? "undefined"
                  : n(WebAssembly))
                ? "wasm"
                : "asm",
              ".js"
            ),
        });
      }.call(this, r(4)));
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"tesseract.js","version":"2.1.5","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.7.7","@babel/preset-env":"^7.7.7","acorn":"^6.4.0","babel-loader":"^8.1.0","cors":"^2.8.5","eslint":"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1","express":"^4.17.1","mocha":"^8.1.3","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^2.7.1","wait-on":"^3.3.0","webpack":"^4.44.2","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.12","webpack-dev-middleware":"^3.7.2"},"dependencies":{"blueimp-load-image":"^3.0.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","jpeg-autorotate":"^7.1.1","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^2.2.0","zlibjs":"^0.3.1"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}'
      );
    },
    function (e, t) {
      e.exports = {
        langPath: "https://tessdata.projectnaptha.com/4.0.0",
        workerBlobURL: !0,
        logger: function () {},
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t,
          r = e.workerPath,
          n = e.workerBlobURL;
        if (Blob && URL && n) {
          var o = new Blob(['importScripts("'.concat(r, '");')], {
            type: "application/javascript",
          });
          t = new Worker(URL.createObjectURL(o));
        } else t = new Worker(r);
        return t;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        e.terminate();
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        e.onmessage = function (e) {
          var r = e.data;
          t(r);
        };
      };
    },
    function (e, t) {
      function r(e, t, r, n, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      e.exports = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e(t, r) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.postMessage(r);
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var a = e.apply(t, n);
                function c(e) {
                  r(a, o, i, c, s, "next", e);
                }
                function s(e) {
                  r(a, o, i, c, s, "throw", e);
                }
                c(void 0);
              });
            });
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })();
    },
    function (e, t, r) {
      function n(e, t, r, n, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, r);
            function c(e) {
              n(a, o, i, c, s, "next", e);
            }
            function s(e) {
              n(a, o, i, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      var i = r(5),
        a = r(30),
        c = function (e) {
          return new Promise(function (t, r) {
            var n = new FileReader();
            (n.onload = function () {
              t(n.result);
            }),
              (n.onerror = function (e) {
                var t = e.target.error.code;
                r(Error("File could not be read! Code=".concat(t)));
              }),
              n.readAsArrayBuffer(e);
          });
        },
        s = function (e) {
          return new Promise(function (t) {
            a(
              e,
              function (e) {
                return e.toBlob(t);
              },
              { orientation: !0, canvas: !0 }
            );
          });
        },
        u = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t) {
              var r, n, a, l;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = t), void 0 !== t)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", "undefined");
                    case 3:
                      if ("string" != typeof t) {
                        e.next = 24;
                        break;
                      }
                      if (!t.endsWith(".pbm")) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 7), fetch(i(t));
                    case 7:
                      return (n = e.sent), (e.next = 10), n.arrayBuffer();
                    case 10:
                      (r = e.sent), (e.next = 22);
                      break;
                    case 13:
                      return (
                        (a = t),
                        /data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t) ||
                          (a = i(t)),
                        (e.t0 = c),
                        (e.next = 18),
                        s(a)
                      );
                    case 18:
                      return (e.t1 = e.sent), (e.next = 21), (0, e.t0)(e.t1);
                    case 21:
                      r = e.sent;
                    case 22:
                      e.next = 47;
                      break;
                    case 24:
                      if (!(t instanceof HTMLElement)) {
                        e.next = 38;
                        break;
                      }
                      if ("IMG" !== t.tagName) {
                        e.next = 29;
                        break;
                      }
                      return (e.next = 28), u(t.src);
                    case 28:
                      r = e.sent;
                    case 29:
                      if ("VIDEO" !== t.tagName) {
                        e.next = 33;
                        break;
                      }
                      return (e.next = 32), u(t.poster);
                    case 32:
                      r = e.sent;
                    case 33:
                      if ("CANVAS" !== t.tagName) {
                        e.next = 36;
                        break;
                      }
                      return (
                        (e.next = 36),
                        new Promise(function (e) {
                          t.toBlob(
                            (function () {
                              var t = o(
                                regeneratorRuntime.mark(function t(n) {
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), c(n);
                                        case 2:
                                          (r = t.sent), e();
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        })
                      );
                    case 36:
                      e.next = 47;
                      break;
                    case 38:
                      if (!(t instanceof File || t instanceof Blob)) {
                        e.next = 47;
                        break;
                      }
                      if (((l = t), t.name.endsWith(".pbm"))) {
                        e.next = 44;
                        break;
                      }
                      return (e.next = 43), s(l);
                    case 43:
                      l = e.sent;
                    case 44:
                      return (e.next = 46), c(l);
                    case 46:
                      r = e.sent;
                    case 47:
                      return e.abrupt("return", new Uint8Array(r));
                    case 48:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      e.exports = u;
    },
    function (e, t, r) {
      (e.exports = r(0)), r(9), r(1), r(31), r(10), r(32), r(11), r(33), r(34);
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                "undefined" != typeof fetch && "undefined" != typeof Request
                  ? (e.fetchBlob = function (e, t, r) {
                      fetch(new Request(e, r))
                        .then(function (e) {
                          return e.blob();
                        })
                        .then(t)
                        .catch(function (e) {
                          t(null, e);
                        });
                    })
                  : "undefined" != typeof XMLHttpRequest &&
                    "undefined" != typeof ProgressEvent &&
                    (e.fetchBlob = function (e, t, r) {
                      r = r || {};
                      var n = new XMLHttpRequest();
                      n.open(r.method || "GET", e),
                        r.headers &&
                          Object.keys(r.headers).forEach(function (e) {
                            n.setRequestHeader(e, r.headers[e]);
                          }),
                        (n.withCredentials = "include" === r.credentials),
                        (n.responseType = "blob"),
                        (n.onload = function () {
                          t(n.response);
                        }),
                        (n.onerror =
                          n.onabort =
                          n.ontimeout =
                            function (e) {
                              t(null, e);
                            }),
                        n.send(r.body);
                    });
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      var n, o, i;
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function (c) {
        "use strict";
        (o = [r(0), r(10)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                var t = e.ExifMap.prototype;
                (t.tags = {
                  256: "ImageWidth",
                  257: "ImageHeight",
                  258: "BitsPerSample",
                  259: "Compression",
                  262: "PhotometricInterpretation",
                  274: "Orientation",
                  277: "SamplesPerPixel",
                  284: "PlanarConfiguration",
                  530: "YCbCrSubSampling",
                  531: "YCbCrPositioning",
                  282: "XResolution",
                  283: "YResolution",
                  296: "ResolutionUnit",
                  273: "StripOffsets",
                  278: "RowsPerStrip",
                  279: "StripByteCounts",
                  513: "JPEGInterchangeFormat",
                  514: "JPEGInterchangeFormatLength",
                  301: "TransferFunction",
                  318: "WhitePoint",
                  319: "PrimaryChromaticities",
                  529: "YCbCrCoefficients",
                  532: "ReferenceBlackWhite",
                  306: "DateTime",
                  270: "ImageDescription",
                  271: "Make",
                  272: "Model",
                  305: "Software",
                  315: "Artist",
                  33432: "Copyright",
                  34665: {
                    36864: "ExifVersion",
                    40960: "FlashpixVersion",
                    40961: "ColorSpace",
                    40962: "PixelXDimension",
                    40963: "PixelYDimension",
                    42240: "Gamma",
                    37121: "ComponentsConfiguration",
                    37122: "CompressedBitsPerPixel",
                    37500: "MakerNote",
                    37510: "UserComment",
                    40964: "RelatedSoundFile",
                    36867: "DateTimeOriginal",
                    36868: "DateTimeDigitized",
                    37520: "SubSecTime",
                    37521: "SubSecTimeOriginal",
                    37522: "SubSecTimeDigitized",
                    33434: "ExposureTime",
                    33437: "FNumber",
                    34850: "ExposureProgram",
                    34852: "SpectralSensitivity",
                    34855: "PhotographicSensitivity",
                    34856: "OECF",
                    34864: "SensitivityType",
                    34865: "StandardOutputSensitivity",
                    34866: "RecommendedExposureIndex",
                    34867: "ISOSpeed",
                    34868: "ISOSpeedLatitudeyyy",
                    34869: "ISOSpeedLatitudezzz",
                    37377: "ShutterSpeedValue",
                    37378: "ApertureValue",
                    37379: "BrightnessValue",
                    37380: "ExposureBias",
                    37381: "MaxApertureValue",
                    37382: "SubjectDistance",
                    37383: "MeteringMode",
                    37384: "LightSource",
                    37385: "Flash",
                    37396: "SubjectArea",
                    37386: "FocalLength",
                    41483: "FlashEnergy",
                    41484: "SpatialFrequencyResponse",
                    41486: "FocalPlaneXResolution",
                    41487: "FocalPlaneYResolution",
                    41488: "FocalPlaneResolutionUnit",
                    41492: "SubjectLocation",
                    41493: "ExposureIndex",
                    41495: "SensingMethod",
                    41728: "FileSource",
                    41729: "SceneType",
                    41730: "CFAPattern",
                    41985: "CustomRendered",
                    41986: "ExposureMode",
                    41987: "WhiteBalance",
                    41988: "DigitalZoomRatio",
                    41989: "FocalLengthIn35mmFilm",
                    41990: "SceneCaptureType",
                    41991: "GainControl",
                    41992: "Contrast",
                    41993: "Saturation",
                    41994: "Sharpness",
                    41995: "DeviceSettingDescription",
                    41996: "SubjectDistanceRange",
                    42016: "ImageUniqueID",
                    42032: "CameraOwnerName",
                    42033: "BodySerialNumber",
                    42034: "LensSpecification",
                    42035: "LensMake",
                    42036: "LensModel",
                    42037: "LensSerialNumber",
                  },
                  34853: {
                    0: "GPSVersionID",
                    1: "GPSLatitudeRef",
                    2: "GPSLatitude",
                    3: "GPSLongitudeRef",
                    4: "GPSLongitude",
                    5: "GPSAltitudeRef",
                    6: "GPSAltitude",
                    7: "GPSTimeStamp",
                    8: "GPSSatellites",
                    9: "GPSStatus",
                    10: "GPSMeasureMode",
                    11: "GPSDOP",
                    12: "GPSSpeedRef",
                    13: "GPSSpeed",
                    14: "GPSTrackRef",
                    15: "GPSTrack",
                    16: "GPSImgDirectionRef",
                    17: "GPSImgDirection",
                    18: "GPSMapDatum",
                    19: "GPSDestLatitudeRef",
                    20: "GPSDestLatitude",
                    21: "GPSDestLongitudeRef",
                    22: "GPSDestLongitude",
                    23: "GPSDestBearingRef",
                    24: "GPSDestBearing",
                    25: "GPSDestDistanceRef",
                    26: "GPSDestDistance",
                    27: "GPSProcessingMethod",
                    28: "GPSAreaInformation",
                    29: "GPSDateStamp",
                    30: "GPSDifferential",
                    31: "GPSHPositioningError",
                  },
                  40965: { 1: "InteroperabilityIndex" },
                }),
                  (t.stringValues = {
                    ExposureProgram: {
                      0: "Undefined",
                      1: "Manual",
                      2: "Normal program",
                      3: "Aperture priority",
                      4: "Shutter priority",
                      5: "Creative program",
                      6: "Action program",
                      7: "Portrait mode",
                      8: "Landscape mode",
                    },
                    MeteringMode: {
                      0: "Unknown",
                      1: "Average",
                      2: "CenterWeightedAverage",
                      3: "Spot",
                      4: "MultiSpot",
                      5: "Pattern",
                      6: "Partial",
                      255: "Other",
                    },
                    LightSource: {
                      0: "Unknown",
                      1: "Daylight",
                      2: "Fluorescent",
                      3: "Tungsten (incandescent light)",
                      4: "Flash",
                      9: "Fine weather",
                      10: "Cloudy weather",
                      11: "Shade",
                      12: "Daylight fluorescent (D 5700 - 7100K)",
                      13: "Day white fluorescent (N 4600 - 5400K)",
                      14: "Cool white fluorescent (W 3900 - 4500K)",
                      15: "White fluorescent (WW 3200 - 3700K)",
                      17: "Standard light A",
                      18: "Standard light B",
                      19: "Standard light C",
                      20: "D55",
                      21: "D65",
                      22: "D75",
                      23: "D50",
                      24: "ISO studio tungsten",
                      255: "Other",
                    },
                    Flash: {
                      0: "Flash did not fire",
                      1: "Flash fired",
                      5: "Strobe return light not detected",
                      7: "Strobe return light detected",
                      9: "Flash fired, compulsory flash mode",
                      13: "Flash fired, compulsory flash mode, return light not detected",
                      15: "Flash fired, compulsory flash mode, return light detected",
                      16: "Flash did not fire, compulsory flash mode",
                      24: "Flash did not fire, auto mode",
                      25: "Flash fired, auto mode",
                      29: "Flash fired, auto mode, return light not detected",
                      31: "Flash fired, auto mode, return light detected",
                      32: "No flash function",
                      65: "Flash fired, red-eye reduction mode",
                      69: "Flash fired, red-eye reduction mode, return light not detected",
                      71: "Flash fired, red-eye reduction mode, return light detected",
                      73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                      77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                      79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                      89: "Flash fired, auto mode, red-eye reduction mode",
                      93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                      95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
                    },
                    SensingMethod: {
                      1: "Undefined",
                      2: "One-chip color area sensor",
                      3: "Two-chip color area sensor",
                      4: "Three-chip color area sensor",
                      5: "Color sequential area sensor",
                      7: "Trilinear sensor",
                      8: "Color sequential linear sensor",
                    },
                    SceneCaptureType: {
                      0: "Standard",
                      1: "Landscape",
                      2: "Portrait",
                      3: "Night scene",
                    },
                    SceneType: { 1: "Directly photographed" },
                    CustomRendered: {
                      0: "Normal process",
                      1: "Custom process",
                    },
                    WhiteBalance: {
                      0: "Auto white balance",
                      1: "Manual white balance",
                    },
                    GainControl: {
                      0: "None",
                      1: "Low gain up",
                      2: "High gain up",
                      3: "Low gain down",
                      4: "High gain down",
                    },
                    Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" },
                    Saturation: {
                      0: "Normal",
                      1: "Low saturation",
                      2: "High saturation",
                    },
                    Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" },
                    SubjectDistanceRange: {
                      0: "Unknown",
                      1: "Macro",
                      2: "Close view",
                      3: "Distant view",
                    },
                    FileSource: { 3: "DSC" },
                    ComponentsConfiguration: {
                      0: "",
                      1: "Y",
                      2: "Cb",
                      3: "Cr",
                      4: "R",
                      5: "G",
                      6: "B",
                    },
                    Orientation: {
                      1: "top-left",
                      2: "top-right",
                      3: "bottom-right",
                      4: "bottom-left",
                      5: "left-top",
                      6: "right-top",
                      7: "right-bottom",
                      8: "left-bottom",
                    },
                  }),
                  (t.getText = function (e) {
                    var t = this.get(e);
                    switch (e) {
                      case "LightSource":
                      case "Flash":
                      case "MeteringMode":
                      case "ExposureProgram":
                      case "SensingMethod":
                      case "SceneCaptureType":
                      case "SceneType":
                      case "CustomRendered":
                      case "WhiteBalance":
                      case "GainControl":
                      case "Contrast":
                      case "Saturation":
                      case "Sharpness":
                      case "SubjectDistanceRange":
                      case "FileSource":
                      case "Orientation":
                        return this.stringValues[e][t];
                      case "ExifVersion":
                      case "FlashpixVersion":
                        if (!t) return;
                        return String.fromCharCode(t[0], t[1], t[2], t[3]);
                      case "ComponentsConfiguration":
                        if (!t) return;
                        return (
                          this.stringValues[e][t[0]] +
                          this.stringValues[e][t[1]] +
                          this.stringValues[e][t[2]] +
                          this.stringValues[e][t[3]]
                        );
                      case "GPSVersionID":
                        if (!t) return;
                        return t[0] + "." + t[1] + "." + t[2] + "." + t[3];
                    }
                    return String(t);
                  }),
                  (t.getAll = function () {
                    var e,
                      t,
                      r,
                      n = {};
                    for (e in this)
                      Object.prototype.hasOwnProperty.call(this, e) &&
                        ((t = this[e]) && t.getAll
                          ? (n[this.privateIFDs[e].name] = t.getAll())
                          : (r = this.tags[e]) && (n[r] = this.getText(r)));
                    return n;
                  }),
                  (t.getName = function (e) {
                    var t = this.tags[e];
                    return "object" === a(t) ? this.privateIFDs[e].name : t;
                  }),
                  (function () {
                    var e,
                      r,
                      n,
                      o = t.tags;
                    for (e in o)
                      if (Object.prototype.hasOwnProperty.call(o, e))
                        if ((r = t.privateIFDs[e]))
                          for (e in (n = o[e]))
                            Object.prototype.hasOwnProperty.call(n, e) &&
                              (r.map[n[e]] = Number(e));
                        else t.map[o[e]] = Number(e);
                  })();
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0), r(11)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                var t = e.IptcMap.prototype;
                (t.tags = {
                  0: "ApplicationRecordVersion",
                  3: "ObjectTypeReference",
                  4: "ObjectAttributeReference",
                  5: "ObjectName",
                  7: "EditStatus",
                  8: "EditorialUpdate",
                  10: "Urgency",
                  12: "SubjectReference",
                  15: "Category",
                  20: "SupplementalCategories",
                  22: "FixtureIdentifier",
                  25: "Keywords",
                  26: "ContentLocationCode",
                  27: "ContentLocationName",
                  30: "ReleaseDate",
                  35: "ReleaseTime",
                  37: "ExpirationDate",
                  38: "ExpirationTime",
                  40: "SpecialInstructions",
                  42: "ActionAdvised",
                  45: "ReferenceService",
                  47: "ReferenceDate",
                  50: "ReferenceNumber",
                  55: "DateCreated",
                  60: "TimeCreated",
                  62: "DigitalCreationDate",
                  63: "DigitalCreationTime",
                  65: "OriginatingProgram",
                  70: "ProgramVersion",
                  75: "ObjectCycle",
                  80: "Byline",
                  85: "BylineTitle",
                  90: "City",
                  92: "Sublocation",
                  95: "State",
                  100: "CountryCode",
                  101: "Country",
                  103: "OriginalTransmissionReference",
                  105: "Headline",
                  110: "Credit",
                  115: "Source",
                  116: "CopyrightNotice",
                  118: "Contact",
                  120: "Caption",
                  121: "LocalCaption",
                  122: "Writer",
                  125: "RasterizedCaption",
                  130: "ImageType",
                  131: "ImageOrientation",
                  135: "LanguageIdentifier",
                  150: "AudioType",
                  151: "AudioSamplingRate",
                  152: "AudioSamplingResolution",
                  153: "AudioDuration",
                  154: "AudioOutcue",
                  184: "JobID",
                  185: "MasterDocumentID",
                  186: "ShortDocumentID",
                  187: "UniqueDocumentID",
                  188: "OwnerID",
                  200: "ObjectPreviewFileFormat",
                  201: "ObjectPreviewFileVersion",
                  202: "ObjectPreviewData",
                  221: "Prefs",
                  225: "ClassifyState",
                  228: "SimilarityIndex",
                  230: "DocumentNotes",
                  231: "DocumentHistory",
                  232: "ExifCameraInfo",
                  255: "CatalogSets",
                }),
                  (t.stringValues = {
                    10: {
                      0: "0 (reserved)",
                      1: "1 (most urgent)",
                      2: "2",
                      3: "3",
                      4: "4",
                      5: "5 (normal urgency)",
                      6: "6",
                      7: "7",
                      8: "8 (least urgent)",
                      9: "9 (user-defined priority)",
                    },
                    75: {
                      a: "Morning",
                      b: "Both Morning and Evening",
                      p: "Evening",
                    },
                    131: { L: "Landscape", P: "Portrait", S: "Square" },
                  }),
                  (t.getText = function (e) {
                    var t = this.get(e),
                      r = this.map[e],
                      n = this.stringValues[r];
                    return n ? n[t] : String(t);
                  }),
                  (t.getAll = function () {
                    var e,
                      t,
                      r = {};
                    for (e in this)
                      Object.prototype.hasOwnProperty.call(this, e) &&
                        (t = this.tags[e]) &&
                        (r[t] = this.getText(t));
                    return r;
                  }),
                  (t.getName = function (e) {
                    return this.tags[e];
                  }),
                  (function () {
                    var e,
                      r = t.tags,
                      n = t.map || {};
                    for (e in r)
                      Object.prototype.hasOwnProperty.call(r, e) &&
                        (n[r[e]] = Number(e));
                  })();
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      var n, o, i;
      !(function (a) {
        "use strict";
        (o = [r(0), r(9), r(1)]),
          void 0 ===
            (i =
              "function" ==
              typeof (n = function (e) {
                var t = e.hasCanvasOption,
                  r = e.hasMetaOption,
                  n = e.transformCoordinates,
                  o = e.getTransformedOptions;
                (i = document.createElement("img")),
                  (i.onload = function () {
                    e.orientation = 1 === i.width && 2 === i.height;
                  }),
                  (i.src =
                    "data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q=="),
                  (e.hasCanvasOption = function (r) {
                    return (
                      (!0 == !!r.orientation && !e.orientation) ||
                      (r.orientation > 1 && r.orientation < 9) ||
                      t.call(e, r)
                    );
                  }),
                  (e.hasMetaOption = function (t) {
                    return (
                      (t && !0 === t.orientation && !e.orientation) ||
                      r.call(e, t)
                    );
                  }),
                  (e.transformCoordinates = function (t, r) {
                    n.call(e, t, r);
                    var o = t.getContext("2d"),
                      i = t.width,
                      a = t.height,
                      c = t.style.width,
                      s = t.style.height,
                      u = r.orientation;
                    if (u > 1 && u < 9)
                      switch (
                        (u > 4 &&
                          ((t.width = a),
                          (t.height = i),
                          (t.style.width = s),
                          (t.style.height = c)),
                        u)
                      ) {
                        case 2:
                          o.translate(i, 0), o.scale(-1, 1);
                          break;
                        case 3:
                          o.translate(i, a), o.rotate(Math.PI);
                          break;
                        case 4:
                          o.translate(0, a), o.scale(1, -1);
                          break;
                        case 5:
                          o.rotate(0.5 * Math.PI), o.scale(1, -1);
                          break;
                        case 6:
                          o.rotate(0.5 * Math.PI), o.translate(0, -a);
                          break;
                        case 7:
                          o.rotate(0.5 * Math.PI),
                            o.translate(i, -a),
                            o.scale(-1, 1);
                          break;
                        case 8:
                          o.rotate(-0.5 * Math.PI), o.translate(-i, 0);
                      }
                  }),
                  (e.getTransformedOptions = function (t, r, n) {
                    var i,
                      a,
                      c = o.call(e, t, r),
                      s = c.orientation;
                    if (!0 === s) {
                      if (e.orientation) return c;
                      s = n && n.exif && n.exif.get("Orientation");
                    }
                    if (!(s > 1 && s < 9)) return c;
                    for (a in ((i = {}), c))
                      Object.prototype.hasOwnProperty.call(c, a) &&
                        (i[a] = c[a]);
                    switch (((i.orientation = s), s)) {
                      case 2:
                        (i.left = c.right), (i.right = c.left);
                        break;
                      case 3:
                        (i.left = c.right),
                          (i.top = c.bottom),
                          (i.right = c.left),
                          (i.bottom = c.top);
                        break;
                      case 4:
                        (i.top = c.bottom), (i.bottom = c.top);
                        break;
                      case 5:
                        (i.left = c.top),
                          (i.top = c.left),
                          (i.right = c.bottom),
                          (i.bottom = c.right);
                        break;
                      case 6:
                        (i.left = c.top),
                          (i.top = c.right),
                          (i.right = c.bottom),
                          (i.bottom = c.left);
                        break;
                      case 7:
                        (i.left = c.bottom),
                          (i.top = c.right),
                          (i.right = c.top),
                          (i.bottom = c.left);
                        break;
                      case 8:
                        (i.left = c.bottom),
                          (i.top = c.left),
                          (i.right = c.top),
                          (i.bottom = c.right);
                    }
                    return (
                      i.orientation > 4 &&
                        ((i.maxWidth = c.maxHeight),
                        (i.maxHeight = c.maxWidth),
                        (i.minWidth = c.minHeight),
                        (i.minHeight = c.minWidth),
                        (i.sourceWidth = c.sourceHeight),
                        (i.sourceHeight = c.sourceWidth)),
                      i
                    );
                  });
                var i;
              })
                ? n.apply(t, o)
                : n) || (e.exports = i);
      })();
    },
    function (e, t, r) {
      function n(e, t, r, n, o, i, a) {
        try {
          var c = e[i](a),
            s = c.value;
        } catch (e) {
          return void r(e);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function o(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, r);
            function c(e) {
              n(a, o, i, c, s, "next", e);
            }
            function s(e) {
              n(a, o, i, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      var i = r(7),
        a = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r, n) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (a = i(n)), (e.next = 3), a.load();
                    case 3:
                      return (e.next = 5), a.loadLanguage(r);
                    case 5:
                      return (e.next = 7), a.initialize(r);
                    case 7:
                      return e.abrupt(
                        "return",
                        a.recognize(t).finally(
                          o(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), a.terminate();
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = o(
            regeneratorRuntime.mark(function e(t, r) {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = i(r)), (e.next = 3), n.load();
                    case 3:
                      return (e.next = 5), n.loadLanguage("osd");
                    case 5:
                      return (e.next = 7), n.initialize("osd");
                    case 7:
                      return e.abrupt(
                        "return",
                        n.detect(t).finally(
                          o(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), n.terminate();
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })();
      e.exports = { recognize: a, detect: c };
    },
    function (e, t) {
      e.exports = {
        AFR: "afr",
        AMH: "amh",
        ARA: "ara",
        ASM: "asm",
        AZE: "aze",
        AZE_CYRL: "aze_cyrl",
        BEL: "bel",
        BEN: "ben",
        BOD: "bod",
        BOS: "bos",
        BUL: "bul",
        CAT: "cat",
        CEB: "ceb",
        CES: "ces",
        CHI_SIM: "chi_sim",
        CHI_TRA: "chi_tra",
        CHR: "chr",
        CYM: "cym",
        DAN: "dan",
        DEU: "deu",
        DZO: "dzo",
        ELL: "ell",
        ENG: "eng",
        ENM: "enm",
        EPO: "epo",
        EST: "est",
        EUS: "eus",
        FAS: "fas",
        FIN: "fin",
        FRA: "fra",
        FRK: "frk",
        FRM: "frm",
        GLE: "gle",
        GLG: "glg",
        GRC: "grc",
        GUJ: "guj",
        HAT: "hat",
        HEB: "heb",
        HIN: "hin",
        HRV: "hrv",
        HUN: "hun",
        IKU: "iku",
        IND: "ind",
        ISL: "isl",
        ITA: "ita",
        ITA_OLD: "ita_old",
        JAV: "jav",
        JPN: "jpn",
        KAN: "kan",
        KAT: "kat",
        KAT_OLD: "kat_old",
        KAZ: "kaz",
        KHM: "khm",
        KIR: "kir",
        KOR: "kor",
        KUR: "kur",
        LAO: "lao",
        LAT: "lat",
        LAV: "lav",
        LIT: "lit",
        MAL: "mal",
        MAR: "mar",
        MKD: "mkd",
        MLT: "mlt",
        MSA: "msa",
        MYA: "mya",
        NEP: "nep",
        NLD: "nld",
        NOR: "nor",
        ORI: "ori",
        PAN: "pan",
        POL: "pol",
        POR: "por",
        PUS: "pus",
        RON: "ron",
        RUS: "rus",
        SAN: "san",
        SIN: "sin",
        SLK: "slk",
        SLV: "slv",
        SPA: "spa",
        SPA_OLD: "spa_old",
        SQI: "sqi",
        SRP: "srp",
        SRP_LATN: "srp_latn",
        SWA: "swa",
        SWE: "swe",
        SYR: "syr",
        TAM: "tam",
        TEL: "tel",
        TGK: "tgk",
        TGL: "tgl",
        THA: "tha",
        TIR: "tir",
        TUR: "tur",
        UIG: "uig",
        UKR: "ukr",
        URD: "urd",
        UZB: "uzb",
        UZB_CYRL: "uzb_cyrl",
        VIE: "vie",
        YID: "yid",
      };
    },
    function (e, t) {
      e.exports = {
        OSD_ONLY: "0",
        AUTO_OSD: "1",
        AUTO_ONLY: "2",
        AUTO: "3",
        SINGLE_COLUMN: "4",
        SINGLE_BLOCK_VERT_TEXT: "5",
        SINGLE_BLOCK: "6",
        SINGLE_LINE: "7",
        SINGLE_WORD: "8",
        CIRCLE_WORD: "9",
        SINGLE_CHAR: "10",
        SPARSE_TEXT: "11",
        SPARSE_TEXT_OSD: "12",
      };
    },
  ]);
});
//# sourceMappingURL=tesseract.min.js.map
