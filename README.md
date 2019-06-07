![Flow Header](https://i.ibb.co/2SLXTZX/flow-banner.png "Flow Header Banner")

# Flow – základní přehled 
**Flow je experimentální, minimalistický, reaktivní framework** postavený na [RxJS](https://rxjs-dev.firebaseapp.com/)(port RX pro Java Script), který má za cíl prezentovat možnosti RxJS a umožnit přehledné řízení akcí v rámci klientských aplikací, možný použít v kombinaci např. s [Angular](https://angular.io), [React](https://reactjs.org) atd. 

Základní myšlenka je definování charakteristických akcí aplikace a jejich propojení do interakcí v rámci akčního modulu. Ke konstrukce interakcí je možné využít přímo či nepřímo klasické operátory RxJs.

K jednotlivým akcím mohou být přiřazeny konkrétní datové operace, logika řízení akcí a napojeno backendové API. 

## Ukázková web-aplikace (NGTimer)

<img align="left" width="350" height="333" src="https://i.ibb.co/qkyHC59/ngt-vid2.gif"/>

NGTimer je jednoduchá ukázková web-aplikace, která by měla demonstrovat použití Flow v praxi. Je implementován **frontend** i **backend**. **NGTimer** je postavený na [MEAN stacku](http://mean.io/) (MongoDB, Expres.js, Angular, Node.js). Jako UI library je používán port [Semantic UI](https://edcarroll.github.io/ng2-semantic-ui/#/getting-started) pro Angular.
<h3>
  <a href="https://github.com/sketchrain/ngTimer">NGTimer - repository</a>
  <span> | </span>
  <a href="https://ngtimer.herokuapp.com">Live example</a>
</h3>

<br clear="left">

## Funkcionality, Koncept
### Základní prvky (architektura)
**Flow** obsahuje hlavní **akční modul**, od kterého je odvozen **selector** a **eventModule**. Jednotlivé moduly jsou navzájem propojeny a po provedení vlastních **interakcí** předávají výstupní akce napojenému modulu. Komunikace mezi akčními moduly probíhá skrze **signál**, který “protéká” modulem.

<p align="center">
  <img src="https://i.ibb.co/Db4hfwq/flow-schema.png" />
</p>

## Funkcionality
* **Definice a řízení charakteristických akcí pro aplikaci, (logování akcí)**
<p><b>Akce</b> jsou vzájemně propojeny do interakcí. Ke každé akci můžou být přiřazeny jednotlivé operace (datové operace atd.).</p>

* **Definice průběhových akcí a řízení jejich stavů (start, stop, resume)**
<p>Akce jsou rozlišovány na <b>základní</b> a <b>stavové</b> (průběhové), díky tomu je možné řídit průběh akcí na základě aktuálního stavu průběhových akcí. </p>

* **Definice sekundárních vztahů mezi akcemi – vedlejší akce**
<p>Ke každé akci je možné ostatní akce napojit jako <b>vedlejší akce</b> (side-effects). Takto může být přehledně a předvídatelně řízen průběh akcí.</p>

* **Napojení backendového API k definovaným akcím**
* **Organizování, napojení UI-event na akce **
* **Definice selectorů pro konkrétní datové elemtny nebo objekty datového modelu**
* **Napojení posluchačů daných selectorů pro update visuálu**

## Kompletní API reference
### in progress
