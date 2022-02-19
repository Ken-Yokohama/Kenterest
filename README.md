# Kenterest
Full Stack Pinterest Clone using React &amp; Sanity.io

![Kenterest Logo](https://raw.githubusercontent.com/Ken-Yokohama/Kenterest/master/kenterest_frontend/src/assets/logo.png)

### Brief Summary
Kenterest is a full-stack social media photo sharing web application similar to the popular website [Pinterest](https://www.pinterest.com/) created using React in the Frontend and Sanity.io as the CMS. Here, users are able to upload, like, share, comment and filter photos as well as login to their account using google authentication.

### Links:
- [Live Preview](https://kenterest.netlify.app/)

![Kenterest Cover Sample](https://github.com/Ken-Yokohama/Kenterest/blob/master/cover.JPG)

### Features:
- Login and Account Creation
- Masonry Layout for existing Photos/Pins
- Search query and filtering
- Horizontal Carousel Navigation for Hot Topics
- Recommended Photos/Pins
- Liked Photos/Pins

### Technologies & Templates Used
| Technologies | Usage                                      |
| ----------------- | ------------------------------------------------ |
| Google Authentication      | Login & Authentication      |
| React Router Dom | Navigation & Routing |
| React Masonry | CSS Masonry Layout        |
| Tailwind CSS  | CSS Classes  |
| React Slick | Horizontal Carousel Nav |
| React Icons | Icons |
| React Loader Spinner | Loader |
| Sanity.io  | CMS|
| UUID  | Unique Key Generation|

### How to run locally
```
git clone https://github.com/Ken-Yokohama/Kenterest.git

cd kenterest-backend
sanity start

cd kenterest-frontend
npm start
```

### File Structure
Within the download you'll find the following directories and files:
```
psbsi/
├── kenterest_backend/
|   ├── config/
|   |   ├── @sanity/
|   |   |   ├── data-aspects.json
|   |   |   ├── default-layout.json
|   |   |   ├── default-login.json
|   |   |   └── form-builder.json
|   |   └── .checksums
|   ├── dist/
|   |   ├── static/
|   |   |   ├── css/
|   |   |   |   └── main.css
|   |   |   ├── js/
|   |   |   |   ├── app.bundle.js
|   |   |   |   └── vendor.bundle.js
|   |   |   ├── .gitkeep
|   |   |   └── favicon.ico
|   |   └── index.html
|   ├── plugins/
|   |   └── .gitkeep
|   ├── schemas/
|   |   ├── comment.js
|   |   ├── pin.js
|   |   ├── postedBy.js
|   |   ├── save.js
|   |   ├── schema.js
|   |   ├── user.js
|   |   └── .checksums
|   ├── static/
|   |   ├── .gitkeep
|   |   └── favicon.ico
|   ├── .npmignore
|   ├── package.json
|   ├── README.md
|   ├── sanity.json
|   ├── tsconfig.json
|   └── yarn.lock
├── kenterest_frontend/
|   ├── public/
|   |   ├── _redirects
|   |   ├── favicon.ico
|   |   ├── favicon.png
|   |   ├── index.html
|   |   ├── logo192.png
|   |   ├── logo512.png
|   |   ├── manifest.json
|   |   └── robots.txt
|   ├── src/
|   |   ├── assets/
|   |   ├── components/
|   |   ├── container/
|   |   ├── utils/
|   |   ├── App.js
|   |   ├── client.js
|   |   ├── index.css
|   |   └── index.js
|   ├── .gitignore
|   ├── README.md
|   ├── netlify.toml
|   ├── package-lock.json
|   ├── package.json
|   ├── postcss.config.js
|   └── tailwind.config.js
└── sitemap.xml
```
