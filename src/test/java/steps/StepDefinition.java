package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

import org.junit.Assert;
import page.LoginPage;
import util.BrowserFactory;


public class StepDefinition {
	
	WebDriver driver;
	LoginPage loginPage;
	
	@Before
	public void beforeRun() {
		driver = BrowserFactory.init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	
	
	@Given ("^User is on the techfios login Page$")
	public void User_is_on_the_techfios_login_Page() throws InterruptedException {
//		driver = BrowserFactory.init();
		driver.get("https://techfios.com/billing/?ng=login/");
		Thread.sleep(2000);
	}
	
	
	@Given ("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String userName) throws InterruptedException {
//		LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(userName);
		Thread.sleep(2000);
	}
	
	@When ("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws InterruptedException {
//		LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterPassword(password);
		Thread.sleep(2000);
	}
	
	@When("^User click on signin button$")
	public void user_click_on_signin_button() throws InterruptedException {
//		LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);
	}

	@Then("^User should be able to land on Dashboard Page$")
	public void user_should_be_able_to_land_on_Dashboard_Page() throws IOException {
		//Soft Assertion
		/*String exceptedTittle = "Dashboard- iBilling";
		String actualTittle = loginPage.getPageTittle();
		
		if(exceptedTittle.equalsIgnoreCase(actualTittle)) {
			System.out.println("Tittle matched !!!");
		}
		else {
			System.out.println("Tittle Does NOT matched !!!");
		}*/
		
	
		//Hard Assert
	     Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTittle());
//		 loginPage.takeScreenshotAtEndOfTest(driver);
	    
	}
	
	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String userName, String password) throws Throwable {
		loginPage.enterCredentials(userName, password);
	}
	
	
	
	
	
	
	
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
}
