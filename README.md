![Banner](https://my-cupcake-ui-001.netlify.app/banners/01-cupcake-ui-banner.png)

# Cupcake UI

A design system for a fintech startup that is changing the world.

## Screenshots

- Storybook home page

![Storybook home page](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/01-storybook-home-page.png)

- Atomic design: stories

![Atomic design: stories](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/02-atomic-design-stories.png)

- Combobox storybook: default

![Combobox storybook: default](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/03-combobox-storybook-default.png)

- Combobox storybook: open

![Combobox storybook: open](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/04-page-storybook-open.png)

- Combobox storybook: select

![Combobox storybook: select](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/05-page-storybook-select.png)

- Combobox storybook: search

![Combobox storybook: search](https://my-cupcake-ui-001.netlify.app/screenshots-storybook/06-page-storybook-search.png)

## Tech Stack

**Client:** Typescript, React, React hooks, React Router, TailwindCSS, Storybook

**Server:** Vite.js

## Storybook

- [Storybook: Github Page](https://alxmcr.github.io/cupcake-ui/?path=/docs/organisms-combobox--docs)
- [Cupcake UI - Storybook at Chromatic\*](https://66b1bf8878373c966dd1bcab-glgfaoymye.chromatic.com/?path=/docs/configure-your-project--docs)

(\*) Chromatic: you need to create an account at [chromatic.com](https://www.chromatic.com/)

## Publish package

- GitHub package

![GitHub package](https://my-cupcake-ui-001.netlify.app/screenshots-publish-package/01-github-package-published.png)

- NPM package

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` or `.env.local` file: `VITE_APP_PORT`

**For example:**

`VITE_APP_PORT=7012`

## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/cupcake-ui
```

Go to the project directory

```bash
  cd cupcake-ui
```

Install dependencies

```bash
  npm install
```

Start the storybook server

```bash
  npm run storybook

  # http://localhost:6006/
```

Start the development server

```bash
  npm run dev

  # http://localhost:<your_port>/
```

`<your_port>`: on enviroment variables (`.env`, `.env.local`).

## Using Cupcake UI: ComboBox

1. Create a React app with Typescript

```bash
npm create vite@latest

// Project name: app-pastelito
// other settings
```

2. Install NPM package: `cupcake-ui`

```bash
npm install cupcake-ui
```

3. Create a component on your React app

```
import { ComboBox } from 'cupcake-ui';

export default function Box() {
  return (
    <div>
      <ComboBox
        options={[
          {
            id: "a1b2c3d4",
            text: "Alice Johnson",
            value: "a1b2c3d4",
          },
          {
            id: "e5f6g7h8",
            text: "Carlos Martinez",
            value: "e5f6g7h8",
          },
        ]}
      />
    </div>
  );
}
```

4. Start your dev server

```bash
npm run dev

// http://localhost:5173
```

![Box component with your ComboBox](https://my-cupcake-ui-001.netlify.app/screenshots-using/01-using-combobox.png)

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to us at amcocarojas@gmail.com.
