
# 🦸 Super Hero DB - Angular App

An Angular project that displays a list of superheroes with search functionality, power stats, and detailed hero pages.

## 🚀 Features
- 🔍 **Search for heroes** dynamically
- 📊 **View hero power stats** in progress bars
- 🖼️ **Hero images displayed**
- 📄 **Detailed hero pages** with biography & abilities
- ⚡ **Real-time filtering** using RxJS
- ✅ **Tested with Jasmine & Karma**

# 📥 Installation
Clone the repository:
```bash
git clone https://github.com/yourusername/super-hero-db.git
cd super-hero-db
npm install

#Running the Project
ng serve 

#Running the tests
ng test

#⚙️ API Used
https://akabab.github.io/superhero-api/api


#🎯 Search Feature (TDD)
This project follows Test-Driven Development (TDD) for the search functionality.
Key test cases:

✅ Display all heroes initially
✅ Filter heroes when searching "dead"
✅ Ensure case insensitivity ("DEAD" matches "dead")
✅ Reset results when search is empty
✅ Show no results if no match found


# SuperHeroDB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


