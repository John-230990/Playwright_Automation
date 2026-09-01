
import { POManager } from '../pageObjects/POManager'
import { customtest as test,expect } from '../fixtures/testfixture'


test('registration',async ({page,testdataForregistration})=>
{
     // const homepage=new HomePage(page)
      const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
      await homepage.goTo()
      await homepage.clickOnRegisterLink()

       const registerpage=pomanger.getRegistrationPage()
      await registerpage.registerUser(
        testdataForregistration.firstname,
          testdataForregistration.lastname,
          testdataForregistration.address,
          testdataForregistration.city,
          testdataForregistration.state,
          testdataForregistration.zipcode,
          testdataForregistration.phonenumber,
          testdataForregistration.ssn,
          testdataForregistration.username,
          testdataForregistration.password

       )

        await registerpage.clickOnRegisterbutton()

        await page.waitForTimeout(2000)
})
