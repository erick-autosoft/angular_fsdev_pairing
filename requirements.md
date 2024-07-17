# Requirements

## Task 1 - Troubleshooting

1. Figure out why the title component is not showing up in app.component.html

## Task 2 - Make a component

1. build a component that displays your first and last name on the main level of the application under title component

## Task 3 - Routing

1. Build a route that displays the login page first

## Task 4 - Make a Service

1. build a service that authenticates a user with a password
2. simple auth with hard coded password is ok
3. return true or false for isAuthenticated

## Task 5 - Make a guard

1. build a guard that allows access to all components if user is isAuthenticated
2. if user is not authenticated should redirect back to login page

## Task 6 & 7 - RxJs & Object mutations & Troubleshooting

1. Using rxjs rework getAsycData to return testDescription property in the form of the TestAsyncString model.
2. add a route to get to async-component
3. why isn't the data displaying data in the list?

## Task 8 - New Feature - Microsofts favorite repo

1. Build a new feature module
2. build a serivce to connect to Microsofts github account
   1. Sort the repo's high to low and return the max repo with the most stars
3. Add a component to display the favorite repo in H3 tag
4. implement lazy loading for the route
5. Make this component the component that displays after the user authenticates
