package stepDefinitions;

import apiMethods.ApiInvocation;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dataProviders.ConfigFileReader;
import static org.junit.Assert.assertEquals;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class UserStepDefinitions  {

	private static String responseCode;
	private static Response response;

	ApiInvocation apiInvocation = new ApiInvocation();
	ConfigFileReader configFileReader= new ConfigFileReader();

	private final Logger LOGGER = LoggerFactory.getLogger(UserStepDefinitions.class);



	@When("^User hits get endpoint \"([^\"]*)\"$")
	public void userHitsGetEndpoint(String url){

		response = apiInvocation.responseForGet(url, configFileReader.getUsername(), configFileReader.getPassword());
		responseCode = String.valueOf(response.getStatusCode());
		assertEquals("200",responseCode);

	}


	@Then("^Product name in response should be \"([^\"]*)\"$")
	public void productNameInResponseShouldBe(String productName)  {

		String stringResponse = response.asString();
		XmlPath xmlPath = new XmlPath(stringResponse);
		String productNameRes = xmlPath.get("Product.Name");

		assertEquals(productName,productNameRes);

	}

}



