import {test,expect} from '@playwright/test'
import { POManager } from '../pageObjects/POManager'
import testdata from '../utils/bank.json'

testdata.forEach((data)=>
{
test(`registration ${data.username}`,async ({page})=>
{
     // const homepage=new HomePage(page)
      const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
      await homepage.goTo()
      await homepage.clickOnRegisterLink()

       const registerpage=pomanger.getRegistrationPage()
      await registerpage.registerUser(
          data.firstname,
          data.lastname,
          data.address,
          data.city,
          data.state,
          data.zipcode,
          data.phonenumber,
          data.ssn,
          data.username,
          data.password

       )

        await registerpage.clickOnRegisterbutton()

        await page.waitForTimeout(2000)
})

})