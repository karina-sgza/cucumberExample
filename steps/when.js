import { When } from 'cucumber';
import { GooglePage, EnroutePage } from '../page-objects';



When('the user types {string} in search bar',function(searchTerm){
  const originalHandle = browser.getWindowHandle();
  browser.getWindowHandles().forEach((handle) =>{
    if(handle !== originalHandle){
      browser.switchToWindow(handle);
      browser.closeWindow();
    }
  });
  browser.switchToWindow(originalHandle);
  GooglePage.searchBox().setValue(searchTerm);
});

When('the user clicks the search button', function(){
  browser.keys('Enter');
});
When('the user clicks the first link', function(){
  GooglePage.firstLink().click();
});
When('the user clicks the Contact Us button', function(){
  EnroutePage.contactUsButton().click();
  browser.pause(5000);
});
When('the user fills {string}, {string}, {string}, {string}',function(name, email, subject, message){
  EnroutePage.nameInput(name);
  EnroutePage.emailInput(email);
  EnroutePage.subjectInput(subject);
  EnroutePage.messageInput(message);
});


When('the user clicks Send', function(){
  EnroutePage.sendButton().click();
});
