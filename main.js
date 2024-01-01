const contactForm = document.getElementById('contact-form'),
contactName=document.getElementById('contact-name'),
contactEmail=document.getElementById('contact-email'),
Message=document.getElementById('message'),
contactMessage=document.getElementById('contact-message');
const sendEmail=(e)=>{
    e.preventDefault();
    if(
        contactName.value === ''||
        contactEmail.value === ''||
        Message.value === ''
    ){
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent='write all the input fields';
    }else{
emailjs.sendForm('service_q5lux79',
'template_b0i8tto',
'#contact-form',
'0GEQ6NWv_4v7AxefI'
)

.then(()=>{
    contactMessage.classList.add('color-light');
    contactMessage.textContent='Message sent ✅';
    setTimeout(()=>{
        contactMessage.textContent='';
    },5000);
        }, 
            (error)=>{
                    alert('OOps! Something went wrong.....',error);
                }
            );
    }
};
contactForm.addEventListener('submit',sendEmail);