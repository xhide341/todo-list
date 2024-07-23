(() => {
  "use strict";
  var n = {
      208: (n, e, t) => {
        t.d(e, { A: () => i });
        var o = t(354),
          r = t.n(o),
          A = t(314),
          a = t.n(A)()(r());
        a.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);",
        ]),
          a.push([
            n.id,
            '*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* sidebar */\n\nhtml {\n  --var-color-primary: #f2e5d5;\n  --var-color-secondary: #85643c;\n  --var-color-tertiary: #bfa07a;\n  --var-color-white: #f6f6f9;\n  --var-color-black: #070606;\n}\n\nbody {\n  display: grid;\n  width: 100dvw;\n  height: 100dvh;\n  grid-template-columns: 1fr 7fr;\n  font-family: "Poppins", sans-serif;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  min-width: 1fr;\n  width: 300px;\n  height: 100%;\n  padding: 20px;\n  grid-column: 1 / 2;\n  background-color: var(--var-color-tertiary);\n  overflow-y: auto;\n}\n\n#sidebar .sidebar-content {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n#sidebar h1 {\n  font-size: 1.75rem;\n}\n\n#sidebar h1,\n#sidebar h2 {\n  margin-bottom: 10px;\n}\n\n#sidebar .categories {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 4px;\n  margin-bottom: 10px;\n  padding-right: 20px;\n}\n\n#sidebar .category-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 4px 10px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  transform-origin: left center;\n}\n\n#sidebar .category-item p {\n  font-size: 1rem;\n}\n\n#sidebar .task-count {\n  font-family: sans-serif;\n}\n\n.category-item:hover {\n  transform: scale(1.05);\n}\n\n.category-item.active {\n  background-color: #e0e0e0;\n  font-weight: bold;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transform: scale(1.1);\n}\n\n.category-separator {\n  border: 0;\n  height: 1px;\n  background-color: #e0e0e0;\n  margin: 20px 0;\n}\n\n.add-task,\n.add-project {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n  gap: 8px;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n\n#sidebar .reset-project {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-width: fit-content;\n  width: 80%;\n  margin: 0 auto;\n  padding: 10px;\n  background-color: var(--var-color-secondary);\n  color: hsl(from var(--var-color-white) h s l / 0.9);\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);\n  border-radius: 4px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#sidebar .reset-project:hover {\n  background-color: var(--var-color-primary);\n  color: var(--var-color-black);\n}\n\n/* main */\n\n#main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  grid-column: 2 / 3;\n  padding: 50px;\n  background-color: var(--var-color-primary);\n}\n\n.page-title {\n  display: flex;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 800px;\n}\n\n.todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding: 15px;\n  border-top: 1px solid black;\n}\n\n.todo-title.completed,\n.todo-due-date.completed {\n  text-decoration: line-through;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #333;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n\n.todo-checkbox:checked {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n\n.todo-checkbox:checked::after {\n  content: "\\2713";\n  font-size: 1rem;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-checkbox:hover {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.todo-label {\n  flex: 1;\n  width: fit-content;\n}\n\n.todo-title {\n  margin: 0;\n  font-size: 1rem;\n  width: fit-content;\n}\n\n.todo-due-date {\n  font-size: 0.8em;\n  width: fit-content;\n}\n\n.action-icons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 20px;\n}\n\n.action-icons img {\n  cursor: pointer;\n}\n\n.action-icons img:active {\n  transform: scale(0.9);\n}\n\n/* modal */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.modal-content {\n  background-color: var(--var-color-secondary);\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  max-width: 500px;\n}\n\n.modal-close {\n  color: var(--var-color-primary);\n  font-size: 1.5rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.modal-close:hover,\n.modal-close:focus {\n  color: var(--var-color-tertiary);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.modal-top h2 {\n  font-size: 1.75rem;\n  color: var(--var-color-white);\n}\n\n/* todo modal */\n\n#todo-modal .modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border: none;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#todo-form input[type="text"] {\n  width: 100%;\n  padding: 9px 8px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n}\n\n#todo-form input[type="text"]:focus,\n#todo-form input[type="date"]:focus,\n#todo-form select:focus {\n  outline: none;\n  border: none;\n}\n\n#todo-form input[type="date"] {\n  width: 100%;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n}\n\n#todo-form .form-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n}\n\n#todo-form select {\n  width: clamp(25%, 35%, 40%);\n  padding: 8px 6px;\n  border-radius: 4px;\n  border: none;\n  font-size: 0.9rem;\n}\n\n#todo-form button {\n  flex: 1;\n  width: auto;\n  padding: 10px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n/* project modal*/\n\n#project-modal .modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 300px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n#project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n#project-form input[type="text"] {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n  padding: 10px;\n}\n\n#project-form input[type="text"]:focus {\n  outline: none;\n  border: none;\n}\n\n#project-form button {\n  width: 100%;\n  padding: 10px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n#todo-form button:hover,\n#project-form button:hover {\n  background-color: #45a049;\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/style.css"],
              names: [],
              mappings:
                "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",
              sourcesContent: [
                '@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* sidebar */\n\nhtml {\n  --var-color-primary: #f2e5d5;\n  --var-color-secondary: #85643c;\n  --var-color-tertiary: #bfa07a;\n  --var-color-white: #f6f6f9;\n  --var-color-black: #070606;\n}\n\nbody {\n  display: grid;\n  width: 100dvw;\n  height: 100dvh;\n  grid-template-columns: 1fr 7fr;\n  font-family: "Poppins", sans-serif;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  min-width: 1fr;\n  width: 300px;\n  height: 100%;\n  padding: 20px;\n  grid-column: 1 / 2;\n  background-color: var(--var-color-tertiary);\n  overflow-y: auto;\n}\n\n#sidebar .sidebar-content {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n#sidebar h1 {\n  font-size: 1.75rem;\n}\n\n#sidebar h1,\n#sidebar h2 {\n  margin-bottom: 10px;\n}\n\n#sidebar .categories {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 4px;\n  margin-bottom: 10px;\n  padding-right: 20px;\n}\n\n#sidebar .category-item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 4px 10px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  transform-origin: left center;\n}\n\n#sidebar .category-item p {\n  font-size: 1rem;\n}\n\n#sidebar .task-count {\n  font-family: sans-serif;\n}\n\n.category-item:hover {\n  transform: scale(1.05);\n}\n\n.category-item.active {\n  background-color: #e0e0e0;\n  font-weight: bold;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transform: scale(1.1);\n}\n\n.category-separator {\n  border: 0;\n  height: 1px;\n  background-color: #e0e0e0;\n  margin: 20px 0;\n}\n\n.add-task,\n.add-project {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n  gap: 8px;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  cursor: pointer;\n}\n\n#sidebar .reset-project {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-width: fit-content;\n  width: 80%;\n  margin: 0 auto;\n  padding: 10px;\n  background-color: var(--var-color-secondary);\n  color: hsl(from var(--var-color-white) h s l / 0.9);\n  border: none;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);\n  border-radius: 4px;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#sidebar .reset-project:hover {\n  background-color: var(--var-color-primary);\n  color: var(--var-color-black);\n}\n\n/* main */\n\n#main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  grid-column: 2 / 3;\n  padding: 50px;\n  background-color: var(--var-color-primary);\n}\n\n.page-title {\n  display: flex;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n}\n\n.todo-container {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 800px;\n}\n\n.todo-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px;\n  padding: 15px;\n  border-top: 1px solid black;\n}\n\n.todo-title.completed,\n.todo-due-date.completed {\n  text-decoration: line-through;\n}\n\n.todo-checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid #333;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  background-color: #fff;\n  transition: all 0.3s ease;\n}\n\n.todo-checkbox:checked {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n\n.todo-checkbox:checked::after {\n  content: "\\2713";\n  font-size: 1rem;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.todo-checkbox:hover {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.todo-label {\n  flex: 1;\n  width: fit-content;\n}\n\n.todo-title {\n  margin: 0;\n  font-size: 1rem;\n  width: fit-content;\n}\n\n.todo-due-date {\n  font-size: 0.8em;\n  width: fit-content;\n}\n\n.action-icons {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-right: 20px;\n}\n\n.action-icons img {\n  cursor: pointer;\n}\n\n.action-icons img:active {\n  transform: scale(0.9);\n}\n\n/* modal */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.modal-content {\n  background-color: var(--var-color-secondary);\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  max-width: 500px;\n}\n\n.modal-close {\n  color: var(--var-color-primary);\n  font-size: 1.5rem;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.modal-close:hover,\n.modal-close:focus {\n  color: var(--var-color-tertiary);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.modal-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.modal-top h2 {\n  font-size: 1.75rem;\n  color: var(--var-color-white);\n}\n\n/* todo modal */\n\n#todo-modal .modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 300px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border: none;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#todo-form input[type="text"] {\n  width: 100%;\n  padding: 9px 8px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n}\n\n#todo-form input[type="text"]:focus,\n#todo-form input[type="date"]:focus,\n#todo-form select:focus {\n  outline: none;\n  border: none;\n}\n\n#todo-form input[type="date"] {\n  width: 100%;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n}\n\n#todo-form .form-group {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n}\n\n#todo-form select {\n  width: clamp(25%, 35%, 40%);\n  padding: 8px 6px;\n  border-radius: 4px;\n  border: none;\n  font-size: 0.9rem;\n}\n\n#todo-form button {\n  flex: 1;\n  width: auto;\n  padding: 10px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n/* project modal*/\n\n#project-modal .modal-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 300px;\n  border-radius: 10px;\n  border: none;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n#project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n#project-form input[type="text"] {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 15px;\n  border-radius: 4px;\n  border: none;\n  font-size: 1rem;\n  padding: 10px;\n}\n\n#project-form input[type="text"]:focus {\n  outline: none;\n  border: none;\n}\n\n#project-form button {\n  width: 100%;\n  padding: 10px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n#todo-form button:hover,\n#project-form button:hover {\n  background-color: #45a049;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const i = a;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, A) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var d = this[i][0];
                  null != d && (a[d] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var s = [].concat(n[c]);
                (o && a[s[0]]) ||
                  (void 0 !== A &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = A)),
                  t &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = t))
                      : (s[2] = t)),
                  r &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = r))
                      : (s[4] = "".concat(r))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o,
                ),
              A = "/*# ".concat(r, " */");
            return [e].concat([A]).join("\n");
          }
          return [e].join("\n");
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var A = {}, a = [], i = 0; i < n.length; i++) {
            var d = n[i],
              c = o.base ? d[0] + o.base : d[0],
              s = A[c] || 0,
              l = "".concat(c, " ").concat(s);
            A[c] = s + 1;
            var p = t(l),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(m);
            else {
              var E = r(m, o);
              (o.byIndex = i),
                e.splice(i, 0, { identifier: l, updater: E, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var A = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < A.length; a++) {
              var i = t(A[a]);
              e[i].references--;
            }
            for (var d = o(n, r), c = 0; c < A.length; c++) {
              var s = t(A[c]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            A = d;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var A = t.sourceMap;
                A &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
                      " */",
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var A = (e[o] = { id: o, exports: {} });
    return n[o](A, A.exports, t), A.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var o = e.getElementsByTagName("script");
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!n || !/^http(s?):/.test(n)); )
            n = o[r--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.nc = void 0);
  const o = {
    randomUUID:
      "undefined" != typeof crypto &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  var r,
    A = new Uint8Array(16);
  function a() {
    if (
      !r &&
      !(r =
        "undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto))
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return r(A);
  }
  for (var i = [], d = 0; d < 256; ++d) i.push((d + 256).toString(16).slice(1));
  const c = function (n, e, t) {
      if (o.randomUUID && !e && !n) return o.randomUUID();
      var r = (n = n || {}).random || (n.rng || a)();
      if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
        t = t || 0;
        for (var A = 0; A < 16; ++A) e[t + A] = r[A];
        return e;
      }
      return (function (n, e = 0) {
        return (
          i[n[e + 0]] +
          i[n[e + 1]] +
          i[n[e + 2]] +
          i[n[e + 3]] +
          "-" +
          i[n[e + 4]] +
          i[n[e + 5]] +
          "-" +
          i[n[e + 6]] +
          i[n[e + 7]] +
          "-" +
          i[n[e + 8]] +
          i[n[e + 9]] +
          "-" +
          i[n[e + 10]] +
          i[n[e + 11]] +
          i[n[e + 12]] +
          i[n[e + 13]] +
          i[n[e + 14]] +
          i[n[e + 15]]
        ).toLowerCase();
      })(r);
    },
    s = (n, e) => {
      localStorage.setItem(`todos-${n}`, JSON.stringify(e));
    },
    l = (n) => {
      const e = localStorage.getItem(`todos-${n}`);
      return e ? JSON.parse(e) : [];
    },
    p = (n) => {
      localStorage.setItem("projects", JSON.stringify(n));
    },
    m = () => {
      const n = localStorage.getItem("projects");
      return n ? JSON.parse(n) : [];
    },
    E = (n) => l(n),
    u = (n, e, t) => {
      const o = l(n),
        r = o.findIndex((n) => n.id === e);
      return -1 !== r && ((o[r] = { ...o[r], ...t }), s(n, o)), o;
    };
  var f = t(72),
    C = t.n(f),
    B = t(825),
    g = t.n(B),
    x = t(659),
    b = t.n(x),
    h = t(56),
    y = t.n(h),
    v = t(540),
    w = t.n(v),
    k = t(113),
    j = t.n(k),
    S = t(208),
    Y = {};
  (Y.styleTagTransform = j()),
    (Y.setAttributes = y()),
    (Y.insert = b().bind(null, "head")),
    (Y.domAPI = g()),
    (Y.insertStyleElement = w()),
    C()(S.A, Y),
    S.A && S.A.locals && S.A.locals;
  const z = t.p + "eaafac2212a3814e6f2b.svg",
    L = t.p + "607e7ab8b5e05fe11ae4.svg",
    T = (n, e, t) => {
      n
        ? (e.classList.add("completed"), t.classList.add("completed"))
        : (e.classList.remove("completed"), t.classList.remove("completed"));
    },
    I = (n) => {
      let e = n;
      document.getElementById("main");
      const t = document.getElementById("todo-modal"),
        o = document.getElementById("todo-form"),
        r = t.querySelector("h2"),
        A = t.querySelector(".modal-close"),
        a = () => {
          ["Home", "Today", "Upcoming", ...i()].forEach((n) => {
            const e = E(n).length;
            document.querySelectorAll(".category-item").forEach((t) => {
              if (t.querySelector("p").textContent.trim() === n) {
                const n = t.querySelector(".task-count");
                n && (n.textContent = e);
              }
            });
          });
        },
        i = () => {
          const n = document.querySelectorAll("#project-list .category-item");
          return Array.from(n).map((n) =>
            n.querySelector("p").textContent.trim(),
          );
        },
        d = (n) => {
          ((n, e, t, o, r) => {
            const A = document.getElementById("main");
            A.innerHTML = "";
            const a = document.createElement("h2");
            (a.textContent = e),
              a.classList.add("page-title"),
              A.appendChild(a);
            const i = document.createElement("div");
            (i.id = "todo-list"),
              n.forEach((n) => {
                const e = ((n, e, t, o) => {
                  const r = document.createElement("div");
                  r.classList.add("todo-container"), (r.dataset.id = n.id);
                  const A = document.createElement("div");
                  A.classList.add("todo-item");
                  const a = document.createElement("input");
                  (a.type = "checkbox"),
                    a.classList.add("todo-checkbox"),
                    (a.checked = n.completed || !1),
                    a.addEventListener("change", () => {
                      e(n.id, a.checked), T(a.checked, d, c);
                    });
                  const i = document.createElement("div");
                  i.classList.add("todo-label");
                  const d = document.createElement("h5");
                  d.classList.add("todo-title"), (d.textContent = n.title);
                  const c = document.createElement("p");
                  c.classList.add("todo-due-date"),
                    (c.textContent = n.dueDate),
                    T(n.completed, d, c);
                  const s = ((n) => {
                    switch (n.toLowerCase()) {
                      case "high":
                        return "#ff4d4d";
                      case "medium":
                        return "#ffa500";
                      case "low":
                        return "#4caf50";
                      default:
                        return "#808080";
                    }
                  })(n.priority);
                  r.style.borderLeft = `5px solid ${s}`;
                  const l = document.createElement("div");
                  l.classList.add("action-icons");
                  const p = document.createElement("img");
                  (p.src = L),
                    (p.alt = "edit"),
                    p.classList.add("todo-edit"),
                    p.addEventListener("click", () => t(n.id));
                  const m = document.createElement("img");
                  return (
                    (m.src = z),
                    (m.alt = "delete"),
                    m.classList.add("todo-delete"),
                    m.addEventListener("click", () => o(n.id)),
                    i.appendChild(d),
                    i.appendChild(c),
                    l.appendChild(p),
                    l.appendChild(m),
                    A.appendChild(a),
                    A.appendChild(i),
                    A.appendChild(l),
                    r.appendChild(A),
                    r
                  );
                })(n, t, o, r);
                i.appendChild(e);
              }),
              A.appendChild(i);
          })(E(n), n, m, f, C);
        },
        p = () => {
          (t.style.display = "block"), o.reset();
        },
        m = (n, t) => {
          u(e, n, { completed: t });
        },
        f = (n) => {
          const A = E(e).find((e) => e.id === n);
          (r.textContent = "Edit Task"),
            (o.title.value = A.title),
            (o.dueDate.value = A.dueDate),
            (o.priority.value = A.priority),
            (t.style.display = "block"),
            (o.onsubmit = (e) => B(e, n));
        },
        C = (n) => {
          ((n, e) => {
            const t = l(n).filter((n) => n.id !== e);
            s(n, t);
          })(e, n),
            d(e),
            a();
        },
        B = (n, r = null) => {
          n.preventDefault();
          const A = {
            title: o.title.value,
            dueDate: o.dueDate.value,
            priority: o.priority.value,
          };
          r
            ? u(e, r, A)
            : (((n, e) => {
                const t = l(n),
                  o = { ...e, id: c(), completed: !1 };
                t.push(o), s(n, t);
              })(e, A),
              p()),
            (t.style.display = "none"),
            a(),
            d(e);
        };
      return (
        A.addEventListener("click", () => {
          t.style.display = "none";
        }),
        (o.onsubmit = B),
        d(e),
        {
          onAddTask: p,
          renderTodos: d,
          updateTaskCount: a,
          getCategory: () => e,
          setCategory: (n) => {
            e = n;
          },
        }
      );
    };
  function q(n) {
    const e = document.getElementById("sidebar");
    e &&
      e.querySelectorAll(".category-item").forEach((e) => {
        e.classList.remove("active"),
          e.querySelector("p").textContent.trim() === n &&
            e.classList.add("active");
      });
  }
  function U(n) {
    const e = document.getElementById("sidebar");
    if (!e) return;
    const t = ["Home", "Today", "Upcoming", ...O()];
    e.querySelectorAll(".category-item").forEach((n) => {
      const e = n.cloneNode(!0);
      n.parentNode && n.parentNode.replaceChild(e, n);
    }),
      W(e, t, n, (e) => {
        n.setCategory(e);
      }),
      q(n.getCategory());
  }
  function W(n, e, t, o) {
    n.querySelectorAll(".category-item").forEach((n) => {
      n.addEventListener("click", (n) => {
        const r = n.currentTarget.querySelector("p").textContent.trim();
        e.includes(r) &&
          (q(r), t.renderTodos(r), t.updateTaskCount(), o && o(r));
      });
    });
  }
  function O() {
    const n = m();
    return [
      ...new Set(["Work", "Fitness", "Grocery", ...n.map((n) => n.name)]),
    ];
  }
  let D, Z;
  const M = () => {
      let n = m();
      const e = [
        { name: "Work", id: "work-default", class: "category-item" },
        { name: "Fitness", id: "fitness-default", class: "category-item" },
        { name: "Grocery", id: "grocery-default", class: "category-item" },
      ];
      (n = n.filter((n) => !e.some((e) => e.name === n.name))),
        (n = [...e, ...n]),
        (D.innerHTML = ""),
        n.forEach((n) => {
          const e = N(n);
          D.appendChild(e);
        });
      const t = ["Home", "Today", "Upcoming", ...n.map((n) => n.name)];
      W(D, t, Z);
    },
    N = (n) => {
      const e = document.createElement("div");
      return (
        e.classList.add("category-item"),
        (e.innerHTML = `\n    <p>${n.name}</p>\n    <span class="task-count">0</span>\n  `),
        e
      );
    },
    P = (n) => {
      (Z = n), (D = document.getElementById("project-list"));
      const e = document.getElementById("add-project"),
        t = document.getElementById("project-modal"),
        o = document.getElementById("project-form"),
        r = t.querySelector(".modal-close");
      e.addEventListener("click", () => {
        t.style.display = "block";
      }),
        r.addEventListener("click", () => {
          t.style.display = "none";
        }),
        o.addEventListener("submit", (n) => {
          n.preventDefault(),
            ((n) => {
              const e = m();
              e.push({ name: n, id: Date.now() }), p(e), M(), U(Z);
            })(o.projectName.value),
            o.reset(),
            (t.style.display = "none");
        }),
        M();
    },
    H = () => {
      p([]), M(), U(Z), Z.renderTodos("Home"), Z.updateTaskCount();
    };
  function R() {
    const n = document.querySelectorAll("#project-list .category-item");
    return Array.from(n).map((n) => n.querySelector("p").textContent.trim());
  }
  document.addEventListener("DOMContentLoaded", () => {
    let n = "Home",
      e = I(n);
    P(e),
      U(e),
      W(
        document.getElementById("sidebar"),
        ["Home", "Today", "Upcoming", ...R()],
        e,
        (e) => {
          n = e;
        },
      ),
      document.querySelector(".add-task").addEventListener("click", () => {
        e.onAddTask(), q(n);
      }),
      document.querySelector(".reset-project").addEventListener("click", () => {
        confirm(
          "Are you sure you want to delete all projects? This action cannot be undone.",
        ) && (H(), (n = "Home"), q(n));
      }),
      q(n),
      e.updateTaskCount();
  });
})();
//# sourceMappingURL=app.bundle.js.map
