(function() { (function k() {
		var h = "http://img1.cache.netease.com/f2e/demo/hype/",
		e = "index",
		d = "index_hype_container";
		// if (false == !1) try {
		// 	for (var f = document.getElementsByTagName("script"), b = 0; b < f.length; b++) {
		// 		var a = f[b].src;
		// 		if (null != a && -1 != a.indexOf("index_hype_generated_script.js")) {
		// 			h = a.substr(0, a.lastIndexOf("/"));
		// 			break
		// 		}
		// 	}
		// } catch(n) {}
		if (false == !1 && null == window.HYPE_338) null == window.HYPE_dtl_338 ? (window.HYPE_dtl_338 = [], window.HYPE_dtl_338.push(k), e = document.getElementsByTagName("head")[0], d = document.createElement("script"), b = navigator.userAgent.match(/MSIE (\d+\.\d+)/), b = parseFloat(b && b[1]) || null, d.type = "text/javascript", d.src = h + "/" + (null != b && 10 > b ? "hype_ie.797854.min.js": "hype.797854.min.js") + "?hype_version=338", e.appendChild(d)) : window.HYPE_dtl_338.push(k);
		else {
			f = window.HYPE.documents;
			if (null != f[e]) {
				a = 1;
				b = e;
				do e = "" + b + "-" + a++;
				while (null != f[e]);
				for (var c = document.getElementsByTagName("div"), a = !1, b = 0; b < c.length; b++) if (c[b].id == d && null == c[b].getAttribute("HYP_dn")) {
					var a = 1,
					g = d;
					do d = "" + g + "-" + a++;
					while (null != document.getElementById(d));
					c[b].id = d;
					a = !0;
					break
				}
				if (!1 == a) return
			}
			for (var a = new HYPE_338,
			c = [], c = [], g = {},
			l = {},
			b = 0; b < c.length; b++) try {
				l[c[b].identifier] = c[b].name,
				g[c[b].name] = eval("(function(){return " + c[b].source + "})();")
			} catch(m) {
				a.log(m),
				g[c[b].name] = function() {}
			}
			a.z_a({
				R: 5,
				S: 0,
				aI: 0,
				T: 0,
				bG: 3,
				aJ: 0,
				bH: 2,
				aK: 0,
				X: 0,
				bI: 3,
				aL: 0,
				Y: 1,
				bJ: 3,
				bK: 3,
				bL: 3,
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				aS: 0,
				e: 3,
				bQ: 0,
				aT: 0,
				f: 2,
				g: 5,
				bR: 2,
				aU: 0,
				bS: "NumberValueTransformer",
				aV: 0,
				aW: 3,
				A: 5,
				l: 2,
				aX: 0,
				B: 5,
				m: 5,
				C: 5,
				aY: 2,
				n: 5,
				D: 5,
				E: 0,
				aZ: 0,
				G: 5,
				t: 0,
				bA: 5,
				RotationAngle: 2,
				tX: 4,
				bB: 0,
				M: 0,
				N: 0,
				bC: 0,
				tY: 4,
				O: 0,
				P: 0,
				Q: 0
			});
			a.z_b({});
			a.z_c([]);
			a.z_d([{
				x: 0,
				p: "600px",
				I: {
					a: [{
						d: 0.59999999999999998,
						p: 1,
						g: 6,
						f: 1
					}]
				},
				A: {
					a: [{
						b: "kTimelineDefaultIdentifier",
						p: 7
					}]
				},
				c: "#FFFFFF",
				v: {
					"3": {
						aU: 8,
						G: "#000000",
						b: 73,
						bS: "173",
						aV: 8,
						r: "inline",
						s: "Helvetica,Arial,Sans-Serif",
						t: 16,
						Z: "break-word",
						w: "\u6211\u5df2\u662f\u4e00\u53ea\u9e1f",
						j: "absolute",
						yy: "nowrap",
						x: "visible",
						k: "div",
						y: "preserve",
						z: "2",
						aS: 8,
						tX: "50%",
						aT: 8,
						a: 31,
						tY: "50%"
					},
					"2": {
						b: 182,
						z: "1",
						K: "Solid",
						c: 90,
						L: "Solid",
						d: 15,
						aS: 6,
						M: 1,
						bD: "none",
						N: 1,
						aT: 6,
						bS: "45",
						O: 1,
						g: "#F0F0F0",
						aU: 6,
						P: 1,
						aV: 6,
						j: "absolute",
						k: "div",
						A: "#A0A0A0",
						B: "#A0A0A0",
						Z: "break-word",
						r: "inline",
						C: "#A0A0A0",
						aN: "2_pressed",
						D: "#A0A0A0",
						t: 13,
						aA: {
							a: [{
								b: "kTimelineDefaultIdentifier",
								p: 3,
								z: false
							}]
						},
						F: "center",
						G: "#000000",
						aP: "pointer",
						w: "\u6309\u94ae",
						x: "visible",
						I: "Solid",
						a: 108,
						y: "preserve",
						J: "Solid"
					}
				},
				n: "\u672a\u547d\u540d\u573a\u666f",
				G: {
					a: [{
						d: 0.59999999999999998,
						p: 1,
						g: 5,
						f: 1
					}]
				},
				T: {
					"2_pressed": {
						i: "2_pressed",
						n: "2_pressed",
						z: 0,
						a: [],
						f: 30
					},
					kTimelineDefaultIdentifier: {
						i: "kTimelineDefaultIdentifier",
						n: "\u4e3b\u65f6\u95f4\u7ebf",
						z: 1,
						j: {
							"0": [{
								g: 145,
								c: 90,
								h: 88,
								d: 87,
								i: 153,
								e: 90,
								f: 71,
								b: 87
							},
							{
								g: 120,
								c: 153,
								h: 176,
								d: 99,
								i: 127,
								e: 159,
								f: 158,
								b: 88
							},
							{
								g: 202,
								c: 127,
								h: 167,
								d: 197,
								i: 214,
								e: 135,
								f: 144,
								b: 176
							},
							{
								g: 110,
								c: 214,
								h: 120,
								d: 188,
								i: 116,
								e: 224,
								f: 93,
								b: 167
							},
							{
								g: 190,
								c: 116,
								h: 255,
								d: 141,
								i: 205,
								e: 121,
								f: 242,
								b: 120
							},
							{
								g: 108,
								c: 205,
								h: 200,
								d: 261,
								i: 113,
								e: 212,
								f: 191,
								b: 255
							},
							{
								g: 229,
								c: 113,
								h: 257,
								d: 209,
								i: 236,
								e: 118,
								f: 250,
								b: 200
							},
							{
								g: 253,
								c: 236,
								h: 70,
								d: 261,
								i: 230,
								e: 241,
								f: 21,
								b: 257
							},
							{
								g: 139,
								c: 230,
								h: 292,
								d: 93,
								i: 140,
								e: 219,
								f: 289,
								b: 70
							},
							{
								g: 298,
								c: 140,
								h: 170,
								d: 337,
								i: 298,
								e: 157,
								f: 170,
								b: 292
							}]
						},
						a: [{
							o: "3",
							y: 0,
							z: 1,
							i: "a",
							e: 114,
							a: "0",
							f: "2",
							s: 31
						},
						{
							o: "3",
							y: 0,
							z: 1,
							i: "b",
							e: 281,
							a: "0",
							f: "2",
							s: 73
						},
						{
							y: 1,
							i: "a",
							s: 114,
							z: 0,
							o: "3",
							f: "2"
						},
						{
							y: 1,
							i: "b",
							s: 281,
							z: 0,
							o: "3",
							f: "2"
						}],
						f: 30
					}
				},
				o: "1"
			},
			{
				x: 1,
				o: "4",
				p: "600px",
				c: "#F2FED4",
				J: {
					a: [{
						d: 0.59999999999999998,
						p: 1,
						g: 7,
						f: 2
					}]
				},
				v: {
					"10": {
						aU: 8,
						G: "#000000",
						b: 206,
						bS: "45",
						aV: 8,
						r: "inline",
						s: "Helvetica,Arial,Sans-Serif",
						t: 16,
						Z: "break-word",
						w: "5\u9e1f",
						j: "absolute",
						yy: "nowrap",
						x: "visible",
						k: "div",
						y: "preserve",
						z: "5",
						aS: 8,
						tX: "50%",
						aT: 8,
						a: 238.5,
						tY: "50%"
					},
					"8": {
						aU: 8,
						G: "#000000",
						b: 199,
						bS: "45",
						aV: 8,
						r: "inline",
						s: "Helvetica,Arial,Sans-Serif",
						t: 16,
						Z: "break-word",
						w: "3\u9e1f",
						j: "absolute",
						yy: "nowrap",
						x: "visible",
						k: "div",
						y: "preserve",
						z: "3",
						aS: 8,
						tX: "50%",
						aT: 8,
						a: 20.5,
						tY: "50%"
					},
					"9": {
						aU: 8,
						G: "#000000",
						b: 332,
						bS: "45",
						aV: 8,
						r: "inline",
						s: "Helvetica,Arial,Sans-Serif",
						t: 16,
						Z: "break-word",
						w: "4\u9e1f",
						j: "absolute",
						yy: "nowrap",
						x: "visible",
						k: "div",
						y: "preserve",
						z: "4",
						aS: 8,
						tX: "50%",
						aT: 8,
						a: 126.5,
						tY: "50%"
					},
					"5": {
						aU: 8,
						G: "#000000",
						b: 88,
						bS: "45",
						aV: 8,
						r: "inline",
						s: "Helvetica,Arial,Sans-Serif",
						t: 16,
						Z: "break-word",
						w: "2\u9e1f",
						j: "absolute",
						yy: "nowrap",
						x: "visible",
						k: "div",
						y: "preserve",
						z: "1",
						aS: 8,
						tX: "50%",
						aT: 8,
						a: 149.5,
						tY: "50%"
					}
				},
				n: "\u672a\u547d\u540d\u573a\u666f 2",
				T: {
					kTimelineDefaultIdentifier: {
						i: "kTimelineDefaultIdentifier",
						n: "\u4e3b\u65f6\u95f4\u7ebf",
						z: 2,
						j: {
							"3": [{
								g: 232,
								c: 216,
								h: 40,
								d: 41,
								i: 254,
								e: 216,
								f: 38,
								b: 41
							},
							{
								g: 287,
								c: 254,
								h: 60,
								d: 41,
								i: 309,
								e: 270,
								f: 40,
								b: 40
							},
							{
								g: 333,
								c: 309,
								h: 110,
								d: 82,
								i: 334,
								e: 332,
								f: 95,
								b: 60
							},
							{
								g: 329,
								c: 334,
								h: 151,
								d: 132,
								i: 329,
								e: 335,
								f: 151,
								b: 110
							}],
							"1": [{
								g: 61,
								c: 105,
								h: 102,
								d: 170,
								i: 87,
								e: 105,
								f: 200,
								b: 170
							},
							{
								g: 205,
								c: 87,
								h: 35,
								d: 1,
								i: 205,
								e: 113,
								f: 35,
								b: 102
							}],
							"4": [{
								g: 361,
								c: 349,
								h: 233,
								d: 147,
								i: 331,
								e: 349,
								f: 132,
								b: 147
							},
							{
								g: 205,
								c: 331,
								h: 272,
								d: 332,
								i: 205,
								e: 302,
								f: 272,
								b: 233
							}],
							"2": [{
								g: 260,
								c: 223,
								h: 325,
								d: 259,
								i: 248,
								e: 223,
								f: 306,
								b: 259
							},
							{
								g: 157,
								c: 248,
								h: 326,
								d: 353,
								i: 124,
								e: 230,
								f: 355,
								b: 325
							},
							{
								g: 91,
								c: 124,
								h: 151,
								d: 279,
								i: 91,
								e: 69,
								f: 151,
								b: 326
							}]
						},
						a: [{
							o: "5",
							y: 0,
							z: 1,
							i: "a",
							e: 14.5,
							a: "1",
							f: "2",
							s: 149.5
						},
						{
							o: "5",
							y: 0,
							z: 1,
							i: "b",
							e: 188,
							a: "1",
							f: "2",
							s: 88
						},
						{
							o: "10",
							y: 0.13,
							z: 1,
							i: "a",
							e: 130.5,
							a: "2",
							f: "2",
							s: 238.5
						},
						{
							o: "10",
							y: 0.13,
							z: 1,
							i: "b",
							e: 74,
							a: "2",
							f: "2",
							s: 206
						},
						{
							o: "8",
							y: 0.21,
							z: 1,
							i: "b",
							e: 312,
							a: "3",
							f: "2",
							s: 199
						},
						{
							o: "8",
							y: 0.21,
							z: 1,
							i: "a",
							e: 130.5,
							a: "3",
							f: "2",
							s: 20.5
						},
						{
							o: "9",
							y: 1,
							z: 1,
							i: "b",
							e: 188,
							a: "4",
							f: "2",
							s: 332
						},
						{
							o: "9",
							y: 1,
							z: 1,
							i: "a",
							e: 251.5,
							a: "4",
							f: "2",
							s: 126.5
						},
						{
							y: 1,
							i: "a",
							s: 15.5,
							z: 0,
							o: "5",
							f: "2"
						},
						{
							y: 1,
							i: "b",
							s: 188,
							z: 0,
							o: "5",
							f: "2"
						},
						{
							y: 1.13,
							i: "b",
							s: 74,
							z: 0,
							o: "10",
							f: "2"
						},
						{
							y: 1.13,
							i: "a",
							s: 130.5,
							z: 0,
							o: "10",
							f: "2"
						},
						{
							y: 1.21,
							i: "a",
							s: 130.5,
							z: 0,
							o: "8",
							f: "2"
						},
						{
							y: 1.21,
							i: "b",
							s: 312,
							z: 0,
							o: "8",
							f: "2"
						},
						{
							y: 2,
							i: "a",
							s: 251.5,
							z: 0,
							o: "9",
							f: "2"
						},
						{
							y: 2,
							i: "b",
							s: 188,
							z: 0,
							o: "9",
							f: "2"
						}],
						f: 30
					}
				},
				H: {
					a: [{
						d: 0.59999999999999998,
						p: 1,
						g: 4,
						f: 2
					}]
				}
			}]);
			a.z_q(320, 568);
			a.z_e(l);
			a.z_p = g;
			a.z_f(0);
			a.z_g(d);
			a.z_h(h);
			a.z_i(false);
			a.z_j(false);
			a.z_k(true);
			a.z_l(true);
			a.z_m(true);
			a.z_n(e);
			f[e] = a.API;
			document.getElementById(d).setAttribute("HYP_dn", e);
			a.z_o(this.body)
		}
	})();
})();