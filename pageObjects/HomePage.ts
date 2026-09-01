import {Page,Locator} from '@playwright/test'

export class HomePage
{
     private page:Page
     private registterLink:Locator
     
     constructor(page:Page)
     {
         this.page=page
         this.registterLink=page.locator("//a[normalize-space()='Register']")
     }

     async goTo()
     {
         await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
     }

     async clickOnRegisterLink()
     {
         await  this.registterLink.click()
     }
}