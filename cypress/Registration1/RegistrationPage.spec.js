class RegistrationPage{
elements = {
    firstNameInput: () => cy.get("#FirstName"),
    lastNameInput: () => cy.get("#LastName")
}
typeFirstName(FirstName){
this.elements.firstNameInput().clear().type(FirstName)
}
 
typeLastName(LastName){
    this.elements.lastNameInput().clear().type(LastName)
}

}

module.exports = new RegistrationPage()