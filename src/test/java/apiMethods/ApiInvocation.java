package apiMethods;

import io.restassured.authentication.PreemptiveBasicAuthScheme;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ApiInvocation {

    private static final Logger LOGGER = LoggerFactory.getLogger(ApiInvocation.class);


    /**
     * Returns the api response from get request
     * @param endPointUrl
     * @return
     */
    public Response responseForGet(String endPointUrl, String username, String password) {

        PreemptiveBasicAuthScheme authScheme = new PreemptiveBasicAuthScheme();
        authScheme.setUserName(username.trim());
        authScheme.setPassword(password.trim());

        RestAssured.authentication = authScheme;

        LOGGER.info("responseForGet >>>>> started >>>>> " + "enpointurl >>>>> " + endPointUrl + "\n");

        Response r = RestAssured
                .given()
                .header("Content-Type", "application/xml")
                .when()
                .get(endPointUrl.trim());

        LOGGER.info("responseForGet >>>>> completed >>>>> Response >>>>> " + r.body().asString() + "\n");
        String b = r.body().asString();
        System.out.println("response " + b);

        return r;
    }

}