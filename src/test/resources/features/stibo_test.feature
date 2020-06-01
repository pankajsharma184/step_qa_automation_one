Feature: Product Attributes Integration Test

@testOne
Scenario: Verify the product name

    When User hits get endpoint "https://ibt-dev.scloud.stibo.com/restapi/products/SKU-137322"
    Then Product name in response should be "91225001091"


@testAll
Scenario Outline: Verify the product name

        When User hits get endpoint "https://ibt-dev.scloud.stibo.com/restapi/products/<Product_id>"
        Then Product name in response should be "<Product_name>"

    Examples:
        |Product_id  |Product_name  |
        |SKU-137322  |91225001091   |
        |SKU-115401  |91772012236   |
        |SKU-115403  |91772012251   |
        |SKU-158125  |54855106      |







