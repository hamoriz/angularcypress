Feature: Ticker query

  Scenario: Ticker details can be found
    Given Being on stock page
    When Typing "MSFT" ticker
    Then "Microsoft" appears in stock details
