# SvelteKit Website Template

A simple template for website created with SvelteKit.

This template use the SvelteKit framework and offers to start working with an organized project wich contains everything you need without useless assets.

## Installation 
Do this commands by replacing ``projectName`` with the name of your project :
```sh
npx degit https://github.com/Leepo-Team/SvelteKit-Template projectName
cd projectName
```

Then install the packages :
```sh
npm install
```

You can then launch the site in development mode with the command :
```sh
npm run dev
```

Or in production mode (you can change the port in the ``package.json`` file) :
```sh
npm run build
npm run start
```

By default we use a NodeJS application in production, but you can change this with other [adapters](https://kit.svelte.dev/docs#adapters).

## Svelte / SvelteKit
[Svelte](https://svelte.dev/) is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.

**Tutorial :** https://svelte.dev/tutorial/basics

[SvelteKit](https://kit.svelte.dev/) is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

Unlike single-page apps, SvelteKit doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.

**Documentation :** https://kit.svelte.dev/docs

## Organization and additional content
- Much of this template serves as an example of organization and possibilities
- To change the default font, go to /static/style/font.css
- \<script\> tags in Svelte files use TypeScript by default
- \<style\> tags in Svelte files use SCSS by default
- There are SCSS variables that can be used anywhere in the Svelte files. It is located in /lib/scss/variables.scss
- In the "Components" page (in the navbar) you can see some components available in this template

## Contribution
You can contribute by opening an issue or a pull request. 

Warning ! Remember the keyword of this template : **SIMPLICITY** !