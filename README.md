# 03 JavaScript: Password Generator

## The Assignment

Was tasked, from scratch, to create a JavaScript file that would generate a password when prompted. The specifications were that when the "Generate Password" button was clicked, the browser would prompt a series of questions to the user related to the password criteria. The criterias were the password length and if the following character types should be included: lowercase, uppercase, numbers, or special characters. The [special characters](https://www.owasp.org/index.php/Password_special_characters) listed by the OWASP Foundation were used. 



## Acceptance Criteria

In order for the project to be considered successful, all of the following acceptance critera were to be met. By the end of the project, they were.  

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

Once "Generate Password" is clicked, the browser opens a dialoge using the confirm command to cycle through the password criteria. "Ok" means YES and "Cancel" means NO. If the user chooses NO for every criteria, the browser will alert them of this and they will be prompted to answer all the criterias again until they choose YES for atleast one. In addition, if the user chooses a password length of less than 8 or greater than 24, the browser will alert them of this and they will have to enter the password length again. Once they answer all the questions, the browser will display their new password. 

## Submission

The live URL: https://anaeem23.github.io/Northwestern_BootCamp-03-Homework/