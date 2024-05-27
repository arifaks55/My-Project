/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[0], Array(236).concat([function (e, t, n) {
    (function (e) {
        e.exports = function () {
            "use strict";
            var t, r;
            function o() {
                return t.apply(null, arguments)
            }
            function d(e) {
                t = e
            }
            function l(input) {
                return input instanceof Array || "[object Array]" === Object.prototype.toString.call(input)
            }
            function _(input) {
                return null != input && "[object Object]" === Object.prototype.toString.call(input)
            }
            function m(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }
            function c(e) {
                if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e)
                    if (m(e, t))
                        return !1;
                return !0
            }
            function h(input) {
                return void 0 === input
            }
            function f(input) {
                return "number" == typeof input || "[object Number]" === Object.prototype.toString.call(input)
            }
            function M(input) {
                return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
            }
            function map(e, t) {
                var i, n = [], r = e.length;
                for (i = 0; i < r; ++i)
                    n.push(t(e[i], i));
                return n
            }
            function y(a, b) {
                for (var i in b)
                    m(b, i) && (a[i] = b[i]);
                return m(b, "toString") && (a.toString = b.toString),
                    m(b, "valueOf") && (a.valueOf = b.valueOf),
                    a
            }
            function L(input, e, t, n) {
                return nn(input, e, t, n, !0).utc()
            }
            function Y() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }
            function v(e) {
                return null == e._pf && (e._pf = Y()),
                    e._pf
            }
            function k(e) {
                if (null == e._isValid) {
                    var t = v(e)
                        , n = r.call(t.parsedDateParts, (function (i) {
                            return null != i
                        }
                        ))
                        , o = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (o = o && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                        null != Object.isFrozen && Object.isFrozen(e))
                        return o;
                    e._isValid = o
                }
                return e._isValid
            }
            function D(e) {
                var t = L(NaN);
                return null != e ? y(v(t), e) : v(t).userInvalidated = !0,
                    t
            }
            r = Array.prototype.some ? Array.prototype.some : function (e) {
                var i, t = Object(this), n = t.length >>> 0;
                for (i = 0; i < n; i++)
                    if (i in t && e.call(this, t[i], i, t))
                        return !0;
                return !1
            }
                ;
            var w = o.momentProperties = []
                , T = !1;
            function x(e, t) {
                var i, n, r, o = w.length;
                if (h(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                    h(t._i) || (e._i = t._i),
                    h(t._f) || (e._f = t._f),
                    h(t._l) || (e._l = t._l),
                    h(t._strict) || (e._strict = t._strict),
                    h(t._tzm) || (e._tzm = t._tzm),
                    h(t._isUTC) || (e._isUTC = t._isUTC),
                    h(t._offset) || (e._offset = t._offset),
                    h(t._pf) || (e._pf = v(t)),
                    h(t._locale) || (e._locale = t._locale),
                    o > 0)
                    for (i = 0; i < o; i++)
                        h(r = t[n = w[i]]) || (e[n] = r);
                return e
            }
            function S(e) {
                x(this, e),
                    this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                    this.isValid() || (this._d = new Date(NaN)),
                    !1 === T && (T = !0,
                        o.updateOffset(this),
                        T = !1)
            }
            function H(e) {
                return e instanceof S || null != e && null != e._isAMomentObject
            }
            function j(e) {
                !1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function P(e, t) {
                var n = !0;
                return y((function () {
                    if (null != o.deprecationHandler && o.deprecationHandler(null, e),
                        n) {
                        var r, i, d, l = [], _ = arguments.length;
                        for (i = 0; i < _; i++) {
                            if (r = "",
                                "object" == typeof arguments[i]) {
                                for (d in r += "\n[" + i + "] ",
                                    arguments[0])
                                    m(arguments[0], d) && (r += d + ": " + arguments[0][d] + ", ");
                                r = r.slice(0, -2)
                            } else
                                r = arguments[i];
                            l.push(r)
                        }
                        j(e + "\nArguments: " + Array.prototype.slice.call(l).join("") + "\n" + (new Error).stack),
                            n = !1
                    }
                    return t.apply(this, arguments)
                }
                ), t)
            }
            var O, A = {};
            function F(e, t) {
                null != o.deprecationHandler && o.deprecationHandler(e, t),
                    A[e] || (j(t),
                        A[e] = !0)
            }
            function W(input) {
                return "undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
            }
            function C(e) {
                var t, i;
                for (i in e)
                    m(e, i) && (W(t = e[i]) ? this[i] = t : this["_" + i] = t);
                this._config = e,
                    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }
            function E(e, t) {
                var n, r = y({}, e);
                for (n in t)
                    m(t, n) && (_(e[n]) && _(t[n]) ? (r[n] = {},
                        y(r[n], e[n]),
                        y(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                for (n in e)
                    m(e, n) && !m(t, n) && _(e[n]) && (r[n] = y({}, r[n]));
                return r
            }
            function z(e) {
                null != e && this.set(e)
            }
            o.suppressDeprecationWarnings = !1,
                o.deprecationHandler = null,
                O = Object.keys ? Object.keys : function (e) {
                    var i, t = [];
                    for (i in e)
                        m(e, i) && t.push(i);
                    return t
                }
                ;
            var I = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };
            function N(e, t, n) {
                var output = this._calendar[e] || this._calendar.sameElse;
                return W(output) ? output.call(t, n) : output
            }
            function R(e, t, n) {
                var r = "" + Math.abs(e)
                    , o = t - r.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
            }
            var V = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
                , B = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
                , J = {}
                , U = {};
            function G(e, t, n, r) {
                var o = r;
                "string" == typeof r && (o = function () {
                    return this[r]()
                }
                ),
                    e && (U[e] = o),
                    t && (U[t[0]] = function () {
                        return R(o.apply(this, arguments), t[1], t[2])
                    }
                    ),
                    n && (U[n] = function () {
                        return this.localeData().ordinal(o.apply(this, arguments), e)
                    }
                    )
            }
            function $(input) {
                return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
            }
            function K(e) {
                var i, t, n = e.match(V);
                for (i = 0,
                    t = n.length; i < t; i++)
                    U[n[i]] ? n[i] = U[n[i]] : n[i] = $(n[i]);
                return function (r) {
                    var i, output = "";
                    for (i = 0; i < t; i++)
                        output += W(n[i]) ? n[i].call(r, e) : n[i];
                    return output
                }
            }
            function Z(e, t) {
                return e.isValid() ? (t = X(t, e.localeData()),
                    J[t] = J[t] || K(t),
                    J[t](e)) : e.localeData().invalidDate()
            }
            function X(e, t) {
                var i = 5;
                function n(input) {
                    return t.longDateFormat(input) || input
                }
                for (B.lastIndex = 0; i >= 0 && B.test(e);)
                    e = e.replace(B, n),
                        B.lastIndex = 0,
                        i -= 1;
                return e
            }
            var Q = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };
            function ee(e) {
                var t = this._longDateFormat[e]
                    , n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.match(V).map((function (e) {
                    return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                }
                )).join(""),
                    this._longDateFormat[e])
            }
            var te = "Invalid date";
            function ae() {
                return this._invalidDate
            }
            var ne = "%d"
                , re = /\d{1,2}/;
            function ie(e) {
                return this._ordinal.replace("%d", e)
            }
            var se = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function oe(e, t, n, r) {
                var output = this._relativeTime[n];
                return W(output) ? output(e, t, n, r) : output.replace(/%d/i, e)
            }
            function de(e, output) {
                var t = this._relativeTime[e > 0 ? "future" : "past"];
                return W(t) ? t(output) : t.replace(/%s/i, output)
            }
            var le = {};
            function ue(e, t) {
                var n = e.toLowerCase();
                le[n] = le[n + "s"] = le[t] = e
            }
            function _e(e) {
                return "string" == typeof e ? le[e] || le[e.toLowerCase()] : void 0
            }
            function me(e) {
                var t, n, r = {};
                for (n in e)
                    m(e, n) && (t = _e(n)) && (r[t] = e[n]);
                return r
            }
            var ce = {};
            function he(e, t) {
                ce[e] = t
            }
            function fe(e) {
                var u, t = [];
                for (u in e)
                    m(e, u) && t.push({
                        unit: u,
                        priority: ce[u]
                    });
                return t.sort((function (a, b) {
                    return a.priority - b.priority
                }
                )),
                    t
            }
            function Me(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            function pe(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }
            function ge(e) {
                var t = +e
                    , n = 0;
                return 0 !== t && isFinite(t) && (n = pe(t)),
                    n
            }
            function ye(e, t) {
                return function (n) {
                    return null != n ? (Ye(this, e, n),
                        o.updateOffset(this, t),
                        this) : Le(this, e)
                }
            }
            function Le(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }
            function Ye(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && Me(e.year()) && 1 === e.month() && 29 === e.date() ? (n = ge(n),
                    e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), lt(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }
            function ve(e) {
                return W(this[e = _e(e)]) ? this[e]() : this
            }
            function be(e, t) {
                if ("object" == typeof e) {
                    var i, n = fe(e = me(e)), r = n.length;
                    for (i = 0; i < r; i++)
                        this[n[i].unit](e[n[i].unit])
                } else if (W(this[e = _e(e)]))
                    return this[e](t);
                return this
            }
            var ke, De = /\d/, we = /\d\d/, Te = /\d{3}/, xe = /\d{4}/, Se = /[+-]?\d{6}/, He = /\d\d?/, je = /\d\d\d\d?/, Pe = /\d\d\d\d\d\d?/, Oe = /\d{1,3}/, Ae = /\d{1,4}/, Fe = /[+-]?\d{1,6}/, We = /\d+/, Ce = /[+-]?\d+/, Ee = /Z|[+-]\d\d:?\d\d/gi, ze = /Z|[+-]\d\d(?::?\d\d)?/gi, Ie = /[+-]?\d+(\.\d{1,3})?/, Ne = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
            function Re(e, t, n) {
                ke[e] = W(t) ? t : function (e, r) {
                    return e && n ? n : t
                }
            }
            function Ve(e, t) {
                return m(ke, e) ? ke[e](t._strict, t._locale) : new RegExp(Be(e))
            }
            function Be(s) {
                return Je(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function (e, t, n, r, o) {
                    return t || n || r || o
                }
                )))
            }
            function Je(s) {
                return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            ke = {};
            var Ue = {};
            function Ge(e, t) {
                var i, n, r = t;
                for ("string" == typeof e && (e = [e]),
                    f(t) && (r = function (input, e) {
                        e[t] = ge(input)
                    }
                    ),
                    n = e.length,
                    i = 0; i < n; i++)
                    Ue[e[i]] = r
            }
            function qe(e, t) {
                Ge(e, (function (input, e, n, r) {
                    n._w = n._w || {},
                        t(input, n._w, n, r)
                }
                ))
            }
            function $e(e, input, t) {
                null != input && m(Ue, e) && Ue[e](input, t._a, t, e)
            }
            var Ke, Ze = 0, Xe = 1, Qe = 2, et = 3, tt = 4, at = 5, nt = 6, it = 7, st = 8;
            function ot(e, t) {
                return (e % t + t) % t
            }
            function lt(e, t) {
                if (isNaN(e) || isNaN(t))
                    return NaN;
                var n = ot(t, 12);
                return e += (t - n) / 12,
                    1 === n ? Me(e) ? 29 : 28 : 31 - n % 7 % 2
            }
            Ke = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var i;
                for (i = 0; i < this.length; ++i)
                    if (this[i] === e)
                        return i;
                return -1
            }
                ,
                G("M", ["MM", 2], "Mo", (function () {
                    return this.month() + 1
                }
                )),
                G("MMM", 0, 0, (function (e) {
                    return this.localeData().monthsShort(this, e)
                }
                )),
                G("MMMM", 0, 0, (function (e) {
                    return this.localeData().months(this, e)
                }
                )),
                ue("month", "M"),
                he("month", 8),
                Re("M", He),
                Re("MM", He, we),
                Re("MMM", (function (e, t) {
                    return t.monthsShortRegex(e)
                }
                )),
                Re("MMMM", (function (e, t) {
                    return t.monthsRegex(e)
                }
                )),
                Ge(["M", "MM"], (function (input, e) {
                    e[Xe] = ge(input) - 1
                }
                )),
                Ge(["MMM", "MMMM"], (function (input, e, t, n) {
                    var r = t._locale.monthsParse(input, n, t._strict);
                    null != r ? e[Xe] = r : v(t).invalidMonth = input
                }
                ));
            var ut = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                , _t = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
                , mt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
                , ct = Ne
                , ht = Ne;
            function ft(e, t) {
                return e ? l(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || mt).test(t) ? "format" : "standalone"][e.month()] : l(this._months) ? this._months : this._months.standalone
            }
            function Mt(e, t) {
                return e ? l(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[mt.test(t) ? "format" : "standalone"][e.month()] : l(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }
            function pt(e, t, n) {
                var i, r, o, d = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                        this._longMonthsParse = [],
                        this._shortMonthsParse = [],
                        i = 0; i < 12; ++i)
                        o = L([2e3, i]),
                            this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                            this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = Ke.call(this._shortMonthsParse, d)) ? r : null : -1 !== (r = Ke.call(this._longMonthsParse, d)) ? r : null : "MMM" === t ? -1 !== (r = Ke.call(this._shortMonthsParse, d)) || -1 !== (r = Ke.call(this._longMonthsParse, d)) ? r : null : -1 !== (r = Ke.call(this._longMonthsParse, d)) || -1 !== (r = Ke.call(this._shortMonthsParse, d)) ? r : null
            }
            function gt(e, t, n) {
                var i, r, o;
                if (this._monthsParseExact)
                    return pt.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = []),
                    i = 0; i < 12; i++) {
                    if (r = L([2e3, i]),
                        n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"),
                            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")),
                        n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
                            this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")),
                        n && "MMMM" === t && this._longMonthsParse[i].test(e))
                        return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                        return i;
                    if (!n && this._monthsParse[i].test(e))
                        return i
                }
            }
            function yt(e, t) {
                var n;
                if (!e.isValid())
                    return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t))
                        t = ge(t);
                    else if (!f(t = e.localeData().monthsParse(t)))
                        return e;
                return n = Math.min(e.date(), lt(e.year(), t)),
                    e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
                    e
            }
            function Lt(e) {
                return null != e ? (yt(this, e),
                    o.updateOffset(this, !0),
                    this) : Le(this, "Month")
            }
            function Yt() {
                return lt(this.year(), this.month())
            }
            function vt(e) {
                return this._monthsParseExact ? (m(this, "_monthsRegex") || kt.call(this),
                    e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = ct),
                        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }
            function bt(e) {
                return this._monthsParseExact ? (m(this, "_monthsRegex") || kt.call(this),
                    e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = ht),
                        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }
            function kt() {
                function e(a, b) {
                    return b.length - a.length
                }
                var i, t, n = [], r = [], o = [];
                for (i = 0; i < 12; i++)
                    t = L([2e3, i]),
                        n.push(this.monthsShort(t, "")),
                        r.push(this.months(t, "")),
                        o.push(this.months(t, "")),
                        o.push(this.monthsShort(t, ""));
                for (n.sort(e),
                    r.sort(e),
                    o.sort(e),
                    i = 0; i < 12; i++)
                    n[i] = Je(n[i]),
                        r[i] = Je(r[i]);
                for (i = 0; i < 24; i++)
                    o[i] = Je(o[i]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"),
                    this._monthsShortRegex = this._monthsRegex,
                    this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"),
                    this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }
            function Dt(e) {
                return Me(e) ? 366 : 365
            }
            G("Y", 0, 0, (function () {
                var e = this.year();
                return e <= 9999 ? R(e, 4) : "+" + e
            }
            )),
                G(0, ["YY", 2], 0, (function () {
                    return this.year() % 100
                }
                )),
                G(0, ["YYYY", 4], 0, "year"),
                G(0, ["YYYYY", 5], 0, "year"),
                G(0, ["YYYYYY", 6, !0], 0, "year"),
                ue("year", "y"),
                he("year", 1),
                Re("Y", Ce),
                Re("YY", He, we),
                Re("YYYY", Ae, xe),
                Re("YYYYY", Fe, Se),
                Re("YYYYYY", Fe, Se),
                Ge(["YYYYY", "YYYYYY"], Ze),
                Ge("YYYY", (function (input, e) {
                    e[Ze] = 2 === input.length ? o.parseTwoDigitYear(input) : ge(input)
                }
                )),
                Ge("YY", (function (input, e) {
                    e[Ze] = o.parseTwoDigitYear(input)
                }
                )),
                Ge("Y", (function (input, e) {
                    e[Ze] = parseInt(input, 10)
                }
                )),
                o.parseTwoDigitYear = function (input) {
                    return ge(input) + (ge(input) > 68 ? 1900 : 2e3)
                }
                ;
            var wt = ye("FullYear", !0);
            function Tt() {
                return Me(this.year())
            }
            function xt(e, t, n, r, o, s, d) {
                var l;
                return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, o, s, d),
                    isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, o, s, d),
                    l
            }
            function St(e) {
                var t, n;
                return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
                    t = new Date(Date.UTC.apply(null, n)),
                    isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
                    t
            }
            function Ht(e, t, n) {
                var r = 7 + t - n;
                return -(7 + St(e, 0, r).getUTCDay() - t) % 7 + r - 1
            }
            function jt(e, t, n, r, o) {
                var d, l, _ = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ht(e, r, o);
                return _ <= 0 ? l = Dt(d = e - 1) + _ : _ > Dt(e) ? (d = e + 1,
                    l = _ - Dt(e)) : (d = e,
                        l = _),
                {
                    year: d,
                    dayOfYear: l
                }
            }
            function Pt(e, t, n) {
                var r, o, d = Ht(e.year(), t, n), l = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
                return l < 1 ? r = l + Ot(o = e.year() - 1, t, n) : l > Ot(e.year(), t, n) ? (r = l - Ot(e.year(), t, n),
                    o = e.year() + 1) : (o = e.year(),
                        r = l),
                {
                    week: r,
                    year: o
                }
            }
            function Ot(e, t, n) {
                var r = Ht(e, t, n)
                    , o = Ht(e + 1, t, n);
                return (Dt(e) - r + o) / 7
            }
            function At(e) {
                return Pt(e, this._week.dow, this._week.doy).week
            }
            G("w", ["ww", 2], "wo", "week"),
                G("W", ["WW", 2], "Wo", "isoWeek"),
                ue("week", "w"),
                ue("isoWeek", "W"),
                he("week", 5),
                he("isoWeek", 5),
                Re("w", He),
                Re("ww", He, we),
                Re("W", He),
                Re("WW", He, we),
                qe(["w", "ww", "W", "WW"], (function (input, e, t, n) {
                    e[n.substr(0, 1)] = ge(input)
                }
                ));
            var Ft = {
                dow: 0,
                doy: 6
            };
            function Wt() {
                return this._week.dow
            }
            function Ct() {
                return this._week.doy
            }
            function Et(input) {
                var e = this.localeData().week(this);
                return null == input ? e : this.add(7 * (input - e), "d")
            }
            function zt(input) {
                var e = Pt(this, 1, 4).week;
                return null == input ? e : this.add(7 * (input - e), "d")
            }
            function It(input, e) {
                return "string" != typeof input ? input : isNaN(input) ? "number" == typeof (input = e.weekdaysParse(input)) ? input : null : parseInt(input, 10)
            }
            function Nt(input, e) {
                return "string" == typeof input ? e.weekdaysParse(input) % 7 || 7 : isNaN(input) ? null : input
            }
            function Rt(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t))
            }
            G("d", 0, "do", "day"),
                G("dd", 0, 0, (function (e) {
                    return this.localeData().weekdaysMin(this, e)
                }
                )),
                G("ddd", 0, 0, (function (e) {
                    return this.localeData().weekdaysShort(this, e)
                }
                )),
                G("dddd", 0, 0, (function (e) {
                    return this.localeData().weekdays(this, e)
                }
                )),
                G("e", 0, 0, "weekday"),
                G("E", 0, 0, "isoWeekday"),
                ue("day", "d"),
                ue("weekday", "e"),
                ue("isoWeekday", "E"),
                he("day", 11),
                he("weekday", 11),
                he("isoWeekday", 11),
                Re("d", He),
                Re("e", He),
                Re("E", He),
                Re("dd", (function (e, t) {
                    return t.weekdaysMinRegex(e)
                }
                )),
                Re("ddd", (function (e, t) {
                    return t.weekdaysShortRegex(e)
                }
                )),
                Re("dddd", (function (e, t) {
                    return t.weekdaysRegex(e)
                }
                )),
                qe(["dd", "ddd", "dddd"], (function (input, e, t, n) {
                    var r = t._locale.weekdaysParse(input, n, t._strict);
                    null != r ? e.d = r : v(t).invalidWeekday = input
                }
                )),
                qe(["d", "e", "E"], (function (input, e, t, n) {
                    e[n] = ge(input)
                }
                ));
            var Vt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
                , Bt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
                , Jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
                , Ut = Ne
                , Gt = Ne
                , qt = Ne;
            function $t(e, t) {
                var n = l(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Rt(n, this._week.dow) : e ? n[e.day()] : n
            }
            function Kt(e) {
                return !0 === e ? Rt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }
            function Zt(e) {
                return !0 === e ? Rt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }
            function Xt(e, t, n) {
                var i, r, o, d = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                        this._shortWeekdaysParse = [],
                        this._minWeekdaysParse = [],
                        i = 0; i < 7; ++i)
                        o = L([2e3, 1]).day(i),
                            this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                            this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                            this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = Ke.call(this._weekdaysParse, d)) ? r : null : "ddd" === t ? -1 !== (r = Ke.call(this._shortWeekdaysParse, d)) ? r : null : -1 !== (r = Ke.call(this._minWeekdaysParse, d)) ? r : null : "dddd" === t ? -1 !== (r = Ke.call(this._weekdaysParse, d)) || -1 !== (r = Ke.call(this._shortWeekdaysParse, d)) || -1 !== (r = Ke.call(this._minWeekdaysParse, d)) ? r : null : "ddd" === t ? -1 !== (r = Ke.call(this._shortWeekdaysParse, d)) || -1 !== (r = Ke.call(this._weekdaysParse, d)) || -1 !== (r = Ke.call(this._minWeekdaysParse, d)) ? r : null : -1 !== (r = Ke.call(this._minWeekdaysParse, d)) || -1 !== (r = Ke.call(this._weekdaysParse, d)) || -1 !== (r = Ke.call(this._shortWeekdaysParse, d)) ? r : null
            }
            function Qt(e, t, n) {
                var i, r, o;
                if (this._weekdaysParseExact)
                    return Xt.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                    this._minWeekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._fullWeekdaysParse = []),
                    i = 0; i < 7; i++) {
                    if (r = L([2e3, 1]).day(i),
                        n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"),
                            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"),
                            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")),
                        this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
                            this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")),
                        n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                        return i;
                    if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                        return i;
                    if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                        return i;
                    if (!n && this._weekdaysParse[i].test(e))
                        return i
                }
            }
            function ea(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != input ? (input = It(input, this.localeData()),
                    this.add(input - e, "d")) : e
            }
            function ta(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == input ? e : this.add(input - e, "d")
            }
            function aa(input) {
                if (!this.isValid())
                    return null != input ? this : NaN;
                if (null != input) {
                    var e = Nt(input, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }
            function na(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || sa.call(this),
                    e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = Ut),
                        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }
            function ra(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || sa.call(this),
                    e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Gt),
                        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }
            function ia(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || sa.call(this),
                    e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qt),
                        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }
            function sa() {
                function e(a, b) {
                    return b.length - a.length
                }
                var i, t, n, r, o, d = [], l = [], _ = [], m = [];
                for (i = 0; i < 7; i++)
                    t = L([2e3, 1]).day(i),
                        n = Je(this.weekdaysMin(t, "")),
                        r = Je(this.weekdaysShort(t, "")),
                        o = Je(this.weekdays(t, "")),
                        d.push(n),
                        l.push(r),
                        _.push(o),
                        m.push(n),
                        m.push(r),
                        m.push(o);
                d.sort(e),
                    l.sort(e),
                    _.sort(e),
                    m.sort(e),
                    this._weekdaysRegex = new RegExp("^(" + m.join("|") + ")", "i"),
                    this._weekdaysShortRegex = this._weekdaysRegex,
                    this._weekdaysMinRegex = this._weekdaysRegex,
                    this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"),
                    this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"),
                    this._weekdaysMinStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
            }
            function oa() {
                return this.hours() % 12 || 12
            }
            function da() {
                return this.hours() || 24
            }
            function la(e, t) {
                G(e, 0, 0, (function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                }
                ))
            }
            function ua(e, t) {
                return t._meridiemParse
            }
            function _a(input) {
                return "p" === (input + "").toLowerCase().charAt(0)
            }
            G("H", ["HH", 2], 0, "hour"),
                G("h", ["hh", 2], 0, oa),
                G("k", ["kk", 2], 0, da),
                G("hmm", 0, 0, (function () {
                    return "" + oa.apply(this) + R(this.minutes(), 2)
                }
                )),
                G("hmmss", 0, 0, (function () {
                    return "" + oa.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2)
                }
                )),
                G("Hmm", 0, 0, (function () {
                    return "" + this.hours() + R(this.minutes(), 2)
                }
                )),
                G("Hmmss", 0, 0, (function () {
                    return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2)
                }
                )),
                la("a", !0),
                la("A", !1),
                ue("hour", "h"),
                he("hour", 13),
                Re("a", ua),
                Re("A", ua),
                Re("H", He),
                Re("h", He),
                Re("k", He),
                Re("HH", He, we),
                Re("hh", He, we),
                Re("kk", He, we),
                Re("hmm", je),
                Re("hmmss", Pe),
                Re("Hmm", je),
                Re("Hmmss", Pe),
                Ge(["H", "HH"], et),
                Ge(["k", "kk"], (function (input, e, t) {
                    var n = ge(input);
                    e[et] = 24 === n ? 0 : n
                }
                )),
                Ge(["a", "A"], (function (input, e, t) {
                    t._isPm = t._locale.isPM(input),
                        t._meridiem = input
                }
                )),
                Ge(["h", "hh"], (function (input, e, t) {
                    e[et] = ge(input),
                        v(t).bigHour = !0
                }
                )),
                Ge("hmm", (function (input, e, t) {
                    var n = input.length - 2;
                    e[et] = ge(input.substr(0, n)),
                        e[tt] = ge(input.substr(n)),
                        v(t).bigHour = !0
                }
                )),
                Ge("hmmss", (function (input, e, t) {
                    var n = input.length - 4
                        , r = input.length - 2;
                    e[et] = ge(input.substr(0, n)),
                        e[tt] = ge(input.substr(n, 2)),
                        e[at] = ge(input.substr(r)),
                        v(t).bigHour = !0
                }
                )),
                Ge("Hmm", (function (input, e, t) {
                    var n = input.length - 2;
                    e[et] = ge(input.substr(0, n)),
                        e[tt] = ge(input.substr(n))
                }
                )),
                Ge("Hmmss", (function (input, e, t) {
                    var n = input.length - 4
                        , r = input.length - 2;
                    e[et] = ge(input.substr(0, n)),
                        e[tt] = ge(input.substr(n, 2)),
                        e[at] = ge(input.substr(r))
                }
                ));
            var ma = /[ap]\.?m?\.?/i
                , ca = ye("Hours", !0);
            function ha(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            var fa, Ma = {
                calendar: I,
                longDateFormat: Q,
                invalidDate: te,
                ordinal: ne,
                dayOfMonthOrdinalParse: re,
                relativeTime: se,
                months: ut,
                monthsShort: _t,
                week: Ft,
                weekdays: Vt,
                weekdaysMin: Jt,
                weekdaysShort: Bt,
                meridiemParse: ma
            }, pa = {}, ga = {};
            function ya(e, t) {
                var i, n = Math.min(e.length, t.length);
                for (i = 0; i < n; i += 1)
                    if (e[i] !== t[i])
                        return i;
                return n
            }
            function La(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function Ya(e) {
                for (var t, n, r, o, i = 0; i < e.length;) {
                    for (t = (o = La(e[i]).split("-")).length,
                        n = (n = La(e[i + 1])) ? n.split("-") : null; t > 0;) {
                        if (r = ba(o.slice(0, t).join("-")))
                            return r;
                        if (n && n.length >= t && ya(o, n) >= t - 1)
                            break;
                        t--
                    }
                    i++
                }
                return fa
            }
            function va(e) {
                return null != e.match("^[^/\\\\]*$")
            }
            function ba(t) {
                var r = null;
                if (void 0 === pa[t] && void 0 !== e && e && e.exports && va(t))
                    try {
                        r = fa._abbr,
                            n(428)("./" + t),
                            ka(r)
                    } catch (e) {
                        pa[t] = null
                    }
                return pa[t]
            }
            function ka(e, t) {
                var data;
                return e && ((data = h(t) ? Ta(e) : Da(e, t)) ? fa = data : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
                    fa._abbr
            }
            function Da(e, t) {
                if (null !== t) {
                    var n, r = Ma;
                    if (t.abbr = e,
                        null != pa[e])
                        F("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                            r = pa[e]._config;
                    else if (null != t.parentLocale)
                        if (null != pa[t.parentLocale])
                            r = pa[t.parentLocale]._config;
                        else {
                            if (null == (n = ba(t.parentLocale)))
                                return ga[t.parentLocale] || (ga[t.parentLocale] = []),
                                    ga[t.parentLocale].push({
                                        name: e,
                                        config: t
                                    }),
                                    null;
                            r = n._config
                        }
                    return pa[e] = new z(E(r, t)),
                        ga[e] && ga[e].forEach((function (e) {
                            Da(e.name, e.config)
                        }
                        )),
                        ka(e),
                        pa[e]
                }
                return delete pa[e],
                    null
            }
            function wa(e, t) {
                if (null != t) {
                    var n, r, o = Ma;
                    null != pa[e] && null != pa[e].parentLocale ? pa[e].set(E(pa[e]._config, t)) : (null != (r = ba(e)) && (o = r._config),
                        t = E(o, t),
                        null == r && (t.abbr = e),
                        (n = new z(t)).parentLocale = pa[e],
                        pa[e] = n),
                        ka(e)
                } else
                    null != pa[e] && (null != pa[e].parentLocale ? (pa[e] = pa[e].parentLocale,
                        e === ka() && ka(e)) : null != pa[e] && delete pa[e]);
                return pa[e]
            }
            function Ta(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                    !e)
                    return fa;
                if (!l(e)) {
                    if (t = ba(e))
                        return t;
                    e = [e]
                }
                return Ya(e)
            }
            function xa() {
                return O(pa)
            }
            function Sa(e) {
                var t, a = e._a;
                return a && -2 === v(e).overflow && (t = a[Xe] < 0 || a[Xe] > 11 ? Xe : a[Qe] < 1 || a[Qe] > lt(a[Ze], a[Xe]) ? Qe : a[et] < 0 || a[et] > 24 || 24 === a[et] && (0 !== a[tt] || 0 !== a[at] || 0 !== a[nt]) ? et : a[tt] < 0 || a[tt] > 59 ? tt : a[at] < 0 || a[at] > 59 ? at : a[nt] < 0 || a[nt] > 999 ? nt : -1,
                    v(e)._overflowDayOfYear && (t < Ze || t > Qe) && (t = Qe),
                    v(e)._overflowWeeks && -1 === t && (t = it),
                    v(e)._overflowWeekday && -1 === t && (t = st),
                    v(e).overflow = t),
                    e
            }
            var Ha = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                , ja = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
                , Pa = /Z|[+-]\d\d(?::?\d\d)?/
                , Oa = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
                , Aa = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
                , Fa = /^\/?Date\((-?\d+)/i
                , Wa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
                , Ca = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            function Ea(e) {
                var i, t, n, r, o, d, l = e._i, _ = Ha.exec(l) || ja.exec(l), m = Oa.length, c = Aa.length;
                if (_) {
                    for (v(e).iso = !0,
                        i = 0,
                        t = m; i < t; i++)
                        if (Oa[i][1].exec(_[1])) {
                            r = Oa[i][0],
                                n = !1 !== Oa[i][2];
                            break
                        }
                    if (null == r)
                        return void (e._isValid = !1);
                    if (_[3]) {
                        for (i = 0,
                            t = c; i < t; i++)
                            if (Aa[i][1].exec(_[3])) {
                                o = (_[2] || " ") + Aa[i][0];
                                break
                            }
                        if (null == o)
                            return void (e._isValid = !1)
                    }
                    if (!n && null != o)
                        return void (e._isValid = !1);
                    if (_[4]) {
                        if (!Pa.exec(_[4]))
                            return void (e._isValid = !1);
                        d = "Z"
                    }
                    e._f = r + (o || "") + (d || ""),
                        Ka(e)
                } else
                    e._isValid = !1
            }
            function za(e, t, n, r, o, d) {
                var l = [Ia(e), _t.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10)];
                return d && l.push(parseInt(d, 10)),
                    l
            }
            function Ia(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }
            function Na(s) {
                return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }
            function Ra(e, t, n) {
                return !e || Bt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (v(n).weekdayMismatch = !0,
                    n._isValid = !1,
                    !1)
            }
            function Va(e, t, n) {
                if (e)
                    return Ca[e];
                if (t)
                    return 0;
                var r = parseInt(n, 10)
                    , o = r % 100;
                return (r - o) / 100 * 60 + o
            }
            function Ba(e) {
                var t, n = Wa.exec(Na(e._i));
                if (n) {
                    if (t = za(n[4], n[3], n[2], n[5], n[6], n[7]),
                        !Ra(n[1], t, e))
                        return;
                    e._a = t,
                        e._tzm = Va(n[8], n[9], n[10]),
                        e._d = St.apply(null, e._a),
                        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                        v(e).rfc2822 = !0
                } else
                    e._isValid = !1
            }
            function Ja(e) {
                var t = Fa.exec(e._i);
                null === t ? (Ea(e),
                    !1 === e._isValid && (delete e._isValid,
                        Ba(e),
                        !1 === e._isValid && (delete e._isValid,
                            e._strict ? e._isValid = !1 : o.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }
            function Ua(a, b, e) {
                return null != a ? a : null != b ? b : e
            }
            function Ga(e) {
                var t = new Date(o.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }
            function qa(e) {
                var i, t, n, r, o, input = [];
                if (!e._d) {
                    for (n = Ga(e),
                        e._w && null == e._a[Qe] && null == e._a[Xe] && $a(e),
                        null != e._dayOfYear && (o = Ua(e._a[Ze], n[Ze]),
                            (e._dayOfYear > Dt(o) || 0 === e._dayOfYear) && (v(e)._overflowDayOfYear = !0),
                            t = St(o, 0, e._dayOfYear),
                            e._a[Xe] = t.getUTCMonth(),
                            e._a[Qe] = t.getUTCDate()),
                        i = 0; i < 3 && null == e._a[i]; ++i)
                        e._a[i] = input[i] = n[i];
                    for (; i < 7; i++)
                        e._a[i] = input[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
                    24 === e._a[et] && 0 === e._a[tt] && 0 === e._a[at] && 0 === e._a[nt] && (e._nextDay = !0,
                        e._a[et] = 0),
                        e._d = (e._useUTC ? St : xt).apply(null, input),
                        r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
                        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                        e._nextDay && (e._a[et] = 24),
                        e._w && void 0 !== e._w.d && e._w.d !== r && (v(e).weekdayMismatch = !0)
                }
            }
            function $a(e) {
                var t, n, r, o, d, l, _, m, c;
                null != (t = e._w).GG || null != t.W || null != t.E ? (d = 1,
                    l = 4,
                    n = Ua(t.GG, e._a[Ze], Pt(rn(), 1, 4).year),
                    r = Ua(t.W, 1),
                    ((o = Ua(t.E, 1)) < 1 || o > 7) && (m = !0)) : (d = e._locale._week.dow,
                        l = e._locale._week.doy,
                        c = Pt(rn(), d, l),
                        n = Ua(t.gg, e._a[Ze], c.year),
                        r = Ua(t.w, c.week),
                        null != t.d ? ((o = t.d) < 0 || o > 6) && (m = !0) : null != t.e ? (o = t.e + d,
                            (t.e < 0 || t.e > 6) && (m = !0)) : o = d),
                    r < 1 || r > Ot(n, d, l) ? v(e)._overflowWeeks = !0 : null != m ? v(e)._overflowWeekday = !0 : (_ = jt(n, r, o, d, l),
                        e._a[Ze] = _.year,
                        e._dayOfYear = _.dayOfYear)
            }
            function Ka(e) {
                if (e._f !== o.ISO_8601)
                    if (e._f !== o.RFC_2822) {
                        e._a = [],
                            v(e).empty = !0;
                        var i, t, n, r, d, l, _, m = "" + e._i, c = m.length, h = 0;
                        for (_ = (n = X(e._f, e._locale).match(V) || []).length,
                            i = 0; i < _; i++)
                            r = n[i],
                                (t = (m.match(Ve(r, e)) || [])[0]) && ((d = m.substr(0, m.indexOf(t))).length > 0 && v(e).unusedInput.push(d),
                                    m = m.slice(m.indexOf(t) + t.length),
                                    h += t.length),
                                U[r] ? (t ? v(e).empty = !1 : v(e).unusedTokens.push(r),
                                    $e(r, t, e)) : e._strict && !t && v(e).unusedTokens.push(r);
                        v(e).charsLeftOver = c - h,
                            m.length > 0 && v(e).unusedInput.push(m),
                            e._a[et] <= 12 && !0 === v(e).bigHour && e._a[et] > 0 && (v(e).bigHour = void 0),
                            v(e).parsedDateParts = e._a.slice(0),
                            v(e).meridiem = e._meridiem,
                            e._a[et] = Za(e._locale, e._a[et], e._meridiem),
                            null !== (l = v(e).era) && (e._a[Ze] = e._locale.erasConvertYear(l, e._a[Ze])),
                            qa(e),
                            Sa(e)
                    } else
                        Ba(e);
                else
                    Ea(e)
            }
            function Za(e, t, n) {
                var r;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                    r || 12 !== t || (t = 0),
                    t) : t
            }
            function Xa(e) {
                var t, n, r, i, o, d, l = !1, _ = e._f.length;
                if (0 === _)
                    return v(e).invalidFormat = !0,
                        void (e._d = new Date(NaN));
                for (i = 0; i < _; i++)
                    o = 0,
                        d = !1,
                        t = x({}, e),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                        t._f = e._f[i],
                        Ka(t),
                        k(t) && (d = !0),
                        o += v(t).charsLeftOver,
                        o += 10 * v(t).unusedTokens.length,
                        v(t).score = o,
                        l ? o < r && (r = o,
                            n = t) : (null == r || o < r || d) && (r = o,
                                n = t,
                                d && (l = !0));
                y(e, n || t)
            }
            function Qa(e) {
                if (!e._d) {
                    var i = me(e._i)
                        , t = void 0 === i.day ? i.date : i.day;
                    e._a = map([i.year, i.month, t, i.hour, i.minute, i.second, i.millisecond], (function (e) {
                        return e && parseInt(e, 10)
                    }
                    )),
                        qa(e)
                }
            }
            function en(e) {
                var t = new S(Sa(tn(e)));
                return t._nextDay && (t.add(1, "d"),
                    t._nextDay = void 0),
                    t
            }
            function tn(e) {
                var input = e._i
                    , t = e._f;
                return e._locale = e._locale || Ta(e._l),
                    null === input || void 0 === t && "" === input ? D({
                        nullInput: !0
                    }) : ("string" == typeof input && (e._i = input = e._locale.preparse(input)),
                        H(input) ? new S(Sa(input)) : (M(input) ? e._d = input : l(t) ? Xa(e) : t ? Ka(e) : an(e),
                            k(e) || (e._d = null),
                            e))
            }
            function an(e) {
                var input = e._i;
                h(input) ? e._d = new Date(o.now()) : M(input) ? e._d = new Date(input.valueOf()) : "string" == typeof input ? Ja(e) : l(input) ? (e._a = map(input.slice(0), (function (e) {
                    return parseInt(e, 10)
                }
                )),
                    qa(e)) : _(input) ? Qa(e) : f(input) ? e._d = new Date(input) : o.createFromInputFallback(e)
            }
            function nn(input, e, t, n, r) {
                var o = {};
                return !0 !== e && !1 !== e || (n = e,
                    e = void 0),
                    !0 !== t && !1 !== t || (n = t,
                        t = void 0),
                    (_(input) && c(input) || l(input) && 0 === input.length) && (input = void 0),
                    o._isAMomentObject = !0,
                    o._useUTC = o._isUTC = r,
                    o._l = t,
                    o._i = input,
                    o._f = e,
                    o._strict = n,
                    en(o)
            }
            function rn(input, e, t, n) {
                return nn(input, e, t, n, !1)
            }
            o.createFromInputFallback = P("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }
            )),
                o.ISO_8601 = function () { }
                ,
                o.RFC_2822 = function () { }
                ;
            var sn = P("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                var e = rn.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : D()
            }
            ))
                , on = P("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function () {
                    var e = rn.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : D()
                }
                ));
            function dn(e, t) {
                var n, i;
                if (1 === t.length && l(t[0]) && (t = t[0]),
                    !t.length)
                    return rn();
                for (n = t[0],
                    i = 1; i < t.length; ++i)
                    t[i].isValid() && !t[i][e](n) || (n = t[i]);
                return n
            }
            function ln() {
                return dn("isBefore", [].slice.call(arguments, 0))
            }
            function un() {
                return dn("isAfter", [].slice.call(arguments, 0))
            }
            var _n = function () {
                return Date.now ? Date.now() : +new Date
            }
                , mn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            function cn(e) {
                var t, i, n = !1, r = mn.length;
                for (t in e)
                    if (m(e, t) && (-1 === Ke.call(mn, t) || null != e[t] && isNaN(e[t])))
                        return !1;
                for (i = 0; i < r; ++i)
                    if (e[mn[i]]) {
                        if (n)
                            return !1;
                        parseFloat(e[mn[i]]) !== ge(e[mn[i]]) && (n = !0)
                    }
                return !0
            }
            function hn() {
                return this._isValid
            }
            function fn() {
                return En(NaN)
            }
            function Mn(e) {
                var t = me(e)
                    , n = t.year || 0
                    , r = t.quarter || 0
                    , o = t.month || 0
                    , d = t.week || t.isoWeek || 0
                    , l = t.day || 0
                    , _ = t.hour || 0
                    , m = t.minute || 0
                    , c = t.second || 0
                    , h = t.millisecond || 0;
                this._isValid = cn(t),
                    this._milliseconds = +h + 1e3 * c + 6e4 * m + 1e3 * _ * 60 * 60,
                    this._days = +l + 7 * d,
                    this._months = +o + 3 * r + 12 * n,
                    this._data = {},
                    this._locale = Ta(),
                    this._bubble()
            }
            function pn(e) {
                return e instanceof Mn
            }
            function gn(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }
            function yn(e, t, n) {
                var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), d = 0;
                for (i = 0; i < r; i++)
                    (n && e[i] !== t[i] || !n && ge(e[i]) !== ge(t[i])) && d++;
                return d + o
            }
            function Ln(e, t) {
                G(e, 0, 0, (function () {
                    var e = this.utcOffset()
                        , n = "+";
                    return e < 0 && (e = -e,
                        n = "-"),
                        n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
                }
                ))
            }
            Ln("Z", ":"),
                Ln("ZZ", ""),
                Re("Z", ze),
                Re("ZZ", ze),
                Ge(["Z", "ZZ"], (function (input, e, t) {
                    t._useUTC = !0,
                        t._tzm = vn(ze, input)
                }
                ));
            var Yn = /([\+\-]|\d\d)/gi;
            function vn(e, t) {
                var n, r, o = (t || "").match(e);
                return null === o ? null : 0 === (r = 60 * (n = ((o[o.length - 1] || []) + "").match(Yn) || ["-", 0, 0])[1] + ge(n[2])) ? 0 : "+" === n[0] ? r : -r
            }
            function bn(input, e) {
                var t, n;
                return e._isUTC ? (t = e.clone(),
                    n = (H(input) || M(input) ? input.valueOf() : rn(input).valueOf()) - t.valueOf(),
                    t._d.setTime(t._d.valueOf() + n),
                    o.updateOffset(t, !1),
                    t) : rn(input).local()
            }
            function kn(e) {
                return -Math.round(e._d.getTimezoneOffset())
            }
            function Dn(input, e, t) {
                var n, r = this._offset || 0;
                if (!this.isValid())
                    return null != input ? this : NaN;
                if (null != input) {
                    if ("string" == typeof input) {
                        if (null === (input = vn(ze, input)))
                            return this
                    } else
                        Math.abs(input) < 16 && !t && (input *= 60);
                    return !this._isUTC && e && (n = kn(this)),
                        this._offset = input,
                        this._isUTC = !0,
                        null != n && this.add(n, "m"),
                        r !== input && (!e || this._changeInProgress ? Vn(this, En(input - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                            o.updateOffset(this, !0),
                            this._changeInProgress = null)),
                        this
                }
                return this._isUTC ? r : kn(this)
            }
            function wn(input, e) {
                return null != input ? ("string" != typeof input && (input = -input),
                    this.utcOffset(input, e),
                    this) : -this.utcOffset()
            }
            function Tn(e) {
                return this.utcOffset(0, e)
            }
            function xn(e) {
                return this._isUTC && (this.utcOffset(0, e),
                    this._isUTC = !1,
                    e && this.subtract(kn(this), "m")),
                    this
            }
            function Sn() {
                if (null != this._tzm)
                    this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = vn(Ee, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }
            function Hn(input) {
                return !!this.isValid() && (input = input ? rn(input).utcOffset() : 0,
                    (this.utcOffset() - input) % 60 == 0)
            }
            function jn() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function Pn() {
                if (!h(this._isDSTShifted))
                    return this._isDSTShifted;
                var e, t = {};
                return x(t, this),
                    (t = tn(t))._a ? (e = t._isUTC ? L(t._a) : rn(t._a),
                        this._isDSTShifted = this.isValid() && yn(t._a, e.toArray()) > 0) : this._isDSTShifted = !1,
                    this._isDSTShifted
            }
            function On() {
                return !!this.isValid() && !this._isUTC
            }
            function An() {
                return !!this.isValid() && this._isUTC
            }
            function Fn() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            o.updateOffset = function () { }
                ;
            var Wn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
                , Cn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function En(input, e) {
                var t, n, r, o = input, d = null;
                return pn(input) ? o = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                } : f(input) || !isNaN(+input) ? (o = {},
                    e ? o[e] = +input : o.milliseconds = +input) : (d = Wn.exec(input)) ? (t = "-" === d[1] ? -1 : 1,
                        o = {
                            y: 0,
                            d: ge(d[Qe]) * t,
                            h: ge(d[et]) * t,
                            m: ge(d[tt]) * t,
                            s: ge(d[at]) * t,
                            ms: ge(gn(1e3 * d[nt])) * t
                        }) : (d = Cn.exec(input)) ? (t = "-" === d[1] ? -1 : 1,
                            o = {
                                y: zn(d[2], t),
                                M: zn(d[3], t),
                                w: zn(d[4], t),
                                d: zn(d[5], t),
                                h: zn(d[6], t),
                                m: zn(d[7], t),
                                s: zn(d[8], t)
                            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Nn(rn(o.from), rn(o.to)),
                                (o = {}).ms = r.milliseconds,
                                o.M = r.months),
                    n = new Mn(o),
                    pn(input) && m(input, "_locale") && (n._locale = input._locale),
                    pn(input) && m(input, "_isValid") && (n._isValid = input._isValid),
                    n
            }
            function zn(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }
            function In(base, e) {
                var t = {};
                return t.months = e.month() - base.month() + 12 * (e.year() - base.year()),
                    base.clone().add(t.months, "M").isAfter(e) && --t.months,
                    t.milliseconds = +e - +base.clone().add(t.months, "M"),
                    t
            }
            function Nn(base, e) {
                var t;
                return base.isValid() && e.isValid() ? (e = bn(e, base),
                    base.isBefore(e) ? t = In(base, e) : ((t = In(e, base)).milliseconds = -t.milliseconds,
                        t.months = -t.months),
                    t) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function Rn(e, t) {
                return function (n, r) {
                    var o;
                    return null === r || isNaN(+r) || (F(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                        o = n,
                        n = r,
                        r = o),
                        Vn(this, En(n, r), e),
                        this
                }
            }
            function Vn(e, t, n, r) {
                var d = t._milliseconds
                    , l = gn(t._days)
                    , _ = gn(t._months);
                e.isValid() && (r = null == r || r,
                    _ && yt(e, Le(e, "Month") + _ * n),
                    l && Ye(e, "Date", Le(e, "Date") + l * n),
                    d && e._d.setTime(e._d.valueOf() + d * n),
                    r && o.updateOffset(e, l || _))
            }
            En.fn = Mn.prototype,
                En.invalid = fn;
            var Bn = Rn(1, "add")
                , Jn = Rn(-1, "subtract");
            function Un(input) {
                return "string" == typeof input || input instanceof String
            }
            function Gn(input) {
                return H(input) || M(input) || Un(input) || f(input) || $n(input) || qn(input) || null == input
            }
            function qn(input) {
                var i, e, t = _(input) && !c(input), n = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], o = r.length;
                for (i = 0; i < o; i += 1)
                    e = r[i],
                        n = n || m(input, e);
                return t && n
            }
            function $n(input) {
                var e = l(input)
                    , t = !1;
                return e && (t = 0 === input.filter((function (e) {
                    return !f(e) && Un(input)
                }
                )).length),
                    e && t
            }
            function Kn(input) {
                var i, e, t = _(input) && !c(input), n = !1, r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                for (i = 0; i < r.length; i += 1)
                    e = r[i],
                        n = n || m(input, e);
                return t && n
            }
            function Zn(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }
            function Xn(time, e) {
                1 === arguments.length && (arguments[0] ? Gn(arguments[0]) ? (time = arguments[0],
                    e = void 0) : Kn(arguments[0]) && (e = arguments[0],
                        time = void 0) : (time = void 0,
                            e = void 0));
                var t = time || rn()
                    , n = bn(t, this).startOf("day")
                    , r = o.calendarFormat(this, n) || "sameElse"
                    , output = e && (W(e[r]) ? e[r].call(this, t) : e[r]);
                return this.format(output || this.localeData().calendar(r, this, rn(t)))
            }
            function Qn() {
                return new S(this)
            }
            function er(input, e) {
                var t = H(input) ? input : rn(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = _e(e) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf())
            }
            function ar(input, e) {
                var t = H(input) ? input : rn(input);
                return !(!this.isValid() || !t.isValid()) && ("millisecond" === (e = _e(e) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf())
            }
            function nr(e, t, n, r) {
                var o = H(e) ? e : rn(e)
                    , d = H(t) ? t : rn(t);
                return !!(this.isValid() && o.isValid() && d.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(o, n) : !this.isBefore(o, n)) && (")" === r[1] ? this.isBefore(d, n) : !this.isAfter(d, n))
            }
            function rr(input, e) {
                var t, n = H(input) ? input : rn(input);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = _e(e) || "millisecond") ? this.valueOf() === n.valueOf() : (t = n.valueOf(),
                    this.clone().startOf(e).valueOf() <= t && t <= this.clone().endOf(e).valueOf()))
            }
            function ir(input, e) {
                return this.isSame(input, e) || this.isAfter(input, e)
            }
            function sr(input, e) {
                return this.isSame(input, e) || this.isBefore(input, e)
            }
            function or(input, e, t) {
                var n, r, output;
                if (!this.isValid())
                    return NaN;
                if (!(n = bn(input, this)).isValid())
                    return NaN;
                switch (r = 6e4 * (n.utcOffset() - this.utcOffset()),
                e = _e(e)) {
                    case "year":
                        output = dr(this, n) / 12;
                        break;
                    case "month":
                        output = dr(this, n);
                        break;
                    case "quarter":
                        output = dr(this, n) / 3;
                        break;
                    case "second":
                        output = (this - n) / 1e3;
                        break;
                    case "minute":
                        output = (this - n) / 6e4;
                        break;
                    case "hour":
                        output = (this - n) / 36e5;
                        break;
                    case "day":
                        output = (this - n - r) / 864e5;
                        break;
                    case "week":
                        output = (this - n - r) / 6048e5;
                        break;
                    default:
                        output = this - n
                }
                return t ? output : pe(output)
            }
            function dr(a, b) {
                if (a.date() < b.date())
                    return -dr(b, a);
                var e = 12 * (b.year() - a.year()) + (b.month() - a.month())
                    , t = a.clone().add(e, "months");
                return -(e + (b - t < 0 ? (b - t) / (t - a.clone().add(e - 1, "months")) : (b - t) / (a.clone().add(e + 1, "months") - t))) || 0
            }
            function lr() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function ur(e) {
                if (!this.isValid())
                    return null;
                var t = !0 !== e
                    , n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? Z(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : W(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Z(n, "Z")) : Z(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }
            function _r() {
                if (!this.isValid())
                    return "moment.invalid(/* " + this._i + " */)";
                var e, t, n, r, o = "moment", d = "";
                return this.isLocal() || (o = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                    d = "Z"),
                    e = "[" + o + '("]',
                    t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    n = "-MM-DD[T]HH:mm:ss.SSS",
                    r = d + '[")]',
                    this.format(e + t + n + r)
            }
            function mr(e) {
                e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
                var output = Z(this, e);
                return this.localeData().postformat(output)
            }
            function cr(time, e) {
                return this.isValid() && (H(time) && time.isValid() || rn(time).isValid()) ? En({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function fr(e) {
                return this.from(rn(), e)
            }
            function Mr(time, e) {
                return this.isValid() && (H(time) && time.isValid() || rn(time).isValid()) ? En({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }
            function pr(e) {
                return this.to(rn(), e)
            }
            function gr(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = Ta(e)) && (this._locale = t),
                    this)
            }
            o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
                o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var yr = P("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            }
            ));
            function Lr() {
                return this._locale
            }
            var Yr = 1e3
                , vr = 60 * Yr
                , kr = 60 * vr
                , Dr = 3506328 * kr;
            function wr(e, t) {
                return (e % t + t) % t
            }
            function Tr(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Dr : new Date(e, t, n).valueOf()
            }
            function xr(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Dr : Date.UTC(e, t, n)
            }
            function Sr(e) {
                var time, t;
                if (void 0 === (e = _e(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? xr : Tr,
                e) {
                    case "year":
                        time = t(this.year(), 0, 1);
                        break;
                    case "quarter":
                        time = t(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        time = t(this.year(), this.month(), 1);
                        break;
                    case "week":
                        time = t(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        time = t(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        time = this._d.valueOf(),
                            time -= wr(time + (this._isUTC ? 0 : this.utcOffset() * vr), kr);
                        break;
                    case "minute":
                        time = this._d.valueOf(),
                            time -= wr(time, vr);
                        break;
                    case "second":
                        time = this._d.valueOf(),
                            time -= wr(time, Yr)
                }
                return this._d.setTime(time),
                    o.updateOffset(this, !0),
                    this
            }
            function Hr(e) {
                var time, t;
                if (void 0 === (e = _e(e)) || "millisecond" === e || !this.isValid())
                    return this;
                switch (t = this._isUTC ? xr : Tr,
                e) {
                    case "year":
                        time = t(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        time = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        time = t(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        time = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        time = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        time = t(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        time = this._d.valueOf(),
                            time += kr - wr(time + (this._isUTC ? 0 : this.utcOffset() * vr), kr) - 1;
                        break;
                    case "minute":
                        time = this._d.valueOf(),
                            time += vr - wr(time, vr) - 1;
                        break;
                    case "second":
                        time = this._d.valueOf(),
                            time += Yr - wr(time, Yr) - 1
                }
                return this._d.setTime(time),
                    o.updateOffset(this, !0),
                    this
            }
            function jr() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function Pr() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function Or() {
                return new Date(this.valueOf())
            }
            function Ar() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            function Fr() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            function Wr() {
                return this.isValid() ? this.toISOString() : null
            }
            function Cr() {
                return k(this)
            }
            function Er() {
                return y({}, v(this))
            }
            function zr() {
                return v(this).overflow
            }
            function Ir() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Nr(e, t) {
                var i, n, r, d = this._eras || Ta("en")._eras;
                for (i = 0,
                    n = d.length; i < n; ++i)
                    switch ("string" == typeof d[i].since && (r = o(d[i].since).startOf("day"),
                        d[i].since = r.valueOf()),
                    typeof d[i].until) {
                        case "undefined":
                            d[i].until = 1 / 0;
                            break;
                        case "string":
                            r = o(d[i].until).startOf("day").valueOf(),
                                d[i].until = r.valueOf()
                    }
                return d
            }
            function Rr(e, t, n) {
                var i, r, o, abbr, d, l = this.eras();
                for (e = e.toUpperCase(),
                    i = 0,
                    r = l.length; i < r; ++i)
                    if (o = l[i].name.toUpperCase(),
                        abbr = l[i].abbr.toUpperCase(),
                        d = l[i].narrow.toUpperCase(),
                        n)
                        switch (t) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (abbr === e)
                                    return l[i];
                                break;
                            case "NNNN":
                                if (o === e)
                                    return l[i];
                                break;
                            case "NNNNN":
                                if (d === e)
                                    return l[i]
                        }
                    else if ([o, abbr, d].indexOf(e) >= 0)
                        return l[i]
            }
            function Vr(e, t) {
                var n = e.since <= e.until ? 1 : -1;
                return void 0 === t ? o(e.since).year() : o(e.since).year() + (t - e.offset) * n
            }
            function Br() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                    e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                        n[i].since <= t && t <= n[i].until)
                        return n[i].name;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].name
                }
                return ""
            }
            function Jr() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                    e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                        n[i].since <= t && t <= n[i].until)
                        return n[i].narrow;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].narrow
                }
                return ""
            }
            function Ur() {
                var i, e, t, n = this.localeData().eras();
                for (i = 0,
                    e = n.length; i < e; ++i) {
                    if (t = this.clone().startOf("day").valueOf(),
                        n[i].since <= t && t <= n[i].until)
                        return n[i].abbr;
                    if (n[i].until <= t && t <= n[i].since)
                        return n[i].abbr
                }
                return ""
            }
            function Gr() {
                var i, e, t, n, r = this.localeData().eras();
                for (i = 0,
                    e = r.length; i < e; ++i)
                    if (t = r[i].since <= r[i].until ? 1 : -1,
                        n = this.clone().startOf("day").valueOf(),
                        r[i].since <= n && n <= r[i].until || r[i].until <= n && n <= r[i].since)
                        return (this.year() - o(r[i].since).year()) * t + r[i].offset;
                return this.year()
            }
            function qr(e) {
                return m(this, "_erasNameRegex") || ti.call(this),
                    e ? this._erasNameRegex : this._erasRegex
            }
            function $r(e) {
                return m(this, "_erasAbbrRegex") || ti.call(this),
                    e ? this._erasAbbrRegex : this._erasRegex
            }
            function Kr(e) {
                return m(this, "_erasNarrowRegex") || ti.call(this),
                    e ? this._erasNarrowRegex : this._erasRegex
            }
            function Zr(e, t) {
                return t.erasAbbrRegex(e)
            }
            function Xr(e, t) {
                return t.erasNameRegex(e)
            }
            function Qr(e, t) {
                return t.erasNarrowRegex(e)
            }
            function ei(e, t) {
                return t._eraYearOrdinalRegex || We
            }
            function ti() {
                var i, e, t = [], n = [], r = [], o = [], d = this.eras();
                for (i = 0,
                    e = d.length; i < e; ++i)
                    n.push(Je(d[i].name)),
                        t.push(Je(d[i].abbr)),
                        r.push(Je(d[i].narrow)),
                        o.push(Je(d[i].name)),
                        o.push(Je(d[i].abbr)),
                        o.push(Je(d[i].narrow));
                this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"),
                    this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"),
                    this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"),
                    this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i")
            }
            function ai(e, t) {
                G(0, [e, e.length], 0, t)
            }
            function ni(input) {
                return ui.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function ri(input) {
                return ui.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function ii() {
                return Ot(this.year(), 1, 4)
            }
            function si() {
                return Ot(this.isoWeekYear(), 1, 4)
            }
            function oi() {
                var e = this.localeData()._week;
                return Ot(this.year(), e.dow, e.doy)
            }
            function di() {
                var e = this.localeData()._week;
                return Ot(this.weekYear(), e.dow, e.doy)
            }
            function ui(input, e, t, n, r) {
                var o;
                return null == input ? Pt(this, n, r).year : (e > (o = Ot(input, n, r)) && (e = o),
                    _i.call(this, input, e, t, n, r))
            }
            function _i(e, t, n, r, o) {
                var d = jt(e, t, n, r, o)
                    , l = St(d.year, 0, d.dayOfYear);
                return this.year(l.getUTCFullYear()),
                    this.month(l.getUTCMonth()),
                    this.date(l.getUTCDate()),
                    this
            }
            function mi(input) {
                return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
            }
            G("N", 0, 0, "eraAbbr"),
                G("NN", 0, 0, "eraAbbr"),
                G("NNN", 0, 0, "eraAbbr"),
                G("NNNN", 0, 0, "eraName"),
                G("NNNNN", 0, 0, "eraNarrow"),
                G("y", ["y", 1], "yo", "eraYear"),
                G("y", ["yy", 2], 0, "eraYear"),
                G("y", ["yyy", 3], 0, "eraYear"),
                G("y", ["yyyy", 4], 0, "eraYear"),
                Re("N", Zr),
                Re("NN", Zr),
                Re("NNN", Zr),
                Re("NNNN", Xr),
                Re("NNNNN", Qr),
                Ge(["N", "NN", "NNN", "NNNN", "NNNNN"], (function (input, e, t, n) {
                    var r = t._locale.erasParse(input, n, t._strict);
                    r ? v(t).era = r : v(t).invalidEra = input
                }
                )),
                Re("y", We),
                Re("yy", We),
                Re("yyy", We),
                Re("yyyy", We),
                Re("yo", ei),
                Ge(["y", "yy", "yyy", "yyyy"], Ze),
                Ge(["yo"], (function (input, e, t, n) {
                    var r;
                    t._locale._eraYearOrdinalRegex && (r = input.match(t._locale._eraYearOrdinalRegex)),
                        t._locale.eraYearOrdinalParse ? e[Ze] = t._locale.eraYearOrdinalParse(input, r) : e[Ze] = parseInt(input, 10)
                }
                )),
                G(0, ["gg", 2], 0, (function () {
                    return this.weekYear() % 100
                }
                )),
                G(0, ["GG", 2], 0, (function () {
                    return this.isoWeekYear() % 100
                }
                )),
                ai("gggg", "weekYear"),
                ai("ggggg", "weekYear"),
                ai("GGGG", "isoWeekYear"),
                ai("GGGGG", "isoWeekYear"),
                ue("weekYear", "gg"),
                ue("isoWeekYear", "GG"),
                he("weekYear", 1),
                he("isoWeekYear", 1),
                Re("G", Ce),
                Re("g", Ce),
                Re("GG", He, we),
                Re("gg", He, we),
                Re("GGGG", Ae, xe),
                Re("gggg", Ae, xe),
                Re("GGGGG", Fe, Se),
                Re("ggggg", Fe, Se),
                qe(["gggg", "ggggg", "GGGG", "GGGGG"], (function (input, e, t, n) {
                    e[n.substr(0, 2)] = ge(input)
                }
                )),
                qe(["gg", "GG"], (function (input, e, t, n) {
                    e[n] = o.parseTwoDigitYear(input)
                }
                )),
                G("Q", 0, "Qo", "quarter"),
                ue("quarter", "Q"),
                he("quarter", 7),
                Re("Q", De),
                Ge("Q", (function (input, e) {
                    e[Xe] = 3 * (ge(input) - 1)
                }
                )),
                G("D", ["DD", 2], "Do", "date"),
                ue("date", "D"),
                he("date", 9),
                Re("D", He),
                Re("DD", He, we),
                Re("Do", (function (e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }
                )),
                Ge(["D", "DD"], Qe),
                Ge("Do", (function (input, e) {
                    e[Qe] = ge(input.match(He)[0])
                }
                ));
            var ci = ye("Date", !0);
            function hi(input) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == input ? e : this.add(input - e, "d")
            }
            G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                ue("dayOfYear", "DDD"),
                he("dayOfYear", 4),
                Re("DDD", Oe),
                Re("DDDD", Te),
                Ge(["DDD", "DDDD"], (function (input, e, t) {
                    t._dayOfYear = ge(input)
                }
                )),
                G("m", ["mm", 2], 0, "minute"),
                ue("minute", "m"),
                he("minute", 14),
                Re("m", He),
                Re("mm", He, we),
                Ge(["m", "mm"], tt);
            var fi = ye("Minutes", !1);
            G("s", ["ss", 2], 0, "second"),
                ue("second", "s"),
                he("second", 15),
                Re("s", He),
                Re("ss", He, we),
                Ge(["s", "ss"], at);
            var Mi, pi, gi = ye("Seconds", !1);
            for (G("S", 0, 0, (function () {
                return ~~(this.millisecond() / 100)
            }
            )),
                G(0, ["SS", 2], 0, (function () {
                    return ~~(this.millisecond() / 10)
                }
                )),
                G(0, ["SSS", 3], 0, "millisecond"),
                G(0, ["SSSS", 4], 0, (function () {
                    return 10 * this.millisecond()
                }
                )),
                G(0, ["SSSSS", 5], 0, (function () {
                    return 100 * this.millisecond()
                }
                )),
                G(0, ["SSSSSS", 6], 0, (function () {
                    return 1e3 * this.millisecond()
                }
                )),
                G(0, ["SSSSSSS", 7], 0, (function () {
                    return 1e4 * this.millisecond()
                }
                )),
                G(0, ["SSSSSSSS", 8], 0, (function () {
                    return 1e5 * this.millisecond()
                }
                )),
                G(0, ["SSSSSSSSS", 9], 0, (function () {
                    return 1e6 * this.millisecond()
                }
                )),
                ue("millisecond", "ms"),
                he("millisecond", 16),
                Re("S", Oe, De),
                Re("SS", Oe, we),
                Re("SSS", Oe, Te),
                Mi = "SSSS"; Mi.length <= 9; Mi += "S")
                Re(Mi, We);
            function yi(input, e) {
                e[nt] = ge(1e3 * ("0." + input))
            }
            for (Mi = "S"; Mi.length <= 9; Mi += "S")
                Ge(Mi, yi);
            function Li() {
                return this._isUTC ? "UTC" : ""
            }
            function Yi() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            pi = ye("Milliseconds", !1),
                G("z", 0, 0, "zoneAbbr"),
                G("zz", 0, 0, "zoneName");
            var vi = S.prototype;
            function bi(input) {
                return rn(1e3 * input)
            }
            function ki() {
                return rn.apply(null, arguments).parseZone()
            }
            function Di(e) {
                return e
            }
            vi.add = Bn,
                vi.calendar = Xn,
                vi.clone = Qn,
                vi.diff = or,
                vi.endOf = Hr,
                vi.format = mr,
                vi.from = cr,
                vi.fromNow = fr,
                vi.to = Mr,
                vi.toNow = pr,
                vi.get = ve,
                vi.invalidAt = zr,
                vi.isAfter = er,
                vi.isBefore = ar,
                vi.isBetween = nr,
                vi.isSame = rr,
                vi.isSameOrAfter = ir,
                vi.isSameOrBefore = sr,
                vi.isValid = Cr,
                vi.lang = yr,
                vi.locale = gr,
                vi.localeData = Lr,
                vi.max = on,
                vi.min = sn,
                vi.parsingFlags = Er,
                vi.set = be,
                vi.startOf = Sr,
                vi.subtract = Jn,
                vi.toArray = Ar,
                vi.toObject = Fr,
                vi.toDate = Or,
                vi.toISOString = ur,
                vi.inspect = _r,
                "undefined" != typeof Symbol && null != Symbol.for && (vi[Symbol.for("nodejs.util.inspect.custom")] = function () {
                    return "Moment<" + this.format() + ">"
                }
                ),
                vi.toJSON = Wr,
                vi.toString = lr,
                vi.unix = Pr,
                vi.valueOf = jr,
                vi.creationData = Ir,
                vi.eraName = Br,
                vi.eraNarrow = Jr,
                vi.eraAbbr = Ur,
                vi.eraYear = Gr,
                vi.year = wt,
                vi.isLeapYear = Tt,
                vi.weekYear = ni,
                vi.isoWeekYear = ri,
                vi.quarter = vi.quarters = mi,
                vi.month = Lt,
                vi.daysInMonth = Yt,
                vi.week = vi.weeks = Et,
                vi.isoWeek = vi.isoWeeks = zt,
                vi.weeksInYear = oi,
                vi.weeksInWeekYear = di,
                vi.isoWeeksInYear = ii,
                vi.isoWeeksInISOWeekYear = si,
                vi.date = ci,
                vi.day = vi.days = ea,
                vi.weekday = ta,
                vi.isoWeekday = aa,
                vi.dayOfYear = hi,
                vi.hour = vi.hours = ca,
                vi.minute = vi.minutes = fi,
                vi.second = vi.seconds = gi,
                vi.millisecond = vi.milliseconds = pi,
                vi.utcOffset = Dn,
                vi.utc = Tn,
                vi.local = xn,
                vi.parseZone = Sn,
                vi.hasAlignedHourOffset = Hn,
                vi.isDST = jn,
                vi.isLocal = On,
                vi.isUtcOffset = An,
                vi.isUtc = Fn,
                vi.isUTC = Fn,
                vi.zoneAbbr = Li,
                vi.zoneName = Yi,
                vi.dates = P("dates accessor is deprecated. Use date instead.", ci),
                vi.months = P("months accessor is deprecated. Use month instead", Lt),
                vi.years = P("years accessor is deprecated. Use year instead", wt),
                vi.zone = P("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", wn),
                vi.isDSTShifted = P("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Pn);
            var wi = z.prototype;
            function Ti(e, t, n, r) {
                var o = Ta()
                    , d = L().set(r, t);
                return o[n](d, e)
            }
            function xi(e, t, n) {
                if (f(e) && (t = e,
                    e = void 0),
                    e = e || "",
                    null != t)
                    return Ti(e, t, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++)
                    r[i] = Ti(e, i, n, "month");
                return r
            }
            function Si(e, t, n, r) {
                "boolean" == typeof e ? (f(t) && (n = t,
                    t = void 0),
                    t = t || "") : (n = t = e,
                        e = !1,
                        f(t) && (n = t,
                            t = void 0),
                        t = t || "");
                var i, o = Ta(), d = e ? o._week.dow : 0, l = [];
                if (null != n)
                    return Ti(t, (n + d) % 7, r, "day");
                for (i = 0; i < 7; i++)
                    l[i] = Ti(t, (i + d) % 7, r, "day");
                return l
            }
            function Hi(e, t) {
                return xi(e, t, "months")
            }
            function ji(e, t) {
                return xi(e, t, "monthsShort")
            }
            function Pi(e, t, n) {
                return Si(e, t, n, "weekdays")
            }
            function Oi(e, t, n) {
                return Si(e, t, n, "weekdaysShort")
            }
            function Ai(e, t, n) {
                return Si(e, t, n, "weekdaysMin")
            }
            wi.calendar = N,
                wi.longDateFormat = ee,
                wi.invalidDate = ae,
                wi.ordinal = ie,
                wi.preparse = Di,
                wi.postformat = Di,
                wi.relativeTime = oe,
                wi.pastFuture = de,
                wi.set = C,
                wi.eras = Nr,
                wi.erasParse = Rr,
                wi.erasConvertYear = Vr,
                wi.erasAbbrRegex = $r,
                wi.erasNameRegex = qr,
                wi.erasNarrowRegex = Kr,
                wi.months = ft,
                wi.monthsShort = Mt,
                wi.monthsParse = gt,
                wi.monthsRegex = bt,
                wi.monthsShortRegex = vt,
                wi.week = At,
                wi.firstDayOfYear = Ct,
                wi.firstDayOfWeek = Wt,
                wi.weekdays = $t,
                wi.weekdaysMin = Zt,
                wi.weekdaysShort = Kt,
                wi.weekdaysParse = Qt,
                wi.weekdaysRegex = na,
                wi.weekdaysShortRegex = ra,
                wi.weekdaysMinRegex = ia,
                wi.isPM = _a,
                wi.meridiem = ha,
                ka("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: 1 / 0,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (e) {
                        var b = e % 10;
                        return e + (1 === ge(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                    }
                }),
                o.lang = P("moment.lang is deprecated. Use moment.locale instead.", ka),
                o.langData = P("moment.langData is deprecated. Use moment.localeData instead.", Ta);
            var Fi = Math.abs;
            function Wi() {
                var data = this._data;
                return this._milliseconds = Fi(this._milliseconds),
                    this._days = Fi(this._days),
                    this._months = Fi(this._months),
                    data.milliseconds = Fi(data.milliseconds),
                    data.seconds = Fi(data.seconds),
                    data.minutes = Fi(data.minutes),
                    data.hours = Fi(data.hours),
                    data.months = Fi(data.months),
                    data.years = Fi(data.years),
                    this
            }
            function Ci(e, input, t, n) {
                var r = En(input, t);
                return e._milliseconds += n * r._milliseconds,
                    e._days += n * r._days,
                    e._months += n * r._months,
                    e._bubble()
            }
            function Ei(input, e) {
                return Ci(this, input, e, 1)
            }
            function zi(input, e) {
                return Ci(this, input, e, -1)
            }
            function Ii(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function Ni() {
                var e, t, n, r, o, d = this._milliseconds, l = this._days, _ = this._months, data = this._data;
                return d >= 0 && l >= 0 && _ >= 0 || d <= 0 && l <= 0 && _ <= 0 || (d += 864e5 * Ii(Vi(_) + l),
                    l = 0,
                    _ = 0),
                    data.milliseconds = d % 1e3,
                    e = pe(d / 1e3),
                    data.seconds = e % 60,
                    t = pe(e / 60),
                    data.minutes = t % 60,
                    n = pe(t / 60),
                    data.hours = n % 24,
                    l += pe(n / 24),
                    _ += o = pe(Ri(l)),
                    l -= Ii(Vi(o)),
                    r = pe(_ / 12),
                    _ %= 12,
                    data.days = l,
                    data.months = _,
                    data.years = r,
                    this
            }
            function Ri(e) {
                return 4800 * e / 146097
            }
            function Vi(e) {
                return 146097 * e / 4800
            }
            function Bi(e) {
                if (!this.isValid())
                    return NaN;
                var t, n, r = this._milliseconds;
                if ("month" === (e = _e(e)) || "quarter" === e || "year" === e)
                    switch (t = this._days + r / 864e5,
                    n = this._months + Ri(t),
                    e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12
                    }
                else
                    switch (t = this._days + Math.round(Vi(this._months)),
                    e) {
                        case "week":
                            return t / 7 + r / 6048e5;
                        case "day":
                            return t + r / 864e5;
                        case "hour":
                            return 24 * t + r / 36e5;
                        case "minute":
                            return 1440 * t + r / 6e4;
                        case "second":
                            return 86400 * t + r / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + r;
                        default:
                            throw new Error("Unknown unit " + e)
                    }
            }
            function Ji() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ge(this._months / 12) : NaN
            }
            function Ui(e) {
                return function () {
                    return this.as(e)
                }
            }
            var Gi = Ui("ms")
                , qi = Ui("s")
                , $i = Ui("m")
                , Ki = Ui("h")
                , Zi = Ui("d")
                , Xi = Ui("w")
                , Qi = Ui("M")
                , es = Ui("Q")
                , ts = Ui("y");
            function as() {
                return En(this)
            }
            function ns(e) {
                return e = _e(e),
                    this.isValid() ? this[e + "s"]() : NaN
            }
            function rs(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }
            var is = rs("milliseconds")
                , ss = rs("seconds")
                , os = rs("minutes")
                , ds = rs("hours")
                , ls = rs("days")
                , us = rs("months")
                , _s = rs("years");
            function ms() {
                return pe(this.days() / 7)
            }
            var cs = Math.round
                , hs = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };
            function fs(e, t, n, r, o) {
                return o.relativeTime(t || 1, !!n, e, r)
            }
            function Ms(e, t, n, r) {
                var o = En(e).abs()
                    , d = cs(o.as("s"))
                    , l = cs(o.as("m"))
                    , _ = cs(o.as("h"))
                    , m = cs(o.as("d"))
                    , c = cs(o.as("M"))
                    , h = cs(o.as("w"))
                    , f = cs(o.as("y"))
                    , a = d <= n.ss && ["s", d] || d < n.s && ["ss", d] || l <= 1 && ["m"] || l < n.m && ["mm", l] || _ <= 1 && ["h"] || _ < n.h && ["hh", _] || m <= 1 && ["d"] || m < n.d && ["dd", m];
                return null != n.w && (a = a || h <= 1 && ["w"] || h < n.w && ["ww", h]),
                    (a = a || c <= 1 && ["M"] || c < n.M && ["MM", c] || f <= 1 && ["y"] || ["yy", f])[2] = t,
                    a[3] = +e > 0,
                    a[4] = r,
                    fs.apply(null, a)
            }
            function ps(e) {
                return void 0 === e ? cs : "function" == typeof e && (cs = e,
                    !0)
            }
            function gs(e, t) {
                return void 0 !== hs[e] && (void 0 === t ? hs[e] : (hs[e] = t,
                    "s" === e && (hs.ss = t - 1),
                    !0))
            }
            function ys(e, t) {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var n, output, r = !1, th = hs;
                return "object" == typeof e && (t = e,
                    e = !1),
                    "boolean" == typeof e && (r = e),
                    "object" == typeof t && (th = Object.assign({}, hs, t),
                        null != t.s && null == t.ss && (th.ss = t.s - 1)),
                    output = Ms(this, !r, th, n = this.localeData()),
                    r && (output = n.pastFuture(+this, output)),
                    n.postformat(output)
            }
            var Ls = Math.abs;
            function Ys(e) {
                return (e > 0) - (e < 0) || +e
            }
            function vs() {
                if (!this.isValid())
                    return this.localeData().invalidDate();
                var e, t, n, s, r, o, d, l, _ = Ls(this._milliseconds) / 1e3, m = Ls(this._days), c = Ls(this._months), h = this.asSeconds();
                return h ? (e = pe(_ / 60),
                    t = pe(e / 60),
                    _ %= 60,
                    e %= 60,
                    n = pe(c / 12),
                    c %= 12,
                    s = _ ? _.toFixed(3).replace(/\.?0+$/, "") : "",
                    r = h < 0 ? "-" : "",
                    o = Ys(this._months) !== Ys(h) ? "-" : "",
                    d = Ys(this._days) !== Ys(h) ? "-" : "",
                    l = Ys(this._milliseconds) !== Ys(h) ? "-" : "",
                    r + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (m ? d + m + "D" : "") + (t || e || _ ? "T" : "") + (t ? l + t + "H" : "") + (e ? l + e + "M" : "") + (_ ? l + s + "S" : "")) : "P0D"
            }
            var bs = Mn.prototype;
            return bs.isValid = hn,
                bs.abs = Wi,
                bs.add = Ei,
                bs.subtract = zi,
                bs.as = Bi,
                bs.asMilliseconds = Gi,
                bs.asSeconds = qi,
                bs.asMinutes = $i,
                bs.asHours = Ki,
                bs.asDays = Zi,
                bs.asWeeks = Xi,
                bs.asMonths = Qi,
                bs.asQuarters = es,
                bs.asYears = ts,
                bs.valueOf = Ji,
                bs._bubble = Ni,
                bs.clone = as,
                bs.get = ns,
                bs.milliseconds = is,
                bs.seconds = ss,
                bs.minutes = os,
                bs.hours = ds,
                bs.days = ls,
                bs.weeks = ms,
                bs.months = us,
                bs.years = _s,
                bs.humanize = ys,
                bs.toISOString = vs,
                bs.toString = vs,
                bs.toJSON = vs,
                bs.locale = gr,
                bs.localeData = Lr,
                bs.toIsoString = P("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", vs),
                bs.lang = yr,
                G("X", 0, 0, "unix"),
                G("x", 0, 0, "valueOf"),
                Re("x", Ce),
                Re("X", Ie),
                Ge("X", (function (input, e, t) {
                    t._d = new Date(1e3 * parseFloat(input))
                }
                )),
                Ge("x", (function (input, e, t) {
                    t._d = new Date(ge(input))
                }
                )),
                o.version = "2.29.4",
                d(rn),
                o.fn = vi,
                o.min = ln,
                o.max = un,
                o.now = _n,
                o.utc = L,
                o.unix = bi,
                o.months = Hi,
                o.isDate = M,
                o.locale = ka,
                o.invalid = D,
                o.duration = En,
                o.isMoment = H,
                o.weekdays = Pi,
                o.parseZone = ki,
                o.localeData = Ta,
                o.isDuration = pn,
                o.monthsShort = ji,
                o.weekdaysMin = Ai,
                o.defineLocale = Da,
                o.updateLocale = wa,
                o.locales = xa,
                o.weekdaysShort = Oi,
                o.normalizeUnits = _e,
                o.relativeTimeRounding = ps,
                o.relativeTimeThreshold = gs,
                o.calendarFormat = Zn,
                o.prototype = vi,
                o.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                },
                o
        }()
    }
    ).call(this, n(427)(e))
}
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function (input) {
                    return /^nm$/i.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
                , n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }
                , r = function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }
                , o = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                , d = function (u) {
                    return function (e, t, n, d) {
                        var l = r(e)
                            , _ = o[u][r(e)];
                        return 2 === l && (_ = _[t ? 0 : 1]),
                            _.replace(/%d/i, e)
                    }
                }
                , l = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar", {
                months: l,
                monthsShort: l,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (input) {
                    return "م" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: d("s"),
                    ss: d("s"),
                    m: d("m"),
                    mm: d("m"),
                    h: d("h"),
                    hh: d("h"),
                    d: d("d"),
                    dd: d("d"),
                    M: d("M"),
                    MM: d("M"),
                    y: d("y"),
                    yy: d("y")
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
                , n = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                , r = function (u) {
                    return function (e, r, o, d) {
                        var l = t(e)
                            , _ = n[u][t(e)];
                        return 2 === l && (_ = _[r ? 0 : 1]),
                            _.replace(/%d/i, e)
                    }
                }
                , o = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-dz", {
                months: o,
                monthsShort: o,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (input) {
                    return "م" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    ss: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            }
                , n = function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                }
                , r = {
                    s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                    m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                    h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                    d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                    M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                    y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                }
                , o = function (u) {
                    return function (e, t, o, d) {
                        var l = n(e)
                            , _ = r[u][n(e)];
                        return 2 === l && (_ = _[t ? 0 : 1]),
                            _.replace(/%d/i, e)
                    }
                }
                , d = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-ly", {
                months: d,
                monthsShort: d,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (input) {
                    return "م" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: o("s"),
                    ss: o("s"),
                    m: o("m"),
                    mm: o("m"),
                    h: o("h"),
                    hh: o("h"),
                    d: o("d"),
                    dd: o("d"),
                    M: o("M"),
                    MM: o("M"),
                    y: o("y"),
                    yy: o("y")
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
                , n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
            e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function (input) {
                    return "م" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "bir neçə saniyə",
                    ss: "%d saniyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function (input) {
                    return /^(gündüz|axşam)$/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function (e) {
                    if (0 === e)
                        return e + "-ıncı";
                    var a = e % 10
                        , b = e % 100 - a
                        , n = e >= 100 ? 100 : null;
                    return e + (t[a] || t[b] || t[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                return "m" === r ? n ? "хвіліна" : "хвіліну" : "h" === r ? n ? "гадзіна" : "гадзіну" : e + " " + t({
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[r], +e)
            }
            e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function () {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function (input) {
                    return /^(дня|вечара)$/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Миналата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Миналия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    w: "седмица",
                    ww: "%d седмици",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function (e) {
                    var t = e % 10
                        , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lɛrɛ] LT",
                    nextDay: "[Sini lɛrɛ] LT",
                    nextWeek: "dddd [don lɛrɛ] LT",
                    lastDay: "[Kunu lɛrɛ] LT",
                    lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kɔnɔ",
                    past: "a bɛ %s bɔ",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lɛrɛ kelen",
                    hh: "lɛrɛ %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
                , n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
            e.defineLocale("bn", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function (e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
                , n = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
            e.defineLocale("bn-bd", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function (e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "রাত" === t ? e < 4 ? e : e + 12 : "ভোর" === t || "সকাল" === t ? e : "দুপুর" === t ? e >= 3 ? e : e + 12 : "বিকাল" === t || "সন্ধ্যা" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            }
                , n = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
            e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
                monthsShortRegex: /^(ཟླ་\d{1,2})/,
                monthsParseExact: !0,
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    ss: "%d སྐར་ཆ།",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function (e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n) {
                return e + " " + o({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[n], e)
            }
            function n(e) {
                switch (r(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }
            function r(e) {
                return e > 9 ? r(e % 10) : e
            }
            function o(text, e) {
                return 2 === e ? d(text) : text
            }
            function d(text) {
                var e = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === e[text.charAt(0)] ? text : e[text.charAt(0)] + text.substring(1)
            }
            var l = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
                , _ = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
                , m = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i
                , c = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
                , h = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i]
                , f = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i]
                , M = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
            e.defineLocale("br", {
                months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParse: M,
                fullWeekdaysParse: h,
                shortWeekdaysParse: f,
                minWeekdaysParse: M,
                monthsRegex: _,
                monthsShortRegex: _,
                monthsStrictRegex: m,
                monthsShortStrictRegex: c,
                monthsParse: l,
                longMonthsParse: l,
                shortMonthsParse: l,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY HH:mm",
                    LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warcʼhoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Decʼh da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s ʼzo",
                    s: "un nebeud segondennoù",
                    ss: "%d eilenn",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function (e) {
                    return e + (1 === e ? "añ" : "vet")
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /a.m.|g.m./,
                isPM: function (e) {
                    return "g.m." === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "a.m." : "g.m."
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n) {
                var r = e + " ";
                switch (n) {
                    case "ss":
                        return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return r += 1 === e ? "dan" : "dana";
                    case "MM":
                        return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function () {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function () {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function (e, t) {
                    var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (output = "a"),
                        e + output
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                format: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                standalone: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")
            }
                , n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
                , r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
                , o = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
            function d(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }
            function l(e, t, n, r) {
                var o = e + " ";
                switch (n) {
                    case "s":
                        return t || r ? "pár sekund" : "pár sekundami";
                    case "ss":
                        return t || r ? o + (d(e) ? "sekundy" : "sekund") : o + "sekundami";
                    case "m":
                        return t ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return t || r ? o + (d(e) ? "minuty" : "minut") : o + "minutami";
                    case "h":
                        return t ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return t || r ? o + (d(e) ? "hodiny" : "hodin") : o + "hodinami";
                    case "d":
                        return t || r ? "den" : "dnem";
                    case "dd":
                        return t || r ? o + (d(e) ? "dny" : "dní") : o + "dny";
                    case "M":
                        return t || r ? "měsíc" : "měsícem";
                    case "MM":
                        return t || r ? o + (d(e) ? "měsíce" : "měsíců") : o + "měsíci";
                    case "y":
                        return t || r ? "rok" : "rokem";
                    case "yy":
                        return t || r ? o + (d(e) ? "roky" : "let") : o + "lety"
                }
            }
            e.defineLocale("cs", {
                months: t,
                monthsShort: n,
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: l,
                    ss: l,
                    m: l,
                    mm: l,
                    h: l,
                    hh: l,
                    d: l,
                    dd: l,
                    M: l,
                    MM: l,
                    y: l,
                    yy: l
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (output) {
                        return output + (/сехет$/i.exec(output) ? "рен" : /ҫул$/i.exec(output) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    ss: "%d ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function (e) {
                    var output = "";
                    return e > 20 ? output = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (output = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                        e + output
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? o[n][0] : o[n][1]
            }
            e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? o[n][0] : o[n][1]
            }
            e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? o[n][0] : o[n][1]
            }
            e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
                , n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function (input) {
                    return "މފ" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    ss: "d% ސިކުންތު",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(input) {
                return "undefined" != typeof Function && input instanceof Function || "[object Function]" === Object.prototype.toString.call(input)
            }
            e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function (e, t) {
                    return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function (input) {
                    return "μ" === (input + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function () {
                        return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                    },
                    sameElse: "L"
                },
                calendar: function (e, n) {
                    var output = this._calendarEl[e]
                        , r = n && n.hours();
                    return t(output) && (output = output.apply(n)),
                        output.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-in", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("en-sg", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "[la] D[-an de] MMMM, YYYY",
                    LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                    llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function (input) {
                    return "p" === input.charAt(0).toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd[n je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasintan] dddd[n je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "kelkaj sekundoj",
                    ss: "%d sekundoj",
                    m: "unu minuto",
                    mm: "%d minutoj",
                    h: "unu horo",
                    hh: "%d horoj",
                    d: "unu tago",
                    dd: "%d tagoj",
                    M: "unu monato",
                    MM: "%d monatoj",
                    y: "unu jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-mx", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
                , o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function () {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function () {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function () {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    ss: [e + "sekundi", e + "sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? o[n][2] ? o[n][2] : o[n][1] : r ? o[n][0] : o[n][1]
            }
            e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }
                , n = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
            e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function (input) {
                    return /بعد از ظهر/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    ss: "%d ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/[۰-۹]/g, (function (e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
                , n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
            function r(e, t, n, r) {
                var d = "";
                switch (n) {
                    case "s":
                        return r ? "muutaman sekunnin" : "muutama sekunti";
                    case "ss":
                        d = r ? "sekunnin" : "sekuntia";
                        break;
                    case "m":
                        return r ? "minuutin" : "minuutti";
                    case "mm":
                        d = r ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return r ? "tunnin" : "tunti";
                    case "hh":
                        d = r ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return r ? "päivän" : "päivä";
                    case "dd":
                        d = r ? "päivän" : "päivää";
                        break;
                    case "M":
                        return r ? "kuukauden" : "kuukausi";
                    case "MM":
                        d = r ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return r ? "vuoden" : "vuosi";
                    case "yy":
                        d = r ? "vuoden" : "vuotta"
                }
                return d = o(e, r) + " " + d
            }
            function o(e, r) {
                return e < 10 ? r ? n[e] : t[e] : e
            }
            e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("fil", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaður",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
                , n = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i
                , r = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
                , o = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
            e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: t,
                monthsShortStrictRegex: n,
                monthsParse: o,
                longMonthsParse: o,
                shortMonthsParse: o,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    w: "une semaine",
                    ww: "%d semaines",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function (e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
                , n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    ss: "%d sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"]
                , n = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"]
                , r = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"]
                , o = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"]
                , d = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
            e.defineLocale("ga", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: r,
                weekdaysShort: o,
                weekdaysMin: d,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Amárach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inné ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s ó shin",
                    s: "cúpla soicind",
                    ss: "%d soicind",
                    m: "nóiméad",
                    mm: "%d nóiméad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lá",
                    dd: "%d lá",
                    M: "mí",
                    MM: "%d míonna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
                , n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
                , r = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
                , o = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
                , d = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: r,
                weekdaysShort: o,
                weekdaysMin: d,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function (e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function () {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function () {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function () {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function () {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                    ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                    m: ["एका मिणटान", "एक मिनूट"],
                    mm: [e + " मिणटांनी", e + " मिणटां"],
                    h: ["एका वरान", "एक वर"],
                    hh: [e + " वरांनी", e + " वरां"],
                    d: ["एका दिसान", "एक दीस"],
                    dd: [e + " दिसांनी", e + " दीस"],
                    M: ["एका म्हयन्यान", "एक म्हयनो"],
                    MM: [e + " म्हयन्यानी", e + " म्हयने"],
                    y: ["एका वर्सान", "एक वर्स"],
                    yy: [e + " वर्सांनी", e + " वर्सां"]
                };
                return r ? o[n][0] : o[n][1]
            }
            e.defineLocale("gom-deva", {
                months: {
                    standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [वाजतां]",
                    LTS: "A h:mm:ss [वाजतां]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [वाजतां]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                    llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
                },
                calendar: {
                    sameDay: "[आयज] LT",
                    nextDay: "[फाल्यां] LT",
                    nextWeek: "[फुडलो] dddd[,] LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[फाटलो] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s आदीं",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                ordinal: function (e, t) {
                    return "D" === t ? e + "वेर" : e
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    s: ["thoddea sekondamni", "thodde sekond"],
                    ss: [e + " sekondamni", e + " sekond"],
                    m: ["eka mintan", "ek minut"],
                    mm: [e + " mintamni", e + " mintam"],
                    h: ["eka voran", "ek vor"],
                    hh: [e + " voramni", e + " voram"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disamni", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineamni", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsamni", e + " vorsam"]
                };
                return r ? o[n][0] : o[n][1]
            }
            e.defineLocale("gom-latn", {
                months: {
                    standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Fuddlo] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fattlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function (e, t) {
                    return "D" === t ? e + "er" : e
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /rati|sokallim|donparam|sanje/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            }
                , n = {
                    "૧": "1",
                    "૨": "2",
                    "૩": "3",
                    "૪": "4",
                    "૫": "5",
                    "૬": "6",
                    "૭": "7",
                    "૮": "8",
                    "૯": "9",
                    "૦": "0"
                };
            e.defineLocale("gu", {
                months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                monthsParseExact: !0,
                weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                longDateFormat: {
                    LT: "A h:mm વાગ્યે",
                    LTS: "A h:mm:ss વાગ્યે",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                    LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                },
                calendar: {
                    sameDay: "[આજ] LT",
                    nextDay: "[કાલે] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ગઇકાલે] LT",
                    lastWeek: "[પાછલા] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s મા",
                    past: "%s પહેલા",
                    s: "અમુક પળો",
                    ss: "%d સેકંડ",
                    m: "એક મિનિટ",
                    mm: "%d મિનિટ",
                    h: "એક કલાક",
                    hh: "%d કલાક",
                    d: "એક દિવસ",
                    dd: "%d દિવસ",
                    M: "એક મહિનો",
                    MM: "%d મહિનો",
                    y: "એક વર્ષ",
                    yy: "%d વર્ષ"
                },
                preparse: function (e) {
                    return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function (e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function (e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function (e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function (e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function (input) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                }
                , r = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i]
                , o = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
            e.defineLocale("hi", {
                months: {
                    format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                },
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: o,
                monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    ss: "%d सेकंड",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n) {
                var r = e + " ";
                switch (n) {
                    case "ss":
                        return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return r += 1 === e ? "dan" : "dana";
                    case "MM":
                        return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM YYYY",
                    LLL: "Do MMMM YYYY H:mm",
                    LLLL: "dddd, Do MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[prošlu] [nedjelju] [u] LT";
                            case 3:
                                return "[prošlu] [srijedu] [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            function n(e, t, n, r) {
                var o = e;
                switch (n) {
                    case "s":
                        return r || t ? "néhány másodperc" : "néhány másodperce";
                    case "ss":
                        return o + (r || t) ? " másodperc" : " másodperce";
                    case "m":
                        return "egy" + (r || t ? " perc" : " perce");
                    case "mm":
                        return o + (r || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (r || t ? " óra" : " órája");
                    case "hh":
                        return o + (r || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (r || t ? " nap" : " napja");
                    case "dd":
                        return o + (r || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (r || t ? " hónap" : " hónapja");
                    case "MM":
                        return o + (r || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (r || t ? " év" : " éve");
                    case "yy":
                        return o + (r || t ? " év" : " éve")
                }
                return ""
            }
            function r(e) {
                return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
            }
            e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function (input) {
                    return "u" === input.charAt(1).toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function () {
                        return r.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function () {
                        return r.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function () {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function () {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    ss: "%d վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function (input) {
                    return /^(ցերեկվա|երեկոյան)$/.test(input)
                },
                meridiem: function (e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }
            function n(e, n, r, o) {
                var d = e + " ";
                switch (r) {
                    case "s":
                        return n || o ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "ss":
                        return t(e) ? d + (n || o ? "sekúndur" : "sekúndum") : d + "sekúnda";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? d + (n || o ? "mínútur" : "mínútum") : n ? d + "mínúta" : d + "mínútu";
                    case "hh":
                        return t(e) ? d + (n || o ? "klukkustundir" : "klukkustundum") : d + "klukkustund";
                    case "d":
                        return n ? "dagur" : o ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? d + "dagar" : d + (o ? "daga" : "dögum") : n ? d + "dagur" : d + (o ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : o ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? d + "mánuðir" : d + (o ? "mánuði" : "mánuðum") : n ? d + "mánuður" : d + (o ? "mánuð" : "mánuði");
                    case "y":
                        return n || o ? "ár" : "ári";
                    case "yy":
                        return t(e) ? d + (n || o ? "ár" : "árum") : d + (n || o ? "ár" : "ári")
                }
            }
            e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: function () {
                        return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextDay: function () {
                        return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextWeek: function () {
                        return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastDay: function () {
                        return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastWeek: function () {
                        return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "tra %s",
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    w: "una settimana",
                    ww: "%d settimane",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function () {
                        return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (s) {
                        return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ja", {
                eras: [{
                    since: "2019-05-01",
                    offset: 1,
                    name: "令和",
                    narrow: "㋿",
                    abbr: "R"
                }, {
                    since: "1989-01-08",
                    until: "2019-04-30",
                    offset: 1,
                    name: "平成",
                    narrow: "㍻",
                    abbr: "H"
                }, {
                    since: "1926-12-25",
                    until: "1989-01-07",
                    offset: 1,
                    name: "昭和",
                    narrow: "㍼",
                    abbr: "S"
                }, {
                    since: "1912-07-30",
                    until: "1926-12-24",
                    offset: 1,
                    name: "大正",
                    narrow: "㍽",
                    abbr: "T"
                }, {
                    since: "1873-01-01",
                    until: "1912-07-29",
                    offset: 6,
                    name: "明治",
                    narrow: "㍾",
                    abbr: "M"
                }, {
                    since: "0001-01-01",
                    until: "1873-12-31",
                    offset: 1,
                    name: "西暦",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "紀元前",
                    narrow: "BC",
                    abbr: "BC"
                }],
                eraYearOrdinalRegex: /(元|\d+)年/,
                eraYearOrdinalParse: function (input, e) {
                    return "元" === e[1] ? 1 : parseInt(e[1] || input, 10)
                },
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日(ddd) HH:mm"
                },
                meridiemParse: /午前|午後/i,
                isPM: function (input) {
                    return "午後" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: function (e) {
                        return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                    },
                    lastDay: "[昨日] LT",
                    lastWeek: function (e) {
                        return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "y":
                            return 1 === e ? "元年" : e + "年";
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ka", {
                months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function (s) {
                        return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function (e, t, n) {
                            return "ი" === n ? t + "ში" : t + n + "ში"
                        }
                        ))
                    },
                    past: function (s) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(s) ? s.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(s) ? s.replace(/წელი$/, "წლის წინ") : s
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function (e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    ss: "%d секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function (e) {
                    var a = e % 10
                        , b = e >= 100 ? 100 : null;
                    return e + (t[e] || t[a] || t[b])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            }
                , n = {
                    "១": "1",
                    "២": "2",
                    "៣": "3",
                    "៤": "4",
                    "៥": "5",
                    "៦": "6",
                    "៧": "7",
                    "៨": "8",
                    "៩": "9",
                    "០": "0"
                };
            e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ព្រឹក|ល្ងាច/,
                isPM: function (input) {
                    return "ល្ងាច" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ព្រឹក" : "ល្ងាច"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    ss: "%d វិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                ordinal: "ទី%d",
                preparse: function (e) {
                    return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            }
                , n = {
                    "೧": "1",
                    "೨": "2",
                    "೩": "3",
                    "೪": "4",
                    "೫": "5",
                    "೬": "6",
                    "೭": "7",
                    "೮": "8",
                    "೯": "9",
                    "೦": "0"
                };
            e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    ss: "%d ಸೆಕೆಂಡುಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function (e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function (e) {
                    return e + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "일";
                        case "M":
                            return e + "월";
                        case "w":
                        case "W":
                            return e + "주";
                        default:
                            return e
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function (e) {
                    return "오후" === e
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
                , n = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                }
                , r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
            e.defineLocale("ku", {
                months: r,
                monthsShort: r,
                weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ئێواره‌|به‌یانی/,
                isPM: function (input) {
                    return /ئێواره‌/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "به‌یانی" : "ئێواره‌"
                },
                calendar: {
                    sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                    nextDay: "[به‌یانی كاتژمێر] LT",
                    nextWeek: "dddd [كاتژمێر] LT",
                    lastDay: "[دوێنێ كاتژمێر] LT",
                    lastWeek: "dddd [كاتژمێر] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "له‌ %s",
                    past: "%s",
                    s: "چه‌ند چركه‌یه‌ك",
                    ss: "چركه‌ %d",
                    m: "یه‌ك خوله‌ك",
                    mm: "%d خوله‌ك",
                    h: "یه‌ك كاتژمێر",
                    hh: "%d كاتژمێر",
                    d: "یه‌ك ڕۆژ",
                    dd: "%d ڕۆژ",
                    M: "یه‌ك مانگ",
                    MM: "%d مانگ",
                    y: "یه‌ك ساڵ",
                    yy: "%d ساڵ"
                },
                preparse: function (e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function (e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кечээ саат] LT",
                    lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    ss: "%d секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function (e) {
                    var a = e % 10
                        , b = e >= 100 ? 100 : null;
                    return e + (t[e] || t[a] || t[b])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? o[n][0] : o[n][1]
            }
            function n(e) {
                return o(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }
            function r(e) {
                return o(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }
            function o(e) {
                if (e = parseInt(e, 10),
                    isNaN(e))
                    return !1;
                if (e < 0)
                    return !0;
                if (e < 10)
                    return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10;
                    return o(0 === t ? e / 10 : t)
                }
                if (e < 1e4) {
                    for (; e >= 10;)
                        e /= 10;
                    return o(e)
                }
                return o(e /= 1e3)
            }
            e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: r,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function (input) {
                    return "ຕອນແລງ" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    ss: "%d ວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function (e) {
                    return "ທີ່" + e
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                ss: "sekundė_sekundžių_sekundes",
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            function n(e, t, n, r) {
                return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
            }
            function r(e, t, n, r) {
                return t ? d(n)[0] : r ? d(n)[1] : d(n)[2]
            }
            function o(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }
            function d(e) {
                return t[e].split("_")
            }
            function l(e, t, n, l) {
                var _ = e + " ";
                return 1 === e ? _ + r(e, t, n[0], l) : t ? _ + (o(e) ? d(n)[1] : d(n)[0]) : l ? _ + d(n)[1] : _ + (o(e) ? d(n)[1] : d(n)[2])
            }
            e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: n,
                    ss: l,
                    m: r,
                    mm: l,
                    h: r,
                    hh: l,
                    d: r,
                    dd: l,
                    M: r,
                    MM: l,
                    y: r,
                    yy: l
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function (e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            function n(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }
            function r(e, r, o) {
                return e + " " + n(t[o], e, r)
            }
            function o(e, r, o) {
                return n(t[o], e, r)
            }
            function d(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: d,
                    ss: r,
                    m: o,
                    mm: r,
                    h: o,
                    hh: r,
                    d: o,
                    dd: r,
                    M: o,
                    MM: r,
                    y: o,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekund", "sekunda", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function (e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function (e, n, r) {
                    var o = t.words[r];
                    return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
                }
            };
            e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function () {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    ss: "%d hēkona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "една минута",
                    mm: "%d минути",
                    h: "еден час",
                    hh: "%d часа",
                    d: "еден ден",
                    dd: "%d дена",
                    M: "еден месец",
                    MM: "%d месеци",
                    y: "една година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function (e) {
                    var t = e % 10
                        , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    ss: "%d സെക്കൻഡ്",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                switch (n) {
                    case "s":
                        return t ? "хэдхэн секунд" : "хэдхэн секундын";
                    case "ss":
                        return e + (t ? " секунд" : " секундын");
                    case "m":
                    case "mm":
                        return e + (t ? " минут" : " минутын");
                    case "h":
                    case "hh":
                        return e + (t ? " цаг" : " цагийн");
                    case "d":
                    case "dd":
                        return e + (t ? " өдөр" : " өдрийн");
                    case "M":
                    case "MM":
                        return e + (t ? " сар" : " сарын");
                    case "y":
                    case "yy":
                        return e + (t ? " жил" : " жилийн");
                    default:
                        return e
                }
            }
            e.defineLocale("mn", {
                months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                monthsParseExact: !0,
                weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY оны MMMMын D",
                    LLL: "YYYY оны MMMMын D HH:mm",
                    LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                },
                meridiemParse: /ҮӨ|ҮХ/i,
                isPM: function (input) {
                    return "ҮХ" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ҮӨ" : "ҮХ"
                },
                calendar: {
                    sameDay: "[Өнөөдөр] LT",
                    nextDay: "[Маргааш] LT",
                    nextWeek: "[Ирэх] dddd LT",
                    lastDay: "[Өчигдөр] LT",
                    lastWeek: "[Өнгөрсөн] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s дараа",
                    past: "%s өмнө",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + " өдөр";
                        default:
                            return e
                    }
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            function r(e, t, n, r) {
                var output = "";
                if (t)
                    switch (n) {
                        case "s":
                            output = "काही सेकंद";
                            break;
                        case "ss":
                            output = "%d सेकंद";
                            break;
                        case "m":
                            output = "एक मिनिट";
                            break;
                        case "mm":
                            output = "%d मिनिटे";
                            break;
                        case "h":
                            output = "एक तास";
                            break;
                        case "hh":
                            output = "%d तास";
                            break;
                        case "d":
                            output = "एक दिवस";
                            break;
                        case "dd":
                            output = "%d दिवस";
                            break;
                        case "M":
                            output = "एक महिना";
                            break;
                        case "MM":
                            output = "%d महिने";
                            break;
                        case "y":
                            output = "एक वर्ष";
                            break;
                        case "yy":
                            output = "%d वर्षे"
                    }
                else
                    switch (n) {
                        case "s":
                            output = "काही सेकंदां";
                            break;
                        case "ss":
                            output = "%d सेकंदां";
                            break;
                        case "m":
                            output = "एका मिनिटा";
                            break;
                        case "mm":
                            output = "%d मिनिटां";
                            break;
                        case "h":
                            output = "एका तासा";
                            break;
                        case "hh":
                            output = "%d तासां";
                            break;
                        case "d":
                            output = "एका दिवसा";
                            break;
                        case "dd":
                            output = "%d दिवसां";
                            break;
                        case "M":
                            output = "एका महिन्या";
                            break;
                        case "MM":
                            output = "%d महिन्यां";
                            break;
                        case "y":
                            output = "एका वर्षा";
                            break;
                        case "yy":
                            output = "%d वर्षां"
                    }
                return output.replace(/%d/i, e)
            }
            e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[Għada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraħ fil-]LT",
                    lastWeek: "dddd [li għadda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "f’ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegħa",
                    hh: "%d siegħat",
                    d: "ġurnata",
                    dd: "%d ġranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            }
                , n = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
            e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    ss: "%d စက္ကန့်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function (e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    w: "en uke",
                    ww: "%d uker",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , n = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
            e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function (e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    ss: "%d सेकेण्ड",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                , r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                , o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    w: "één week",
                    ww: "%d weken",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                , r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                , o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function (e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: o,
                monthsShortRegex: o,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function (e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    w: "ei veke",
                    ww: "%d veker",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("oc-lnc", {
                months: {
                    standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                    format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: "[uèi a] LT",
                    nextDay: "[deman a] LT",
                    nextWeek: "dddd [a] LT",
                    lastDay: "[ièr a] LT",
                    lastWeek: "dddd [passat a] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "unas segondas",
                    ss: "%d segondas",
                    m: "una minuta",
                    mm: "%d minutas",
                    h: "una ora",
                    hh: "%d oras",
                    d: "un jorn",
                    dd: "%d jorns",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function (e, t) {
                    var output = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (output = "a"),
                        e + output
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            }
                , n = {
                    "੧": "1",
                    "੨": "2",
                    "੩": "3",
                    "੪": "4",
                    "੫": "5",
                    "੬": "6",
                    "੭": "7",
                    "੮": "8",
                    "੯": "9",
                    "੦": "0"
                };
            e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "[ਅਗਲਾ] dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    ss: "%d ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function (e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
                , n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
                , r = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
            function o(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }
            function d(e, t, n) {
                var r = e + " ";
                switch (n) {
                    case "ss":
                        return r + (o(e) ? "sekundy" : "sekund");
                    case "m":
                        return t ? "minuta" : "minutę";
                    case "mm":
                        return r + (o(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzinę";
                    case "hh":
                        return r + (o(e) ? "godziny" : "godzin");
                    case "ww":
                        return r + (o(e) ? "tygodnie" : "tygodni");
                    case "MM":
                        return r + (o(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return r + (o(e) ? "lata" : "lat")
                }
            }
            e.defineLocale("pl", {
                months: function (e, r) {
                    return e ? /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W niedzielę o] LT";
                            case 2:
                                return "[We wtorek o] LT";
                            case 3:
                                return "[W środę o] LT";
                            case 6:
                                return "[W sobotę o] LT";
                            default:
                                return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: d,
                    m: d,
                    mm: d,
                    h: d,
                    hh: d,
                    d: "1 dzień",
                    dd: "%d dni",
                    w: "tydzień",
                    ww: d,
                    M: "miesiąc",
                    MM: d,
                    y: "rok",
                    yy: d
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("pt", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    w: "uma semana",
                    ww: "%d semanas",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("pt-br", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function () {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                invalidDate: "Data inválida"
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n) {
                var r = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "),
                    e + r + {
                        ss: "secunde",
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        ww: "săptămâni",
                        MM: "luni",
                        yy: "ani"
                    }[n]
            }
            e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    ss: t,
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    w: "o săptămână",
                    ww: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                return "m" === r ? n ? "минута" : "минуту" : e + " " + t({
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[r], +e)
            }
            var r = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                calendar: {
                    sameDay: "[Сегодня, в] LT",
                    nextDay: "[Завтра, в] LT",
                    lastDay: "[Вчера, в] LT",
                    nextWeek: function (e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd, [в] LT"
                        }
                    },
                    lastWeek: function (e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd, [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd, [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd, [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    w: "неделя",
                    ww: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function (input) {
                    return /^(дня|вечера)$/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
                , n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function (input) {
                    return "شام" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    ss: "%d سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    ss: "තත්පර %d",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function (e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function (input) {
                    return "ප.ව." === input || "පස් වරු" === input
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
                , n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            function r(e) {
                return e > 1 && e < 5
            }
            function o(e, t, n, o) {
                var d = e + " ";
                switch (n) {
                    case "s":
                        return t || o ? "pár sekúnd" : "pár sekundami";
                    case "ss":
                        return t || o ? d + (r(e) ? "sekundy" : "sekúnd") : d + "sekundami";
                    case "m":
                        return t ? "minúta" : o ? "minútu" : "minútou";
                    case "mm":
                        return t || o ? d + (r(e) ? "minúty" : "minút") : d + "minútami";
                    case "h":
                        return t ? "hodina" : o ? "hodinu" : "hodinou";
                    case "hh":
                        return t || o ? d + (r(e) ? "hodiny" : "hodín") : d + "hodinami";
                    case "d":
                        return t || o ? "deň" : "dňom";
                    case "dd":
                        return t || o ? d + (r(e) ? "dni" : "dní") : d + "dňami";
                    case "M":
                        return t || o ? "mesiac" : "mesiacom";
                    case "MM":
                        return t || o ? d + (r(e) ? "mesiace" : "mesiacov") : d + "mesiacmi";
                    case "y":
                        return t || o ? "rok" : "rokom";
                    case "yy":
                        return t || o ? d + (r(e) ? "roky" : "rokov") : d + "rokmi"
                }
            }
            e.defineLocale("sk", {
                months: t,
                monthsShort: n,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: o,
                    ss: o,
                    m: o,
                    mm: o,
                    h: o,
                    hh: o,
                    d: o,
                    dd: o,
                    M: o,
                    MM: o,
                    y: o,
                    yy: o
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = e + " ";
                switch (n) {
                    case "s":
                        return t || r ? "nekaj sekund" : "nekaj sekundami";
                    case "ss":
                        return o += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return o += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return o += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                    case "d":
                        return t || r ? "en dan" : "enim dnem";
                    case "dd":
                        return o += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                    case "M":
                        return t || r ? "en mesec" : "enim mesecem";
                    case "MM":
                        return o += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                    case "y":
                        return t || r ? "eno leto" : "enim letom";
                    case "yy":
                        return o += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
                }
            }
            e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function (input) {
                    return "M" === input.charAt(0)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekunda", "sekunde", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    d: ["jedan dan", "jednog dana"],
                    dd: ["dan", "dana", "dana"],
                    M: ["jedan mesec", "jednog meseca"],
                    MM: ["mesec", "meseca", "meseci"],
                    y: ["jednu godinu", "jedne godine"],
                    yy: ["godinu", "godine", "godina"]
                },
                correctGrammaticalCase: function (e, t) {
                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
                },
                translate: function (e, n, r, o) {
                    var d, l = t.words[r];
                    return 1 === r.length ? "y" === r && n ? "jedna godina" : o || n ? l[0] : l[1] : (d = t.correctGrammaticalCase(e, l),
                        "yy" === r && n && "godinu" === d ? e + " godina" : e + " " + d)
                }
            };
            e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function () {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: t.translate,
                    dd: t.translate,
                    M: t.translate,
                    MM: t.translate,
                    y: t.translate,
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                words: {
                    ss: ["секунда", "секунде", "секунди"],
                    m: ["један минут", "једног минута"],
                    mm: ["минут", "минута", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    d: ["један дан", "једног дана"],
                    dd: ["дан", "дана", "дана"],
                    M: ["један месец", "једног месеца"],
                    MM: ["месец", "месеца", "месеци"],
                    y: ["једну годину", "једне године"],
                    yy: ["годину", "године", "година"]
                },
                correctGrammaticalCase: function (e, t) {
                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
                },
                translate: function (e, n, r, o) {
                    var d, l = t.words[r];
                    return 1 === r.length ? "y" === r && n ? "једна година" : o || n ? l[0] : l[1] : (d = t.correctGrammaticalCase(e, l),
                        "yy" === r && n && "годину" === d ? e + " година" : e + " " + d)
                }
            };
            e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function () {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function () {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: t.translate,
                    dd: t.translate,
                    M: t.translate,
                    MM: t.translate,
                    y: t.translate,
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function (e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === b || 2 === b ? ":a" : ":e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "hh:mm A",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "siku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            }
                , n = {
                    "௧": "1",
                    "௨": "2",
                    "௩": "3",
                    "௪": "4",
                    "௫": "5",
                    "௬": "6",
                    "௭": "7",
                    "௮": "8",
                    "௯": "9",
                    "௦": "0"
                };
            e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    ss: "%d விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function (e) {
                    return e + "வது"
                },
                preparse: function (e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function (e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function (e) {
                    return e.replace(/\d/g, (function (e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function (e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    ss: "%d సెకన్లు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "segundu balun",
                    ss: "segundu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                0: "-ум",
                1: "-ум",
                2: "-юм",
                3: "-юм",
                4: "-ум",
                5: "-ум",
                6: "-ум",
                7: "-ум",
                8: "-ум",
                9: "-ум",
                10: "-ум",
                12: "-ум",
                13: "-ум",
                20: "-ум",
                30: "-юм",
                40: "-ум",
                50: "-ум",
                60: "-ум",
                70: "-ум",
                80: "-ум",
                90: "-ум",
                100: "-ум"
            };
            e.defineLocale("tg", {
                months: {
                    format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                    standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                },
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Имрӯз соати] LT",
                    nextDay: "[Фардо соати] LT",
                    lastDay: "[Дирӯз соати] LT",
                    nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                    lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "баъди %s",
                    past: "%s пеш",
                    s: "якчанд сония",
                    m: "як дақиқа",
                    mm: "%d дақиқа",
                    h: "як соат",
                    hh: "%d соат",
                    d: "як рӯз",
                    dd: "%d рӯз",
                    M: "як моҳ",
                    MM: "%d моҳ",
                    y: "як сол",
                    yy: "%d сол"
                },
                meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                ordinal: function (e) {
                    var a = e % 10
                        , b = e >= 100 ? 100 : null;
                    return e + (t[e] || t[a] || t[b])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function (input) {
                    return "หลังเที่ยง" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    w: "1 สัปดาห์",
                    ww: "%d สัปดาห์",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "'inji",
                5: "'inji",
                8: "'inji",
                70: "'inji",
                80: "'inji",
                2: "'nji",
                7: "'nji",
                20: "'nji",
                50: "'nji",
                3: "'ünji",
                4: "'ünji",
                100: "'ünji",
                6: "'njy",
                9: "'unjy",
                10: "'unjy",
                30: "'unjy",
                60: "'ynjy",
                90: "'ynjy"
            };
            e.defineLocale("tk", {
                months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
                monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
                weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
                weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
                weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün sagat] LT",
                    nextDay: "[ertir sagat] LT",
                    nextWeek: "[indiki] dddd [sagat] LT",
                    lastDay: "[düýn] LT",
                    lastWeek: "[geçen] dddd [sagat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s soň",
                    past: "%s öň",
                    s: "birnäçe sekunt",
                    m: "bir minut",
                    mm: "%d minut",
                    h: "bir sagat",
                    hh: "%d sagat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir aý",
                    MM: "%d aý",
                    y: "bir ýyl",
                    yy: "%d ýyl"
                },
                ordinal: function (e, n) {
                    switch (n) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (0 === e)
                                return e + "'unjy";
                            var a = e % 10
                                , b = e % 100 - a
                                , r = e >= 100 ? 100 : null;
                            return e + (t[a] || t[b] || t[r])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            function n(output) {
                var time = output;
                return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "leS" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "waQ" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "nem" : time + " pIq"
            }
            function r(output) {
                var time = output;
                return time = -1 !== output.indexOf("jaj") ? time.slice(0, -3) + "Hu’" : -1 !== output.indexOf("jar") ? time.slice(0, -3) + "wen" : -1 !== output.indexOf("DIS") ? time.slice(0, -3) + "ben" : time + " ret"
            }
            function o(e, t, n, r) {
                var o = d(e);
                switch (n) {
                    case "ss":
                        return o + " lup";
                    case "mm":
                        return o + " tup";
                    case "hh":
                        return o + " rep";
                    case "dd":
                        return o + " jaj";
                    case "MM":
                        return o + " jar";
                    case "yy":
                        return o + " DIS"
                }
            }
            function d(e) {
                var n = Math.floor(e % 1e3 / 100)
                    , r = Math.floor(e % 100 / 10)
                    , o = e % 10
                    , d = "";
                return n > 0 && (d += t[n] + "vatlh"),
                    r > 0 && (d += ("" !== d ? " " : "") + t[r] + "maH"),
                    o > 0 && (d += ("" !== d ? " " : "") + t[o]),
                    "" === d ? "pagh" : d
            }
            e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: n,
                    past: r,
                    s: "puS lup",
                    ss: o,
                    m: "wa’ tup",
                    mm: o,
                    h: "wa’ rep",
                    hh: o,
                    d: "wa’ jaj",
                    dd: o,
                    M: "wa’ jar",
                    MM: o,
                    y: "wa’ DIS",
                    yy: o
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                meridiem: function (e, t, n) {
                    return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
                },
                meridiemParse: /öö|ÖÖ|ös|ÖS/,
                isPM: function (input) {
                    return "ös" === input || "ÖS" === input
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    w: "bir hafta",
                    ww: "%d hafta",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinal: function (e, n) {
                    switch (n) {
                        case "d":
                        case "D":
                        case "Do":
                        case "DD":
                            return e;
                        default:
                            if (0 === e)
                                return e + "'ıncı";
                            var a = e % 10
                                , b = e % 100 - a
                                , r = e >= 100 ? 100 : null;
                            return e + (t[a] || t[b] || t[r])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t, n, r) {
                var o = {
                    s: ["viensas secunds", "'iensas secunds"],
                    ss: [e + " secunds", e + " secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", e + " ars"]
                };
                return r || t ? o[n][0] : o[n][1]
            }
            e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function (input) {
                    return "d'o" === input.toLowerCase()
                },
                meridiem: function (e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    ss: "%d ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("ug-cn", {
                months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                    LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                    LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                },
                meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function (e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                },
                calendar: {
                    sameDay: "[بۈگۈن سائەت] LT",
                    nextDay: "[ئەتە سائەت] LT",
                    nextWeek: "[كېلەركى] dddd [سائەت] LT",
                    lastDay: "[تۆنۈگۈن] LT",
                    lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s كېيىن",
                    past: "%s بۇرۇن",
                    s: "نەچچە سېكونت",
                    ss: "%d سېكونت",
                    m: "بىر مىنۇت",
                    mm: "%d مىنۇت",
                    h: "بىر سائەت",
                    hh: "%d سائەت",
                    d: "بىر كۈن",
                    dd: "%d كۈن",
                    M: "بىر ئاي",
                    MM: "%d ئاي",
                    y: "بىر يىل",
                    yy: "%d يىل"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "-كۈنى";
                        case "w":
                        case "W":
                            return e + "-ھەپتە";
                        default:
                            return e
                    }
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t({
                    ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[r], +e)
            }
            function r(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            }
            function o(e) {
                return function () {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: r,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: o("[Сьогодні "),
                    nextDay: o("[Завтра "),
                    lastDay: o("[Вчора "),
                    nextWeek: o("[У] dddd ["),
                    lastWeek: function () {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return o("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return o("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function (input) {
                    return /^(дня|вечора)$/.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
                , n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function (input) {
                    return "شام" === input
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    ss: "%d سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function (e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function (e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    ss: "%d фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function (input) {
                    return /^ch$/i.test(input)
                },
                meridiem: function (e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần trước lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    ss: "%d giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    w: "một tuần",
                    ww: "%d tuần",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function (e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    ss: "%d s~écóñ~ds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var b = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    ss: "aayá %d",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function (e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: function (e) {
                        return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                    },
                    lastDay: "[昨天]LT",
                    lastWeek: function (e) {
                        return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s后",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    w: "1 周",
                    ww: "%d 周",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1200 ? "上午" : 1200 === r ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("zh-mo", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "D/M/YYYY",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        !function (e) {
            "use strict";
            e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function (e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function (e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function (e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(236))
    }
    , function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(426)
            , o = n.n(r);
        function d(e, t) {
            return {
                render: function (e) {
                    return e("div", {
                        style: this.styles,
                        class: this.cssClasses
                    }, [e("canvas", {
                        attrs: {
                            id: this.chartId,
                            width: this.width,
                            height: this.height
                        },
                        ref: "canvas"
                    })])
                },
                props: {
                    chartId: {
                        default: e,
                        type: String
                    },
                    width: {
                        default: 400,
                        type: Number
                    },
                    height: {
                        default: 400,
                        type: Number
                    },
                    cssClasses: {
                        type: String,
                        default: ""
                    },
                    styles: {
                        type: Object
                    },
                    plugins: {
                        type: Array,
                        default: function () {
                            return []
                        }
                    }
                },
                data: function () {
                    return {
                        _chart: null,
                        _plugins: this.plugins
                    }
                },
                methods: {
                    addPlugin: function (e) {
                        this.$data._plugins.push(e)
                    },
                    generateLegend: function () {
                        if (this.$data._chart)
                            return this.$data._chart.generateLegend()
                    },
                    renderChart: function (data, e) {
                        if (this.$data._chart && this.$data._chart.destroy(),
                            !this.$refs.canvas)
                            throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");
                        this.$data._chart = new o.a(this.$refs.canvas.getContext("2d"), {
                            type: t,
                            data: data,
                            options: e,
                            plugins: this.$data._plugins
                        })
                    }
                },
                beforeDestroy: function () {
                    this.$data._chart && this.$data._chart.destroy()
                }
            }
        }
        d("bar-chart", "bar"),
            d("horizontalbar-chart", "horizontalBar"),
            d("doughnut-chart", "doughnut");
        var l = d("line-chart", "line")
            , _ = (d("pie-chart", "pie"),
                d("polar-chart", "polarArea"),
                d("radar-chart", "radar"),
                d("bubble-chart", "bubble"),
                d("scatter-chart", "scatter"),
            {
                extends: l,
                props: {
                    increase: {
                        type: Boolean,
                        required: !0
                    },
                    datasets: {
                        type: Array,
                        required: !0
                    }
                },
                data: function () {
                    return {
                        gradient: null,
                        gradient2: null
                    }
                },
                mounted: function () {
                    this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450),
                        this.gradient.addColorStop(.1119, "rgba(95, 223, 146, 0.5)"),
                        this.gradient.addColorStop(.1118, "rgba(95, 223, 146, 0.3)"),
                        this.gradient.addColorStop(.93, "rgba(196, 196, 196, 0)"),
                        this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450),
                        this.gradient2.addColorStop(0, "rgba(255, 189, 189, 0.5)"),
                        this.gradient2.addColorStop(.94, "rgba(196, 196, 196, 0)"),
                        this.renderChart({
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [{
                                label: "Data One",
                                borderColor: this.increase ? "#28C165" : "#F4574D",
                                borderWidth: 1,
                                backgroundColor: this.increase ? this.gradient : this.gradient2,
                                data: this.datasets
                            }]
                        }, {
                            responsive: !0,
                            maintainAspectRatio: !1,
                            legend: {
                                display: !1
                            },
                            elements: {
                                point: {
                                    radius: 0
                                }
                            },
                            tooltips: {
                                callbacks: {
                                    label: function (e) {
                                        return e.yLabel
                                    }
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        display: !1
                                    },
                                    gridLines: {
                                        display: !1,
                                        drawBorder: !1,
                                        color: "rgba(0, 0, 0, 0)"
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        display: !1
                                    },
                                    gridLines: {
                                        display: !1,
                                        drawBorder: !1,
                                        color: "rgba(0, 0, 0, 0)"
                                    }
                                }]
                            }
                        })
                }
            })
            , m = n(4)
            , component = Object(m.a)(_, undefined, undefined, !1, null, null, null);
        t.default = component.exports
    }
    , , , , , , , , , , , , , , function (e, t, n) {
        e.exports = function (e) {
            "use strict";
            function t(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                    t.exports
            }
            function n(e) {
                return e && e.default || e
            }
            e = e && e.hasOwnProperty("default") ? e.default : e;
            var r = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
                , o = t((function (e) {
                    var t = {};
                    for (var n in r)
                        r.hasOwnProperty(n) && (t[r[n]] = n);
                    var o = e.exports = {
                        rgb: {
                            channels: 3,
                            labels: "rgb"
                        },
                        hsl: {
                            channels: 3,
                            labels: "hsl"
                        },
                        hsv: {
                            channels: 3,
                            labels: "hsv"
                        },
                        hwb: {
                            channels: 3,
                            labels: "hwb"
                        },
                        cmyk: {
                            channels: 4,
                            labels: "cmyk"
                        },
                        xyz: {
                            channels: 3,
                            labels: "xyz"
                        },
                        lab: {
                            channels: 3,
                            labels: "lab"
                        },
                        lch: {
                            channels: 3,
                            labels: "lch"
                        },
                        hex: {
                            channels: 1,
                            labels: ["hex"]
                        },
                        keyword: {
                            channels: 1,
                            labels: ["keyword"]
                        },
                        ansi16: {
                            channels: 1,
                            labels: ["ansi16"]
                        },
                        ansi256: {
                            channels: 1,
                            labels: ["ansi256"]
                        },
                        hcg: {
                            channels: 3,
                            labels: ["h", "c", "g"]
                        },
                        apple: {
                            channels: 3,
                            labels: ["r16", "g16", "b16"]
                        },
                        gray: {
                            channels: 1,
                            labels: ["gray"]
                        }
                    };
                    for (var d in o)
                        if (o.hasOwnProperty(d)) {
                            if (!("channels" in o[d]))
                                throw new Error("missing channels property: " + d);
                            if (!("labels" in o[d]))
                                throw new Error("missing channel labels property: " + d);
                            if (o[d].labels.length !== o[d].channels)
                                throw new Error("channel and label counts mismatch: " + d);
                            var l = o[d].channels
                                , _ = o[d].labels;
                            delete o[d].channels,
                                delete o[d].labels,
                                Object.defineProperty(o[d], "channels", {
                                    value: l
                                }),
                                Object.defineProperty(o[d], "labels", {
                                    value: _
                                })
                        }
                    function m(e, t) {
                        return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2)
                    }
                    o.rgb.hsl = function (e) {
                        var t, n, r = e[0] / 255, g = e[1] / 255, b = e[2] / 255, o = Math.min(r, g, b), d = Math.max(r, g, b), l = d - o;
                        return d === o ? t = 0 : r === d ? t = (g - b) / l : g === d ? t = 2 + (b - r) / l : b === d && (t = 4 + (r - g) / l),
                            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
                            n = (o + d) / 2,
                            [t, 100 * (d === o ? 0 : n <= .5 ? l / (d + o) : l / (2 - d - o)), 100 * n]
                    }
                        ,
                        o.rgb.hsv = function (e) {
                            var t, n, r, o, s, d = e[0] / 255, g = e[1] / 255, b = e[2] / 255, l = Math.max(d, g, b), _ = l - Math.min(d, g, b), m = function (e) {
                                return (l - e) / 6 / _ + .5
                            };
                            return 0 === _ ? o = s = 0 : (s = _ / l,
                                t = m(d),
                                n = m(g),
                                r = m(b),
                                d === l ? o = r - n : g === l ? o = 1 / 3 + t - r : b === l && (o = 2 / 3 + n - t),
                                o < 0 ? o += 1 : o > 1 && (o -= 1)),
                                [360 * o, 100 * s, 100 * l]
                        }
                        ,
                        o.rgb.hwb = function (e) {
                            var t = e[0]
                                , g = e[1]
                                , b = e[2];
                            return [o.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(g, b)) * 100, 100 * (b = 1 - 1 / 255 * Math.max(t, Math.max(g, b)))]
                        }
                        ,
                        o.rgb.cmyk = function (e) {
                            var t, n = e[0] / 255, g = e[1] / 255, b = e[2] / 255;
                            return [100 * ((1 - n - (t = Math.min(1 - n, 1 - g, 1 - b))) / (1 - t) || 0), 100 * ((1 - g - t) / (1 - t) || 0), 100 * ((1 - b - t) / (1 - t) || 0), 100 * t]
                        }
                        ,
                        o.rgb.keyword = function (e) {
                            var n = t[e];
                            if (n)
                                return n;
                            var o, d = 1 / 0;
                            for (var l in r)
                                if (r.hasOwnProperty(l)) {
                                    var _ = m(e, r[l]);
                                    _ < d && (d = _,
                                        o = l)
                                }
                            return o
                        }
                        ,
                        o.keyword.rgb = function (e) {
                            return r[e]
                        }
                        ,
                        o.rgb.xyz = function (e) {
                            var t = e[0] / 255
                                , g = e[1] / 255
                                , b = e[2] / 255;
                            return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (g = g > .04045 ? Math.pow((g + .055) / 1.055, 2.4) : g / 12.92) + .1805 * (b = b > .04045 ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92)), 100 * (.2126 * t + .7152 * g + .0722 * b), 100 * (.0193 * t + .1192 * g + .9505 * b)]
                        }
                        ,
                        o.rgb.lab = function (e) {
                            var t = o.rgb.xyz(e)
                                , n = t[0]
                                , r = t[1]
                                , d = t[2];
                            return r /= 100,
                                d /= 108.883,
                                n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116,
                                [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (d = d > .008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116))]
                        }
                        ,
                        o.hsl.rgb = function (e) {
                            var t, n, r, o, d, l = e[0] / 360, s = e[1] / 100, _ = e[2] / 100;
                            if (0 === s)
                                return [d = 255 * _, d, d];
                            t = 2 * _ - (n = _ < .5 ? _ * (1 + s) : _ + s - _ * s),
                                o = [0, 0, 0];
                            for (var i = 0; i < 3; i++)
                                (r = l + 1 / 3 * -(i - 1)) < 0 && r++,
                                    r > 1 && r--,
                                    d = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t,
                                    o[i] = 255 * d;
                            return o
                        }
                        ,
                        o.hsl.hsv = function (e) {
                            var t = e[0]
                                , s = e[1] / 100
                                , n = e[2] / 100
                                , r = s
                                , o = Math.max(n, .01);
                            return s *= (n *= 2) <= 1 ? n : 2 - n,
                                r *= o <= 1 ? o : 2 - o,
                                [t, 100 * (0 === n ? 2 * r / (o + r) : 2 * s / (n + s)), (n + s) / 2 * 100]
                        }
                        ,
                        o.hsv.rgb = function (e) {
                            var t = e[0] / 60
                                , s = e[1] / 100
                                , n = e[2] / 100
                                , r = Math.floor(t) % 6
                                , o = t - Math.floor(t)
                                , p = 255 * n * (1 - s)
                                , q = 255 * n * (1 - s * o)
                                , d = 255 * n * (1 - s * (1 - o));
                            switch (n *= 255,
                            r) {
                                case 0:
                                    return [n, d, p];
                                case 1:
                                    return [q, n, p];
                                case 2:
                                    return [p, n, d];
                                case 3:
                                    return [p, q, n];
                                case 4:
                                    return [d, p, n];
                                case 5:
                                    return [n, p, q]
                            }
                        }
                        ,
                        o.hsv.hsl = function (e) {
                            var t, n, r, o = e[0], s = e[1] / 100, d = e[2] / 100, l = Math.max(d, .01);
                            return r = (2 - s) * d,
                                n = s * l,
                                [o, 100 * (n = (n /= (t = (2 - s) * l) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
                        }
                        ,
                        o.hwb.rgb = function (e) {
                            var i, t, n, r, o, g, b, d = e[0] / 360, l = e[1] / 100, _ = e[2] / 100, m = l + _;
                            switch (m > 1 && (l /= m,
                                _ /= m),
                            n = 6 * d - (i = Math.floor(6 * d)),
                            0 != (1 & i) && (n = 1 - n),
                            r = l + n * ((t = 1 - _) - l),
                            i) {
                                default:
                                case 6:
                                case 0:
                                    o = t,
                                        g = r,
                                        b = l;
                                    break;
                                case 1:
                                    o = r,
                                        g = t,
                                        b = l;
                                    break;
                                case 2:
                                    o = l,
                                        g = t,
                                        b = r;
                                    break;
                                case 3:
                                    o = l,
                                        g = r,
                                        b = t;
                                    break;
                                case 4:
                                    o = r,
                                        g = l,
                                        b = t;
                                    break;
                                case 5:
                                    o = t,
                                        g = l,
                                        b = r
                            }
                            return [255 * o, 255 * g, 255 * b]
                        }
                        ,
                        o.cmyk.rgb = function (e) {
                            var t = e[0] / 100
                                , n = e[1] / 100
                                , r = e[2] / 100
                                , o = e[3] / 100;
                            return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
                        }
                        ,
                        o.xyz.rgb = function (e) {
                            var t, g, b, n = e[0] / 100, r = e[1] / 100, o = e[2] / 100;
                            return g = -.9689 * n + 1.8758 * r + .0415 * o,
                                b = .0557 * n + -.204 * r + 1.057 * o,
                                t = (t = 3.2406 * n + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t,
                                g = g > .0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - .055 : 12.92 * g,
                                b = b > .0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - .055 : 12.92 * b,
                                [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (g = Math.min(Math.max(0, g), 1)), 255 * (b = Math.min(Math.max(0, b), 1))]
                        }
                        ,
                        o.xyz.lab = function (e) {
                            var t = e[0]
                                , n = e[1]
                                , r = e[2];
                            return n /= 100,
                                r /= 108.883,
                                t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116,
                                [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                        }
                        ,
                        o.lab.xyz = function (e) {
                            var t, n, r, o = e[0];
                            t = e[1] / 500 + (n = (o + 16) / 116),
                                r = n - e[2] / 200;
                            var d = Math.pow(n, 3)
                                , l = Math.pow(t, 3)
                                , _ = Math.pow(r, 3);
                            return n = d > .008856 ? d : (n - 16 / 116) / 7.787,
                                t = l > .008856 ? l : (t - 16 / 116) / 7.787,
                                r = _ > .008856 ? _ : (r - 16 / 116) / 7.787,
                                [t *= 95.047, n *= 100, r *= 108.883]
                        }
                        ,
                        o.lab.lch = function (e) {
                            var t, n = e[0], a = e[1], b = e[2];
                            return (t = 360 * Math.atan2(b, a) / 2 / Math.PI) < 0 && (t += 360),
                                [n, Math.sqrt(a * a + b * b), t]
                        }
                        ,
                        o.lch.lab = function (e) {
                            var hr, t = e[0], n = e[1];
                            return hr = e[2] / 360 * 2 * Math.PI,
                                [t, n * Math.cos(hr), n * Math.sin(hr)]
                        }
                        ,
                        o.rgb.ansi16 = function (e) {
                            var t = e[0]
                                , g = e[1]
                                , b = e[2]
                                , n = 1 in arguments ? arguments[1] : o.rgb.hsv(e)[2];
                            if (0 === (n = Math.round(n / 50)))
                                return 30;
                            var r = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(t / 255));
                            return 2 === n && (r += 60),
                                r
                        }
                        ,
                        o.hsv.ansi16 = function (e) {
                            return o.rgb.ansi16(o.hsv.rgb(e), e[2])
                        }
                        ,
                        o.rgb.ansi256 = function (e) {
                            var t = e[0]
                                , g = e[1]
                                , b = e[2];
                            return t === g && g === b ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5)
                        }
                        ,
                        o.ansi16.rgb = function (e) {
                            var t = e % 10;
                            if (0 === t || 7 === t)
                                return e > 50 && (t += 3.5),
                                    [t = t / 10.5 * 255, t, t];
                            var n = .5 * (1 + ~~(e > 50));
                            return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
                        }
                        ,
                        o.ansi256.rgb = function (e) {
                            if (e >= 232) {
                                var t = 10 * (e - 232) + 8;
                                return [t, t, t]
                            }
                            var n;
                            return e -= 16,
                                [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
                        }
                        ,
                        o.rgb.hex = function (e) {
                            var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
                            return "000000".substring(t.length) + t
                        }
                        ,
                        o.hex.rgb = function (e) {
                            var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                            if (!t)
                                return [0, 0, 0];
                            var n = t[0];
                            3 === t[0].length && (n = n.split("").map((function (e) {
                                return e + e
                            }
                            )).join(""));
                            var r = parseInt(n, 16);
                            return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                        }
                        ,
                        o.rgb.hcg = function (e) {
                            var t, n = e[0] / 255, g = e[1] / 255, b = e[2] / 255, r = Math.max(Math.max(n, g), b), o = Math.min(Math.min(n, g), b), d = r - o;
                            return t = d <= 0 ? 0 : r === n ? (g - b) / d % 6 : r === g ? 2 + (b - n) / d : 4 + (n - g) / d + 4,
                                t /= 6,
                                [360 * (t %= 1), 100 * d, 100 * (d < 1 ? o / (1 - d) : 0)]
                        }
                        ,
                        o.hsl.hcg = function (e) {
                            var s = e[1] / 100
                                , t = e[2] / 100
                                , n = 1
                                , r = 0;
                            return (n = t < .5 ? 2 * s * t : 2 * s * (1 - t)) < 1 && (r = (t - .5 * n) / (1 - n)),
                                [e[0], 100 * n, 100 * r]
                        }
                        ,
                        o.hsv.hcg = function (e) {
                            var s = e[1] / 100
                                , t = e[2] / 100
                                , n = s * t
                                , r = 0;
                            return n < 1 && (r = (t - n) / (1 - n)),
                                [e[0], 100 * n, 100 * r]
                        }
                        ,
                        o.hcg.rgb = function (e) {
                            var t = e[0] / 360
                                , n = e[1] / 100
                                , g = e[2] / 100;
                            if (0 === n)
                                return [255 * g, 255 * g, 255 * g];
                            var r = [0, 0, 0]
                                , o = t % 1 * 6
                                , d = o % 1
                                , l = 1 - d
                                , _ = 0;
                            switch (Math.floor(o)) {
                                case 0:
                                    r[0] = 1,
                                        r[1] = d,
                                        r[2] = 0;
                                    break;
                                case 1:
                                    r[0] = l,
                                        r[1] = 1,
                                        r[2] = 0;
                                    break;
                                case 2:
                                    r[0] = 0,
                                        r[1] = 1,
                                        r[2] = d;
                                    break;
                                case 3:
                                    r[0] = 0,
                                        r[1] = l,
                                        r[2] = 1;
                                    break;
                                case 4:
                                    r[0] = d,
                                        r[1] = 0,
                                        r[2] = 1;
                                    break;
                                default:
                                    r[0] = 1,
                                        r[1] = 0,
                                        r[2] = l
                            }
                            return _ = (1 - n) * g,
                                [255 * (n * r[0] + _), 255 * (n * r[1] + _), 255 * (n * r[2] + _)]
                        }
                        ,
                        o.hcg.hsv = function (e) {
                            var t = e[1] / 100
                                , n = t + e[2] / 100 * (1 - t)
                                , r = 0;
                            return n > 0 && (r = t / n),
                                [e[0], 100 * r, 100 * n]
                        }
                        ,
                        o.hcg.hsl = function (e) {
                            var t = e[1] / 100
                                , n = e[2] / 100 * (1 - t) + .5 * t
                                , s = 0;
                            return n > 0 && n < .5 ? s = t / (2 * n) : n >= .5 && n < 1 && (s = t / (2 * (1 - n))),
                                [e[0], 100 * s, 100 * n]
                        }
                        ,
                        o.hcg.hwb = function (e) {
                            var t = e[1] / 100
                                , n = t + e[2] / 100 * (1 - t);
                            return [e[0], 100 * (n - t), 100 * (1 - n)]
                        }
                        ,
                        o.hwb.hcg = function (e) {
                            var t = e[1] / 100
                                , n = 1 - e[2] / 100
                                , r = n - t
                                , g = 0;
                            return r < 1 && (g = (n - r) / (1 - r)),
                                [e[0], 100 * r, 100 * g]
                        }
                        ,
                        o.apple.rgb = function (e) {
                            return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
                        }
                        ,
                        o.rgb.apple = function (e) {
                            return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
                        }
                        ,
                        o.gray.rgb = function (e) {
                            return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
                        }
                        ,
                        o.gray.hsl = o.gray.hsv = function (e) {
                            return [0, 0, e[0]]
                        }
                        ,
                        o.gray.hwb = function (e) {
                            return [0, 100, e[0]]
                        }
                        ,
                        o.gray.cmyk = function (e) {
                            return [0, 0, 0, e[0]]
                        }
                        ,
                        o.gray.lab = function (e) {
                            return [e[0], 0, 0]
                        }
                        ,
                        o.gray.hex = function (e) {
                            var t = 255 & Math.round(e[0] / 100 * 255)
                                , n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                            return "000000".substring(n.length) + n
                        }
                        ,
                        o.rgb.gray = function (e) {
                            return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
                        }
                }
                ));
            function d() {
                for (var e = {}, t = Object.keys(o), n = t.length, i = 0; i < n; i++)
                    e[t[i]] = {
                        distance: -1,
                        parent: null
                    };
                return e
            }
            function l(e) {
                var t = d()
                    , n = [e];
                for (t[e].distance = 0; n.length;)
                    for (var r = n.pop(), l = Object.keys(o[r]), _ = l.length, i = 0; i < _; i++) {
                        var m = l[i]
                            , c = t[m];
                        -1 === c.distance && (c.distance = t[r].distance + 1,
                            c.parent = r,
                            n.unshift(m))
                    }
                return t
            }
            function link(e, t) {
                return function (n) {
                    return t(e(n))
                }
            }
            function _(e, t) {
                for (var path = [t[e].parent, e], n = o[t[e].parent][e], r = t[e].parent; t[r].parent;)
                    path.unshift(t[r].parent),
                        n = link(o[t[r].parent][r], n),
                        r = t[r].parent;
                return n.conversion = path,
                    n
            }
            o.rgb,
                o.hsl,
                o.hsv,
                o.hwb,
                o.cmyk,
                o.xyz,
                o.lab,
                o.lch,
                o.hex,
                o.keyword,
                o.ansi16,
                o.ansi256,
                o.hcg,
                o.apple,
                o.gray;
            var m = function (e) {
                for (var t = l(e), n = {}, r = Object.keys(t), o = r.length, i = 0; i < o; i++) {
                    var d = r[i];
                    null !== t[d].parent && (n[d] = _(d, t))
                }
                return n
            }
                , c = {};
            function h(e) {
                var t = function (t) {
                    return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)),
                        e(t))
                };
                return "conversion" in e && (t.conversion = e.conversion),
                    t
            }
            function f(e) {
                var t = function (t) {
                    if (null == t)
                        return t;
                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                    var n = e(t);
                    if ("object" == typeof n)
                        for (var r = n.length, i = 0; i < r; i++)
                            n[i] = Math.round(n[i]);
                    return n
                };
                return "conversion" in e && (t.conversion = e.conversion),
                    t
            }
            Object.keys(o).forEach((function (e) {
                c[e] = {},
                    Object.defineProperty(c[e], "channels", {
                        value: o[e].channels
                    }),
                    Object.defineProperty(c[e], "labels", {
                        value: o[e].labels
                    });
                var t = m(e);
                Object.keys(t).forEach((function (n) {
                    var r = t[n];
                    c[e][n] = f(r),
                        c[e][n].raw = h(r)
                }
                ))
            }
            ));
            var M = c
                , y = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                }
                , L = {
                    getRgba: Y,
                    getHsla: v,
                    getRgb: D,
                    getHsl: w,
                    getHwb: k,
                    getAlpha: T,
                    hexString: x,
                    rgbString: S,
                    rgbaString: H,
                    percentString: j,
                    percentaString: P,
                    hslString: O,
                    hslaString: A,
                    hwbString: F,
                    keyword: W
                };
            function Y(e) {
                if (e) {
                    var abbr = /^#([a-fA-F0-9]{3,4})$/i
                        , t = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i
                        , n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                        , r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                        , o = /(\w+)/
                        , d = [0, 0, 0]
                        , a = 1
                        , l = e.match(abbr)
                        , _ = "";
                    if (l) {
                        _ = (l = l[1])[3];
                        for (var i = 0; i < d.length; i++)
                            d[i] = parseInt(l[i] + l[i], 16);
                        _ && (a = Math.round(parseInt(_ + _, 16) / 255 * 100) / 100)
                    } else if (l = e.match(t)) {
                        for (_ = l[2],
                            l = l[1],
                            i = 0; i < d.length; i++)
                            d[i] = parseInt(l.slice(2 * i, 2 * i + 2), 16);
                        _ && (a = Math.round(parseInt(_, 16) / 255 * 100) / 100)
                    } else if (l = e.match(n)) {
                        for (i = 0; i < d.length; i++)
                            d[i] = parseInt(l[i + 1]);
                        a = parseFloat(l[4])
                    } else if (l = e.match(r)) {
                        for (i = 0; i < d.length; i++)
                            d[i] = Math.round(2.55 * parseFloat(l[i + 1]));
                        a = parseFloat(l[4])
                    } else if (l = e.match(o)) {
                        if ("transparent" == l[1])
                            return [0, 0, 0, 0];
                        if (!(d = y[l[1]]))
                            return
                    }
                    for (i = 0; i < d.length; i++)
                        d[i] = C(d[i], 0, 255);
                    return a = a || 0 == a ? C(a, 0, 1) : 1,
                        d[3] = a,
                        d
                }
            }
            function v(e) {
                if (e) {
                    var t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                        , n = e.match(t);
                    if (n) {
                        var r = parseFloat(n[4]);
                        return [C(parseInt(n[1]), 0, 360), C(parseFloat(n[2]), 0, 100), C(parseFloat(n[3]), 0, 100), C(isNaN(r) ? 1 : r, 0, 1)]
                    }
                }
            }
            function k(e) {
                if (e) {
                    var t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                        , n = e.match(t);
                    if (n) {
                        var r = parseFloat(n[4]);
                        return [C(parseInt(n[1]), 0, 360), C(parseFloat(n[2]), 0, 100), C(parseFloat(n[3]), 0, 100), C(isNaN(r) ? 1 : r, 0, 1)]
                    }
                }
            }
            function D(e) {
                var t = Y(e);
                return t && t.slice(0, 3)
            }
            function w(e) {
                var t = v(e);
                return t && t.slice(0, 3)
            }
            function T(e) {
                var t = Y(e);
                return t || (t = v(e)) || (t = k(e)) ? t[3] : void 0
            }
            function x(e, a) {
                return a = void 0 !== a && 3 === e.length ? a : e[3],
                    "#" + E(e[0]) + E(e[1]) + E(e[2]) + (a >= 0 && a < 1 ? E(Math.round(255 * a)) : "")
            }
            function S(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? H(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
            }
            function H(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
                    "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
            }
            function j(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? P(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
            }
            function P(e, t) {
                return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
            }
            function O(e, t) {
                return t < 1 || e[3] && e[3] < 1 ? A(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            }
            function A(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
                    "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
            }
            function F(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
                    "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
            }
            function W(e) {
                return z[e.slice(0, 3)]
            }
            function C(e, t, n) {
                return Math.min(Math.max(t, e), n)
            }
            function E(e) {
                var t = e.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }
            var z = {};
            for (var I in y)
                z[y[I]] = I;
            var N = function (e) {
                return e instanceof N ? e : this instanceof N ? (this.valid = !1,
                    this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    },
                    void ("string" == typeof e ? (t = L.getRgba(e)) ? this.setValues("rgb", t) : (t = L.getHsla(e)) ? this.setValues("hsl", t) : (t = L.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new N(e);
                var t
            };
            N.prototype = {
                isValid: function () {
                    return this.valid
                },
                rgb: function () {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function () {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function () {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function () {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function () {
                    return this.values.rgb
                },
                hslArray: function () {
                    return this.values.hsl
                },
                hsvArray: function () {
                    return this.values.hsv
                },
                hwbArray: function () {
                    var e = this.values;
                    return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                },
                cmykArray: function () {
                    return this.values.cmyk
                },
                rgbaArray: function () {
                    var e = this.values;
                    return e.rgb.concat([e.alpha])
                },
                hslaArray: function () {
                    var e = this.values;
                    return e.hsl.concat([e.alpha])
                },
                alpha: function (e) {
                    return void 0 === e ? this.values.alpha : (this.setValues("alpha", e),
                        this)
                },
                red: function (e) {
                    return this.setChannel("rgb", 0, e)
                },
                green: function (e) {
                    return this.setChannel("rgb", 1, e)
                },
                blue: function (e) {
                    return this.setChannel("rgb", 2, e)
                },
                hue: function (e) {
                    return e && (e = (e %= 360) < 0 ? 360 + e : e),
                        this.setChannel("hsl", 0, e)
                },
                saturation: function (e) {
                    return this.setChannel("hsl", 1, e)
                },
                lightness: function (e) {
                    return this.setChannel("hsl", 2, e)
                },
                saturationv: function (e) {
                    return this.setChannel("hsv", 1, e)
                },
                whiteness: function (e) {
                    return this.setChannel("hwb", 1, e)
                },
                blackness: function (e) {
                    return this.setChannel("hwb", 2, e)
                },
                value: function (e) {
                    return this.setChannel("hsv", 2, e)
                },
                cyan: function (e) {
                    return this.setChannel("cmyk", 0, e)
                },
                magenta: function (e) {
                    return this.setChannel("cmyk", 1, e)
                },
                yellow: function (e) {
                    return this.setChannel("cmyk", 2, e)
                },
                black: function (e) {
                    return this.setChannel("cmyk", 3, e)
                },
                hexString: function () {
                    return L.hexString(this.values.rgb)
                },
                rgbString: function () {
                    return L.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function () {
                    return L.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function () {
                    return L.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function () {
                    return L.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function () {
                    return L.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function () {
                    return L.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function () {
                    return L.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function () {
                    var e = this.values.rgb;
                    return e[0] << 16 | e[1] << 8 | e[2]
                },
                luminosity: function () {
                    for (var e = this.values.rgb, t = [], i = 0; i < e.length; i++) {
                        var n = e[i] / 255;
                        t[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                },
                contrast: function (e) {
                    var t = this.luminosity()
                        , n = e.luminosity();
                    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
                },
                level: function (e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                },
                dark: function () {
                    var e = this.values.rgb;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                },
                light: function () {
                    return !this.dark()
                },
                negate: function () {
                    for (var e = [], i = 0; i < 3; i++)
                        e[i] = 255 - this.values.rgb[i];
                    return this.setValues("rgb", e),
                        this
                },
                lighten: function (e) {
                    var t = this.values.hsl;
                    return t[2] += t[2] * e,
                        this.setValues("hsl", t),
                        this
                },
                darken: function (e) {
                    var t = this.values.hsl;
                    return t[2] -= t[2] * e,
                        this.setValues("hsl", t),
                        this
                },
                saturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] += t[1] * e,
                        this.setValues("hsl", t),
                        this
                },
                desaturate: function (e) {
                    var t = this.values.hsl;
                    return t[1] -= t[1] * e,
                        this.setValues("hsl", t),
                        this
                },
                whiten: function (e) {
                    var t = this.values.hwb;
                    return t[1] += t[1] * e,
                        this.setValues("hwb", t),
                        this
                },
                blacken: function (e) {
                    var t = this.values.hwb;
                    return t[2] += t[2] * e,
                        this.setValues("hwb", t),
                        this
                },
                greyscale: function () {
                    var e = this.values.rgb
                        , t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return this.setValues("rgb", [t, t, t]),
                        this
                },
                clearer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t - t * e),
                        this
                },
                opaquer: function (e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t + t * e),
                        this
                },
                rotate: function (e) {
                    var t = this.values.hsl
                        , n = (t[0] + e) % 360;
                    return t[0] = n < 0 ? 360 + n : n,
                        this.setValues("hsl", t),
                        this
                },
                mix: function (e, t) {
                    var n = this
                        , r = e
                        , p = void 0 === t ? .5 : t
                        , o = 2 * p - 1
                        , a = n.alpha() - r.alpha()
                        , d = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2
                        , l = 1 - d;
                    return this.rgb(d * n.red() + l * r.red(), d * n.green() + l * r.green(), d * n.blue() + l * r.blue()).alpha(n.alpha() * p + r.alpha() * (1 - p))
                },
                toJSON: function () {
                    return this.rgb()
                },
                clone: function () {
                    var e, t, n = new N, source = this.values, r = n.values;
                    for (var o in source)
                        source.hasOwnProperty(o) && (e = source[o],
                            "[object Array]" === (t = {}.toString.call(e)) ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
                    return n
                }
            },
                N.prototype.spaces = {
                    rgb: ["red", "green", "blue"],
                    hsl: ["hue", "saturation", "lightness"],
                    hsv: ["hue", "saturation", "value"],
                    hwb: ["hue", "whiteness", "blackness"],
                    cmyk: ["cyan", "magenta", "yellow", "black"]
                },
                N.prototype.maxes = {
                    rgb: [255, 255, 255],
                    hsl: [360, 100, 100],
                    hsv: [360, 100, 100],
                    hwb: [360, 100, 100],
                    cmyk: [100, 100, 100, 100]
                },
                N.prototype.getValues = function (e) {
                    for (var t = this.values, n = {}, i = 0; i < e.length; i++)
                        n[e.charAt(i)] = t[e][i];
                    return 1 !== t.alpha && (n.a = t.alpha),
                        n
                }
                ,
                N.prototype.setValues = function (e, t) {
                    var i, n, r = this.values, o = this.spaces, d = this.maxes, l = 1;
                    if (this.valid = !0,
                        "alpha" === e)
                        l = t;
                    else if (t.length)
                        r[e] = t.slice(0, e.length),
                            l = t[e.length];
                    else if (void 0 !== t[e.charAt(0)]) {
                        for (i = 0; i < e.length; i++)
                            r[e][i] = t[e.charAt(i)];
                        l = t.a
                    } else if (void 0 !== t[o[e][0]]) {
                        var _ = o[e];
                        for (i = 0; i < e.length; i++)
                            r[e][i] = t[_[i]];
                        l = t.alpha
                    }
                    if (r.alpha = Math.max(0, Math.min(1, void 0 === l ? r.alpha : l)),
                        "alpha" === e)
                        return !1;
                    for (i = 0; i < e.length; i++)
                        n = Math.max(0, Math.min(d[e][i], r[e][i])),
                            r[e][i] = Math.round(n);
                    for (var m in o)
                        m !== e && (r[m] = M[e][m](r[e]));
                    return !0
                }
                ,
                N.prototype.setSpace = function (e, t) {
                    var n = t[0];
                    return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)),
                        this.setValues(e, n),
                        this)
                }
                ,
                N.prototype.setChannel = function (e, t, n) {
                    var r = this.values[e];
                    return void 0 === n ? r[t] : (n === r[t] || (r[t] = n,
                        this.setValues(e, r)),
                        this)
                }
                ,
                "undefined" != typeof window && (window.Color = N);
            var R = N;
            function V(e) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(e)
            }
            var B, J = {
                noop: function () { },
                uid: (B = 0,
                    function () {
                        return B++
                    }
                ),
                isNullOrUndef: function (e) {
                    return null == e
                },
                isArray: function (e) {
                    if (Array.isArray && Array.isArray(e))
                        return !0;
                    var t = Object.prototype.toString.call(e);
                    return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
                },
                isObject: function (e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                },
                isFinite: function (e) {
                    return ("number" == typeof e || e instanceof Number) && isFinite(e)
                },
                valueOrDefault: function (e, t) {
                    return void 0 === e ? t : e
                },
                valueAtIndexOrDefault: function (e, t, n) {
                    return J.valueOrDefault(J.isArray(e) ? e[t] : e, n)
                },
                callback: function (e, t, n) {
                    if (e && "function" == typeof e.call)
                        return e.apply(n, t)
                },
                each: function (e, t, n, r) {
                    var i, o, d;
                    if (J.isArray(e))
                        if (o = e.length,
                            r)
                            for (i = o - 1; i >= 0; i--)
                                t.call(n, e[i], i);
                        else
                            for (i = 0; i < o; i++)
                                t.call(n, e[i], i);
                    else if (J.isObject(e))
                        for (o = (d = Object.keys(e)).length,
                            i = 0; i < o; i++)
                            t.call(n, e[d[i]], d[i])
                },
                arrayEquals: function (e, t) {
                    var i, n, r, o;
                    if (!e || !t || e.length !== t.length)
                        return !1;
                    for (i = 0,
                        n = e.length; i < n; ++i)
                        if (r = e[i],
                            o = t[i],
                            r instanceof Array && o instanceof Array) {
                            if (!J.arrayEquals(r, o))
                                return !1
                        } else if (r !== o)
                            return !1;
                    return !0
                },
                clone: function (source) {
                    if (J.isArray(source))
                        return source.map(J.clone);
                    if (J.isObject(source)) {
                        for (var e = Object.create(source), t = Object.keys(source), n = t.length, r = 0; r < n; ++r)
                            e[t[r]] = J.clone(source[t[r]]);
                        return e
                    }
                    return source
                },
                _merger: function (e, t, source, n) {
                    if (V(e)) {
                        var r = t[e]
                            , o = source[e];
                        J.isObject(r) && J.isObject(o) ? J.merge(r, o, n) : t[e] = J.clone(o)
                    }
                },
                _mergerIf: function (e, t, source) {
                    if (V(e)) {
                        var n = t[e]
                            , r = source[e];
                        J.isObject(n) && J.isObject(r) ? J.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = J.clone(r))
                    }
                },
                merge: function (e, source, t) {
                    var n, i, r, o, d, l = J.isArray(source) ? source : [source], _ = l.length;
                    if (!J.isObject(e))
                        return e;
                    for (n = (t = t || {}).merger || J._merger,
                        i = 0; i < _; ++i)
                        if (source = l[i],
                            J.isObject(source))
                            for (d = 0,
                                o = (r = Object.keys(source)).length; d < o; ++d)
                                n(r[d], e, source, t);
                    return e
                },
                mergeIf: function (e, source) {
                    return J.merge(e, source, {
                        merger: J._mergerIf
                    })
                },
                extend: Object.assign || function (e) {
                    return J.merge(e, [].slice.call(arguments, 1), {
                        merger: function (e, t, n) {
                            t[e] = n[e]
                        }
                    })
                }
                ,
                inherits: function (e) {
                    var t = this
                        , n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
                            return t.apply(this, arguments)
                        }
                        , r = function () {
                            this.constructor = n
                        };
                    return r.prototype = t.prototype,
                        n.prototype = new r,
                        n.extend = J.inherits,
                        e && J.extend(n.prototype, e),
                        n.__super__ = t.prototype,
                        n
                },
                _deprecated: function (e, t, n, r) {
                    void 0 !== t && console.warn(e + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
                }
            }, U = J;
            J.callCallback = J.callback,
                J.indexOf = function (e, t, n) {
                    return Array.prototype.indexOf.call(e, t, n)
                }
                ,
                J.getValueOrDefault = J.valueOrDefault,
                J.getValueAtIndexOrDefault = J.valueAtIndexOrDefault;
            var G = {
                linear: function (e) {
                    return e
                },
                easeInQuad: function (e) {
                    return e * e
                },
                easeOutQuad: function (e) {
                    return -e * (e - 2)
                },
                easeInOutQuad: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                },
                easeInCubic: function (e) {
                    return e * e * e
                },
                easeOutCubic: function (e) {
                    return (e -= 1) * e * e + 1
                },
                easeInOutCubic: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                },
                easeInQuart: function (e) {
                    return e * e * e * e
                },
                easeOutQuart: function (e) {
                    return -((e -= 1) * e * e * e - 1)
                },
                easeInOutQuart: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                },
                easeInQuint: function (e) {
                    return e * e * e * e * e
                },
                easeOutQuint: function (e) {
                    return (e -= 1) * e * e * e * e + 1
                },
                easeInOutQuint: function (e) {
                    return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                },
                easeInSine: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2))
                },
                easeOutSine: function (e) {
                    return Math.sin(e * (Math.PI / 2))
                },
                easeInOutSine: function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                },
                easeInExpo: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                },
                easeOutExpo: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                easeInOutExpo: function (e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                },
                easeInCirc: function (e) {
                    return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                },
                easeOutCirc: function (e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                },
                easeInOutCirc: function (e) {
                    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                },
                easeInElastic: function (e) {
                    var s = 1.70158
                        , p = 0
                        , a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (p || (p = .3),
                        a < 1 ? (a = 1,
                            s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a),
                        -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - s) * (2 * Math.PI) / p))
                },
                easeOutElastic: function (e) {
                    var s = 1.70158
                        , p = 0
                        , a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (p || (p = .3),
                        a < 1 ? (a = 1,
                            s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a),
                        a * Math.pow(2, -10 * e) * Math.sin((e - s) * (2 * Math.PI) / p) + 1)
                },
                easeInOutElastic: function (e) {
                    var s = 1.70158
                        , p = 0
                        , a = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (p || (p = .45),
                        a < 1 ? (a = 1,
                            s = p / 4) : s = p / (2 * Math.PI) * Math.asin(1 / a),
                        e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - s) * (2 * Math.PI) / p) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - s) * (2 * Math.PI) / p) * .5 + 1)
                },
                easeInBack: function (e) {
                    var s = 1.70158;
                    return e * e * ((s + 1) * e - s)
                },
                easeOutBack: function (e) {
                    var s = 1.70158;
                    return (e -= 1) * e * ((s + 1) * e + s) + 1
                },
                easeInOutBack: function (e) {
                    var s = 1.70158;
                    return (e /= .5) < 1 ? e * e * ((1 + (s *= 1.525)) * e - s) * .5 : .5 * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2)
                },
                easeInBounce: function (e) {
                    return 1 - G.easeOutBounce(1 - e)
                },
                easeOutBounce: function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                easeInOutBounce: function (e) {
                    return e < .5 ? .5 * G.easeInBounce(2 * e) : .5 * G.easeOutBounce(2 * e - 1) + .5
                }
            }
                , $ = {
                    effects: G
                };
            U.easingEffects = G;
            var K = Math.PI
                , Z = K / 180
                , X = 2 * K
                , Q = K / 2
                , ee = K / 4
                , te = 2 * K / 3
                , ae = {
                    clear: function (e) {
                        e.ctx.clearRect(0, 0, e.width, e.height)
                    },
                    roundedRect: function (e, t, n, r, o, d) {
                        if (d) {
                            var l = Math.min(d, o / 2, r / 2)
                                , _ = t + l
                                , m = n + l
                                , c = t + r - l
                                , h = n + o - l;
                            e.moveTo(t, m),
                                _ < c && m < h ? (e.arc(_, m, l, -K, -Q),
                                    e.arc(c, m, l, -Q, 0),
                                    e.arc(c, h, l, 0, Q),
                                    e.arc(_, h, l, Q, K)) : _ < c ? (e.moveTo(_, n),
                                        e.arc(c, m, l, -Q, Q),
                                        e.arc(_, m, l, Q, K + Q)) : m < h ? (e.arc(_, m, l, -K, 0),
                                            e.arc(_, h, l, 0, K)) : e.arc(_, m, l, -K, K),
                                e.closePath(),
                                e.moveTo(t, n)
                        } else
                            e.rect(t, n, r, o)
                    },
                    drawPoint: function (e, style, t, n, r, o) {
                        var d, l, _, m, c, h = (o || 0) * Z;
                        if (style && "object" == typeof style && ("[object HTMLImageElement]" === (d = style.toString()) || "[object HTMLCanvasElement]" === d))
                            return e.save(),
                                e.translate(n, r),
                                e.rotate(h),
                                e.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height),
                                void e.restore();
                        if (!(isNaN(t) || t <= 0)) {
                            switch (e.beginPath(),
                            style) {
                                default:
                                    e.arc(n, r, t, 0, X),
                                        e.closePath();
                                    break;
                                case "triangle":
                                    e.moveTo(n + Math.sin(h) * t, r - Math.cos(h) * t),
                                        h += te,
                                        e.lineTo(n + Math.sin(h) * t, r - Math.cos(h) * t),
                                        h += te,
                                        e.lineTo(n + Math.sin(h) * t, r - Math.cos(h) * t),
                                        e.closePath();
                                    break;
                                case "rectRounded":
                                    m = t - (c = .516 * t),
                                        l = Math.cos(h + ee) * m,
                                        _ = Math.sin(h + ee) * m,
                                        e.arc(n - l, r - _, c, h - K, h - Q),
                                        e.arc(n + _, r - l, c, h - Q, h),
                                        e.arc(n + l, r + _, c, h, h + Q),
                                        e.arc(n - _, r + l, c, h + Q, h + K),
                                        e.closePath();
                                    break;
                                case "rect":
                                    if (!o) {
                                        m = Math.SQRT1_2 * t,
                                            e.rect(n - m, r - m, 2 * m, 2 * m);
                                        break
                                    }
                                    h += ee;
                                case "rectRot":
                                    l = Math.cos(h) * t,
                                        _ = Math.sin(h) * t,
                                        e.moveTo(n - l, r - _),
                                        e.lineTo(n + _, r - l),
                                        e.lineTo(n + l, r + _),
                                        e.lineTo(n - _, r + l),
                                        e.closePath();
                                    break;
                                case "crossRot":
                                    h += ee;
                                case "cross":
                                    l = Math.cos(h) * t,
                                        _ = Math.sin(h) * t,
                                        e.moveTo(n - l, r - _),
                                        e.lineTo(n + l, r + _),
                                        e.moveTo(n + _, r - l),
                                        e.lineTo(n - _, r + l);
                                    break;
                                case "star":
                                    l = Math.cos(h) * t,
                                        _ = Math.sin(h) * t,
                                        e.moveTo(n - l, r - _),
                                        e.lineTo(n + l, r + _),
                                        e.moveTo(n + _, r - l),
                                        e.lineTo(n - _, r + l),
                                        h += ee,
                                        l = Math.cos(h) * t,
                                        _ = Math.sin(h) * t,
                                        e.moveTo(n - l, r - _),
                                        e.lineTo(n + l, r + _),
                                        e.moveTo(n + _, r - l),
                                        e.lineTo(n - _, r + l);
                                    break;
                                case "line":
                                    l = Math.cos(h) * t,
                                        _ = Math.sin(h) * t,
                                        e.moveTo(n - l, r - _),
                                        e.lineTo(n + l, r + _);
                                    break;
                                case "dash":
                                    e.moveTo(n, r),
                                        e.lineTo(n + Math.cos(h) * t, r + Math.sin(h) * t)
                            }
                            e.fill(),
                                e.stroke()
                        }
                    },
                    _isPointInArea: function (e, area) {
                        var t = 1e-6;
                        return e.x > area.left - t && e.x < area.right + t && e.y > area.top - t && e.y < area.bottom + t
                    },
                    clipArea: function (e, area) {
                        e.save(),
                            e.beginPath(),
                            e.rect(area.left, area.top, area.right - area.left, area.bottom - area.top),
                            e.clip()
                    },
                    unclipArea: function (e) {
                        e.restore()
                    },
                    lineTo: function (e, t, n, r) {
                        var o = n.steppedLine;
                        if (o) {
                            if ("middle" === o) {
                                var d = (t.x + n.x) / 2;
                                e.lineTo(d, r ? n.y : t.y),
                                    e.lineTo(d, r ? t.y : n.y)
                            } else
                                "after" === o && !r || "after" !== o && r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
                            e.lineTo(n.x, n.y)
                        } else
                            n.tension ? e.bezierCurveTo(r ? t.controlPointPreviousX : t.controlPointNextX, r ? t.controlPointPreviousY : t.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
                    }
                }
                , ne = ae;
            U.clear = ae.clear,
                U.drawRoundedRectangle = function (e) {
                    e.beginPath(),
                        ae.roundedRect.apply(ae, arguments)
                }
                ;
            var re = {
                _set: function (e, t) {
                    return U.merge(this[e] || (this[e] = {}), t)
                }
            };
            re._set("global", {
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                defaultLineHeight: 1.2,
                showLines: !0
            });
            var ie = re
                , se = U.valueOrDefault;
            function oe(e) {
                return !e || U.isNullOrUndef(e.size) || U.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
            }
            var de = {
                toLineHeight: function (e, t) {
                    var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1])
                        return 1.2 * t;
                    switch (e = +n[2],
                    n[3]) {
                        case "px":
                            return e;
                        case "%":
                            e /= 100
                    }
                    return t * e
                },
                toPadding: function (e) {
                    var t, n, b, r;
                    return U.isObject(e) ? (t = +e.top || 0,
                        n = +e.right || 0,
                        b = +e.bottom || 0,
                        r = +e.left || 0) : t = n = b = r = +e || 0,
                    {
                        top: t,
                        right: n,
                        bottom: b,
                        left: r,
                        height: t + b,
                        width: r + n
                    }
                },
                _parseFont: function (e) {
                    var t = ie.global
                        , n = se(e.fontSize, t.defaultFontSize)
                        , r = {
                            family: se(e.fontFamily, t.defaultFontFamily),
                            lineHeight: U.options.toLineHeight(se(e.lineHeight, t.defaultLineHeight), n),
                            size: n,
                            style: se(e.fontStyle, t.defaultFontStyle),
                            weight: null,
                            string: ""
                        };
                    return r.string = oe(r),
                        r
                },
                resolve: function (e, t, n, r) {
                    var i, o, d, l = !0;
                    for (i = 0,
                        o = e.length; i < o; ++i)
                        if (void 0 !== (d = e[i]) && (void 0 !== t && "function" == typeof d && (d = d(t),
                            l = !1),
                            void 0 !== n && U.isArray(d) && (d = d[n],
                                l = !1),
                            void 0 !== d))
                            return r && !l && (r.cacheable = !1),
                                d
                }
            }
                , le = {
                    _factorize: function (e) {
                        var i, t = [], n = Math.sqrt(e);
                        for (i = 1; i < n; i++)
                            e % i == 0 && (t.push(i),
                                t.push(e / i));
                        return n === (0 | n) && t.push(n),
                            t.sort((function (a, b) {
                                return a - b
                            }
                            )).pop(),
                            t
                    },
                    log10: Math.log10 || function (e) {
                        var t = Math.log(e) * Math.LOG10E
                            , n = Math.round(t);
                        return e === Math.pow(10, n) ? n : t
                    }
                }
                , ue = le;
            U.log10 = le.log10;
            var _e = function (e, t) {
                return {
                    x: function (n) {
                        return e + e + t - n
                    },
                    setWidth: function (e) {
                        t = e
                    },
                    textAlign: function (e) {
                        return "center" === e ? e : "right" === e ? "left" : "right"
                    },
                    xPlus: function (e, t) {
                        return e - t
                    },
                    leftForLtr: function (e, t) {
                        return e - t
                    }
                }
            }
                , me = function () {
                    return {
                        x: function (e) {
                            return e
                        },
                        setWidth: function (e) { },
                        textAlign: function (e) {
                            return e
                        },
                        xPlus: function (e, t) {
                            return e + t
                        },
                        leftForLtr: function (e, t) {
                            return e
                        }
                    }
                }
                , ce = function (e, t, n) {
                    return e ? _e(t, n) : me()
                }
                , he = U
                , fe = $
                , canvas = ne
                , Me = de
                , pe = ue
                , ge = {
                    getRtlAdapter: ce,
                    overrideTextDirection: function (e, t) {
                        var style, n;
                        "ltr" !== t && "rtl" !== t || (n = [(style = e.canvas.style).getPropertyValue("direction"), style.getPropertyPriority("direction")],
                            style.setProperty("direction", t, "important"),
                            e.prevTextDirection = n)
                    },
                    restoreTextDirection: function (e) {
                        var t = e.prevTextDirection;
                        void 0 !== t && (delete e.prevTextDirection,
                            e.canvas.style.setProperty("direction", t[0], t[1]))
                    }
                };
            function ye(e, view, t, n) {
                var i, r, o, d, l, _, m, c, h, f = Object.keys(t);
                for (i = 0,
                    r = f.length; i < r; ++i)
                    if (_ = t[o = f[i]],
                        view.hasOwnProperty(o) || (view[o] = _),
                        (d = view[o]) !== _ && "_" !== o[0]) {
                        if (e.hasOwnProperty(o) || (e[o] = d),
                            (m = typeof _) == typeof (l = e[o]))
                            if ("string" === m) {
                                if ((c = R(l)).valid && (h = R(_)).valid) {
                                    view[o] = h.mix(c, n).rgbString();
                                    continue
                                }
                            } else if (he.isFinite(l) && he.isFinite(_)) {
                                view[o] = l + (_ - l) * n;
                                continue
                            }
                        view[o] = _
                    }
            }
            he.easing = fe,
                he.canvas = canvas,
                he.options = Me,
                he.math = pe,
                he.rtl = ge;
            var Le = function (e) {
                he.extend(this, e),
                    this.initialize.apply(this, arguments)
            };
            he.extend(Le.prototype, {
                _type: void 0,
                initialize: function () {
                    this.hidden = !1
                },
                pivot: function () {
                    var e = this;
                    return e._view || (e._view = he.extend({}, e._model)),
                        e._start = {},
                        e
                },
                transition: function (e) {
                    var t = this
                        , n = t._model
                        , r = t._start
                        , view = t._view;
                    return n && 1 !== e ? (view || (view = t._view = {}),
                        r || (r = t._start = {}),
                        ye(r, view, n, e),
                        t) : (t._view = he.extend({}, n),
                            t._start = null,
                            t)
                },
                tooltipPosition: function () {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function () {
                    return he.isNumber(this._model.x) && he.isNumber(this._model.y)
                }
            }),
                Le.extend = he.inherits;
            var Ye = Le
                , ve = Ye.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                })
                , be = ve;
            Object.defineProperty(ve.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }),
                Object.defineProperty(ve.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    },
                    set: function (e) {
                        this.chart = e
                    }
                }),
                ie._set("global", {
                    animation: {
                        duration: 1e3,
                        easing: "easeOutQuart",
                        onProgress: he.noop,
                        onComplete: he.noop
                    }
                });
            var ke = {
                animations: [],
                request: null,
                addAnimation: function (e, t, n, r) {
                    var i, o, d = this.animations;
                    for (t.chart = e,
                        t.startTime = Date.now(),
                        t.duration = n,
                        r || (e.animating = !0),
                        i = 0,
                        o = d.length; i < o; ++i)
                        if (d[i].chart === e)
                            return void (d[i] = t);
                    d.push(t),
                        1 === d.length && this.requestAnimationFrame()
                },
                cancelAnimation: function (e) {
                    var t = he.findIndex(this.animations, (function (t) {
                        return t.chart === e
                    }
                    ));
                    -1 !== t && (this.animations.splice(t, 1),
                        e.animating = !1)
                },
                requestAnimationFrame: function () {
                    var e = this;
                    null === e.request && (e.request = he.requestAnimFrame.call(window, (function () {
                        e.request = null,
                            e.startDigest()
                    }
                    )))
                },
                startDigest: function () {
                    var e = this;
                    e.advance(),
                        e.animations.length > 0 && e.requestAnimationFrame()
                },
                advance: function () {
                    for (var e, t, n, r, o = this.animations, i = 0; i < o.length;)
                        t = (e = o[i]).chart,
                            n = e.numSteps,
                            r = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1,
                            e.currentStep = Math.min(r, n),
                            he.callback(e.render, [t, e], t),
                            he.callback(e.onAnimationProgress, [e], t),
                            e.currentStep >= n ? (he.callback(e.onAnimationComplete, [e], t),
                                t.animating = !1,
                                o.splice(i, 1)) : ++i
                }
            }
                , De = he.options.resolve
                , we = ["push", "pop", "shift", "splice", "unshift"];
            function Te(e, t) {
                e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [t]
                    }
                }),
                    we.forEach((function (t) {
                        var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1)
                            , base = e[t];
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: function () {
                                var t = Array.prototype.slice.call(arguments)
                                    , r = base.apply(this, t);
                                return he.each(e._chartjs.listeners, (function (object) {
                                    "function" == typeof object[n] && object[n].apply(object, t)
                                }
                                )),
                                    r
                            }
                        })
                    }
                    )))
            }
            function xe(e, t) {
                var n = e._chartjs;
                if (n) {
                    var r = n.listeners
                        , o = r.indexOf(t);
                    -1 !== o && r.splice(o, 1),
                        r.length > 0 || (we.forEach((function (t) {
                            delete e[t]
                        }
                        )),
                            delete e._chartjs)
                }
            }
            var Se = function (e, t) {
                this.initialize(e, t)
            };
            he.extend(Se.prototype, {
                datasetElementType: null,
                dataElementType: null,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
                initialize: function (e, t) {
                    var n = this;
                    n.chart = e,
                        n.index = t,
                        n.linkScales(),
                        n.addElements(),
                        n._type = n.getMeta().type
                },
                updateIndex: function (e) {
                    this.index = e
                },
                linkScales: function () {
                    var e = this
                        , meta = e.getMeta()
                        , t = e.chart
                        , n = t.scales
                        , r = e.getDataset()
                        , o = t.options.scales;
                    null !== meta.xAxisID && meta.xAxisID in n && !r.xAxisID || (meta.xAxisID = r.xAxisID || o.xAxes[0].id),
                        null !== meta.yAxisID && meta.yAxisID in n && !r.yAxisID || (meta.yAxisID = r.yAxisID || o.yAxes[0].id)
                },
                getDataset: function () {
                    return this.chart.data.datasets[this.index]
                },
                getMeta: function () {
                    return this.chart.getDatasetMeta(this.index)
                },
                getScaleForId: function (e) {
                    return this.chart.scales[e]
                },
                _getValueScaleId: function () {
                    return this.getMeta().yAxisID
                },
                _getIndexScaleId: function () {
                    return this.getMeta().xAxisID
                },
                _getValueScale: function () {
                    return this.getScaleForId(this._getValueScaleId())
                },
                _getIndexScale: function () {
                    return this.getScaleForId(this._getIndexScaleId())
                },
                reset: function () {
                    this._update(!0)
                },
                destroy: function () {
                    this._data && xe(this._data, this)
                },
                createMetaDataset: function () {
                    var e = this
                        , t = e.datasetElementType;
                    return t && new t({
                        _chart: e.chart,
                        _datasetIndex: e.index
                    })
                },
                createMetaData: function (e) {
                    var t = this
                        , n = t.dataElementType;
                    return n && new n({
                        _chart: t.chart,
                        _datasetIndex: t.index,
                        _index: e
                    })
                },
                addElements: function () {
                    var i, e, t = this, meta = t.getMeta(), data = t.getDataset().data || [], n = meta.data;
                    for (i = 0,
                        e = data.length; i < e; ++i)
                        n[i] = n[i] || t.createMetaData(i);
                    meta.dataset = meta.dataset || t.createMetaDataset()
                },
                addElementAndReset: function (e) {
                    var element = this.createMetaData(e);
                    this.getMeta().data.splice(e, 0, element),
                        this.updateElement(element, e, !0)
                },
                buildOrUpdateElements: function () {
                    var e = this
                        , t = e.getDataset()
                        , data = t.data || (t.data = []);
                    e._data !== data && (e._data && xe(e._data, e),
                        data && Object.isExtensible(data) && Te(data, e),
                        e._data = data),
                        e.resyncElements()
                },
                _configure: function () {
                    var e = this;
                    e._config = he.merge(Object.create(null), [e.chart.options.datasets[e._type], e.getDataset()], {
                        merger: function (e, t, source) {
                            "_meta" !== e && "data" !== e && he._merger(e, t, source)
                        }
                    })
                },
                _update: function (e) {
                    var t = this;
                    t._configure(),
                        t._cachedDataOpts = null,
                        t.update(e)
                },
                update: he.noop,
                transition: function (e) {
                    for (var meta = this.getMeta(), t = meta.data || [], n = t.length, i = 0; i < n; ++i)
                        t[i].transition(e);
                    meta.dataset && meta.dataset.transition(e)
                },
                draw: function () {
                    var meta = this.getMeta()
                        , e = meta.data || []
                        , t = e.length
                        , i = 0;
                    for (meta.dataset && meta.dataset.draw(); i < t; ++i)
                        e[i].draw()
                },
                getStyle: function (e) {
                    var style, t = this, meta = t.getMeta(), n = meta.dataset;
                    return t._configure(),
                        n && void 0 === e ? style = t._resolveDatasetElementOptions(n || {}) : (e = e || 0,
                            style = t._resolveDataElementOptions(meta.data[e] || {}, e)),
                        !1 !== style.fill && null !== style.fill || (style.backgroundColor = style.borderColor),
                        style
                },
                _resolveDatasetElementOptions: function (element, e) {
                    var i, t, n, r, o = this, d = o.chart, l = o._config, _ = element.custom || {}, m = d.options.elements[o.datasetElementType.prototype._type] || {}, c = o._datasetElementOptions, h = {}, f = {
                        chart: d,
                        dataset: o.getDataset(),
                        datasetIndex: o.index,
                        hover: e
                    };
                    for (i = 0,
                        t = c.length; i < t; ++i)
                        n = c[i],
                            r = e ? "hover" + n.charAt(0).toUpperCase() + n.slice(1) : n,
                            h[n] = De([_[r], l[r], m[r]], f);
                    return h
                },
                _resolveDataElementOptions: function (element, e) {
                    var t = this
                        , n = element && element.custom
                        , r = t._cachedDataOpts;
                    if (r && !n)
                        return r;
                    var o, i, d, l, _ = t.chart, m = t._config, c = _.options.elements[t.dataElementType.prototype._type] || {}, h = t._dataElementOptions, f = {}, M = {
                        chart: _,
                        dataIndex: e,
                        dataset: t.getDataset(),
                        datasetIndex: t.index
                    }, y = {
                        cacheable: !n
                    };
                    if (n = n || {},
                        he.isArray(h))
                        for (i = 0,
                            d = h.length; i < d; ++i)
                            f[l = h[i]] = De([n[l], m[l], c[l]], M, e, y);
                    else
                        for (i = 0,
                            d = (o = Object.keys(h)).length; i < d; ++i)
                            f[l = o[i]] = De([n[l], m[h[l]], m[l], c[l]], M, e, y);
                    return y.cacheable && (t._cachedDataOpts = Object.freeze(f)),
                        f
                },
                removeHoverStyle: function (element) {
                    he.merge(element._model, element.$previousStyle || {}),
                        delete element.$previousStyle
                },
                setHoverStyle: function (element) {
                    var e = this.chart.data.datasets[element._datasetIndex]
                        , t = element._index
                        , n = element.custom || {}
                        , r = element._model
                        , o = he.getHoverColor;
                    element.$previousStyle = {
                        backgroundColor: r.backgroundColor,
                        borderColor: r.borderColor,
                        borderWidth: r.borderWidth
                    },
                        r.backgroundColor = De([n.hoverBackgroundColor, e.hoverBackgroundColor, o(r.backgroundColor)], void 0, t),
                        r.borderColor = De([n.hoverBorderColor, e.hoverBorderColor, o(r.borderColor)], void 0, t),
                        r.borderWidth = De([n.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, t)
                },
                _removeDatasetHoverStyle: function () {
                    var element = this.getMeta().dataset;
                    element && this.removeHoverStyle(element)
                },
                _setDatasetHoverStyle: function () {
                    var i, e, t, n, r, o, element = this.getMeta().dataset, d = {};
                    if (element) {
                        for (o = element._model,
                            r = this._resolveDatasetElementOptions(element, !0),
                            i = 0,
                            e = (n = Object.keys(r)).length; i < e; ++i)
                            d[t = n[i]] = o[t],
                                o[t] = r[t];
                        element.$previousStyle = d
                    }
                },
                resyncElements: function () {
                    var e = this
                        , meta = e.getMeta()
                        , data = e.getDataset().data
                        , t = meta.data.length
                        , n = data.length;
                    n < t ? meta.data.splice(n, t - n) : n > t && e.insertElements(t, n - t)
                },
                insertElements: function (e, t) {
                    for (var i = 0; i < t; ++i)
                        this.addElementAndReset(e + i)
                },
                onDataPush: function () {
                    var e = arguments.length;
                    this.insertElements(this.getDataset().data.length - e, e)
                },
                onDataPop: function () {
                    this.getMeta().data.pop()
                },
                onDataShift: function () {
                    this.getMeta().data.shift()
                },
                onDataSplice: function (e, t) {
                    this.getMeta().data.splice(e, t),
                        this.insertElements(e, arguments.length - 2)
                },
                onDataUnshift: function () {
                    this.insertElements(0, arguments.length)
                }
            }),
                Se.extend = he.inherits;
            var He = Se
                , je = 2 * Math.PI;
            function Pe(e, t) {
                var n = t.startAngle
                    , r = t.endAngle
                    , o = t.pixelMargin
                    , d = o / t.outerRadius
                    , l = t.x
                    , _ = t.y;
                e.beginPath(),
                    e.arc(l, _, t.outerRadius, n - d, r + d),
                    t.innerRadius > o ? (d = o / t.innerRadius,
                        e.arc(l, _, t.innerRadius - o, r + d, n - d, !0)) : e.arc(l, _, o, r + Math.PI / 2, n - Math.PI / 2),
                    e.closePath(),
                    e.clip()
            }
            function Oe(e, t, n, r) {
                var i, o = n.endAngle;
                for (r && (n.endAngle = n.startAngle + je,
                    Pe(e, n),
                    n.endAngle = o,
                    n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += je,
                        n.fullCircles--)),
                    e.beginPath(),
                    e.arc(n.x, n.y, n.innerRadius, n.startAngle + je, n.startAngle, !0),
                    i = 0; i < n.fullCircles; ++i)
                    e.stroke();
                for (e.beginPath(),
                    e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.startAngle + je),
                    i = 0; i < n.fullCircles; ++i)
                    e.stroke()
            }
            function Ae(e, t, n) {
                var r = "inner" === t.borderAlign;
                r ? (e.lineWidth = 2 * t.borderWidth,
                    e.lineJoin = "round") : (e.lineWidth = t.borderWidth,
                        e.lineJoin = "bevel"),
                    n.fullCircles && Oe(e, t, n, r),
                    r && Pe(e, n),
                    e.beginPath(),
                    e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle),
                    e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
                    e.closePath(),
                    e.stroke()
            }
            ie._set("global", {
                elements: {
                    arc: {
                        backgroundColor: ie.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2,
                        borderAlign: "center"
                    }
                }
            });
            var Fe = Ye.extend({
                _type: "arc",
                inLabelRange: function (e) {
                    var t = this._view;
                    return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
                },
                inRange: function (e, t) {
                    var n = this._view;
                    if (n) {
                        for (var r = he.getAngleFromPoint(n, {
                            x: e,
                            y: t
                        }), o = r.angle, d = r.distance, l = n.startAngle, _ = n.endAngle; _ < l;)
                            _ += je;
                        for (; o > _;)
                            o -= je;
                        for (; o < l;)
                            o += je;
                        var m = o >= l && o <= _
                            , c = d >= n.innerRadius && d <= n.outerRadius;
                        return m && c
                    }
                    return !1
                },
                getCenterPoint: function () {
                    var e = this._view
                        , t = (e.startAngle + e.endAngle) / 2
                        , n = (e.innerRadius + e.outerRadius) / 2;
                    return {
                        x: e.x + Math.cos(t) * n,
                        y: e.y + Math.sin(t) * n
                    }
                },
                getArea: function () {
                    var e = this._view;
                    return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                },
                tooltipPosition: function () {
                    var e = this._view
                        , t = e.startAngle + (e.endAngle - e.startAngle) / 2
                        , n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return {
                        x: e.x + Math.cos(t) * n,
                        y: e.y + Math.sin(t) * n
                    }
                },
                draw: function () {
                    var i, e = this._chart.ctx, t = this._view, n = "inner" === t.borderAlign ? .33 : 0, r = {
                        x: t.x,
                        y: t.y,
                        innerRadius: t.innerRadius,
                        outerRadius: Math.max(t.outerRadius - n, 0),
                        pixelMargin: n,
                        startAngle: t.startAngle,
                        endAngle: t.endAngle,
                        fullCircles: Math.floor(t.circumference / je)
                    };
                    if (e.save(),
                        e.fillStyle = t.backgroundColor,
                        e.strokeStyle = t.borderColor,
                        r.fullCircles) {
                        for (r.endAngle = r.startAngle + je,
                            e.beginPath(),
                            e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle),
                            e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0),
                            e.closePath(),
                            i = 0; i < r.fullCircles; ++i)
                            e.fill();
                        r.endAngle = r.startAngle + t.circumference % je
                    }
                    e.beginPath(),
                        e.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle),
                        e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0),
                        e.closePath(),
                        e.fill(),
                        t.borderWidth && Ae(e, t, r),
                        e.restore()
                }
            })
                , We = he.valueOrDefault
                , Ce = ie.global.defaultColor;
            ie._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: Ce,
                        borderWidth: 3,
                        borderColor: Ce,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            });
            var Ee = Ye.extend({
                _type: "line",
                draw: function () {
                    var e, t, n, r = this, o = r._view, d = r._chart.ctx, l = o.spanGaps, _ = r._children.slice(), m = ie.global, c = m.elements.line, h = -1, f = r._loop;
                    if (_.length) {
                        if (r._loop) {
                            for (e = 0; e < _.length; ++e)
                                if (t = he.previousItem(_, e),
                                    !_[e]._view.skip && t._view.skip) {
                                    _ = _.slice(e).concat(_.slice(0, e)),
                                        f = l;
                                    break
                                }
                            f && _.push(_[0])
                        }
                        for (d.save(),
                            d.lineCap = o.borderCapStyle || c.borderCapStyle,
                            d.setLineDash && d.setLineDash(o.borderDash || c.borderDash),
                            d.lineDashOffset = We(o.borderDashOffset, c.borderDashOffset),
                            d.lineJoin = o.borderJoinStyle || c.borderJoinStyle,
                            d.lineWidth = We(o.borderWidth, c.borderWidth),
                            d.strokeStyle = o.borderColor || m.defaultColor,
                            d.beginPath(),
                            (n = _[0]._view).skip || (d.moveTo(n.x, n.y),
                                h = 0),
                            e = 1; e < _.length; ++e)
                            n = _[e]._view,
                                t = -1 === h ? he.previousItem(_, e) : _[h],
                                n.skip || (h !== e - 1 && !l || -1 === h ? d.moveTo(n.x, n.y) : he.canvas.lineTo(d, t._view, n),
                                    h = e);
                        f && d.closePath(),
                            d.stroke(),
                            d.restore()
                    }
                }
            })
                , ze = he.valueOrDefault
                , Ie = ie.global.defaultColor;
            function Ne(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
            }
            function Re(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
            }
            ie._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: Ie,
                        borderColor: Ie,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            });
            var Ve = Ye.extend({
                _type: "point",
                inRange: function (e, t) {
                    var n = this._view;
                    return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: Ne,
                inXRange: Ne,
                inYRange: Re,
                getCenterPoint: function () {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y
                    }
                },
                getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function () {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y,
                        padding: e.radius + e.borderWidth
                    }
                },
                draw: function (e) {
                    var t = this._view
                        , n = this._chart.ctx
                        , r = t.pointStyle
                        , o = t.rotation
                        , d = t.radius
                        , l = t.x
                        , _ = t.y
                        , m = ie.global
                        , c = m.defaultColor;
                    t.skip || (void 0 === e || he.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || c,
                        n.lineWidth = ze(t.borderWidth, m.elements.point.borderWidth),
                        n.fillStyle = t.backgroundColor || c,
                        he.canvas.drawPoint(n, r, d, l, _, o))
                }
            })
                , Be = ie.global.defaultColor;
            function Je(e) {
                return e && void 0 !== e.width
            }
            function Ue(e) {
                var t, n, r, o, d;
                return Je(e) ? (d = e.width / 2,
                    t = e.x - d,
                    n = e.x + d,
                    r = Math.min(e.y, e.base),
                    o = Math.max(e.y, e.base)) : (d = e.height / 2,
                        t = Math.min(e.x, e.base),
                        n = Math.max(e.x, e.base),
                        r = e.y - d,
                        o = e.y + d),
                {
                    left: t,
                    top: r,
                    right: n,
                    bottom: o
                }
            }
            function Ge(e, t, n) {
                return e === t ? n : e === n ? t : e
            }
            function qe(e) {
                var t = e.borderSkipped
                    , n = {};
                return t ? (e.horizontal ? e.base > e.x && (t = Ge(t, "left", "right")) : e.base < e.y && (t = Ge(t, "bottom", "top")),
                    n[t] = !0,
                    n) : n
            }
            function $e(e, t, n) {
                var r, o, b, d, l = e.borderWidth, _ = qe(e);
                return he.isObject(l) ? (r = +l.top || 0,
                    o = +l.right || 0,
                    b = +l.bottom || 0,
                    d = +l.left || 0) : r = o = b = d = +l || 0,
                {
                    t: _.top || r < 0 ? 0 : r > n ? n : r,
                    r: _.right || o < 0 ? 0 : o > t ? t : o,
                    b: _.bottom || b < 0 ? 0 : b > n ? n : b,
                    l: _.left || d < 0 ? 0 : d > t ? t : d
                }
            }
            function Ke(e) {
                var t = Ue(e)
                    , n = t.right - t.left
                    , r = t.bottom - t.top
                    , o = $e(e, n / 2, r / 2);
                return {
                    outer: {
                        x: t.left,
                        y: t.top,
                        w: n,
                        h: r
                    },
                    inner: {
                        x: t.left + o.l,
                        y: t.top + o.t,
                        w: n - o.l - o.r,
                        h: r - o.t - o.b
                    }
                }
            }
            function Ze(e, t, n) {
                var r = null === t
                    , o = null === n
                    , d = !(!e || r && o) && Ue(e);
                return d && (r || t >= d.left && t <= d.right) && (o || n >= d.top && n <= d.bottom)
            }
            ie._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: Be,
                        borderColor: Be,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            });
            var Xe = Ye.extend({
                _type: "rectangle",
                draw: function () {
                    var e = this._chart.ctx
                        , t = this._view
                        , n = Ke(t)
                        , r = n.outer
                        , o = n.inner;
                    e.fillStyle = t.backgroundColor,
                        e.fillRect(r.x, r.y, r.w, r.h),
                        r.w === o.w && r.h === o.h || (e.save(),
                            e.beginPath(),
                            e.rect(r.x, r.y, r.w, r.h),
                            e.clip(),
                            e.fillStyle = t.borderColor,
                            e.rect(o.x, o.y, o.w, o.h),
                            e.fill("evenodd"),
                            e.restore())
                },
                height: function () {
                    var e = this._view;
                    return e.base - e.y
                },
                inRange: function (e, t) {
                    return Ze(this._view, e, t)
                },
                inLabelRange: function (e, t) {
                    var n = this._view;
                    return Je(n) ? Ze(n, e, null) : Ze(n, null, t)
                },
                inXRange: function (e) {
                    return Ze(this._view, e, null)
                },
                inYRange: function (e) {
                    return Ze(this._view, null, e)
                },
                getCenterPoint: function () {
                    var e, t, n = this._view;
                    return Je(n) ? (e = n.x,
                        t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2,
                            t = n.y),
                    {
                        x: e,
                        y: t
                    }
                },
                getArea: function () {
                    var e = this._view;
                    return Je(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
                },
                tooltipPosition: function () {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y
                    }
                }
            })
                , Qe = {}
                , et = Fe
                , tt = Ee
                , at = Ve
                , nt = Xe;
            Qe.Arc = et,
                Qe.Line = tt,
                Qe.Point = at,
                Qe.Rectangle = nt;
            var it = he._deprecated
                , st = he.valueOrDefault;
            function ot(e, t) {
                var n, r, i, o, d = e._length;
                for (i = 1,
                    o = t.length; i < o; ++i)
                    d = Math.min(d, Math.abs(t[i] - t[i - 1]));
                for (i = 0,
                    o = e.getTicks().length; i < o; ++i)
                    r = e.getPixelForTick(i),
                        d = i > 0 ? Math.min(d, Math.abs(r - n)) : d,
                        n = r;
                return d
            }
            function lt(e, t, n) {
                var r, o, d = n.barThickness, l = t.stackCount, _ = t.pixels[e], m = he.isNullOrUndef(d) ? ot(t.scale, t.pixels) : -1;
                return he.isNullOrUndef(d) ? (r = m * n.categoryPercentage,
                    o = n.barPercentage) : (r = d * l,
                        o = 1),
                {
                    chunk: r / l,
                    ratio: o,
                    start: _ - r / 2
                }
            }
            function ut(e, t, n) {
                var r, o = t.pixels, d = o[e], l = e > 0 ? o[e - 1] : null, _ = e < o.length - 1 ? o[e + 1] : null, m = n.categoryPercentage;
                return null === l && (l = d - (null === _ ? t.end - t.start : _ - d)),
                    null === _ && (_ = d + d - l),
                    r = d - (d - Math.min(l, _)) / 2 * m,
                {
                    chunk: Math.abs(_ - l) / 2 * m / t.stackCount,
                    ratio: n.barPercentage,
                    start: r
                }
            }
            ie._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }),
                ie._set("global", {
                    datasets: {
                        bar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
            var _t = He.extend({
                dataElementType: Qe.Rectangle,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
                initialize: function () {
                    var meta, e, t = this;
                    He.prototype.initialize.apply(t, arguments),
                        (meta = t.getMeta()).stack = t.getDataset().stack,
                        meta.bar = !0,
                        e = t._getIndexScale().options,
                        it("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"),
                        it("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"),
                        it("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"),
                        it("bar chart", t._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"),
                        it("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
                },
                update: function (e) {
                    var i, t, n = this, r = n.getMeta().data;
                    for (n._ruler = n.getRuler(),
                        i = 0,
                        t = r.length; i < t; ++i)
                        n.updateElement(r[i], i, e)
                },
                updateElement: function (e, t, n) {
                    var r = this
                        , meta = r.getMeta()
                        , o = r.getDataset()
                        , d = r._resolveDataElementOptions(e, t);
                    e._xScale = r.getScaleForId(meta.xAxisID),
                        e._yScale = r.getScaleForId(meta.yAxisID),
                        e._datasetIndex = r.index,
                        e._index = t,
                        e._model = {
                            backgroundColor: d.backgroundColor,
                            borderColor: d.borderColor,
                            borderSkipped: d.borderSkipped,
                            borderWidth: d.borderWidth,
                            datasetLabel: o.label,
                            label: r.chart.data.labels[t]
                        },
                        he.isArray(o.data[t]) && (e._model.borderSkipped = null),
                        r._updateElementGeometry(e, t, n, d),
                        e.pivot()
                },
                _updateElementGeometry: function (e, t, n, r) {
                    var o = this
                        , d = e._model
                        , l = o._getValueScale()
                        , base = l.getBasePixel()
                        , _ = l.isHorizontal()
                        , m = o._ruler || o.getRuler()
                        , c = o.calculateBarValuePixels(o.index, t, r)
                        , h = o.calculateBarIndexPixels(o.index, t, m, r);
                    d.horizontal = _,
                        d.base = n ? base : c.base,
                        d.x = _ ? n ? base : c.head : h.center,
                        d.y = _ ? h.center : n ? base : c.head,
                        d.height = _ ? h.size : void 0,
                        d.width = _ ? void 0 : h.size
                },
                _getStacks: function (e) {
                    var i, meta, t = this, n = t._getIndexScale(), r = n._getMatchingVisibleMetas(t._type), o = n.options.stacked, d = r.length, l = [];
                    for (i = 0; i < d && (meta = r[i],
                        (!1 === o || -1 === l.indexOf(meta.stack) || void 0 === o && void 0 === meta.stack) && l.push(meta.stack),
                        meta.index !== e); ++i)
                        ;
                    return l
                },
                getStackCount: function () {
                    return this._getStacks().length
                },
                getStackIndex: function (e, t) {
                    var n = this._getStacks(e)
                        , r = void 0 !== t ? n.indexOf(t) : -1;
                    return -1 === r ? n.length - 1 : r
                },
                getRuler: function () {
                    var i, e, t = this, n = t._getIndexScale(), r = [];
                    for (i = 0,
                        e = t.getMeta().data.length; i < e; ++i)
                        r.push(n.getPixelForValue(null, i, t.index));
                    return {
                        pixels: r,
                        start: n._startPixel,
                        end: n._endPixel,
                        stackCount: t.getStackCount(),
                        scale: n
                    }
                },
                calculateBarValuePixels: function (e, t, n) {
                    var i, r, o, base, head, d, l, _ = this, m = _.chart, c = _._getValueScale(), h = c.isHorizontal(), f = m.data.datasets, M = c._getMatchingVisibleMetas(_._type), y = c._parseValue(f[e].data[t]), L = n.minBarLength, Y = c.options.stacked, v = _.getMeta().stack, k = void 0 === y.start ? 0 : y.max >= 0 && y.min >= 0 ? y.min : y.max, D = void 0 === y.start ? y.end : y.max >= 0 && y.min >= 0 ? y.max - y.min : y.min - y.max, w = M.length;
                    if (Y || void 0 === Y && void 0 !== v)
                        for (i = 0; i < w && (r = M[i]).index !== e; ++i)
                            r.stack === v && (o = void 0 === (l = c._parseValue(f[r.index].data[t])).start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min,
                                (y.min < 0 && o < 0 || y.max >= 0 && o > 0) && (k += o));
                    return base = c.getPixelForValue(k),
                        d = (head = c.getPixelForValue(k + D)) - base,
                        void 0 !== L && Math.abs(d) < L && (d = L,
                            head = D >= 0 && !h || D < 0 && h ? base - L : base + L),
                    {
                        size: d,
                        base: base,
                        head: head,
                        center: head + d / 2
                    }
                },
                calculateBarIndexPixels: function (e, t, n, r) {
                    var o = this
                        , d = "flex" === r.barThickness ? ut(t, n, r) : lt(t, n, r)
                        , l = o.getStackIndex(e, o.getMeta().stack)
                        , _ = d.start + d.chunk * l + d.chunk / 2
                        , m = Math.min(st(r.maxBarThickness, 1 / 0), d.chunk * d.ratio);
                    return {
                        base: _ - m / 2,
                        head: _ + m / 2,
                        center: _,
                        size: m
                    }
                },
                draw: function () {
                    var e = this
                        , t = e.chart
                        , n = e._getValueScale()
                        , r = e.getMeta().data
                        , o = e.getDataset()
                        , d = r.length
                        , i = 0;
                    for (he.canvas.clipArea(t.ctx, t.chartArea); i < d; ++i) {
                        var l = n._parseValue(o.data[i]);
                        isNaN(l.min) || isNaN(l.max) || r[i].draw()
                    }
                    he.canvas.unclipArea(t.ctx)
                },
                _resolveDataElementOptions: function () {
                    var e = this
                        , t = he.extend({}, He.prototype._resolveDataElementOptions.apply(e, arguments))
                        , n = e._getIndexScale().options
                        , r = e._getValueScale().options;
                    return t.barPercentage = st(n.barPercentage, t.barPercentage),
                        t.barThickness = st(n.barThickness, t.barThickness),
                        t.categoryPercentage = st(n.categoryPercentage, t.categoryPercentage),
                        t.maxBarThickness = st(n.maxBarThickness, t.maxBarThickness),
                        t.minBarLength = st(r.minBarLength, t.minBarLength),
                        t
                }
            })
                , mt = he.valueOrDefault
                , ct = he.options.resolve;
            ie._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (e, data) {
                            var t = data.datasets[e.datasetIndex].label || ""
                                , n = data.datasets[e.datasetIndex].data[e.index];
                            return t + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            });
            var ht = He.extend({
                dataElementType: Qe.Point,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
                update: function (e) {
                    var t = this
                        , n = t.getMeta().data;
                    he.each(n, (function (n, r) {
                        t.updateElement(n, r, e)
                    }
                    ))
                },
                updateElement: function (e, t, n) {
                    var r = this
                        , meta = r.getMeta()
                        , o = e.custom || {}
                        , d = r.getScaleForId(meta.xAxisID)
                        , l = r.getScaleForId(meta.yAxisID)
                        , _ = r._resolveDataElementOptions(e, t)
                        , data = r.getDataset().data[t]
                        , m = r.index
                        , c = n ? d.getPixelForDecimal(.5) : d.getPixelForValue("object" == typeof data ? data : NaN, t, m)
                        , h = n ? l.getBasePixel() : l.getPixelForValue(data, t, m);
                    e._xScale = d,
                        e._yScale = l,
                        e._options = _,
                        e._datasetIndex = m,
                        e._index = t,
                        e._model = {
                            backgroundColor: _.backgroundColor,
                            borderColor: _.borderColor,
                            borderWidth: _.borderWidth,
                            hitRadius: _.hitRadius,
                            pointStyle: _.pointStyle,
                            rotation: _.rotation,
                            radius: n ? 0 : _.radius,
                            skip: o.skip || isNaN(c) || isNaN(h),
                            x: c,
                            y: h
                        },
                        e.pivot()
                },
                setHoverStyle: function (e) {
                    var t = e._model
                        , n = e._options
                        , r = he.getHoverColor;
                    e.$previousStyle = {
                        backgroundColor: t.backgroundColor,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth,
                        radius: t.radius
                    },
                        t.backgroundColor = mt(n.hoverBackgroundColor, r(n.backgroundColor)),
                        t.borderColor = mt(n.hoverBorderColor, r(n.borderColor)),
                        t.borderWidth = mt(n.hoverBorderWidth, n.borderWidth),
                        t.radius = n.radius + n.hoverRadius
                },
                _resolveDataElementOptions: function (e, t) {
                    var n = this
                        , r = n.chart
                        , o = n.getDataset()
                        , d = e.custom || {}
                        , data = o.data[t] || {}
                        , l = He.prototype._resolveDataElementOptions.apply(n, arguments)
                        , _ = {
                            chart: r,
                            dataIndex: t,
                            dataset: o,
                            datasetIndex: n.index
                        };
                    return n._cachedDataOpts === l && (l = he.extend({}, l)),
                        l.radius = ct([d.radius, data.r, n._config.radius, r.options.elements.point.radius], _, t),
                        l
                }
            })
                , ft = he.valueOrDefault
                , Mt = Math.PI
                , pt = 2 * Mt
                , gt = Mt / 2;
            ie._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function (e) {
                    var i, t, n, r = document.createElement("ul"), data = e.data, o = data.datasets, d = data.labels;
                    if (r.setAttribute("class", e.id + "-legend"),
                        o.length)
                        for (i = 0,
                            t = o[0].data.length; i < t; ++i)
                            (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[i],
                                d[i] && n.appendChild(document.createTextNode(d[i]));
                    return r.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var data = e.data;
                            return data.labels.length && data.datasets.length ? data.labels.map((function (label, i) {
                                var meta = e.getDatasetMeta(0)
                                    , style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    lineWidth: style.borderWidth,
                                    hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                                    index: i
                                }
                            }
                            )) : []
                        }
                    },
                    onClick: function (e, t) {
                        var i, n, meta, r = t.index, o = this.chart;
                        for (i = 0,
                            n = (o.data.datasets || []).length; i < n; ++i)
                            (meta = o.getDatasetMeta(i)).data[r] && (meta.data[r].hidden = !meta.data[r].hidden);
                        o.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -gt,
                circumference: pt,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (e, data) {
                            var t = data.labels[e.index]
                                , n = ": " + data.datasets[e.datasetIndex].data[e.index];
                            return he.isArray(t) ? (t = t.slice())[0] += n : t += n,
                                t
                        }
                    }
                }
            });
            var yt = He.extend({
                dataElementType: Qe.Arc,
                linkScales: he.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                getRingIndex: function (e) {
                    for (var t = 0, n = 0; n < e; ++n)
                        this.chart.isDatasetVisible(n) && ++t;
                    return t
                },
                update: function (e) {
                    var t, n, i, r, o = this, d = o.chart, l = d.chartArea, _ = d.options, m = 1, c = 1, h = 0, f = 0, meta = o.getMeta(), M = meta.data, y = _.cutoutPercentage / 100 || 0, L = _.circumference, Y = o._getRingWeight(o.index);
                    if (L < pt) {
                        var v = _.rotation % pt
                            , k = (v += v >= Mt ? -pt : v < -Mt ? pt : 0) + L
                            , D = Math.cos(v)
                            , w = Math.sin(v)
                            , T = Math.cos(k)
                            , x = Math.sin(k)
                            , S = v <= 0 && k >= 0 || k >= pt
                            , H = v <= gt && k >= gt || k >= pt + gt
                            , j = v <= -gt && k >= -gt || k >= Mt + gt
                            , P = v === -Mt || k >= Mt ? -1 : Math.min(D, D * y, T, T * y)
                            , O = j ? -1 : Math.min(w, w * y, x, x * y)
                            , A = S ? 1 : Math.max(D, D * y, T, T * y)
                            , F = H ? 1 : Math.max(w, w * y, x, x * y);
                        m = (A - P) / 2,
                            c = (F - O) / 2,
                            h = -(A + P) / 2,
                            f = -(F + O) / 2
                    }
                    for (i = 0,
                        r = M.length; i < r; ++i)
                        M[i]._options = o._resolveDataElementOptions(M[i], i);
                    for (d.borderWidth = o.getMaxBorderWidth(),
                        t = (l.right - l.left - d.borderWidth) / m,
                        n = (l.bottom - l.top - d.borderWidth) / c,
                        d.outerRadius = Math.max(Math.min(t, n) / 2, 0),
                        d.innerRadius = Math.max(d.outerRadius * y, 0),
                        d.radiusLength = (d.outerRadius - d.innerRadius) / (o._getVisibleDatasetWeightTotal() || 1),
                        d.offsetX = h * d.outerRadius,
                        d.offsetY = f * d.outerRadius,
                        meta.total = o.calculateTotal(),
                        o.outerRadius = d.outerRadius - d.radiusLength * o._getRingWeightOffset(o.index),
                        o.innerRadius = Math.max(o.outerRadius - d.radiusLength * Y, 0),
                        i = 0,
                        r = M.length; i < r; ++i)
                        o.updateElement(M[i], i, e)
                },
                updateElement: function (e, t, n) {
                    var r = this
                        , o = r.chart
                        , d = o.chartArea
                        , l = o.options
                        , _ = l.animation
                        , m = (d.left + d.right) / 2
                        , c = (d.top + d.bottom) / 2
                        , h = l.rotation
                        , f = l.rotation
                        , M = r.getDataset()
                        , y = n && _.animateRotate || e.hidden ? 0 : r.calculateCircumference(M.data[t]) * (l.circumference / pt)
                        , L = n && _.animateScale ? 0 : r.innerRadius
                        , Y = n && _.animateScale ? 0 : r.outerRadius
                        , v = e._options || {};
                    he.extend(e, {
                        _datasetIndex: r.index,
                        _index: t,
                        _model: {
                            backgroundColor: v.backgroundColor,
                            borderColor: v.borderColor,
                            borderWidth: v.borderWidth,
                            borderAlign: v.borderAlign,
                            x: m + o.offsetX,
                            y: c + o.offsetY,
                            startAngle: h,
                            endAngle: f,
                            circumference: y,
                            outerRadius: Y,
                            innerRadius: L,
                            label: he.valueAtIndexOrDefault(M.label, t, o.data.labels[t])
                        }
                    });
                    var k = e._model;
                    n && _.animateRotate || (k.startAngle = 0 === t ? l.rotation : r.getMeta().data[t - 1]._model.endAngle,
                        k.endAngle = k.startAngle + k.circumference),
                        e.pivot()
                },
                calculateTotal: function () {
                    var e, t = this.getDataset(), meta = this.getMeta(), n = 0;
                    return he.each(meta.data, (function (element, r) {
                        e = t.data[r],
                            isNaN(e) || element.hidden || (n += Math.abs(e))
                    }
                    )),
                        n
                },
                calculateCircumference: function (e) {
                    var t = this.getMeta().total;
                    return t > 0 && !isNaN(e) ? pt * (Math.abs(e) / t) : 0
                },
                getMaxBorderWidth: function (e) {
                    var i, t, meta, n, r, o, d, l, _ = this, m = 0, c = _.chart;
                    if (!e)
                        for (i = 0,
                            t = c.data.datasets.length; i < t; ++i)
                            if (c.isDatasetVisible(i)) {
                                e = (meta = c.getDatasetMeta(i)).data,
                                    i !== _.index && (r = meta.controller);
                                break
                            }
                    if (!e)
                        return 0;
                    for (i = 0,
                        t = e.length; i < t; ++i)
                        n = e[i],
                            r ? (r._configure(),
                                o = r._resolveDataElementOptions(n, i)) : o = n._options,
                            "inner" !== o.borderAlign && (d = o.borderWidth,
                                m = (l = o.hoverBorderWidth) > (m = d > m ? d : m) ? l : m);
                    return m
                },
                setHoverStyle: function (e) {
                    var t = e._model
                        , n = e._options
                        , r = he.getHoverColor;
                    e.$previousStyle = {
                        backgroundColor: t.backgroundColor,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    },
                        t.backgroundColor = ft(n.hoverBackgroundColor, r(n.backgroundColor)),
                        t.borderColor = ft(n.hoverBorderColor, r(n.borderColor)),
                        t.borderWidth = ft(n.hoverBorderWidth, n.borderWidth)
                },
                _getRingWeightOffset: function (e) {
                    for (var t = 0, i = 0; i < e; ++i)
                        this.chart.isDatasetVisible(i) && (t += this._getRingWeight(i));
                    return t
                },
                _getRingWeight: function (e) {
                    return Math.max(ft(this.chart.data.datasets[e].weight, 1), 0)
                },
                _getVisibleDatasetWeightTotal: function () {
                    return this._getRingWeightOffset(this.chart.data.datasets.length)
                }
            });
            ie._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        type: "category",
                        position: "left",
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    mode: "index",
                    axis: "y"
                }
            }),
                ie._set("global", {
                    datasets: {
                        horizontalBar: {
                            categoryPercentage: .8,
                            barPercentage: .9
                        }
                    }
                });
            var Lt = _t.extend({
                _getValueScaleId: function () {
                    return this.getMeta().xAxisID
                },
                _getIndexScaleId: function () {
                    return this.getMeta().yAxisID
                }
            })
                , Yt = he.valueOrDefault
                , vt = he.options.resolve
                , bt = he.canvas._isPointInArea;
            function kt(e, t) {
                var n = e && e.options.ticks || {}
                    , r = n.reverse
                    , o = void 0 === n.min ? t : 0
                    , d = void 0 === n.max ? t : 0;
                return {
                    start: r ? d : o,
                    end: r ? o : d
                }
            }
            function Dt(e, t, n) {
                var r = n / 2
                    , o = kt(e, r)
                    , d = kt(t, r);
                return {
                    top: d.end,
                    right: o.end,
                    bottom: d.start,
                    left: o.start
                }
            }
            function wt(e) {
                var t, n, b, r;
                return he.isObject(e) ? (t = e.top,
                    n = e.right,
                    b = e.bottom,
                    r = e.left) : t = n = b = r = e,
                {
                    top: t,
                    right: n,
                    bottom: b,
                    left: r
                }
            }
            ie._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            });
            var Tt = He.extend({
                datasetElementType: Qe.Line,
                dataElementType: Qe.Point,
                _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                update: function (e) {
                    var i, t, n = this, meta = n.getMeta(), line = meta.dataset, r = meta.data || [], o = n.chart.options, d = n._config, l = n._showLine = Yt(d.showLine, o.showLines);
                    for (n._xScale = n.getScaleForId(meta.xAxisID),
                        n._yScale = n.getScaleForId(meta.yAxisID),
                        l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension),
                            line._scale = n._yScale,
                            line._datasetIndex = n.index,
                            line._children = r,
                            line._model = n._resolveDatasetElementOptions(line),
                            line.pivot()),
                        i = 0,
                        t = r.length; i < t; ++i)
                        n.updateElement(r[i], i, e);
                    for (l && 0 !== line._model.tension && n.updateBezierControlPoints(),
                        i = 0,
                        t = r.length; i < t; ++i)
                        r[i].pivot()
                },
                updateElement: function (e, t, n) {
                    var r, o, d = this, meta = d.getMeta(), l = e.custom || {}, _ = d.getDataset(), m = d.index, c = _.data[t], h = d._xScale, f = d._yScale, M = meta.dataset._model, y = d._resolveDataElementOptions(e, t);
                    r = h.getPixelForValue("object" == typeof c ? c : NaN, t, m),
                        o = n ? f.getBasePixel() : d.calculatePointY(c, t, m),
                        e._xScale = h,
                        e._yScale = f,
                        e._options = y,
                        e._datasetIndex = m,
                        e._index = t,
                        e._model = {
                            x: r,
                            y: o,
                            skip: l.skip || isNaN(r) || isNaN(o),
                            radius: y.radius,
                            pointStyle: y.pointStyle,
                            rotation: y.rotation,
                            backgroundColor: y.backgroundColor,
                            borderColor: y.borderColor,
                            borderWidth: y.borderWidth,
                            tension: Yt(l.tension, M ? M.tension : 0),
                            steppedLine: !!M && M.steppedLine,
                            hitRadius: y.hitRadius
                        }
                },
                _resolveDatasetElementOptions: function (element) {
                    var e = this
                        , t = e._config
                        , n = element.custom || {}
                        , r = e.chart.options
                        , o = r.elements.line
                        , d = He.prototype._resolveDatasetElementOptions.apply(e, arguments);
                    return d.spanGaps = Yt(t.spanGaps, r.spanGaps),
                        d.tension = Yt(t.lineTension, o.tension),
                        d.steppedLine = vt([n.steppedLine, t.steppedLine, o.stepped]),
                        d.clip = wt(Yt(t.clip, Dt(e._xScale, e._yScale, d.borderWidth))),
                        d
                },
                calculatePointY: function (e, t, n) {
                    var i, r, o, d, l, _, m, c = this, h = c.chart, f = c._yScale, M = 0, y = 0;
                    if (f.options.stacked) {
                        for (l = +f.getRightValue(e),
                            m = (_ = h._getSortedVisibleDatasetMetas()).length,
                            i = 0; i < m && (o = _[i]).index !== n; ++i)
                            r = h.data.datasets[o.index],
                                "line" === o.type && o.yAxisID === f.id && ((d = +f.getRightValue(r.data[t])) < 0 ? y += d || 0 : M += d || 0);
                        return l < 0 ? f.getPixelForValue(y + l) : f.getPixelForValue(M + l)
                    }
                    return f.getPixelForValue(e)
                },
                updateBezierControlPoints: function () {
                    var i, e, t, n, r = this, o = r.chart, meta = r.getMeta(), d = meta.dataset._model, area = o.chartArea, l = meta.data || [];
                    function _(e, t, n) {
                        return Math.max(Math.min(e, n), t)
                    }
                    if (d.spanGaps && (l = l.filter((function (e) {
                        return !e._model.skip
                    }
                    ))),
                        "monotone" === d.cubicInterpolationMode)
                        he.splineCurveMonotone(l);
                    else
                        for (i = 0,
                            e = l.length; i < e; ++i)
                            t = l[i]._model,
                                n = he.splineCurve(he.previousItem(l, i)._model, t, he.nextItem(l, i)._model, d.tension),
                                t.controlPointPreviousX = n.previous.x,
                                t.controlPointPreviousY = n.previous.y,
                                t.controlPointNextX = n.next.x,
                                t.controlPointNextY = n.next.y;
                    if (o.options.elements.line.capBezierPoints)
                        for (i = 0,
                            e = l.length; i < e; ++i)
                            t = l[i]._model,
                                bt(t, area) && (i > 0 && bt(l[i - 1]._model, area) && (t.controlPointPreviousX = _(t.controlPointPreviousX, area.left, area.right),
                                    t.controlPointPreviousY = _(t.controlPointPreviousY, area.top, area.bottom)),
                                    i < l.length - 1 && bt(l[i + 1]._model, area) && (t.controlPointNextX = _(t.controlPointNextX, area.left, area.right),
                                        t.controlPointNextY = _(t.controlPointNextY, area.top, area.bottom)))
                },
                draw: function () {
                    var e, t = this, n = t.chart, meta = t.getMeta(), r = meta.data || [], area = n.chartArea, canvas = n.canvas, i = 0, o = r.length;
                    for (t._showLine && (e = meta.dataset._model.clip,
                        he.canvas.clipArea(n.ctx, {
                            left: !1 === e.left ? 0 : area.left - e.left,
                            right: !1 === e.right ? canvas.width : area.right + e.right,
                            top: !1 === e.top ? 0 : area.top - e.top,
                            bottom: !1 === e.bottom ? canvas.height : area.bottom + e.bottom
                        }),
                        meta.dataset.draw(),
                        he.canvas.unclipArea(n.ctx)); i < o; ++i)
                        r[i].draw(area)
                },
                setHoverStyle: function (e) {
                    var t = e._model
                        , n = e._options
                        , r = he.getHoverColor;
                    e.$previousStyle = {
                        backgroundColor: t.backgroundColor,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth,
                        radius: t.radius
                    },
                        t.backgroundColor = Yt(n.hoverBackgroundColor, r(n.backgroundColor)),
                        t.borderColor = Yt(n.hoverBorderColor, r(n.borderColor)),
                        t.borderWidth = Yt(n.hoverBorderWidth, n.borderWidth),
                        t.radius = Yt(n.hoverRadius, n.radius)
                }
            })
                , xt = he.options.resolve;
            ie._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function (e) {
                    var i, t, n, r = document.createElement("ul"), data = e.data, o = data.datasets, d = data.labels;
                    if (r.setAttribute("class", e.id + "-legend"),
                        o.length)
                        for (i = 0,
                            t = o[0].data.length; i < t; ++i)
                            (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[i],
                                d[i] && n.appendChild(document.createTextNode(d[i]));
                    return r.outerHTML
                },
                legend: {
                    labels: {
                        generateLabels: function (e) {
                            var data = e.data;
                            return data.labels.length && data.datasets.length ? data.labels.map((function (label, i) {
                                var meta = e.getDatasetMeta(0)
                                    , style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    lineWidth: style.borderWidth,
                                    hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                                    index: i
                                }
                            }
                            )) : []
                        }
                    },
                    onClick: function (e, t) {
                        var i, n, meta, r = t.index, o = this.chart;
                        for (i = 0,
                            n = (o.data.datasets || []).length; i < n; ++i)
                            (meta = o.getDatasetMeta(i)).data[r].hidden = !meta.data[r].hidden;
                        o.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (e, data) {
                            return data.labels[e.index] + ": " + e.yLabel
                        }
                    }
                }
            });
            var St = He.extend({
                dataElementType: Qe.Arc,
                linkScales: he.noop,
                _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (e) {
                    var i, t, n, r = this, o = r.getDataset(), meta = r.getMeta(), d = r.chart.options.startAngle || 0, l = r._starts = [], _ = r._angles = [], m = meta.data;
                    for (r._updateRadius(),
                        meta.count = r.countVisibleElements(),
                        i = 0,
                        t = o.data.length; i < t; i++)
                        l[i] = d,
                            n = r._computeAngle(i),
                            _[i] = n,
                            d += n;
                    for (i = 0,
                        t = m.length; i < t; ++i)
                        m[i]._options = r._resolveDataElementOptions(m[i], i),
                            r.updateElement(m[i], i, e)
                },
                _updateRadius: function () {
                    var e = this
                        , t = e.chart
                        , n = t.chartArea
                        , r = t.options
                        , o = Math.min(n.right - n.left, n.bottom - n.top);
                    t.outerRadius = Math.max(o / 2, 0),
                        t.innerRadius = Math.max(r.cutoutPercentage ? t.outerRadius / 100 * r.cutoutPercentage : 1, 0),
                        t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(),
                        e.outerRadius = t.outerRadius - t.radiusLength * e.index,
                        e.innerRadius = e.outerRadius - t.radiusLength
                },
                updateElement: function (e, t, n) {
                    var r = this
                        , o = r.chart
                        , d = r.getDataset()
                        , l = o.options
                        , _ = l.animation
                        , m = o.scale
                        , c = o.data.labels
                        , h = m.xCenter
                        , f = m.yCenter
                        , M = l.startAngle
                        , y = e.hidden ? 0 : m.getDistanceFromCenterForValue(d.data[t])
                        , L = r._starts[t]
                        , Y = L + (e.hidden ? 0 : r._angles[t])
                        , v = _.animateScale ? 0 : m.getDistanceFromCenterForValue(d.data[t])
                        , k = e._options || {};
                    he.extend(e, {
                        _datasetIndex: r.index,
                        _index: t,
                        _scale: m,
                        _model: {
                            backgroundColor: k.backgroundColor,
                            borderColor: k.borderColor,
                            borderWidth: k.borderWidth,
                            borderAlign: k.borderAlign,
                            x: h,
                            y: f,
                            innerRadius: 0,
                            outerRadius: n ? v : y,
                            startAngle: n && _.animateRotate ? M : L,
                            endAngle: n && _.animateRotate ? M : Y,
                            label: he.valueAtIndexOrDefault(c, t, c[t])
                        }
                    }),
                        e.pivot()
                },
                countVisibleElements: function () {
                    var e = this.getDataset()
                        , meta = this.getMeta()
                        , t = 0;
                    return he.each(meta.data, (function (element, n) {
                        isNaN(e.data[n]) || element.hidden || t++
                    }
                    )),
                        t
                },
                setHoverStyle: function (e) {
                    var t = e._model
                        , n = e._options
                        , r = he.getHoverColor
                        , o = he.valueOrDefault;
                    e.$previousStyle = {
                        backgroundColor: t.backgroundColor,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    },
                        t.backgroundColor = o(n.hoverBackgroundColor, r(n.backgroundColor)),
                        t.borderColor = o(n.hoverBorderColor, r(n.borderColor)),
                        t.borderWidth = o(n.hoverBorderWidth, n.borderWidth)
                },
                _computeAngle: function (e) {
                    var t = this
                        , n = this.getMeta().count
                        , r = t.getDataset()
                        , meta = t.getMeta();
                    if (isNaN(r.data[e]) || meta.data[e].hidden)
                        return 0;
                    var o = {
                        chart: t.chart,
                        dataIndex: e,
                        dataset: r,
                        datasetIndex: t.index
                    };
                    return xt([t.chart.options.elements.arc.angle, 2 * Math.PI / n], o, e)
                }
            });
            ie._set("pie", he.clone(ie.doughnut)),
                ie._set("pie", {
                    cutoutPercentage: 0
                });
            var Ht = yt
                , jt = he.valueOrDefault;
            ie._set("radar", {
                spanGaps: !1,
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        fill: "start",
                        tension: 0
                    }
                }
            });
            var Pt = He.extend({
                datasetElementType: Qe.Line,
                dataElementType: Qe.Point,
                linkScales: he.noop,
                _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
                _dataElementOptions: {
                    backgroundColor: "pointBackgroundColor",
                    borderColor: "pointBorderColor",
                    borderWidth: "pointBorderWidth",
                    hitRadius: "pointHitRadius",
                    hoverBackgroundColor: "pointHoverBackgroundColor",
                    hoverBorderColor: "pointHoverBorderColor",
                    hoverBorderWidth: "pointHoverBorderWidth",
                    hoverRadius: "pointHoverRadius",
                    pointStyle: "pointStyle",
                    radius: "pointRadius",
                    rotation: "pointRotation"
                },
                _getIndexScaleId: function () {
                    return this.chart.scale.id
                },
                _getValueScaleId: function () {
                    return this.chart.scale.id
                },
                update: function (e) {
                    var i, t, n = this, meta = n.getMeta(), line = meta.dataset, r = meta.data || [], o = n.chart.scale, d = n._config;
                    for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension),
                        line._scale = o,
                        line._datasetIndex = n.index,
                        line._children = r,
                        line._loop = !0,
                        line._model = n._resolveDatasetElementOptions(line),
                        line.pivot(),
                        i = 0,
                        t = r.length; i < t; ++i)
                        n.updateElement(r[i], i, e);
                    for (n.updateBezierControlPoints(),
                        i = 0,
                        t = r.length; i < t; ++i)
                        r[i].pivot()
                },
                updateElement: function (e, t, n) {
                    var r = this
                        , o = e.custom || {}
                        , d = r.getDataset()
                        , l = r.chart.scale
                        , _ = l.getPointPositionForValue(t, d.data[t])
                        , m = r._resolveDataElementOptions(e, t)
                        , c = r.getMeta().dataset._model
                        , h = n ? l.xCenter : _.x
                        , f = n ? l.yCenter : _.y;
                    e._scale = l,
                        e._options = m,
                        e._datasetIndex = r.index,
                        e._index = t,
                        e._model = {
                            x: h,
                            y: f,
                            skip: o.skip || isNaN(h) || isNaN(f),
                            radius: m.radius,
                            pointStyle: m.pointStyle,
                            rotation: m.rotation,
                            backgroundColor: m.backgroundColor,
                            borderColor: m.borderColor,
                            borderWidth: m.borderWidth,
                            tension: jt(o.tension, c ? c.tension : 0),
                            hitRadius: m.hitRadius
                        }
                },
                _resolveDatasetElementOptions: function () {
                    var e = this
                        , t = e._config
                        , n = e.chart.options
                        , r = He.prototype._resolveDatasetElementOptions.apply(e, arguments);
                    return r.spanGaps = jt(t.spanGaps, n.spanGaps),
                        r.tension = jt(t.lineTension, n.elements.line.tension),
                        r
                },
                updateBezierControlPoints: function () {
                    var i, e, t, n, r = this, meta = r.getMeta(), area = r.chart.chartArea, o = meta.data || [];
                    function d(e, t, n) {
                        return Math.max(Math.min(e, n), t)
                    }
                    for (meta.dataset._model.spanGaps && (o = o.filter((function (e) {
                        return !e._model.skip
                    }
                    ))),
                        i = 0,
                        e = o.length; i < e; ++i)
                        t = o[i]._model,
                            n = he.splineCurve(he.previousItem(o, i, !0)._model, t, he.nextItem(o, i, !0)._model, t.tension),
                            t.controlPointPreviousX = d(n.previous.x, area.left, area.right),
                            t.controlPointPreviousY = d(n.previous.y, area.top, area.bottom),
                            t.controlPointNextX = d(n.next.x, area.left, area.right),
                            t.controlPointNextY = d(n.next.y, area.top, area.bottom)
                },
                setHoverStyle: function (e) {
                    var t = e._model
                        , n = e._options
                        , r = he.getHoverColor;
                    e.$previousStyle = {
                        backgroundColor: t.backgroundColor,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth,
                        radius: t.radius
                    },
                        t.backgroundColor = jt(n.hoverBackgroundColor, r(n.backgroundColor)),
                        t.borderColor = jt(n.hoverBorderColor, r(n.borderColor)),
                        t.borderWidth = jt(n.hoverBorderWidth, n.borderWidth),
                        t.radius = jt(n.hoverRadius, n.radius)
                }
            });
            ie._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (e) {
                            return "(" + e.xLabel + ", " + e.yLabel + ")"
                        }
                    }
                }
            }),
                ie._set("global", {
                    datasets: {
                        scatter: {
                            showLine: !1
                        }
                    }
                });
            var Ot = {
                bar: _t,
                bubble: ht,
                doughnut: yt,
                horizontalBar: Lt,
                line: Tt,
                polarArea: St,
                pie: Ht,
                radar: Pt,
                scatter: Tt
            };
            function At(e, t) {
                return e.native ? {
                    x: e.x,
                    y: e.y
                } : he.getRelativePosition(e, t)
            }
            function Ft(e, t) {
                var n, i, r, o, d, element, l = e._getSortedVisibleDatasetMetas();
                for (i = 0,
                    o = l.length; i < o; ++i)
                    for (r = 0,
                        d = (n = l[i].data).length; r < d; ++r)
                        (element = n[r])._view.skip || t(element)
            }
            function Wt(e, t) {
                var n = [];
                return Ft(e, (function (element) {
                    element.inRange(t.x, t.y) && n.push(element)
                }
                )),
                    n
            }
            function Ct(e, t, n, r) {
                var o = Number.POSITIVE_INFINITY
                    , d = [];
                return Ft(e, (function (element) {
                    if (!n || element.inRange(t.x, t.y)) {
                        var e = element.getCenterPoint()
                            , l = r(t, e);
                        l < o ? (d = [element],
                            o = l) : l === o && d.push(element)
                    }
                }
                )),
                    d
            }
            function Et(e) {
                var t = -1 !== e.indexOf("x")
                    , n = -1 !== e.indexOf("y");
                return function (e, r) {
                    var o = t ? Math.abs(e.x - r.x) : 0
                        , d = n ? Math.abs(e.y - r.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(d, 2))
                }
            }
            function zt(e, t, n) {
                var r = At(t, e);
                n.axis = n.axis || "x";
                var o = Et(n.axis)
                    , d = n.intersect ? Wt(e, r) : Ct(e, r, !1, o)
                    , l = [];
                return d.length ? (e._getSortedVisibleDatasetMetas().forEach((function (meta) {
                    var element = meta.data[d[0]._index];
                    element && !element._view.skip && l.push(element)
                }
                )),
                    l) : []
            }
            var It = {
                modes: {
                    single: function (e, t) {
                        var n = At(t, e)
                            , r = [];
                        return Ft(e, (function (element) {
                            if (element.inRange(n.x, n.y))
                                return r.push(element),
                                    r
                        }
                        )),
                            r.slice(0, 1)
                    },
                    label: zt,
                    index: zt,
                    dataset: function (e, t, n) {
                        var r = At(t, e);
                        n.axis = n.axis || "xy";
                        var o = Et(n.axis)
                            , d = n.intersect ? Wt(e, r) : Ct(e, r, !1, o);
                        return d.length > 0 && (d = e.getDatasetMeta(d[0]._datasetIndex).data),
                            d
                    },
                    "x-axis": function (e, t) {
                        return zt(e, t, {
                            intersect: !1
                        })
                    },
                    point: function (e, t) {
                        return Wt(e, At(t, e))
                    },
                    nearest: function (e, t, n) {
                        var r = At(t, e);
                        n.axis = n.axis || "xy";
                        var o = Et(n.axis);
                        return Ct(e, r, n.intersect, o)
                    },
                    x: function (e, t, n) {
                        var r = At(t, e)
                            , o = []
                            , d = !1;
                        return Ft(e, (function (element) {
                            element.inXRange(r.x) && o.push(element),
                                element.inRange(r.x, r.y) && (d = !0)
                        }
                        )),
                            n.intersect && !d && (o = []),
                            o
                    },
                    y: function (e, t, n) {
                        var r = At(t, e)
                            , o = []
                            , d = !1;
                        return Ft(e, (function (element) {
                            element.inYRange(r.y) && o.push(element),
                                element.inRange(r.x, r.y) && (d = !0)
                        }
                        )),
                            n.intersect && !d && (o = []),
                            o
                    }
                }
            }
                , Nt = he.extend;
            function Rt(e, t) {
                return he.where(e, (function (e) {
                    return e.pos === t
                }
                ))
            }
            function Vt(e, t) {
                return e.sort((function (a, b) {
                    var e = t ? b : a
                        , n = t ? a : b;
                    return e.weight === n.weight ? e.index - n.index : e.weight - n.weight
                }
                ))
            }
            function Bt(e) {
                var i, t, n, r = [];
                for (i = 0,
                    t = (e || []).length; i < t; ++i)
                    n = e[i],
                        r.push({
                            index: i,
                            box: n,
                            pos: n.position,
                            horizontal: n.isHorizontal(),
                            weight: n.weight
                        });
                return r
            }
            function Jt(e, t) {
                var i, n, r;
                for (i = 0,
                    n = e.length; i < n; ++i)
                    (r = e[i]).width = r.horizontal ? r.box.fullWidth && t.availableWidth : t.vBoxMaxWidth,
                        r.height = r.horizontal && t.hBoxMaxHeight
            }
            function Ut(e) {
                var t = Bt(e)
                    , n = Vt(Rt(t, "left"), !0)
                    , r = Vt(Rt(t, "right"))
                    , o = Vt(Rt(t, "top"), !0)
                    , d = Vt(Rt(t, "bottom"));
                return {
                    leftAndTop: n.concat(o),
                    rightAndBottom: r.concat(d),
                    chartArea: Rt(t, "chartArea"),
                    vertical: n.concat(r),
                    horizontal: o.concat(d)
                }
            }
            function Gt(e, t, a, b) {
                return Math.max(e[a], t[a]) + Math.max(e[b], t[b])
            }
            function qt(e, t, n) {
                var r, o, d = n.box, l = e.maxPadding;
                if (n.size && (e[n.pos] -= n.size),
                    n.size = n.horizontal ? d.height : d.width,
                    e[n.pos] += n.size,
                    d.getPadding) {
                    var _ = d.getPadding();
                    l.top = Math.max(l.top, _.top),
                        l.left = Math.max(l.left, _.left),
                        l.bottom = Math.max(l.bottom, _.bottom),
                        l.right = Math.max(l.right, _.right)
                }
                if (r = t.outerWidth - Gt(l, e, "left", "right"),
                    o = t.outerHeight - Gt(l, e, "top", "bottom"),
                    r !== e.w || o !== e.h) {
                    e.w = r,
                        e.h = o;
                    var m = n.horizontal ? [r, e.w] : [o, e.h];
                    return !(m[0] === m[1] || isNaN(m[0]) && isNaN(m[1]))
                }
            }
            function $t(e) {
                var t = e.maxPadding;
                function n(n) {
                    var r = Math.max(t[n] - e[n], 0);
                    return e[n] += r,
                        r
                }
                e.y += n("top"),
                    e.x += n("left"),
                    n("right"),
                    n("bottom")
            }
            function Kt(e, t) {
                var n = t.maxPadding;
                function r(e) {
                    var r = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    return e.forEach((function (e) {
                        r[e] = Math.max(t[e], n[e])
                    }
                    )),
                        r
                }
                return r(e ? ["left", "right"] : ["top", "bottom"])
            }
            function Zt(e, t, n) {
                var i, r, o, d, l, _, m = [];
                for (i = 0,
                    r = e.length; i < r; ++i)
                    (d = (o = e[i]).box).update(o.width || t.w, o.height || t.h, Kt(o.horizontal, t)),
                        qt(t, n, o) && (_ = !0,
                            m.length && (l = !0)),
                        d.fullWidth || m.push(o);
                return l && Zt(m, t, n) || _
            }
            function Xt(e, t, n) {
                var i, r, o, d, l = n.padding, _ = t.x, m = t.y;
                for (i = 0,
                    r = e.length; i < r; ++i)
                    d = (o = e[i]).box,
                        o.horizontal ? (d.left = d.fullWidth ? l.left : t.left,
                            d.right = d.fullWidth ? n.outerWidth - l.right : t.left + t.w,
                            d.top = m,
                            d.bottom = m + d.height,
                            d.width = d.right - d.left,
                            m = d.bottom) : (d.left = _,
                                d.right = _ + d.width,
                                d.top = t.top,
                                d.bottom = t.top + t.h,
                                d.height = d.bottom - d.top,
                                _ = d.right);
                t.x = _,
                    t.y = m
            }
            ie._set("global", {
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            });
            var Qt = {
                defaults: {},
                addBox: function (e, t) {
                    e.boxes || (e.boxes = []),
                        t.fullWidth = t.fullWidth || !1,
                        t.position = t.position || "top",
                        t.weight = t.weight || 0,
                        t._layers = t._layers || function () {
                            return [{
                                z: 0,
                                draw: function () {
                                    t.draw.apply(t, arguments)
                                }
                            }]
                        }
                        ,
                        e.boxes.push(t)
                },
                removeBox: function (e, t) {
                    var n = e.boxes ? e.boxes.indexOf(t) : -1;
                    -1 !== n && e.boxes.splice(n, 1)
                },
                configure: function (e, t, n) {
                    for (var r, o = ["fullWidth", "position", "weight"], d = o.length, i = 0; i < d; ++i)
                        r = o[i],
                            n.hasOwnProperty(r) && (t[r] = n[r])
                },
                update: function (e, t, n) {
                    if (e) {
                        var r = e.options.layout || {}
                            , o = he.options.toPadding(r.padding)
                            , d = t - o.width
                            , l = n - o.height
                            , _ = Ut(e.boxes)
                            , m = _.vertical
                            , c = _.horizontal
                            , h = Object.freeze({
                                outerWidth: t,
                                outerHeight: n,
                                padding: o,
                                availableWidth: d,
                                vBoxMaxWidth: d / 2 / m.length,
                                hBoxMaxHeight: l / 2
                            })
                            , f = Nt({
                                maxPadding: Nt({}, o),
                                w: d,
                                h: l,
                                x: o.left,
                                y: o.top
                            }, o);
                        Jt(m.concat(c), h),
                            Zt(m, f, h),
                            Zt(c, f, h) && Zt(m, f, h),
                            $t(f),
                            Xt(_.leftAndTop, f, h),
                            f.x += f.w,
                            f.y += f.h,
                            Xt(_.rightAndBottom, f, h),
                            e.chartArea = {
                                left: f.left,
                                top: f.top,
                                right: f.left + f.w,
                                bottom: f.top + f.h
                            },
                            he.each(_.chartArea, (function (t) {
                                var n = t.box;
                                Nt(n, e.chartArea),
                                    n.update(f.w, f.h)
                            }
                            ))
                    }
                }
            }
                , ea = {
                    acquireContext: function (e) {
                        return e && e.canvas && (e = e.canvas),
                            e && e.getContext("2d") || null
                    }
                }
                , ta = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n"
                , aa = n(Object.freeze({
                    __proto__: null,
                    default: ta
                }))
                , na = "$chartjs"
                , ra = "chartjs-"
                , ia = ra + "size-monitor"
                , sa = ra + "render-monitor"
                , oa = ra + "render-animation"
                , da = ["animationstart", "webkitAnimationStart"]
                , la = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };
            function ua(element, e) {
                var t = he.getStyle(element, e)
                    , n = t && t.match(/^(\d+)(\.\d+)?px$/);
                return n ? Number(n[1]) : void 0
            }
            function _a(canvas, e) {
                var style = canvas.style
                    , t = canvas.getAttribute("height")
                    , n = canvas.getAttribute("width");
                if (canvas[na] = {
                    initial: {
                        height: t,
                        width: n,
                        style: {
                            display: style.display,
                            height: style.height,
                            width: style.width
                        }
                    }
                },
                    style.display = style.display || "block",
                    null === n || "" === n) {
                    var r = ua(canvas, "width");
                    void 0 !== r && (canvas.width = r)
                }
                if (null === t || "" === t)
                    if ("" === canvas.style.height)
                        canvas.height = canvas.width / (e.options.aspectRatio || 2);
                    else {
                        var o = ua(canvas, "height");
                        void 0 !== r && (canvas.height = o)
                    }
                return canvas
            }
            var ma = function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) { }
                return e
            }()
                , ca = !!ma && {
                    passive: !0
                };
            function ha(e, t, n) {
                e.addEventListener(t, n, ca)
            }
            function fa(e, t, n) {
                e.removeEventListener(t, n, ca)
            }
            function Ma(e, t, n, r, o) {
                return {
                    type: e,
                    chart: t,
                    native: o || null,
                    x: void 0 !== n ? n : null,
                    y: void 0 !== r ? r : null
                }
            }
            function pa(e, t) {
                var n = la[e.type] || e.type
                    , r = he.getRelativePosition(e, t);
                return Ma(n, t, r.x, r.y, e)
            }
            function ga(e, t) {
                var n = !1
                    , r = [];
                return function () {
                    r = Array.prototype.slice.call(arguments),
                        t = t || this,
                        n || (n = !0,
                            he.requestAnimFrame.call(window, (function () {
                                n = !1,
                                    e.apply(t, r)
                            }
                            )))
                }
            }
            function ya(e) {
                var t = document.createElement("div");
                return t.className = e || "",
                    t
            }
            function La(e) {
                var t = 1e6
                    , n = ya(ia)
                    , r = ya(ia + "-expand")
                    , o = ya(ia + "-shrink");
                r.appendChild(ya()),
                    o.appendChild(ya()),
                    n.appendChild(r),
                    n.appendChild(o),
                    n._reset = function () {
                        r.scrollLeft = t,
                            r.scrollTop = t,
                            o.scrollLeft = t,
                            o.scrollTop = t
                    }
                    ;
                var d = function () {
                    n._reset(),
                        e()
                };
                return ha(r, "scroll", d.bind(r, "expand")),
                    ha(o, "scroll", d.bind(o, "shrink")),
                    n
            }
            function Ya(e, t) {
                var n = e[na] || (e[na] = {})
                    , r = n.renderProxy = function (e) {
                        e.animationName === oa && t()
                    }
                    ;
                he.each(da, (function (t) {
                    ha(e, t, r)
                }
                )),
                    n.reflow = !!e.offsetParent,
                    e.classList.add(sa)
            }
            function va(e) {
                var t = e[na] || {}
                    , n = t.renderProxy;
                n && (he.each(da, (function (t) {
                    fa(e, t, n)
                }
                )),
                    delete t.renderProxy),
                    e.classList.remove(sa)
            }
            function ba(e, t, n) {
                var r = e[na] || (e[na] = {})
                    , o = r.resizer = La(ga((function () {
                        if (r.resizer) {
                            var o = n.options.maintainAspectRatio && e.parentNode
                                , d = o ? o.clientWidth : 0;
                            t(Ma("resize", n)),
                                o && o.clientWidth < d && n.canvas && t(Ma("resize", n))
                        }
                    }
                    )));
                Ya(e, (function () {
                    if (r.resizer) {
                        var t = e.parentNode;
                        t && t !== o.parentNode && t.insertBefore(o, t.firstChild),
                            o._reset()
                    }
                }
                ))
            }
            function ka(e) {
                var t = e[na] || {}
                    , n = t.resizer;
                delete t.resizer,
                    va(e),
                    n && n.parentNode && n.parentNode.removeChild(n)
            }
            function Da(e, t) {
                var n = e[na] || (e[na] = {});
                if (!n.containsStyles) {
                    n.containsStyles = !0,
                        t = "/* Chart.js */\n" + t;
                    var style = document.createElement("style");
                    style.setAttribute("type", "text/css"),
                        style.appendChild(document.createTextNode(t)),
                        e.appendChild(style)
                }
            }
            var wa = {
                disableCSSInjection: !1,
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                _ensureLoaded: function (canvas) {
                    if (!this.disableCSSInjection) {
                        var e = canvas.getRootNode ? canvas.getRootNode() : document;
                        Da(e.host ? e : document.head, aa)
                    }
                },
                acquireContext: function (e, t) {
                    "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]),
                        e && e.canvas && (e = e.canvas);
                    var n = e && e.getContext && e.getContext("2d");
                    return n && n.canvas === e ? (this._ensureLoaded(e),
                        _a(e, t),
                        n) : null
                },
                releaseContext: function (e) {
                    var canvas = e.canvas;
                    if (canvas[na]) {
                        var t = canvas[na].initial;
                        ["height", "width"].forEach((function (e) {
                            var n = t[e];
                            he.isNullOrUndef(n) ? canvas.removeAttribute(e) : canvas.setAttribute(e, n)
                        }
                        )),
                            he.each(t.style || {}, (function (e, t) {
                                canvas.style[t] = e
                            }
                            )),
                            canvas.width = canvas.width,
                            delete canvas[na]
                    }
                },
                addEventListener: function (e, t, n) {
                    var canvas = e.canvas;
                    if ("resize" !== t) {
                        var r = n[na] || (n[na] = {});
                        ha(canvas, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function (t) {
                            n(pa(t, e))
                        }
                        )
                    } else
                        ba(canvas, n, e)
                },
                removeEventListener: function (e, t, n) {
                    var canvas = e.canvas;
                    if ("resize" !== t) {
                        var r = ((n[na] || {}).proxies || {})[e.id + "_" + t];
                        r && fa(canvas, t, r)
                    } else
                        ka(canvas)
                }
            };
            he.addEvent = ha,
                he.removeEvent = fa;
            var Ta = wa._enabled ? wa : ea
                , xa = he.extend({
                    initialize: function () { },
                    acquireContext: function () { },
                    releaseContext: function () { },
                    addEventListener: function () { },
                    removeEventListener: function () { }
                }, Ta);
            ie._set("global", {
                plugins: {}
            });
            var Sa = {
                _plugins: [],
                _cacheId: 0,
                register: function (e) {
                    var p = this._plugins;
                    [].concat(e).forEach((function (e) {
                        -1 === p.indexOf(e) && p.push(e)
                    }
                    )),
                        this._cacheId++
                },
                unregister: function (e) {
                    var p = this._plugins;
                    [].concat(e).forEach((function (e) {
                        var t = p.indexOf(e);
                        -1 !== t && p.splice(t, 1)
                    }
                    )),
                        this._cacheId++
                },
                clear: function () {
                    this._plugins = [],
                        this._cacheId++
                },
                count: function () {
                    return this._plugins.length
                },
                getAll: function () {
                    return this._plugins
                },
                notify: function (e, t, n) {
                    var i, r, o, d, l, _ = this.descriptors(e), m = _.length;
                    for (i = 0; i < m; ++i)
                        if ("function" == typeof (l = (o = (r = _[i]).plugin)[t]) && ((d = [e].concat(n || [])).push(r.options),
                            !1 === l.apply(o, d)))
                            return !1;
                    return !0
                },
                descriptors: function (e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId)
                        return t.descriptors;
                    var n = []
                        , r = []
                        , o = e && e.config || {}
                        , d = o.options && o.options.plugins || {};
                    return this._plugins.concat(o.plugins || []).forEach((function (e) {
                        if (-1 === n.indexOf(e)) {
                            var t = e.id
                                , o = d[t];
                            !1 !== o && (!0 === o && (o = he.clone(ie.global.plugins[t])),
                                n.push(e),
                                r.push({
                                    plugin: e,
                                    options: o || {}
                                }))
                        }
                    }
                    )),
                        t.descriptors = r,
                        t.id = this._cacheId,
                        r
                },
                _invalidate: function (e) {
                    delete e.$plugins
                }
            }
                , Ha = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function (e, t, n) {
                        this.constructors[e] = t,
                            this.defaults[e] = he.clone(n)
                    },
                    getScaleConstructor: function (e) {
                        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                    },
                    getScaleDefaults: function (e) {
                        return this.defaults.hasOwnProperty(e) ? he.merge(Object.create(null), [ie.scale, this.defaults[e]]) : {}
                    },
                    updateScaleDefaults: function (e, t) {
                        var n = this;
                        n.defaults.hasOwnProperty(e) && (n.defaults[e] = he.extend(n.defaults[e], t))
                    },
                    addScalesToLayout: function (e) {
                        he.each(e.scales, (function (t) {
                            t.fullWidth = t.options.fullWidth,
                                t.position = t.options.position,
                                t.weight = t.options.weight,
                                Qt.addBox(e, t)
                        }
                        ))
                    }
                }
                , ja = he.valueOrDefault
                , Pa = he.rtl.getRtlAdapter;
            ie._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: he.noop,
                        title: function (e, data) {
                            var title = ""
                                , t = data.labels
                                , n = t ? t.length : 0;
                            if (e.length > 0) {
                                var r = e[0];
                                r.label ? title = r.label : r.xLabel ? title = r.xLabel : n > 0 && r.index < n && (title = t[r.index])
                            }
                            return title
                        },
                        afterTitle: he.noop,
                        beforeBody: he.noop,
                        beforeLabel: he.noop,
                        label: function (e, data) {
                            var label = data.datasets[e.datasetIndex].label || "";
                            return label && (label += ": "),
                                he.isNullOrUndef(e.value) ? label += e.yLabel : label += e.value,
                                label
                        },
                        labelColor: function (e, t) {
                            var view = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                            return {
                                borderColor: view.borderColor,
                                backgroundColor: view.backgroundColor
                            }
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: he.noop,
                        afterBody: he.noop,
                        beforeFooter: he.noop,
                        footer: he.noop,
                        afterFooter: he.noop
                    }
                }
            });
            var Oa = {
                average: function (e) {
                    if (!e.length)
                        return !1;
                    var i, t, n = 0, r = 0, o = 0;
                    for (i = 0,
                        t = e.length; i < t; ++i) {
                        var d = e[i];
                        if (d && d.hasValue()) {
                            var l = d.tooltipPosition();
                            n += l.x,
                                r += l.y,
                                ++o
                        }
                    }
                    return {
                        x: n / o,
                        y: r / o
                    }
                },
                nearest: function (e, t) {
                    var i, n, r, o = t.x, d = t.y, l = Number.POSITIVE_INFINITY;
                    for (i = 0,
                        n = e.length; i < n; ++i) {
                        var _ = e[i];
                        if (_ && _.hasValue()) {
                            var m = _.getCenterPoint()
                                , c = he.distanceBetweenPoints(t, m);
                            c < l && (l = c,
                                r = _)
                        }
                    }
                    if (r) {
                        var h = r.tooltipPosition();
                        o = h.x,
                            d = h.y
                    }
                    return {
                        x: o,
                        y: d
                    }
                }
            };
            function Aa(base, e) {
                return e && (he.isArray(e) ? Array.prototype.push.apply(base, e) : base.push(e)),
                    base
            }
            function Fa(e) {
                return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
            }
            function Wa(element) {
                var e = element._xScale
                    , t = element._yScale || element._scale
                    , n = element._index
                    , r = element._datasetIndex
                    , o = element._chart.getDatasetMeta(r).controller
                    , d = o._getIndexScale()
                    , l = o._getValueScale();
                return {
                    xLabel: e ? e.getLabelForIndex(n, r) : "",
                    yLabel: t ? t.getLabelForIndex(n, r) : "",
                    label: d ? "" + d.getLabelForIndex(n, r) : "",
                    value: l ? "" + l.getLabelForIndex(n, r) : "",
                    index: n,
                    datasetIndex: r,
                    x: element._model.x,
                    y: element._model.y
                }
            }
            function Ca(e) {
                var t = ie.global;
                return {
                    xPadding: e.xPadding,
                    yPadding: e.yPadding,
                    xAlign: e.xAlign,
                    yAlign: e.yAlign,
                    rtl: e.rtl,
                    textDirection: e.textDirection,
                    bodyFontColor: e.bodyFontColor,
                    _bodyFontFamily: ja(e.bodyFontFamily, t.defaultFontFamily),
                    _bodyFontStyle: ja(e.bodyFontStyle, t.defaultFontStyle),
                    _bodyAlign: e.bodyAlign,
                    bodyFontSize: ja(e.bodyFontSize, t.defaultFontSize),
                    bodySpacing: e.bodySpacing,
                    titleFontColor: e.titleFontColor,
                    _titleFontFamily: ja(e.titleFontFamily, t.defaultFontFamily),
                    _titleFontStyle: ja(e.titleFontStyle, t.defaultFontStyle),
                    titleFontSize: ja(e.titleFontSize, t.defaultFontSize),
                    _titleAlign: e.titleAlign,
                    titleSpacing: e.titleSpacing,
                    titleMarginBottom: e.titleMarginBottom,
                    footerFontColor: e.footerFontColor,
                    _footerFontFamily: ja(e.footerFontFamily, t.defaultFontFamily),
                    _footerFontStyle: ja(e.footerFontStyle, t.defaultFontStyle),
                    footerFontSize: ja(e.footerFontSize, t.defaultFontSize),
                    _footerAlign: e.footerAlign,
                    footerSpacing: e.footerSpacing,
                    footerMarginTop: e.footerMarginTop,
                    caretSize: e.caretSize,
                    cornerRadius: e.cornerRadius,
                    backgroundColor: e.backgroundColor,
                    opacity: 0,
                    legendColorBackground: e.multiKeyBackground,
                    displayColors: e.displayColors,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth
                }
            }
            function Ea(e, t) {
                var n = e._chart.ctx
                    , r = 2 * t.yPadding
                    , o = 0
                    , body = t.body
                    , d = body.reduce((function (e, t) {
                        return e + t.before.length + t.lines.length + t.after.length
                    }
                    ), 0);
                d += t.beforeBody.length + t.afterBody.length;
                var l = t.title.length
                    , _ = t.footer.length
                    , m = t.titleFontSize
                    , c = t.bodyFontSize
                    , h = t.footerFontSize;
                r += l * m,
                    r += l ? (l - 1) * t.titleSpacing : 0,
                    r += l ? t.titleMarginBottom : 0,
                    r += d * c,
                    r += d ? (d - 1) * t.bodySpacing : 0,
                    r += _ ? t.footerMarginTop : 0,
                    r += _ * h,
                    r += _ ? (_ - 1) * t.footerSpacing : 0;
                var f = 0
                    , M = function (line) {
                        o = Math.max(o, n.measureText(line).width + f)
                    };
                return n.font = he.fontString(m, t._titleFontStyle, t._titleFontFamily),
                    he.each(t.title, M),
                    n.font = he.fontString(c, t._bodyFontStyle, t._bodyFontFamily),
                    he.each(t.beforeBody.concat(t.afterBody), M),
                    f = t.displayColors ? c + 2 : 0,
                    he.each(body, (function (e) {
                        he.each(e.before, M),
                            he.each(e.lines, M),
                            he.each(e.after, M)
                    }
                    )),
                    f = 0,
                    n.font = he.fontString(h, t._footerFontStyle, t._footerFontFamily),
                    he.each(t.footer, M),
                {
                    width: o += 2 * t.xPadding,
                    height: r
                }
            }
            function za(e, t) {
                var n, r, o, d, l, _ = e._model, m = e._chart, c = e._chart.chartArea, h = "center", f = "center";
                _.y < t.height ? f = "top" : _.y > m.height - t.height && (f = "bottom");
                var M = (c.left + c.right) / 2
                    , y = (c.top + c.bottom) / 2;
                "center" === f ? (n = function (e) {
                    return e <= M
                }
                    ,
                    r = function (e) {
                        return e > M
                    }
                ) : (n = function (e) {
                    return e <= t.width / 2
                }
                    ,
                    r = function (e) {
                        return e >= m.width - t.width / 2
                    }
                ),
                    o = function (e) {
                        return e + t.width + _.caretSize + _.caretPadding > m.width
                    }
                    ,
                    d = function (e) {
                        return e - t.width - _.caretSize - _.caretPadding < 0
                    }
                    ,
                    l = function (e) {
                        return e <= y ? "top" : "bottom"
                    }
                    ,
                    n(_.x) ? (h = "left",
                        o(_.x) && (h = "center",
                            f = l(_.y))) : r(_.x) && (h = "right",
                                d(_.x) && (h = "center",
                                    f = l(_.y)));
                var L = e._options;
                return {
                    xAlign: L.xAlign ? L.xAlign : h,
                    yAlign: L.yAlign ? L.yAlign : f
                }
            }
            function Ia(e, t, n, r) {
                var o = e.x
                    , d = e.y
                    , l = e.caretSize
                    , _ = e.caretPadding
                    , m = e.cornerRadius
                    , c = n.xAlign
                    , h = n.yAlign
                    , f = l + _
                    , M = m + _;
                return "right" === c ? o -= t.width : "center" === c && ((o -= t.width / 2) + t.width > r.width && (o = r.width - t.width),
                    o < 0 && (o = 0)),
                    "top" === h ? d += f : d -= "bottom" === h ? t.height + f : t.height / 2,
                    "center" === h ? "left" === c ? o += f : "right" === c && (o -= f) : "left" === c ? o -= M : "right" === c && (o += M),
                {
                    x: o,
                    y: d
                }
            }
            function Na(e, t) {
                return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
            }
            function Ra(e) {
                return Aa([], Fa(e))
            }
            var Va = Ye.extend({
                initialize: function () {
                    this._model = Ca(this._options),
                        this._lastActive = []
                },
                getTitle: function () {
                    var e = this
                        , t = e._options.callbacks
                        , n = t.beforeTitle.apply(e, arguments)
                        , title = t.title.apply(e, arguments)
                        , r = t.afterTitle.apply(e, arguments)
                        , o = [];
                    return o = Aa(o, Fa(n)),
                        o = Aa(o, Fa(title)),
                        o = Aa(o, Fa(r))
                },
                getBeforeBody: function () {
                    return Ra(this._options.callbacks.beforeBody.apply(this, arguments))
                },
                getBody: function (e, data) {
                    var t = this
                        , n = t._options.callbacks
                        , r = [];
                    return he.each(e, (function (e) {
                        var o = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        Aa(o.before, Fa(n.beforeLabel.call(t, e, data))),
                            Aa(o.lines, n.label.call(t, e, data)),
                            Aa(o.after, Fa(n.afterLabel.call(t, e, data))),
                            r.push(o)
                    }
                    )),
                        r
                },
                getAfterBody: function () {
                    return Ra(this._options.callbacks.afterBody.apply(this, arguments))
                },
                getFooter: function () {
                    var e = this
                        , t = e._options.callbacks
                        , n = t.beforeFooter.apply(e, arguments)
                        , footer = t.footer.apply(e, arguments)
                        , r = t.afterFooter.apply(e, arguments)
                        , o = [];
                    return o = Aa(o, Fa(n)),
                        o = Aa(o, Fa(footer)),
                        o = Aa(o, Fa(r))
                },
                update: function (e) {
                    var i, t, n = this, r = n._options, o = n._model, d = n._model = Ca(r), l = n._active, data = n._data, _ = {
                        xAlign: o.xAlign,
                        yAlign: o.yAlign
                    }, m = {
                        x: o.x,
                        y: o.y
                    }, c = {
                        width: o.width,
                        height: o.height
                    }, h = {
                        x: o.caretX,
                        y: o.caretY
                    };
                    if (l.length) {
                        d.opacity = 1;
                        var f = []
                            , M = [];
                        h = Oa[r.position].call(n, l, n._eventPosition);
                        var y = [];
                        for (i = 0,
                            t = l.length; i < t; ++i)
                            y.push(Wa(l[i]));
                        r.filter && (y = y.filter((function (a) {
                            return r.filter(a, data)
                        }
                        ))),
                            r.itemSort && (y = y.sort((function (a, b) {
                                return r.itemSort(a, b, data)
                            }
                            ))),
                            he.each(y, (function (e) {
                                f.push(r.callbacks.labelColor.call(n, e, n._chart)),
                                    M.push(r.callbacks.labelTextColor.call(n, e, n._chart))
                            }
                            )),
                            d.title = n.getTitle(y, data),
                            d.beforeBody = n.getBeforeBody(y, data),
                            d.body = n.getBody(y, data),
                            d.afterBody = n.getAfterBody(y, data),
                            d.footer = n.getFooter(y, data),
                            d.x = h.x,
                            d.y = h.y,
                            d.caretPadding = r.caretPadding,
                            d.labelColors = f,
                            d.labelTextColors = M,
                            d.dataPoints = y,
                            m = Ia(d, c = Ea(this, d), _ = za(this, c), n._chart)
                    } else
                        d.opacity = 0;
                    return d.xAlign = _.xAlign,
                        d.yAlign = _.yAlign,
                        d.x = m.x,
                        d.y = m.y,
                        d.width = c.width,
                        d.height = c.height,
                        d.caretX = h.x,
                        d.caretY = h.y,
                        n._model = d,
                        e && r.custom && r.custom.call(n, d),
                        n
                },
                drawCaret: function (e, t) {
                    var n = this._chart.ctx
                        , r = this._view
                        , o = this.getCaretPosition(e, t, r);
                    n.lineTo(o.x1, o.y1),
                        n.lineTo(o.x2, o.y2),
                        n.lineTo(o.x3, o.y3)
                },
                getCaretPosition: function (e, t, n) {
                    var r, o, d, l, _, m, c = n.caretSize, h = n.cornerRadius, f = n.xAlign, M = n.yAlign, y = e.x, L = e.y, Y = t.width, v = t.height;
                    if ("center" === M)
                        _ = L + v / 2,
                            "left" === f ? (o = (r = y) - c,
                                d = r,
                                l = _ + c,
                                m = _ - c) : (o = (r = y + Y) + c,
                                    d = r,
                                    l = _ - c,
                                    m = _ + c);
                    else if ("left" === f ? (r = (o = y + h + c) - c,
                        d = o + c) : "right" === f ? (r = (o = y + Y - h - c) - c,
                            d = o + c) : (r = (o = n.caretX) - c,
                                d = o + c),
                        "top" === M)
                        _ = (l = L) - c,
                            m = l;
                    else {
                        _ = (l = L + v) + c,
                            m = l;
                        var k = d;
                        d = r,
                            r = k
                    }
                    return {
                        x1: r,
                        x2: o,
                        x3: d,
                        y1: l,
                        y2: _,
                        y3: m
                    }
                },
                drawTitle: function (e, t, n) {
                    var r, o, i, title = t.title, d = title.length;
                    if (d) {
                        var l = Pa(t.rtl, t.x, t.width);
                        for (e.x = Na(t, t._titleAlign),
                            n.textAlign = l.textAlign(t._titleAlign),
                            n.textBaseline = "middle",
                            r = t.titleFontSize,
                            o = t.titleSpacing,
                            n.fillStyle = t.titleFontColor,
                            n.font = he.fontString(r, t._titleFontStyle, t._titleFontFamily),
                            i = 0; i < d; ++i)
                            n.fillText(title[i], l.x(e.x), e.y + r / 2),
                                e.y += r + o,
                                i + 1 === d && (e.y += t.titleMarginBottom - o)
                    }
                },
                drawBody: function (e, t, n) {
                    var r, o, d, l, i, _, m, c, h = t.bodyFontSize, f = t.bodySpacing, M = t._bodyAlign, body = t.body, y = t.displayColors, L = 0, Y = y ? Na(t, "left") : 0, v = Pa(t.rtl, t.x, t.width), k = function (line) {
                        n.fillText(line, v.x(e.x + L), e.y + h / 2),
                            e.y += h + f
                    }, D = v.textAlign(M);
                    for (n.textAlign = M,
                        n.textBaseline = "middle",
                        n.font = he.fontString(h, t._bodyFontStyle, t._bodyFontFamily),
                        e.x = Na(t, D),
                        n.fillStyle = t.bodyFontColor,
                        he.each(t.beforeBody, k),
                        L = y && "right" !== D ? "center" === M ? h / 2 + 1 : h + 2 : 0,
                        i = 0,
                        m = body.length; i < m; ++i) {
                        for (r = body[i],
                            o = t.labelTextColors[i],
                            d = t.labelColors[i],
                            n.fillStyle = o,
                            he.each(r.before, k),
                            _ = 0,
                            c = (l = r.lines).length; _ < c; ++_) {
                            if (y) {
                                var w = v.x(Y);
                                n.fillStyle = t.legendColorBackground,
                                    n.fillRect(v.leftForLtr(w, h), e.y, h, h),
                                    n.lineWidth = 1,
                                    n.strokeStyle = d.borderColor,
                                    n.strokeRect(v.leftForLtr(w, h), e.y, h, h),
                                    n.fillStyle = d.backgroundColor,
                                    n.fillRect(v.leftForLtr(v.xPlus(w, 1), h - 2), e.y + 1, h - 2, h - 2),
                                    n.fillStyle = o
                            }
                            k(l[_])
                        }
                        he.each(r.after, k)
                    }
                    L = 0,
                        he.each(t.afterBody, k),
                        e.y -= f
                },
                drawFooter: function (e, t, n) {
                    var r, i, footer = t.footer, o = footer.length;
                    if (o) {
                        var d = Pa(t.rtl, t.x, t.width);
                        for (e.x = Na(t, t._footerAlign),
                            e.y += t.footerMarginTop,
                            n.textAlign = d.textAlign(t._footerAlign),
                            n.textBaseline = "middle",
                            r = t.footerFontSize,
                            n.fillStyle = t.footerFontColor,
                            n.font = he.fontString(r, t._footerFontStyle, t._footerFontFamily),
                            i = 0; i < o; ++i)
                            n.fillText(footer[i], d.x(e.x), e.y + r / 2),
                                e.y += r + t.footerSpacing
                    }
                },
                drawBackground: function (e, t, n, r) {
                    n.fillStyle = t.backgroundColor,
                        n.strokeStyle = t.borderColor,
                        n.lineWidth = t.borderWidth;
                    var o = t.xAlign
                        , d = t.yAlign
                        , l = e.x
                        , _ = e.y
                        , m = r.width
                        , c = r.height
                        , h = t.cornerRadius;
                    n.beginPath(),
                        n.moveTo(l + h, _),
                        "top" === d && this.drawCaret(e, r),
                        n.lineTo(l + m - h, _),
                        n.quadraticCurveTo(l + m, _, l + m, _ + h),
                        "center" === d && "right" === o && this.drawCaret(e, r),
                        n.lineTo(l + m, _ + c - h),
                        n.quadraticCurveTo(l + m, _ + c, l + m - h, _ + c),
                        "bottom" === d && this.drawCaret(e, r),
                        n.lineTo(l + h, _ + c),
                        n.quadraticCurveTo(l, _ + c, l, _ + c - h),
                        "center" === d && "left" === o && this.drawCaret(e, r),
                        n.lineTo(l, _ + h),
                        n.quadraticCurveTo(l, _, l + h, _),
                        n.closePath(),
                        n.fill(),
                        t.borderWidth > 0 && n.stroke()
                },
                draw: function () {
                    var e = this._chart.ctx
                        , t = this._view;
                    if (0 !== t.opacity) {
                        var n = {
                            width: t.width,
                            height: t.height
                        }
                            , r = {
                                x: t.x,
                                y: t.y
                            }
                            , o = Math.abs(t.opacity < .001) ? 0 : t.opacity
                            , d = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && d && (e.save(),
                            e.globalAlpha = o,
                            this.drawBackground(r, t, e, n),
                            r.y += t.yPadding,
                            he.rtl.overrideTextDirection(e, t.textDirection),
                            this.drawTitle(r, t, e),
                            this.drawBody(r, t, e),
                            this.drawFooter(r, t, e),
                            he.rtl.restoreTextDirection(e, t.textDirection),
                            e.restore())
                    }
                },
                handleEvent: function (e) {
                    var t = this
                        , n = t._options
                        , r = !1;
                    return t._lastActive = t._lastActive || [],
                        "mouseout" === e.type ? t._active = [] : (t._active = t._chart.getElementsAtEventForMode(e, n.mode, n),
                            n.reverse && t._active.reverse()),
                        (r = !he.arrayEquals(t._active, t._lastActive)) && (t._lastActive = t._active,
                            (n.enabled || n.custom) && (t._eventPosition = {
                                x: e.x,
                                y: e.y
                            },
                                t.update(!0),
                                t.pivot())),
                        r
                }
            })
                , Ba = Oa
                , Ja = Va;
            Ja.positioners = Ba;
            var Ua = he.valueOrDefault;
            function Ga() {
                return he.merge(Object.create(null), [].slice.call(arguments), {
                    merger: function (e, t, source, n) {
                        if ("xAxes" === e || "yAxes" === e) {
                            var i, r, o, d = source[e].length;
                            for (t[e] || (t[e] = []),
                                i = 0; i < d; ++i)
                                o = source[e][i],
                                    r = Ua(o.type, "xAxes" === e ? "category" : "linear"),
                                    i >= t[e].length && t[e].push({}),
                                    !t[e][i].type || o.type && o.type !== t[e][i].type ? he.merge(t[e][i], [Ha.getScaleDefaults(r), o]) : he.merge(t[e][i], o)
                        } else
                            he._merger(e, t, source, n)
                    }
                })
            }
            function qa() {
                return he.merge(Object.create(null), [].slice.call(arguments), {
                    merger: function (e, t, source, n) {
                        var r = t[e] || Object.create(null)
                            , o = source[e];
                        "scales" === e ? t[e] = Ga(r, o) : "scale" === e ? t[e] = he.merge(r, [Ha.getScaleDefaults(o.type), o]) : he._merger(e, t, source, n)
                    }
                })
            }
            function $a(e) {
                var data = (e = e || Object.create(null)).data = e.data || {};
                return data.datasets = data.datasets || [],
                    data.labels = data.labels || [],
                    e.options = qa(ie.global, ie[e.type], e.options || {}),
                    e
            }
            function Ka(e) {
                var t = e.options;
                he.each(e.scales, (function (t) {
                    Qt.removeBox(e, t)
                }
                )),
                    t = qa(ie.global, ie[e.config.type], t),
                    e.options = e.config.options = t,
                    e.ensureScalesHaveIDs(),
                    e.buildOrUpdateScales(),
                    e.tooltip._options = t.tooltips,
                    e.tooltip.initialize()
            }
            function Za(e, t, n) {
                var r, o = function (e) {
                    return e.id === r
                };
                do {
                    r = t + n++
                } while (he.findIndex(e, o) >= 0);
                return r
            }
            function Xa(e) {
                return "top" === e || "bottom" === e
            }
            function Qa(e, t) {
                return function (a, b) {
                    return a[e] === b[e] ? a[t] - b[t] : a[e] - b[e]
                }
            }
            ie._set("global", {
                elements: {},
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                maintainAspectRatio: !0,
                responsive: !0,
                responsiveAnimationDuration: 0
            });
            var en = function (e, t) {
                return this.construct(e, t),
                    this
            };
            he.extend(en.prototype, {
                construct: function (e, t) {
                    var n = this;
                    t = $a(t);
                    var r = xa.acquireContext(e, t)
                        , canvas = r && r.canvas
                        , o = canvas && canvas.height
                        , d = canvas && canvas.width;
                    n.id = he.uid(),
                        n.ctx = r,
                        n.canvas = canvas,
                        n.config = t,
                        n.width = d,
                        n.height = o,
                        n.aspectRatio = o ? d / o : null,
                        n.options = t.options,
                        n._bufferedRender = !1,
                        n._layers = [],
                        n.chart = n,
                        n.controller = n,
                        en.instances[n.id] = n,
                        Object.defineProperty(n, "data", {
                            get: function () {
                                return n.config.data
                            },
                            set: function (e) {
                                n.config.data = e
                            }
                        }),
                        r && canvas ? (n.initialize(),
                            n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                },
                initialize: function () {
                    var e = this;
                    return Sa.notify(e, "beforeInit"),
                        he.retinaScale(e, e.options.devicePixelRatio),
                        e.bindEvents(),
                        e.options.responsive && e.resize(!0),
                        e.initToolTip(),
                        Sa.notify(e, "afterInit"),
                        e
                },
                clear: function () {
                    return he.canvas.clear(this),
                        this
                },
                stop: function () {
                    return ke.cancelAnimation(this),
                        this
                },
                resize: function (e) {
                    var t = this
                        , n = t.options
                        , canvas = t.canvas
                        , r = n.maintainAspectRatio && t.aspectRatio || null
                        , o = Math.max(0, Math.floor(he.getMaximumWidth(canvas)))
                        , d = Math.max(0, Math.floor(r ? o / r : he.getMaximumHeight(canvas)));
                    if ((t.width !== o || t.height !== d) && (canvas.width = t.width = o,
                        canvas.height = t.height = d,
                        canvas.style.width = o + "px",
                        canvas.style.height = d + "px",
                        he.retinaScale(t, n.devicePixelRatio),
                        !e)) {
                        var l = {
                            width: o,
                            height: d
                        };
                        Sa.notify(t, "resize", [l]),
                            n.onResize && n.onResize(t, l),
                            t.stop(),
                            t.update({
                                duration: n.responsiveAnimationDuration
                            })
                    }
                },
                ensureScalesHaveIDs: function () {
                    var e = this.options
                        , t = e.scales || {}
                        , n = e.scale;
                    he.each(t.xAxes, (function (e, n) {
                        e.id || (e.id = Za(t.xAxes, "x-axis-", n))
                    }
                    )),
                        he.each(t.yAxes, (function (e, n) {
                            e.id || (e.id = Za(t.yAxes, "y-axis-", n))
                        }
                        )),
                        n && (n.id = n.id || "scale")
                },
                buildOrUpdateScales: function () {
                    var e = this
                        , t = e.options
                        , n = e.scales || {}
                        , r = []
                        , o = Object.keys(n).reduce((function (e, t) {
                            return e[t] = !1,
                                e
                        }
                        ), {});
                    t.scales && (r = r.concat((t.scales.xAxes || []).map((function (e) {
                        return {
                            options: e,
                            dtype: "category",
                            dposition: "bottom"
                        }
                    }
                    )), (t.scales.yAxes || []).map((function (e) {
                        return {
                            options: e,
                            dtype: "linear",
                            dposition: "left"
                        }
                    }
                    )))),
                        t.scale && r.push({
                            options: t.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }),
                        he.each(r, (function (t) {
                            var r = t.options
                                , d = r.id
                                , l = Ua(r.type, t.dtype);
                            Xa(r.position) !== Xa(t.dposition) && (r.position = t.dposition),
                                o[d] = !0;
                            var _ = null;
                            if (d in n && n[d].type === l)
                                (_ = n[d]).options = r,
                                    _.ctx = e.ctx,
                                    _.chart = e;
                            else {
                                var m = Ha.getScaleConstructor(l);
                                if (!m)
                                    return;
                                _ = new m({
                                    id: d,
                                    type: l,
                                    options: r,
                                    ctx: e.ctx,
                                    chart: e
                                }),
                                    n[_.id] = _
                            }
                            _.mergeTicksOptions(),
                                t.isDefault && (e.scale = _)
                        }
                        )),
                        he.each(o, (function (e, t) {
                            e || delete n[t]
                        }
                        )),
                        e.scales = n,
                        Ha.addScalesToLayout(this)
                },
                buildOrUpdateControllers: function () {
                    var i, e, t = this, n = [], r = t.data.datasets;
                    for (i = 0,
                        e = r.length; i < e; i++) {
                        var o = r[i]
                            , meta = t.getDatasetMeta(i)
                            , d = o.type || t.config.type;
                        if (meta.type && meta.type !== d && (t.destroyDatasetMeta(i),
                            meta = t.getDatasetMeta(i)),
                            meta.type = d,
                            meta.order = o.order || 0,
                            meta.index = i,
                            meta.controller)
                            meta.controller.updateIndex(i),
                                meta.controller.linkScales();
                        else {
                            var l = Ot[meta.type];
                            if (void 0 === l)
                                throw new Error('"' + meta.type + '" is not a chart type.');
                            meta.controller = new l(t, i),
                                n.push(meta.controller)
                        }
                    }
                    return n
                },
                resetElements: function () {
                    var e = this;
                    he.each(e.data.datasets, (function (t, n) {
                        e.getDatasetMeta(n).controller.reset()
                    }
                    ), e)
                },
                reset: function () {
                    this.resetElements(),
                        this.tooltip.initialize()
                },
                update: function (e) {
                    var i, t, n = this;
                    if (e && "object" == typeof e || (e = {
                        duration: e,
                        lazy: arguments[1]
                    }),
                        Ka(n),
                        Sa._invalidate(n),
                        !1 !== Sa.notify(n, "beforeUpdate")) {
                        n.tooltip._data = n.data;
                        var r = n.buildOrUpdateControllers();
                        for (i = 0,
                            t = n.data.datasets.length; i < t; i++)
                            n.getDatasetMeta(i).controller.buildOrUpdateElements();
                        n.updateLayout(),
                            n.options.animation && n.options.animation.duration && he.each(r, (function (e) {
                                e.reset()
                            }
                            )),
                            n.updateDatasets(),
                            n.tooltip.initialize(),
                            n.lastActive = [],
                            Sa.notify(n, "afterUpdate"),
                            n._layers.sort(Qa("z", "_idx")),
                            n._bufferedRender ? n._bufferedRequest = {
                                duration: e.duration,
                                easing: e.easing,
                                lazy: e.lazy
                            } : n.render(e)
                    }
                },
                updateLayout: function () {
                    var e = this;
                    !1 !== Sa.notify(e, "beforeLayout") && (Qt.update(this, this.width, this.height),
                        e._layers = [],
                        he.each(e.boxes, (function (t) {
                            t._configure && t._configure(),
                                e._layers.push.apply(e._layers, t._layers())
                        }
                        ), e),
                        e._layers.forEach((function (e, t) {
                            e._idx = t
                        }
                        )),
                        Sa.notify(e, "afterScaleUpdate"),
                        Sa.notify(e, "afterLayout"))
                },
                updateDatasets: function () {
                    var e = this;
                    if (!1 !== Sa.notify(e, "beforeDatasetsUpdate")) {
                        for (var i = 0, t = e.data.datasets.length; i < t; ++i)
                            e.updateDataset(i);
                        Sa.notify(e, "afterDatasetsUpdate")
                    }
                },
                updateDataset: function (e) {
                    var t = this
                        , meta = t.getDatasetMeta(e)
                        , n = {
                            meta: meta,
                            index: e
                        };
                    !1 !== Sa.notify(t, "beforeDatasetUpdate", [n]) && (meta.controller._update(),
                        Sa.notify(t, "afterDatasetUpdate", [n]))
                },
                render: function (e) {
                    var t = this;
                    e && "object" == typeof e || (e = {
                        duration: e,
                        lazy: arguments[1]
                    });
                    var n = t.options.animation
                        , r = Ua(e.duration, n && n.duration)
                        , o = e.lazy;
                    if (!1 !== Sa.notify(t, "beforeRender")) {
                        var d = function (e) {
                            Sa.notify(t, "afterRender"),
                                he.callback(n && n.onComplete, [e], t)
                        };
                        if (n && r) {
                            var l = new be({
                                numSteps: r / 16.66,
                                easing: e.easing || n.easing,
                                render: function (e, t) {
                                    var n = he.easing.effects[t.easing]
                                        , r = t.currentStep
                                        , o = r / t.numSteps;
                                    e.draw(n(o), o, r)
                                },
                                onAnimationProgress: n.onProgress,
                                onAnimationComplete: d
                            });
                            ke.addAnimation(t, l, r, o)
                        } else
                            t.draw(),
                                d(new be({
                                    numSteps: 0,
                                    chart: t
                                }));
                        return t
                    }
                },
                draw: function (e) {
                    var i, t, n = this;
                    if (n.clear(),
                        he.isNullOrUndef(e) && (e = 1),
                        n.transition(e),
                        !(n.width <= 0 || n.height <= 0) && !1 !== Sa.notify(n, "beforeDraw", [e])) {
                        for (t = n._layers,
                            i = 0; i < t.length && t[i].z <= 0; ++i)
                            t[i].draw(n.chartArea);
                        for (n.drawDatasets(e); i < t.length; ++i)
                            t[i].draw(n.chartArea);
                        n._drawTooltip(e),
                            Sa.notify(n, "afterDraw", [e])
                    }
                },
                transition: function (e) {
                    for (var t = this, i = 0, n = (t.data.datasets || []).length; i < n; ++i)
                        t.isDatasetVisible(i) && t.getDatasetMeta(i).controller.transition(e);
                    t.tooltip.transition(e)
                },
                _getSortedDatasetMetas: function (e) {
                    var i, t, n = this, r = [];
                    for (i = 0,
                        t = (n.data.datasets || []).length; i < t; ++i)
                        e && !n.isDatasetVisible(i) || r.push(n.getDatasetMeta(i));
                    return r.sort(Qa("order", "index")),
                        r
                },
                _getSortedVisibleDatasetMetas: function () {
                    return this._getSortedDatasetMetas(!0)
                },
                drawDatasets: function (e) {
                    var t, i, n = this;
                    if (!1 !== Sa.notify(n, "beforeDatasetsDraw", [e])) {
                        for (i = (t = n._getSortedVisibleDatasetMetas()).length - 1; i >= 0; --i)
                            n.drawDataset(t[i], e);
                        Sa.notify(n, "afterDatasetsDraw", [e])
                    }
                },
                drawDataset: function (meta, e) {
                    var t = this
                        , n = {
                            meta: meta,
                            index: meta.index,
                            easingValue: e
                        };
                    !1 !== Sa.notify(t, "beforeDatasetDraw", [n]) && (meta.controller.draw(e),
                        Sa.notify(t, "afterDatasetDraw", [n]))
                },
                _drawTooltip: function (e) {
                    var t = this
                        , n = t.tooltip
                        , r = {
                            tooltip: n,
                            easingValue: e
                        };
                    !1 !== Sa.notify(t, "beforeTooltipDraw", [r]) && (n.draw(),
                        Sa.notify(t, "afterTooltipDraw", [r]))
                },
                getElementAtEvent: function (e) {
                    return It.modes.single(this, e)
                },
                getElementsAtEvent: function (e) {
                    return It.modes.label(this, e, {
                        intersect: !0
                    })
                },
                getElementsAtXAxis: function (e) {
                    return It.modes["x-axis"](this, e, {
                        intersect: !0
                    })
                },
                getElementsAtEventForMode: function (e, t, n) {
                    var r = It.modes[t];
                    return "function" == typeof r ? r(this, e, n) : []
                },
                getDatasetAtEvent: function (e) {
                    return It.modes.dataset(this, e, {
                        intersect: !0
                    })
                },
                getDatasetMeta: function (e) {
                    var t = this
                        , n = t.data.datasets[e];
                    n._meta || (n._meta = {});
                    var meta = n._meta[t.id];
                    return meta || (meta = n._meta[t.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: n.order || 0,
                        index: e
                    }),
                        meta
                },
                getVisibleDatasetCount: function () {
                    for (var e = 0, i = 0, t = this.data.datasets.length; i < t; ++i)
                        this.isDatasetVisible(i) && e++;
                    return e
                },
                isDatasetVisible: function (e) {
                    var meta = this.getDatasetMeta(e);
                    return "boolean" == typeof meta.hidden ? !meta.hidden : !this.data.datasets[e].hidden
                },
                generateLegend: function () {
                    return this.options.legendCallback(this)
                },
                destroyDatasetMeta: function (e) {
                    var t = this.id
                        , n = this.data.datasets[e]
                        , meta = n._meta && n._meta[t];
                    meta && (meta.controller.destroy(),
                        delete n._meta[t])
                },
                destroy: function () {
                    var i, e, t = this, canvas = t.canvas;
                    for (t.stop(),
                        i = 0,
                        e = t.data.datasets.length; i < e; ++i)
                        t.destroyDatasetMeta(i);
                    canvas && (t.unbindEvents(),
                        he.canvas.clear(t),
                        xa.releaseContext(t.ctx),
                        t.canvas = null,
                        t.ctx = null),
                        Sa.notify(t, "destroy"),
                        delete en.instances[t.id]
                },
                toBase64Image: function () {
                    return this.canvas.toDataURL.apply(this.canvas, arguments)
                },
                initToolTip: function () {
                    var e = this;
                    e.tooltip = new Ja({
                        _chart: e,
                        _chartInstance: e,
                        _data: e.data,
                        _options: e.options.tooltips
                    }, e)
                },
                bindEvents: function () {
                    var e = this
                        , t = e._listeners = {}
                        , n = function () {
                            e.eventHandler.apply(e, arguments)
                        };
                    he.each(e.options.events, (function (r) {
                        xa.addEventListener(e, r, n),
                            t[r] = n
                    }
                    )),
                        e.options.responsive && (n = function () {
                            e.resize()
                        }
                            ,
                            xa.addEventListener(e, "resize", n),
                            t.resize = n)
                },
                unbindEvents: function () {
                    var e = this
                        , t = e._listeners;
                    t && (delete e._listeners,
                        he.each(t, (function (t, n) {
                            xa.removeEventListener(e, n, t)
                        }
                        )))
                },
                updateHoverStyle: function (e, t, n) {
                    var element, i, r, o = n ? "set" : "remove";
                    for (i = 0,
                        r = e.length; i < r; ++i)
                        (element = e[i]) && this.getDatasetMeta(element._datasetIndex).controller[o + "HoverStyle"](element);
                    "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
                },
                eventHandler: function (e) {
                    var t = this
                        , n = t.tooltip;
                    if (!1 !== Sa.notify(t, "beforeEvent", [e])) {
                        t._bufferedRender = !0,
                            t._bufferedRequest = null;
                        var r = t.handleEvent(e);
                        n && (r = n._start ? n.handleEvent(e) : r | n.handleEvent(e)),
                            Sa.notify(t, "afterEvent", [e]);
                        var o = t._bufferedRequest;
                        return o ? t.render(o) : r && !t.animating && (t.stop(),
                            t.render({
                                duration: t.options.hover.animationDuration,
                                lazy: !0
                            })),
                            t._bufferedRender = !1,
                            t._bufferedRequest = null,
                            t
                    }
                },
                handleEvent: function (e) {
                    var t = this
                        , n = t.options || {}
                        , r = n.hover
                        , o = !1;
                    return t.lastActive = t.lastActive || [],
                        "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, r.mode, r),
                        he.callback(n.onHover || n.hover.onHover, [e.native, t.active], t),
                        "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active),
                        t.lastActive.length && t.updateHoverStyle(t.lastActive, r.mode, !1),
                        t.active.length && r.mode && t.updateHoverStyle(t.active, r.mode, !0),
                        o = !he.arrayEquals(t.active, t.lastActive),
                        t.lastActive = t.active,
                        o
                }
            }),
                en.instances = {};
            var tn = en;
            en.Controller = en,
                en.types = {},
                he.configMerge = qa,
                he.scaleMerge = Ga;
            var an = function () {
                function e(e, t, n) {
                    var r;
                    return "string" == typeof e ? (r = parseInt(e, 10),
                        -1 !== e.indexOf("%") && (r = r / 100 * t.parentNode[n])) : r = e,
                        r
                }
                function t(e) {
                    return null != e && "none" !== e
                }
                function n(n, r, o) {
                    var view = document.defaultView
                        , d = he._getParentNode(n)
                        , l = view.getComputedStyle(n)[r]
                        , _ = view.getComputedStyle(d)[r]
                        , m = t(l)
                        , c = t(_)
                        , h = Number.POSITIVE_INFINITY;
                    return m || c ? Math.min(m ? e(l, n, o) : h, c ? e(_, d, o) : h) : "none"
                }
                he.where = function (e, t) {
                    if (he.isArray(e) && Array.prototype.filter)
                        return e.filter(t);
                    var n = [];
                    return he.each(e, (function (e) {
                        t(e) && n.push(e)
                    }
                    )),
                        n
                }
                    ,
                    he.findIndex = Array.prototype.findIndex ? function (e, t, n) {
                        return e.findIndex(t, n)
                    }
                        : function (e, t, n) {
                            n = void 0 === n ? e : n;
                            for (var i = 0, r = e.length; i < r; ++i)
                                if (t.call(n, e[i], i, e))
                                    return i;
                            return -1
                        }
                    ,
                    he.findNextWhere = function (e, t, n) {
                        he.isNullOrUndef(n) && (n = -1);
                        for (var i = n + 1; i < e.length; i++) {
                            var r = e[i];
                            if (t(r))
                                return r
                        }
                    }
                    ,
                    he.findPreviousWhere = function (e, t, n) {
                        he.isNullOrUndef(n) && (n = e.length);
                        for (var i = n - 1; i >= 0; i--) {
                            var r = e[i];
                            if (t(r))
                                return r
                        }
                    }
                    ,
                    he.isNumber = function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    ,
                    he.almostEquals = function (e, t, n) {
                        return Math.abs(e - t) < n
                    }
                    ,
                    he.almostWhole = function (e, t) {
                        var n = Math.round(e);
                        return n - t <= e && n + t >= e
                    }
                    ,
                    he.max = function (e) {
                        return e.reduce((function (e, t) {
                            return isNaN(t) ? e : Math.max(e, t)
                        }
                        ), Number.NEGATIVE_INFINITY)
                    }
                    ,
                    he.min = function (e) {
                        return e.reduce((function (e, t) {
                            return isNaN(t) ? e : Math.min(e, t)
                        }
                        ), Number.POSITIVE_INFINITY)
                    }
                    ,
                    he.sign = Math.sign ? function (e) {
                        return Math.sign(e)
                    }
                        : function (e) {
                            return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
                        }
                    ,
                    he.toRadians = function (e) {
                        return e * (Math.PI / 180)
                    }
                    ,
                    he.toDegrees = function (e) {
                        return e * (180 / Math.PI)
                    }
                    ,
                    he._decimalPlaces = function (e) {
                        if (he.isFinite(e)) {
                            for (var t = 1, p = 0; Math.round(e * t) / t !== e;)
                                t *= 10,
                                    p++;
                            return p
                        }
                    }
                    ,
                    he.getAngleFromPoint = function (e, t) {
                        var n = t.x - e.x
                            , r = t.y - e.y
                            , o = Math.sqrt(n * n + r * r)
                            , d = Math.atan2(r, n);
                        return d < -.5 * Math.PI && (d += 2 * Math.PI),
                        {
                            angle: d,
                            distance: o
                        }
                    }
                    ,
                    he.distanceBetweenPoints = function (e, t) {
                        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                    }
                    ,
                    he.aliasPixel = function (e) {
                        return e % 2 == 0 ? 0 : .5
                    }
                    ,
                    he._alignPixel = function (e, t, n) {
                        var r = e.currentDevicePixelRatio
                            , o = n / 2;
                        return Math.round((t - o) * r) / r + o
                    }
                    ,
                    he.splineCurve = function (e, t, n, r) {
                        var o = e.skip ? t : e
                            , d = t
                            , l = n.skip ? t : n
                            , _ = Math.sqrt(Math.pow(d.x - o.x, 2) + Math.pow(d.y - o.y, 2))
                            , m = Math.sqrt(Math.pow(l.x - d.x, 2) + Math.pow(l.y - d.y, 2))
                            , c = _ / (_ + m)
                            , h = m / (_ + m)
                            , f = r * (c = isNaN(c) ? 0 : c)
                            , M = r * (h = isNaN(h) ? 0 : h);
                        return {
                            previous: {
                                x: d.x - f * (l.x - o.x),
                                y: d.y - f * (l.y - o.y)
                            },
                            next: {
                                x: d.x + M * (l.x - o.x),
                                y: d.y + M * (l.y - o.y)
                            }
                        }
                    }
                    ,
                    he.EPSILON = Number.EPSILON || 1e-14,
                    he.splineCurveMonotone = function (e) {
                        var i, t, n, r, o, d, l, _, m, c = (e || []).map((function (e) {
                            return {
                                model: e._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }
                        )), h = c.length;
                        for (i = 0; i < h; ++i)
                            if (!(n = c[i]).model.skip) {
                                if (t = i > 0 ? c[i - 1] : null,
                                    (r = i < h - 1 ? c[i + 1] : null) && !r.model.skip) {
                                    var f = r.model.x - n.model.x;
                                    n.deltaK = 0 !== f ? (r.model.y - n.model.y) / f : 0
                                }
                                !t || t.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = t.deltaK : this.sign(t.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (t.deltaK + n.deltaK) / 2
                            }
                        for (i = 0; i < h - 1; ++i)
                            n = c[i],
                                r = c[i + 1],
                                n.model.skip || r.model.skip || (he.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (o = n.mK / n.deltaK,
                                    d = r.mK / n.deltaK,
                                    (_ = Math.pow(o, 2) + Math.pow(d, 2)) <= 9 || (l = 3 / Math.sqrt(_),
                                        n.mK = o * l * n.deltaK,
                                        r.mK = d * l * n.deltaK)));
                        for (i = 0; i < h; ++i)
                            (n = c[i]).model.skip || (t = i > 0 ? c[i - 1] : null,
                                r = i < h - 1 ? c[i + 1] : null,
                                t && !t.model.skip && (m = (n.model.x - t.model.x) / 3,
                                    n.model.controlPointPreviousX = n.model.x - m,
                                    n.model.controlPointPreviousY = n.model.y - m * n.mK),
                                r && !r.model.skip && (m = (r.model.x - n.model.x) / 3,
                                    n.model.controlPointNextX = n.model.x + m,
                                    n.model.controlPointNextY = n.model.y + m * n.mK))
                    }
                    ,
                    he.nextItem = function (e, t, n) {
                        return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                    }
                    ,
                    he.previousItem = function (e, t, n) {
                        return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
                    }
                    ,
                    he.niceNum = function (e, t) {
                        var n = Math.floor(he.log10(e))
                            , r = e / Math.pow(10, n);
                        return (t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
                    }
                    ,
                    he.requestAnimFrame = "undefined" == typeof window ? function (e) {
                        e()
                    }
                        : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                            return window.setTimeout(e, 1e3 / 60)
                        }
                    ,
                    he.getRelativePosition = function (e, t) {
                        var n, r, o = e.originalEvent || e, canvas = e.target || e.srcElement, d = canvas.getBoundingClientRect(), l = o.touches;
                        l && l.length > 0 ? (n = l[0].clientX,
                            r = l[0].clientY) : (n = o.clientX,
                                r = o.clientY);
                        var _ = parseFloat(he.getStyle(canvas, "padding-left"))
                            , m = parseFloat(he.getStyle(canvas, "padding-top"))
                            , c = parseFloat(he.getStyle(canvas, "padding-right"))
                            , h = parseFloat(he.getStyle(canvas, "padding-bottom"))
                            , f = d.right - d.left - _ - c
                            , M = d.bottom - d.top - m - h;
                        return {
                            x: n = Math.round((n - d.left - _) / f * canvas.width / t.currentDevicePixelRatio),
                            y: r = Math.round((r - d.top - m) / M * canvas.height / t.currentDevicePixelRatio)
                        }
                    }
                    ,
                    he.getConstraintWidth = function (e) {
                        return n(e, "max-width", "clientWidth")
                    }
                    ,
                    he.getConstraintHeight = function (e) {
                        return n(e, "max-height", "clientHeight")
                    }
                    ,
                    he._calculatePadding = function (e, t, n) {
                        return (t = he.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10)
                    }
                    ,
                    he._getParentNode = function (e) {
                        var t = e.parentNode;
                        return t && "[object ShadowRoot]" === t.toString() && (t = t.host),
                            t
                    }
                    ,
                    he.getMaximumWidth = function (e) {
                        var t = he._getParentNode(e);
                        if (!t)
                            return e.clientWidth;
                        var n = t.clientWidth
                            , r = n - he._calculatePadding(t, "padding-left", n) - he._calculatePadding(t, "padding-right", n)
                            , o = he.getConstraintWidth(e);
                        return isNaN(o) ? r : Math.min(r, o)
                    }
                    ,
                    he.getMaximumHeight = function (e) {
                        var t = he._getParentNode(e);
                        if (!t)
                            return e.clientHeight;
                        var n = t.clientHeight
                            , r = n - he._calculatePadding(t, "padding-top", n) - he._calculatePadding(t, "padding-bottom", n)
                            , o = he.getConstraintHeight(e);
                        return isNaN(o) ? r : Math.min(r, o)
                    }
                    ,
                    he.getStyle = function (e, t) {
                        return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                    }
                    ,
                    he.retinaScale = function (e, t) {
                        var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
                        if (1 !== n) {
                            var canvas = e.canvas
                                , r = e.height
                                , o = e.width;
                            canvas.height = r * n,
                                canvas.width = o * n,
                                e.ctx.scale(n, n),
                                canvas.style.height || canvas.style.width || (canvas.style.height = r + "px",
                                    canvas.style.width = o + "px")
                        }
                    }
                    ,
                    he.fontString = function (e, t, n) {
                        return t + " " + e + "px " + n
                    }
                    ,
                    he.longestText = function (e, t, n, r) {
                        var data = (r = r || {}).data = r.data || {}
                            , o = r.garbageCollect = r.garbageCollect || [];
                        r.font !== t && (data = r.data = {},
                            o = r.garbageCollect = [],
                            r.font = t),
                            e.font = t;
                        var i, d, l, _, m, c = 0, h = n.length;
                        for (i = 0; i < h; i++)
                            if (null != (_ = n[i]) && !0 !== he.isArray(_))
                                c = he.measureText(e, data, o, c, _);
                            else if (he.isArray(_))
                                for (d = 0,
                                    l = _.length; d < l; d++)
                                    null == (m = _[d]) || he.isArray(m) || (c = he.measureText(e, data, o, c, m));
                        var f = o.length / 2;
                        if (f > n.length) {
                            for (i = 0; i < f; i++)
                                delete data[o[i]];
                            o.splice(0, f)
                        }
                        return c
                    }
                    ,
                    he.measureText = function (e, data, t, n, r) {
                        var o = data[r];
                        return o || (o = data[r] = e.measureText(r).width,
                            t.push(r)),
                            o > n && (n = o),
                            n
                    }
                    ,
                    he.numberOfLabelLines = function (e) {
                        var t = 1;
                        return he.each(e, (function (e) {
                            he.isArray(e) && e.length > t && (t = e.length)
                        }
                        )),
                            t
                    }
                    ,
                    he.color = R ? function (e) {
                        return e instanceof CanvasGradient && (e = ie.global.defaultColor),
                            R(e)
                    }
                        : function (e) {
                            return console.error("Color.js not found!"),
                                e
                        }
                    ,
                    he.getHoverColor = function (e) {
                        return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : he.color(e).saturate(.5).darken(.1).rgbString()
                    }
            };
            function nn() {
                throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
            }
            function rn(e) {
                this.options = e || {}
            }
            he.extend(rn.prototype, {
                formats: nn,
                parse: nn,
                format: nn,
                add: nn,
                diff: nn,
                startOf: nn,
                endOf: nn,
                _create: function (e) {
                    return e
                }
            }),
                rn.override = function (e) {
                    he.extend(rn.prototype, e)
                }
                ;
            var sn = {
                _date: rn
            }
                , on = {
                    formatters: {
                        values: function (e) {
                            return he.isArray(e) ? e : "" + e
                        },
                        linear: function (e, t, n) {
                            var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                            Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
                            var o = he.log10(Math.abs(r))
                                , d = "";
                            if (0 !== e)
                                if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                                    var l = he.log10(Math.abs(e))
                                        , _ = Math.floor(l) - Math.floor(o);
                                    _ = Math.max(Math.min(_, 20), 0),
                                        d = e.toExponential(_)
                                } else {
                                    var m = -1 * Math.floor(o);
                                    m = Math.max(Math.min(m, 20), 0),
                                        d = e.toFixed(m)
                                }
                            else
                                d = "0";
                            return d
                        },
                        logarithmic: function (e, t, n) {
                            var r = e / Math.pow(10, Math.floor(he.log10(e)));
                            return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
                        }
                    }
                }
                , dn = he.isArray
                , ln = he.isNullOrUndef
                , un = he.valueOrDefault
                , _n = he.valueAtIndexOrDefault;
            function mn(e, t) {
                for (var n = [], r = e.length / t, i = 0, o = e.length; i < o; i += r)
                    n.push(e[Math.floor(i)]);
                return n
            }
            function cn(e, t, n) {
                var r, o = e.getTicks().length, d = Math.min(t, o - 1), l = e.getPixelForTick(d), _ = e._startPixel, m = e._endPixel, c = 1e-6;
                if (!(n && (r = 1 === o ? Math.max(l - _, m - l) : 0 === t ? (e.getPixelForTick(1) - l) / 2 : (l - e.getPixelForTick(d - 1)) / 2,
                    (l += d < t ? r : -r) < _ - c || l > m + c)))
                    return l
            }
            function hn(e, t) {
                he.each(e, (function (e) {
                    var i, n = e.gc, r = n.length / 2;
                    if (r > t) {
                        for (i = 0; i < r; ++i)
                            delete e.data[n[i]];
                        n.splice(0, r)
                    }
                }
                ))
            }
            function fn(e, t, n, r) {
                var i, o, d, label, l, _, m, c, h, f, M, y, L, Y = n.length, v = [], k = [], D = [], w = 0, T = 0;
                for (i = 0; i < Y; ++i) {
                    if (label = n[i].label,
                        l = n[i].major ? t.major : t.minor,
                        e.font = _ = l.string,
                        m = r[_] = r[_] || {
                            data: {},
                            gc: []
                        },
                        c = l.lineHeight,
                        h = f = 0,
                        ln(label) || dn(label)) {
                        if (dn(label))
                            for (o = 0,
                                d = label.length; o < d; ++o)
                                M = label[o],
                                    ln(M) || dn(M) || (h = he.measureText(e, m.data, m.gc, h, M),
                                        f += c)
                    } else
                        h = he.measureText(e, m.data, m.gc, h, label),
                            f = c;
                    v.push(h),
                        k.push(f),
                        D.push(c / 2),
                        w = Math.max(h, w),
                        T = Math.max(f, T)
                }
                function x(e) {
                    return {
                        width: v[e] || 0,
                        height: k[e] || 0,
                        offset: D[e] || 0
                    }
                }
                return hn(r, Y),
                    y = v.indexOf(w),
                    L = k.indexOf(T),
                {
                    first: x(0),
                    last: x(Y - 1),
                    widest: x(y),
                    highest: x(L)
                }
            }
            function Mn(e) {
                return e.drawTicks ? e.tickMarkLength : 0
            }
            function pn(e) {
                var t, n;
                return e.display ? (t = he.options._parseFont(e),
                    n = he.options.toPadding(e.padding),
                    t.lineHeight + n.height) : 0
            }
            function gn(e, t) {
                return he.extend(he.options._parseFont({
                    fontFamily: un(t.fontFamily, e.fontFamily),
                    fontSize: un(t.fontSize, e.fontSize),
                    fontStyle: un(t.fontStyle, e.fontStyle),
                    lineHeight: un(t.lineHeight, e.lineHeight)
                }), {
                    color: he.options.resolve([t.fontColor, e.fontColor, ie.global.defaultFontColor])
                })
            }
            function yn(e) {
                var t = gn(e, e.minor);
                return {
                    minor: t,
                    major: e.major.enabled ? gn(e, e.major) : t
                }
            }
            function Ln(e) {
                var t, n, r, o = [];
                for (n = 0,
                    r = e.length; n < r; ++n)
                    void 0 !== (t = e[n])._index && o.push(t);
                return o
            }
            function Yn(e) {
                var i, t, n = e.length;
                if (n < 2)
                    return !1;
                for (t = e[0],
                    i = 1; i < n; ++i)
                    if (e[i] - e[i - 1] !== t)
                        return !1;
                return t
            }
            function vn(e, t, n, r) {
                var o, d, i, l, _ = Yn(e), m = (t.length - 1) / r;
                if (!_)
                    return Math.max(m, 1);
                for (i = 0,
                    l = (o = he.math._factorize(_)).length - 1; i < l; i++)
                    if ((d = o[i]) > m)
                        return d;
                return Math.max(m, 1)
            }
            function bn(e) {
                var i, t, n = [];
                for (i = 0,
                    t = e.length; i < t; i++)
                    e[i].major && n.push(i);
                return n
            }
            function kn(e, t, n) {
                var i, r, o = 0, d = t[0];
                for (n = Math.ceil(n),
                    i = 0; i < e.length; i++)
                    r = e[i],
                        i === d ? (r._index = i,
                            d = t[++o * n]) : delete r.label
            }
            function Dn(e, t, n, r) {
                var o, i, d, l, _ = un(n, 0), m = Math.min(un(r, e.length), e.length), c = 0;
                for (t = Math.ceil(t),
                    r && (t = (o = r - n) / Math.floor(o / t)),
                    l = _; l < 0;)
                    c++,
                        l = Math.round(_ + c * t);
                for (i = Math.max(_, 0); i < m; i++)
                    d = e[i],
                        i === l ? (d._index = i,
                            c++,
                            l = Math.round(_ + c * t)) : delete d.label
            }
            ie._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0,0,0,0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: on.formatters.values,
                    minor: {},
                    major: {}
                }
            });
            var wn = Ye.extend({
                zeroLineIndex: 0,
                getPadding: function () {
                    var e = this;
                    return {
                        left: e.paddingLeft || 0,
                        top: e.paddingTop || 0,
                        right: e.paddingRight || 0,
                        bottom: e.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                _getLabels: function () {
                    var data = this.chart.data;
                    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || []
                },
                mergeTicksOptions: function () { },
                beforeUpdate: function () {
                    he.callback(this.options.beforeUpdate, [this])
                },
                update: function (e, t, n) {
                    var i, r, o, d, l, _ = this, m = _.options.ticks, c = m.sampleSize;
                    if (_.beforeUpdate(),
                        _.maxWidth = e,
                        _.maxHeight = t,
                        _.margins = he.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, n),
                        _._ticks = null,
                        _.ticks = null,
                        _._labelSizes = null,
                        _._maxLabelLines = 0,
                        _.longestLabelWidth = 0,
                        _.longestTextCache = _.longestTextCache || {},
                        _._gridLineItems = null,
                        _._labelItems = null,
                        _.beforeSetDimensions(),
                        _.setDimensions(),
                        _.afterSetDimensions(),
                        _.beforeDataLimits(),
                        _.determineDataLimits(),
                        _.afterDataLimits(),
                        _.beforeBuildTicks(),
                        d = _.buildTicks() || [],
                        (!(d = _.afterBuildTicks(d) || d) || !d.length) && _.ticks)
                        for (d = [],
                            i = 0,
                            r = _.ticks.length; i < r; ++i)
                            d.push({
                                value: _.ticks[i],
                                major: !1
                            });
                    return _._ticks = d,
                        l = c < d.length,
                        o = _._convertTicksToLabels(l ? mn(d, c) : d),
                        _._configure(),
                        _.beforeCalculateTickRotation(),
                        _.calculateTickRotation(),
                        _.afterCalculateTickRotation(),
                        _.beforeFit(),
                        _.fit(),
                        _.afterFit(),
                        _._ticksToDraw = m.display && (m.autoSkip || "auto" === m.source) ? _._autoSkip(d) : d,
                        l && (o = _._convertTicksToLabels(_._ticksToDraw)),
                        _.ticks = o,
                        _.afterUpdate(),
                        _.minSize
                },
                _configure: function () {
                    var e, t, n = this, r = n.options.ticks.reverse;
                    n.isHorizontal() ? (e = n.left,
                        t = n.right) : (e = n.top,
                            t = n.bottom,
                            r = !r),
                        n._startPixel = e,
                        n._endPixel = t,
                        n._reversePixels = r,
                        n._length = t - e
                },
                afterUpdate: function () {
                    he.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    he.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth,
                        e.left = 0,
                        e.right = e.width) : (e.height = e.maxHeight,
                            e.top = 0,
                            e.bottom = e.height),
                        e.paddingLeft = 0,
                        e.paddingTop = 0,
                        e.paddingRight = 0,
                        e.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    he.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    he.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: he.noop,
                afterDataLimits: function () {
                    he.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    he.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: he.noop,
                afterBuildTicks: function (e) {
                    var t = this;
                    return dn(e) && e.length ? he.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = he.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks,
                        e)
                },
                beforeTickToLabelConversion: function () {
                    he.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var e = this
                        , t = e.options.ticks;
                    e.ticks = e.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function () {
                    he.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    he.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var e, t, n, r, o, d, l, _ = this, m = _.options, c = m.ticks, h = _.getTicks().length, f = c.minRotation || 0, M = c.maxRotation, y = f;
                    !_._isVisible() || !c.display || f >= M || h <= 1 || !_.isHorizontal() ? _.labelRotation = f : (t = (e = _._getLabelSizes()).widest.width,
                        n = e.highest.height - e.highest.offset,
                        r = Math.min(_.maxWidth, _.chart.width - t),
                        t + 6 > (o = m.offset ? _.maxWidth / h : r / (h - 1)) && (o = r / (h - (m.offset ? .5 : 1)),
                            d = _.maxHeight - Mn(m.gridLines) - c.padding - pn(m.scaleLabel),
                            l = Math.sqrt(t * t + n * n),
                            y = he.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / o, 1)), Math.asin(Math.min(d / l, 1)) - Math.asin(n / l))),
                            y = Math.max(f, Math.min(M, y))),
                        _.labelRotation = y)
                },
                afterCalculateTickRotation: function () {
                    he.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    he.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var e = this
                        , t = e.minSize = {
                            width: 0,
                            height: 0
                        }
                        , n = e.chart
                        , r = e.options
                        , o = r.ticks
                        , d = r.scaleLabel
                        , l = r.gridLines
                        , _ = e._isVisible()
                        , m = "bottom" === r.position
                        , c = e.isHorizontal();
                    if (c ? t.width = e.maxWidth : _ && (t.width = Mn(l) + pn(d)),
                        c ? _ && (t.height = Mn(l) + pn(d)) : t.height = e.maxHeight,
                        o.display && _) {
                        var h = yn(o)
                            , f = e._getLabelSizes()
                            , M = f.first
                            , y = f.last
                            , L = f.widest
                            , Y = f.highest
                            , v = .4 * h.minor.lineHeight
                            , k = o.padding;
                        if (c) {
                            var D = 0 !== e.labelRotation
                                , w = he.toRadians(e.labelRotation)
                                , T = Math.cos(w)
                                , x = Math.sin(w)
                                , S = x * L.width + T * (Y.height - (D ? Y.offset : 0)) + (D ? 0 : v);
                            t.height = Math.min(e.maxHeight, t.height + S + k);
                            var H, j, P = e.getPixelForTick(0) - e.left, O = e.right - e.getPixelForTick(e.getTicks().length - 1);
                            D ? (H = m ? T * M.width + x * M.offset : x * (M.height - M.offset),
                                j = m ? x * (y.height - y.offset) : T * y.width + x * y.offset) : (H = M.width / 2,
                                    j = y.width / 2),
                                e.paddingLeft = Math.max((H - P) * e.width / (e.width - P), 0) + 3,
                                e.paddingRight = Math.max((j - O) * e.width / (e.width - O), 0) + 3
                        } else {
                            var A = o.mirror ? 0 : L.width + k + v;
                            t.width = Math.min(e.maxWidth, t.width + A),
                                e.paddingTop = M.height / 2,
                                e.paddingBottom = y.height / 2
                        }
                    }
                    e.handleMargins(),
                        c ? (e.width = e._length = n.width - e.margins.left - e.margins.right,
                            e.height = t.height) : (e.width = t.width,
                                e.height = e._length = n.height - e.margins.top - e.margins.bottom)
                },
                handleMargins: function () {
                    var e = this;
                    e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left),
                        e.margins.top = Math.max(e.paddingTop, e.margins.top),
                        e.margins.right = Math.max(e.paddingRight, e.margins.right),
                        e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
                },
                afterFit: function () {
                    he.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (e) {
                    if (ln(e))
                        return NaN;
                    if (("number" == typeof e || e instanceof Number) && !isFinite(e))
                        return NaN;
                    if (e)
                        if (this.isHorizontal()) {
                            if (void 0 !== e.x)
                                return this.getRightValue(e.x)
                        } else if (void 0 !== e.y)
                            return this.getRightValue(e.y);
                    return e
                },
                _convertTicksToLabels: function (e) {
                    var t, i, n, r = this;
                    for (r.ticks = e.map((function (e) {
                        return e.value
                    }
                    )),
                        r.beforeTickToLabelConversion(),
                        t = r.convertTicksToLabels(e) || r.ticks,
                        r.afterTickToLabelConversion(),
                        i = 0,
                        n = e.length; i < n; ++i)
                        e[i].label = t[i];
                    return t
                },
                _getLabelSizes: function () {
                    var e = this
                        , t = e._labelSizes;
                    return t || (e._labelSizes = t = fn(e.ctx, yn(e.options.ticks), e.getTicks(), e.longestTextCache),
                        e.longestLabelWidth = t.widest.width),
                        t
                },
                _parseValue: function (e) {
                    var t, n, r, o;
                    return dn(e) ? (t = +this.getRightValue(e[0]),
                        n = +this.getRightValue(e[1]),
                        r = Math.min(t, n),
                        o = Math.max(t, n)) : (t = void 0,
                            n = e = +this.getRightValue(e),
                            r = e,
                            o = e),
                    {
                        min: r,
                        max: o,
                        start: t,
                        end: n
                    }
                },
                _getScaleLabel: function (e) {
                    var t = this._parseValue(e);
                    return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
                },
                getLabelForIndex: he.noop,
                getPixelForValue: he.noop,
                getValueForPixel: he.noop,
                getPixelForTick: function (e) {
                    var t = this
                        , n = t.options.offset
                        , r = t._ticks.length
                        , o = 1 / Math.max(r - (n ? 0 : 1), 1);
                    return e < 0 || e > r - 1 ? null : t.getPixelForDecimal(e * o + (n ? o / 2 : 0))
                },
                getPixelForDecimal: function (e) {
                    var t = this;
                    return t._reversePixels && (e = 1 - e),
                        t._startPixel + e * t._length
                },
                getDecimalForPixel: function (e) {
                    var t = (e - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - t : t
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var e = this
                        , t = e.min
                        , n = e.max;
                    return e.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
                },
                _autoSkip: function (e) {
                    var i, t, n, r, o = this, d = o.options.ticks, l = o._length, _ = d.maxTicksLimit || l / o._tickSize() + 1, m = d.major.enabled ? bn(e) : [], c = m.length, h = m[0], f = m[c - 1];
                    if (c > _)
                        return kn(e, m, c / _),
                            Ln(e);
                    if (n = vn(m, e, l, _),
                        c > 0) {
                        for (i = 0,
                            t = c - 1; i < t; i++)
                            Dn(e, n, m[i], m[i + 1]);
                        return r = c > 1 ? (f - h) / (c - 1) : null,
                            Dn(e, n, he.isNullOrUndef(r) ? 0 : h - r, h),
                            Dn(e, n, f, he.isNullOrUndef(r) ? e.length : f + r),
                            Ln(e)
                    }
                    return Dn(e, n),
                        Ln(e)
                },
                _tickSize: function () {
                    var e = this
                        , t = e.options.ticks
                        , n = he.toRadians(e.labelRotation)
                        , r = Math.abs(Math.cos(n))
                        , o = Math.abs(Math.sin(n))
                        , d = e._getLabelSizes()
                        , l = t.autoSkipPadding || 0
                        , _ = d ? d.widest.width + l : 0
                        , m = d ? d.highest.height + l : 0;
                    return e.isHorizontal() ? m * r > _ * o ? _ / r : m / o : m * o < _ * r ? m / r : _ / o
                },
                _isVisible: function () {
                    var i, e, meta, t = this, n = t.chart, r = t.options.display;
                    if ("auto" !== r)
                        return !!r;
                    for (i = 0,
                        e = n.data.datasets.length; i < e; ++i)
                        if (n.isDatasetVisible(i) && ((meta = n.getDatasetMeta(i)).xAxisID === t.id || meta.yAxisID === t.id))
                            return !0;
                    return !1
                },
                _computeGridLineItems: function (e) {
                    var t, i, n, r, o, d, l, _, m, c, h, f, M, y, L, Y, v, k = this, D = k.chart, w = k.options, T = w.gridLines, x = w.position, S = T.offsetGridLines, H = k.isHorizontal(), j = k._ticksToDraw, P = j.length + (S ? 1 : 0), O = Mn(T), A = [], F = T.drawBorder ? _n(T.lineWidth, 0, 0) : 0, W = F / 2, C = he._alignPixel, E = function (e) {
                        return C(D, e, F)
                    };
                    for ("top" === x ? (t = E(k.bottom),
                        l = k.bottom - O,
                        m = t - W,
                        h = E(e.top) + W,
                        M = e.bottom) : "bottom" === x ? (t = E(k.top),
                            h = e.top,
                            M = E(e.bottom) - W,
                            l = t + W,
                            m = k.top + O) : "left" === x ? (t = E(k.right),
                                d = k.right - O,
                                _ = t - W,
                                c = E(e.left) + W,
                                f = e.right) : (t = E(k.left),
                                    c = e.left,
                                    f = E(e.right) - W,
                                    d = t + W,
                                    _ = k.left + O),
                        i = 0; i < P; ++i)
                        n = j[i] || {},
                            ln(n.label) && i < j.length || (i === k.zeroLineIndex && w.offset === S ? (y = T.zeroLineWidth,
                                L = T.zeroLineColor,
                                Y = T.zeroLineBorderDash || [],
                                v = T.zeroLineBorderDashOffset || 0) : (y = _n(T.lineWidth, i, 1),
                                    L = _n(T.color, i, "rgba(0,0,0,0.1)"),
                                    Y = T.borderDash || [],
                                    v = T.borderDashOffset || 0),
                                void 0 !== (r = cn(k, n._index || i, S)) && (o = C(D, r, y),
                                    H ? d = _ = c = f = o : l = m = h = M = o,
                                    A.push({
                                        tx1: d,
                                        ty1: l,
                                        tx2: _,
                                        ty2: m,
                                        x1: c,
                                        y1: h,
                                        x2: f,
                                        y2: M,
                                        width: y,
                                        color: L,
                                        borderDash: Y,
                                        borderDashOffset: v
                                    })));
                    return A.ticksLength = P,
                        A.borderValue = t,
                        A
                },
                _computeLabelItems: function () {
                    var i, e, t, label, n, r, o, d, l, _, m, c, h = this, f = h.options, M = f.ticks, y = f.position, L = M.mirror, Y = h.isHorizontal(), v = h._ticksToDraw, k = yn(M), D = M.padding, w = Mn(f.gridLines), T = -he.toRadians(h.labelRotation), x = [];
                    for ("top" === y ? (r = h.bottom - w - D,
                        o = T ? "left" : "center") : "bottom" === y ? (r = h.top + w + D,
                            o = T ? "right" : "center") : "left" === y ? (n = h.right - (L ? 0 : w) - D,
                                o = L ? "left" : "right") : (n = h.left + (L ? 0 : w) + D,
                                    o = L ? "right" : "left"),
                        i = 0,
                        e = v.length; i < e; ++i)
                        label = (t = v[i]).label,
                            ln(label) || (d = h.getPixelForTick(t._index || i) + M.labelOffset,
                                _ = (l = t.major ? k.major : k.minor).lineHeight,
                                m = dn(label) ? label.length : 1,
                                Y ? (n = d,
                                    c = "top" === y ? ((T ? 1 : .5) - m) * _ : (T ? 0 : .5) * _) : (r = d,
                                        c = (1 - m) * _ / 2),
                                x.push({
                                    x: n,
                                    y: r,
                                    rotation: T,
                                    label: label,
                                    font: l,
                                    textOffset: c,
                                    textAlign: o
                                }));
                    return x
                },
                _drawGrid: function (e) {
                    var t = this
                        , n = t.options.gridLines;
                    if (n.display) {
                        var r, o, i, d, l, _ = t.ctx, m = t.chart, c = he._alignPixel, h = n.drawBorder ? _n(n.lineWidth, 0, 0) : 0, f = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
                        for (i = 0,
                            d = f.length; i < d; ++i)
                            r = (l = f[i]).width,
                                o = l.color,
                                r && o && (_.save(),
                                    _.lineWidth = r,
                                    _.strokeStyle = o,
                                    _.setLineDash && (_.setLineDash(l.borderDash),
                                        _.lineDashOffset = l.borderDashOffset),
                                    _.beginPath(),
                                    n.drawTicks && (_.moveTo(l.tx1, l.ty1),
                                        _.lineTo(l.tx2, l.ty2)),
                                    n.drawOnChartArea && (_.moveTo(l.x1, l.y1),
                                        _.lineTo(l.x2, l.y2)),
                                    _.stroke(),
                                    _.restore());
                        if (h) {
                            var M, y, L, Y, v = h, k = _n(n.lineWidth, f.ticksLength - 1, 1), D = f.borderValue;
                            t.isHorizontal() ? (M = c(m, t.left, v) - v / 2,
                                y = c(m, t.right, k) + k / 2,
                                L = Y = D) : (L = c(m, t.top, v) - v / 2,
                                    Y = c(m, t.bottom, k) + k / 2,
                                    M = y = D),
                                _.lineWidth = h,
                                _.strokeStyle = _n(n.color, 0),
                                _.beginPath(),
                                _.moveTo(M, L),
                                _.lineTo(y, Y),
                                _.stroke()
                        }
                    }
                },
                _drawLabels: function () {
                    var e = this;
                    if (e.options.ticks.display) {
                        var i, t, n, r, o, d, label, l, _ = e.ctx, m = e._labelItems || (e._labelItems = e._computeLabelItems());
                        for (i = 0,
                            n = m.length; i < n; ++i) {
                            if (d = (o = m[i]).font,
                                _.save(),
                                _.translate(o.x, o.y),
                                _.rotate(o.rotation),
                                _.font = d.string,
                                _.fillStyle = d.color,
                                _.textBaseline = "middle",
                                _.textAlign = o.textAlign,
                                label = o.label,
                                l = o.textOffset,
                                dn(label))
                                for (t = 0,
                                    r = label.length; t < r; ++t)
                                    _.fillText("" + label[t], 0, l),
                                        l += d.lineHeight;
                            else
                                _.fillText(label, 0, l);
                            _.restore()
                        }
                    }
                },
                _drawTitle: function () {
                    var e = this
                        , t = e.ctx
                        , n = e.options
                        , r = n.scaleLabel;
                    if (r.display) {
                        var o, d, l = un(r.fontColor, ie.global.defaultFontColor), _ = he.options._parseFont(r), m = he.options.toPadding(r.padding), c = _.lineHeight / 2, h = n.position, f = 0;
                        if (e.isHorizontal())
                            o = e.left + e.width / 2,
                                d = "bottom" === h ? e.bottom - c - m.bottom : e.top + c + m.top;
                        else {
                            var M = "left" === h;
                            o = M ? e.left + c + m.top : e.right - c - m.top,
                                d = e.top + e.height / 2,
                                f = M ? -.5 * Math.PI : .5 * Math.PI
                        }
                        t.save(),
                            t.translate(o, d),
                            t.rotate(f),
                            t.textAlign = "center",
                            t.textBaseline = "middle",
                            t.fillStyle = l,
                            t.font = _.string,
                            t.fillText(r.labelString, 0, 0),
                            t.restore()
                    }
                },
                draw: function (e) {
                    var t = this;
                    t._isVisible() && (t._drawGrid(e),
                        t._drawTitle(),
                        t._drawLabels())
                },
                _layers: function () {
                    var e = this
                        , t = e.options
                        , n = t.ticks && t.ticks.z || 0
                        , r = t.gridLines && t.gridLines.z || 0;
                    return e._isVisible() && n !== r && e.draw === e._draw ? [{
                        z: r,
                        draw: function () {
                            e._drawGrid.apply(e, arguments),
                                e._drawTitle.apply(e, arguments)
                        }
                    }, {
                        z: n,
                        draw: function () {
                            e._drawLabels.apply(e, arguments)
                        }
                    }] : [{
                        z: n,
                        draw: function () {
                            e.draw.apply(e, arguments)
                        }
                    }]
                },
                _getMatchingVisibleMetas: function (e) {
                    var t = this
                        , n = t.isHorizontal();
                    return t.chart._getSortedVisibleDatasetMetas().filter((function (meta) {
                        return (!e || meta.type === e) && (n ? meta.xAxisID === t.id : meta.yAxisID === t.id)
                    }
                    ))
                }
            });
            wn.prototype._draw = wn.prototype.draw;
            var Tn = wn
                , xn = he.isNullOrUndef
                , Sn = {
                    position: "bottom"
                }
                , Hn = Tn.extend({
                    determineDataLimits: function () {
                        var e, t = this, n = t._getLabels(), r = t.options.ticks, o = r.min, d = r.max, l = 0, _ = n.length - 1;
                        void 0 !== o && (e = n.indexOf(o)) >= 0 && (l = e),
                            void 0 !== d && (e = n.indexOf(d)) >= 0 && (_ = e),
                            t.minIndex = l,
                            t.maxIndex = _,
                            t.min = n[l],
                            t.max = n[_]
                    },
                    buildTicks: function () {
                        var e = this
                            , t = e._getLabels()
                            , n = e.minIndex
                            , r = e.maxIndex;
                        e.ticks = 0 === n && r === t.length - 1 ? t : t.slice(n, r + 1)
                    },
                    getLabelForIndex: function (e, t) {
                        var n = this
                            , r = n.chart;
                        return r.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(r.data.datasets[t].data[e]) : n._getLabels()[e]
                    },
                    _configure: function () {
                        var e = this
                            , t = e.options.offset
                            , n = e.ticks;
                        Tn.prototype._configure.call(e),
                            e.isHorizontal() || (e._reversePixels = !e._reversePixels),
                            n && (e._startValue = e.minIndex - (t ? .5 : 0),
                                e._valueRange = Math.max(n.length - (t ? 0 : 1), 1))
                    },
                    getPixelForValue: function (e, t, n) {
                        var r, o, d, l = this;
                        return xn(t) || xn(n) || (e = l.chart.data.datasets[n].data[t]),
                            xn(e) || (r = l.isHorizontal() ? e.x : e.y),
                            (void 0 !== r || void 0 !== e && isNaN(t)) && (o = l._getLabels(),
                                e = he.valueOrDefault(r, e),
                                t = -1 !== (d = o.indexOf(e)) ? d : t,
                                isNaN(t) && (t = e)),
                            l.getPixelForDecimal((t - l._startValue) / l._valueRange)
                    },
                    getPixelForTick: function (e) {
                        var t = this.ticks;
                        return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
                    },
                    getValueForPixel: function (e) {
                        var t = this
                            , n = Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange);
                        return Math.min(Math.max(n, 0), t.ticks.length - 1)
                    },
                    getBasePixel: function () {
                        return this.bottom
                    }
                })
                , jn = Sn;
            Hn._defaults = jn;
            var Pn = he.noop
                , On = he.isNullOrUndef;
            function An(e, t) {
                var n, r, o, d, l = [], _ = 1e-14, m = e.stepSize, c = m || 1, h = e.maxTicks - 1, f = e.min, M = e.max, y = e.precision, L = t.min, Y = t.max, v = he.niceNum((Y - L) / h / c) * c;
                if (v < _ && On(f) && On(M))
                    return [L, Y];
                (d = Math.ceil(Y / v) - Math.floor(L / v)) > h && (v = he.niceNum(d * v / h / c) * c),
                    m || On(y) ? n = Math.pow(10, he._decimalPlaces(v)) : (n = Math.pow(10, y),
                        v = Math.ceil(v * n) / n),
                    r = Math.floor(L / v) * v,
                    o = Math.ceil(Y / v) * v,
                    m && (!On(f) && he.almostWhole(f / v, v / 1e3) && (r = f),
                        !On(M) && he.almostWhole(M / v, v / 1e3) && (o = M)),
                    d = (o - r) / v,
                    d = he.almostEquals(d, Math.round(d), v / 1e3) ? Math.round(d) : Math.ceil(d),
                    r = Math.round(r * n) / n,
                    o = Math.round(o * n) / n,
                    l.push(On(f) ? r : f);
                for (var k = 1; k < d; ++k)
                    l.push(Math.round((r + k * v) * n) / n);
                return l.push(On(M) ? o : M),
                    l
            }
            var Fn = Tn.extend({
                getRightValue: function (e) {
                    return "string" == typeof e ? +e : Tn.prototype.getRightValue.call(this, e)
                },
                handleTickRangeOptions: function () {
                    var e = this
                        , t = e.options.ticks;
                    if (t.beginAtZero) {
                        var n = he.sign(e.min)
                            , r = he.sign(e.max);
                        n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0)
                    }
                    var o = void 0 !== t.min || void 0 !== t.suggestedMin
                        , d = void 0 !== t.max || void 0 !== t.suggestedMax;
                    void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)),
                        void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)),
                        o !== d && e.min >= e.max && (o ? e.max = e.min + 1 : e.min = e.max - 1),
                        e.min === e.max && (e.max++,
                            t.beginAtZero || e.min--)
                },
                getTickLimit: function () {
                    var e, t = this, n = t.options.ticks, r = n.stepSize, o = n.maxTicksLimit;
                    return r ? e = Math.ceil(t.max / r) - Math.floor(t.min / r) + 1 : (e = t._computeTickLimit(),
                        o = o || 11),
                        o && (e = Math.min(o, e)),
                        e
                },
                _computeTickLimit: function () {
                    return Number.POSITIVE_INFINITY
                },
                handleDirectionalChanges: Pn,
                buildTicks: function () {
                    var e = this
                        , t = e.options.ticks
                        , n = e.getTickLimit()
                        , r = {
                            maxTicks: n = Math.max(2, n),
                            min: t.min,
                            max: t.max,
                            precision: t.precision,
                            stepSize: he.valueOrDefault(t.fixedStepSize, t.stepSize)
                        }
                        , o = e.ticks = An(r, e);
                    e.handleDirectionalChanges(),
                        e.max = he.max(o),
                        e.min = he.min(o),
                        t.reverse ? (o.reverse(),
                            e.start = e.max,
                            e.end = e.min) : (e.start = e.min,
                                e.end = e.max)
                },
                convertTicksToLabels: function () {
                    var e = this;
                    e.ticksAsNumbers = e.ticks.slice(),
                        e.zeroLineIndex = e.ticks.indexOf(0),
                        Tn.prototype.convertTicksToLabels.call(e)
                },
                _configure: function () {
                    var e, t = this, n = t.getTicks(), r = t.min, o = t.max;
                    Tn.prototype._configure.call(t),
                        t.options.offset && n.length && (r -= e = (o - r) / Math.max(n.length - 1, 1) / 2,
                            o += e),
                        t._startValue = r,
                        t._endValue = o,
                        t._valueRange = o - r
                }
            })
                , Wn = {
                    position: "left",
                    ticks: {
                        callback: on.formatters.linear
                    }
                }
                , Cn = 0
                , En = 1;
            function zn(e, t, meta) {
                var n = [meta.type, void 0 === t && void 0 === meta.stack ? meta.index : "", meta.stack].join(".");
                return void 0 === e[n] && (e[n] = {
                    pos: [],
                    neg: []
                }),
                    e[n]
            }
            function In(e, t, meta, data) {
                var i, n, r = e.options, o = zn(t, r.stacked, meta), d = o.pos, l = o.neg, _ = data.length;
                for (i = 0; i < _; ++i)
                    n = e._parseValue(data[i]),
                        isNaN(n.min) || isNaN(n.max) || meta.data[i].hidden || (d[i] = d[i] || 0,
                            l[i] = l[i] || 0,
                            r.relativePoints ? d[i] = 100 : n.min < 0 || n.max < 0 ? l[i] += n.min : d[i] += n.max)
            }
            function Nn(e, meta, data) {
                var i, t, n = data.length;
                for (i = 0; i < n; ++i)
                    t = e._parseValue(data[i]),
                        isNaN(t.min) || isNaN(t.max) || meta.data[i].hidden || (e.min = Math.min(e.min, t.min),
                            e.max = Math.max(e.max, t.max))
            }
            var Rn = Fn.extend({
                determineDataLimits: function () {
                    var i, meta, data, e, t = this, n = t.options, r = t.chart.data.datasets, o = t._getMatchingVisibleMetas(), d = n.stacked, l = {}, _ = o.length;
                    if (t.min = Number.POSITIVE_INFINITY,
                        t.max = Number.NEGATIVE_INFINITY,
                        void 0 === d)
                        for (i = 0; !d && i < _; ++i)
                            d = void 0 !== (meta = o[i]).stack;
                    for (i = 0; i < _; ++i)
                        data = r[(meta = o[i]).index].data,
                            d ? In(t, l, meta, data) : Nn(t, meta, data);
                    he.each(l, (function (n) {
                        e = n.pos.concat(n.neg),
                            t.min = Math.min(t.min, he.min(e)),
                            t.max = Math.max(t.max, he.max(e))
                    }
                    )),
                        t.min = he.isFinite(t.min) && !isNaN(t.min) ? t.min : Cn,
                        t.max = he.isFinite(t.max) && !isNaN(t.max) ? t.max : En,
                        t.handleTickRangeOptions()
                },
                _computeTickLimit: function () {
                    var e, t = this;
                    return t.isHorizontal() ? Math.ceil(t.width / 40) : (e = he.options._parseFont(t.options.ticks),
                        Math.ceil(t.height / e.lineHeight))
                },
                handleDirectionalChanges: function () {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function (e, t) {
                    return this._getScaleLabel(this.chart.data.datasets[t].data[e])
                },
                getPixelForValue: function (e) {
                    var t = this;
                    return t.getPixelForDecimal((+t.getRightValue(e) - t._startValue) / t._valueRange)
                },
                getValueForPixel: function (e) {
                    return this._startValue + this.getDecimalForPixel(e) * this._valueRange
                },
                getPixelForTick: function (e) {
                    var t = this.ticksAsNumbers;
                    return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
                }
            })
                , Vn = Wn;
            Rn._defaults = Vn;
            var Bn = he.valueOrDefault
                , Jn = he.math.log10;
            function Un(e, t) {
                var n, r, o = [], d = Bn(e.min, Math.pow(10, Math.floor(Jn(t.min)))), l = Math.floor(Jn(t.max)), _ = Math.ceil(t.max / Math.pow(10, l));
                0 === d ? (n = Math.floor(Jn(t.minNotZero)),
                    r = Math.floor(t.minNotZero / Math.pow(10, n)),
                    o.push(d),
                    d = r * Math.pow(10, n)) : (n = Math.floor(Jn(d)),
                        r = Math.floor(d / Math.pow(10, n)));
                var m = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                do {
                    o.push(d),
                        10 == ++r && (r = 1,
                            m = ++n >= 0 ? 1 : m),
                        d = Math.round(r * Math.pow(10, n) * m) / m
                } while (n < l || n === l && r < _);
                var c = Bn(e.max, d);
                return o.push(c),
                    o
            }
            var Gn = {
                position: "left",
                ticks: {
                    callback: on.formatters.logarithmic
                }
            };
            function qn(e, t) {
                return he.isFinite(e) && e >= 0 ? e : t
            }
            var $n = Tn.extend({
                determineDataLimits: function () {
                    var e, meta, t, data, i, n, r = this, o = r.options, d = r.chart, l = d.data.datasets, _ = r.isHorizontal();
                    function m(meta) {
                        return _ ? meta.xAxisID === r.id : meta.yAxisID === r.id
                    }
                    r.min = Number.POSITIVE_INFINITY,
                        r.max = Number.NEGATIVE_INFINITY,
                        r.minNotZero = Number.POSITIVE_INFINITY;
                    var c = o.stacked;
                    if (void 0 === c)
                        for (e = 0; e < l.length; e++)
                            if (meta = d.getDatasetMeta(e),
                                d.isDatasetVisible(e) && m(meta) && void 0 !== meta.stack) {
                                c = !0;
                                break
                            }
                    if (o.stacked || c) {
                        var h = {};
                        for (e = 0; e < l.length; e++) {
                            var f = [(meta = d.getDatasetMeta(e)).type, void 0 === o.stacked && void 0 === meta.stack ? e : "", meta.stack].join(".");
                            if (d.isDatasetVisible(e) && m(meta))
                                for (void 0 === h[f] && (h[f] = []),
                                    i = 0,
                                    n = (data = l[e].data).length; i < n; i++) {
                                    var M = h[f];
                                    t = r._parseValue(data[i]),
                                        isNaN(t.min) || isNaN(t.max) || meta.data[i].hidden || t.min < 0 || t.max < 0 || (M[i] = M[i] || 0,
                                            M[i] += t.max)
                                }
                        }
                        he.each(h, (function (e) {
                            if (e.length > 0) {
                                var t = he.min(e)
                                    , n = he.max(e);
                                r.min = Math.min(r.min, t),
                                    r.max = Math.max(r.max, n)
                            }
                        }
                        ))
                    } else
                        for (e = 0; e < l.length; e++)
                            if (meta = d.getDatasetMeta(e),
                                d.isDatasetVisible(e) && m(meta))
                                for (i = 0,
                                    n = (data = l[e].data).length; i < n; i++)
                                    t = r._parseValue(data[i]),
                                        isNaN(t.min) || isNaN(t.max) || meta.data[i].hidden || t.min < 0 || t.max < 0 || (r.min = Math.min(t.min, r.min),
                                            r.max = Math.max(t.max, r.max),
                                            0 !== t.min && (r.minNotZero = Math.min(t.min, r.minNotZero)));
                    r.min = he.isFinite(r.min) ? r.min : null,
                        r.max = he.isFinite(r.max) ? r.max : null,
                        r.minNotZero = he.isFinite(r.minNotZero) ? r.minNotZero : null,
                        this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function () {
                    var e = this
                        , t = e.options.ticks
                        , n = 1
                        , r = 10;
                    e.min = qn(t.min, e.min),
                        e.max = qn(t.max, e.max),
                        e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Jn(e.min)) - 1),
                            e.max = Math.pow(10, Math.floor(Jn(e.max)) + 1)) : (e.min = n,
                                e.max = r)),
                        null === e.min && (e.min = Math.pow(10, Math.floor(Jn(e.max)) - 1)),
                        null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Jn(e.min)) + 1) : r),
                        null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Jn(e.max))) : e.minNotZero = n)
                },
                buildTicks: function () {
                    var e = this
                        , t = e.options.ticks
                        , n = !e.isHorizontal()
                        , r = {
                            min: qn(t.min),
                            max: qn(t.max)
                        }
                        , o = e.ticks = Un(r, e);
                    e.max = he.max(o),
                        e.min = he.min(o),
                        t.reverse ? (n = !n,
                            e.start = e.max,
                            e.end = e.min) : (e.start = e.min,
                                e.end = e.max),
                        n && o.reverse()
                },
                convertTicksToLabels: function () {
                    this.tickValues = this.ticks.slice(),
                        Tn.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function (e, t) {
                    return this._getScaleLabel(this.chart.data.datasets[t].data[e])
                },
                getPixelForTick: function (e) {
                    var t = this.tickValues;
                    return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
                },
                _getFirstTickValue: function (e) {
                    var t = Math.floor(Jn(e));
                    return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                },
                _configure: function () {
                    var e = this
                        , t = e.min
                        , n = 0;
                    Tn.prototype._configure.call(e),
                        0 === t && (t = e._getFirstTickValue(e.minNotZero),
                            n = Bn(e.options.ticks.fontSize, ie.global.defaultFontSize) / e._length),
                        e._startValue = Jn(t),
                        e._valueOffset = n,
                        e._valueRange = (Jn(e.max) - Jn(t)) / (1 - n)
                },
                getPixelForValue: function (e) {
                    var t = this
                        , n = 0;
                    return (e = +t.getRightValue(e)) > t.min && e > 0 && (n = (Jn(e) - t._startValue) / t._valueRange + t._valueOffset),
                        t.getPixelForDecimal(n)
                },
                getValueForPixel: function (e) {
                    var t = this
                        , n = t.getDecimalForPixel(e);
                    return 0 === n && 0 === t.min ? 0 : Math.pow(10, t._startValue + (n - t._valueOffset) * t._valueRange)
                }
            })
                , Kn = Gn;
            $n._defaults = Kn;
            var Zn = he.valueOrDefault
                , Xn = he.valueAtIndexOrDefault
                , Qn = he.options.resolve
                , er = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0,0,0,0.1)",
                        lineWidth: 1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    gridLines: {
                        circular: !1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: on.formatters.linear
                    },
                    pointLabels: {
                        display: !0,
                        fontSize: 10,
                        callback: function (label) {
                            return label
                        }
                    }
                };
            function ar(e) {
                var t = e.ticks;
                return t.display && e.display ? Zn(t.fontSize, ie.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
            }
            function nr(e, t, label) {
                return he.isArray(label) ? {
                    w: he.longestText(e, e.font, label),
                    h: label.length * t
                } : {
                    w: e.measureText(label).width,
                    h: t
                }
            }
            function rr(e, t, n, r, o) {
                return e === r || e === o ? {
                    start: t - n / 2,
                    end: t + n / 2
                } : e < r || e > o ? {
                    start: t - n,
                    end: t
                } : {
                    start: t,
                    end: t + n
                }
            }
            function ir(e) {
                var i, t, n, r = he.options._parseFont(e.options.pointLabels), o = {
                    l: 0,
                    r: e.width,
                    t: 0,
                    b: e.height - e.paddingTop
                }, d = {};
                e.ctx.font = r.string,
                    e._pointLabelSizes = [];
                var l = e.chart.data.labels.length;
                for (i = 0; i < l; i++) {
                    n = e.getPointPosition(i, e.drawingArea + 5),
                        t = nr(e.ctx, r.lineHeight, e.pointLabels[i]),
                        e._pointLabelSizes[i] = t;
                    var _ = e.getIndexAngle(i)
                        , m = he.toDegrees(_) % 360
                        , c = rr(m, n.x, t.w, 0, 180)
                        , h = rr(m, n.y, t.h, 90, 270);
                    c.start < o.l && (o.l = c.start,
                        d.l = _),
                        c.end > o.r && (o.r = c.end,
                            d.r = _),
                        h.start < o.t && (o.t = h.start,
                            d.t = _),
                        h.end > o.b && (o.b = h.end,
                            d.b = _)
                }
                e.setReductions(e.drawingArea, o, d)
            }
            function sr(e) {
                return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
            }
            function or(e, text, t, n) {
                var i, r, o = t.y + n / 2;
                if (he.isArray(text))
                    for (i = 0,
                        r = text.length; i < r; ++i)
                        e.fillText(text[i], t.x, o),
                            o += n;
                else
                    e.fillText(text, t.x, o)
            }
            function dr(e, t, n) {
                90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
            }
            function lr(e) {
                var t = e.ctx
                    , n = e.options
                    , r = n.pointLabels
                    , o = ar(n)
                    , d = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max)
                    , l = he.options._parseFont(r);
                t.save(),
                    t.font = l.string,
                    t.textBaseline = "middle";
                for (var i = e.chart.data.labels.length - 1; i >= 0; i--) {
                    var _ = 0 === i ? o / 2 : 0
                        , m = e.getPointPosition(i, d + _ + 5)
                        , c = Xn(r.fontColor, i, ie.global.defaultFontColor);
                    t.fillStyle = c;
                    var h = e.getIndexAngle(i)
                        , f = he.toDegrees(h);
                    t.textAlign = sr(f),
                        dr(f, e._pointLabelSizes[i], m),
                        or(t, e.pointLabels[i], m, l.lineHeight)
                }
                t.restore()
            }
            function ur(e, t, n, r) {
                var o, d = e.ctx, l = t.circular, _ = e.chart.data.labels.length, m = Xn(t.color, r - 1), c = Xn(t.lineWidth, r - 1);
                if ((l || _) && m && c) {
                    if (d.save(),
                        d.strokeStyle = m,
                        d.lineWidth = c,
                        d.setLineDash && (d.setLineDash(t.borderDash || []),
                            d.lineDashOffset = t.borderDashOffset || 0),
                        d.beginPath(),
                        l)
                        d.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                    else {
                        o = e.getPointPosition(0, n),
                            d.moveTo(o.x, o.y);
                        for (var i = 1; i < _; i++)
                            o = e.getPointPosition(i, n),
                                d.lineTo(o.x, o.y)
                    }
                    d.closePath(),
                        d.stroke(),
                        d.restore()
                }
            }
            function _r(param) {
                return he.isNumber(param) ? param : 0
            }
            var mr = Fn.extend({
                setDimensions: function () {
                    var e = this;
                    e.width = e.maxWidth,
                        e.height = e.maxHeight,
                        e.paddingTop = ar(e.options) / 2,
                        e.xCenter = Math.floor(e.width / 2),
                        e.yCenter = Math.floor((e.height - e.paddingTop) / 2),
                        e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
                },
                determineDataLimits: function () {
                    var e = this
                        , t = e.chart
                        , n = Number.POSITIVE_INFINITY
                        , r = Number.NEGATIVE_INFINITY;
                    he.each(t.data.datasets, (function (o, d) {
                        if (t.isDatasetVisible(d)) {
                            var meta = t.getDatasetMeta(d);
                            he.each(o.data, (function (t, o) {
                                var d = +e.getRightValue(t);
                                isNaN(d) || meta.data[o].hidden || (n = Math.min(d, n),
                                    r = Math.max(d, r))
                            }
                            ))
                        }
                    }
                    )),
                        e.min = n === Number.POSITIVE_INFINITY ? 0 : n,
                        e.max = r === Number.NEGATIVE_INFINITY ? 0 : r,
                        e.handleTickRangeOptions()
                },
                _computeTickLimit: function () {
                    return Math.ceil(this.drawingArea / ar(this.options))
                },
                convertTicksToLabels: function () {
                    var e = this;
                    Fn.prototype.convertTicksToLabels.call(e),
                        e.pointLabels = e.chart.data.labels.map((function () {
                            var label = he.callback(e.options.pointLabels.callback, arguments, e);
                            return label || 0 === label ? label : ""
                        }
                        ))
                },
                getLabelForIndex: function (e, t) {
                    return +this.getRightValue(this.chart.data.datasets[t].data[e])
                },
                fit: function () {
                    var e = this
                        , t = e.options;
                    t.display && t.pointLabels.display ? ir(e) : e.setCenterPoint(0, 0, 0, 0)
                },
                setReductions: function (e, t, n) {
                    var r = this
                        , o = t.l / Math.sin(n.l)
                        , d = Math.max(t.r - r.width, 0) / Math.sin(n.r)
                        , l = -t.t / Math.cos(n.t)
                        , _ = -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
                    o = _r(o),
                        d = _r(d),
                        l = _r(l),
                        _ = _r(_),
                        r.drawingArea = Math.min(Math.floor(e - (o + d) / 2), Math.floor(e - (l + _) / 2)),
                        r.setCenterPoint(o, d, l, _)
                },
                setCenterPoint: function (e, t, n, r) {
                    var o = this
                        , d = o.width - t - o.drawingArea
                        , l = e + o.drawingArea
                        , _ = n + o.drawingArea
                        , m = o.height - o.paddingTop - r - o.drawingArea;
                    o.xCenter = Math.floor((l + d) / 2 + o.left),
                        o.yCenter = Math.floor((_ + m) / 2 + o.top + o.paddingTop)
                },
                getIndexAngle: function (e) {
                    var t = this.chart
                        , n = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
                    return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
                },
                getDistanceFromCenterForValue: function (e) {
                    var t = this;
                    if (he.isNullOrUndef(e))
                        return NaN;
                    var n = t.drawingArea / (t.max - t.min);
                    return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
                },
                getPointPosition: function (e, t) {
                    var n = this
                        , r = n.getIndexAngle(e) - Math.PI / 2;
                    return {
                        x: Math.cos(r) * t + n.xCenter,
                        y: Math.sin(r) * t + n.yCenter
                    }
                },
                getPointPositionForValue: function (e, t) {
                    return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                },
                getBasePosition: function (e) {
                    var t = this
                        , n = t.min
                        , r = t.max;
                    return t.getPointPositionForValue(e || 0, t.beginAtZero ? 0 : n < 0 && r < 0 ? r : n > 0 && r > 0 ? n : 0)
                },
                _drawGrid: function () {
                    var i, e, t, n = this, r = n.ctx, o = n.options, d = o.gridLines, l = o.angleLines, _ = Zn(l.lineWidth, d.lineWidth), m = Zn(l.color, d.color);
                    if (o.pointLabels.display && lr(n),
                        d.display && he.each(n.ticks, (function (label, t) {
                            0 !== t && (e = n.getDistanceFromCenterForValue(n.ticksAsNumbers[t]),
                                ur(n, d, e, t))
                        }
                        )),
                        l.display && _ && m) {
                        for (r.save(),
                            r.lineWidth = _,
                            r.strokeStyle = m,
                            r.setLineDash && (r.setLineDash(Qn([l.borderDash, d.borderDash, []])),
                                r.lineDashOffset = Qn([l.borderDashOffset, d.borderDashOffset, 0])),
                            i = n.chart.data.labels.length - 1; i >= 0; i--)
                            e = n.getDistanceFromCenterForValue(o.ticks.reverse ? n.min : n.max),
                                t = n.getPointPosition(i, e),
                                r.beginPath(),
                                r.moveTo(n.xCenter, n.yCenter),
                                r.lineTo(t.x, t.y),
                                r.stroke();
                        r.restore()
                    }
                },
                _drawLabels: function () {
                    var e = this
                        , t = e.ctx
                        , n = e.options.ticks;
                    if (n.display) {
                        var r, o, d = e.getIndexAngle(0), l = he.options._parseFont(n), _ = Zn(n.fontColor, ie.global.defaultFontColor);
                        t.save(),
                            t.font = l.string,
                            t.translate(e.xCenter, e.yCenter),
                            t.rotate(d),
                            t.textAlign = "center",
                            t.textBaseline = "middle",
                            he.each(e.ticks, (function (label, d) {
                                (0 !== d || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[d]),
                                    n.showLabelBackdrop && (o = t.measureText(label).width,
                                        t.fillStyle = n.backdropColor,
                                        t.fillRect(-o / 2 - n.backdropPaddingX, -r - l.size / 2 - n.backdropPaddingY, o + 2 * n.backdropPaddingX, l.size + 2 * n.backdropPaddingY)),
                                    t.fillStyle = _,
                                    t.fillText(label, 0, -r))
                            }
                            )),
                            t.restore()
                    }
                },
                _drawTitle: he.noop
            })
                , cr = er;
            mr._defaults = cr;
            var fr = he._deprecated
                , Mr = he.options.resolve
                , pr = he.valueOrDefault
                , gr = Number.MIN_SAFE_INTEGER || -9007199254740991
                , yr = Number.MAX_SAFE_INTEGER || 9007199254740991
                , Lr = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: 1e3
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: 60
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: 60
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: 24
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: 30
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: 4
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: 12
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: 4
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                }
                , Yr = Object.keys(Lr);
            function vr(a, b) {
                return a - b
            }
            function kr(e) {
                var i, t, n, r = {}, o = [];
                for (i = 0,
                    t = e.length; i < t; ++i)
                    r[n = e[i]] || (r[n] = !0,
                        o.push(n));
                return o
            }
            function Dr(e) {
                return he.valueOrDefault(e.time.min, e.ticks.min)
            }
            function wr(e) {
                return he.valueOrDefault(e.time.max, e.ticks.max)
            }
            function Tr(e, t, n, r) {
                if ("linear" === r || !e.length)
                    return [{
                        time: t,
                        pos: 0
                    }, {
                        time: n,
                        pos: 1
                    }];
                var i, o, d, l, _, table = [], m = [t];
                for (i = 0,
                    o = e.length; i < o; ++i)
                    (l = e[i]) > t && l < n && m.push(l);
                for (m.push(n),
                    i = 0,
                    o = m.length; i < o; ++i)
                    _ = m[i + 1],
                        d = m[i - 1],
                        l = m[i],
                        void 0 !== d && void 0 !== _ && Math.round((_ + d) / 2) === l || table.push({
                            time: l,
                            pos: i / (o - 1)
                        });
                return table
            }
            function xr(table, e, t) {
                for (var n, r, o, d = 0, l = table.length - 1; d >= 0 && d <= l;) {
                    if (r = table[(n = d + l >> 1) - 1] || null,
                        o = table[n],
                        !r)
                        return {
                            lo: null,
                            hi: o
                        };
                    if (o[e] < t)
                        d = n + 1;
                    else {
                        if (!(r[e] > t))
                            return {
                                lo: r,
                                hi: o
                            };
                        l = n - 1
                    }
                }
                return {
                    lo: o,
                    hi: null
                }
            }
            function Sr(table, e, t, n) {
                var r = xr(table, e, t)
                    , o = r.lo ? r.hi ? r.lo : table[table.length - 2] : table[0]
                    , d = r.lo ? r.hi ? r.hi : table[table.length - 1] : table[1]
                    , span = d[e] - o[e]
                    , l = span ? (t - o[e]) / span : 0
                    , _ = (d[n] - o[n]) * l;
                return o[n] + _
            }
            function Hr(e, input) {
                var t = e._adapter
                    , n = e.options.time
                    , r = n.parser
                    , o = r || n.format
                    , d = input;
                return "function" == typeof r && (d = r(d)),
                    he.isFinite(d) || (d = "string" == typeof o ? t.parse(d, o) : t.parse(d)),
                    null !== d ? +d : (r || "function" != typeof o || (d = o(input),
                        he.isFinite(d) || (d = t.parse(d))),
                        d)
            }
            function jr(e, input) {
                if (he.isNullOrUndef(input))
                    return null;
                var t = e.options.time
                    , n = Hr(e, e.getRightValue(input));
                return null === n || t.round && (n = +e._adapter.startOf(n, t.round)),
                    n
            }
            function Pr(e, t, n, r) {
                var i, o, d, l = Yr.length;
                for (i = Yr.indexOf(e); i < l - 1; ++i)
                    if (d = (o = Lr[Yr[i]]).steps ? o.steps : yr,
                        o.common && Math.ceil((n - t) / (d * o.size)) <= r)
                        return Yr[i];
                return Yr[l - 1]
            }
            function Or(e, t, n, r, o) {
                var i, d;
                for (i = Yr.length - 1; i >= Yr.indexOf(n); i--)
                    if (d = Yr[i],
                        Lr[d].common && e._adapter.diff(o, r, d) >= t - 1)
                        return d;
                return Yr[n ? Yr.indexOf(n) : 0]
            }
            function Ar(e) {
                for (var i = Yr.indexOf(e) + 1, t = Yr.length; i < t; ++i)
                    if (Lr[Yr[i]].common)
                        return Yr[i]
            }
            function Fr(e, t, n, r) {
                var time, o = e._adapter, d = e.options, l = d.time, _ = l.unit || Pr(l.minUnit, t, n, r), m = Mr([l.stepSize, l.unitStepSize, 1]), c = "week" === _ && l.isoWeekday, h = t, f = [];
                if (c && (h = +o.startOf(h, "isoWeek", c)),
                    h = +o.startOf(h, c ? "day" : _),
                    o.diff(n, t, _) > 1e5 * m)
                    throw t + " and " + n + " are too far apart with stepSize of " + m + " " + _;
                for (time = h; time < n; time = +o.add(time, m, _))
                    f.push(time);
                return time !== n && "ticks" !== d.bounds || f.push(time),
                    f
            }
            function Wr(table, e, t, n, r) {
                var o, d, l = 0, _ = 0;
                return r.offset && e.length && (o = Sr(table, "time", e[0], "pos"),
                    l = 1 === e.length ? 1 - o : (Sr(table, "time", e[1], "pos") - o) / 2,
                    d = Sr(table, "time", e[e.length - 1], "pos"),
                    _ = 1 === e.length ? d : (d - Sr(table, "time", e[e.length - 2], "pos")) / 2),
                {
                    start: l,
                    end: _,
                    factor: 1 / (l + 1 + _)
                }
            }
            function Cr(e, t, map, n) {
                var r, o, d = e._adapter, l = +d.startOf(t[0].value, n), _ = t[t.length - 1].value;
                for (r = l; r <= _; r = +d.add(r, 1, n))
                    (o = map[r]) >= 0 && (t[o].major = !0);
                return t
            }
            function Er(e, t, n) {
                var i, r, o = [], map = {}, d = t.length;
                for (i = 0; i < d; ++i)
                    map[r = t[i]] = i,
                        o.push({
                            value: r,
                            major: !1
                        });
                return 0 !== d && n ? Cr(e, o, map, n) : o
            }
            var zr = {
                position: "bottom",
                distribution: "linear",
                bounds: "data",
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    displayFormat: !1,
                    isoWeekday: !1,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    autoSkip: !1,
                    source: "auto",
                    major: {
                        enabled: !1
                    }
                }
            }
                , Ir = Tn.extend({
                    initialize: function () {
                        this.mergeTicksOptions(),
                            Tn.prototype.initialize.call(this)
                    },
                    update: function () {
                        var e = this
                            , t = e.options
                            , time = t.time || (t.time = {})
                            , n = e._adapter = new sn._date(t.adapters.date);
                        return fr("time scale", time.format, "time.format", "time.parser"),
                            fr("time scale", time.min, "time.min", "ticks.min"),
                            fr("time scale", time.max, "time.max", "ticks.max"),
                            he.mergeIf(time.displayFormats, n.formats()),
                            Tn.prototype.update.apply(e, arguments)
                    },
                    getRightValue: function (e) {
                        return e && void 0 !== e.t && (e = e.t),
                            Tn.prototype.getRightValue.call(this, e)
                    },
                    determineDataLimits: function () {
                        var i, e, t, n, data, r, o, d = this, l = d.chart, _ = d._adapter, m = d.options, c = m.time.unit || "day", h = yr, f = gr, M = [], y = [], L = [], Y = d._getLabels();
                        for (i = 0,
                            t = Y.length; i < t; ++i)
                            L.push(jr(d, Y[i]));
                        for (i = 0,
                            t = (l.data.datasets || []).length; i < t; ++i)
                            if (l.isDatasetVisible(i))
                                if (data = l.data.datasets[i].data,
                                    he.isObject(data[0]))
                                    for (y[i] = [],
                                        e = 0,
                                        n = data.length; e < n; ++e)
                                        r = jr(d, data[e]),
                                            M.push(r),
                                            y[i][e] = r;
                                else
                                    y[i] = L.slice(0),
                                        o || (M = M.concat(L),
                                            o = !0);
                            else
                                y[i] = [];
                        L.length && (h = Math.min(h, L[0]),
                            f = Math.max(f, L[L.length - 1])),
                            M.length && (M = t > 1 ? kr(M).sort(vr) : M.sort(vr),
                                h = Math.min(h, M[0]),
                                f = Math.max(f, M[M.length - 1])),
                            h = jr(d, Dr(m)) || h,
                            f = jr(d, wr(m)) || f,
                            h = h === yr ? +_.startOf(Date.now(), c) : h,
                            f = f === gr ? +_.endOf(Date.now(), c) + 1 : f,
                            d.min = Math.min(h, f),
                            d.max = Math.max(h + 1, f),
                            d._table = [],
                            d._timestamps = {
                                data: M,
                                datasets: y,
                                labels: L
                            }
                    },
                    buildTicks: function () {
                        var i, e, t, n = this, r = n.min, o = n.max, d = n.options, l = d.ticks, _ = d.time, m = n._timestamps, c = [], h = n.getLabelCapacity(r), source = l.source, f = d.distribution;
                        for (m = "data" === source || "auto" === source && "series" === f ? m.data : "labels" === source ? m.labels : Fr(n, r, o, h),
                            "ticks" === d.bounds && m.length && (r = m[0],
                                o = m[m.length - 1]),
                            r = jr(n, Dr(d)) || r,
                            o = jr(n, wr(d)) || o,
                            i = 0,
                            e = m.length; i < e; ++i)
                            (t = m[i]) >= r && t <= o && c.push(t);
                        return n.min = r,
                            n.max = o,
                            n._unit = _.unit || (l.autoSkip ? Pr(_.minUnit, n.min, n.max, h) : Or(n, c.length, _.minUnit, n.min, n.max)),
                            n._majorUnit = l.major.enabled && "year" !== n._unit ? Ar(n._unit) : void 0,
                            n._table = Tr(n._timestamps.data, r, o, f),
                            n._offsets = Wr(n._table, c, r, o, d),
                            l.reverse && c.reverse(),
                            Er(n, c, n._majorUnit)
                    },
                    getLabelForIndex: function (e, t) {
                        var n = this
                            , r = n._adapter
                            , data = n.chart.data
                            , o = n.options.time
                            , label = data.labels && e < data.labels.length ? data.labels[e] : ""
                            , d = data.datasets[t].data[e];
                        return he.isObject(d) && (label = n.getRightValue(d)),
                            o.tooltipFormat ? r.format(Hr(n, label), o.tooltipFormat) : "string" == typeof label ? label : r.format(Hr(n, label), o.displayFormats.datetime)
                    },
                    tickFormatFunction: function (time, e, t, n) {
                        var r = this
                            , o = r._adapter
                            , d = r.options
                            , l = d.time.displayFormats
                            , _ = l[r._unit]
                            , m = r._majorUnit
                            , c = l[m]
                            , h = t[e]
                            , f = d.ticks
                            , M = m && c && h && h.major
                            , label = o.format(time, n || (M ? c : _))
                            , y = M ? f.major : f.minor
                            , L = Mr([y.callback, y.userCallback, f.callback, f.userCallback]);
                        return L ? L(label, e, t) : label
                    },
                    convertTicksToLabels: function (e) {
                        var i, t, n = [];
                        for (i = 0,
                            t = e.length; i < t; ++i)
                            n.push(this.tickFormatFunction(e[i].value, i, e));
                        return n
                    },
                    getPixelForOffset: function (time) {
                        var e = this
                            , t = e._offsets
                            , n = Sr(e._table, "time", time, "pos");
                        return e.getPixelForDecimal((t.start + n) * t.factor)
                    },
                    getPixelForValue: function (e, t, n) {
                        var r = this
                            , time = null;
                        if (void 0 !== t && void 0 !== n && (time = r._timestamps.datasets[n][t]),
                            null === time && (time = jr(r, e)),
                            null !== time)
                            return r.getPixelForOffset(time)
                    },
                    getPixelForTick: function (e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    },
                    getValueForPixel: function (e) {
                        var t = this
                            , n = t._offsets
                            , r = t.getDecimalForPixel(e) / n.factor - n.end
                            , time = Sr(t._table, "pos", r, "time");
                        return t._adapter._create(time)
                    },
                    _getLabelSize: function (label) {
                        var e = this
                            , t = e.options.ticks
                            , n = e.ctx.measureText(label).width
                            , r = he.toRadians(e.isHorizontal() ? t.maxRotation : t.minRotation)
                            , o = Math.cos(r)
                            , d = Math.sin(r)
                            , l = pr(t.fontSize, ie.global.defaultFontSize);
                        return {
                            w: n * o + l * d,
                            h: n * d + l * o
                        }
                    },
                    getLabelWidth: function (label) {
                        return this._getLabelSize(label).w
                    },
                    getLabelCapacity: function (e) {
                        var t = this
                            , n = t.options.time
                            , r = n.displayFormats
                            , o = r[n.unit] || r.millisecond
                            , d = t.tickFormatFunction(e, 0, Er(t, [e], t._majorUnit), o)
                            , l = t._getLabelSize(d)
                            , _ = Math.floor(t.isHorizontal() ? t.width / l.w : t.height / l.h);
                        return t.options.offset && _--,
                            _ > 0 ? _ : 1
                    }
                })
                , Nr = zr;
            Ir._defaults = Nr;
            var Rr = {
                category: Hn,
                linear: Rn,
                logarithmic: $n,
                radialLinear: mr,
                time: Ir
            }
                , Vr = {
                    datetime: "MMM D, YYYY, h:mm:ss a",
                    millisecond: "h:mm:ss.SSS a",
                    second: "h:mm:ss a",
                    minute: "h:mm a",
                    hour: "hA",
                    day: "MMM D",
                    week: "ll",
                    month: "MMM YYYY",
                    quarter: "[Q]Q - YYYY",
                    year: "YYYY"
                };
            sn._date.override("function" == typeof e ? {
                _id: "moment",
                formats: function () {
                    return Vr
                },
                parse: function (t, n) {
                    return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)),
                        t.isValid() ? t.valueOf() : null
                },
                format: function (time, t) {
                    return e(time).format(t)
                },
                add: function (time, t, n) {
                    return e(time).add(t, n).valueOf()
                },
                diff: function (t, n, r) {
                    return e(t).diff(e(n), r)
                },
                startOf: function (time, t, n) {
                    return time = e(time),
                        "isoWeek" === t ? time.isoWeekday(n).valueOf() : time.startOf(t).valueOf()
                },
                endOf: function (time, t) {
                    return e(time).endOf(t).valueOf()
                },
                _create: function (time) {
                    return e(time)
                }
            } : {}),
                ie._set("global", {
                    plugins: {
                        filler: {
                            propagate: !0
                        }
                    }
                });
            var Br = {
                dataset: function (source) {
                    var e = source.fill
                        , t = source.chart
                        , meta = t.getDatasetMeta(e)
                        , n = meta && t.isDatasetVisible(e) && meta.dataset._children || []
                        , r = n.length || 0;
                    return r ? function (e, i) {
                        return i < r && n[i]._view || null
                    }
                        : null
                },
                boundary: function (source) {
                    var e = source.boundary
                        , t = e ? e.x : null
                        , n = e ? e.y : null;
                    return he.isArray(e) ? function (t, i) {
                        return e[i]
                    }
                        : function (e) {
                            return {
                                x: null === t ? e.x : t,
                                y: null === n ? e.y : n
                            }
                        }
                }
            };
            function Jr(e, t, n) {
                var r, o = e._model || {}, d = o.fill;
                if (void 0 === d && (d = !!o.backgroundColor),
                    !1 === d || null === d)
                    return !1;
                if (!0 === d)
                    return "origin";
                if (r = parseFloat(d, 10),
                    isFinite(r) && Math.floor(r) === r)
                    return "-" !== d[0] && "+" !== d[0] || (r = t + r),
                        !(r === t || r < 0 || r >= n) && r;
                switch (d) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return d;
                    default:
                        return !1
                }
            }
            function Ur(source) {
                var e, t = source.el._model || {}, n = source.el._scale || {}, r = source.fill, o = null;
                if (isFinite(r))
                    return null;
                if ("start" === r ? o = void 0 === t.scaleBottom ? n.bottom : t.scaleBottom : "end" === r ? o = void 0 === t.scaleTop ? n.top : t.scaleTop : void 0 !== t.scaleZero ? o = t.scaleZero : n.getBasePixel && (o = n.getBasePixel()),
                    null != o) {
                    if (void 0 !== o.x && void 0 !== o.y)
                        return o;
                    if (he.isFinite(o))
                        return {
                            x: (e = n.isHorizontal()) ? o : null,
                            y: e ? null : o
                        }
                }
                return null
            }
            function Gr(source) {
                var e, t, n, i, r, o = source.el._scale, d = o.options, l = o.chart.data.labels.length, _ = source.fill, m = [];
                if (!l)
                    return null;
                for (e = d.ticks.reverse ? o.max : o.min,
                    t = d.ticks.reverse ? o.min : o.max,
                    n = o.getPointPositionForValue(0, e),
                    i = 0; i < l; ++i)
                    r = "start" === _ || "end" === _ ? o.getPointPositionForValue(i, "start" === _ ? e : t) : o.getBasePosition(i),
                        d.gridLines.circular && (r.cx = n.x,
                            r.cy = n.y,
                            r.angle = o.getIndexAngle(i) - Math.PI / 2),
                        m.push(r);
                return m
            }
            function qr(source) {
                return (source.el._scale || {}).getPointPositionForValue ? Gr(source) : Ur(source)
            }
            function $r(e, t, n) {
                var r, o = e[t].fill, d = [t];
                if (!n)
                    return o;
                for (; !1 !== o && -1 === d.indexOf(o);) {
                    if (!isFinite(o))
                        return o;
                    if (!(r = e[o]))
                        return !1;
                    if (r.visible)
                        return o;
                    d.push(o),
                        o = r.fill
                }
                return !1
            }
            function Kr(source) {
                var e = source.fill
                    , t = "dataset";
                return !1 === e ? null : (isFinite(e) || (t = "boundary"),
                    Br[t](source))
            }
            function Zr(e) {
                return e && !e.skip
            }
            function Xr(e, t, n, r, o) {
                var i, d, l, _;
                if (r && o) {
                    for (e.moveTo(t[0].x, t[0].y),
                        i = 1; i < r; ++i)
                        he.canvas.lineTo(e, t[i - 1], t[i]);
                    if (void 0 === n[0].angle)
                        for (e.lineTo(n[o - 1].x, n[o - 1].y),
                            i = o - 1; i > 0; --i)
                            he.canvas.lineTo(e, n[i], n[i - 1], !0);
                    else
                        for (d = n[0].cx,
                            l = n[0].cy,
                            _ = Math.sqrt(Math.pow(n[0].x - d, 2) + Math.pow(n[0].y - l, 2)),
                            i = o - 1; i > 0; --i)
                            e.arc(d, l, _, n[i].angle, n[i - 1].angle, !0)
                }
            }
            function Qr(e, t, n, view, r, o) {
                var i, d, l, _, m, c, h, f, M = t.length, span = view.spanGaps, y = [], L = [], Y = 0, v = 0;
                for (e.beginPath(),
                    i = 0,
                    d = M; i < d; ++i)
                    m = n(_ = t[l = i % M]._view, l, view),
                        c = Zr(_),
                        h = Zr(m),
                        o && void 0 === f && c && (d = M + (f = i + 1)),
                        c && h ? (Y = y.push(_),
                            v = L.push(m)) : Y && v && (span ? (c && y.push(_),
                                h && L.push(m)) : (Xr(e, y, L, Y, v),
                                    Y = v = 0,
                                    y = [],
                                    L = []));
                Xr(e, y, L, Y, v),
                    e.closePath(),
                    e.fillStyle = r,
                    e.fill()
            }
            var ei = {
                id: "filler",
                afterDatasetsUpdate: function (e, t) {
                    var meta, i, n, source, r = (e.data.datasets || []).length, o = t.propagate, d = [];
                    for (i = 0; i < r; ++i)
                        source = null,
                            (n = (meta = e.getDatasetMeta(i)).dataset) && n._model && n instanceof Qe.Line && (source = {
                                visible: e.isDatasetVisible(i),
                                fill: Jr(n, i, r),
                                chart: e,
                                el: n
                            }),
                            meta.$filler = source,
                            d.push(source);
                    for (i = 0; i < r; ++i)
                        (source = d[i]) && (source.fill = $r(d, i, o),
                            source.boundary = qr(source),
                            source.mapper = Kr(source))
                },
                beforeDatasetsDraw: function (e) {
                    var meta, i, t, view, n, r, o, d = e._getSortedVisibleDatasetMetas(), l = e.ctx;
                    for (i = d.length - 1; i >= 0; --i)
                        (meta = d[i].$filler) && meta.visible && (view = (t = meta.el)._view,
                            n = t._children || [],
                            r = meta.mapper,
                            o = view.backgroundColor || ie.global.defaultColor,
                            r && o && n.length && (he.canvas.clipArea(l, e.chartArea),
                                Qr(l, n, r, view, o, t._loop),
                                he.canvas.unclipArea(l)))
                }
            }
                , ti = he.rtl.getRtlAdapter
                , ai = he.noop
                , ni = he.valueOrDefault;
            function ri(e, t) {
                return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
            }
            ie._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (e, t) {
                        var n = t.datasetIndex
                            , r = this.chart
                            , meta = r.getDatasetMeta(n);
                        meta.hidden = null === meta.hidden ? !r.data.datasets[n].hidden : null,
                            r.update()
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function (e) {
                            var t = e.data.datasets
                                , n = e.options.legend || {}
                                , r = n.labels && n.labels.usePointStyle;
                            return e._getSortedDatasetMetas().map((function (meta) {
                                var style = meta.controller.getStyle(r ? 0 : void 0);
                                return {
                                    text: t[meta.index].label,
                                    fillStyle: style.backgroundColor,
                                    hidden: !e.isDatasetVisible(meta.index),
                                    lineCap: style.borderCapStyle,
                                    lineDash: style.borderDash,
                                    lineDashOffset: style.borderDashOffset,
                                    lineJoin: style.borderJoinStyle,
                                    lineWidth: style.borderWidth,
                                    strokeStyle: style.borderColor,
                                    pointStyle: style.pointStyle,
                                    rotation: style.rotation,
                                    datasetIndex: meta.index
                                }
                            }
                            ), this)
                        }
                    }
                },
                legendCallback: function (e) {
                    var i, t, n, r = document.createElement("ul"), o = e.data.datasets;
                    for (r.setAttribute("class", e.id + "-legend"),
                        i = 0,
                        t = o.length; i < t; i++)
                        (n = r.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[i].backgroundColor,
                            o[i].label && n.appendChild(document.createTextNode(o[i].label));
                    return r.outerHTML
                }
            });
            var ii = Ye.extend({
                initialize: function (e) {
                    var t = this;
                    he.extend(t, e),
                        t.legendHitBoxes = [],
                        t._hoveredItem = null,
                        t.doughnutMode = !1
                },
                beforeUpdate: ai,
                update: function (e, t, n) {
                    var r = this;
                    return r.beforeUpdate(),
                        r.maxWidth = e,
                        r.maxHeight = t,
                        r.margins = n,
                        r.beforeSetDimensions(),
                        r.setDimensions(),
                        r.afterSetDimensions(),
                        r.beforeBuildLabels(),
                        r.buildLabels(),
                        r.afterBuildLabels(),
                        r.beforeFit(),
                        r.fit(),
                        r.afterFit(),
                        r.afterUpdate(),
                        r.minSize
                },
                afterUpdate: ai,
                beforeSetDimensions: ai,
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth,
                        e.left = 0,
                        e.right = e.width) : (e.height = e.maxHeight,
                            e.top = 0,
                            e.bottom = e.height),
                        e.paddingLeft = 0,
                        e.paddingTop = 0,
                        e.paddingRight = 0,
                        e.paddingBottom = 0,
                        e.minSize = {
                            width: 0,
                            height: 0
                        }
                },
                afterSetDimensions: ai,
                beforeBuildLabels: ai,
                buildLabels: function () {
                    var e = this
                        , t = e.options.labels || {}
                        , n = he.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (n = n.filter((function (n) {
                        return t.filter(n, e.chart.data)
                    }
                    ))),
                        e.options.reverse && n.reverse(),
                        e.legendItems = n
                },
                afterBuildLabels: ai,
                beforeFit: ai,
                fit: function () {
                    var e = this
                        , t = e.options
                        , n = t.labels
                        , r = t.display
                        , o = e.ctx
                        , d = he.options._parseFont(n)
                        , l = d.size
                        , _ = e.legendHitBoxes = []
                        , m = e.minSize
                        , c = e.isHorizontal();
                    if (c ? (m.width = e.maxWidth,
                        m.height = r ? 10 : 0) : (m.width = r ? 10 : 0,
                            m.height = e.maxHeight),
                        r) {
                        if (o.font = d.string,
                            c) {
                            var h = e.lineWidths = [0]
                                , f = 0;
                            o.textAlign = "left",
                                o.textBaseline = "middle",
                                he.each(e.legendItems, (function (e, i) {
                                    var t = ri(n, l) + l / 2 + o.measureText(e.text).width;
                                    (0 === i || h[h.length - 1] + t + 2 * n.padding > m.width) && (f += l + n.padding,
                                        h[h.length - (i > 0 ? 0 : 1)] = 0),
                                        _[i] = {
                                            left: 0,
                                            top: 0,
                                            width: t,
                                            height: l
                                        },
                                        h[h.length - 1] += t + n.padding
                                }
                                )),
                                m.height += f
                        } else {
                            var M = n.padding
                                , y = e.columnWidths = []
                                , L = e.columnHeights = []
                                , Y = n.padding
                                , v = 0
                                , k = 0;
                            he.each(e.legendItems, (function (e, i) {
                                var t = ri(n, l) + l / 2 + o.measureText(e.text).width;
                                i > 0 && k + l + 2 * M > m.height && (Y += v + n.padding,
                                    y.push(v),
                                    L.push(k),
                                    v = 0,
                                    k = 0),
                                    v = Math.max(v, t),
                                    k += l + M,
                                    _[i] = {
                                        left: 0,
                                        top: 0,
                                        width: t,
                                        height: l
                                    }
                            }
                            )),
                                Y += v,
                                y.push(v),
                                L.push(k),
                                m.width += Y
                        }
                        e.width = m.width,
                            e.height = m.height
                    } else
                        e.width = m.width = e.height = m.height = 0
                },
                afterFit: ai,
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function () {
                    var e = this
                        , t = e.options
                        , n = t.labels
                        , r = ie.global
                        , o = r.defaultColor
                        , d = r.elements.line
                        , l = e.height
                        , _ = e.columnHeights
                        , m = e.width
                        , c = e.lineWidths;
                    if (t.display) {
                        var cursor, h = ti(t.rtl, e.left, e.minSize.width), f = e.ctx, M = ni(n.fontColor, r.defaultFontColor), y = he.options._parseFont(n), L = y.size;
                        f.textAlign = h.textAlign("left"),
                            f.textBaseline = "middle",
                            f.lineWidth = .5,
                            f.strokeStyle = M,
                            f.fillStyle = M,
                            f.font = y.string;
                        var Y = ri(n, L)
                            , v = e.legendHitBoxes
                            , k = function (e, t, r) {
                                if (!(isNaN(Y) || Y <= 0)) {
                                    f.save();
                                    var l = ni(r.lineWidth, d.borderWidth);
                                    if (f.fillStyle = ni(r.fillStyle, o),
                                        f.lineCap = ni(r.lineCap, d.borderCapStyle),
                                        f.lineDashOffset = ni(r.lineDashOffset, d.borderDashOffset),
                                        f.lineJoin = ni(r.lineJoin, d.borderJoinStyle),
                                        f.lineWidth = l,
                                        f.strokeStyle = ni(r.strokeStyle, o),
                                        f.setLineDash && f.setLineDash(ni(r.lineDash, d.borderDash)),
                                        n && n.usePointStyle) {
                                        var _ = Y * Math.SQRT2 / 2
                                            , m = h.xPlus(e, Y / 2)
                                            , c = t + L / 2;
                                        he.canvas.drawPoint(f, r.pointStyle, _, m, c, r.rotation)
                                    } else
                                        f.fillRect(h.leftForLtr(e, Y), t, Y, L),
                                            0 !== l && f.strokeRect(h.leftForLtr(e, Y), t, Y, L);
                                    f.restore()
                                }
                            }
                            , D = function (e, t, n, r) {
                                var o = L / 2
                                    , d = h.xPlus(e, Y + o)
                                    , l = t + o;
                                f.fillText(n.text, d, l),
                                    n.hidden && (f.beginPath(),
                                        f.lineWidth = 2,
                                        f.moveTo(d, l),
                                        f.lineTo(h.xPlus(d, r), l),
                                        f.stroke())
                            }
                            , w = function (e, r) {
                                switch (t.align) {
                                    case "start":
                                        return n.padding;
                                    case "end":
                                        return e - r;
                                    default:
                                        return (e - r + n.padding) / 2
                                }
                            }
                            , T = e.isHorizontal();
                        cursor = T ? {
                            x: e.left + w(m, c[0]),
                            y: e.top + n.padding,
                            line: 0
                        } : {
                            x: e.left + n.padding,
                            y: e.top + w(l, _[0]),
                            line: 0
                        },
                            he.rtl.overrideTextDirection(e.ctx, t.textDirection);
                        var x = L + n.padding;
                        he.each(e.legendItems, (function (t, i) {
                            var r = f.measureText(t.text).width
                                , o = Y + L / 2 + r
                                , d = cursor.x
                                , M = cursor.y;
                            h.setWidth(e.minSize.width),
                                T ? i > 0 && d + o + n.padding > e.left + e.minSize.width && (M = cursor.y += x,
                                    cursor.line++,
                                    d = cursor.x = e.left + w(m, c[cursor.line])) : i > 0 && M + x > e.top + e.minSize.height && (d = cursor.x = d + e.columnWidths[cursor.line] + n.padding,
                                        cursor.line++,
                                        M = cursor.y = e.top + w(l, _[cursor.line]));
                            var y = h.x(d);
                            k(y, M, t),
                                v[i].left = h.leftForLtr(y, v[i].width),
                                v[i].top = M,
                                D(y, M, t, r),
                                T ? cursor.x += o + n.padding : cursor.y += x
                        }
                        )),
                            he.rtl.restoreTextDirection(e.ctx, t.textDirection)
                    }
                },
                _getLegendItemAt: function (e, t) {
                    var i, n, r, o = this;
                    if (e >= o.left && e <= o.right && t >= o.top && t <= o.bottom)
                        for (r = o.legendHitBoxes,
                            i = 0; i < r.length; ++i)
                            if (e >= (n = r[i]).left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height)
                                return o.legendItems[i];
                    return null
                },
                handleEvent: function (e) {
                    var t, n = this, r = n.options, o = "mouseup" === e.type ? "click" : e.type;
                    if ("mousemove" === o) {
                        if (!r.onHover && !r.onLeave)
                            return
                    } else {
                        if ("click" !== o)
                            return;
                        if (!r.onClick)
                            return
                    }
                    t = n._getLegendItemAt(e.x, e.y),
                        "click" === o ? t && r.onClick && r.onClick.call(n, e.native, t) : (r.onLeave && t !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, e.native, n._hoveredItem),
                            n._hoveredItem = t),
                            r.onHover && t && r.onHover.call(n, e.native, t))
                }
            });
            function si(e, t) {
                var legend = new ii({
                    ctx: e.ctx,
                    options: t,
                    chart: e
                });
                Qt.configure(e, legend, t),
                    Qt.addBox(e, legend),
                    e.legend = legend
            }
            var oi = {
                id: "legend",
                _element: ii,
                beforeInit: function (e) {
                    var t = e.options.legend;
                    t && si(e, t)
                },
                beforeUpdate: function (e) {
                    var t = e.options.legend
                        , legend = e.legend;
                    t ? (he.mergeIf(t, ie.global.legend),
                        legend ? (Qt.configure(e, legend, t),
                            legend.options = t) : si(e, t)) : legend && (Qt.removeBox(e, legend),
                                delete e.legend)
                },
                afterEvent: function (e, t) {
                    var legend = e.legend;
                    legend && legend.handleEvent(t)
                }
            }
                , di = he.noop;
            ie._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var ui = Ye.extend({
                initialize: function (e) {
                    var t = this;
                    he.extend(t, e),
                        t.legendHitBoxes = []
                },
                beforeUpdate: di,
                update: function (e, t, n) {
                    var r = this;
                    return r.beforeUpdate(),
                        r.maxWidth = e,
                        r.maxHeight = t,
                        r.margins = n,
                        r.beforeSetDimensions(),
                        r.setDimensions(),
                        r.afterSetDimensions(),
                        r.beforeBuildLabels(),
                        r.buildLabels(),
                        r.afterBuildLabels(),
                        r.beforeFit(),
                        r.fit(),
                        r.afterFit(),
                        r.afterUpdate(),
                        r.minSize
                },
                afterUpdate: di,
                beforeSetDimensions: di,
                setDimensions: function () {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth,
                        e.left = 0,
                        e.right = e.width) : (e.height = e.maxHeight,
                            e.top = 0,
                            e.bottom = e.height),
                        e.paddingLeft = 0,
                        e.paddingTop = 0,
                        e.paddingRight = 0,
                        e.paddingBottom = 0,
                        e.minSize = {
                            width: 0,
                            height: 0
                        }
                },
                afterSetDimensions: di,
                beforeBuildLabels: di,
                buildLabels: di,
                afterBuildLabels: di,
                beforeFit: di,
                fit: function () {
                    var e, t = this, n = t.options, r = t.minSize = {}, o = t.isHorizontal();
                    n.display ? (e = (he.isArray(n.text) ? n.text.length : 1) * he.options._parseFont(n).lineHeight + 2 * n.padding,
                        t.width = r.width = o ? t.maxWidth : e,
                        t.height = r.height = o ? e : t.maxHeight) : t.width = r.width = t.height = r.height = 0
                },
                afterFit: di,
                isHorizontal: function () {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function () {
                    var e = this
                        , t = e.ctx
                        , n = e.options;
                    if (n.display) {
                        var r, o, d, l = he.options._parseFont(n), _ = l.lineHeight, m = _ / 2 + n.padding, c = 0, h = e.top, f = e.left, M = e.bottom, y = e.right;
                        t.fillStyle = he.valueOrDefault(n.fontColor, ie.global.defaultFontColor),
                            t.font = l.string,
                            e.isHorizontal() ? (o = f + (y - f) / 2,
                                d = h + m,
                                r = y - f) : (o = "left" === n.position ? f + m : y - m,
                                    d = h + (M - h) / 2,
                                    r = M - h,
                                    c = Math.PI * ("left" === n.position ? -.5 : .5)),
                            t.save(),
                            t.translate(o, d),
                            t.rotate(c),
                            t.textAlign = "center",
                            t.textBaseline = "middle";
                        var text = n.text;
                        if (he.isArray(text))
                            for (var L = 0, i = 0; i < text.length; ++i)
                                t.fillText(text[i], 0, L, r),
                                    L += _;
                        else
                            t.fillText(text, 0, 0, r);
                        t.restore()
                    }
                }
            });
            function _i(e, t) {
                var title = new ui({
                    ctx: e.ctx,
                    options: t,
                    chart: e
                });
                Qt.configure(e, title, t),
                    Qt.addBox(e, title),
                    e.titleBlock = title
            }
            var mi = {}
                , ci = ei
                , legend = oi
                , title = {
                    id: "title",
                    _element: ui,
                    beforeInit: function (e) {
                        var t = e.options.title;
                        t && _i(e, t)
                    },
                    beforeUpdate: function (e) {
                        var t = e.options.title
                            , n = e.titleBlock;
                        t ? (he.mergeIf(t, ie.global.title),
                            n ? (Qt.configure(e, n, t),
                                n.options = t) : _i(e, t)) : n && (Qt.removeBox(e, n),
                                    delete e.titleBlock)
                    }
                };
            for (var hi in mi.filler = ci,
                mi.legend = legend,
                mi.title = title,
                tn.helpers = he,
                an(),
                tn._adapters = sn,
                tn.Animation = be,
                tn.animationService = ke,
                tn.controllers = Ot,
                tn.DatasetController = He,
                tn.defaults = ie,
                tn.Element = Ye,
                tn.elements = Qe,
                tn.Interaction = It,
                tn.layouts = Qt,
                tn.platform = xa,
                tn.plugins = Sa,
                tn.Scale = Tn,
                tn.scaleService = Ha,
                tn.Ticks = on,
                tn.Tooltip = Ja,
                tn.helpers.each(Rr, (function (e, t) {
                    tn.scaleService.registerScaleType(t, e, e._defaults)
                }
                )),
                mi)
                mi.hasOwnProperty(hi) && tn.plugins.register(mi[hi]);
            tn.platform.initialize();
            var fi = tn;
            return "undefined" != typeof window && (window.Chart = tn),
                tn.Chart = tn,
                tn.Legend = mi.legend._element,
                tn.Title = mi.title._element,
                tn.pluginService = tn.plugins,
                tn.PluginBase = tn.Element.extend({}),
                tn.canvasHelpers = tn.helpers.canvas,
                tn.layoutService = tn.layouts,
                tn.LinearScaleBase = Fn,
                tn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function (e) {
                    tn[e] = function (t, n) {
                        return new tn(t, tn.helpers.merge(n || {}, {
                            type: e.charAt(0).toLowerCase() + e.slice(1)
                        }))
                    }
                }
                )),
                fi
        }(function () {
            try {
                return n(236)
            } catch (e) { }
        }())
    }
    , function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () { }
                ,
                e.paths = [],
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return e.l
                    }
                }),
                Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function () {
                        return e.i
                    }
                }),
                e.webpackPolyfill = 1),
                e
        }
    }
    , function (e, t, n) {
        var map = {
            "./af": 277,
            "./af.js": 277,
            "./ar": 278,
            "./ar-dz": 279,
            "./ar-dz.js": 279,
            "./ar-kw": 280,
            "./ar-kw.js": 280,
            "./ar-ly": 281,
            "./ar-ly.js": 281,
            "./ar-ma": 282,
            "./ar-ma.js": 282,
            "./ar-sa": 283,
            "./ar-sa.js": 283,
            "./ar-tn": 284,
            "./ar-tn.js": 284,
            "./ar.js": 278,
            "./az": 285,
            "./az.js": 285,
            "./be": 286,
            "./be.js": 286,
            "./bg": 287,
            "./bg.js": 287,
            "./bm": 288,
            "./bm.js": 288,
            "./bn": 289,
            "./bn-bd": 290,
            "./bn-bd.js": 290,
            "./bn.js": 289,
            "./bo": 291,
            "./bo.js": 291,
            "./br": 292,
            "./br.js": 292,
            "./bs": 293,
            "./bs.js": 293,
            "./ca": 294,
            "./ca.js": 294,
            "./cs": 295,
            "./cs.js": 295,
            "./cv": 296,
            "./cv.js": 296,
            "./cy": 297,
            "./cy.js": 297,
            "./da": 298,
            "./da.js": 298,
            "./de": 299,
            "./de-at": 300,
            "./de-at.js": 300,
            "./de-ch": 301,
            "./de-ch.js": 301,
            "./de.js": 299,
            "./dv": 302,
            "./dv.js": 302,
            "./el": 303,
            "./el.js": 303,
            "./en-au": 304,
            "./en-au.js": 304,
            "./en-ca": 305,
            "./en-ca.js": 305,
            "./en-gb": 306,
            "./en-gb.js": 306,
            "./en-ie": 307,
            "./en-ie.js": 307,
            "./en-il": 308,
            "./en-il.js": 308,
            "./en-in": 309,
            "./en-in.js": 309,
            "./en-nz": 310,
            "./en-nz.js": 310,
            "./en-sg": 311,
            "./en-sg.js": 311,
            "./eo": 312,
            "./eo.js": 312,
            "./es": 313,
            "./es-do": 314,
            "./es-do.js": 314,
            "./es-mx": 315,
            "./es-mx.js": 315,
            "./es-us": 316,
            "./es-us.js": 316,
            "./es.js": 313,
            "./et": 317,
            "./et.js": 317,
            "./eu": 318,
            "./eu.js": 318,
            "./fa": 319,
            "./fa.js": 319,
            "./fi": 320,
            "./fi.js": 320,
            "./fil": 321,
            "./fil.js": 321,
            "./fo": 322,
            "./fo.js": 322,
            "./fr": 323,
            "./fr-ca": 324,
            "./fr-ca.js": 324,
            "./fr-ch": 325,
            "./fr-ch.js": 325,
            "./fr.js": 323,
            "./fy": 326,
            "./fy.js": 326,
            "./ga": 327,
            "./ga.js": 327,
            "./gd": 328,
            "./gd.js": 328,
            "./gl": 329,
            "./gl.js": 329,
            "./gom-deva": 330,
            "./gom-deva.js": 330,
            "./gom-latn": 331,
            "./gom-latn.js": 331,
            "./gu": 332,
            "./gu.js": 332,
            "./he": 333,
            "./he.js": 333,
            "./hi": 334,
            "./hi.js": 334,
            "./hr": 335,
            "./hr.js": 335,
            "./hu": 336,
            "./hu.js": 336,
            "./hy-am": 337,
            "./hy-am.js": 337,
            "./id": 338,
            "./id.js": 338,
            "./is": 339,
            "./is.js": 339,
            "./it": 340,
            "./it-ch": 341,
            "./it-ch.js": 341,
            "./it.js": 340,
            "./ja": 342,
            "./ja.js": 342,
            "./jv": 343,
            "./jv.js": 343,
            "./ka": 344,
            "./ka.js": 344,
            "./kk": 345,
            "./kk.js": 345,
            "./km": 346,
            "./km.js": 346,
            "./kn": 347,
            "./kn.js": 347,
            "./ko": 348,
            "./ko.js": 348,
            "./ku": 349,
            "./ku.js": 349,
            "./ky": 350,
            "./ky.js": 350,
            "./lb": 351,
            "./lb.js": 351,
            "./lo": 352,
            "./lo.js": 352,
            "./lt": 353,
            "./lt.js": 353,
            "./lv": 354,
            "./lv.js": 354,
            "./me": 355,
            "./me.js": 355,
            "./mi": 356,
            "./mi.js": 356,
            "./mk": 357,
            "./mk.js": 357,
            "./ml": 358,
            "./ml.js": 358,
            "./mn": 359,
            "./mn.js": 359,
            "./mr": 360,
            "./mr.js": 360,
            "./ms": 361,
            "./ms-my": 362,
            "./ms-my.js": 362,
            "./ms.js": 361,
            "./mt": 363,
            "./mt.js": 363,
            "./my": 364,
            "./my.js": 364,
            "./nb": 365,
            "./nb.js": 365,
            "./ne": 366,
            "./ne.js": 366,
            "./nl": 367,
            "./nl-be": 368,
            "./nl-be.js": 368,
            "./nl.js": 367,
            "./nn": 369,
            "./nn.js": 369,
            "./oc-lnc": 370,
            "./oc-lnc.js": 370,
            "./pa-in": 371,
            "./pa-in.js": 371,
            "./pl": 372,
            "./pl.js": 372,
            "./pt": 373,
            "./pt-br": 374,
            "./pt-br.js": 374,
            "./pt.js": 373,
            "./ro": 375,
            "./ro.js": 375,
            "./ru": 376,
            "./ru.js": 376,
            "./sd": 377,
            "./sd.js": 377,
            "./se": 378,
            "./se.js": 378,
            "./si": 379,
            "./si.js": 379,
            "./sk": 380,
            "./sk.js": 380,
            "./sl": 381,
            "./sl.js": 381,
            "./sq": 382,
            "./sq.js": 382,
            "./sr": 383,
            "./sr-cyrl": 384,
            "./sr-cyrl.js": 384,
            "./sr.js": 383,
            "./ss": 385,
            "./ss.js": 385,
            "./sv": 386,
            "./sv.js": 386,
            "./sw": 387,
            "./sw.js": 387,
            "./ta": 388,
            "./ta.js": 388,
            "./te": 389,
            "./te.js": 389,
            "./tet": 390,
            "./tet.js": 390,
            "./tg": 391,
            "./tg.js": 391,
            "./th": 392,
            "./th.js": 392,
            "./tk": 393,
            "./tk.js": 393,
            "./tl-ph": 394,
            "./tl-ph.js": 394,
            "./tlh": 395,
            "./tlh.js": 395,
            "./tr": 396,
            "./tr.js": 396,
            "./tzl": 397,
            "./tzl.js": 397,
            "./tzm": 398,
            "./tzm-latn": 399,
            "./tzm-latn.js": 399,
            "./tzm.js": 398,
            "./ug-cn": 400,
            "./ug-cn.js": 400,
            "./uk": 401,
            "./uk.js": 401,
            "./ur": 402,
            "./ur.js": 402,
            "./uz": 403,
            "./uz-latn": 404,
            "./uz-latn.js": 404,
            "./uz.js": 403,
            "./vi": 405,
            "./vi.js": 405,
            "./x-pseudo": 406,
            "./x-pseudo.js": 406,
            "./yo": 407,
            "./yo.js": 407,
            "./zh-cn": 408,
            "./zh-cn.js": 408,
            "./zh-hk": 409,
            "./zh-hk.js": 409,
            "./zh-mo": 410,
            "./zh-mo.js": 410,
            "./zh-tw": 411,
            "./zh-tw.js": 411
        };
        function r(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return map[e]
        }
        r.keys = function () {
            return Object.keys(map)
        }
            ,
            r.resolve = o,
            e.exports = r,
            r.id = 428
    }
])]);
