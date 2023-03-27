# Tech-Blog

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Questions](#questions)

## Description

The purpose of this project was to create a cite where develpers can puplish and comment articles.

## Code Examples
Example of Code used to add styling rules to sign up:

```js
signupbtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const display_name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-pw').value.trim();

  const response = await fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({
      displayName: display_name,
      email,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

```

## Important Links
[GitHub Repository](https://github.com/keekerr/Tech-Blog)

[Deployed Application](https://desolate-harbor-29342.herokuapp.com/)

## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)
