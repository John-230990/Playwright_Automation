import {Page,Locator} from '@playwright/test'
export class LoginPage
{
      private page:Page
      private username:Locator
      private password:Locator
      private loginButton:Locator

      constructor(page:Page)
      {
        this.page=page
         this.username=page.locator("//input[@name='username']")
         this.password=page.locator("//input[@name='password']")
         this.loginButton=page.locator("//input[@value='Log In']")
      }

      async loginToApplication(username:string,password:string)
      {
         await this.username.fill(username)
         await this.password.fill(password)
         await this.loginButton.click()
      }
}