# Intro To Serverless Functions

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/serverless-functions/

## Intro & Overview

- No, it does not mean no servers. Most server setups, configs, boilerplates etc.. are handled by a third party instead.
- I need a server but I don't want to deal with a server. This is where serverless functions come in handy.
- We send our business logics to our server provider and they deal with the mundane server stuff.
- You get the benefits of a server without the headaches of managing them.
- This course will look at:

  1.  How to load data using serverless functions.
  2.  Protect private credentials in the front end.
  3.  How to send data to serverless functions.
  4.  How to save data sent to serverless functions.
  5.  How to limit access to serverless functions.

- Use `netlify dev` command to boot up project. (Make sure the cli is installed as a global dependency.)
- Serverless functions are not part of the frontend. They are an entirely separate app.
- Many providers offer serverless functions features. In this course, we will go with Netlify.
- The course will eleventy as the SSG. https://www.11ty.dev/

## My own notes

<details>
  <summary>Serverless Functions</summary>

- In `netlify.toml`, you need to specify where your serverless functions will be served.
- In your serverless functions files, you will need to export a constant called `handler` and then store your business logic inside.
- See `src/functions/boop.js` for bare minimum requirement for a serverless function.
- In local dev, you can test the output of your serverless function on the path `/.netlify/functions/${your-function-filename}`
- <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template' target='_blank'>See here</a> for template tag usage.
- See `src/functions/echo.js` for an example of using query string parameters.
- <a href='https://docs.netlify.com/functions/overview/' target='_blank'>Docs here</a> for serverless functions.
</details>
