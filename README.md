<div id="top"></div>
<br />
<div align="center" >

<h3 align="center">Hernan's Star wars App</h3>

  <p align="center">
   Star wars App

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
    <ul>
      <a href="#about-the-project">About The Project</a>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#considerations">Considerations</a></li>
    </ul>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#commands">Commands</a></li>
      </ul>

</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Star wars API Challenge

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/) - Main
- [Material-UI](https://mui.com/) - Styling/Functionality
- [Prettier](https://prettier.io/) - Sexy Code ;)
- [EsLint](https://eslint.org/) - Code Formatter
- [React-Router](https://reactrouter.com/) - Multiple pages
- [React-Context](https://reactjs.org) - Small-medium scale state management
- [Axios](https://axios-http.com/docs/intro) - HTTP Requests

<p align="right">(<a href="#top">back to top</a>)</p>

### Considerations

1. As how the API works, it would be performance-wise to call all the request one time globally (in this case, context). But most of the time we should not do that. So I did the calls as if we have an ideal API
2. It is needed to show city, and specie in the general list. For this to happen you need to make 3 request as the in the general request /people does not bring this info. Ideally, the general list should only show the data that we get from /people, and later go in details with each character.

<p align="right">(<a href="#top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

1. You need to have node install in your PC (You can algo use Yarn)
   https://nodejs.org/en/download/

### Installation

1. Open Terminal
2. Clone the repo

```sh
git clone https://github.com/hernansson/starwars-challenge
```

3. Navigate to 'react-calendar' folder

```sh
  cd react-calendar
```

4. Install NPM packages

```sh
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Commands

1. Start Project

```sh
  npm start
```

2. ESLint for consistency

```sh
  npm run lint
```

3. Prettier for making code sexier

```sh
  npm run prettier
```

4. Tests

```sh
  npm run test
```

<p align="right">(<a href="#top">back to top</a>)</p>
````
