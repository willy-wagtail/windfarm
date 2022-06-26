# Windfarm

This is the Pexaparks technical test. The requirements are copied into REQUIREMENTS.md

### Backend

I assume there is a backend with two endpoints below.

- api/windfarms 
    - returns list of windfarms
- api/windfarms/\*id\*/readings?fromDate=\*&toDate=\*
    - returns array of HOURLY windfarm meter readings for a single windfarm

I use Angular's Http Interceptor to intercept these calls and return mocks.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
