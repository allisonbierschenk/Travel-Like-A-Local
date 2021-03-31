# ![img](https://i.imgur.com/sQOLd7w.png)

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Travel Like a Local**_
Everyone knows about the well known tourist attractions, and sure those can be spectacular, but I know my best trips are the ones with no plans and accompanied by a local. This app is designed to write, share, and discover hidden gems through blogs and posts written by travelors and locals from all over the world.

<br>

## MVP

_The **Travel Like a Local** MVP_

<br>

### MVP Goals 

- _Homepage_
- _Login for full CRUD_
- _User authentication and association_
- _One_to_many user << comments && posts_
- _Many_to_many favorites <<>> posts_
- _One_to_many post << comments && favorites_
- _Search_
- _Nav will change if logged in_
- _Uniform style across each file (frontend and backend)_
- _REST API concepts_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Build encapsulated components that manage their own state_ |
|   React Router   | _Keeps the UI in sync with the URL_ |
|   React Router Dom  | _It contains the DOM bindings for React Router_ |
| JWT | _JSON Web Token_ |
|     Bcrypt      | _A password-hashing function_ |
|  Axios  | _A promise-based HTTP client for the browser and Node_ |

<br>

### Client (Front End)

#### Wireframes
[All](https://xd.adobe.com/view/4654ec26-ab18-4dd1-5f43-0a173a83154f-3065/)

[Desktop Landing]

![img](https://i.imgur.com/Wm7v9Op.png)

[Logged in Nav]

![img](https://i.imgur.com/6v8tbne.png)

[Sign-in]

![img](https://i.imgur.com/6mpNL8D.png)

[Sign-up]

![img](https://i.imgur.com/Nzz606m.png)

[Post Details]

![img](https://i.imgur.com/y3rwnzO.png)

[Post Details (loggedin)]

![img](https://i.imgur.com/CRTJjMD.png)

[MyAccount]

![img](https://i.imgur.com/0q4CHgt.png)

[NewPost]

![img](https://i.imgur.com/Zrg0pp5.png)

[MyFavorites]

![img](https://i.imgur.com/uEpLgaM.png)

[EditPost]

![img](https://i.imgur.com/WZnUrc6.png)

[Pop-Up(modal)]

![img](https://i.imgur.com/FvfxAL5.png)

#### Component Tree

![Component Tree](https://i.imgur.com/5XS6Kn9.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
|__ components/
      |__ Nav.jsx
      |__ Nav.css
      |__ Modal.jsx
      |__ Modal.css
      |__ Footer.jsx
      |__ Footer.css
      |__ Button.jsx
      |__ Button.css
      |__ Search.jsx
      |__ Search.css
      |__ Comments.jsx
      |__ PostPreview.jsx
      |__ PostPreview.css
|__ containers/
    |__ MainContainer/
        |__ MainContainer.jsx
        |__ MainContainer.css
  
|__ layout/
    |__ Layout.jsx
    |__ Layout.css
|__ screens/
    |__ home
        |__ Home.jsx
        |__ Home.css
    |__ postDetail
        |__ PostDetail.jsx
        |__ PostDetail.css
    |__ postCreate
        |__ PostCreate.jsx
        |__ PostCreate.css
    |__ postEdit
        |__ PostEdit.jsx
        |__ PostEdit.css
    |__ signin
        |__ SignIn.jsx
        |__ SignIn.css
    |__ signup
        |__ SignUp.jsx
        |__ SignUp.css 
    |__ myaccount
        |__ MyAccount.jsx
        |__ MyAccount.css     
|__ services/
    |__ api-config.js
    |__ auth.js
    |__ posts.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Init new rails app and setup    |    L     |     30 min      |     TBD     |   TBD    |
| Install dependencies |    H     |     15 min     |     TBD     |     TBD     |
| Update Gemfile |    H     |     1 hr      |     TBD     |     TBD     |
| Scaffold (order matters, parents first) |    H     |     15 min      |     TBD     |     TBD     |
| Edit routes |    H     |     1 hr      |     TBD     |     TBD     |
| Check migrations and migrate |    H     |     30 min      |     TBD     |     TBD     |
| Customize associations(models) |    H     |     30 min      |     TBD     |     TBD     |
| Seed data and check in Postico |    H     |     1 hr      |     TBD     |     TBD     |
| cors.rb  |    H     |     15 min     |     TBD     |     TBD     |
| Customize and check in Postman controllers |    H     |     1 hr      |     TBD     |     TBD     |
| npx create-react-app client and delete boilerplate|    H     |     15 min      |     TBD     |     TBD     |
| Set up file structure |    H     |    30 min      |     TBD     |     TBD     |
| Set up services and auth |    H     |     1 hr      |     TBD     |     TBD     |
| Set up Landing page |    H     |     1 hr      |     TBD     |     TBD     |
| Set up Layout  |    H     |     1 hr      |     TBD     |     TBD     |
| Set up Nav with conditional Nav and footer|    H     |     2 hrs      |     TBD     |     TBD     |
| Set up Login, register, logout |    H     |     1 hr      |     TBD     |     TBD     |
| Set up main container |    H     |     1 hr      |     TBD     |     TBD     |
| Set up new post form (postCreate)|    H     |     1 hr      |     TBD     |     TBD     |
| Set up edit post form (postUpdate) |    H     |     1 hr      |     TBD     |     TBD     |
| Set up post detail page and commenting|    H     |     3 hrs      |     TBD     |     TBD     |
| Conditional rendering for detail page for users (edit and delete) |    H     |     1 hr      |     TBD     |     TBD     |
| Set up my account page |    H     |     1 hr      |     TBD     |     TBD     |
| Pop-up to sign in on click of like or comment (modal and handleOpen on food.jsx)|    H     |     2 hrs      |     TBD     |     TBD     |
| Search |    H     |     1 hr      |     TBD     |     TBD     |
| Material-UI CSS for Sign in |    H     |     1 hr      |     TBD     |     TBD     |
| Material-UI CSS for Sign up |    H     |     1 hr      |     TBD     |     TBD     |
| Material-UI CSS for Nav|    H     |     1 hr      |     TBD     |     TBD     |
| CSS with any time remaining |    H     |     3 hrs      |     TBD     |     TBD     |
| Media Queries (2 minimum) |    H     |     1 hr      |     TBD     |     TBD     |
| Favorites |    H     |     3 hrs      |     TBD     |     TBD     |
| ActiveStorage |    H     |     3 hrs      |     TBD     |     TBD     |


| TOTAL               |          |     36 hrs      |     TBD    |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1SrRzOX8ioYJS0EQMMDwIAGIxiRLKw3pd/view?usp=sharing)
<br>

***

## Post-MVP

- Favorites -- join table
- Nav including favorites page
- Users can upload images rather than links [ActiveStorage](https://api.rubyonrails.org/classes/ActiveStorage/Blob.html)
- Search

***

## Code Showcase

> TBD Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> TBD Use this section to list of all major issues encountered and their resolution.
