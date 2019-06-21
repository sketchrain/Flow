![Flow Header](https://i.ibb.co/2SLXTZX/flow-banner.png "Flow Header Banner")

# Flow - overview

**Flow is experimental, minimalistic, reactive framework** based on [RxJS](https://rxjs-dev.firebaseapp.com/) (RX port for JavaScript). Main goal of this framework is to simplify actions and data management for client side of web-applications. Flow can be used in combination with different frontend technologies, such as [Angular](https://angular.io), [React](https://reactjs.org) etc.

Key idea is to define characteristic actions for application and their interactions in scope of one specific action module.

## Example web-app (NGTimer) 

<img align="left" width="350" height="333" src="https://i.ibb.co/qkyHC59/ngt-vid2.gif"/>

NGTimer is web application, which should demonstrate usage of Flow in practice. NGTimer has implemented **frontend** and **backend**. **NGTimer** is built on [MEAN stack](http://mean.io/) (MongoDB, Expres.js, Angular, Node.js). For UI is used library [Semantic UI](https://edcarroll.github.io/ng2-semantic-ui/#/getting-started) for Angular.

<h3>
  <a href="https://github.com/sketchrain/ngTimer">NGTimer - repository</a>
  <span> | </span>
  <a href="https://ngtimer.herokuapp.com">Live example</a>
</h3>

<br clear="left">

## Key concepts
### Core elements

**Flow** contains main action module, from which it is derived **Selector** and **Event Module**. Individual modules are linked together and after all **interactions** are completed in one module, output actions are pushed to other (connected) module. Communication between each action modules is handled by **signal**, which flows through modules.

<p align="center">
  <img src="https://i.ibb.co/Db4hfwq/flow-schema.png" />
</p>

## Features
* **) Definition and management of actions for web-apps (log action information)**
<p><b>Actions</b> are interconnected and to every action can be attached concrete data operations, control logic and backend API.</p>

* **Manage states for actions (start, stop, resume)**
// <p>There are two main types of actions, <b>basic</b> and <b>state actions</b>. This makes it easier to setup relationships between actions, by checking their states.</p> 

* **Definition of secondary relationships between actions**
<p>Each action can by connected to any other action as <b>side-effect<b>. Each action can have several side-effects.<p>

* **Connection of backend API to actions**
* **Organizing, Connection of UI events to actions**
* **Defining selectors for concrete data objects/elements**
* **Connecting listeners to update visual**

## Complete API overview
### in progress
