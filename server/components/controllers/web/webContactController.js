/*jshint esversion: 6 */
require('es6-promise').polyfill();
require('isomorphic-fetch');

const Contact = require('../../models/contactModel.js');
const settings = require('../../utils/settings');

const webContactController = {};

headerText = {
  company_name: settings.company_name,
  app_name: 'NodeJS Express',
}
webContactController.list = async (req, res, next) => {
  try {
    response = await fetch(`${settings.API_HOST}/api/contacts`); 
    if (response.status != 200) throw `Server api error reponse.status=${response.status}`;

    contacts = await response.json();
    res.render('pages/contacts', {        
            company_name: settings.company_name,
            app_name: settings.app_name,
            contacts,        
    });
  } catch (err) {
    console.log(err)
  } 
};

webContactController.create = async (req, res, next) => {  
  console.log('using form submit method post.');

  contact = {
    firstname: req.body.firstname, 
    lastname: req.body.lastname,
    phone: req.body.phone, 
  };
  try {
    response = await fetch(`${settings.API_HOST}/api/contacts/create`, {
      method: 'POST',    
      body: JSON.stringify(contact),
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
    }); 

  } catch (err) {
     throw error;
  }  

  if (response.status != 200) throw `Server api error reponse.status=${response.status}`;
  contacts = await response.json();
 
  res.redirect('/');
};

webContactController.read = async (req, res) => {
  var message = '';
  const contact_id = req.params.contact_id;
  const isUpdated = req.query.updated;

  if (isUpdated) {message='Successfully updated contact!'}
  let contact;
  try{
    response = await fetch(`${settings.API_HOST}/api/contacts/${contact_id}`); 
    if (response.status != 200) throw `Server api error reponse.status=${response.status}, contact_id=${contact_id}`;;
    contact = await response.json();
    res.render('pages/viewcontact', {
      ...headerText, contact, message,
    });
  } catch (err) {
    console.error(`record not found ${err}, contactId=${contact_id}`)
  } 
};

webContactController.submit = async function(req, res){
 
  const updateContact = req.body;
  const _id = updateContact._id;
  const submit = req.body.submit;
  delete updateContact.submit;
  // note _id field is auto-generated by mongodb
  let contact = await Contact.findOne({_id});
  try {
    if (submit === 'update') {
      response = await fetch(`${settings.API_HOST}/api/contacts/update`, {
        method: 'PUT',      
        body: JSON.stringify(updateContact),
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      }); 
      if (response.status != 200) throw `Server api error reponse.status=${response.status}, contact_id=${_id}`;
   
      res.redirect("/contacts/"+_id+'/?updated=true');
    } else if (submit === 'delete') {

      response = await fetch(`${settings.API_HOST}/api/contacts/delete/${_id}`, {
        method: 'DELETE',      
        mode: 'cors',
      }); 
      if (response.status != 200) throw `Server api error reponse.status=${response.status}, contact_id=${_id}`;;
     
      const message = 'Account Successfully Deleted!';
      res.render('pages/confirm_delete_contact', {
          ...headerText,
          contact,
          message,
      });
      
    }
  } catch (err) {
    console.log(err)
  }
};

module.exports = webContactController;