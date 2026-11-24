describe('Student Login', () => {
  beforeEach(() => {
    cy.visit('/cpress/login.html');
  });

  it('allows a student to log in with valid credentials', () => {
    cy.get('#username').type('student1');
    cy.get('#password').type('Password123');
    cy.contains('button', 'Login').click();

    cy.get('#message')
      .should('have.text', 'Login successful');
  });

  it('rejects invalid credentials', () => {
    cy.get('#username').type('student1');
    cy.get('#password').type('wrongpassword');
    cy.contains('button', 'Login').click();

    cy.get('#message')
      .should('have.text', 'Invalid credentials');
  });
});
