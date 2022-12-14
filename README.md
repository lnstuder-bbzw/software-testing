# Software Testing - Demo

> Unterrichtsblock zu Software Testing im Modul 326
> Gruppe Lian, Elias, Ghiath, Raksana

[![Continuous Integration](https://github.com/lnstuder-bbzw/software-testing/actions/workflows/ci.yml/badge.svg)](https://github.com/lnstuder-bbzw/software-testing/actions/workflows/ci.yml)

## Projektstruktur

Im folgenden Dateibaum siehst du die wichtigsten Dateien dieser Repository.

```
src/
├─ math.js
tests/
├─ math.test.js
package.json
```

- **src/** : In diesem Ordner findest du die Funktionen, die getestet werden sollen.
- **tests/** : In diesem Ordner sind die zugehörigen Tests abgelegt.
- **package.json** : Ein normales [package.json](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) zur Verwaltung von Abhängikeiten.

## Verwendung

Um die Test Suite auszuführen, führe folgende Befehle aus.

```
npm install
npm test
```
