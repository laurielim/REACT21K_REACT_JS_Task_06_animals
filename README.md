# Animals

This React App was created as the 6th task for React.js as part of the Full Stack Web Development Program at [Business College Helsinki](https://en.bc.fi/qualifications/full-stack-web-developer-program/).

## Technologies used

Built with:

- HTML
- JS
- CSS
- Reactjs

## Setup and usage

Inside a cloned directory/folder, run:

```bash
npm install
npm install axios
npm install react-router-dom
```

## Acknowledgment

Mentor: Margit Tennosaar

- GitHub @margittennosaar
- [LinkedIn](https://www.linkedin.com/in/margittennosaar/)

### Instructions

In this task use ONLY function components, axios and hooks useState and useEffect.

1. Get yourself a base app (https://github.com/margittennosaar/animals). You can reuse some previous apps or create a new project which is containing components for Header, Main and Footer.
2. Add new function component Weather which is displayed inside the Header component.
3. Create a user to yourself in http://api.weatherstack.com/current and receive a personal access key.
4. Use Access key and get data about current weather in Helsinki. Note! Do not hardcode your key into code. Use an environment variable to save and hide the key.
5. Use Animal.json from https://public.bc.fi/tenma/animals.json and set up local json-server which is running on localhost:3001
6. Make three new function components AnimalsList, AnimalCard and NewAnimal.
   1. **AnimalsList** is the parent component for AnimalCard and NewAnimal components. It contains a list of all animalswhich you GET from animal.json. Map results using AnimalCard component.
   2. **AnimalCard** component is presentational component for one card only. Display name, class, description, image and “read more” link. Limit description to max 15 words.
   3. **NewAnimal** is a form where you can enter and POST new animals to animal.json. For form use correct inputs, select with different options and textarea for description.

Today you practiced new hooks andgetting and posting data with axios. Well done!
