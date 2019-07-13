# rivetzCOM-etta

![banner](/static/img/logo/250px.png)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Website https://rivetz.com](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://rivetz.com)

> SSR UWA for Rivetz Primary Website (https://rivetz.com), built on Node.js, Express, Next.js, React, and SCSS as part of the &#39;Etta&#39; dynasty of updates across Rivetz web properties.

> Primary & production source control is handled via AWS CodeCommit. This Github repository is here in response as a public-facing reference, as requested by our Telegram and Discord communities. As such, this repo is only updated periodically and may be a few versions behind production.

## Table of Contents

- [Security](#security)
- [Background](#background)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Deploy](#deploy)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Security
- Presently no dependence on MongoDB - all data stored in local JSON. This was a conscious choice in order to minimize potential attack vectors and risk. We'll be adding Mongo integration in a future update.

## Background
*Damn Your Eyes!* This is the 5th major holistic tech & design update to Rivetz' web properties, nicknamed "Etta" after the famous blues & jazz singer because we *At Last* have been able to ship some of our most anticipated features (and groundwork for other upcoming features).

One of the biggest differences between *Etta* and our previous release, Clarice, is a shift to server-side rendering (SSR), which offers major advantages in regards to *Security*, SEO, and caching. We were *Almost Persuaded* to keep us on a client-side SPA, but *I'd Rather Go Blind* than have to kindly ask someone to hit 'Refresh' again to clear their browser's cache.

With this update, we're also now condensed back into a single repo (no more need to split the backend to AWS EBS and frontend on S3, thankfully) - and the build runs on a standard Node/Express EB setup.

**Technology:** This update uses Node.js, Express, Next.js, React, & SCSS. Next.js is a framework that handles much of the SSR responsibilities for us (otherwise, building SSR in React is horrible - *It Hurts Me So Much*), and binds our Express server to our React app.

**App Flow:** In short, Express receives a request, parses any incoming query strings, and renders the React app. Once the React app is rendered client-side, the browser takes over handling queries, navigation, etc (except stuff that explicitly requires a new server response).

## Prerequisites

**FontAwesome 5:** We use FontAwesome 5 Pro for many of our standard icons (social media, forms, etc). You may encounter build & npm/yarn issues if you don't have FontAwesome 5 Pro. If you have FA5 Pro, you should ensure @fortawesome's scope is configured to use the FA5 Pro NPM registry (either via .npmrc or global npm config). Full details and docs on the [FontAwesome Website](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro).

**EB CLI:** You will need to have the AWS EB CLI installed in order to deploy. The EB CLI requires Python and `pip`. If you already have `pip` and Python is added to your path, installing the CLI is as simple as:
```shell
pip install awsebcli --upgrade --user
```
You can then verify the installation via:
```shell
eb --version
```
 *For more details on EB CLI, see the AWS official docs: [**How to Install EB CLI**](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)*

## Install
To get started, clone the repo and run the `maiden` (first-time) script. This will install all project dependencies, generate a `next` build, and then start the server.
```shell
npm run maiden
```
**The site will then be available locally at http://localhost:8081.**

Client-side changes should hot-refresh in your browser, but changes to `server.js` (or its dependencies) **will require a restart**:
```shell
npm run dev
```
This generates a new `next` build and starts the server (without attempting to reinstall dependencies).

**Note:** If you only want to run the client-side version of the app, `npm run start` will init in that fashion.

## Deploy
> **Quality-of-Life Note:** Before pushing your code to source control, please lint (we're using the [Standard](https://github.com/standard/standard) code style). It's already installed it as a devDependency, so you should just be able to run `standard --fix` to fix most formatting. If your code isn't compliant, affected lines will be logged in your console.

Once you've made any changes and pushed to source control, you can deploy directly to AWS EB:
```shell
eb deploy
```
This zips core project files, uploads to S3, then attempts to deploy onto the live EB application. After upload, you can access this and previous deploys via the AWS Web Portal > EB > Applications > rivetzCOM > Application Versions or via the AWS CLI.

## Contributing
Tracking is handled internally via Zenhub, but community members are welcome to submit PR's to this repo for consideration.

**Discord**: [https://discord.gg/VNrDBUV](https://discord.gg/VNrDBUV)

**Telegram**: [https://t.me/rivetz_official](https://t.me/rivetz_official)

## Maintainers

[@adefee](https://github.com/adefee)

## Contributing

See [package.json](package.json)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

© 2019 Rivetz Corp, Inc. All Rights Reserved.
