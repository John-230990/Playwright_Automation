import {Page,Locator} from '@playwright/test'
 export class RegistrationPage
  {
     private page:Page
     private  firstname:Locator
     private lastname:Locator
     private address:Locator
     private city:Locator
     private state:Locator
     private zipcode:Locator
     private phonenumber:Locator
     private ssn:Locator
     private username:Locator
     private password:Locator
     private confirm:Locator
     private registerbutton:Locator

     constructor (page:Page)
     {
         this.page=page
         this.firstname=page.locator("//input[@id='customer.firstName']")
         this.lastname=page.locator("//input[@id='customer.lastName']")
         this.address=page.locator("//input[@id='customer.address.street']")
         this.city=page.locator("//input[@id='customer.address.city']")
         this.state=page.locator("//input[@id='customer.address.state']")
         this.zipcode=page.locator("//input[@id='customer.address.zipCode']")
         this.phonenumber=page.locator("//input[@id='customer.phoneNumber']")
         this.ssn=page.locator("//input[@id='customer.ssn']")
         this.username=page.locator("//input[@id='customer.username']")
         this.password=page.locator("//input[@id='customer.password']")
         this.confirm=page.locator("//input[@id='repeatedPassword']")
        this.registerbutton=page.locator("//input[@value='Register']")
     }

     async registerUser(
         fname:string,
         lname:string,
         address:string,
         city:string,
         state:string,
         zipcode:string,
         phone:string,
         ssn:string,
         username:string,
         pass:string,
         
     )
     {
         await this.firstname.fill(fname)
         await this.lastname.fill(lname)
         await this.address.fill(address)
         await this.city.fill(city)
         await this.state.fill(state)
         await this.zipcode.fill(zipcode)
         await this.phonenumber.fill(phone)
         await this.ssn.fill(ssn)
         await this.username.fill(username)
         await this.password.fill(pass)
         await this.confirm.fill(pass)
     }

     async clickOnRegisterbutton()
     {
        await this.registerbutton.click()
     }

  }