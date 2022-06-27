# Windfarm

This is the Pexaparks technical test. The requirements are copied into REQUIREMENTS.md

## Deployment

App is deployed to Vercel from git. Visit it at https://windfarm.vercel.app/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Discussion

### Backend

I assume there is a backend with two endpoints below.

- api/windfarms 
    - returns list of windfarms
- api/windfarms/\*id\*/readings?fromDate=\*&toDate=\*
    - returns array of HOURLY windfarm meter readings for a single windfarm. (The requirements doc says these are stored in a DB).

I use Angular's Http Interceptor to intercept these calls and return mocks. I have added a 1 second delay to each call to mimick network latency.

### Services

Following the "Onion" architecture, I created layers of services with defined responsibilities.

- Services in "app/services/http" only deal with calling backend. 

- The next layer, we have the app-wide services that are in app/services but NOT in app/services/ui. These deals with non-view business logic, perhaps caching, data transformation, that kind of thing.
    - E.g. WindfarmService.getIndexedMeterReadings$ - transforms backend data/DTOs to a day and hour indexed data structure so I don't have to iterate through the data too much.

- Last layer, we have the /services/ui layer, which adapts the app-wide services to exactly what the UI needs.
    - These are injected into the "smart" components - e.g. the CapacityFactorComponent. Generally I have one service per "smart" component, but depends.
    - UI components are lazy loaded, so these are tree-shakeable with the providedIn method of declaring the service.

### View

- AppComponent layer deals with general app-level layout, and has the router-outlet to launch the routed feature components under /page folder.

- the /pages folder contains the large feature areas of the app. These are their own Angular modules and are routed to from the App router, and lazy loaded.

- the /shared folder contains components which are shared. In Angular v14, we can create standalone components where they are their own modules. This is what I used here for the icons and spinner.

### Layout

- I used TailwindCSS mainly because it has a basic design system (such as pre-defined padding and margin spacings, fonts, colours etc) that reduces the number of decisions I had to make. The utility classes are also handy.

- I use the CSS grid area feature for app-level layout even though it is 2-D, and may intuitively suit flex more. The reason is it's likely an app like this will have a sidebar for navigating between feature areas, so defining grid areas allows us to easily scale this without rethinking the layout approach.

- Other layout is done using flex.

### Type-safety

Angular uses strict TypeScript by default.

- Data from backend is external and unknown. TypeScript only gives strict type-safety at compile time, so I like to add type-guards at this the HTTP service layer to guarantee run-time type-safety of data coming into the app.  There are libraries that help, but I wrote my own type-guards in each /model class and wrote a function in /util to check it.

- Same for data emitted by browser events. Typeguards are used to make sure they are as we expect, and force us to handle each case.

- I used union types and typeguards to make sure every code path is covered, and impossible state is unrepresentable. Example is in WindfarmDateRangeForm.ts

### Suggestions for improvement

- Some missing tests - ran out of time!

- Some of the meter reading's logic is perhaps better lived in the backend and served up to the UI. Things such as the capacity factor calculations, daily electricity produced per windfarm, and so on. This is so that if another backend service requires it (perhaps a Machine Learning team), then the logic isn't written in two places. 

    - Also, if floating point precision matters, then calculations are a concern for the UI. Explore using BigInt, or libraries like bigdecimal js, or just doing it in backend.

- Backend data, such as list of windfarms, and meter readings are not subject to change, and can be aggresively cached, either using a service with rxjs subjects, angular/pwa setup with service workers, or other means. Ideally backend caching too.


- if extended table features are required, I have used AgGrid in the past which has extensive table features, even things like Pivot tables. It does have a large ramp-up and learning curve if new to it though.

- in the smallest screen sizes, consider reducing number of columns in the table to only what is required.

- Add e2e testing.
- Add eslint and prettier setup, husky to run these prepush/pre-commit