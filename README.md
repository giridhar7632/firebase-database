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

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are more complex they are often developed using formal design and modeling techniques.

### Database as a service

![Database as a service](https://cloud-l2ccvbjwj.vercel.app/2screenshot_2020-11-09_221151.png)

Database as a service (DBaaS) is a cloud computing managed service offering that provides access to a database without requiring the setup of physical hardware, the installation of software or the need to configure the database. 

### Firebase

<img src="https://cloud-1swt5hmba.vercel.app/5firebase_realtime_database__1-_icon__dark_.png" alt="Firebase REaltime Database" width="200px" height="auto"/>

The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client. We can store and sync data across all clients in realtime, and remains available when your app goes offline. 

In this workshop, we will create a form, which stores data into firebase realtime database, when submitted, using [React](https://reactjs.org). 

## Setting up..

### Code editor

We will be using [Repl.it](https://repl.it) for building our project. Repl.it is a online code editor, where you can code in many different languages without any installations.

Fork this starter repl [here](https://repl.it/@Giridharhackclu/firebase-database-starter). It contains a [create-react-app](https://github.com/facebook/create-react-app) and [firebase](https://www.npmjs.com/package/firebase) installed. The starter-template contains all the styles required, so that we can concentrate on React and Firebase. Click the `RUN` button to check your template. You should see something like this.

![Repl](https://cloud-3a2lu9qq3.vercel.app/1screenshot_2020-11-09_160050.png)

If you prefer to use local code-editor install both of them manually through terminal.

```javascript
npx create-react-app firebase-database
// after installation
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

![Step-2](https://cloud-1swt5hmba.vercel.app/4screenshot_2020-11-09_224518.png)

![Step-3](https://cloud-1swt5hmba.vercel.app/2screenshot_2020-11-09_223126.png)

After project was created you will see something like this.

![Project setup](https://cloud-axyxh81oj.vercel.app/0screenshot_2020-11-10_122542.png)

Then hop on to repl.it and start coding.

## Part-1

### Create a form

Now we are going to create a form to get the input from the user. Now we can say that forms in HTML are slightly different from that are in React. The form elements like `<input />`, `<select />`, `<textarea />` are responsible on their own to handle the user input and update their respective values. But in React, the forms are controlled by components using `state`. Learn more about React forms [here](https://reactjs.org/docs/forms.html).

Go to `App.js` file, and create a `<form>`  with two `<input>` elements for Name and Email along with label, and a `Submit` button.

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

![output](https://cloud-naxgpvrzh.vercel.app/0screenshot_2020-11-10_121610.png)

### Handling the form
Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM. In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state. You can control changes by adding event handlers in the `onChange` attribute.

Let's create two state variables each for name and email. Now add an event handler in the `onChange` attribute, and let the event handler update the state everytime you enter a letter. Also create `handleName` and `handleEmail` for updating values of respective inputs.

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


