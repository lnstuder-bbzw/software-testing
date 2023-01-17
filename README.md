# Software Testing - Demo

> Unterrichtsblock zu Software Testing im Modul 326
> Gruppe Lian, Elias, Ghiath, Raksana, Alejandro
[![Continuous Integration](https://github.com/lnstuder-bbzw/software-testing/actions/workflows/ci.yml/badge.svg)](https://github.com/lnstuder-bbzw/software-testing/actions/workflows/ci.yml)

## Projektstruktur

Im folgenden Dateibaum siehst du die wichtigsten Dateien dieser Repository.

```
src/
├─ App.jsx 
├─ lib/
    ├─ math.js
test/
├─ math.test.js
cypress/
├─ e2e/
    ├─ demo.cy.js
package.json
```

- **src/** : In diesem Ordner findest du den Quellcode, der getestet werden soll.
- **test/** : In diesem Ordner sind die zugehörigen Unit Tests abgelegt.
- **cypress/** : In diesem Ordner sind die Dateien abgelegt, die Cypress zum E2E Testing benötigt, sowie die E2E Tests selber.
- **package.json** : Ein normales [package.json](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) zur Verwaltung von Abhängikeiten.

## Verwendung

Um die Test Suite auszuführen, führe folgende Befehle aus.

```
npm install
npm test
```

Mit `npm run dev` kannst du die App starten, um zu sehen, was getestet wird.