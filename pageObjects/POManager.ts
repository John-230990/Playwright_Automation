import{Page} from '@playwright/test'
import { HomePage } from './Homepage'
import { RegistrationPage } from './RegistrationPage'
import { LoginPage } from './LoginPage'

export class POManager
{
         private page:Page
         private homepage:HomePage
         private registerpage:RegistrationPage
         private loginpage:LoginPage

         constructor (page:Page)
         {
            this.page=page
            this.homepage=new HomePage(this.page)
            this.registerpage=new RegistrationPage(this.page)
            this.loginpage=new LoginPage(this.page)
         }

         getHomePage()
         {
            return this.homepage
         }

         getRegistrationPage()
         {
             return this.registerpage
         }

         getLoginPage()
         {
            return this.loginpage
         }
}