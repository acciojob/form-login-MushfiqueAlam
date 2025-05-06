function getFormvalue() {
    //Write your code here
	const form = document.querySelector('form');
    const fname = form.elements['fname'].value;
    const lname = form.elements['lname'].value;
	alert(`${fname} ${lname}`);
}
