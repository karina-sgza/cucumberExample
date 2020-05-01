Feature: Search Google for Enroute Systems and fill the Contact Us form

  Background: User searches Google for Enroute systems and gets to the Contact Us page
  Given a user is in the google page
  When the user types "Enroute systems" in search bar
  And the user clicks the search button
  And the user clicks the first link
  Then the user is in the "Enroute" page
  When the user clicks the Contact Us button
  Then the user should be at "Contact – Enroute" 
  
  
  @CorrectForm
  Scenario Outline: User fills the form correctly and clicks submit button
	When the user fills "<name>", "<email>", "<subject>", "<message>"
	And the user clicks Send
	Then the user should be at "Contact – Enroute" 
	
	Examples:
		| name | email | subject | message | 
		| Karina G | karinag@gmail.com | Business Inquiry | Inquirying about something | 
		| Daniela S | dags@outlook.com | Job Openings | Asking about stuff | 	
    
