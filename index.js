function makeSubmission()
{ 
    var appointments = [];
   const fName = document.getElementByClassname('txt1').value;
   const fContact = document.getElementByClassname('txt2').value;
   const fResidence = document.getElementByClassname('txt3').value;

//    const fNumber = document.getElementByClassname('').value;
//    const fN = document.getElementByClassname('').value;

   
    appointments.push(fName);
    appointments.push(fContact);
    appointments.push(fResidence);
    // submission.push(fNumber);

    console.log(appointments);
    return false;
}
