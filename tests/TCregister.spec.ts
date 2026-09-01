import {test,expect} from '@playwright/test'
import { HomePage } from '../pageObjects/Homepage'
//import { RegistrationPage } from '../pageObjects/RegistrationPage'
import { POManager } from '../pageObjects/POManager'
test('registration',async ({page})=>
{
     // const homepage=new HomePage(page)
      const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
      await homepage.goTo()
      await homepage.clickOnRegisterLink()

       const registerpage=pomanger.getRegistrationPage()
      await registerpage.registerUser('jhon','peter','delhi',
        'saket','delhi','110011','12333','454546','ts171','asdf')
        await registerpage.clickOnRegisterbutton()

        await page.waitForTimeout(2000)
})