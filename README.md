# Google-Sheet-Automated-Email-Stock-Tracker-
Google Sheet- Using Google Finance functions to create an Automated Email Stock Tracker 

### Based on Tutorial 
Heavil borrowed content from this great tutorial. The steps/code in this repo combine the two tutorials below. 

**Tutorial 1** : https://spreadsheet.dev/send-html-email-from-google-sheets  
**Tutorial 2**: https://spreadsheet.dev/send-email-from-google-sheets-based-on-a-schedule

### Example of Email Received 
![image](https://github.com/user-attachments/assets/28067f12-b5ed-4a0a-8c84-1c603ff1f9fb)



### Project Objectives 
- Create a Google Sheet that tracks stocks of choice
- Add and modify the app script for use


# Getting Started 
1. Create a Google sheet to track stock data. Use CSV template. Update formulas in GSheet to get Google Finance Functionality.
- **Link to GSheet with Formulas**: https://docs.google.com/spreadsheets/d/1Taj-bFs4p_6B3HrgT9ZgIi5_vnZjOQEuHa_d-iQtu3Q/edit?usp=sharing  


3. Create a Named Range for this data to make it easy to access it from a script.
![image](https://github.com/user-attachments/assets/42d10c62-570d-4d18-990b-ae29b58c3499)

4. Enter "Stocks" for the name of the range.
![image](https://github.com/user-attachments/assets/36b23a9d-9ef9-482f-9304-1109ad12a3d3)

5. Create an apps script by selecting Extensions → Apps Script.
![image](https://github.com/user-attachments/assets/d2cbda7e-dcc5-4e9a-bb3b-f9bbd095054f)
You should see a code editor like this:
![image](https://github.com/user-attachments/assets/6e9dfaf3-7036-493c-827e-fd48e4cf7476)
6. Paste in the code.gs functions into the code editor. Update the email in send_email function to your email.
7. Add a file in the code editor using the "+" button. Create a "Template.html". Paste in the code from Template.html in repo.
   ![image](https://github.com/user-attachments/assets/68b60624-1c2d-4fb3-be8c-18341ee9c159)

8. The next step is to configure the trigger. There are a bunch of options so let me explain what they are.

- Choose the function in your apps script that the trigger should run. Instead of you manually running this function, the trigger will run it for you on your behalf. We will pick the sendEmail() function.

- Always pick Head for the deployment that should be run. When you build more complex applications, you'll learn more about when not to use the Head deployment.

- Set the event source to be Time-driven. This is because we want the report to be emailed every morning (ie, it is time based). You can also set up triggers that are event based. For example, you can send an email when changes are made in the sheet.

- There are various ways to set up a Time-driven trigger. You can have a trigger run every hour, only on specific days of the month etc. In this case, we'll choose a Day timer since we want the trigger to run the sendEmail function every morning. Finally, we'd like the email to be in our inbox before 7am so pick 6am to 7am as the time of the day.

That's it! Click Save to set up the trigger.
![image](https://github.com/user-attachments/assets/82776457-9f1d-4877-939d-1d4c60033647)




