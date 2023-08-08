# Books app

This is an angular app to view and add books to a collection.

The project uses nx monorepo setup, NGRX state management, cypress + cucumber for BDD scenarios and tests, and jest for unit test.

It also includes a mock backend using json-server. Using `proxy.conf.json` to proxy the `:4200/api` requests to `:3000/`

To get started run

`npm install`

We'll need a few terminal tabs to get started.

First we want the mock database running:

`npm run db:serve`

In a new terminal we can run the angular app with

`npm start`

Another option for a better development experience

`nx run e2e:e2e --watch=true`

This will also start cypress and the app runs in watchmode accessible at http://localhost:4200.

For the CRUD operations on the book entities I opted for ngrx/data while client only state is handled without ngrx/data

For unit tests:

`npm run test`

Highly recommend using wallaby.js in your IDE for continous feedback on tests.

I have setup a few BDD scenarios for e2e testing. And jest for unit tests. Coverage of unit tests is a bit light at the moment.
