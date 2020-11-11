---
name: 'Firebase Database'
description: 'Creating Realtime database of firebase in React'
author: '@giridhar7632'
img: 'https://cloud-3a2lu9qq3.vercel.app/0screenshot_2020-11-09_153841.png'
---

# Firebase Database

Have you ever created database for a web applications? In this workshop we are going to create a realtime database using google's Firebase for our web application. We are going to build something like this.

![Final Project](https://cloud-3a2lu9qq3.vercel.app/2screenshot_2020-11-09_163829.png)

[Live Demo](https://firebase-database.giridharhackclu.repl.co/).  [Source Code](https://repl.it/@Giridharhackclu/firebase-database#src/App.js).

Everytime you submit the form, the input given will be updated to a realtime database.

## Prerequisites

![Prerequisites](https://cloud-l2ccvbjwj.vercel.app/0screenshot_2020-11-09_213901.png)

You should have some intermediate knowledge about HTML, CSS and JavaScript. Also some fundamentals of React and React-Hooks. 

## Getting started

### Database

![Database](https://cloud-l2ccvbjwj.vercel.app/1screenshot_2020-11-09_220807.png)

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are more complex they are often developed using formal design and modeling techniques. Learn more about database [here](https://www.bbc.co.uk/bitesize/topics/zf2f9j6/articles/z8yk87h).

### Database as a service

![Database as a service](https://cloud-l2ccvbjwj.vercel.app/2screenshot_2020-11-09_221151.png)

Database as a service (DBaaS) is a cloud computing managed service offering that provides access to a database without requiring the setup of physical hardware, the installation of software or the need to configure the database. It is a product which you can use easily, without creating and configuring. One of such type of products is `Firebase`, which is originally created by Google. `Firebase` is great, free(upto some extinct) and easy to use product. It has many services like authentication, cloud storage, realtime database, etc.. In this workshop we are going to use realtime database of Firebase.

### Firebase

<img src="https://cloud-1swt5hmba.vercel.app/5firebase_realtime_database__1-_icon__dark_.png" alt="Firebase REaltime Database" width="200px" height="auto"/>

The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. We can store and sync data across all clients in realtime, and remains available when your app goes offline. 

> **Realtime means** : Instead of typical HTTP requests, the Firebase Realtime Database uses data synchronization—every time data changes, any connected device receives that update within milliseconds. Provide collaborative and immersive experiences without thinking about networking code.

Learn more about Firebase [here](https://youtu.be/U5aeM5dvUpA)

In this workshop, we will create a form, which stores data into firebase realtime database, when submitted, using [React](https://reactjs.org). 

## Setting up..

### Code editor

We will be using [Repl.it](https://repl.it) for building our project. Repl.it is a online code editor, where you can code in many different languages without any installations.

Fork this starter repl [here](https://repl.it/@Giridharhackclu/firebase-database-starter). It contains a [create-react-app](https://github.com/facebook/create-react-app) and [firebase](https://www.npmjs.com/package/firebase) installed. The starter-template contains all the styles required, so that we can concentrate on React and Firebase. Click the `RUN` button to check your template. You should see something like this.

![Repl](https://cloud-3a2lu9qq3.vercel.app/1screenshot_2020-11-09_160050.png)

If you prefer to use local code-editor install both of them manually through terminal.

Use `npx create-react-app` command in CLI to create a react project. Give it a name.

```javascript
npx create-react-app firebase-database
```

After installing create-react-react, navigate into the folder and install firebase.
```js
cd firebase-database
npm install --save firebase
```

### Creating Firebase project

You can access [Firebase](https://firebase.google.com/) with your [Google account](https://myaccount.google.com/). After signing in, click the `Go to console`  on top right corner.

![Firebase](https://cloud-m3srogzel.vercel.app/0screenshot_2020-11-10_101346.png)

Then in your console, If you don't have any projects yet, it will be clean and empty. Click on `Create project` to add a new project.

![Console](https://cloud-1swt5hmba.vercel.app/0screenshot_2020-11-09_222607.png)

Complete all the steps to create a firebase project. Name your project as you wish.

![Step-1](https://cloud-1swt5hmba.vercel.app/1screenshot_2020-11-09_222741.png)

Here is an optional step where you can use Google Analytics for your project, but in this workshop, you won't need it. After giving a name to your project click the continue button to proceed further.

![Step-2](https://cloud-1swt5hmba.vercel.app/4screenshot_2020-11-09_224518.png)

If you use Google Analytics for your project, then configure it to `Default Account for Firebase`. 

![Step-3](https://cloud-1swt5hmba.vercel.app/2screenshot_2020-11-09_223126.png)

Click on `Create Project` to finsh setting up your project. After project was created you will see something like this.

![Project setup](https://cloud-axyxh81oj.vercel.app/0screenshot_2020-11-10_122542.png)

Then hop on to repl.it and start coding.

## Part-1

### Create a form

Now we are going to create a form to get the input from the user. 

We can say that forms in HTML are slightly different from that are in React. The form elements like `<input />`, `<select />`, `<textarea />` are responsible on their own to handle the user input and update their respective values. But in React, the forms are controlled by components using `state`.
Learn more about React forms [here](https://reactjs.org/docs/forms.html).

Now navigate to `App.js` file, and create a `<form>`  with two `<input>` elements for `Name` and `Email` with respective labels, and a `Submit` button.

```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <h1>Form</h1>
        <label type="Name: ">
        <input type="text" placeholder="Your Name" />
        </label>
        <label type="Email: ">
        <input type="email" placeholder="Your Email" />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}

export default App;
```

Click `Run` button and check your output. All the styles are prewritten. Don't wonder to see this output.

![form output](https://cloud-naxgpvrzh.vercel.app/0screenshot_2020-11-10_121610.png)

### Handling the form

Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state. You can control changes by adding event handlers in the `onChange` attribute.

Let's create two state variables each for name and email. 

Don't forget to import `useState` hook from react to use `state`.

```jsx
import React, { useState } from 'react';     //<----------- useState hook is imported here
import './App.css'

function App(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  return(
  //all the previous code
  )
}
```
  
Now add an event handler in the `onChange` attribute, and let the event handler update the state everytime you enter a letter. 

```jsx
// all the previous code
  return(
    <div className="container">
      <form>
        <h1>Form</h1>
        <label type="Name: ">
        <input 
          type="text" 
          value={name} 
          onChange={handleName}         //<--------------  event handler
          placeholder="Your Name" 
        />
        </label>
        <label type="Email: ">
        <input 
          type="email" 
          value={email} 
          onChange={handleEmail}          //<------------- event handler
          placeholder="Your Email" 
        />
        </label>
        <button> Submit </button>
      </form>
    </div>
  )
 ```

Also create `handleName` and `handleEmail` for updating state with values of respective inputs.

```js
// for handling name
function handleName(e) {
  setName(e.target.value)
}
// for handling email
function handleEmail(e) {
  setEmail(e.target.value)
}
```

At this stage our `App.js` looks like this.

```jsx
import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // for handling name
  function handleName(e) {
    setName(e.target.value)
  }
  // for handling email
  function handleEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <div className="container">
      <form>
        <h1>Form</h1>
        <label type="Name: ">
        <input 
          type="text" 
          value={name} 
          onChange={handleName} 
          placeholder="Your Name" 
        />
        </label>
        <label type="Email: ">
        <input 
          type="email" 
          value={email} 
          onChange={handleEmail}
          placeholder="Your Email" 
        />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
}

export default App;
```

### Submitting Forms

You can control the submit action by adding an event handler in the `onClick` attribute. Create a function `handleSubmit`. Let's first print the form data in `console`. Then after submission, clear the inputs.

```javascript
// for submitting form
function handleSubmit(e){
    console.log(name, email)      //<----------- to print form data in console
    setName("")
    setEmail("")
    e.preventDefault()
  }
```

Here, we prevented the default behaviour of the form using [preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method.

Call it inside `onClick` event attribute of button.

```jsx
<button onClick={handleSubmit} > Submit </button>
```

<details>
<summary>The final `App.js` so far looks like.</summary>
  
```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // for handling name
  function handleName(e) {
    setName(e.target.value)
  }
  
  // for handling email
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  
  // for handling submit
  function handleSubmit(e){
    console.log(name, email)
    setName("")
    setEmail("")
    e.preventDefault()
  }

  return (
    <div className="container">
      <form>
        <h1>Form</h1>
        <label type="Name: ">
        <input 
          type="text" 
          value={name} 
          onChange={handleName} 
          placeholder="Your Name" 
        />
        </label>
        <label type="Email: ">
        <input 
          type="email" 
          value={email} 
          onChange={handleEmail}
          placeholder="Your Email" 
        />
        </label>
        <button onClick={handleSubmit} > Submit </button>
      </form>
    </div>
  );
}

export default App;
```
</details>

Click `Run` button and check the output. Let's first `console.log` the value of inputs. If you get the value of inputs in the console, then you are good to go.

![Submitting data](https://cloud-d4dcm2tr0.vercel.app/0ezgif.com-gif-maker__6_.gif)

Now that we have a form for adding data to database.

That means front-end part completed. 

![Good job](https://cloud-ac5q22xg1.vercel.app/0good_job.gif)

## Part-2

### Creating Database

Now open the [firebase console](https://console.firebase.google.com) you left before and open the current project folder. We can use firebase for different platforms. But for now, we are going to use it for `web(</>)`. Click on `</>` button. You will see something like this.

![Console](https://cloud-j3vz1auk3.vercel.app/0ezgif.com-gif-maker__7_.gif)

Then give your app a name. I'm going to give this name.

![Add name](https://cloud-4zt4ppz2y.vercel.app/0screenshot_2020-11-10_145514.png)

Click on `continue`. Then you will get `Firebase SDK` data. Every user have their own `API` key and Id. Copy the code in the `<script>`. This contains the data to access your firebase.

![SDK Data](https://cloud-4zt4ppz2y.vercel.app/1screenshot_2020-11-10_145822.png)

### Configuring Project with Firebase

Hop on to your code editor(repl) and create a new file in `src` folder. Name it as `Firebase.js`. Then import the `firebase` module, which is already installed and paste the data you copied from firebase. Your `Firebase.js` file will be like this with your information.

```javascript
import firebase from 'firebase'     //<--------------- importing firebase 

const firebaseConfig = {
  apiKey: "AIzaSyAcg8MxG_vX65Vfh2fAoH9tuyHUn85JqNQ",
  authDomain: "test-form-f2df9.firebaseapp.com",
  databaseURL: "https://test-form-f2df9.firebaseio.com",
  projectId: "test-form-f2df9",
  storageBucket: "test-form-f2df9.appspot.com",
  messagingSenderId: "684489897467",
  appId: "1:684367456467:web:7fff9d88d6accf5426ae0e",
  measurementId: "G-YV81RWDHS5"
};

var fireBase = firebase.initializeApp(firebaseConfig)     //<--------------- initialising firebase
export default fireBase
```

This is for configuring firebase with our React project. Now let's create a realtime database on firebase. Go back to to your firebase console and click the `Realtime Database` on the sidebar.

![Sidebar](https://cloud-2zamqusnb.vercel.app/0screenshot__3__li.jpg)

Then Click on `Create Database`.

![Create Database](https://cloud-4zhtbdxo9.vercel.app/0screenshot__4__li.jpg)

Make sure you create it in `Test Mode`, since we are just learning.

![Test Mode](https://cloud-bugaglghj.vercel.app/0screenshot_2020-11-10_153651.png)

Then your realtime database will be initiated with `null`(means, nothing in it).

![Database](https://cloud-bugaglghj.vercel.app/1screenshot_2020-11-10_153751.png)

The rules here are important. Initially firebase allows anyone to read and write data in database upto 30 days. You can change the settings at any time in the `Rules` tab.

Now we created the database and configured it with our project. Then let's add data through the form.

## Part-3

Before adding data to our firebase, let's first understand how data is structured in firebase.

### How is data organised in Firebase?

Data in Firebase is orgainsed in tree like structure using [JSON](https://www.w3schools.com/js/js_json_intro.asp)(JavaScript Object Notation).

All Firebase Realtime Database data is stored as JSON objects. You can think of the database as a cloud-hosted JSON tree. Unlike a SQL database, there are no tables or records. When you add data to the JSON tree, it becomes a node in the existing JSON structure with an associated key. You can provide your own keys, such as user IDs or semantic names, or they can be provided for you using `push()`. Learn more about Firebase data [here](https://firebase.google.com/docs/database/web/structure-data?authuser=0).

You can access nodes of data using references - `firebase.database.ref()` 

Now `import` your `Firebase.js` component into your app component.

```javascript
import React, { useState } from 'react';
import './App.css';
import fireBase from './Firebase';       // <------------------ importing Firebase configuration

// All the previous code 
```

In the `handleSubmit` create a reference called `form-data` in the database. Now we have to use the `push()` method to add the data into database. We can set the values to be pushed using `set()` method. 

>
 
