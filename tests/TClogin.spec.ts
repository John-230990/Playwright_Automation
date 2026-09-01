import { POManager } from '../pageObjects/POManager'
import { customtest as test,expect } from '../fixtures/testfixture'

test('login',async ({page,testdataForregistration})=>
{
     
      const pomanger=new POManager(page)
      const homepage=pomanger.getHomePage()
      await homepage.goTo()
      const loginpage=pomanger.getLoginPage()
      await loginpage.loginToApplication(
          testdataForregistration.username,
          testdataForregistration.password
      )
        await page.waitForTimeout(2000)
})