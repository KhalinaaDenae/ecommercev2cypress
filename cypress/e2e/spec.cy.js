// product.spec.js
describe('Product Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Displays the product image correctly', () => {
    cy.get('.product-image').should('be.visible');
  });

  it('Product name is clickable and leads to the correct product page', () => {
    cy.get('.product-name').should('be.visible').click();

    // Assuming the product page URL follows the pattern '/product/:id'
    cy.url().should('match', /\/product\/[a-zA-Z0-9]+$/);
  });

  it('Displays the product price correctly', () => {
    cy.get('.product-price').should('be.visible').contains('$');
  });

  it('Contains the expected class name', () => {
    cy.get('.product-card').should('have.class', 'product-card');
  });
});
