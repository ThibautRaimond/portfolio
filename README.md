# Thibaut Raimond Portfolio

Professional portfolio built with React and Tailwind CSS, designed to showcase my profile, skills, projects, and expertise in digital accessibility.

The site emphasizes smooth navigation, polished page transitions, and careful attention to accessible content, including a dedicated accessible CV page and a PDF generation script.

## Overview

- Live site: https://thibautraimond.github.io/portfolio
- Purpose: highlight the profile of a digital accessibility consultant and front-end developer
- Target audience: recruiters, clients, product teams, design teams, and development teams

## Features

- Home page with a concise introduction
- Profile page describing the career path and professional positioning
- Skills page focused on technical capability and accessibility expertise
- Projects page to present completed work
- Contact page
- Dedicated accessible CV page
- CV download via a Node.js script
- Animated page transitions with Framer Motion
- SEO metadata managed with React Helmet

## Tech stack

- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- React Helmet
- Puppeteer
- pdf-lib

## Project structure

```text
src/
	components/      Structural and navigation components
	pages/           Main portfolio pages
	assets/          Images, PDF, and static assets
scripts/
	generateAccessibleCvPdf.js   Accessible CV PDF generation
public/            Static public files
build/             Production build output
```

## Run locally

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

The app is then available at http://localhost:3000.

## Available scripts

### `npm start`

Starts the development server with hot reload.

### `npm run build`

Builds the app for production into the `build/` folder.

### `npm run deploy`

Builds the app and deploys it to GitHub Pages.

### `npm run test`

Runs tests using the Create React App test environment.

### `npm run generate-cv-pdf`

Generates the accessible CV PDF using the project’s Node.js script.

## Accessibility

This portfolio follows a digital accessibility-first approach.

Key accessibility elements included in the project:

- clear navigation structure
- accessible labels and alt text where needed
- identifiable external links
- dedicated accessible CV page
- PDF generation with metadata and specialized post-processing

## Deployment

The project is configured for deployment on GitHub Pages using the `homepage` field in `package.json` and the `deploy` script.

Run:

```bash
npm run deploy
```

## Author

**Thibaut Raimond**  
Digital Accessibility Consultant

- LinkedIn: http://www.linkedin.com/in/thibaut-raimond-0a46791ab
- GitHub: https://github.com/ThibautRaimond

## License

This project is presented for professional and demonstration purposes.