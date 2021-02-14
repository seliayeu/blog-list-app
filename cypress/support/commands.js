// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('createBlog', (blog) => {
  cy.request({
    url: 'http://localhost:8080/api/blogs',
    method: 'POST',
    body: { ...blog },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('loggedBlogUser')).token}`
    }
  })
  cy.visit('http://localhost:8080')
})

Cypress.Commands.add('likeBlogFirst', (blog) => {
  cy.contains(blog.title).parent().contains('show').click()
  cy.contains(blog.title).parent().contains('like').click()
})
Cypress.Commands.add('likeBlog', (blog) => {
  cy.contains(blog.title).parent().contains('like').click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.request('POST', 'http://localhost:8080/api/login', {
    username, password,
  }).then(response => {
    localStorage.setItem('loggedBlogUser', JSON.stringify(response.body))
    cy.visit('http://localhost:8080')
  })
})

