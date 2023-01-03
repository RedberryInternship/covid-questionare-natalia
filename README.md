<h1>Covid Questionaire</h1>
<p>Covid Questionaire is a platrom for Redberry's new employees. It helps Redberry's team to get information about employees' oppinions on covid19.
Survey contains 6 pages.</p>
<p>Production URL: <a href="https://covid.nataliac.redberryinternship.ge/" target="_blank">https://covid.nataliac.redberryinternship.ge/</a></p>

<section>
<h2>Table of Contents</h2>
<ul>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#resources">Resources</a></li>
</ul>
</section>

<section id="prerequisites">
    <h2>Prerequisites</h2>
    <ul>
        <li> npm</li>
    </ul>
</section>

<section id="tech-stack">
    <h2>Tech Stack</h2>
    <ul>
        <li><a href="https://reactjs.org/" target="_blank">ReactJS @18.2.0</a> - Front-end library</li>
        <li><a href="https://reactrouter.com/" target="_blank">React router dom @6</a> - Routing library</li>
        <li><a href="https://react-hook-form.com/" target="_blank">React hook form @7</a> - Form validation library</li>
        <li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS @3</a> </li>
    </ul>
</section>

<section id="getting-started">
    <h2>Getting Started</h2>
    <ol>
        <li>Clone Covid Questionaire repository from GitHub:</li>
        <pre>git clone https://github.com/RedberryInternship/covid-questionare-natalia.git</pre>
        <li>Install dependencies:</li>
        <pre>npm install</pre>
        <li>Run application:</li>
        <pre>npm run dev</pre>
    </ol>
</section>

<section id="deployment">
    <h2>Deployment</h2>
    For deployment,
    <ol>
        <li>Create Build directory with a production build by running:<pre>npm run build</pre></li>
    </ol>
</section>

<section id="project-structure">
    <h2>Project Structure</h2>
    <pre>
.eslintrc.json
.gitignore
.prettierrc.json
index.html
jsconfig.json
package-lock.json
package.json
postcss.config.cjs
public
   |-- fonts
   |   |-- bpg-arial-caps-webfont.ttf
   |   |-- bpg_arial_2009.ttf
   |-- logo.png
src
   |-- App.css
   |-- App.jsx
   |-- assets
   |   |-- images
   |-- components
   |   |-- Form
   |   |   |-- BookVaccinationNotification.jsx
   |   |   |-- Buttons.jsx
   |   |   |-- DateInput.jsx
   |   |-- Icons
   |   |   |-- index.js
   |   |   |-- left-arrow.jsx
   |   |   |-- right-arrow.jsx
   |   |-- Layout
   |   |   |-- Layout.jsx
   |   |   |-- index.js
   |   |-- index.js
   |-- context
   |   |-- FormProvider.jsx
   |   |-- index.js
   |-- index.css
   |-- main.jsx
   |-- pages
   |   |-- AdvicePage
   |   |   |-- Advice.jsx
   |   |-- CovidQuestionairePage
   |   |   |-- CovidQuestionaire.jsx
   |   |-- PersonalInfoPage
   |   |   |-- PersonalInfo.jsx
   |   |-- index.js
tailwind.config.cjs
vite.config.js
</section>

<section id="resources">
    <h2>Resources</h2>
    <ul>
        <li>Application URL: <a href="https://covid.nataliac.redberryinternship.ge" target="_blank">"https://covid.nataliac.redberryinternship.ge/</a></li>
    </ul>
</section>
