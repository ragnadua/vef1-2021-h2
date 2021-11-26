# Hópaverkefni 2

## Höfundar eru: 
### Ármann Pétursson
* arp31@hi.is
* githubID: [ATVRmann](https://github.com/ATVRmann)
### María Orradóttir
* mao44@hi.is
* githubID: [mariaorra](https://github.com/mariaorra)
### Ragna Dúa Þórsdóttir
* rdt1@hi.is 
* githubID: [ragnadua](https://github.com/ragnadua)
***

## Keyrsla
Verkefnið er skrifað í SASS(SCSS), JavaScript og HTML. Við notum node.js með pökkunum node-sass (til að þýða .scss skrár í .css), sass-watch til að auðvelda okkur þýðinguna og síðan browser-sync. Til að keyra vefsíðuna þarf að skrifa í rót verkefnisins:
```zsh
npm install
npm run sass
npm run browser-sync


```
Eftir að við höfum hlaðið pökkum inn á tölvuna getum við athugað hvort SASS(.scss) skrár fylgi viðmiðunarreglum með viðbótinni stylelint. Til að nýta okkur hana skrifum við í rót verkefnisins
```zsh
npm run lint
```
Til að keyra skal nota eftirfarandi skipanir
```zsh
npm run dev
npm run lint
```
## Uppsetning
Aðal síðan (index.html) situr fremst í repository-inu ásamt styles.scss og styles.css. Aðrar SASS skrár eru geymdar í möppu að nafni utlit, sem er þýdd yfir í styles.scss/styles.css. JavaScript föll eru í möppunni lib sem main.js kallar á. index.html kallar síðan í main.js.
