function Jm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Xs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var nd = { exports: {} },
  ji = {},
  rd = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var so = Symbol.for("react.element"),
  eh = Symbol.for("react.portal"),
  th = Symbol.for("react.fragment"),
  nh = Symbol.for("react.strict_mode"),
  rh = Symbol.for("react.profiler"),
  oh = Symbol.for("react.provider"),
  ih = Symbol.for("react.context"),
  lh = Symbol.for("react.forward_ref"),
  sh = Symbol.for("react.suspense"),
  ah = Symbol.for("react.memo"),
  uh = Symbol.for("react.lazy"),
  Eu = Symbol.iterator;
function ch(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var od = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  id = Object.assign,
  ld = {};
function sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ld),
    (this.updater = n || od);
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sd() {}
sd.prototype = sr.prototype;
function qs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ld),
    (this.updater = n || od);
}
var Zs = (qs.prototype = new sd());
Zs.constructor = qs;
id(Zs, sr.prototype);
Zs.isPureReactComponent = !0;
var Pu = Array.isArray,
  ad = Object.prototype.hasOwnProperty,
  Js = { current: null },
  ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function cd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ad.call(t, r) && !ud.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: so,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Js.current,
  };
}
function dh(e, t) {
  return {
    $$typeof: so,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ea(e) {
  return typeof e == "object" && e !== null && e.$$typeof === so;
}
function fh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bu = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fh("" + e.key)
    : t.toString(36);
}
function $o(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case so:
          case eh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + sl(l, 0) : r),
      Pu(o)
        ? ((n = ""),
          e != null && (n = e.replace(bu, "$&/") + "/"),
          $o(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ea(o) &&
            (o = dh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(bu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Pu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + sl(i, s);
      l += $o(i, t, n, a, o);
    }
  else if (((a = ch(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + sl(i, s++)), (l += $o(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function So(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    $o(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function ph(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Bo = { transition: null },
  mh = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: Js,
  };
function dd() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: So,
  forEach: function (e, t, n) {
    So(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      So(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      So(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ea(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = sr;
$.Fragment = th;
$.Profiler = rh;
$.PureComponent = qs;
$.StrictMode = nh;
$.Suspense = sh;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh;
$.act = dd;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = id({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Js.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      ad.call(t, a) &&
        !ud.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: so, type: e.type, key: o, ref: i, props: r, _owner: l };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: ih,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oh, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = cd;
$.createFactory = function (e) {
  var t = cd.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: lh, render: e };
};
$.isValidElement = ea;
$.lazy = function (e) {
  return { $$typeof: uh, _payload: { _status: -1, _result: e }, _init: ph };
};
$.memo = function (e, t) {
  return { $$typeof: ah, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
$.unstable_act = dd;
$.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Ce.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
$.useId = function () {
  return Ce.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Ce.current.useRef(e);
};
$.useState = function (e) {
  return Ce.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Ce.current.useTransition();
};
$.version = "18.3.1";
rd.exports = $;
var x = rd.exports;
const xt = Xs(x),
  hh = Jm({ __proto__: null, default: xt }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh = x,
  gh = Symbol.for("react.element"),
  yh = Symbol.for("react.fragment"),
  wh = Object.prototype.hasOwnProperty,
  xh = vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kh = { key: !0, ref: !0, __self: !0, __source: !0 };
function fd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) wh.call(t, r) && !kh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: gh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: xh.current,
  };
}
ji.Fragment = yh;
ji.jsx = fd;
ji.jsxs = fd;
nd.exports = ji;
var p = nd.exports,
  pd = { exports: {} },
  We = {},
  md = { exports: {} },
  hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, D) {
    var j = C.length;
    C.push(D);
    e: for (; 0 < j; ) {
      var F = (j - 1) >>> 1,
        le = C[F];
      if (0 < o(le, D)) (C[F] = D), (C[j] = le), (j = F);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0],
      j = C.pop();
    if (j !== D) {
      C[0] = j;
      e: for (var F = 0, le = C.length, bn = le >>> 1; F < bn; ) {
        var vt = 2 * (F + 1) - 1,
          mr = C[vt],
          gt = vt + 1,
          ln = C[gt];
        if (0 > o(mr, j))
          gt < le && 0 > o(ln, mr)
            ? ((C[F] = ln), (C[gt] = j), (F = gt))
            : ((C[F] = mr), (C[vt] = j), (F = vt));
        else if (gt < le && 0 > o(ln, j)) (C[F] = ln), (C[gt] = j), (F = gt);
        else break e;
      }
    }
    return D;
  }
  function o(C, D) {
    var j = C.sortIndex - D.sortIndex;
    return j !== 0 ? j : C.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    m = 3,
    g = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(C) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= C)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function S(C) {
    if (((w = !1), y(C), !v))
      if (n(a) !== null) (v = !0), z(N);
      else {
        var D = n(u);
        D !== null && M(S, D.startTime - C);
      }
  }
  function N(C, D) {
    (v = !1), w && ((w = !1), h(b), (b = -1)), (g = !0);
    var j = m;
    try {
      for (
        y(D), d = n(a);
        d !== null && (!(d.expirationTime > D) || (C && !W()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var le = F(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof le == "function" ? (d.callback = le) : d === n(a) && r(a),
            y(D);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var bn = !0;
      else {
        var vt = n(u);
        vt !== null && M(S, vt.startTime - D), (bn = !1);
      }
      return bn;
    } finally {
      (d = null), (m = j), (g = !1);
    }
  }
  var P = !1,
    E = null,
    b = -1,
    A = 5,
    T = -1;
  function W() {
    return !(e.unstable_now() - T < A);
  }
  function R() {
    if (E !== null) {
      var C = e.unstable_now();
      T = C;
      var D = !0;
      try {
        D = E(!0, C);
      } finally {
        D ? U() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var U;
  if (typeof f == "function")
    U = function () {
      f(R);
    };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(),
      oe = V.port2;
    (V.port1.onmessage = R),
      (U = function () {
        oe.postMessage(null);
      });
  } else
    U = function () {
      k(R, 0);
    };
  function z(C) {
    (E = C), P || ((P = !0), U());
  }
  function M(C, D) {
    b = k(function () {
      C(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), z(N));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = m;
      }
      var j = m;
      m = D;
      try {
        return C();
      } finally {
        m = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var j = m;
      m = C;
      try {
        return D();
      } finally {
        m = j;
      }
    }),
    (e.unstable_scheduleCallback = function (C, D, j) {
      var F = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? F + j : F))
          : (j = F),
        C)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = j + le),
        (C = {
          id: c++,
          callback: D,
          priorityLevel: C,
          startTime: j,
          expirationTime: le,
          sortIndex: -1,
        }),
        j > F
          ? ((C.sortIndex = j),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (w ? (h(b), (b = -1)) : (w = !0), M(S, j - F)))
          : ((C.sortIndex = le), t(a, C), v || g || ((v = !0), z(N))),
        C
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (C) {
      var D = m;
      return function () {
        var j = m;
        m = D;
        try {
          return C.apply(this, arguments);
        } finally {
          m = j;
        }
      };
    });
})(hd);
md.exports = hd;
var Sh = md.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ch = x,
  Fe = Sh;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vd = new Set(),
  $r = {};
function Cn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for ($r[e] = t, e = 0; e < t.length; e++) vd.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vl = Object.prototype.hasOwnProperty,
  Nh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _u = {},
  Mu = {};
function Eh(e) {
  return Vl.call(Mu, e)
    ? !0
    : Vl.call(_u, e)
    ? !1
    : Nh.test(e)
    ? (Mu[e] = !0)
    : ((_u[e] = !0), !1);
}
function Ph(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function bh(e, t, n, r) {
  if (t === null || typeof t > "u" || Ph(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    he[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ta, na);
  he[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ra(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (bh(t, n, o, r) && (n = null),
    r || o === null
      ? Eh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Co = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  gd = Symbol.for("react.provider"),
  yd = Symbol.for("react.context"),
  ia = Symbol.for("react.forward_ref"),
  Ql = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  la = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  wd = Symbol.for("react.offscreen"),
  Du = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Du && e[Du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  al;
function _r(e) {
  if (al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      al = (t && t[1]) || "";
    }
  return (
    `
` +
    al +
    e
  );
}
var ul = !1;
function cl(e, t) {
  if (!e || ul) return "";
  ul = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function _h(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = cl(e.type, !1)), e;
    case 11:
      return (e = cl(e.type.render, !1)), e;
    case 1:
      return (e = cl(e.type, !0)), e;
    default:
      return "";
  }
}
function Kl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Yl:
      return "Profiler";
    case oa:
      return "StrictMode";
    case Ql:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case yd:
        return (e.displayName || "Context") + ".Consumer";
      case gd:
        return (e._context.displayName || "Context") + ".Provider";
      case ia:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case la:
        return (
          (t = e.displayName || null), t !== null ? t : Kl(e.type) || "Memo"
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return Kl(e(t));
        } catch {}
    }
  return null;
}
function Mh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Kl(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dh(e) {
  var t = xd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function No(e) {
  e._valueTracker || (e._valueTracker = Dh(e));
}
function kd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = xd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xl(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sd(e, t) {
  (t = t.checked), t != null && ra(e, "checked", t, !1);
}
function ql(e, t) {
  Sd(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zl(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ou(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zl(e, t, n) {
  (t !== "number" || ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ju(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function Cd(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function es(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Nd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Eo,
  Ed = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Eo = Eo || document.createElement("div"),
          Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Th = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function (e) {
  Th.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Or[t] = Or[e]);
  });
});
function Pd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Or.hasOwnProperty(e) && Or[e])
    ? ("" + t).trim()
    : t + "px";
}
function bd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Pd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Oh = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ts(e, t) {
  if (t) {
    if (Oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function ns(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rs = null;
function sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var os = null,
  Hn = null,
  Un = null;
function Lu(e) {
  if ((e = co(e))) {
    if (typeof os != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Fi(t)), os(e.stateNode, e.type, t));
  }
}
function _d(e) {
  Hn ? (Un ? Un.push(e) : (Un = [e])) : (Hn = e);
}
function Md() {
  if (Hn) {
    var e = Hn,
      t = Un;
    if (((Un = Hn = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
  }
}
function Dd(e, t) {
  return e(t);
}
function Td() {}
var dl = !1;
function Od(e, t, n) {
  if (dl) return e(t, n);
  dl = !0;
  try {
    return Dd(e, t, n);
  } finally {
    (dl = !1), (Hn !== null || Un !== null) && (Td(), Md());
  }
}
function Hr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var is = !1;
if (Pt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        is = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    is = !1;
  }
function jh(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var jr = !1,
  ni = null,
  ri = !1,
  ls = null,
  Rh = {
    onError: function (e) {
      (jr = !0), (ni = e);
    },
  };
function Lh(e, t, n, r, o, i, l, s, a) {
  (jr = !1), (ni = null), jh.apply(Rh, arguments);
}
function Ah(e, t, n, r, o, i, l, s, a) {
  if ((Lh.apply(this, arguments), jr)) {
    if (jr) {
      var u = ni;
      (jr = !1), (ni = null);
    } else throw Error(_(198));
    ri || ((ri = !0), (ls = u));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function jd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (Nn(e) !== e) throw Error(_(188));
}
function Ih(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Au(o), e;
        if (i === r) return Au(o), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Rd(e) {
  return (e = Ih(e)), e !== null ? Ld(e) : null;
}
function Ld(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ld(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ad = Fe.unstable_scheduleCallback,
  Iu = Fe.unstable_cancelCallback,
  Fh = Fe.unstable_shouldYield,
  zh = Fe.unstable_requestPaint,
  ie = Fe.unstable_now,
  Wh = Fe.unstable_getCurrentPriorityLevel,
  aa = Fe.unstable_ImmediatePriority,
  Id = Fe.unstable_UserBlockingPriority,
  oi = Fe.unstable_NormalPriority,
  $h = Fe.unstable_LowPriority,
  Fd = Fe.unstable_IdlePriority,
  Ri = null,
  ut = null;
function Bh(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Vh,
  Hh = Math.log,
  Uh = Math.LN2;
function Vh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hh(e) / Uh) | 0)) | 0;
}
var Po = 64,
  bo = 4194304;
function Dr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Dr(s)) : ((i &= l), i !== 0 && (r = Dr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Dr(l)) : i !== 0 && (r = Dr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Yh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Ze(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = Yh(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ss(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zd() {
  var e = Po;
  return (Po <<= 1), !(Po & 4194240) && (Po = 64), e;
}
function fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function Gh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ze(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ua(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Q = 0;
function Wd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $d,
  ca,
  Bd,
  Hd,
  Ud,
  as = !1,
  _o = [],
  Ht = null,
  Ut = null,
  Vt = null,
  Ur = new Map(),
  Vr = new Map(),
  zt = [],
  Kh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = co(t)), t !== null && ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Xh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ht = yr(Ht, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ut = yr(Ut, e, t, n, r, o)), !0;
    case "mouseover":
      return (Vt = yr(Vt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ur.set(i, yr(Ur.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Vr.set(i, yr(Vr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Vd(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jd(n)), t !== null)) {
          (e.blockedOn = t),
            Ud(e.priority, function () {
              Bd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = us(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rs = r), n.target.dispatchEvent(r), (rs = null);
    } else return (t = co(n)), t !== null && ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zu(e, t, n) {
  Ho(e) && n.delete(t);
}
function qh() {
  (as = !1),
    Ht !== null && Ho(Ht) && (Ht = null),
    Ut !== null && Ho(Ut) && (Ut = null),
    Vt !== null && Ho(Vt) && (Vt = null),
    Ur.forEach(zu),
    Vr.forEach(zu);
}
function wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    as ||
      ((as = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, qh)));
}
function Yr(e) {
  function t(o) {
    return wr(o, e);
  }
  if (0 < _o.length) {
    wr(_o[0], e);
    for (var n = 1; n < _o.length; n++) {
      var r = _o[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && wr(Ht, e),
      Ut !== null && wr(Ut, e),
      Vt !== null && wr(Vt, e),
      Ur.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Vd(n), n.blockedOn === null && zt.shift();
}
var Vn = Ot.ReactCurrentBatchConfig,
  li = !0;
function Zh(e, t, n, r) {
  var o = Q,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (Q = 1), da(e, t, n, r);
  } finally {
    (Q = o), (Vn.transition = i);
  }
}
function Jh(e, t, n, r) {
  var o = Q,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (Q = 4), da(e, t, n, r);
  } finally {
    (Q = o), (Vn.transition = i);
  }
}
function da(e, t, n, r) {
  if (li) {
    var o = us(e, t, n, r);
    if (o === null) Sl(e, t, r, si, n), Fu(e, r);
    else if (Xh(o, e, t, n, r)) r.stopPropagation();
    else if ((Fu(e, r), t & 4 && -1 < Kh.indexOf(e))) {
      for (; o !== null; ) {
        var i = co(o);
        if (
          (i !== null && $d(i),
          (i = us(e, t, n, r)),
          i === null && Sl(e, t, r, si, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Sl(e, t, r, null, n);
  }
}
var si = null;
function us(e, t, n, r) {
  if (((si = null), (e = sa(r)), (e = cn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (si = e), null;
}
function Yd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wh()) {
        case aa:
          return 1;
        case Id:
          return 4;
        case oi:
        case $h:
          return 16;
        case Fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  fa = null,
  Uo = null;
function Qd() {
  if (Uo) return Uo;
  var e,
    t = fa,
    n = t.length,
    r,
    o = "value" in $t ? $t.value : $t.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Uo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mo() {
  return !0;
}
function Wu() {
  return !1;
}
function $e(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Mo
        : Wu),
      (this.isPropagationStopped = Wu),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mo));
      },
      persist: function () {},
      isPersistent: Mo,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = $e(ar),
  uo = ne({}, ar, { view: 0, detail: 0 }),
  ev = $e(uo),
  pl,
  ml,
  xr,
  Li = ne({}, uo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((pl = e.screenX - xr.screenX), (ml = e.screenY - xr.screenY))
              : (ml = pl = 0),
            (xr = e)),
          pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ml;
    },
  }),
  $u = $e(Li),
  tv = ne({}, Li, { dataTransfer: 0 }),
  nv = $e(tv),
  rv = ne({}, uo, { relatedTarget: 0 }),
  hl = $e(rv),
  ov = ne({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iv = $e(ov),
  lv = ne({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sv = $e(lv),
  av = ne({}, ar, { data: 0 }),
  Bu = $e(av),
  uv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dv[e]) ? !!t[e] : !1;
}
function ma() {
  return fv;
}
var pv = ne({}, uo, {
    key: function (e) {
      if (e.key) {
        var t = uv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mv = $e(pv),
  hv = ne({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hu = $e(hv),
  vv = ne({}, uo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  gv = $e(vv),
  yv = ne({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wv = $e(yv),
  xv = ne({}, Li, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  kv = $e(xv),
  Sv = [9, 13, 27, 32],
  ha = Pt && "CompositionEvent" in window,
  Rr = null;
Pt && "documentMode" in document && (Rr = document.documentMode);
var Cv = Pt && "TextEvent" in window && !Rr,
  Gd = Pt && (!ha || (Rr && 8 < Rr && 11 >= Rr)),
  Uu = " ",
  Vu = !1;
function Kd(e, t) {
  switch (e) {
    case "keyup":
      return Sv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Nv(e, t) {
  switch (e) {
    case "compositionend":
      return Xd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vu = !0), Uu);
    case "textInput":
      return (e = t.data), e === Uu && Vu ? null : e;
    default:
      return null;
  }
}
function Ev(e, t) {
  if (On)
    return e === "compositionend" || (!ha && Kd(e, t))
      ? ((e = Qd()), (Uo = fa = $t = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pv[e.type] : t === "textarea";
}
function qd(e, t, n, r) {
  _d(r),
    (t = ai(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  Qr = null;
function bv(e) {
  uf(e, 0);
}
function Ai(e) {
  var t = Ln(e);
  if (kd(t)) return e;
}
function _v(e, t) {
  if (e === "change") return t;
}
var Zd = !1;
if (Pt) {
  var vl;
  if (Pt) {
    var gl = "oninput" in document;
    if (!gl) {
      var Qu = document.createElement("div");
      Qu.setAttribute("oninput", "return;"),
        (gl = typeof Qu.oninput == "function");
    }
    vl = gl;
  } else vl = !1;
  Zd = vl && (!document.documentMode || 9 < document.documentMode);
}
function Gu() {
  Lr && (Lr.detachEvent("onpropertychange", Jd), (Qr = Lr = null));
}
function Jd(e) {
  if (e.propertyName === "value" && Ai(Qr)) {
    var t = [];
    qd(t, Qr, e, sa(e)), Od(bv, t);
  }
}
function Mv(e, t, n) {
  e === "focusin"
    ? (Gu(), (Lr = t), (Qr = n), Lr.attachEvent("onpropertychange", Jd))
    : e === "focusout" && Gu();
}
function Dv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ai(Qr);
}
function Tv(e, t) {
  if (e === "click") return Ai(t);
}
function Ov(e, t) {
  if (e === "input" || e === "change") return Ai(t);
}
function jv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : jv;
function Gr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vl.call(t, o) || !et(e[o], t[o])) return !1;
  }
  return !0;
}
function Ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Ku(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ku(n);
  }
}
function ef(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ef(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function tf() {
  for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ti(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rv(e) {
  var t = tf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ef(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xu(n, i));
        var l = Xu(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lv = Pt && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  cs = null,
  Ar = null,
  ds = !1;
function qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ds ||
    jn == null ||
    jn !== ti(r) ||
    ((r = jn),
    "selectionStart" in r && va(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ar && Gr(Ar, r)) ||
      ((Ar = r),
      (r = ai(cs, "onSelect")),
      0 < r.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function Do(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rn = {
    animationend: Do("Animation", "AnimationEnd"),
    animationiteration: Do("Animation", "AnimationIteration"),
    animationstart: Do("Animation", "AnimationStart"),
    transitionend: Do("Transition", "TransitionEnd"),
  },
  yl = {},
  nf = {};
Pt &&
  ((nf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rn.animationend.animation,
    delete Rn.animationiteration.animation,
    delete Rn.animationstart.animation),
  "TransitionEvent" in window || delete Rn.transitionend.transition);
function Ii(e) {
  if (yl[e]) return yl[e];
  if (!Rn[e]) return e;
  var t = Rn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in nf) return (yl[e] = t[n]);
  return e;
}
var rf = Ii("animationend"),
  of = Ii("animationiteration"),
  lf = Ii("animationstart"),
  sf = Ii("transitionend"),
  af = new Map(),
  Zu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  af.set(e, t), Cn(t, [e]);
}
for (var wl = 0; wl < Zu.length; wl++) {
  var xl = Zu[wl],
    Av = xl.toLowerCase(),
    Iv = xl[0].toUpperCase() + xl.slice(1);
  nn(Av, "on" + Iv);
}
nn(rf, "onAnimationEnd");
nn(of, "onAnimationIteration");
nn(lf, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(sf, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Ju(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ah(r, t, void 0, e), (e.currentTarget = null);
}
function uf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Ju(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Ju(o, s, u), (i = a);
        }
    }
  }
  if (ri) throw ((e = ls), (ri = !1), (ls = null), e);
}
function q(e, t) {
  var n = t[vs];
  n === void 0 && (n = t[vs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cf(t, e, 2, !1), n.add(r));
}
function kl(e, t, n) {
  var r = 0;
  t && (r |= 4), cf(n, e, r, t);
}
var To = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[To]) {
    (e[To] = !0),
      vd.forEach(function (n) {
        n !== "selectionchange" && (Fv.has(n) || kl(n, !1, e), kl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[To] || ((t[To] = !0), kl("selectionchange", !1, t));
  }
}
function cf(e, t, n, r) {
  switch (Yd(t)) {
    case 1:
      var o = Zh;
      break;
    case 4:
      o = Jh;
      break;
    default:
      o = da;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !is ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Sl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = cn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Od(function () {
    var u = i,
      c = sa(n),
      d = [];
    e: {
      var m = af.get(e);
      if (m !== void 0) {
        var g = pa,
          v = e;
        switch (e) {
          case "keypress":
            if (Vo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = mv;
            break;
          case "focusin":
            (v = "focus"), (g = hl);
            break;
          case "focusout":
            (v = "blur"), (g = hl);
            break;
          case "beforeblur":
          case "afterblur":
            g = hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = $u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = nv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = gv;
            break;
          case rf:
          case of:
          case lf:
            g = iv;
            break;
          case sf:
            g = wv;
            break;
          case "scroll":
            g = ev;
            break;
          case "wheel":
            g = kv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Hu;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          h = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var f = u, y; f !== null; ) {
          y = f;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              h !== null && ((S = Hr(f, h)), S != null && w.push(Xr(f, S, y)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((m = new g(m, v, null, n, c)), d.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== rs &&
            (v = n.relatedTarget || n.fromElement) &&
            (cn(v) || v[bt]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? cn(v) : null),
              v !== null &&
                ((k = Nn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((w = $u),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Hu),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (k = g == null ? m : Ln(g)),
            (y = v == null ? m : Ln(v)),
            (m = new w(S, f + "leave", g, n, c)),
            (m.target = k),
            (m.relatedTarget = y),
            (S = null),
            cn(c) === u &&
              ((w = new w(h, f + "enter", v, n, c)),
              (w.target = y),
              (w.relatedTarget = k),
              (S = w)),
            (k = S),
            g && v)
          )
            t: {
              for (w = g, h = v, f = 0, y = w; y; y = _n(y)) f++;
              for (y = 0, S = h; S; S = _n(S)) y++;
              for (; 0 < f - y; ) (w = _n(w)), f--;
              for (; 0 < y - f; ) (h = _n(h)), y--;
              for (; f--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = _n(w)), (h = _n(h));
              }
              w = null;
            }
          else w = null;
          g !== null && ec(d, m, g, w, !1),
            v !== null && k !== null && ec(d, k, v, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? Ln(u) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var N = _v;
        else if (Yu(m))
          if (Zd) N = Ov;
          else {
            N = Dv;
            var P = Mv;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = Tv);
        if (N && (N = N(e, u))) {
          qd(d, N, n, c);
          break e;
        }
        P && P(e, m, u),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            Zl(m, "number", m.value);
      }
      switch (((P = u ? Ln(u) : window), e)) {
        case "focusin":
          (Yu(P) || P.contentEditable === "true") &&
            ((jn = P), (cs = u), (Ar = null));
          break;
        case "focusout":
          Ar = cs = jn = null;
          break;
        case "mousedown":
          ds = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ds = !1), qu(d, n, c);
          break;
        case "selectionchange":
          if (Lv) break;
        case "keydown":
        case "keyup":
          qu(d, n, c);
      }
      var E;
      if (ha)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        On
          ? Kd(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Gd &&
          n.locale !== "ko" &&
          (On || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && On && (E = Qd())
            : (($t = c),
              (fa = "value" in $t ? $t.value : $t.textContent),
              (On = !0))),
        (P = ai(u, b)),
        0 < P.length &&
          ((b = new Bu(b, e, null, n, c)),
          d.push({ event: b, listeners: P }),
          E ? (b.data = E) : ((E = Xd(n)), E !== null && (b.data = E)))),
        (E = Cv ? Nv(e, n) : Ev(e, n)) &&
          ((u = ai(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Bu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    uf(d, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ai(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Hr(e, n)),
      i != null && r.unshift(Xr(e, i, o)),
      (i = Hr(e, t)),
      i != null && r.push(Xr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Hr(n, i)), a != null && l.unshift(Xr(n, a, s)))
        : o || ((a = Hr(n, i)), a != null && l.push(Xr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var zv = /\r\n?/g,
  Wv = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zv,
      `
`
    )
    .replace(Wv, "");
}
function Oo(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(_(425));
}
function ui() {}
var fs = null,
  ps = null;
function ms(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var hs = typeof setTimeout == "function" ? setTimeout : void 0,
  $v = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nc = typeof Promise == "function" ? Promise : void 0,
  Bv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nc < "u"
      ? function (e) {
          return nc.resolve(null).then(e).catch(Hv);
        }
      : hs;
function Hv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Cl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Yr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Yr(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  st = "__reactFiber$" + ur,
  qr = "__reactProps$" + ur,
  bt = "__reactContainer$" + ur,
  vs = "__reactEvents$" + ur,
  Uv = "__reactListeners$" + ur,
  Vv = "__reactHandles$" + ur;
function cn(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bt] || n[st])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[st])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function co(e) {
  return (
    (e = e[st] || e[bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Fi(e) {
  return e[qr] || null;
}
var gs = [],
  An = -1;
function rn(e) {
  return { current: e };
}
function Z(e) {
  0 > An || ((e.current = gs[An]), (gs[An] = null), An--);
}
function G(e, t) {
  An++, (gs[An] = e.current), (e.current = t);
}
var Zt = {},
  we = rn(Zt),
  _e = rn(!1),
  hn = Zt;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function ci() {
  Z(_e), Z(we);
}
function oc(e, t, n) {
  if (we.current !== Zt) throw Error(_(168));
  G(we, t), G(_e, n);
}
function df(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, Mh(e) || "Unknown", o));
  return ne({}, n, r);
}
function di(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (hn = we.current),
    G(we, e),
    G(_e, _e.current),
    !0
  );
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = df(e, t, hn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(_e),
      Z(we),
      G(we, e))
    : Z(_e),
    G(_e, n);
}
var St = null,
  zi = !1,
  Nl = !1;
function ff(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Yv(e) {
  (zi = !0), ff(e);
}
function on() {
  if (!Nl && St !== null) {
    Nl = !0;
    var e = 0,
      t = Q;
    try {
      var n = St;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (zi = !1);
    } catch (o) {
      throw (St !== null && (St = St.slice(e + 1)), Ad(aa, on), o);
    } finally {
      (Q = t), (Nl = !1);
    }
  }
  return null;
}
var In = [],
  Fn = 0,
  fi = null,
  pi = 0,
  Be = [],
  He = 0,
  vn = null,
  Ct = 1,
  Nt = "";
function sn(e, t) {
  (In[Fn++] = pi), (In[Fn++] = fi), (fi = e), (pi = t);
}
function pf(e, t, n) {
  (Be[He++] = Ct), (Be[He++] = Nt), (Be[He++] = vn), (vn = e);
  var r = Ct;
  e = Nt;
  var o = 32 - Ze(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ze(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ct = (1 << (32 - Ze(t) + o)) | (n << o) | r),
      (Nt = i + e);
  } else (Ct = (1 << i) | (n << o) | r), (Nt = e);
}
function ga(e) {
  e.return !== null && (sn(e, 1), pf(e, 1, 0));
}
function ya(e) {
  for (; e === fi; )
    (fi = In[--Fn]), (In[Fn] = null), (pi = In[--Fn]), (In[Fn] = null);
  for (; e === vn; )
    (vn = Be[--He]),
      (Be[He] = null),
      (Nt = Be[--He]),
      (Be[He] = null),
      (Ct = Be[--He]),
      (Be[He] = null);
}
var Ae = null,
  Le = null,
  J = !1,
  qe = null;
function mf(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Le = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: Ct, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ys(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ws(e) {
  if (J) {
    var t = Le;
    if (t) {
      var n = t;
      if (!lc(e, t)) {
        if (ys(e)) throw Error(_(418));
        t = Yt(n.nextSibling);
        var r = Ae;
        t && lc(e, t)
          ? mf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ae = e));
      }
    } else {
      if (ys(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Ae = e);
    }
  }
}
function sc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function jo(e) {
  if (e !== Ae) return !1;
  if (!J) return sc(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ms(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (ys(e)) throw (hf(), Error(_(418)));
    for (; t; ) mf(e, t), (t = Yt(t.nextSibling));
  }
  if ((sc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ae ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function hf() {
  for (var e = Le; e; ) e = Yt(e.nextSibling);
}
function Zn() {
  (Le = Ae = null), (J = !1);
}
function wa(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Qv = Ot.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ro(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function vf(e) {
  function t(h, f) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [f]), (h.flags |= 16)) : y.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = Xt(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((h.flags |= 2), f) : y)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, y, S) {
    return f === null || f.tag !== 6
      ? ((f = Tl(y, h.mode, S)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f);
  }
  function a(h, f, y, S) {
    var N = y.type;
    return N === Tn
      ? c(h, f, y.props.children, S, y.key)
      : f !== null &&
        (f.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === It &&
            ac(N) === f.type))
      ? ((S = o(f, y.props)), (S.ref = kr(h, f, y)), (S.return = h), S)
      : ((S = Zo(y.type, y.key, y.props, null, h.mode, S)),
        (S.ref = kr(h, f, y)),
        (S.return = h),
        S);
  }
  function u(h, f, y, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = Ol(y, h.mode, S)), (f.return = h), f)
      : ((f = o(f, y.children || [])), (f.return = h), f);
  }
  function c(h, f, y, S, N) {
    return f === null || f.tag !== 7
      ? ((f = mn(y, h.mode, S, N)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f);
  }
  function d(h, f, y) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Tl("" + f, h.mode, y)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Co:
          return (
            (y = Zo(f.type, f.key, f.props, null, h.mode, y)),
            (y.ref = kr(h, null, f)),
            (y.return = h),
            y
          );
        case Dn:
          return (f = Ol(f, h.mode, y)), (f.return = h), f;
        case It:
          var S = f._init;
          return d(h, S(f._payload), y);
      }
      if (Mr(f) || vr(f))
        return (f = mn(f, h.mode, y, null)), (f.return = h), f;
      Ro(h, f);
    }
    return null;
  }
  function m(h, f, y, S) {
    var N = f !== null ? f.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return N !== null ? null : s(h, f, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Co:
          return y.key === N ? a(h, f, y, S) : null;
        case Dn:
          return y.key === N ? u(h, f, y, S) : null;
        case It:
          return (N = y._init), m(h, f, N(y._payload), S);
      }
      if (Mr(y) || vr(y)) return N !== null ? null : c(h, f, y, S, null);
      Ro(h, y);
    }
    return null;
  }
  function g(h, f, y, S, N) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(y) || null), s(f, h, "" + S, N);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Co:
          return (h = h.get(S.key === null ? y : S.key) || null), a(f, h, S, N);
        case Dn:
          return (h = h.get(S.key === null ? y : S.key) || null), u(f, h, S, N);
        case It:
          var P = S._init;
          return g(h, f, y, P(S._payload), N);
      }
      if (Mr(S) || vr(S)) return (h = h.get(y) || null), c(f, h, S, N, null);
      Ro(f, S);
    }
    return null;
  }
  function v(h, f, y, S) {
    for (
      var N = null, P = null, E = f, b = (f = 0), A = null;
      E !== null && b < y.length;
      b++
    ) {
      E.index > b ? ((A = E), (E = null)) : (A = E.sibling);
      var T = m(h, E, y[b], S);
      if (T === null) {
        E === null && (E = A);
        break;
      }
      e && E && T.alternate === null && t(h, E),
        (f = i(T, f, b)),
        P === null ? (N = T) : (P.sibling = T),
        (P = T),
        (E = A);
    }
    if (b === y.length) return n(h, E), J && sn(h, b), N;
    if (E === null) {
      for (; b < y.length; b++)
        (E = d(h, y[b], S)),
          E !== null &&
            ((f = i(E, f, b)), P === null ? (N = E) : (P.sibling = E), (P = E));
      return J && sn(h, b), N;
    }
    for (E = r(h, E); b < y.length; b++)
      (A = g(E, h, b, y[b], S)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? b : A.key),
          (f = i(A, f, b)),
          P === null ? (N = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        E.forEach(function (W) {
          return t(h, W);
        }),
      J && sn(h, b),
      N
    );
  }
  function w(h, f, y, S) {
    var N = vr(y);
    if (typeof N != "function") throw Error(_(150));
    if (((y = N.call(y)), y == null)) throw Error(_(151));
    for (
      var P = (N = null), E = f, b = (f = 0), A = null, T = y.next();
      E !== null && !T.done;
      b++, T = y.next()
    ) {
      E.index > b ? ((A = E), (E = null)) : (A = E.sibling);
      var W = m(h, E, T.value, S);
      if (W === null) {
        E === null && (E = A);
        break;
      }
      e && E && W.alternate === null && t(h, E),
        (f = i(W, f, b)),
        P === null ? (N = W) : (P.sibling = W),
        (P = W),
        (E = A);
    }
    if (T.done) return n(h, E), J && sn(h, b), N;
    if (E === null) {
      for (; !T.done; b++, T = y.next())
        (T = d(h, T.value, S)),
          T !== null &&
            ((f = i(T, f, b)), P === null ? (N = T) : (P.sibling = T), (P = T));
      return J && sn(h, b), N;
    }
    for (E = r(h, E); !T.done; b++, T = y.next())
      (T = g(E, h, b, T.value, S)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? b : T.key),
          (f = i(T, f, b)),
          P === null ? (N = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        E.forEach(function (R) {
          return t(h, R);
        }),
      J && sn(h, b),
      N
    );
  }
  function k(h, f, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Tn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Co:
          e: {
            for (var N = y.key, P = f; P !== null; ) {
              if (P.key === N) {
                if (((N = y.type), N === Tn)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (f = o(P, y.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  P.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === It &&
                    ac(N) === P.type)
                ) {
                  n(h, P.sibling),
                    (f = o(P, y.props)),
                    (f.ref = kr(h, P, y)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === Tn
              ? ((f = mn(y.props.children, h.mode, S, y.key)),
                (f.return = h),
                (h = f))
              : ((S = Zo(y.type, y.key, y.props, null, h.mode, S)),
                (S.ref = kr(h, f, y)),
                (S.return = h),
                (h = S));
          }
          return l(h);
        case Dn:
          e: {
            for (P = y.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, y.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Ol(y, h.mode, S)), (f.return = h), (h = f);
          }
          return l(h);
        case It:
          return (P = y._init), k(h, f, P(y._payload), S);
      }
      if (Mr(y)) return v(h, f, y, S);
      if (vr(y)) return w(h, f, y, S);
      Ro(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, y)), (f.return = h), (h = f))
          : (n(h, f), (f = Tl(y, h.mode, S)), (f.return = h), (h = f)),
        l(h))
      : n(h, f);
  }
  return k;
}
var Jn = vf(!0),
  gf = vf(!1),
  mi = rn(null),
  hi = null,
  zn = null,
  xa = null;
function ka() {
  xa = zn = hi = null;
}
function Sa(e) {
  var t = mi.current;
  Z(mi), (e._currentValue = t);
}
function xs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yn(e, t) {
  (hi = e),
    (xa = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (xa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (hi === null) throw Error(_(308));
      (zn = e), (hi.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var dn = null;
function Ca(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function yf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ca(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function Na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ca(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Yo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vi(e, t, n, r) {
  var o = e.updateQueue;
  Ft = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (c = u = a = null), (s = i);
    do {
      var m = s.lane,
        g = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            w = s;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(g, d, m);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (m = typeof v == "function" ? v.call(g, d, m) : v),
                m == null)
              )
                break e;
              d = ne({}, d, m);
              break e;
            case 2:
              Ft = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (yn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var fo = {},
  ct = rn(fo),
  Zr = rn(fo),
  Jr = rn(fo);
function fn(e) {
  if (e === fo) throw Error(_(174));
  return e;
}
function Ea(e, t) {
  switch ((G(Jr, t), G(Zr, e), G(ct, fo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : es(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = es(t, e));
  }
  Z(ct), G(ct, t);
}
function er() {
  Z(ct), Z(Zr), Z(Jr);
}
function xf(e) {
  fn(Jr.current);
  var t = fn(ct.current),
    n = es(t, e.type);
  t !== n && (G(Zr, e), G(ct, n));
}
function Pa(e) {
  Zr.current === e && (Z(ct), Z(Zr));
}
var ee = rn(0);
function gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var El = [];
function ba() {
  for (var e = 0; e < El.length; e++)
    El[e]._workInProgressVersionPrimary = null;
  El.length = 0;
}
var Qo = Ot.ReactCurrentDispatcher,
  Pl = Ot.ReactCurrentBatchConfig,
  gn = 0,
  te = null,
  ae = null,
  ce = null,
  yi = !1,
  Ir = !1,
  eo = 0,
  Gv = 0;
function ve() {
  throw Error(_(321));
}
function _a(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Ma(e, t, n, r, o, i) {
  if (
    ((gn = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qo.current = e === null || e.memoizedState === null ? Zv : Jv),
    (e = n(r, o)),
    Ir)
  ) {
    i = 0;
    do {
      if (((Ir = !1), (eo = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (ce = ae = null),
        (t.updateQueue = null),
        (Qo.current = eg),
        (e = n(r, o));
    } while (Ir);
  }
  if (
    ((Qo.current = wi),
    (t = ae !== null && ae.next !== null),
    (gn = 0),
    (ce = ae = te = null),
    (yi = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Da() {
  var e = eo !== 0;
  return (eo = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Qe() {
  if (ae === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ce === null ? te.memoizedState : ce.next;
  if (t !== null) (ce = t), (ae = e);
  else {
    if (e === null) throw Error(_(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ce === null ? (te.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((gn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = d), (l = r)) : (a = a.next = d),
          (te.lanes |= c),
          (yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      et(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (yn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _l(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    et(i, t.memoizedState) || (Pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function kf() {}
function Sf(e, t) {
  var n = te,
    r = Qe(),
    o = t(),
    i = !et(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Pe = !0)),
    (r = r.queue),
    Ta(Ef.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      no(9, Nf.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(_(349));
    gn & 30 || Cf(n, t, o);
  }
  return o;
}
function Cf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pf(t) && bf(e);
}
function Ef(e, t, n) {
  return n(function () {
    Pf(t) && bf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function bf(e) {
  var t = _t(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function dc(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: to,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qv.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function no(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _f() {
  return Qe().memoizedState;
}
function Go(e, t, n, r) {
  var o = lt();
  (te.flags |= e),
    (o.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wi(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (((i = l.destroy), r !== null && _a(r, l.deps))) {
      o.memoizedState = no(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = no(1 | t, n, i, r));
}
function fc(e, t) {
  return Go(8390656, 8, e, t);
}
function Ta(e, t) {
  return Wi(2048, 8, e, t);
}
function Mf(e, t) {
  return Wi(4, 2, e, t);
}
function Df(e, t) {
  return Wi(4, 4, e, t);
}
function Tf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wi(4, 4, Tf.bind(null, t, e), n)
  );
}
function Oa() {}
function jf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _a(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _a(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lf(e, t, n) {
  return gn & 21
    ? (et(n, t) || ((n = zd()), (te.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Kv(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Pl.transition;
  Pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Pl.transition = r);
  }
}
function Af() {
  return Qe().memoizedState;
}
function Xv(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    If(e))
  )
    Ff(t, n);
  else if (((n = yf(e, t, n, r)), n !== null)) {
    var o = Se();
    Je(n, e, r, o), zf(n, t, r);
  }
}
function qv(e, t, n) {
  var r = Kt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (If(e)) Ff(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), et(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Ca(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = yf(e, t, o, r)),
      n !== null && ((o = Se()), Je(n, e, r, o), zf(n, t, r));
  }
}
function If(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function Ff(e, t) {
  Ir = yi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
var wi = {
    readContext: Ye,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Zv = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: fc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Go(4194308, 4, Tf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Go(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Go(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xv.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = Kv.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = lt();
      if (J) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(_(349));
        gn & 30 || Cf(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        fc(Ef.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        no(9, Nf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = fe.identifierPrefix;
      if (J) {
        var n = Nt,
          r = Ct;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = eo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jv = {
    readContext: Ye,
    useCallback: jf,
    useContext: Ye,
    useEffect: Ta,
    useImperativeHandle: Of,
    useInsertionEffect: Mf,
    useLayoutEffect: Df,
    useMemo: Rf,
    useReducer: bl,
    useRef: _f,
    useState: function () {
      return bl(to);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Qe();
      return Lf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(to)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Sf,
    useId: Af,
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: Ye,
    useCallback: jf,
    useContext: Ye,
    useEffect: Ta,
    useImperativeHandle: Of,
    useInsertionEffect: Mf,
    useLayoutEffect: Df,
    useMemo: Rf,
    useReducer: _l,
    useRef: _f,
    useState: function () {
      return _l(to);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Qe();
      return ae === null ? (t.memoizedState = e) : Lf(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(to)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: kf,
    useSyncExternalStore: Sf,
    useId: Af,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ks(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
      i = Et(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (Je(t, e, o, r), Yo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
      i = Et(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (Je(t, e, o, r), Yo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Kt(e),
      o = Et(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qt(e, o, r)),
      t !== null && (Je(t, e, r, n), Yo(t, e, r));
  },
};
function pc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gr(n, r) || !Gr(o, i)
      : !0
  );
}
function Wf(e, t, n) {
  var r = !1,
    o = Zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ye(i))
      : ((o = Me(t) ? hn : we.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qn(e, o) : Zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function Ss(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Na(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ye(i))
    : ((i = Me(t) ? hn : we.current), (o.context = qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ks(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $i.enqueueReplaceState(o, o.state, null),
      vi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _h(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tg = typeof WeakMap == "function" ? WeakMap : Map;
function $f(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ki || ((ki = !0), (js = r)), Cs(e, t);
    }),
    n
  );
}
function Bf(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Cs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Cs(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = hg.bind(null, e, t, n)), t.then(e, e));
}
function vc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ng = Ot.ReactCurrentOwner,
  Pe = !1;
function xe(e, t, n, r) {
  t.child = e === null ? gf(t, null, n, r) : Jn(t, e.child, n, r);
}
function yc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Yn(t, o),
    (r = Ma(e, t, n, r, i, o)),
    (n = Da()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (J && n && ga(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function wc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Wa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Hf(e, t, i, r, o))
      : ((e = Zo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gr), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gr(i, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), Mt(e, t, o);
  }
  return Ns(e, t, n, r, o);
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G($n, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G($n, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G($n, je),
        (je |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G($n, je),
      (je |= r);
  return xe(e, t, o, n), t.child;
}
function Vf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ns(e, t, n, r, o) {
  var i = Me(n) ? hn : we.current;
  return (
    (i = qn(t, i)),
    Yn(t, o),
    (n = Ma(e, t, n, r, i, o)),
    (r = Da()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (J && r && ga(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function xc(e, t, n, r, o) {
  if (Me(n)) {
    var i = !0;
    di(t);
  } else i = !1;
  if ((Yn(t, o), t.stateNode === null))
    Ko(e, t), Wf(t, n, r), Ss(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = Me(n) ? hn : we.current), (u = qn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && mc(t, l, r, u)),
      (Ft = !1);
    var m = t.memoizedState;
    (l.state = m),
      vi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || _e.current || Ft
        ? (typeof c == "function" && (ks(t, n, c, r), (a = t.memoizedState)),
          (s = Ft || pc(t, n, s, r, m, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      wf(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ke(t.type, s)),
      (l.props = u),
      (d = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ye(a))
        : ((a = Me(n) ? hn : we.current), (a = qn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || m !== a) && mc(t, l, r, a)),
      (Ft = !1),
      (m = t.memoizedState),
      (l.state = m),
      vi(t, r, l, o);
    var v = t.memoizedState;
    s !== d || m !== v || _e.current || Ft
      ? (typeof g == "function" && (ks(t, n, g, r), (v = t.memoizedState)),
        (u = Ft || pc(t, n, u, r, m, v, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Es(e, t, n, r, i, o);
}
function Es(e, t, n, r, o, i) {
  Vf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ic(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (ng.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Jn(t, e.child, null, i)), (t.child = Jn(t, null, s, i)))
      : xe(e, t, s, i),
    (t.memoizedState = r.state),
    o && ic(t, n, !0),
    t.child
  );
}
function Yf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    Ea(e, t.containerInfo);
}
function kc(e, t, n, r, o) {
  return Zn(), wa(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var Ps = { dehydrated: null, treeContext: null, retryLane: 0 };
function bs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    G(ee, o & 1),
    e === null)
  )
    return (
      ws(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ui(l, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = bs(n)),
              (t.memoizedState = Ps),
              e)
            : ja(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return rg(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Xt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Xt(s, i)) : ((i = mn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? bs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ps),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ja(e, t) {
  return (
    (t = Ui({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lo(e, t, n, r) {
  return (
    r !== null && wa(r),
    Jn(t, e.child, null, n),
    (e = ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ml(Error(_(422)))), Lo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ui({ mode: "visible", children: r.children }, o, 0, null)),
        (i = mn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, l),
        (t.child.memoizedState = bs(l)),
        (t.memoizedState = Ps),
        i);
  if (!(t.mode & 1)) return Lo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(_(419))), (r = Ml(i, r, void 0)), Lo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Pe || s)) {
    if (((r = fe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), _t(e, o), Je(r, e, o, -1));
    }
    return za(), (r = Ml(Error(_(421)))), Lo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Le = Yt(o.nextSibling)),
      (Ae = t),
      (J = !0),
      (qe = null),
      e !== null &&
        ((Be[He++] = Ct),
        (Be[He++] = Nt),
        (Be[He++] = vn),
        (Ct = e.id),
        (Nt = e.overflow),
        (vn = t)),
      (t = ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xs(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Gf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
        else if (e.tag === 19) Sc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Dl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Dl(t, !0, n, null, i);
        break;
      case "together":
        Dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function og(e, t, n) {
  switch (t.tag) {
    case 3:
      Yf(t), Zn();
      break;
    case 5:
      xf(t);
      break;
    case 1:
      Me(t.type) && di(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      G(mi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qf(e, t, n)
          : (G(ee, ee.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      G(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        G(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Uf(e, t, n);
  }
  return Mt(e, t, n);
}
var Kf, _s, Xf, qf;
Kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
_s = function () {};
Xf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fn(ct.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Xl(e, o)), (r = Xl(e, r)), (i = []);
        break;
      case "select":
        (o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Jl(e, o)), (r = Jl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ui);
    }
    ts(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            ($r.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              ($r.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ig(e, t, n) {
  var r = t.pendingProps;
  switch ((ya(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Me(t.type) && ci(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        Z(_e),
        Z(we),
        ba(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (As(qe), (qe = null)))),
        _s(e, t),
        ge(t),
        null
      );
    case 5:
      Pa(t);
      var o = fn(Jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ge(t), null;
        }
        if (((e = fn(ct.current)), jo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[st] = t), (r[qr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Tr.length; o++) q(Tr[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Tu(r, i), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              ju(r, i), q("invalid", r);
          }
          ts(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : $r.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              No(r), Ou(r, i, !0);
              break;
            case "textarea":
              No(r), Ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Nd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[st] = t),
            (e[qr] = r),
            Kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ns(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Tr.length; o++) q(Tr[o], e);
                o = r;
                break;
              case "source":
                q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (o = r);
                break;
              case "details":
                q("toggle", e), (o = r);
                break;
              case "input":
                Tu(e, r), (o = Xl(e, r)), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                ju(e, r), (o = Jl(e, r)), q("invalid", e);
                break;
              default:
                o = r;
            }
            ts(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? bd(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ed(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($r.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && q("scroll", e)
                      : a != null && ra(e, i, a, l));
              }
            switch (n) {
              case "input":
                No(e), Ou(e, r, !1);
                break;
              case "textarea":
                No(e), Ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ui);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) qf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = fn(Jr.current)), fn(ct.current), jo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[st] = t),
            (i = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[st] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (Z(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Le !== null && t.mode & 1 && !(t.flags & 128))
          hf(), Zn(), (t.flags |= 98560), (i = !1);
        else if (((i = jo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[st] = t;
          } else
            Zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (i = !1);
        } else qe !== null && (As(qe), (qe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ue === 0 && (ue = 3) : za())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        er(), _s(e, t), e === null && Kr(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Sa(t.type._context), ge(t), null;
    case 17:
      return Me(t.type) && ci(), ge(t), null;
    case 19:
      if ((Z(ee), (i = t.memoizedState), i === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Sr(i, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = gi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Sr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ie() > nr &&
            ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return ge(t), null;
          } else
            2 * ie() - i.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ie()),
          (t.sibling = null),
          (n = ee.current),
          G(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Fa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function lg(e, t) {
  switch ((ya(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && ci(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        Z(_e),
        Z(we),
        ba(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Pa(t), null;
    case 13:
      if ((Z(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        Zn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ee), null;
    case 4:
      return er(), null;
    case 10:
      return Sa(t.type._context), null;
    case 22:
    case 23:
      return Fa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ao = !1,
  ye = !1,
  sg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Ms(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Cc = !1;
function ag(e, t) {
  if (((fs = li), (e = tf()), va(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (m = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++c === r && (a = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = g;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ps = { focusedElem: e, selectionRange: n }, li = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ke(t.type, w),
                      k
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (S) {
          re(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = Cc), (Cc = !1), v;
}
function Fr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ms(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ds(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Zf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Zf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[st], delete t[qr], delete t[vs], delete t[Uv], delete t[Vv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ts(e, t, n), e = e.sibling; e !== null; ) Ts(e, t, n), (e = e.sibling);
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
var pe = null,
  Xe = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) ep(e, t, n), (n = n.sibling);
}
function ep(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(Ri, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || Wn(n, t);
    case 6:
      var r = pe,
        o = Xe;
      (pe = null),
        jt(e, t, n),
        (pe = r),
        (Xe = o),
        pe !== null &&
          (Xe
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (Xe
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Cl(e.parentNode, n)
              : e.nodeType === 1 && Cl(e, n),
            Yr(e))
          : Cl(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (o = Xe),
        (pe = n.stateNode.containerInfo),
        (Xe = !0),
        jt(e, t, n),
        (pe = r),
        (Xe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Ms(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          re(n, t, s);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), jt(e, t, n), (ye = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sg()),
      t.forEach(function (r) {
        var o = gg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (pe = s.stateNode), (Xe = !1);
              break e;
            case 3:
              (pe = s.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (pe = s.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(_(160));
        ep(i, l, o), (pe = null), (Xe = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        re(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) tp(t, e), (t = t.sibling);
}
function tp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), it(e), r & 4)) {
        try {
          Fr(3, e, e.return), Bi(3, e);
        } catch (w) {
          re(e, e.return, w);
        }
        try {
          Fr(5, e, e.return);
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 1:
      Ge(t, e), it(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        it(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Br(o, "");
        } catch (w) {
          re(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Sd(o, i),
              ns(s, l);
            var u = ns(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                d = a[l + 1];
              c === "style"
                ? bd(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Ed(o, d)
                : c === "children"
                ? Br(o, d)
                : ra(o, c, d, u);
            }
            switch (s) {
              case "input":
                ql(o, i);
                break;
              case "textarea":
                Cd(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Bn(o, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bn(o, !!i.multiple, i.defaultValue, !0)
                      : Bn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[qr] = i;
          } catch (w) {
            re(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          re(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yr(t.containerInfo);
        } catch (w) {
          re(e, e.return, w);
        }
      break;
    case 4:
      Ge(t, e), it(e);
      break;
    case 13:
      Ge(t, e),
        it(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Aa = ie())),
        r & 4 && Ec(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || c), Ge(t, e), (ye = u)) : Ge(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((m = O), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fr(4, m, m.return);
                  break;
                case 1:
                  Wn(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      re(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bc(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (O = g)) : bc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Pd("display", l)));
              } catch (w) {
                re(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                re(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), it(e), r & 4 && Ec(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Br(o, ""), (r.flags &= -33));
          var i = Nc(e);
          Os(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Nc(e);
          Ts(e, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ug(e, t, n) {
  (O = e), np(e);
}
function np(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ao;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ye;
        s = Ao;
        var u = ye;
        if (((Ao = l), (ye = a) && !u))
          for (O = o; O !== null; )
            (l = O),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? _c(o)
                : a !== null
                ? ((a.return = l), (O = a))
                : _c(o);
        for (; i !== null; ) (O = i), np(i), (i = i.sibling);
        (O = o), (Ao = s), (ye = u);
      }
      Pc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : Pc(e);
  }
}
function Pc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || Bi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && cc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Yr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        ye || (t.flags & 512 && Ds(t));
      } catch (m) {
        re(t, t.return, m);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function bc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function _c(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bi(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ds(t);
          } catch (a) {
            re(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ds(t);
          } catch (a) {
            re(t, l, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var cg = Math.ceil,
  xi = Ot.ReactCurrentDispatcher,
  Ra = Ot.ReactCurrentOwner,
  Ve = Ot.ReactCurrentBatchConfig,
  B = 0,
  fe = null,
  se = null,
  me = 0,
  je = 0,
  $n = rn(0),
  ue = 0,
  ro = null,
  yn = 0,
  Hi = 0,
  La = 0,
  zr = null,
  Ee = null,
  Aa = 0,
  nr = 1 / 0,
  kt = null,
  ki = !1,
  js = null,
  Gt = null,
  Io = !1,
  Bt = null,
  Si = 0,
  Wr = 0,
  Rs = null,
  Xo = -1,
  qo = 0;
function Se() {
  return B & 6 ? ie() : Xo !== -1 ? Xo : (Xo = ie());
}
function Kt(e) {
  return e.mode & 1
    ? B & 2 && me !== 0
      ? me & -me
      : Qv.transition !== null
      ? (qo === 0 && (qo = zd()), qo)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yd(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (Rs = null), Error(_(185)));
  ao(e, n, r),
    (!(B & 2) || e !== fe) &&
      (e === fe && (!(B & 2) && (Hi |= n), ue === 4 && Wt(e, me)),
      De(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((nr = ie() + 500), zi && on()));
}
function De(e, t) {
  var n = e.callbackNode;
  Qh(e, t);
  var r = ii(e, e === fe ? me : 0);
  if (r === 0)
    n !== null && Iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Iu(n), t === 1))
      e.tag === 0 ? Yv(Mc.bind(null, e)) : ff(Mc.bind(null, e)),
        Bv(function () {
          !(B & 6) && on();
        }),
        (n = null);
    else {
      switch (Wd(r)) {
        case 1:
          n = aa;
          break;
        case 4:
          n = Id;
          break;
        case 16:
          n = oi;
          break;
        case 536870912:
          n = Fd;
          break;
        default:
          n = oi;
      }
      n = cp(n, rp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rp(e, t) {
  if (((Xo = -1), (qo = 0), B & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = ii(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = ip();
    (fe !== e || me !== t) && ((kt = null), (nr = ie() + 500), pn(e, t));
    do
      try {
        pg();
        break;
      } catch (s) {
        op(e, s);
      }
    while (!0);
    ka(),
      (xi.current = i),
      (B = o),
      se !== null ? (t = 0) : ((fe = null), (me = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ss(e)), o !== 0 && ((r = o), (t = Ls(e, o)))), t === 1)
    )
      throw ((n = ro), pn(e, 0), Wt(e, r), De(e, ie()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !dg(o) &&
          ((t = Ci(e, r)),
          t === 2 && ((i = ss(e)), i !== 0 && ((r = i), (t = Ls(e, i)))),
          t === 1))
      )
        throw ((n = ro), pn(e, 0), Wt(e, r), De(e, ie()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          an(e, Ee, kt);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = Aa + 500 - ie()), 10 < t))
          ) {
            if (ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = hs(an.bind(null, e, Ee, kt), t);
            break;
          }
          an(e, Ee, kt);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ze(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hs(an.bind(null, e, Ee, kt), r);
            break;
          }
          an(e, Ee, kt);
          break;
        case 5:
          an(e, Ee, kt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return De(e, ie()), e.callbackNode === n ? rp.bind(null, e) : null;
}
function Ls(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = Ci(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && As(t)),
    e
  );
}
function As(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function dg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!et(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wt(e, t) {
  for (
    t &= ~La,
      t &= ~Hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mc(e) {
  if (B & 6) throw Error(_(327));
  Qn();
  var t = ii(e, 0);
  if (!(t & 1)) return De(e, ie()), null;
  var n = Ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ss(e);
    r !== 0 && ((t = r), (n = Ls(e, r)));
  }
  if (n === 1) throw ((n = ro), pn(e, 0), Wt(e, t), De(e, ie()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, Ee, kt),
    De(e, ie()),
    null
  );
}
function Ia(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((nr = ie() + 500), zi && on());
  }
}
function wn(e) {
  Bt !== null && Bt.tag === 0 && !(B & 6) && Qn();
  var t = B;
  B |= 1;
  var n = Ve.transition,
    r = Q;
  try {
    if (((Ve.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Ve.transition = n), (B = t), !(B & 6) && on();
  }
}
function Fa() {
  (je = $n.current), Z($n);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $v(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((ya(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ci();
          break;
        case 3:
          er(), Z(_e), Z(we), ba();
          break;
        case 5:
          Pa(r);
          break;
        case 4:
          er();
          break;
        case 13:
          Z(ee);
          break;
        case 19:
          Z(ee);
          break;
        case 10:
          Sa(r.type._context);
          break;
        case 22:
        case 23:
          Fa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (se = e = Xt(e.current, null)),
    (me = je = t),
    (ue = 0),
    (ro = null),
    (La = Hi = yn = 0),
    (Ee = zr = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function op(e, t) {
  do {
    var n = se;
    try {
      if ((ka(), (Qo.current = wi), yi)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yi = !1;
      }
      if (
        ((gn = 0),
        (ce = ae = te = null),
        (Ir = !1),
        (eo = 0),
        (Ra.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (ro = t), (se = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = me),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = vc(l);
          if (g !== null) {
            (g.flags &= -257),
              gc(g, l, s, i, t),
              g.mode & 1 && hc(i, u, t),
              (t = g),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              hc(i, u, t), za();
              break e;
            }
            a = Error(_(426));
          }
        } else if (J && s.mode & 1) {
          var k = vc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              gc(k, l, s, i, t),
              wa(tr(a, s));
            break e;
          }
        }
        (i = a = tr(a, s)),
          ue !== 4 && (ue = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = $f(i, a, t);
              uc(i, h);
              break e;
            case 1:
              s = a;
              var f = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Bf(i, s, t);
                uc(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      sp(n);
    } catch (N) {
      (t = N), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ip() {
  var e = xi.current;
  return (xi.current = wi), e === null ? wi : e;
}
function za() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(yn & 268435455) && !(Hi & 268435455)) || Wt(fe, me);
}
function Ci(e, t) {
  var n = B;
  B |= 2;
  var r = ip();
  (fe !== e || me !== t) && ((kt = null), pn(e, t));
  do
    try {
      fg();
      break;
    } catch (o) {
      op(e, o);
    }
  while (!0);
  if ((ka(), (B = n), (xi.current = r), se !== null)) throw Error(_(261));
  return (fe = null), (me = 0), ue;
}
function fg() {
  for (; se !== null; ) lp(se);
}
function pg() {
  for (; se !== null && !Fh(); ) lp(se);
}
function lp(e) {
  var t = up(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? sp(e) : (se = t),
    (Ra.current = null);
}
function sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lg(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (se = null);
        return;
      }
    } else if (((n = ig(n, t, je)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function an(e, t, n) {
  var r = Q,
    o = Ve.transition;
  try {
    (Ve.transition = null), (Q = 1), mg(e, t, n, r);
  } finally {
    (Ve.transition = o), (Q = r);
  }
  return null;
}
function mg(e, t, n, r) {
  do Qn();
  while (Bt !== null);
  if (B & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gh(e, i),
    e === fe && ((se = fe = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Io ||
      ((Io = !0),
      cp(oi, function () {
        return Qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ve.transition), (Ve.transition = null);
    var l = Q;
    Q = 1;
    var s = B;
    (B |= 4),
      (Ra.current = null),
      ag(e, n),
      tp(n, e),
      Rv(ps),
      (li = !!fs),
      (ps = fs = null),
      (e.current = n),
      ug(n),
      zh(),
      (B = s),
      (Q = l),
      (Ve.transition = i);
  } else e.current = n;
  if (
    (Io && ((Io = !1), (Bt = e), (Si = o)),
    (i = e.pendingLanes),
    i === 0 && (Gt = null),
    Bh(n.stateNode),
    De(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ki) throw ((ki = !1), (e = js), (js = null), e);
  return (
    Si & 1 && e.tag !== 0 && Qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Rs ? Wr++ : ((Wr = 0), (Rs = e))) : (Wr = 0),
    on(),
    null
  );
}
function Qn() {
  if (Bt !== null) {
    var e = Wd(Si),
      t = Ve.transition,
      n = Q;
    try {
      if (((Ve.transition = null), (Q = 16 > e ? 16 : e), Bt === null))
        var r = !1;
      else {
        if (((e = Bt), (Bt = null), (Si = 0), B & 6)) throw Error(_(331));
        var o = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child;
          if (O.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fr(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var m = c.sibling,
                        g = c.return;
                      if ((Zf(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (O = m);
                        break;
                      }
                      O = g;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (O = h);
                break e;
              }
              O = i.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          l = O;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (O = y);
          else
            e: for (l = f; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, s);
                  }
                } catch (N) {
                  re(s, s.return, N);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (O = S);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((B = o), on(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(Ri, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Ve.transition = t);
    }
  }
  return !1;
}
function Dc(e, t, n) {
  (t = tr(n, t)),
    (t = $f(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Se()),
    e !== null && (ao(e, 1, t), De(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Bf(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Se()),
            t !== null && (ao(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (me & n) === n &&
      (ue === 4 || (ue === 3 && (me & 130023424) === me && 500 > ie() - Aa)
        ? pn(e, 0)
        : (La |= n)),
    De(e, t);
}
function ap(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bo), (bo <<= 1), !(bo & 130023424) && (bo = 4194304))
      : (t = 1));
  var n = Se();
  (e = _t(e, t)), e !== null && (ao(e, t, n), De(e, n));
}
function vg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ap(e, n);
}
function gg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), ap(e, n);
}
var up;
up = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), og(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), J && t.flags & 1048576 && pf(t, pi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ko(e, t), (e = t.pendingProps);
      var o = qn(t, we.current);
      Yn(t, n), (o = Ma(null, t, r, e, o, n));
      var i = Da();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((i = !0), di(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Na(t),
            (o.updater = $i),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ss(t, r, e, n),
            (t = Es(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && ga(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = wg(r)),
          (e = Ke(r, e)),
          o)
        ) {
          case 0:
            t = Ns(null, t, r, e, n);
            break e;
          case 1:
            t = xc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = wc(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Ns(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        xc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Yf(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          wf(e, t),
          vi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = tr(Error(_(423)), t)), (t = kc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = tr(Error(_(424)), t)), (t = kc(e, t, r, n, o));
            break e;
          } else
            for (
              Le = Yt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                J = !0,
                qe = null,
                n = gf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zn(), r === o)) {
            t = Mt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xf(t),
        e === null && ws(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ms(r, o) ? (l = null) : i !== null && ms(r, i) && (t.flags |= 32),
        Vf(e, t),
        xe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ws(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return (
        Ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        yc(e, t, r, o, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          G(mi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (et(i.value, l)) {
            if (i.children === o.children && !_e.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Et(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      xs(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(_(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  xs(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ke(r, t.pendingProps)),
        (o = Ke(r.type, o)),
        wc(e, t, r, o, n)
      );
    case 15:
      return Hf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        Ko(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), di(t)) : (e = !1),
        Yn(t, n),
        Wf(t, r, o),
        Ss(t, r, o, n),
        Es(null, t, r, !0, e, n)
      );
    case 19:
      return Gf(e, t, n);
    case 22:
      return Uf(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function cp(e, t) {
  return Ad(e, t);
}
function yg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, t, n, r) {
  return new yg(e, t, n, r);
}
function Wa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wg(e) {
  if (typeof e == "function") return Wa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ia)) return 11;
    if (e === la) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Wa(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Tn:
        return mn(n.children, o, i, t);
      case oa:
        (l = 8), (o |= 8);
        break;
      case Yl:
        return (
          (e = Ue(12, n, t, o | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Ql:
        return (e = Ue(13, n, t, o)), (e.elementType = Ql), (e.lanes = i), e;
      case Gl:
        return (e = Ue(19, n, t, o)), (e.elementType = Gl), (e.lanes = i), e;
      case wd:
        return Ui(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gd:
              l = 10;
              break e;
            case yd:
              l = 9;
              break e;
            case ia:
              l = 11;
              break e;
            case la:
              l = 14;
              break e;
            case It:
              (l = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Ui(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = wd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Tl(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Ol(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fl(0)),
    (this.expirationTimes = fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function $a(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new xg(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ue(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Na(i),
    e
  );
}
function kg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function dp(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return df(e, n, t);
  }
  return t;
}
function fp(e, t, n, r, o, i, l, s, a) {
  return (
    (e = $a(n, r, !0, e, o, i, l, s, a)),
    (e.context = dp(null)),
    (n = e.current),
    (r = Se()),
    (o = Kt(n)),
    (i = Et(r, o)),
    (i.callback = t ?? null),
    Qt(n, i, o),
    (e.current.lanes = o),
    ao(e, o, r),
    De(e, r),
    e
  );
}
function Vi(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = Kt(o);
  return (
    (n = dp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(o, t, l)),
    e !== null && (Je(e, o, l, i), Yo(e, o, l)),
    l
  );
}
function Ni(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ba(e, t) {
  Tc(e, t), (e = e.alternate) && Tc(e, t);
}
var pp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
Yi.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Vi(e, t, null, null);
};
Yi.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      Vi(null, e, null, null);
    }),
      (t[bt] = null);
  }
};
function Yi(e) {
  this._internalRoot = e;
}
Yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Vd(e);
  }
};
function Ua(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oc() {}
function Sg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ni(l);
        i.call(u);
      };
    }
    var l = fp(t, r, e, 0, null, !1, !1, "", Oc);
    return (
      (e._reactRootContainer = l),
      (e[bt] = l.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ni(a);
      s.call(u);
    };
  }
  var a = $a(e, 0, !1, null, null, !1, !1, "", Oc);
  return (
    (e._reactRootContainer = a),
    (e[bt] = a.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      Vi(t, a, n, r);
    }),
    a
  );
}
function Gi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Ni(l);
        s.call(a);
      };
    }
    Vi(t, l, e, o);
  } else l = Sg(n, t, e, o, r);
  return Ni(l);
}
$d = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 &&
          (ua(t, n | 1), De(t, ie()), !(B & 6) && ((nr = ie() + 500), on()));
      }
      break;
    case 13:
      wn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var o = Se();
          Je(r, e, 1, o);
        }
      }),
        Ba(e, 1);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    Ba(e, 134217728);
  }
};
Bd = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    Ba(e, t);
  }
};
Hd = function () {
  return Q;
};
Ud = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
os = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fi(r);
            if (!o) throw Error(_(90));
            kd(r), ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      Cd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Dd = Ia;
Td = wn;
var Cg = { usingClientEntryPoint: !1, Events: [co, Ln, Fi, _d, Md, Ia] },
  Cr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ng = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fo.isDisabled && Fo.supportsFiber)
    try {
      (Ri = Fo.inject(Ng)), (ut = Fo);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cg;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ua(t)) throw Error(_(200));
  return kg(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Ua(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = pp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, o)),
    (e[bt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Rd(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return wn(e);
};
We.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(_(200));
  return Gi(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Ua(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = pp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = fp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[bt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yi(t);
};
We.render = function (e, t, n) {
  if (!Qi(t)) throw Error(_(200));
  return Gi(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (wn(function () {
        Gi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Ia;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Gi(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (e) {
      console.error(e);
    }
}
mp(), (pd.exports = We);
var Ki = pd.exports;
const Eg = Xs(Ki);
var hp,
  jc = Ki;
(hp = jc.createRoot), jc.hydrateRoot;
function de(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function po(e, t = []) {
  let n = [];
  function r(i, l) {
    const s = x.createContext(l),
      a = n.length;
    n = [...n, l];
    const u = (d) => {
      var h;
      const { scope: m, children: g, ...v } = d,
        w = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || s,
        k = x.useMemo(() => v, Object.values(v));
      return p.jsx(w.Provider, { value: k, children: g });
    };
    u.displayName = i + "Provider";
    function c(d, m) {
      var w;
      const g = ((w = m == null ? void 0 : m[e]) == null ? void 0 : w[a]) || s,
        v = x.useContext(g);
      if (v) return v;
      if (l !== void 0) return l;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((l) => x.createContext(l));
    return function (s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a]);
    };
  };
  return (o.scopeName = e), [r, Pg(o, ...t)];
}
function Pg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return { ...s, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Rc(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function vp(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Rc(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Rc(e[o], null);
        }
      };
  };
}
function ft(...e) {
  return x.useCallback(vp(...e), e);
}
var Ei = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = x.Children.toArray(n),
    i = o.find(bg);
  if (i) {
    const l = i.props.children,
      s = o.map((a) =>
        a === i
          ? x.Children.count(l) > 1
            ? x.Children.only(null)
            : x.isValidElement(l)
            ? l.props.children
            : null
          : a
      );
    return p.jsx(Is, {
      ...r,
      ref: t,
      children: x.isValidElement(l) ? x.cloneElement(l, void 0, s) : null,
    });
  }
  return p.jsx(Is, { ...r, ref: t, children: n });
});
Ei.displayName = "Slot";
var Is = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const o = Mg(n);
    return x.cloneElement(n, { ..._g(r, n.props), ref: t ? vp(t, o) : o });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
Is.displayName = "SlotClone";
var gp = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function bg(e) {
  return x.isValidElement(e) && e.type === gp;
}
function _g(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...s) => {
            i(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Mg(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Dg(e) {
  const t = e + "CollectionProvider",
    [n, r] = po(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = (g) => {
      const { scope: v, children: w } = g,
        k = xt.useRef(null),
        h = xt.useRef(new Map()).current;
      return p.jsx(o, { scope: v, itemMap: h, collectionRef: k, children: w });
    };
  l.displayName = t;
  const s = e + "CollectionSlot",
    a = xt.forwardRef((g, v) => {
      const { scope: w, children: k } = g,
        h = i(s, w),
        f = ft(v, h.collectionRef);
      return p.jsx(Ei, { ref: f, children: k });
    });
  a.displayName = s;
  const u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    d = xt.forwardRef((g, v) => {
      const { scope: w, children: k, ...h } = g,
        f = xt.useRef(null),
        y = ft(v, f),
        S = i(u, w);
      return (
        xt.useEffect(
          () => (
            S.itemMap.set(f, { ref: f, ...h }), () => void S.itemMap.delete(f)
          )
        ),
        p.jsx(Ei, { [c]: "", ref: y, children: k })
      );
    });
  d.displayName = u;
  function m(g) {
    const v = i(e + "CollectionConsumer", g);
    return xt.useCallback(() => {
      const k = v.collectionRef.current;
      if (!k) return [];
      const h = Array.from(k.querySelectorAll(`[${c}]`));
      return Array.from(v.itemMap.values()).sort(
        (S, N) => h.indexOf(S.ref.current) - h.indexOf(N.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: l, Slot: a, ItemSlot: d }, m, r];
}
var xn =
    globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Tg = hh.useId || (() => {}),
  Og = 0;
function Va(e) {
  const [t, n] = x.useState(Tg());
  return (
    xn(() => {
      e || n((r) => r ?? String(Og++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var jg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Oe = jg.reduce((e, t) => {
    const n = x.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        s = i ? Ei : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(s, { ...l, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Rg(e, t) {
  e && Ki.flushSync(() => e.dispatchEvent(t));
}
function En(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Ya({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Lg({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    s = En(n),
    a = x.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && s(d);
        } else o(u);
      },
      [i, e, o, s]
    );
  return [l, a];
}
function Lg({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = En(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var Ag = x.createContext(void 0);
function yp(e) {
  const t = x.useContext(Ag);
  return e || t || "ltr";
}
var jl = "rovingFocusGroup.onEntryFocus",
  Ig = { bubbles: !1, cancelable: !0 },
  Xi = "RovingFocusGroup",
  [Fs, wp, Fg] = Dg(Xi),
  [zg, xp] = po(Xi, [Fg]),
  [Wg, $g] = zg(Xi),
  kp = x.forwardRef((e, t) =>
    p.jsx(Fs.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(Fs.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(Bg, { ...e, ref: t }),
      }),
    })
  );
kp.displayName = Xi;
var Bg = x.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: l,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: a,
        onEntryFocus: u,
        preventScrollOnEntryFocus: c = !1,
        ...d
      } = e,
      m = x.useRef(null),
      g = ft(t, m),
      v = yp(i),
      [w = null, k] = Ya({ prop: l, defaultProp: s, onChange: a }),
      [h, f] = x.useState(!1),
      y = En(u),
      S = wp(n),
      N = x.useRef(!1),
      [P, E] = x.useState(0);
    return (
      x.useEffect(() => {
        const b = m.current;
        if (b)
          return b.addEventListener(jl, y), () => b.removeEventListener(jl, y);
      }, [y]),
      p.jsx(Wg, {
        scope: n,
        orientation: r,
        dir: v,
        loop: o,
        currentTabStopId: w,
        onItemFocus: x.useCallback((b) => k(b), [k]),
        onItemShiftTab: x.useCallback(() => f(!0), []),
        onFocusableItemAdd: x.useCallback(() => E((b) => b + 1), []),
        onFocusableItemRemove: x.useCallback(() => E((b) => b - 1), []),
        children: p.jsx(Oe.div, {
          tabIndex: h || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: de(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: de(e.onFocus, (b) => {
            const A = !N.current;
            if (b.target === b.currentTarget && A && !h) {
              const T = new CustomEvent(jl, Ig);
              if ((b.currentTarget.dispatchEvent(T), !T.defaultPrevented)) {
                const W = S().filter((z) => z.focusable),
                  R = W.find((z) => z.active),
                  U = W.find((z) => z.id === w),
                  oe = [R, U, ...W].filter(Boolean).map((z) => z.ref.current);
                Np(oe, c);
              }
            }
            N.current = !1;
          }),
          onBlur: de(e.onBlur, () => f(!1)),
        }),
      })
    );
  }),
  Sp = "RovingFocusGroupItem",
  Cp = x.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...l
      } = e,
      s = Va(),
      a = i || s,
      u = $g(Sp, n),
      c = u.currentTabStopId === a,
      d = wp(n),
      { onFocusableItemAdd: m, onFocusableItemRemove: g } = u;
    return (
      x.useEffect(() => {
        if (r) return m(), () => g();
      }, [r, m, g]),
      p.jsx(Fs.ItemSlot, {
        scope: n,
        id: a,
        focusable: r,
        active: o,
        children: p.jsx(Oe.span, {
          tabIndex: c ? 0 : -1,
          "data-orientation": u.orientation,
          ...l,
          ref: t,
          onMouseDown: de(e.onMouseDown, (v) => {
            r ? u.onItemFocus(a) : v.preventDefault();
          }),
          onFocus: de(e.onFocus, () => u.onItemFocus(a)),
          onKeyDown: de(e.onKeyDown, (v) => {
            if (v.key === "Tab" && v.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (v.target !== v.currentTarget) return;
            const w = Vg(v, u.orientation, u.dir);
            if (w !== void 0) {
              if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
              v.preventDefault();
              let h = d()
                .filter((f) => f.focusable)
                .map((f) => f.ref.current);
              if (w === "last") h.reverse();
              else if (w === "prev" || w === "next") {
                w === "prev" && h.reverse();
                const f = h.indexOf(v.currentTarget);
                h = u.loop ? Yg(h, f + 1) : h.slice(f + 1);
              }
              setTimeout(() => Np(h));
            }
          }),
        }),
      })
    );
  });
Cp.displayName = Sp;
var Hg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function Ug(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function Vg(e, t, n) {
  const r = Ug(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return Hg[r];
}
function Np(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function Yg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Qg = kp,
  Gg = Cp;
function Kg(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var qi = (e) => {
  const { present: t, children: n } = e,
    r = Xg(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = ft(r.ref, qg(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
qi.displayName = "Presence";
function Xg(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, a] = Kg(l, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = zo(r.current);
      i.current = s === "mounted" ? u : "none";
    }, [s]),
    xn(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const m = i.current,
          g = zo(u);
        e
          ? a("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && m !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    xn(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (g) => {
            const w = zo(r.current).includes(g.animationName);
            if (g.target === t && w && (a("ANIMATION_END"), !o.current)) {
              const k = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = k);
                }));
            }
          },
          m = (g) => {
            g.target === t && (i.current = zo(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: x.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function zo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function qg(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Qa = "Tabs",
  [Zg, tS] = po(Qa, [xp]),
  Ep = xp(),
  [Jg, Ga] = Zg(Qa),
  Pp = x.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: l = "horizontal",
        dir: s,
        activationMode: a = "automatic",
        ...u
      } = e,
      c = yp(s),
      [d, m] = Ya({ prop: r, onChange: o, defaultProp: i });
    return p.jsx(Jg, {
      scope: n,
      baseId: Va(),
      value: d,
      onValueChange: m,
      orientation: l,
      dir: c,
      activationMode: a,
      children: p.jsx(Oe.div, { dir: c, "data-orientation": l, ...u, ref: t }),
    });
  });
Pp.displayName = Qa;
var bp = "TabsList",
  _p = x.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e,
      i = Ga(bp, n),
      l = Ep(n);
    return p.jsx(Qg, {
      asChild: !0,
      ...l,
      orientation: i.orientation,
      dir: i.dir,
      loop: r,
      children: p.jsx(Oe.div, {
        role: "tablist",
        "aria-orientation": i.orientation,
        ...o,
        ref: t,
      }),
    });
  });
_p.displayName = bp;
var Mp = "TabsTrigger",
  Dp = x.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e,
      l = Ga(Mp, n),
      s = Ep(n),
      a = jp(l.baseId, r),
      u = Rp(l.baseId, r),
      c = r === l.value;
    return p.jsx(Gg, {
      asChild: !0,
      ...s,
      focusable: !o,
      active: c,
      children: p.jsx(Oe.button, {
        type: "button",
        role: "tab",
        "aria-selected": c,
        "aria-controls": u,
        "data-state": c ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: a,
        ...i,
        ref: t,
        onMouseDown: de(e.onMouseDown, (d) => {
          !o && d.button === 0 && d.ctrlKey === !1
            ? l.onValueChange(r)
            : d.preventDefault();
        }),
        onKeyDown: de(e.onKeyDown, (d) => {
          [" ", "Enter"].includes(d.key) && l.onValueChange(r);
        }),
        onFocus: de(e.onFocus, () => {
          const d = l.activationMode !== "manual";
          !c && !o && d && l.onValueChange(r);
        }),
      }),
    });
  });
Dp.displayName = Mp;
var Tp = "TabsContent",
  Op = x.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: i, ...l } = e,
      s = Ga(Tp, n),
      a = jp(s.baseId, r),
      u = Rp(s.baseId, r),
      c = r === s.value,
      d = x.useRef(c);
    return (
      x.useEffect(() => {
        const m = requestAnimationFrame(() => (d.current = !1));
        return () => cancelAnimationFrame(m);
      }, []),
      p.jsx(qi, {
        present: o || c,
        children: ({ present: m }) =>
          p.jsx(Oe.div, {
            "data-state": c ? "active" : "inactive",
            "data-orientation": s.orientation,
            role: "tabpanel",
            "aria-labelledby": a,
            hidden: !m,
            id: u,
            tabIndex: 0,
            ...l,
            ref: t,
            style: { ...e.style, animationDuration: d.current ? "0s" : void 0 },
            children: m && i,
          }),
      })
    );
  });
Op.displayName = Tp;
function jp(e, t) {
  return `${e}-trigger-${t}`;
}
function Rp(e, t) {
  return `${e}-content-${t}`;
}
var ey = Pp,
  Lp = _p,
  Ap = Dp,
  Ip = Op;
function Fp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ty() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ka = "-",
  ny = (e) => {
    const t = oy(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (l) => {
        const s = l.split(Ka);
        return s[0] === "" && s.length !== 1 && s.shift(), zp(s, t) || ry(l);
      },
      getConflictingClassGroupIds: (l, s) => {
        const a = n[l] || [];
        return s && r[l] ? [...a, ...r[l]] : a;
      },
    };
  },
  zp = (e, t) => {
    var l;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? zp(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Ka);
    return (l = t.validators.find(({ validator: s }) => s(i))) == null
      ? void 0
      : l.classGroupId;
  },
  Lc = /^\[(.+)\]$/,
  ry = (e) => {
    if (Lc.test(e)) {
      const t = Lc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  oy = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      ly(Object.entries(e.classGroups), n).forEach(([i, l]) => {
        zs(l, r, i, t);
      }),
      r
    );
  },
  zs = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Ac(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (iy(o)) {
          zs(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, l]) => {
        zs(l, Ac(t, i), n, r);
      });
    });
  },
  Ac = (e, t) => {
    let n = e;
    return (
      t.split(Ka).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  iy = (e) => e.isThemeGetter,
  ly = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([l, s]) => [t + l, s])
                )
              : i
          );
          return [n, o];
        })
      : e,
  sy = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, l) => {
      n.set(i, l), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let l = n.get(i);
        if (l !== void 0) return l;
        if ((l = r.get(i)) !== void 0) return o(i, l), l;
      },
      set(i, l) {
        n.has(i) ? n.set(i, l) : o(i, l);
      },
    };
  },
  Wp = "!",
  ay = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      l = (s) => {
        const a = [];
        let u = 0,
          c = 0,
          d;
        for (let k = 0; k < s.length; k++) {
          let h = s[k];
          if (u === 0) {
            if (h === o && (r || s.slice(k, k + i) === t)) {
              a.push(s.slice(c, k)), (c = k + i);
              continue;
            }
            if (h === "/") {
              d = k;
              continue;
            }
          }
          h === "[" ? u++ : h === "]" && u--;
        }
        const m = a.length === 0 ? s : s.substring(c),
          g = m.startsWith(Wp),
          v = g ? m.substring(1) : m,
          w = d && d > c ? d - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: g,
          baseClassName: v,
          maybePostfixModifierPosition: w,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: l }) : l;
  },
  uy = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  cy = (e) => ({ cache: sy(e.cacheSize), parseClassName: ay(e), ...ny(e) }),
  dy = /\s+/,
  fy = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      l = e.trim().split(dy);
    let s = "";
    for (let a = l.length - 1; a >= 0; a -= 1) {
      const u = l[a],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: m,
          maybePostfixModifierPosition: g,
        } = n(u);
      let v = !!g,
        w = r(v ? m.substring(0, g) : m);
      if (!w) {
        if (!v) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((w = r(m)), !w)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        v = !1;
      }
      const k = uy(c).join(":"),
        h = d ? k + Wp : k,
        f = h + w;
      if (i.includes(f)) continue;
      i.push(f);
      const y = o(w, v);
      for (let S = 0; S < y.length; ++S) {
        const N = y[S];
        i.push(h + N);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function py() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = $p(t)) && (r && (r += " "), (r += n));
  return r;
}
const $p = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = $p(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function my(e, ...t) {
  let n,
    r,
    o,
    i = l;
  function l(a) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = cy(u)), (r = n.cache.get), (o = n.cache.set), (i = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const c = fy(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(py.apply(null, arguments));
  };
}
const X = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Bp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  hy = /^\d+\/\d+$/,
  vy = new Set(["px", "full", "screen"]),
  gy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  xy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ky =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  yt = (e) => Gn(e) || vy.has(e) || hy.test(e),
  Rt = (e) => cr(e, "length", My),
  Gn = (e) => !!e && !Number.isNaN(Number(e)),
  Rl = (e) => cr(e, "number", Gn),
  Nr = (e) => !!e && Number.isInteger(Number(e)),
  Sy = (e) => e.endsWith("%") && Gn(e.slice(0, -1)),
  I = (e) => Bp.test(e),
  Lt = (e) => gy.test(e),
  Cy = new Set(["length", "size", "percentage"]),
  Ny = (e) => cr(e, Cy, Hp),
  Ey = (e) => cr(e, "position", Hp),
  Py = new Set(["image", "url"]),
  by = (e) => cr(e, Py, Ty),
  _y = (e) => cr(e, "", Dy),
  Er = () => !0,
  cr = (e, t, n) => {
    const r = Bp.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  My = (e) => yy.test(e) && !wy.test(e),
  Hp = () => !1,
  Dy = (e) => xy.test(e),
  Ty = (e) => ky.test(e),
  Oy = () => {
    const e = X("colors"),
      t = X("spacing"),
      n = X("blur"),
      r = X("brightness"),
      o = X("borderColor"),
      i = X("borderRadius"),
      l = X("borderSpacing"),
      s = X("borderWidth"),
      a = X("contrast"),
      u = X("grayscale"),
      c = X("hueRotate"),
      d = X("invert"),
      m = X("gap"),
      g = X("gradientColorStops"),
      v = X("gradientColorStopPositions"),
      w = X("inset"),
      k = X("margin"),
      h = X("opacity"),
      f = X("padding"),
      y = X("saturate"),
      S = X("scale"),
      N = X("sepia"),
      P = X("skew"),
      E = X("space"),
      b = X("translate"),
      A = () => ["auto", "contain", "none"],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", I, t],
      R = () => [I, t],
      U = () => ["", yt, Rt],
      V = () => ["auto", Gn, I],
      oe = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      M = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      D = () => ["", "0", I],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [Gn, I];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Er],
        spacing: [yt, Rt],
        blur: ["none", "", Lt, I],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Lt, I],
        borderSpacing: R(),
        borderWidth: U(),
        contrast: F(),
        grayscale: D(),
        hueRotate: F(),
        invert: D(),
        gap: R(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Sy, Rt],
        inset: W(),
        margin: W(),
        opacity: F(),
        padding: R(),
        saturate: F(),
        scale: F(),
        sepia: D(),
        skew: F(),
        space: R(),
        translate: R(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", I] }],
        container: ["container"],
        columns: [{ columns: [Lt] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...oe(), I] }],
        overflow: [{ overflow: T() }],
        "overflow-x": [{ "overflow-x": T() }],
        "overflow-y": [{ "overflow-y": T() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [w] }],
        "inset-x": [{ "inset-x": [w] }],
        "inset-y": [{ "inset-y": [w] }],
        start: [{ start: [w] }],
        end: [{ end: [w] }],
        top: [{ top: [w] }],
        right: [{ right: [w] }],
        bottom: [{ bottom: [w] }],
        left: [{ left: [w] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Nr, I] }],
        basis: [{ basis: W() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
        grow: [{ grow: D() }],
        shrink: [{ shrink: D() }],
        order: [{ order: ["first", "last", "none", Nr, I] }],
        "grid-cols": [{ "grid-cols": [Er] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Nr, I] }, I] }],
        "col-start": [{ "col-start": V() }],
        "col-end": [{ "col-end": V() }],
        "grid-rows": [{ "grid-rows": [Er] }],
        "row-start-end": [{ row: ["auto", { span: [Nr, I] }, I] }],
        "row-start": [{ "row-start": V() }],
        "row-end": [{ "row-end": V() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] }],
        "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              I,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Lt] },
              Lt,
            ],
          },
        ],
        h: [{ h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Lt, Rt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Rl,
            ],
          },
        ],
        "font-family": [{ font: [Er] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              I,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Gn, Rl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              yt,
              I,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", I] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", yt, Rt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", yt, I] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: R() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", I] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...oe(), Ey] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ny] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              by,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [yt, I] }],
        "outline-w": [{ outline: [yt, Rt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [yt, Rt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Lt, _y] }],
        "shadow-color": [{ shadow: [Er] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...M(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": M() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Lt, I] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [N] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [N] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              I,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Nr, I] }],
        "translate-x": [{ "translate-x": [b] }],
        "translate-y": [{ "translate-y": [b] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              I,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": R() }],
        "scroll-mx": [{ "scroll-mx": R() }],
        "scroll-my": [{ "scroll-my": R() }],
        "scroll-ms": [{ "scroll-ms": R() }],
        "scroll-me": [{ "scroll-me": R() }],
        "scroll-mt": [{ "scroll-mt": R() }],
        "scroll-mr": [{ "scroll-mr": R() }],
        "scroll-mb": [{ "scroll-mb": R() }],
        "scroll-ml": [{ "scroll-ml": R() }],
        "scroll-p": [{ "scroll-p": R() }],
        "scroll-px": [{ "scroll-px": R() }],
        "scroll-py": [{ "scroll-py": R() }],
        "scroll-ps": [{ "scroll-ps": R() }],
        "scroll-pe": [{ "scroll-pe": R() }],
        "scroll-pt": [{ "scroll-pt": R() }],
        "scroll-pr": [{ "scroll-pr": R() }],
        "scroll-pb": [{ "scroll-pb": R() }],
        "scroll-pl": [{ "scroll-pl": R() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", I] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [yt, Rt, Rl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  jy = my(Oy);
function Zi(...e) {
  return jy(ty(e));
}
function Pi(e) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(e);
}
const Ry = ey,
  Up = x.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Lp, {
      ref: n,
      className: Zi(
        "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
        e
      ),
      ...t,
    })
  );
Up.displayName = Lp.displayName;
const Ws = x.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ap, {
    ref: n,
    className: Zi(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
      e
    ),
    ...t,
  })
);
Ws.displayName = Ap.displayName;
const $s = x.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Ip, {
    ref: n,
    className: Zi(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
      e
    ),
    ...t,
  })
);
$s.displayName = Ip.displayName;
const Ly = (e) => {
    let t;
    const n = new Set(),
      r = (c, d) => {
        const m = typeof c == "function" ? c(t) : c;
        if (!Object.is(m, t)) {
          const g = t;
          (t =
            d ?? (typeof m != "object" || m === null)
              ? m
              : Object.assign({}, t, m)),
            n.forEach((v) => v(t, g));
        }
      },
      o = () => t,
      a = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
        destroy: () => {
          n.clear();
        },
      },
      u = (t = e(r, o, a));
    return a;
  },
  Ay = (e) => Ly(e);
var Vp = { exports: {} },
  Yp = {},
  Qp = { exports: {} },
  Gp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = x;
function Iy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fy = typeof Object.is == "function" ? Object.is : Iy,
  zy = rr.useState,
  Wy = rr.useEffect,
  $y = rr.useLayoutEffect,
  By = rr.useDebugValue;
function Hy(e, t) {
  var n = t(),
    r = zy({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    $y(
      function () {
        (o.value = n), (o.getSnapshot = t), Ll(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    Wy(
      function () {
        return (
          Ll(o) && i({ inst: o }),
          e(function () {
            Ll(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    By(n),
    n
  );
}
function Ll(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fy(e, n);
  } catch {
    return !0;
  }
}
function Uy(e, t) {
  return t();
}
var Vy =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Uy
    : Hy;
Gp.useSyncExternalStore =
  rr.useSyncExternalStore !== void 0 ? rr.useSyncExternalStore : Vy;
Qp.exports = Gp;
var Yy = Qp.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = x,
  Qy = Yy;
function Gy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ky = typeof Object.is == "function" ? Object.is : Gy,
  Xy = Qy.useSyncExternalStore,
  qy = Ji.useRef,
  Zy = Ji.useEffect,
  Jy = Ji.useMemo,
  e0 = Ji.useDebugValue;
Yp.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = qy(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Jy(
    function () {
      function a(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), o !== void 0 && l.hasValue)) {
            var v = l.value;
            if (o(v, g)) return (d = v);
          }
          return (d = g);
        }
        if (((v = d), Ky(c, g))) return v;
        var w = r(g);
        return o !== void 0 && o(v, w) ? v : ((c = g), (d = w));
      }
      var u = !1,
        c,
        d,
        m = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        m === null
          ? void 0
          : function () {
              return a(m());
            },
      ];
    },
    [t, n, r, o]
  );
  var s = Xy(e, i[0], i[1]);
  return (
    Zy(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s]
    ),
    e0(s),
    s
  );
};
Vp.exports = Yp;
var t0 = Vp.exports;
const n0 = Xs(t0),
  { useDebugValue: r0 } = xt,
  { useSyncExternalStoreWithSelector: o0 } = n0,
  i0 = (e) => e;
function l0(e, t = i0, n) {
  const r = o0(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return r0(r), r;
}
const s0 = (e) => {
    const t = typeof e == "function" ? Ay(e) : e,
      n = (r, o) => l0(t, r, o);
    return Object.assign(n, t), n;
  },
  a0 = (e) => s0(e),
  u0 = [
    {
      id: "1",
      name: "LinkedIn Post",
      description: "Post on company LinkedIn page",
      sequence: 1,
      isMandatory: !0,
    },
    {
      id: "2",
      name: "LinkedIn Message",
      description: "Direct message on LinkedIn",
      sequence: 2,
      isMandatory: !0,
    },
    {
      id: "3",
      name: "Email",
      description: "Email communication",
      sequence: 3,
      isMandatory: !0,
    },
    {
      id: "4",
      name: "Phone Call",
      description: "Phone call communication",
      sequence: 4,
      isMandatory: !1,
    },
    {
      id: "5",
      name: "Other",
      description: "Other forms of communication",
      sequence: 5,
      isMandatory: !1,
    },
  ],
  mo = a0((e) => ({
    companies: [],
    communications: [],
    communicationMethods: u0,
    addCompany: (t) => e((n) => ({ companies: [...n.companies, t] })),
    updateCompany: (t) =>
      e((n) => ({
        companies: n.companies.map((r) => (r.id === t.id ? t : r)),
      })),
    deleteCompany: (t) =>
      e((n) => ({ companies: n.companies.filter((r) => r.id !== t) })),
    addCommunication: (t) =>
      e((n) => ({ communications: [...n.communications, t] })),
    updateCommunication: (t) =>
      e((n) => ({
        communications: n.communications.map((r) => (r.id === t.id ? t : r)),
      })),
    deleteCommunication: (t) =>
      e((n) => ({
        communications: n.communications.filter((r) => r.id !== t),
      })),
  }));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var c0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  dr = (e, t) => {
    const n = x.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: l,
          className: s = "",
          children: a,
          ...u
        },
        c
      ) =>
        x.createElement(
          "svg",
          {
            ref: c,
            ...c0,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: l ? (Number(i) * 24) / Number(o) : i,
            className: ["lucide", `lucide-${d0(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([d, m]) => x.createElement(d, m)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f0 = dr("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p0 = dr("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m0 = dr("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h0 = dr("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v0 = dr("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g0 = dr("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function y0() {
  const {
      companies: e,
      addCompany: t,
      updateCompany: n,
      deleteCompany: r,
    } = mo(),
    [o, i] = x.useState(!1),
    [l, s] = x.useState(null),
    a = {
      name: "",
      location: "",
      linkedInProfile: "",
      emails: [""],
      phoneNumbers: [""],
      comments: "",
      communicationPeriodicity: 14,
    },
    [u, c] = x.useState(a),
    d = (v) => {
      v.preventDefault(),
        o && l ? n({ ...u, id: l.id }) : t({ ...u, id: crypto.randomUUID() }),
        c(a),
        i(!1),
        s(null);
    },
    m = (v) => {
      i(!0), s(v), c(v);
    },
    g = (v) => {
      window.confirm("Are you sure you want to delete this company?") && r(v);
    };
  return p.jsxs("div", {
    className: "space-y-6",
    children: [
      p.jsxs("button", {
        onClick: () => {
          i(!1), s(null), c(a);
        },
        className:
          "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
        children: [p.jsx(m0, { className: "w-4 h-4 mr-2" }), "Add Company"],
      }),
      p.jsxs("form", {
        onSubmit: d,
        className: "space-y-4 bg-white p-6 rounded-lg shadow",
        children: [
          p.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              p.jsxs("div", {
                children: [
                  p.jsx("label", {
                    className: "block text-sm font-medium text-gray-700",
                    children: "Company Name",
                  }),
                  p.jsx("input", {
                    type: "text",
                    value: u.name,
                    onChange: (v) => c({ ...u, name: v.target.value }),
                    className:
                      "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                    required: !0,
                    placeholder: "Company Name",
                  }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("label", {
                    className: "block text-sm font-medium text-gray-700",
                    children: "Location",
                  }),
                  p.jsx("input", {
                    type: "text",
                    value: u.location,
                    onChange: (v) => c({ ...u, location: v.target.value }),
                    className:
                      "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                    required: !0,
                    placeholder: "Company Location",
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("label", {
                className: "block text-sm font-medium text-gray-700",
                children: "LinkedIn Profile",
              }),
              p.jsx("input", {
                type: "url",
                value: u.linkedInProfile,
                onChange: (v) => c({ ...u, linkedInProfile: v.target.value }),
                className:
                  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                required: !0,
                placeholder: "LinkedIn Profile",
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("label", {
                className: "block text-sm font-medium text-gray-700",
                children: "Email Addresses",
              }),
              u.emails.map((v, w) =>
                p.jsxs(
                  "div",
                  {
                    className: "flex mt-1",
                    children: [
                      p.jsx("input", {
                        type: "email",
                        value: v,
                        onChange: (k) => {
                          const h = [...u.emails];
                          (h[w] = k.target.value), c({ ...u, emails: h });
                        },
                        className:
                          "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        required: !0,
                        placeholder: "Email Address",
                      }),
                      w === u.emails.length - 1 &&
                        p.jsx("button", {
                          type: "button",
                          onClick: () => c({ ...u, emails: [...u.emails, ""] }),
                          className:
                            "ml-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200",
                          children: "+",
                        }),
                    ],
                  },
                  w
                )
              ),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("label", {
                className: "block text-sm font-medium text-gray-700",
                children: "Phone Numbers",
              }),
              u.phoneNumbers.map((v, w) =>
                p.jsxs(
                  "div",
                  {
                    className: "flex mt-1",
                    children: [
                      p.jsx("input", {
                        type: "tel",
                        value: v,
                        onChange: (k) => {
                          const h = [...u.phoneNumbers];
                          (h[w] = k.target.value), c({ ...u, phoneNumbers: h });
                        },
                        className:
                          "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        required: !0,
                        placeholder: "Phone Number",
                      }),
                      w === u.phoneNumbers.length - 1 &&
                        p.jsx("button", {
                          type: "button",
                          onClick: () =>
                            c({ ...u, phoneNumbers: [...u.phoneNumbers, ""] }),
                          className:
                            "ml-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200",
                          children: "+",
                        }),
                    ],
                  },
                  w
                )
              ),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("label", {
                className: "block text-sm font-medium text-gray-700",
                children: "Communication Periodicity (days)",
              }),
              p.jsx("input", {
                type: "number",
                min: "1",
                value: u.communicationPeriodicity,
                onChange: (v) =>
                  c({
                    ...u,
                    communicationPeriodicity: parseInt(v.target.value),
                  }),
                className:
                  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                required: !0,
                placeholder: "Communication Periodicity",
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("label", {
                className: "block text-sm font-medium text-gray-700",
                children: "Comments",
              }),
              p.jsx("textarea", {
                value: u.comments,
                onChange: (v) => c({ ...u, comments: v.target.value }),
                className:
                  "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                rows: 3,
                placeholder: "Comments",
              }),
            ],
          }),
          p.jsx("button", {
            type: "submit",
            className:
              "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: o ? "Update Company" : "Add Company",
          }),
        ],
      }),
      p.jsx("div", {
        className: "bg-white shadow rounded-lg overflow-hidden",
        children: p.jsxs("table", {
          className: "min-w-full divide-y divide-gray-200",
          children: [
            p.jsx("thead", {
              className: "bg-gray-50",
              children: p.jsxs("tr", {
                children: [
                  p.jsx("th", {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Company",
                  }),
                  p.jsx("th", {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Location",
                  }),
                  p.jsx("th", {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Periodicity",
                  }),
                  p.jsx("th", {
                    className:
                      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    children: "Actions",
                  }),
                ],
              }),
            }),
            p.jsx("tbody", {
              className: "bg-white divide-y divide-gray-200",
              children: e.map((v) =>
                p.jsxs(
                  "tr",
                  {
                    children: [
                      p.jsxs("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: [
                          p.jsx("div", {
                            className: "text-sm font-medium text-gray-900",
                            children: v.name,
                          }),
                          p.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: v.emails[0],
                          }),
                        ],
                      }),
                      p.jsx("td", {
                        className:
                          "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                        children: v.location,
                      }),
                      p.jsxs("td", {
                        className:
                          "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                        children: [v.communicationPeriodicity, " days"],
                      }),
                      p.jsxs("td", {
                        className:
                          "px-6 py-4 whitespace-nowrap text-sm font-medium",
                        children: [
                          p.jsx("button", {
                            onClick: () => m(v),
                            className: "text-blue-600 hover:text-blue-900 mr-4",
                            title: "Edit Company",
                            children: p.jsx(h0, { className: "w-4 h-4" }),
                          }),
                          p.jsx("button", {
                            onClick: () => g(v.id),
                            className: "text-red-600 hover:text-red-900",
                            title: "Delete Company",
                            children: p.jsx(v0, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  },
                  v.id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function w0() {
  const { communicationMethods: e } = mo();
  return p.jsx("div", {
    className: "bg-white shadow rounded-lg overflow-hidden",
    children: p.jsxs("table", {
      className: "min-w-full divide-y divide-gray-200",
      children: [
        p.jsx("thead", {
          className: "bg-gray-50",
          children: p.jsxs("tr", {
            children: [
              p.jsx("th", {
                className:
                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                children: "Method",
              }),
              p.jsx("th", {
                className:
                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                children: "Description",
              }),
              p.jsx("th", {
                className:
                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                children: "Sequence",
              }),
              p.jsx("th", {
                className:
                  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                children: "Mandatory",
              }),
            ],
          }),
        }),
        p.jsx("tbody", {
          className: "bg-white divide-y divide-gray-200",
          children: e.map((t) =>
            p.jsxs(
              "tr",
              {
                children: [
                  p.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap",
                    children: p.jsx("div", {
                      className: "text-sm font-medium text-gray-900",
                      children: t.name,
                    }),
                  }),
                  p.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap",
                    children: p.jsx("div", {
                      className: "text-sm text-gray-500",
                      children: t.description,
                    }),
                  }),
                  p.jsx("td", {
                    className:
                      "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                    children: t.sequence,
                  }),
                  p.jsx("td", {
                    className: "px-6 py-4 whitespace-nowrap",
                    children: t.isMandatory
                      ? p.jsx(p0, { className: "w-5 h-5 text-green-600" })
                      : p.jsx(g0, { className: "w-5 h-5 text-red-600" }),
                  }),
                ],
              },
              t.id
            )
          ),
        }),
      ],
    }),
  });
}
function x0() {
  return p.jsxs("div", {
    className: "space-y-8",
    children: [
      p.jsxs("section", {
        children: [
          p.jsx("h2", {
            className: "text-2xl font-semibold text-gray-900 mb-4",
            children: "Company Management",
          }),
          p.jsx(y0, {}),
        ],
      }),
      p.jsxs("section", {
        children: [
          p.jsx("h2", {
            className: "text-2xl font-semibold text-gray-900 mb-4",
            children: "Communication Methods",
          }),
          p.jsx(w0, {}),
        ],
      }),
    ],
  });
}
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = En(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var S0 = "DismissableLayer",
  Bs = "dismissableLayer.update",
  C0 = "dismissableLayer.pointerDownOutside",
  N0 = "dismissableLayer.focusOutside",
  Ic,
  Kp = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Xp = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: s,
        ...a
      } = e,
      u = x.useContext(Kp),
      [c, d] = x.useState(null),
      m =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = x.useState({}),
      v = ft(t, (E) => d(E)),
      w = Array.from(u.layers),
      [k] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = w.indexOf(k),
      f = c ? w.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = f >= h,
      N = b0((E) => {
        const b = E.target,
          A = [...u.branches].some((T) => T.contains(b));
        !S ||
          A ||
          (o == null || o(E),
          l == null || l(E),
          E.defaultPrevented || s == null || s());
      }, m),
      P = _0((E) => {
        const b = E.target;
        [...u.branches].some((T) => T.contains(b)) ||
          (i == null || i(E),
          l == null || l(E),
          E.defaultPrevented || s == null || s());
      }, m);
    return (
      k0((E) => {
        f === u.layers.size - 1 &&
          (r == null || r(E),
          !E.defaultPrevented && s && (E.preventDefault(), s()));
      }, m),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ic = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Fc(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Ic);
            }
          );
      }, [c, m, n, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Fc());
        },
        [c, u]
      ),
      x.useEffect(() => {
        const E = () => g({});
        return (
          document.addEventListener(Bs, E),
          () => document.removeEventListener(Bs, E)
        );
      }, []),
      p.jsx(Oe.div, {
        ...a,
        ref: v,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: de(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: de(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: de(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        ),
      })
    );
  });
Xp.displayName = S0;
var E0 = "DismissableLayerBranch",
  P0 = x.forwardRef((e, t) => {
    const n = x.useContext(Kp),
      r = x.useRef(null),
      o = ft(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(Oe.div, { ...e, ref: o })
    );
  });
P0.displayName = E0;
function b0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = En(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (s) => {
          if (s.target && !r.current) {
            let a = function () {
              qp(C0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        l = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(l),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function _0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = En(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          qp(N0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Fc() {
  const e = new CustomEvent(Bs);
  document.dispatchEvent(e);
}
function qp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Rg(o, i) : o.dispatchEvent(i);
}
const M0 = ["top", "right", "bottom", "left"],
  Jt = Math.min,
  Re = Math.max,
  bi = Math.round,
  Wo = Math.floor,
  dt = (e) => ({ x: e, y: e }),
  D0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  T0 = { start: "end", end: "start" };
function Hs(e, t, n) {
  return Re(e, Jt(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tt(e) {
  return e.split("-")[0];
}
function fr(e) {
  return e.split("-")[1];
}
function Xa(e) {
  return e === "x" ? "y" : "x";
}
function qa(e) {
  return e === "y" ? "height" : "width";
}
function en(e) {
  return ["top", "bottom"].includes(Tt(e)) ? "y" : "x";
}
function Za(e) {
  return Xa(en(e));
}
function O0(e, t, n) {
  n === void 0 && (n = !1);
  const r = fr(e),
    o = Za(e),
    i = qa(o);
  let l =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = _i(l)), [l, _i(l)];
}
function j0(e) {
  const t = _i(e);
  return [Us(e), t, Us(t)];
}
function Us(e) {
  return e.replace(/start|end/g, (t) => T0[t]);
}
function R0(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function L0(e, t, n, r) {
  const o = fr(e);
  let i = R0(Tt(e), n === "start", r);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(Us)))), i
  );
}
function _i(e) {
  return e.replace(/left|right|bottom|top/g, (t) => D0[t]);
}
function A0(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Zp(e) {
  return typeof e != "number"
    ? A0(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Mi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function zc(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = en(t),
    l = Za(t),
    s = qa(l),
    a = Tt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    m = r[s] / 2 - o[s] / 2;
  let g;
  switch (a) {
    case "top":
      g = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: c, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: d };
      break;
    case "left":
      g = { x: r.x - o.width, y: d };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (fr(t)) {
    case "start":
      g[l] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += m * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const I0 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = n,
    s = i.filter(Boolean),
    a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = zc(u, r, a),
    m = r,
    g = {},
    v = 0;
  for (let w = 0; w < s.length; w++) {
    const { name: k, fn: h } = s[w],
      {
        x: f,
        y,
        data: S,
        reset: N,
      } = await h({
        x: c,
        y: d,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (c = f ?? c),
      (d = y ?? d),
      (g = { ...g, [k]: { ...g[k], ...S } }),
      N &&
        v <= 50 &&
        (v++,
        typeof N == "object" &&
          (N.placement && (m = N.placement),
          N.rects &&
            (u =
              N.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : N.rects),
          ({ x: c, y: d } = zc(u, m, a))),
        (w = -1));
  }
  return { x: c, y: d, placement: m, strategy: o, middlewareData: g };
};
async function oo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: l, elements: s, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: m = !1,
      padding: g = 0,
    } = Dt(t, e),
    v = Zp(g),
    k = s[m ? (d === "floating" ? "reference" : "floating") : d],
    h = Mi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null ||
          n
            ? k
            : k.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    f =
      d === "floating"
        ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
        : l.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    N = Mi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: f,
            offsetParent: y,
            strategy: a,
          })
        : f
    );
  return {
    top: (h.top - N.top + v.top) / S.y,
    bottom: (N.bottom - h.bottom + v.bottom) / S.y,
    left: (h.left - N.left + v.left) / S.x,
    right: (N.right - h.right + v.right) / S.x,
  };
}
const F0 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: s,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Dt(e, t) || {};
      if (u == null) return {};
      const d = Zp(c),
        m = { x: n, y: r },
        g = Za(o),
        v = qa(g),
        w = await l.getDimensions(u),
        k = g === "y",
        h = k ? "top" : "left",
        f = k ? "bottom" : "right",
        y = k ? "clientHeight" : "clientWidth",
        S = i.reference[v] + i.reference[g] - m[g] - i.floating[v],
        N = m[g] - i.reference[g],
        P = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
      let E = P ? P[y] : 0;
      (!E || !(await (l.isElement == null ? void 0 : l.isElement(P)))) &&
        (E = s.floating[y] || i.floating[v]);
      const b = S / 2 - N / 2,
        A = E / 2 - w[v] / 2 - 1,
        T = Jt(d[h], A),
        W = Jt(d[f], A),
        R = T,
        U = E - w[v] - W,
        V = E / 2 - w[v] / 2 + b,
        oe = Hs(R, V, U),
        z =
          !a.arrow &&
          fr(o) != null &&
          V !== oe &&
          i.reference[v] / 2 - (V < R ? T : W) - w[v] / 2 < 0,
        M = z ? (V < R ? V - R : V - U) : 0;
      return {
        [g]: m[g] + M,
        data: {
          [g]: oe,
          centerOffset: V - oe - M,
          ...(z && { alignmentOffset: M }),
        },
        reset: z,
      };
    },
  }),
  z0 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: s,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: m,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: w = !0,
              ...k
            } = Dt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = Tt(o),
            f = en(s),
            y = Tt(s) === s,
            S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            N = m || (y || !w ? [_i(s)] : j0(s)),
            P = v !== "none";
          !m && P && N.push(...L0(s, w, v, S));
          const E = [s, ...N],
            b = await oo(t, k),
            A = [];
          let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && A.push(b[h]), d)) {
            const V = O0(o, l, S);
            A.push(b[V[0]], b[V[1]]);
          }
          if (
            ((T = [...T, { placement: o, overflows: A }]),
            !A.every((V) => V <= 0))
          ) {
            var W, R;
            const V = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1,
              oe = E[V];
            if (oe)
              return {
                data: { index: V, overflows: T },
                reset: { placement: oe },
              };
            let z =
              (R = T.filter((M) => M.overflows[0] <= 0).sort(
                (M, C) => M.overflows[1] - C.overflows[1]
              )[0]) == null
                ? void 0
                : R.placement;
            if (!z)
              switch (g) {
                case "bestFit": {
                  var U;
                  const M =
                    (U = T.filter((C) => {
                      if (P) {
                        const D = en(C.placement);
                        return D === f || D === "y";
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((D) => D > 0)
                          .reduce((D, j) => D + j, 0),
                      ])
                      .sort((C, D) => C[1] - D[1])[0]) == null
                      ? void 0
                      : U[0];
                  M && (z = M);
                  break;
                }
                case "initialPlacement":
                  z = s;
                  break;
              }
            if (o !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Wc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function $c(e) {
  return M0.some((t) => e[t] >= 0);
}
const W0 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Dt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await oo(t, { ...o, elementContext: "reference" }),
              l = Wc(i, n.reference);
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: $c(l) },
            };
          }
          case "escaped": {
            const i = await oo(t, { ...o, altBoundary: !0 }),
              l = Wc(i, n.floating);
            return { data: { escapedOffsets: l, escaped: $c(l) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function $0(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = Tt(n),
    s = fr(n),
    a = en(n) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    c = i && a ? -1 : 1,
    d = Dt(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    s && typeof v == "number" && (g = s === "end" ? v * -1 : v),
    a ? { x: g * c, y: m * u } : { x: m * u, y: g * c }
  );
}
const B0 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: l, middlewareData: s } = t,
            a = await $0(t, e);
          return l === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: l } };
        },
      }
    );
  },
  H0 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: s = {
                fn: (k) => {
                  let { x: h, y: f } = k;
                  return { x: h, y: f };
                },
              },
              ...a
            } = Dt(e, t),
            u = { x: n, y: r },
            c = await oo(t, a),
            d = en(Tt(o)),
            m = Xa(d);
          let g = u[m],
            v = u[d];
          if (i) {
            const k = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              f = g + c[k],
              y = g - c[h];
            g = Hs(f, g, y);
          }
          if (l) {
            const k = d === "y" ? "top" : "left",
              h = d === "y" ? "bottom" : "right",
              f = v + c[k],
              y = v - c[h];
            v = Hs(f, v, y);
          }
          const w = s.fn({ ...t, [m]: g, [d]: v });
          return {
            ...w,
            data: { x: w.x - n, y: w.y - r, enabled: { [m]: i, [d]: l } },
          };
        },
      }
    );
  },
  U0 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: s = 0, mainAxis: a = !0, crossAxis: u = !0 } = Dt(e, t),
            c = { x: n, y: r },
            d = en(o),
            m = Xa(d);
          let g = c[m],
            v = c[d];
          const w = Dt(s, t),
            k =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (a) {
            const y = m === "y" ? "height" : "width",
              S = i.reference[m] - i.floating[y] + k.mainAxis,
              N = i.reference[m] + i.reference[y] - k.mainAxis;
            g < S ? (g = S) : g > N && (g = N);
          }
          if (u) {
            var h, f;
            const y = m === "y" ? "width" : "height",
              S = ["top", "left"].includes(Tt(o)),
              N =
                i.reference[d] -
                i.floating[y] +
                ((S && ((h = l.offset) == null ? void 0 : h[d])) || 0) +
                (S ? 0 : k.crossAxis),
              P =
                i.reference[d] +
                i.reference[y] +
                (S ? 0 : ((f = l.offset) == null ? void 0 : f[d]) || 0) -
                (S ? k.crossAxis : 0);
            v < N ? (v = N) : v > P && (v = P);
          }
          return { [m]: g, [d]: v };
        },
      }
    );
  },
  V0 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: l, elements: s } = t,
            { apply: a = () => {}, ...u } = Dt(e, t),
            c = await oo(t, u),
            d = Tt(o),
            m = fr(o),
            g = en(o) === "y",
            { width: v, height: w } = i.floating;
          let k, h;
          d === "top" || d === "bottom"
            ? ((k = d),
              (h =
                m ===
                ((await (l.isRTL == null ? void 0 : l.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = d), (k = m === "end" ? "top" : "bottom"));
          const f = w - c.top - c.bottom,
            y = v - c.left - c.right,
            S = Jt(w - c[k], f),
            N = Jt(v - c[h], y),
            P = !t.middlewareData.shift;
          let E = S,
            b = N;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (b = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = f),
            P && !m)
          ) {
            const T = Re(c.left, 0),
              W = Re(c.right, 0),
              R = Re(c.top, 0),
              U = Re(c.bottom, 0);
            g
              ? (b = v - 2 * (T !== 0 || W !== 0 ? T + W : Re(c.left, c.right)))
              : (E =
                  w - 2 * (R !== 0 || U !== 0 ? R + U : Re(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: b, availableHeight: E });
          const A = await l.getDimensions(s.floating);
          return v !== A.width || w !== A.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function el() {
  return typeof window < "u";
}
function pr(e) {
  return Jp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ie(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ht(e) {
  var t;
  return (t = (Jp(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Jp(e) {
  return el() ? e instanceof Node || e instanceof Ie(e).Node : !1;
}
function tt(e) {
  return el() ? e instanceof Element || e instanceof Ie(e).Element : !1;
}
function pt(e) {
  return el() ? e instanceof HTMLElement || e instanceof Ie(e).HTMLElement : !1;
}
function Bc(e) {
  return !el() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ie(e).ShadowRoot;
}
function ho(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = nt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Y0(e) {
  return ["table", "td", "th"].includes(pr(e));
}
function tl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ja(e) {
  const t = eu(),
    n = tt(e) ? nt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Q0(e) {
  let t = tn(e);
  for (; pt(t) && !or(t); ) {
    if (Ja(t)) return t;
    if (tl(t)) return null;
    t = tn(t);
  }
  return null;
}
function eu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function or(e) {
  return ["html", "body", "#document"].includes(pr(e));
}
function nt(e) {
  return Ie(e).getComputedStyle(e);
}
function nl(e) {
  return tt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function tn(e) {
  if (pr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Bc(e) && e.host) || ht(e);
  return Bc(t) ? t.host : t;
}
function em(e) {
  const t = tn(e);
  return or(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : pt(t) && ho(t)
    ? t
    : em(t);
}
function io(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = em(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Ie(o);
  if (i) {
    const s = Vs(l);
    return t.concat(
      l,
      l.visualViewport || [],
      ho(o) ? o : [],
      s && n ? io(s) : []
    );
  }
  return t.concat(o, io(o, [], n));
}
function Vs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tm(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = pt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    s = bi(n) !== i || bi(r) !== l;
  return s && ((n = i), (r = l)), { width: n, height: r, $: s };
}
function tu(e) {
  return tt(e) ? e : e.contextElement;
}
function Kn(e) {
  const t = tu(e);
  if (!pt(t)) return dt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = tm(t);
  let l = (i ? bi(n.width) : n.width) / r,
    s = (i ? bi(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: l, y: s }
  );
}
const G0 = dt(0);
function nm(e) {
  const t = Ie(e);
  return !eu() || !t.visualViewport
    ? G0
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function K0(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ie(e)) ? !1 : t;
}
function kn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = tu(e);
  let l = dt(1);
  t && (r ? tt(r) && (l = Kn(r)) : (l = Kn(e)));
  const s = K0(i, n, r) ? nm(i) : dt(0);
  let a = (o.left + s.x) / l.x,
    u = (o.top + s.y) / l.y,
    c = o.width / l.x,
    d = o.height / l.y;
  if (i) {
    const m = Ie(i),
      g = r && tt(r) ? Ie(r) : r;
    let v = m,
      w = Vs(v);
    for (; w && r && g !== v; ) {
      const k = Kn(w),
        h = w.getBoundingClientRect(),
        f = nt(w),
        y = h.left + (w.clientLeft + parseFloat(f.paddingLeft)) * k.x,
        S = h.top + (w.clientTop + parseFloat(f.paddingTop)) * k.y;
      (a *= k.x),
        (u *= k.y),
        (c *= k.x),
        (d *= k.y),
        (a += y),
        (u += S),
        (v = Ie(w)),
        (w = Vs(v));
    }
  }
  return Mi({ width: c, height: d, x: a, y: u });
}
function nu(e, t) {
  const n = nl(e).scrollLeft;
  return t ? t.left + n : kn(ht(e)).left + n;
}
function rm(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : nu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function X0(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    l = ht(r),
    s = t ? tl(t.floating) : !1;
  if (r === l || (s && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = dt(1);
  const c = dt(0),
    d = pt(r);
  if (
    (d || (!d && !i)) &&
    ((pr(r) !== "body" || ho(l)) && (a = nl(r)), pt(r))
  ) {
    const g = kn(r);
    (u = Kn(r)), (c.x = g.x + r.clientLeft), (c.y = g.y + r.clientTop);
  }
  const m = l && !d && !i ? rm(l, a, !0) : dt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + m.y,
  };
}
function q0(e) {
  return Array.from(e.getClientRects());
}
function Z0(e) {
  const t = ht(e),
    n = nl(e),
    r = e.ownerDocument.body,
    o = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + nu(e);
  const s = -n.scrollTop;
  return (
    nt(r).direction === "rtl" && (l += Re(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: s }
  );
}
function J0(e, t) {
  const n = Ie(e),
    r = ht(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = eu();
    (!u || (u && t === "fixed")) && ((s = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: l, x: s, y: a };
}
function ew(e, t) {
  const n = kn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = pt(e) ? Kn(e) : dt(1),
    l = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: l, height: s, x: a, y: u };
}
function Hc(e, t, n) {
  let r;
  if (t === "viewport") r = J0(e, n);
  else if (t === "document") r = Z0(ht(e));
  else if (tt(t)) r = ew(t, n);
  else {
    const o = nm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Mi(r);
}
function om(e, t) {
  const n = tn(e);
  return n === t || !tt(n) || or(n)
    ? !1
    : nt(n).position === "fixed" || om(n, t);
}
function tw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = io(e, [], !1).filter((s) => tt(s) && pr(s) !== "body"),
    o = null;
  const i = nt(e).position === "fixed";
  let l = i ? tn(e) : e;
  for (; tt(l) && !or(l); ) {
    const s = nt(l),
      a = Ja(l);
    !a && s.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ho(l) && !a && om(e, l))
      )
        ? (r = r.filter((c) => c !== l))
        : (o = s),
      (l = tn(l));
  }
  return t.set(e, r), r;
}
function nw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const l = [
      ...(n === "clippingAncestors"
        ? tl(t)
          ? []
          : tw(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = l[0],
    a = l.reduce((u, c) => {
      const d = Hc(t, c, o);
      return (
        (u.top = Re(d.top, u.top)),
        (u.right = Jt(d.right, u.right)),
        (u.bottom = Jt(d.bottom, u.bottom)),
        (u.left = Re(d.left, u.left)),
        u
      );
    }, Hc(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function rw(e) {
  const { width: t, height: n } = tm(e);
  return { width: t, height: n };
}
function ow(e, t, n) {
  const r = pt(t),
    o = ht(t),
    i = n === "fixed",
    l = kn(e, !0, i, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = dt(0);
  if (r || (!r && !i))
    if (((pr(t) !== "body" || ho(o)) && (s = nl(t)), r)) {
      const m = kn(t, !0, i, t);
      (a.x = m.x + t.clientLeft), (a.y = m.y + t.clientTop);
    } else o && (a.x = nu(o));
  const u = o && !r && !i ? rm(o, s) : dt(0),
    c = l.left + s.scrollLeft - a.x - u.x,
    d = l.top + s.scrollTop - a.y - u.y;
  return { x: c, y: d, width: l.width, height: l.height };
}
function Al(e) {
  return nt(e).position === "static";
}
function Uc(e, t) {
  if (!pt(e) || nt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return ht(e) === n && (n = n.ownerDocument.body), n;
}
function im(e, t) {
  const n = Ie(e);
  if (tl(e)) return n;
  if (!pt(e)) {
    let o = tn(e);
    for (; o && !or(o); ) {
      if (tt(o) && !Al(o)) return o;
      o = tn(o);
    }
    return n;
  }
  let r = Uc(e, t);
  for (; r && Y0(r) && Al(r); ) r = Uc(r, t);
  return r && or(r) && Al(r) && !Ja(r) ? n : r || Q0(e) || n;
}
const iw = async function (e) {
  const t = this.getOffsetParent || im,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: ow(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function lw(e) {
  return nt(e).direction === "rtl";
}
const sw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: X0,
  getDocumentElement: ht,
  getClippingRect: nw,
  getOffsetParent: im,
  getElementRects: iw,
  getClientRects: q0,
  getDimensions: rw,
  getScale: Kn,
  isElement: tt,
  isRTL: lw,
};
function aw(e, t) {
  let n = null,
    r;
  const o = ht(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const { left: u, top: c, width: d, height: m } = e.getBoundingClientRect();
    if ((s || t(), !d || !m)) return;
    const g = Wo(c),
      v = Wo(o.clientWidth - (u + d)),
      w = Wo(o.clientHeight - (c + m)),
      k = Wo(u),
      f = {
        rootMargin: -g + "px " + -v + "px " + -w + "px " + -k + "px",
        threshold: Re(0, Jt(1, a)) || 1,
      };
    let y = !0;
    function S(N) {
      const P = N[0].intersectionRatio;
      if (P !== a) {
        if (!y) return l();
        P
          ? l(!1, P)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...f, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, f);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function uw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = tu(e),
    c = o || i ? [...(u ? io(u) : []), ...io(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n);
  });
  const d = u && s ? aw(u, n) : null;
  let m = -1,
    g = null;
  l &&
    ((g = new ResizeObserver((h) => {
      let [f] = h;
      f &&
        f.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var y;
          (y = g) == null || y.observe(t);
        }))),
        n();
    })),
    u && !a && g.observe(u),
    g.observe(t));
  let v,
    w = a ? kn(e) : null;
  a && k();
  function k() {
    const h = kn(e);
    w &&
      (h.x !== w.x ||
        h.y !== w.y ||
        h.width !== w.width ||
        h.height !== w.height) &&
      n(),
      (w = h),
      (v = requestAnimationFrame(k));
  }
  return (
    n(),
    () => {
      var h;
      c.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n);
      }),
        d == null || d(),
        (h = g) == null || h.disconnect(),
        (g = null),
        a && cancelAnimationFrame(v);
    }
  );
}
const cw = B0,
  dw = H0,
  fw = z0,
  pw = V0,
  mw = W0,
  Vc = F0,
  hw = U0,
  vw = (e, t, n) => {
    const r = new Map(),
      o = { platform: sw, ...n },
      i = { ...o.platform, _c: r };
    return I0(e, t, { ...o, platform: i });
  };
var Jo = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Di(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Di(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Di(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yc(e, t) {
  const n = lm(e);
  return Math.round(t * n) / n;
}
function Il(e) {
  const t = x.useRef(e);
  return (
    Jo(() => {
      t.current = e;
    }),
    t
  );
}
function gw(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, d] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, g] = x.useState(r);
  Di(m, r) || g(r);
  const [v, w] = x.useState(null),
    [k, h] = x.useState(null),
    f = x.useCallback((C) => {
      C !== P.current && ((P.current = C), w(C));
    }, []),
    y = x.useCallback((C) => {
      C !== E.current && ((E.current = C), h(C));
    }, []),
    S = i || v,
    N = l || k,
    P = x.useRef(null),
    E = x.useRef(null),
    b = x.useRef(c),
    A = a != null,
    T = Il(a),
    W = Il(o),
    R = Il(u),
    U = x.useCallback(() => {
      if (!P.current || !E.current) return;
      const C = { placement: t, strategy: n, middleware: m };
      W.current && (C.platform = W.current),
        vw(P.current, E.current, C).then((D) => {
          const j = { ...D, isPositioned: R.current !== !1 };
          V.current &&
            !Di(b.current, j) &&
            ((b.current = j),
            Ki.flushSync(() => {
              d(j);
            }));
        });
    }, [m, t, n, W, R]);
  Jo(() => {
    u === !1 &&
      b.current.isPositioned &&
      ((b.current.isPositioned = !1), d((C) => ({ ...C, isPositioned: !1 })));
  }, [u]);
  const V = x.useRef(!1);
  Jo(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    Jo(() => {
      if ((S && (P.current = S), N && (E.current = N), S && N)) {
        if (T.current) return T.current(S, N, U);
        U();
      }
    }, [S, N, U, T, A]);
  const oe = x.useMemo(
      () => ({ reference: P, floating: E, setReference: f, setFloating: y }),
      [f, y]
    ),
    z = x.useMemo(() => ({ reference: S, floating: N }), [S, N]),
    M = x.useMemo(() => {
      const C = { position: n, left: 0, top: 0 };
      if (!z.floating) return C;
      const D = Yc(z.floating, c.x),
        j = Yc(z.floating, c.y);
      return s
        ? {
            ...C,
            transform: "translate(" + D + "px, " + j + "px)",
            ...(lm(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: D, top: j };
    }, [n, s, z.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: U, refs: oe, elements: z, floatingStyles: M }),
    [c, U, oe, z, M]
  );
}
const yw = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Vc({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Vc({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  ww = (e, t) => ({ ...cw(e), options: [e, t] }),
  xw = (e, t) => ({ ...dw(e), options: [e, t] }),
  kw = (e, t) => ({ ...hw(e), options: [e, t] }),
  Sw = (e, t) => ({ ...fw(e), options: [e, t] }),
  Cw = (e, t) => ({ ...pw(e), options: [e, t] }),
  Nw = (e, t) => ({ ...mw(e), options: [e, t] }),
  Ew = (e, t) => ({ ...yw(e), options: [e, t] });
var Pw = "Arrow",
  sm = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return p.jsx(Oe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
sm.displayName = Pw;
var bw = sm;
function _w(e) {
  const [t, n] = x.useState(void 0);
  return (
    xn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let l, s;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (l = u.inlineSize), (s = u.blockSize);
          } else (l = e.offsetWidth), (s = e.offsetHeight);
          n({ width: l, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var ru = "Popper",
  [am, um] = po(ru),
  [Mw, cm] = am(ru),
  dm = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = x.useState(null);
    return p.jsx(Mw, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
dm.displayName = ru;
var fm = "PopperAnchor",
  pm = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = cm(fm, n),
      l = x.useRef(null),
      s = ft(t, l);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current);
      }),
      r ? null : p.jsx(Oe.div, { ...o, ref: s })
    );
  });
pm.displayName = fm;
var ou = "PopperContent",
  [Dw, Tw] = am(ou),
  mm = x.forwardRef((e, t) => {
    var ln, wu, xu, ku, Su, Cu;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: l = 0,
        arrowPadding: s = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: v,
        ...w
      } = e,
      k = cm(ou, n),
      [h, f] = x.useState(null),
      y = ft(t, (hr) => f(hr)),
      [S, N] = x.useState(null),
      P = _w(S),
      E = (P == null ? void 0 : P.width) ?? 0,
      b = (P == null ? void 0 : P.height) ?? 0,
      A = r + (i !== "center" ? "-" + i : ""),
      T =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      W = Array.isArray(u) ? u : [u],
      R = W.length > 0,
      U = { padding: T, boundary: W.filter(jw), altBoundary: R },
      {
        refs: V,
        floatingStyles: oe,
        placement: z,
        isPositioned: M,
        middlewareData: C,
      } = gw({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...hr) =>
          uw(...hr, { animationFrame: g === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          ww({ mainAxis: o + b, alignmentAxis: l }),
          a &&
            xw({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? kw() : void 0,
              ...U,
            }),
          a && Sw({ ...U }),
          Cw({
            ...U,
            apply: ({
              elements: hr,
              rects: Nu,
              availableWidth: Km,
              availableHeight: Xm,
            }) => {
              const { width: qm, height: Zm } = Nu.reference,
                ko = hr.floating.style;
              ko.setProperty("--radix-popper-available-width", `${Km}px`),
                ko.setProperty("--radix-popper-available-height", `${Xm}px`),
                ko.setProperty("--radix-popper-anchor-width", `${qm}px`),
                ko.setProperty("--radix-popper-anchor-height", `${Zm}px`);
            },
          }),
          S && Ew({ element: S, padding: s }),
          Rw({ arrowWidth: E, arrowHeight: b }),
          m && Nw({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [D, j] = gm(z),
      F = En(v);
    xn(() => {
      M && (F == null || F());
    }, [M, F]);
    const le = (ln = C.arrow) == null ? void 0 : ln.x,
      bn = (wu = C.arrow) == null ? void 0 : wu.y,
      vt = ((xu = C.arrow) == null ? void 0 : xu.centerOffset) !== 0,
      [mr, gt] = x.useState();
    return (
      xn(() => {
        h && gt(window.getComputedStyle(h).zIndex);
      }, [h]),
      p.jsx("div", {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...oe,
          transform: M ? oe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: mr,
          "--radix-popper-transform-origin": [
            (ku = C.transformOrigin) == null ? void 0 : ku.x,
            (Su = C.transformOrigin) == null ? void 0 : Su.y,
          ].join(" "),
          ...(((Cu = C.hide) == null ? void 0 : Cu.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(Dw, {
          scope: n,
          placedSide: D,
          onArrowChange: N,
          arrowX: le,
          arrowY: bn,
          shouldHideArrow: vt,
          children: p.jsx(Oe.div, {
            "data-side": D,
            "data-align": j,
            ...w,
            ref: y,
            style: { ...w.style, animation: M ? void 0 : "none" },
          }),
        }),
      })
    );
  });
mm.displayName = ou;
var hm = "PopperArrow",
  Ow = { top: "bottom", right: "left", bottom: "top", left: "right" },
  vm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Tw(hm, r),
      l = Ow[i.placedSide];
    return p.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [l]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(bw, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
vm.displayName = hm;
function jw(e) {
  return e !== null;
}
var Rw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var k, h, f;
    const { placement: n, rects: r, middlewareData: o } = t,
      l = ((k = o.arrow) == null ? void 0 : k.centerOffset) !== 0,
      s = l ? 0 : e.arrowWidth,
      a = l ? 0 : e.arrowHeight,
      [u, c] = gm(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + s / 2,
      g = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + a / 2;
    let v = "",
      w = "";
    return (
      u === "bottom"
        ? ((v = l ? d : `${m}px`), (w = `${-a}px`))
        : u === "top"
        ? ((v = l ? d : `${m}px`), (w = `${r.floating.height + a}px`))
        : u === "right"
        ? ((v = `${-a}px`), (w = l ? d : `${g}px`))
        : u === "left" &&
          ((v = `${r.floating.width + a}px`), (w = l ? d : `${g}px`)),
      { data: { x: v, y: w } }
    );
  },
});
function gm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Lw = dm,
  Aw = pm,
  Iw = mm,
  Fw = vm,
  zw = "Portal",
  ym = x.forwardRef((e, t) => {
    var s;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    xn(() => i(!0), []);
    const l =
      n ||
      (o &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body));
    return l ? Eg.createPortal(p.jsx(Oe.div, { ...r, ref: t }), l) : null;
  });
ym.displayName = zw;
var Ww = "VisuallyHidden",
  wm = x.forwardRef((e, t) =>
    p.jsx(Oe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
wm.displayName = Ww;
var $w = wm,
  [rl, nS] = po("Tooltip", [um]),
  ol = um(),
  xm = "TooltipProvider",
  Bw = 700,
  Ys = "tooltip.open",
  [Hw, iu] = rl(xm),
  km = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Bw,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [l, s] = x.useState(!0),
      a = x.useRef(!1),
      u = x.useRef(0);
    return (
      x.useEffect(() => {
        const c = u.current;
        return () => window.clearTimeout(c);
      }, []),
      p.jsx(Hw, {
        scope: t,
        isOpenDelayed: l,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(u.current), s(!1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => s(!0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
km.displayName = xm;
var il = "Tooltip",
  [Uw, vo] = rl(il),
  Sm = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o = !1,
        onOpenChange: i,
        disableHoverableContent: l,
        delayDuration: s,
      } = e,
      a = iu(il, e.__scopeTooltip),
      u = ol(t),
      [c, d] = x.useState(null),
      m = Va(),
      g = x.useRef(0),
      v = l ?? a.disableHoverableContent,
      w = s ?? a.delayDuration,
      k = x.useRef(!1),
      [h = !1, f] = Ya({
        prop: r,
        defaultProp: o,
        onChange: (E) => {
          E
            ? (a.onOpen(), document.dispatchEvent(new CustomEvent(Ys)))
            : a.onClose(),
            i == null || i(E);
        },
      }),
      y = x.useMemo(
        () => (h ? (k.current ? "delayed-open" : "instant-open") : "closed"),
        [h]
      ),
      S = x.useCallback(() => {
        window.clearTimeout(g.current),
          (g.current = 0),
          (k.current = !1),
          f(!0);
      }, [f]),
      N = x.useCallback(() => {
        window.clearTimeout(g.current), (g.current = 0), f(!1);
      }, [f]),
      P = x.useCallback(() => {
        window.clearTimeout(g.current),
          (g.current = window.setTimeout(() => {
            (k.current = !0), f(!0), (g.current = 0);
          }, w));
      }, [w, f]);
    return (
      x.useEffect(
        () => () => {
          g.current && (window.clearTimeout(g.current), (g.current = 0));
        },
        []
      ),
      p.jsx(Lw, {
        ...u,
        children: p.jsx(Uw, {
          scope: t,
          contentId: m,
          open: h,
          stateAttribute: y,
          trigger: c,
          onTriggerChange: d,
          onTriggerEnter: x.useCallback(() => {
            a.isOpenDelayed ? P() : S();
          }, [a.isOpenDelayed, P, S]),
          onTriggerLeave: x.useCallback(() => {
            v ? N() : (window.clearTimeout(g.current), (g.current = 0));
          }, [N, v]),
          onOpen: S,
          onClose: N,
          disableHoverableContent: v,
          children: n,
        }),
      })
    );
  };
Sm.displayName = il;
var Qs = "TooltipTrigger",
  Cm = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = vo(Qs, n),
      i = iu(Qs, n),
      l = ol(n),
      s = x.useRef(null),
      a = ft(t, s, o.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      d = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      p.jsx(Aw, {
        asChild: !0,
        ...l,
        children: p.jsx(Oe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: de(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: de(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: de(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: de(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: de(e.onBlur, o.onClose),
          onClick: de(e.onClick, o.onClose),
        }),
      })
    );
  });
Cm.displayName = Qs;
var lu = "TooltipPortal",
  [Vw, Yw] = rl(lu, { forceMount: void 0 }),
  Nm = (e) => {
    const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
      i = vo(lu, t);
    return p.jsx(Vw, {
      scope: t,
      forceMount: n,
      children: p.jsx(qi, {
        present: n || i.open,
        children: p.jsx(ym, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Nm.displayName = lu;
var ir = "TooltipContent",
  Em = x.forwardRef((e, t) => {
    const n = Yw(ir, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      l = vo(ir, e.__scopeTooltip);
    return p.jsx(qi, {
      present: r || l.open,
      children: l.disableHoverableContent
        ? p.jsx(Pm, { side: o, ...i, ref: t })
        : p.jsx(Qw, { side: o, ...i, ref: t }),
    });
  }),
  Qw = x.forwardRef((e, t) => {
    const n = vo(ir, e.__scopeTooltip),
      r = iu(ir, e.__scopeTooltip),
      o = x.useRef(null),
      i = ft(t, o),
      [l, s] = x.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      m = x.useCallback(() => {
        s(null), d(!1);
      }, [d]),
      g = x.useCallback(
        (v, w) => {
          const k = v.currentTarget,
            h = { x: v.clientX, y: v.clientY },
            f = Xw(h, k.getBoundingClientRect()),
            y = qw(h, f),
            S = Zw(w.getBoundingClientRect()),
            N = e1([...y, ...S]);
          s(N), d(!0);
        },
        [d]
      );
    return (
      x.useEffect(() => () => m(), [m]),
      x.useEffect(() => {
        if (a && c) {
          const v = (k) => g(k, c),
            w = (k) => g(k, a);
          return (
            a.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", w),
            () => {
              a.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", w);
            }
          );
        }
      }, [a, c, g, m]),
      x.useEffect(() => {
        if (l) {
          const v = (w) => {
            const k = w.target,
              h = { x: w.clientX, y: w.clientY },
              f =
                (a == null ? void 0 : a.contains(k)) ||
                (c == null ? void 0 : c.contains(k)),
              y = !Jw(h, l);
            f ? m() : y && (m(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [a, c, l, u, m]),
      p.jsx(Pm, { ...e, ref: i })
    );
  }),
  [Gw, Kw] = rl(il, { isInside: !1 }),
  Pm = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        ...s
      } = e,
      a = vo(ir, n),
      u = ol(n),
      { onClose: c } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(Ys, c),
          () => document.removeEventListener(Ys, c)
        ),
        [c]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const d = (m) => {
            const g = m.target;
            g != null && g.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      p.jsx(Xp, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: p.jsxs(Iw, {
          "data-state": a.stateAttribute,
          ...u,
          ...s,
          ref: t,
          style: {
            ...s.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            p.jsx(gp, { children: r }),
            p.jsx(Gw, {
              scope: n,
              isInside: !0,
              children: p.jsx($w, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Em.displayName = ir;
var bm = "TooltipArrow",
  _m = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ol(n);
    return Kw(bm, n).isInside ? null : p.jsx(Fw, { ...o, ...r, ref: t });
  });
_m.displayName = bm;
function Xw(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qw(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Zw(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Jw(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const s = t[i].x,
      a = t[i].y,
      u = t[l].x,
      c = t[l].y;
    a > r != c > r && n < ((u - s) * (r - a)) / (c - a) + s && (o = !o);
  }
  return o;
}
function e1(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    t1(t)
  );
}
function t1(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        l = t[t.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        l = n[n.length - 2];
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var n1 = km,
  r1 = Sm,
  o1 = Cm,
  i1 = Nm,
  l1 = Em,
  s1 = _m;
function a1({ children: e, content: t, className: n }) {
  return p.jsx(n1, {
    children: p.jsxs(r1, {
      children: [
        p.jsx(o1, { asChild: !0, children: e }),
        p.jsx(i1, {
          children: p.jsxs(l1, {
            className: Zi(
              "z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 shadow-md animate-in fade-in-0 zoom-in-95",
              n
            ),
            children: [t, p.jsx(s1, { className: "fill-current text-white" })],
          }),
        }),
      ],
    }),
  });
}
function u1() {
  const { companies: e, communications: t, communicationMethods: n } = mo(),
    r = (i) =>
      t
        .filter((l) => l.companyId === i)
        .sort((l, s) => s.date.getTime() - l.date.getTime())
        .slice(0, 5),
    o = (i) => {
      const l = e.find((u) => u.id === i);
      if (!l) return null;
      const s = t
        .filter((u) => u.companyId === i)
        .sort((u, c) => c.date.getTime() - u.date.getTime())[0];
      if (!s) return null;
      const a = new Date(s.date);
      return (
        a.setDate(a.getDate() + l.communicationPeriodicity),
        { date: a, method: n[0] }
      );
    };
  return p.jsx("div", {
    className: "bg-white rounded-lg shadow",
    children: p.jsx("div", {
      className: "overflow-x-auto",
      children: p.jsxs("table", {
        className: "min-w-full divide-y divide-gray-200",
        children: [
          p.jsx("thead", {
            className: "bg-gray-50",
            children: p.jsxs("tr", {
              children: [
                p.jsx("th", {
                  className:
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  children: "Company",
                }),
                p.jsx("th", {
                  className:
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  children: "Last 5 Communications",
                }),
                p.jsx("th", {
                  className:
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                  children: "Next Scheduled",
                }),
              ],
            }),
          }),
          p.jsx("tbody", {
            className: "bg-white divide-y divide-gray-200",
            children: e.map((i) => {
              const l = r(i.id),
                s = o(i.id);
              return p.jsxs(
                "tr",
                {
                  children: [
                    p.jsx("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children: p.jsx("div", {
                        className: "text-sm font-medium text-gray-900",
                        children: i.name,
                      }),
                    }),
                    p.jsx("td", {
                      className: "px-6 py-4",
                      children: p.jsx("div", {
                        className: "flex gap-2",
                        children: l.map((a) => {
                          const u = n.find((c) => c.id === a.methodId);
                          return p.jsx(
                            a1,
                            {
                              content: a.notes,
                              className:
                                "bg-gray-800 text-white p-2 rounded text-sm",
                              children: p.jsxs("span", {
                                className:
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                children: [
                                  u == null ? void 0 : u.name,
                                  " - ",
                                  Pi(a.date),
                                ],
                              }),
                            },
                            a.id
                          );
                        }),
                      }),
                    }),
                    p.jsx("td", {
                      className: "px-6 py-4 whitespace-nowrap",
                      children:
                        s &&
                        p.jsxs("span", {
                          className:
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",
                          children: [s.method.name, " - ", Pi(s.date)],
                        }),
                    }),
                  ],
                },
                i.id
              );
            }),
          }),
        ],
      }),
    }),
  });
}
function c1() {
  const { companies: e, communications: t, communicationMethods: n } = mo(),
    r = () => {
      const s = new Date();
      return e
        .map((a) => {
          const u = t
            .filter((d) => d.companyId === a.id)
            .sort((d, m) => m.date.getTime() - d.date.getTime())[0];
          if (!u) return null;
          const c = new Date(u.date);
          return (
            c.setDate(c.getDate() + a.communicationPeriodicity),
            c < s ? { company: a, dueDate: c } : null
          );
        })
        .filter(Boolean);
    },
    o = () => {
      const s = new Date();
      return e
        .map((a) => {
          const u = t
            .filter((d) => d.companyId === a.id)
            .sort((d, m) => m.date.getTime() - d.date.getTime())[0];
          if (!u) return null;
          const c = new Date(u.date);
          return (
            c.setDate(c.getDate() + a.communicationPeriodicity),
            c.getDate() === s.getDate() &&
            c.getMonth() === s.getMonth() &&
            c.getFullYear() === s.getFullYear()
              ? { company: a, dueDate: c }
              : null
          );
        })
        .filter(Boolean);
    },
    i = r(),
    l = o();
  return p.jsxs("div", {
    className: "bg-white rounded-lg shadow p-6 space-y-6",
    children: [
      p.jsxs("div", {
        children: [
          p.jsxs("h3", {
            className: "text-lg font-medium text-red-600 mb-4",
            children: ["Overdue Communications (", i.length, ")"],
          }),
          p.jsx("div", {
            className: "space-y-3",
            children: i.map((s) =>
              p.jsxs(
                "div",
                {
                  className: "p-3 bg-red-50 rounded-lg border border-red-200",
                  children: [
                    p.jsx("div", {
                      className: "font-medium text-red-900",
                      children: s.company.name,
                    }),
                    p.jsxs("div", {
                      className: "text-sm text-red-700",
                      children: ["Due: ", Pi(s.dueDate)],
                    }),
                  ],
                },
                s.company.id
              )
            ),
          }),
        ],
      }),
      p.jsxs("div", {
        children: [
          p.jsxs("h3", {
            className: "text-lg font-medium text-yellow-600 mb-4",
            children: ["Due Today (", l.length, ")"],
          }),
          p.jsx("div", {
            className: "space-y-3",
            children: l.map((s) =>
              p.jsxs(
                "div",
                {
                  className:
                    "p-3 bg-yellow-50 rounded-lg border border-yellow-200",
                  children: [
                    p.jsx("div", {
                      className: "font-medium text-yellow-900",
                      children: s.company.name,
                    }),
                    p.jsxs("div", {
                      className: "text-sm text-yellow-700",
                      children: ["Due: ", Pi(s.dueDate)],
                    }),
                  ],
                },
                s.company.id
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function H(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function ze(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ke(e, t) {
  const n = H(e);
  return isNaN(t) ? ze(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function rt(e, t) {
  const n = H(e);
  if (isNaN(t)) return ze(e, NaN);
  if (!t) return n;
  const r = n.getDate(),
    o = ze(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n);
}
const su = 6048e5,
  d1 = 864e5;
let f1 = {};
function go() {
  return f1;
}
function mt(e, t) {
  var s, a, u, c;
  const n = go(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    o = H(e),
    i = o.getDay(),
    l = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - l), o.setHours(0, 0, 0, 0), o;
}
function Sn(e) {
  return mt(e, { weekStartsOn: 1 });
}
function Mm(e) {
  const t = H(e),
    n = t.getFullYear(),
    r = ze(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Sn(r),
    i = ze(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const l = Sn(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= l.getTime()
    ? n
    : n - 1;
}
function lr(e) {
  const t = H(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ti(e) {
  const t = H(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function at(e, t) {
  const n = lr(e),
    r = lr(t),
    o = +n - Ti(n),
    i = +r - Ti(r);
  return Math.round((o - i) / d1);
}
function p1(e) {
  const t = Mm(e),
    n = ze(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Sn(n);
}
function Gs(e, t) {
  const n = t * 7;
  return ke(e, n);
}
function m1(e, t) {
  return rt(e, t * 12);
}
function h1(e) {
  let t;
  return (
    e.forEach(function (n) {
      const r = H(n);
      (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
    }),
    t || new Date(NaN)
  );
}
function v1(e) {
  let t;
  return (
    e.forEach((n) => {
      const r = H(n);
      (!t || t > r || isNaN(+r)) && (t = r);
    }),
    t || new Date(NaN)
  );
}
function be(e, t) {
  const n = lr(e),
    r = lr(t);
  return +n == +r;
}
function au(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function g1(e) {
  if (!au(e) && typeof e != "number") return !1;
  const t = H(e);
  return !isNaN(Number(t));
}
function lo(e, t) {
  const n = H(e),
    r = H(t),
    o = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function y1(e, t, n) {
  const r = mt(e, n),
    o = mt(t, n),
    i = +r - Ti(r),
    l = +o - Ti(o);
  return Math.round((i - l) / su);
}
function uu(e) {
  const t = H(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function Te(e) {
  const t = H(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Dm(e) {
  const t = H(e),
    n = ze(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function cu(e, t) {
  var s, a, u, c;
  const n = go(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    o = H(e),
    i = o.getDay(),
    l = (i < r ? -7 : 0) + 6 - (i - r);
  return o.setDate(o.getDate() + l), o.setHours(23, 59, 59, 999), o;
}
function Tm(e) {
  return cu(e, { weekStartsOn: 1 });
}
const w1 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  x1 = (e, t, n) => {
    let r;
    const o = w1[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
        ? (r = o.one)
        : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function Fl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const k1 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  S1 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  C1 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  N1 = {
    date: Fl({ formats: k1, defaultWidth: "full" }),
    time: Fl({ formats: S1, defaultWidth: "full" }),
    dateTime: Fl({ formats: C1, defaultWidth: "full" }),
  },
  E1 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  P1 = (e, t, n, r) => E1[e];
function Pr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : l;
      o = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const b1 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  _1 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  M1 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  D1 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  T1 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  O1 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  j1 = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  R1 = {
    ordinalNumber: j1,
    era: Pr({ values: b1, defaultWidth: "wide" }),
    quarter: Pr({
      values: _1,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Pr({ values: M1, defaultWidth: "wide" }),
    day: Pr({ values: D1, defaultWidth: "wide" }),
    dayPeriod: Pr({
      values: T1,
      defaultWidth: "wide",
      formattingValues: O1,
      defaultFormattingWidth: "wide",
    }),
  };
function br(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    const l = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? A1(s, (d) => d.test(l)) : L1(s, (d) => d.test(l));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(l.length);
    return { value: u, rest: c };
  };
}
function L1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function A1(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function I1(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = t.slice(o.length);
    return { value: l, rest: s };
  };
}
const F1 = /^(\d+)(th|st|nd|rd)?/i,
  z1 = /\d+/i,
  W1 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  $1 = { any: [/^b/i, /^(a|c)/i] },
  B1 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  H1 = { any: [/1/i, /2/i, /3/i, /4/i] },
  U1 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  V1 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Y1 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Q1 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  G1 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  K1 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  X1 = {
    ordinalNumber: I1({
      matchPattern: F1,
      parsePattern: z1,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: br({
      matchPatterns: W1,
      defaultMatchWidth: "wide",
      parsePatterns: $1,
      defaultParseWidth: "any",
    }),
    quarter: br({
      matchPatterns: B1,
      defaultMatchWidth: "wide",
      parsePatterns: H1,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: br({
      matchPatterns: U1,
      defaultMatchWidth: "wide",
      parsePatterns: V1,
      defaultParseWidth: "any",
    }),
    day: br({
      matchPatterns: Y1,
      defaultMatchWidth: "wide",
      parsePatterns: Q1,
      defaultParseWidth: "any",
    }),
    dayPeriod: br({
      matchPatterns: G1,
      defaultMatchWidth: "any",
      parsePatterns: K1,
      defaultParseWidth: "any",
    }),
  },
  Om = {
    code: "en-US",
    formatDistance: x1,
    formatLong: N1,
    formatRelative: P1,
    localize: R1,
    match: X1,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function q1(e) {
  const t = H(e);
  return at(t, Dm(t)) + 1;
}
function jm(e) {
  const t = H(e),
    n = +Sn(t) - +p1(t);
  return Math.round(n / su) + 1;
}
function Rm(e, t) {
  var c, d, m, g;
  const n = H(e),
    r = n.getFullYear(),
    o = go(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((g = (m = o.locale) == null ? void 0 : m.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    l = ze(e, 0);
  l.setFullYear(r + 1, 0, i), l.setHours(0, 0, 0, 0);
  const s = mt(l, t),
    a = ze(e, 0);
  a.setFullYear(r, 0, i), a.setHours(0, 0, 0, 0);
  const u = mt(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function Z1(e, t) {
  var s, a, u, c;
  const n = go(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.firstWeekContainsDate) ??
      1,
    o = Rm(e, t),
    i = ze(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), mt(i, t);
}
function Lm(e, t) {
  const n = H(e),
    r = +mt(n, t) - +Z1(n, t);
  return Math.round(r / su) + 1;
}
function Y(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const At = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return Y(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Y(n + 1, 2);
    },
    d(e, t) {
      return Y(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return Y(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return Y(e.getHours(), t.length);
    },
    m(e, t) {
      return Y(e.getMinutes(), t.length);
    },
    s(e, t) {
      return Y(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return Y(o, t.length);
    },
  },
  Mn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Qc = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return At.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Rm(e, r),
        i = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const l = i % 100;
        return Y(l, 2);
      }
      return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Y(i, t.length);
    },
    R: function (e, t) {
      const n = Mm(e);
      return Y(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return Y(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return Y(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return Y(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return At.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return Y(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const o = Lm(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Y(o, t.length);
    },
    I: function (e, t, n) {
      const r = jm(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Y(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : At.d(e, t);
    },
    D: function (e, t, n) {
      const r = q1(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : Y(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return Y(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return Y(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return Y(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = Mn.noon)
          : r === 0
          ? (o = Mn.midnight)
          : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = Mn.evening)
          : r >= 12
          ? (o = Mn.afternoon)
          : r >= 4
          ? (o = Mn.morning)
          : (o = Mn.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return At.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : At.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Y(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : At.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : At.s(e, t);
    },
    S: function (e, t) {
      return At.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Kc(r);
        case "XXXX":
        case "XX":
          return un(r);
        case "XXXXX":
        case "XXX":
        default:
          return un(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Kc(r);
        case "xxxx":
        case "xx":
          return un(r);
        case "xxxxx":
        case "xxx":
        default:
          return un(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Gc(r, ":");
        case "OOOO":
        default:
          return "GMT" + un(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Gc(r, ":");
        case "zzzz":
        default:
          return "GMT" + un(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return Y(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return Y(r, t.length);
    },
  };
function Gc(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Y(i, 2);
}
function Kc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Y(Math.abs(e) / 60, 2) : un(e, t);
}
function un(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Y(Math.trunc(r / 60), 2),
    i = Y(r % 60, 2);
  return n + o + t + i;
}
const Xc = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Am = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  J1 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return Xc(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Xc(r, t)).replace("{{time}}", Am(o, t));
  },
  ex = { p: Am, P: J1 },
  tx = /^D+$/,
  nx = /^Y+$/,
  rx = ["D", "DD", "YY", "YYYY"];
function ox(e) {
  return tx.test(e);
}
function ix(e) {
  return nx.test(e);
}
function lx(e, t, n) {
  const r = sx(e, t, n);
  if ((console.warn(r), rx.includes(e))) throw new RangeError(r);
}
function sx(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ax = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  ux = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  cx = /^'([^]*?)'?$/,
  dx = /''/g,
  fx = /[a-zA-Z]/;
function Pn(e, t, n) {
  var c, d, m, g, v, w, k, h;
  const r = go(),
    o = (n == null ? void 0 : n.locale) ?? r.locale ?? Om,
    i =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((g = (m = r.locale) == null ? void 0 : m.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    l =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((w = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) ==
      null
        ? void 0
        : w.weekStartsOn) ??
      r.weekStartsOn ??
      ((h = (k = r.locale) == null ? void 0 : k.options) == null
        ? void 0
        : h.weekStartsOn) ??
      0,
    s = H(e);
  if (!g1(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(ux)
    .map((f) => {
      const y = f[0];
      if (y === "p" || y === "P") {
        const S = ex[y];
        return S(f, o.formatLong);
      }
      return f;
    })
    .join("")
    .match(ax)
    .map((f) => {
      if (f === "''") return { isToken: !1, value: "'" };
      const y = f[0];
      if (y === "'") return { isToken: !1, value: px(f) };
      if (Qc[y]) return { isToken: !0, value: f };
      if (y.match(fx))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            y +
            "`"
        );
      return { isToken: !1, value: f };
    });
  o.localize.preprocessor && (a = o.localize.preprocessor(s, a));
  const u = { firstWeekContainsDate: i, weekStartsOn: l, locale: o };
  return a
    .map((f) => {
      if (!f.isToken) return f.value;
      const y = f.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && ix(y)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && ox(y))) &&
        lx(y, t, String(e));
      const S = Qc[y[0]];
      return S(s, y, o.localize, u);
    })
    .join("");
}
function px(e) {
  const t = e.match(cx);
  return t ? t[1].replace(dx, "'") : e;
}
function mx(e) {
  const t = H(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    o = ze(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function hx(e) {
  return Math.trunc(+H(e) / 1e3);
}
function vx(e) {
  const t = H(e),
    n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function gx(e, t) {
  return y1(vx(e), Te(e), t) + 1;
}
function Ks(e, t) {
  const n = H(e),
    r = H(t);
  return n.getTime() > r.getTime();
}
function Im(e, t) {
  const n = H(e),
    r = H(t);
  return +n < +r;
}
function du(e, t) {
  const n = H(e),
    r = H(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function yx(e, t) {
  const n = H(e),
    r = H(t);
  return n.getFullYear() === r.getFullYear();
}
function zl(e, t) {
  return ke(e, -t);
}
function Wl(e, t) {
  const n = H(e),
    r = n.getFullYear(),
    o = n.getDate(),
    i = ze(e, 0);
  i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
  const l = mx(i);
  return n.setMonth(t, Math.min(o, l)), n;
}
function qc(e, t) {
  const n = H(e);
  return isNaN(+n) ? ze(e, NaN) : (n.setFullYear(t), n);
}
var L = function () {
  return (
    (L =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    L.apply(this, arguments)
  );
};
function wx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Fm(e, t, n) {
  for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) &&
      (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function yo(e) {
  return e.mode === "multiple";
}
function wo(e) {
  return e.mode === "range";
}
function ll(e) {
  return e.mode === "single";
}
var xx = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle",
};
function kx(e, t) {
  return Pn(e, "LLLL y", t);
}
function Sx(e, t) {
  return Pn(e, "d", t);
}
function Cx(e, t) {
  return Pn(e, "LLLL", t);
}
function Nx(e) {
  return "".concat(e);
}
function Ex(e, t) {
  return Pn(e, "cccccc", t);
}
function Px(e, t) {
  return Pn(e, "yyyy", t);
}
var bx = Object.freeze({
    __proto__: null,
    formatCaption: kx,
    formatDay: Sx,
    formatMonthCaption: Cx,
    formatWeekNumber: Nx,
    formatWeekdayName: Ex,
    formatYearCaption: Px,
  }),
  _x = function (e, t, n) {
    return Pn(e, "do MMMM (EEEE)", n);
  },
  Mx = function () {
    return "Month: ";
  },
  Dx = function () {
    return "Go to next month";
  },
  Tx = function () {
    return "Go to previous month";
  },
  Ox = function (e, t) {
    return Pn(e, "cccc", t);
  },
  jx = function (e) {
    return "Week n. ".concat(e);
  },
  Rx = function () {
    return "Year: ";
  },
  Lx = Object.freeze({
    __proto__: null,
    labelDay: _x,
    labelMonthDropdown: Mx,
    labelNext: Dx,
    labelPrevious: Tx,
    labelWeekNumber: jx,
    labelWeekday: Ox,
    labelYearDropdown: Rx,
  });
function Ax() {
  var e = "buttons",
    t = xx,
    n = Om,
    r = {},
    o = {},
    i = 1,
    l = {},
    s = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: bx,
    labels: Lx,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: l,
    today: s,
    mode: "default",
  };
}
function Ix(e) {
  var t = e.fromYear,
    n = e.toYear,
    r = e.fromMonth,
    o = e.toMonth,
    i = e.fromDate,
    l = e.toDate;
  return (
    r ? (i = Te(r)) : t && (i = new Date(t, 0, 1)),
    o ? (l = uu(o)) : n && (l = new Date(n, 11, 31)),
    { fromDate: i ? lr(i) : void 0, toDate: l ? lr(l) : void 0 }
  );
}
var zm = x.createContext(void 0);
function Fx(e) {
  var t,
    n = e.initialProps,
    r = Ax(),
    o = Ix(n),
    i = o.fromDate,
    l = o.toDate,
    s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!i || !l) && (s = "buttons");
  var a;
  (ll(n) || yo(n) || wo(n)) && (a = n.onSelect);
  var u = L(L(L({}, r), n), {
    captionLayout: s,
    classNames: L(L({}, r.classNames), n.classNames),
    components: L({}, n.components),
    formatters: L(L({}, r.formatters), n.formatters),
    fromDate: i,
    labels: L(L({}, r.labels), n.labels),
    mode: n.mode || r.mode,
    modifiers: L(L({}, r.modifiers), n.modifiers),
    modifiersClassNames: L(L({}, r.modifiersClassNames), n.modifiersClassNames),
    onSelect: a,
    styles: L(L({}, r.styles), n.styles),
    toDate: l,
  });
  return p.jsx(zm.Provider, { value: u, children: e.children });
}
function K() {
  var e = x.useContext(zm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Wm(e) {
  var t = K(),
    n = t.locale,
    r = t.classNames,
    o = t.styles,
    i = t.formatters.formatCaption;
  return p.jsx("div", {
    className: r.caption_label,
    style: o.caption_label,
    "aria-live": "polite",
    role: "presentation",
    id: e.id,
    children: i(e.displayMonth, { locale: n }),
  });
}
function zx(e) {
  return p.jsx(
    "svg",
    L(
      {
        width: "8px",
        height: "8px",
        viewBox: "0 0 120 120",
        "data-testid": "iconDropdown",
      },
      e,
      {
        children: p.jsx("path", {
          d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
          fill: "currentColor",
          fillRule: "nonzero",
        }),
      }
    )
  );
}
function $m(e) {
  var t,
    n,
    r = e.onChange,
    o = e.value,
    i = e.children,
    l = e.caption,
    s = e.className,
    a = e.style,
    u = K(),
    c =
      (n =
        (t = u.components) === null || t === void 0
          ? void 0
          : t.IconDropdown) !== null && n !== void 0
        ? n
        : zx;
  return p.jsxs("div", {
    className: s,
    style: a,
    children: [
      p.jsx("span", {
        className: u.classNames.vhidden,
        children: e["aria-label"],
      }),
      p.jsx("select", {
        name: e.name,
        "aria-label": e["aria-label"],
        className: u.classNames.dropdown,
        style: u.styles.dropdown,
        value: o,
        onChange: r,
        children: i,
      }),
      p.jsxs("div", {
        className: u.classNames.caption_label,
        style: u.styles.caption_label,
        "aria-hidden": "true",
        children: [
          l,
          p.jsx(c, {
            className: u.classNames.dropdown_icon,
            style: u.styles.dropdown_icon,
          }),
        ],
      }),
    ],
  });
}
function Wx(e) {
  var t,
    n = K(),
    r = n.fromDate,
    o = n.toDate,
    i = n.styles,
    l = n.locale,
    s = n.formatters.formatMonthCaption,
    a = n.classNames,
    u = n.components,
    c = n.labels.labelMonthDropdown;
  if (!r) return p.jsx(p.Fragment, {});
  if (!o) return p.jsx(p.Fragment, {});
  var d = [];
  if (yx(r, o))
    for (var m = Te(r), g = r.getMonth(); g <= o.getMonth(); g++)
      d.push(Wl(m, g));
  else for (var m = Te(new Date()), g = 0; g <= 11; g++) d.push(Wl(m, g));
  var v = function (k) {
      var h = Number(k.target.value),
        f = Wl(Te(e.displayMonth), h);
      e.onChange(f);
    },
    w = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : $m;
  return p.jsx(w, {
    name: "months",
    "aria-label": c(),
    className: a.dropdown_month,
    style: i.dropdown_month,
    onChange: v,
    value: e.displayMonth.getMonth(),
    caption: s(e.displayMonth, { locale: l }),
    children: d.map(function (k) {
      return p.jsx(
        "option",
        { value: k.getMonth(), children: s(k, { locale: l }) },
        k.getMonth()
      );
    }),
  });
}
function $x(e) {
  var t,
    n = e.displayMonth,
    r = K(),
    o = r.fromDate,
    i = r.toDate,
    l = r.locale,
    s = r.styles,
    a = r.classNames,
    u = r.components,
    c = r.formatters.formatYearCaption,
    d = r.labels.labelYearDropdown,
    m = [];
  if (!o) return p.jsx(p.Fragment, {});
  if (!i) return p.jsx(p.Fragment, {});
  for (var g = o.getFullYear(), v = i.getFullYear(), w = g; w <= v; w++)
    m.push(qc(Dm(new Date()), w));
  var k = function (f) {
      var y = qc(Te(n), Number(f.target.value));
      e.onChange(y);
    },
    h = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : $m;
  return p.jsx(h, {
    name: "years",
    "aria-label": d(),
    className: a.dropdown_year,
    style: s.dropdown_year,
    onChange: k,
    value: n.getFullYear(),
    caption: c(n, { locale: l }),
    children: m.map(function (f) {
      return p.jsx(
        "option",
        { value: f.getFullYear(), children: c(f, { locale: l }) },
        f.getFullYear()
      );
    }),
  });
}
function Bx(e, t) {
  var n = x.useState(e),
    r = n[0],
    o = n[1],
    i = t === void 0 ? r : t;
  return [i, o];
}
function Hx(e) {
  var t = e.month,
    n = e.defaultMonth,
    r = e.today,
    o = t || n || r || new Date(),
    i = e.toDate,
    l = e.fromDate,
    s = e.numberOfMonths,
    a = s === void 0 ? 1 : s;
  if (i && lo(i, o) < 0) {
    var u = -1 * (a - 1);
    o = rt(i, u);
  }
  return l && lo(o, l) < 0 && (o = l), Te(o);
}
function Ux() {
  var e = K(),
    t = Hx(e),
    n = Bx(t, e.month),
    r = n[0],
    o = n[1],
    i = function (l) {
      var s;
      if (!e.disableNavigation) {
        var a = Te(l);
        o(a), (s = e.onMonthChange) === null || s === void 0 || s.call(e, a);
      }
    };
  return [r, i];
}
function Vx(e, t) {
  for (
    var n = t.reverseMonths,
      r = t.numberOfMonths,
      o = Te(e),
      i = Te(rt(o, r)),
      l = lo(i, o),
      s = [],
      a = 0;
    a < l;
    a++
  ) {
    var u = rt(o, a);
    s.push(u);
  }
  return n && (s = s.reverse()), s;
}
function Yx(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      i = o === void 0 ? 1 : o,
      l = r ? i : 1,
      s = Te(e);
    if (!n) return rt(s, l);
    var a = lo(n, e);
    if (!(a < i)) return rt(s, l);
  }
}
function Qx(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      i = o === void 0 ? 1 : o,
      l = r ? i : 1,
      s = Te(e);
    if (!n) return rt(s, -l);
    var a = lo(s, n);
    if (!(a <= 0)) return rt(s, -l);
  }
}
var Bm = x.createContext(void 0);
function Gx(e) {
  var t = K(),
    n = Ux(),
    r = n[0],
    o = n[1],
    i = Vx(r, t),
    l = Yx(r, t),
    s = Qx(r, t),
    a = function (d) {
      return i.some(function (m) {
        return du(d, m);
      });
    },
    u = function (d, m) {
      a(d) || (m && Im(d, m) ? o(rt(d, 1 + t.numberOfMonths * -1)) : o(d));
    },
    c = {
      currentMonth: r,
      displayMonths: i,
      goToMonth: o,
      goToDate: u,
      previousMonth: s,
      nextMonth: l,
      isDateDisplayed: a,
    };
  return p.jsx(Bm.Provider, { value: c, children: e.children });
}
function xo() {
  var e = x.useContext(Bm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Zc(e) {
  var t,
    n = K(),
    r = n.classNames,
    o = n.styles,
    i = n.components,
    l = xo().goToMonth,
    s = function (c) {
      l(rt(c, e.displayIndex ? -e.displayIndex : 0));
    },
    a =
      (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0
        ? t
        : Wm,
    u = p.jsx(a, { id: e.id, displayMonth: e.displayMonth });
  return p.jsxs("div", {
    className: r.caption_dropdowns,
    style: o.caption_dropdowns,
    children: [
      p.jsx("div", { className: r.vhidden, children: u }),
      p.jsx(Wx, { onChange: s, displayMonth: e.displayMonth }),
      p.jsx($x, { onChange: s, displayMonth: e.displayMonth }),
    ],
  });
}
function Kx(e) {
  return p.jsx(
    "svg",
    L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, {
      children: p.jsx("path", {
        d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
        fill: "currentColor",
        fillRule: "nonzero",
      }),
    })
  );
}
function Xx(e) {
  return p.jsx(
    "svg",
    L({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, {
      children: p.jsx("path", {
        d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
        fill: "currentColor",
      }),
    })
  );
}
var Oi = x.forwardRef(function (e, t) {
  var n = K(),
    r = n.classNames,
    o = n.styles,
    i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var l = i.join(" "),
    s = L(L({}, o.button_reset), o.button);
  return (
    e.style && Object.assign(s, e.style),
    p.jsx(
      "button",
      L({}, e, { ref: t, type: "button", className: l, style: s })
    )
  );
});
function qx(e) {
  var t,
    n,
    r = K(),
    o = r.dir,
    i = r.locale,
    l = r.classNames,
    s = r.styles,
    a = r.labels,
    u = a.labelPrevious,
    c = a.labelNext,
    d = r.components;
  if (!e.nextMonth && !e.previousMonth) return p.jsx(p.Fragment, {});
  var m = u(e.previousMonth, { locale: i }),
    g = [l.nav_button, l.nav_button_previous].join(" "),
    v = c(e.nextMonth, { locale: i }),
    w = [l.nav_button, l.nav_button_next].join(" "),
    k =
      (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Xx,
    h = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Kx;
  return p.jsxs("div", {
    className: l.nav,
    style: s.nav,
    children: [
      !e.hidePrevious &&
        p.jsx(Oi, {
          name: "previous-month",
          "aria-label": m,
          className: g,
          style: s.nav_button_previous,
          disabled: !e.previousMonth,
          onClick: e.onPreviousClick,
          children:
            o === "rtl"
              ? p.jsx(k, { className: l.nav_icon, style: s.nav_icon })
              : p.jsx(h, { className: l.nav_icon, style: s.nav_icon }),
        }),
      !e.hideNext &&
        p.jsx(Oi, {
          name: "next-month",
          "aria-label": v,
          className: w,
          style: s.nav_button_next,
          disabled: !e.nextMonth,
          onClick: e.onNextClick,
          children:
            o === "rtl"
              ? p.jsx(h, { className: l.nav_icon, style: s.nav_icon })
              : p.jsx(k, { className: l.nav_icon, style: s.nav_icon }),
        }),
    ],
  });
}
function Jc(e) {
  var t = K().numberOfMonths,
    n = xo(),
    r = n.previousMonth,
    o = n.nextMonth,
    i = n.goToMonth,
    l = n.displayMonths,
    s = l.findIndex(function (v) {
      return du(e.displayMonth, v);
    }),
    a = s === 0,
    u = s === l.length - 1,
    c = t > 1 && (a || !u),
    d = t > 1 && (u || !a),
    m = function () {
      r && i(r);
    },
    g = function () {
      o && i(o);
    };
  return p.jsx(qx, {
    displayMonth: e.displayMonth,
    hideNext: c,
    hidePrevious: d,
    nextMonth: o,
    previousMonth: r,
    onPreviousClick: m,
    onNextClick: g,
  });
}
function Zx(e) {
  var t,
    n = K(),
    r = n.classNames,
    o = n.disableNavigation,
    i = n.styles,
    l = n.captionLayout,
    s = n.components,
    a =
      (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0
        ? t
        : Wm,
    u;
  return (
    o
      ? (u = p.jsx(a, { id: e.id, displayMonth: e.displayMonth }))
      : l === "dropdown"
      ? (u = p.jsx(Zc, { displayMonth: e.displayMonth, id: e.id }))
      : l === "dropdown-buttons"
      ? (u = p.jsxs(p.Fragment, {
          children: [
            p.jsx(Zc, {
              displayMonth: e.displayMonth,
              displayIndex: e.displayIndex,
              id: e.id,
            }),
            p.jsx(Jc, {
              displayMonth: e.displayMonth,
              displayIndex: e.displayIndex,
              id: e.id,
            }),
          ],
        }))
      : (u = p.jsxs(p.Fragment, {
          children: [
            p.jsx(a, {
              id: e.id,
              displayMonth: e.displayMonth,
              displayIndex: e.displayIndex,
            }),
            p.jsx(Jc, { displayMonth: e.displayMonth, id: e.id }),
          ],
        })),
    p.jsx("div", { className: r.caption, style: i.caption, children: u })
  );
}
function Jx(e) {
  var t = K(),
    n = t.footer,
    r = t.styles,
    o = t.classNames.tfoot;
  return n
    ? p.jsx("tfoot", {
        className: o,
        style: r.tfoot,
        children: p.jsx("tr", {
          children: p.jsx("td", { colSpan: 8, children: n }),
        }),
      })
    : p.jsx(p.Fragment, {});
}
function ek(e, t, n) {
  for (
    var r = n ? Sn(new Date()) : mt(new Date(), { locale: e, weekStartsOn: t }),
      o = [],
      i = 0;
    i < 7;
    i++
  ) {
    var l = ke(r, i);
    o.push(l);
  }
  return o;
}
function tk() {
  var e = K(),
    t = e.classNames,
    n = e.styles,
    r = e.showWeekNumber,
    o = e.locale,
    i = e.weekStartsOn,
    l = e.ISOWeek,
    s = e.formatters.formatWeekdayName,
    a = e.labels.labelWeekday,
    u = ek(o, i, l);
  return p.jsxs("tr", {
    style: n.head_row,
    className: t.head_row,
    children: [
      r && p.jsx("td", { style: n.head_cell, className: t.head_cell }),
      u.map(function (c, d) {
        return p.jsx(
          "th",
          {
            scope: "col",
            className: t.head_cell,
            style: n.head_cell,
            "aria-label": a(c, { locale: o }),
            children: s(c, { locale: o }),
          },
          d
        );
      }),
    ],
  });
}
function nk() {
  var e,
    t = K(),
    n = t.classNames,
    r = t.styles,
    o = t.components,
    i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : tk;
  return p.jsx("thead", {
    style: r.head,
    className: n.head,
    children: p.jsx(i, {}),
  });
}
function rk(e) {
  var t = K(),
    n = t.locale,
    r = t.formatters.formatDay;
  return p.jsx(p.Fragment, { children: r(e.date, { locale: n }) });
}
var fu = x.createContext(void 0);
function ok(e) {
  if (!yo(e.initialProps)) {
    var t = { selected: void 0, modifiers: { disabled: [] } };
    return p.jsx(fu.Provider, { value: t, children: e.children });
  }
  return p.jsx(ik, { initialProps: e.initialProps, children: e.children });
}
function ik(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = t.min,
    i = t.max,
    l = function (u, c, d) {
      var m, g;
      (m = t.onDayClick) === null || m === void 0 || m.call(t, u, c, d);
      var v = !!(c.selected && o && (r == null ? void 0 : r.length) === o);
      if (!v) {
        var w = !!(!c.selected && i && (r == null ? void 0 : r.length) === i);
        if (!w) {
          var k = r ? Fm([], r) : [];
          if (c.selected) {
            var h = k.findIndex(function (f) {
              return be(u, f);
            });
            k.splice(h, 1);
          } else k.push(u);
          (g = t.onSelect) === null || g === void 0 || g.call(t, k, u, c, d);
        }
      }
    },
    s = { disabled: [] };
  r &&
    s.disabled.push(function (u) {
      var c = i && r.length > i - 1,
        d = r.some(function (m) {
          return be(m, u);
        });
      return !!(c && !d);
    });
  var a = { selected: r, onDayClick: l, modifiers: s };
  return p.jsx(fu.Provider, { value: a, children: n });
}
function pu() {
  var e = x.useContext(fu);
  if (!e)
    throw new Error(
      "useSelectMultiple must be used within a SelectMultipleProvider"
    );
  return e;
}
function lk(e, t) {
  var n = t || {},
    r = n.from,
    o = n.to;
  return r && o
    ? be(o, e) && be(r, e)
      ? void 0
      : be(o, e)
      ? { from: o, to: void 0 }
      : be(r, e)
      ? void 0
      : Ks(r, e)
      ? { from: e, to: o }
      : { from: r, to: e }
    : o
    ? Ks(e, o)
      ? { from: o, to: e }
      : { from: e, to: o }
    : r
    ? Im(e, r)
      ? { from: e, to: r }
      : { from: r, to: e }
    : { from: e, to: void 0 };
}
var mu = x.createContext(void 0);
function sk(e) {
  if (!wo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: [],
      },
    };
    return p.jsx(mu.Provider, { value: t, children: e.children });
  }
  return p.jsx(ak, { initialProps: e.initialProps, children: e.children });
}
function ak(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = r || {},
    i = o.from,
    l = o.to,
    s = t.min,
    a = t.max,
    u = function (g, v, w) {
      var k, h;
      (k = t.onDayClick) === null || k === void 0 || k.call(t, g, v, w);
      var f = lk(g, r);
      (h = t.onSelect) === null || h === void 0 || h.call(t, f, g, v, w);
    },
    c = { range_start: [], range_end: [], range_middle: [], disabled: [] };
  if (
    (i
      ? ((c.range_start = [i]),
        l
          ? ((c.range_end = [l]),
            be(i, l) || (c.range_middle = [{ after: i, before: l }]))
          : (c.range_end = [i]))
      : l && ((c.range_start = [l]), (c.range_end = [l])),
    s &&
      (i &&
        !l &&
        c.disabled.push({ after: zl(i, s - 1), before: ke(i, s - 1) }),
      i && l && c.disabled.push({ after: i, before: ke(i, s - 1) }),
      !i &&
        l &&
        c.disabled.push({ after: zl(l, s - 1), before: ke(l, s - 1) })),
    a)
  ) {
    if (
      (i &&
        !l &&
        (c.disabled.push({ before: ke(i, -a + 1) }),
        c.disabled.push({ after: ke(i, a - 1) })),
      i && l)
    ) {
      var d = at(l, i) + 1,
        m = a - d;
      c.disabled.push({ before: zl(i, m) }),
        c.disabled.push({ after: ke(l, m) });
    }
    !i &&
      l &&
      (c.disabled.push({ before: ke(l, -a + 1) }),
      c.disabled.push({ after: ke(l, a - 1) }));
  }
  return p.jsx(mu.Provider, {
    value: { selected: r, onDayClick: u, modifiers: c },
    children: n,
  });
}
function hu() {
  var e = x.useContext(mu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ei(e) {
  return Array.isArray(e) ? Fm([], e) : e !== void 0 ? [e] : [];
}
function uk(e) {
  var t = {};
  return (
    Object.entries(e).forEach(function (n) {
      var r = n[0],
        o = n[1];
      t[r] = ei(o);
    }),
    t
  );
}
var ot;
(function (e) {
  (e.Outside = "outside"),
    (e.Disabled = "disabled"),
    (e.Selected = "selected"),
    (e.Hidden = "hidden"),
    (e.Today = "today"),
    (e.RangeStart = "range_start"),
    (e.RangeEnd = "range_end"),
    (e.RangeMiddle = "range_middle");
})(ot || (ot = {}));
var ck = ot.Selected,
  wt = ot.Disabled,
  dk = ot.Hidden,
  fk = ot.Today,
  $l = ot.RangeEnd,
  Bl = ot.RangeMiddle,
  Hl = ot.RangeStart,
  pk = ot.Outside;
function mk(e, t, n) {
  var r,
    o =
      ((r = {}),
      (r[ck] = ei(e.selected)),
      (r[wt] = ei(e.disabled)),
      (r[dk] = ei(e.hidden)),
      (r[fk] = [e.today]),
      (r[$l] = []),
      (r[Bl] = []),
      (r[Hl] = []),
      (r[pk] = []),
      r);
  return (
    e.fromDate && o[wt].push({ before: e.fromDate }),
    e.toDate && o[wt].push({ after: e.toDate }),
    yo(e)
      ? (o[wt] = o[wt].concat(t.modifiers[wt]))
      : wo(e) &&
        ((o[wt] = o[wt].concat(n.modifiers[wt])),
        (o[Hl] = n.modifiers[Hl]),
        (o[Bl] = n.modifiers[Bl]),
        (o[$l] = n.modifiers[$l])),
    o
  );
}
var Hm = x.createContext(void 0);
function hk(e) {
  var t = K(),
    n = pu(),
    r = hu(),
    o = mk(t, n, r),
    i = uk(t.modifiers),
    l = L(L({}, o), i);
  return p.jsx(Hm.Provider, { value: l, children: e.children });
}
function Um() {
  var e = x.useContext(Hm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function vk(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function gk(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function yk(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function wk(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function xk(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function kk(e, t) {
  var n,
    r = t.from,
    o = t.to;
  if (r && o) {
    var i = at(o, r) < 0;
    i && ((n = [o, r]), (r = n[0]), (o = n[1]));
    var l = at(e, r) >= 0 && at(o, e) >= 0;
    return l;
  }
  return o ? be(o, e) : r ? be(r, e) : !1;
}
function Sk(e) {
  return au(e);
}
function Ck(e) {
  return Array.isArray(e) && e.every(au);
}
function Nk(e, t) {
  return t.some(function (n) {
    if (typeof n == "boolean") return n;
    if (Sk(n)) return be(e, n);
    if (Ck(n)) return n.includes(e);
    if (gk(n)) return kk(e, n);
    if (xk(n)) return n.dayOfWeek.includes(e.getDay());
    if (vk(n)) {
      var r = at(n.before, e),
        o = at(n.after, e),
        i = r > 0,
        l = o < 0,
        s = Ks(n.before, n.after);
      return s ? l && i : i || l;
    }
    return yk(n)
      ? at(e, n.after) > 0
      : wk(n)
      ? at(n.before, e) > 0
      : typeof n == "function"
      ? n(e)
      : !1;
  });
}
function vu(e, t, n) {
  var r = Object.keys(t).reduce(function (i, l) {
      var s = t[l];
      return Nk(e, s) && i.push(l), i;
    }, []),
    o = {};
  return (
    r.forEach(function (i) {
      return (o[i] = !0);
    }),
    n && !du(e, n) && (o.outside = !0),
    o
  );
}
function Ek(e, t) {
  for (var n = Te(e[0]), r = uu(e[e.length - 1]), o, i, l = n; l <= r; ) {
    var s = vu(l, t),
      a = !s.disabled && !s.hidden;
    if (!a) {
      l = ke(l, 1);
      continue;
    }
    if (s.selected) return l;
    s.today && !i && (i = l), o || (o = l), (l = ke(l, 1));
  }
  return i || o;
}
var Pk = 365;
function Vm(e, t) {
  var n = t.moveBy,
    r = t.direction,
    o = t.context,
    i = t.modifiers,
    l = t.retry,
    s = l === void 0 ? { count: 0, lastFocused: e } : l,
    a = o.weekStartsOn,
    u = o.fromDate,
    c = o.toDate,
    d = o.locale,
    m = {
      day: ke,
      week: Gs,
      month: rt,
      year: m1,
      startOfWeek: function (k) {
        return o.ISOWeek ? Sn(k) : mt(k, { locale: d, weekStartsOn: a });
      },
      endOfWeek: function (k) {
        return o.ISOWeek ? Tm(k) : cu(k, { locale: d, weekStartsOn: a });
      },
    },
    g = m[n](e, r === "after" ? 1 : -1);
  r === "before" && u
    ? (g = h1([u, g]))
    : r === "after" && c && (g = v1([c, g]));
  var v = !0;
  if (i) {
    var w = vu(g, i);
    v = !w.disabled && !w.hidden;
  }
  return v
    ? g
    : s.count > Pk
    ? s.lastFocused
    : Vm(g, {
        moveBy: n,
        direction: r,
        context: o,
        modifiers: i,
        retry: L(L({}, s), { count: s.count + 1 }),
      });
}
var Ym = x.createContext(void 0);
function bk(e) {
  var t = xo(),
    n = Um(),
    r = x.useState(),
    o = r[0],
    i = r[1],
    l = x.useState(),
    s = l[0],
    a = l[1],
    u = Ek(t.displayMonths, n),
    c = o ?? (s && t.isDateDisplayed(s)) ? s : u,
    d = function () {
      a(o), i(void 0);
    },
    m = function (k) {
      i(k);
    },
    g = K(),
    v = function (k, h) {
      if (o) {
        var f = Vm(o, { moveBy: k, direction: h, context: g, modifiers: n });
        be(o, f) || (t.goToDate(f, o), m(f));
      }
    },
    w = {
      focusedDay: o,
      focusTarget: c,
      blur: d,
      focus: m,
      focusDayAfter: function () {
        return v("day", "after");
      },
      focusDayBefore: function () {
        return v("day", "before");
      },
      focusWeekAfter: function () {
        return v("week", "after");
      },
      focusWeekBefore: function () {
        return v("week", "before");
      },
      focusMonthBefore: function () {
        return v("month", "before");
      },
      focusMonthAfter: function () {
        return v("month", "after");
      },
      focusYearBefore: function () {
        return v("year", "before");
      },
      focusYearAfter: function () {
        return v("year", "after");
      },
      focusStartOfWeek: function () {
        return v("startOfWeek", "before");
      },
      focusEndOfWeek: function () {
        return v("endOfWeek", "after");
      },
    };
  return p.jsx(Ym.Provider, { value: w, children: e.children });
}
function gu() {
  var e = x.useContext(Ym);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function _k(e, t) {
  var n = Um(),
    r = vu(e, n, t);
  return r;
}
var yu = x.createContext(void 0);
function Mk(e) {
  if (!ll(e.initialProps)) {
    var t = { selected: void 0 };
    return p.jsx(yu.Provider, { value: t, children: e.children });
  }
  return p.jsx(Dk, { initialProps: e.initialProps, children: e.children });
}
function Dk(e) {
  var t = e.initialProps,
    n = e.children,
    r = function (i, l, s) {
      var a, u, c;
      if (
        ((a = t.onDayClick) === null || a === void 0 || a.call(t, i, l, s),
        l.selected && !t.required)
      ) {
        (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, i, l, s);
        return;
      }
      (c = t.onSelect) === null || c === void 0 || c.call(t, i, i, l, s);
    },
    o = { selected: t.selected, onDayClick: r };
  return p.jsx(yu.Provider, { value: o, children: n });
}
function Qm() {
  var e = x.useContext(yu);
  if (!e)
    throw new Error(
      "useSelectSingle must be used within a SelectSingleProvider"
    );
  return e;
}
function Tk(e, t) {
  var n = K(),
    r = Qm(),
    o = pu(),
    i = hu(),
    l = gu(),
    s = l.focusDayAfter,
    a = l.focusDayBefore,
    u = l.focusWeekAfter,
    c = l.focusWeekBefore,
    d = l.blur,
    m = l.focus,
    g = l.focusMonthBefore,
    v = l.focusMonthAfter,
    w = l.focusYearBefore,
    k = l.focusYearAfter,
    h = l.focusStartOfWeek,
    f = l.focusEndOfWeek,
    y = function (M) {
      var C, D, j, F;
      ll(n)
        ? (C = r.onDayClick) === null || C === void 0 || C.call(r, e, t, M)
        : yo(n)
        ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, M)
        : wo(n)
        ? (j = i.onDayClick) === null || j === void 0 || j.call(i, e, t, M)
        : (F = n.onDayClick) === null || F === void 0 || F.call(n, e, t, M);
    },
    S = function (M) {
      var C;
      m(e), (C = n.onDayFocus) === null || C === void 0 || C.call(n, e, t, M);
    },
    N = function (M) {
      var C;
      d(), (C = n.onDayBlur) === null || C === void 0 || C.call(n, e, t, M);
    },
    P = function (M) {
      var C;
      (C = n.onDayMouseEnter) === null || C === void 0 || C.call(n, e, t, M);
    },
    E = function (M) {
      var C;
      (C = n.onDayMouseLeave) === null || C === void 0 || C.call(n, e, t, M);
    },
    b = function (M) {
      var C;
      (C = n.onDayPointerEnter) === null || C === void 0 || C.call(n, e, t, M);
    },
    A = function (M) {
      var C;
      (C = n.onDayPointerLeave) === null || C === void 0 || C.call(n, e, t, M);
    },
    T = function (M) {
      var C;
      (C = n.onDayTouchCancel) === null || C === void 0 || C.call(n, e, t, M);
    },
    W = function (M) {
      var C;
      (C = n.onDayTouchEnd) === null || C === void 0 || C.call(n, e, t, M);
    },
    R = function (M) {
      var C;
      (C = n.onDayTouchMove) === null || C === void 0 || C.call(n, e, t, M);
    },
    U = function (M) {
      var C;
      (C = n.onDayTouchStart) === null || C === void 0 || C.call(n, e, t, M);
    },
    V = function (M) {
      var C;
      (C = n.onDayKeyUp) === null || C === void 0 || C.call(n, e, t, M);
    },
    oe = function (M) {
      var C;
      switch (M.key) {
        case "ArrowLeft":
          M.preventDefault(), M.stopPropagation(), n.dir === "rtl" ? s() : a();
          break;
        case "ArrowRight":
          M.preventDefault(), M.stopPropagation(), n.dir === "rtl" ? a() : s();
          break;
        case "ArrowDown":
          M.preventDefault(), M.stopPropagation(), u();
          break;
        case "ArrowUp":
          M.preventDefault(), M.stopPropagation(), c();
          break;
        case "PageUp":
          M.preventDefault(), M.stopPropagation(), M.shiftKey ? w() : g();
          break;
        case "PageDown":
          M.preventDefault(), M.stopPropagation(), M.shiftKey ? k() : v();
          break;
        case "Home":
          M.preventDefault(), M.stopPropagation(), h();
          break;
        case "End":
          M.preventDefault(), M.stopPropagation(), f();
          break;
      }
      (C = n.onDayKeyDown) === null || C === void 0 || C.call(n, e, t, M);
    },
    z = {
      onClick: y,
      onFocus: S,
      onBlur: N,
      onKeyDown: oe,
      onKeyUp: V,
      onMouseEnter: P,
      onMouseLeave: E,
      onPointerEnter: b,
      onPointerLeave: A,
      onTouchCancel: T,
      onTouchEnd: W,
      onTouchMove: R,
      onTouchStart: U,
    };
  return z;
}
function Ok() {
  var e = K(),
    t = Qm(),
    n = pu(),
    r = hu(),
    o = ll(e) ? t.selected : yo(e) ? n.selected : wo(e) ? r.selected : void 0;
  return o;
}
function jk(e) {
  return Object.values(ot).includes(e);
}
function Rk(e, t) {
  var n = [e.classNames.day];
  return (
    Object.keys(t).forEach(function (r) {
      var o = e.modifiersClassNames[r];
      if (o) n.push(o);
      else if (jk(r)) {
        var i = e.classNames["day_".concat(r)];
        i && n.push(i);
      }
    }),
    n
  );
}
function Lk(e, t) {
  var n = L({}, e.styles.day);
  return (
    Object.keys(t).forEach(function (r) {
      var o;
      n = L(
        L({}, n),
        (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]
      );
    }),
    n
  );
}
function Ak(e, t, n) {
  var r,
    o,
    i,
    l = K(),
    s = gu(),
    a = _k(e, t),
    u = Tk(e, a),
    c = Ok(),
    d = !!(l.onDayClick || l.mode !== "default");
  x.useEffect(
    function () {
      var P;
      a.outside ||
        (s.focusedDay &&
          d &&
          be(s.focusedDay, e) &&
          ((P = n.current) === null || P === void 0 || P.focus()));
    },
    [s.focusedDay, e, n, d, a.outside]
  );
  var m = Rk(l, a).join(" "),
    g = Lk(l, a),
    v = !!((a.outside && !l.showOutsideDays) || a.hidden),
    w =
      (i =
        (o = l.components) === null || o === void 0 ? void 0 : o.DayContent) !==
        null && i !== void 0
        ? i
        : rk,
    k = p.jsx(w, { date: e, displayMonth: t, activeModifiers: a }),
    h = { style: g, className: m, children: k, role: "gridcell" },
    f = s.focusTarget && be(s.focusTarget, e) && !a.outside,
    y = s.focusedDay && be(s.focusedDay, e),
    S = L(
      L(
        L({}, h),
        ((r = { disabled: a.disabled, role: "gridcell" }),
        (r["aria-selected"] = a.selected),
        (r.tabIndex = y || f ? 0 : -1),
        r)
      ),
      u
    ),
    N = {
      isButton: d,
      isHidden: v,
      activeModifiers: a,
      selectedDays: c,
      buttonProps: S,
      divProps: h,
    };
  return N;
}
function Ik(e) {
  var t = x.useRef(null),
    n = Ak(e.date, e.displayMonth, t);
  return n.isHidden
    ? p.jsx("div", { role: "gridcell" })
    : n.isButton
    ? p.jsx(Oi, L({ name: "day", ref: t }, n.buttonProps))
    : p.jsx("div", L({}, n.divProps));
}
function Fk(e) {
  var t = e.number,
    n = e.dates,
    r = K(),
    o = r.onWeekNumberClick,
    i = r.styles,
    l = r.classNames,
    s = r.locale,
    a = r.labels.labelWeekNumber,
    u = r.formatters.formatWeekNumber,
    c = u(Number(t), { locale: s });
  if (!o)
    return p.jsx("span", {
      className: l.weeknumber,
      style: i.weeknumber,
      children: c,
    });
  var d = a(Number(t), { locale: s }),
    m = function (g) {
      o(t, n, g);
    };
  return p.jsx(Oi, {
    name: "week-number",
    "aria-label": d,
    className: l.weeknumber,
    style: i.weeknumber,
    onClick: m,
    children: c,
  });
}
function zk(e) {
  var t,
    n,
    r = K(),
    o = r.styles,
    i = r.classNames,
    l = r.showWeekNumber,
    s = r.components,
    a = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Ik,
    u =
      (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : Fk,
    c;
  return (
    l &&
      (c = p.jsx("td", {
        className: i.cell,
        style: o.cell,
        children: p.jsx(u, { number: e.weekNumber, dates: e.dates }),
      })),
    p.jsxs("tr", {
      className: i.row,
      style: o.row,
      children: [
        c,
        e.dates.map(function (d) {
          return p.jsx(
            "td",
            {
              className: i.cell,
              style: o.cell,
              role: "presentation",
              children: p.jsx(a, { displayMonth: e.displayMonth, date: d }),
            },
            hx(d)
          );
        }),
      ],
    })
  );
}
function ed(e, t, n) {
  for (
    var r = n != null && n.ISOWeek ? Tm(t) : cu(t, n),
      o = n != null && n.ISOWeek ? Sn(e) : mt(e, n),
      i = at(r, o),
      l = [],
      s = 0;
    s <= i;
    s++
  )
    l.push(ke(o, s));
  var a = l.reduce(function (u, c) {
    var d = n != null && n.ISOWeek ? jm(c) : Lm(c, n),
      m = u.find(function (g) {
        return g.weekNumber === d;
      });
    return m
      ? (m.dates.push(c), u)
      : (u.push({ weekNumber: d, dates: [c] }), u);
  }, []);
  return a;
}
function Wk(e, t) {
  var n = ed(Te(e), uu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = gx(e, t);
    if (r < 6) {
      var o = n[n.length - 1],
        i = o.dates[o.dates.length - 1],
        l = Gs(i, 6 - r),
        s = ed(Gs(i, 1), l, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function $k(e) {
  var t,
    n,
    r,
    o = K(),
    i = o.locale,
    l = o.classNames,
    s = o.styles,
    a = o.hideHead,
    u = o.fixedWeeks,
    c = o.components,
    d = o.weekStartsOn,
    m = o.firstWeekContainsDate,
    g = o.ISOWeek,
    v = Wk(e.displayMonth, {
      useFixedWeeks: !!u,
      ISOWeek: g,
      locale: i,
      weekStartsOn: d,
      firstWeekContainsDate: m,
    }),
    w = (t = c == null ? void 0 : c.Head) !== null && t !== void 0 ? t : nk,
    k = (n = c == null ? void 0 : c.Row) !== null && n !== void 0 ? n : zk,
    h = (r = c == null ? void 0 : c.Footer) !== null && r !== void 0 ? r : Jx;
  return p.jsxs("table", {
    id: e.id,
    className: l.table,
    style: s.table,
    role: "grid",
    "aria-labelledby": e["aria-labelledby"],
    children: [
      !a && p.jsx(w, {}),
      p.jsx("tbody", {
        className: l.tbody,
        style: s.tbody,
        children: v.map(function (f) {
          return p.jsx(
            k,
            {
              displayMonth: e.displayMonth,
              dates: f.dates,
              weekNumber: f.weekNumber,
            },
            f.weekNumber
          );
        }),
      }),
      p.jsx(h, { displayMonth: e.displayMonth }),
    ],
  });
}
function Bk() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var Hk = Bk() ? x.useLayoutEffect : x.useEffect,
  Ul = !1,
  Uk = 0;
function td() {
  return "react-day-picker-".concat(++Uk);
}
function Vk(e) {
  var t,
    n = e ?? (Ul ? td() : null),
    r = x.useState(n),
    o = r[0],
    i = r[1];
  return (
    Hk(function () {
      o === null && i(td());
    }, []),
    x.useEffect(function () {
      Ul === !1 && (Ul = !0);
    }, []),
    (t = e ?? o) !== null && t !== void 0 ? t : void 0
  );
}
function Yk(e) {
  var t,
    n,
    r = K(),
    o = r.dir,
    i = r.classNames,
    l = r.styles,
    s = r.components,
    a = xo().displayMonths,
    u = Vk(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0),
    c = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0,
    d = [i.month],
    m = l.month,
    g = e.displayIndex === 0,
    v = e.displayIndex === a.length - 1,
    w = !g && !v;
  o === "rtl" && ((t = [g, v]), (v = t[0]), (g = t[1])),
    g && (d.push(i.caption_start), (m = L(L({}, m), l.caption_start))),
    v && (d.push(i.caption_end), (m = L(L({}, m), l.caption_end))),
    w && (d.push(i.caption_between), (m = L(L({}, m), l.caption_between)));
  var k =
    (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Zx;
  return p.jsxs(
    "div",
    {
      className: d.join(" "),
      style: m,
      children: [
        p.jsx(k, {
          id: u,
          displayMonth: e.displayMonth,
          displayIndex: e.displayIndex,
        }),
        p.jsx($k, {
          id: c,
          "aria-labelledby": u,
          displayMonth: e.displayMonth,
        }),
      ],
    },
    e.displayIndex
  );
}
function Qk(e) {
  var t = K(),
    n = t.classNames,
    r = t.styles;
  return p.jsx("div", {
    className: n.months,
    style: r.months,
    children: e.children,
  });
}
function Gk(e) {
  var t,
    n,
    r = e.initialProps,
    o = K(),
    i = gu(),
    l = xo(),
    s = x.useState(!1),
    a = s[0],
    u = s[1];
  x.useEffect(
    function () {
      o.initialFocus && i.focusTarget && (a || (i.focus(i.focusTarget), u(!0)));
    },
    [o.initialFocus, a, i.focus, i.focusTarget, i]
  );
  var c = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && c.push(o.classNames.multiple_months),
    o.showWeekNumber && c.push(o.classNames.with_weeknumber);
  var d = L(L({}, o.styles.root), o.style),
    m = Object.keys(r)
      .filter(function (v) {
        return v.startsWith("data-");
      })
      .reduce(function (v, w) {
        var k;
        return L(L({}, v), ((k = {}), (k[w] = r[w]), k));
      }, {}),
    g =
      (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !==
        null && n !== void 0
        ? n
        : Qk;
  return p.jsx(
    "div",
    L(
      {
        className: c.join(" "),
        style: d,
        dir: o.dir,
        id: o.id,
        nonce: r.nonce,
        title: r.title,
        lang: r.lang,
      },
      m,
      {
        children: p.jsx(g, {
          children: l.displayMonths.map(function (v, w) {
            return p.jsx(Yk, { displayIndex: w, displayMonth: v }, w);
          }),
        }),
      }
    )
  );
}
function Kk(e) {
  var t = e.children,
    n = wx(e, ["children"]);
  return p.jsx(Fx, {
    initialProps: n,
    children: p.jsx(Gx, {
      children: p.jsx(Mk, {
        initialProps: n,
        children: p.jsx(ok, {
          initialProps: n,
          children: p.jsx(sk, {
            initialProps: n,
            children: p.jsx(hk, { children: p.jsx(bk, { children: t }) }),
          }),
        }),
      }),
    }),
  });
}
function Xk(e) {
  return p.jsx(Kk, L({}, e, { children: p.jsx(Gk, { initialProps: e }) }));
}
function qk() {
  const { communications: e, companies: t, communicationMethods: n } = mo(),
    r = (l) =>
      e.filter((s) => {
        const a = new Date(s.date);
        return (
          a.getDate() === l.getDate() &&
          a.getMonth() === l.getMonth() &&
          a.getFullYear() === l.getFullYear()
        );
      }),
    o = {
      communication: {
        backgroundColor: "#3b82f6",
        color: "white",
        borderRadius: "100%",
      },
    },
    i = e.map((l) => new Date(l.date));
  return p.jsxs("div", {
    className: "bg-white rounded-lg shadow p-6",
    children: [
      p.jsx("h2", {
        className: "text-xl font-semibold text-gray-900 mb-4",
        children: "Communication Calendar",
      }),
      p.jsxs("div", {
        className: "flex gap-8",
        children: [
          p.jsx(Xk, {
            modifiers: { communication: i },
            modifiersStyles: o,
            mode: "single",
            onDayClick: (l) => {
              if (l) {
                const s = r(l);
                console.log("Communications for date:", s);
              }
            },
          }),
          p.jsxs("div", {
            className: "flex-1",
            children: [
              p.jsx("h3", {
                className: "text-lg font-medium text-gray-900 mb-3",
                children: "Legend",
              }),
              p.jsxs("div", {
                className: "space-y-2",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx("div", {
                        className: "w-4 h-4 rounded-full bg-blue-500",
                      }),
                      p.jsx("span", {
                        className: "text-sm text-gray-600",
                        children: "Communication",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx("div", {
                        className: "w-4 h-4 rounded-full bg-red-500",
                      }),
                      p.jsx("span", {
                        className: "text-sm text-gray-600",
                        children: "Overdue",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      p.jsx("div", {
                        className: "w-4 h-4 rounded-full bg-yellow-500",
                      }),
                      p.jsx("span", {
                        className: "text-sm text-gray-600",
                        children: "Due Today",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Zk() {
  return p.jsxs("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    children: [
      p.jsxs("div", {
        className: "lg:col-span-2 space-y-8",
        children: [p.jsx(u1, {}), p.jsx(qk, {})],
      }),
      p.jsx("div", { className: "lg:col-span-1", children: p.jsx(c1, {}) }),
    ],
  });
}
function Jk() {
  return p.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      p.jsx("header", {
        className: "bg-white border-b border-gray-200",
        children: p.jsxs("div", {
          className: "container mx-auto px-4 py-4 flex items-center",
          children: [
            p.jsx(f0, { className: "h-6 w-6 text-blue-600 mr-2" }),
            p.jsx("h1", {
              className: "text-xl font-semibold text-gray-900",
              children: "Company Communication Calendar",
            }),
          ],
        }),
      }),
      p.jsx("main", {
        className: "container mx-auto px-4 py-8",
        children: p.jsxs(Ry, {
          defaultValue: "user",
          className: "space-y-4",
          children: [
            p.jsxs(Up, {
              children: [
                p.jsx(Ws, { value: "user", children: "User Dashboard" }),
                p.jsx(Ws, { value: "admin", children: "Admin Dashboard" }),
              ],
            }),
            p.jsx($s, { value: "user", children: p.jsx(Zk, {}) }),
            p.jsx($s, { value: "admin", children: p.jsx(x0, {}) }),
          ],
        }),
      }),
    ],
  });
}
const Gm = document.getElementById("root");
if (!Gm) throw new Error("Failed to find the root element");
const eS = hp(Gm);
eS.render(p.jsx(x.StrictMode, { children: p.jsx(Jk, {}) }));
