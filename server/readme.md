# Solution Notes

REST API calls are in  <a href='https://github.com/HarvardDCENode/assignment-5-rest-apis-jahskee/blob/master/components/controllers/web/webContactController.js' target='_blanku'>components/web/webContactController.js:</a>

![alt text](http://storage1.static.itmages.com/i/18/0410/h_1523348833_6112492_049c1b2a58.png)

<b>1. Find All:</b> 
  
    http://stratteos.us/api/contacts
    method: GET

<b>2. Create:</b>
 
    http://stratteos.us/api/contacts/create
    method: POST
    body: {firstname: 'John', lastname: 'Doe', phone: '(222)222-2222' }

<b>3. Read:</b>   
 
    http://stratteos.us/api/contacts/[contactId]
    method: GET

<b>4. Update: </b> 
 
    http://stratteos.us/api/contacts/update
    method: PUT
    body: {_id: 'xxxx', firstname: 'Jane', lastname: 'Doe', phone: '(444)444-4444' }

<b>5. Delete:</b>

    http://stratteos.us/api/contacts/delete/[contactId]
    method: DELETE

 

Thank you!
<br>
<br>

# Assignment #5 - REST APIs

The description of this assignment can be found in Canvas at [Assignment #5](https://canvas.harvard.edu/courses/35096/assignments/204793) (Spring 2018)

You should build your application in this repo cloned for you in Github Classroom. You'll submit your project and github URLs in Canvas.
