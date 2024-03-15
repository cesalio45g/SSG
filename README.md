# SSG

POM Login Demo

# Timestamp Submitted

approximately: March 14, 2024 8:30 PM EST

# Description

A Cypress automated script that logs into the "practice" website. The solution called for a Page Object Model (POM) format
which I used and can be viewed under the ./cypress/e2e/PageObjectModel directory.

# Login POM

Login directory contains testing files that test the actual functionality of the login:

1. Valid Login
2. Invalid Username
3. Invalid Password

I ignored validating items of the page, as that was out of scope.
I did validate that when logging in and logging out I was redirected correctly by the application
I did validated error messages for each invalid login

# Footer POM

Extra credit - this is just to show how POM can be used for other parts of the application like the footer.
Though no FooterPageActions.js file was created, we do have a FooterPageElements.js file.

1. Validate title of footer
2. Validated version and copyright

# Secure POM

I did need to create a "Secure" POM - because that allowed me to log out of the application for test #1, and to continue with Test #2, #3

# Security

I did use Cypress environment variables to hide username/password details - in a real scenario these would have to be hidden (a necessity)
and showing the development team that it can be done in Cypress was important to me.
It also allows the development team to see that cypress can read CI/CD secrets from GitHub and use them in the test automation
This not only proves that environment variables can be used for logins but for different environments, Dev/Staging/Prod

# Reporting

I installed Cypress-Mochawesome-Reporter for reports being rendered in HTML (locall use)
GitHub has it's own reporting - that I configured ".github/workflows/ssg-cypress-tests.yml" From the repository:

1. you can see failed tests, reports and their artifacts
2. you can see passes tests, reports and their artifacts
