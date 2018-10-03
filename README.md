# Angular Craft Vault

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Structure <a id="structure"></a>

We are using a project structure that allows to better keep our application as modular as possible, with components preserving independence, and services that can be injected into any of these components as singleton instances. `index.ts` files are kept for better exporting/importing several components/directives, guards, classes, interfaces, helpers, etc.

  - src
    - app
      - classes/
      - components/
        - dashboard/
          - dashboard.component.html
          - dashboard.component.scss
          - dashboard.component.ts
          - index.ts
        - footer/
        - header/
        - login/
      - directives/
        - alert/
          - alert.component.html
          - alert.component.ts
        - index.ts
      - guards/
        - auth.guard.ts
        - index.ts
      - helpers/
        - error.interceptor.ts
        - fake-backend.ts
        - index.ts
        - jwt.interceptor.ts
      - models/
        - user.ts
        - index.ts
      - services/
        - alert/
          - alert.service.ts
        - authentication/
          - authentication.service.ts
        - notification/
          - notification.service.ts
        - index.ts
      - app-routing.module.ts
      - app.component.html
      - app.component.scss
      - app.component.spec.ts
      - app.component.ts
      - app.module.ts
    - assets/
      - fonts/
      - icons/
      - images/
      - keen-tracking-1.1.3.min.js
    - environments/
      - environment.prod.ts
      - environment.ts
    - vendorStyles/
      - _variables.scss
      - footer-main.scss
      - ...
    - index.html
    - polyfills.ts
    - styles.scss
    - ...
- package.json
- ...

Within each component named folder, we have a template (`.html`), the styles that pertain to that very component (`.scss`), the component logic (`.ts`), and tests are engouraged to be added in `.spec.ts` files.

We are using Sass instead of traditional CSS because of the obvious advantages of using variables, scoping classes better, adding reusable mixins, etc. Webpack does all the heavy lifting for us here.

Angular 2+ provides lazy-loading through Webpack as well, which means that we could enjoy the benefits of just loading what we need for any given component. Components are entities or their own.  When you use a component in a template you have to pass information to them. You can inject services in their constructors. Promises can be used inside components, but `observables` are highly preferred. 

Observables can be divided between finite and infinite. Common finite observables are API-calls responses. On the other hand, Angular 2+ uses a type of PubSub communication model between events, meaning that a component fires an event, and some other(s) component(s) might be listening to this event through a Subscription. These are the type of observables that are infinite. We should make sure to unsubscribe from infinite observables when we destroy a component to avoid memory leaks in our application. To better accomplish this, a `base-component.ts` class has been provided. This class should be extended by any component where we might need to subscribe to infinite observables. The class keeps a list of these subscriptions, and during the component's `OnDestroy` life-cycle hook, iterates though the list unsubscribing from them. The class also prepares the component for garbage collection and adds a `trackByFn` function to improve performance when we may need to track every record on `*ngFor` loops.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
