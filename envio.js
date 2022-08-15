const nodemailer = require('nodemailer')

//aqui nesse array você coloca todos os seus emails para envio geral
const email =['weslet.vieira123@gmail.com', 'telhado.folha@gmail.com']


 
for (i = 0; i < email.length; i++){

    const emailEnvio = email[i]

    const remetente = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        
        service: 'Gmail',
        
        port: 587,
        
        secure: true,
        
        auth:{
        //seu usuario e senha
        user: '',
        
        pass: '' }
        
        });

    const emailASerEnviado = {

            from: '',
            
            to: emailEnvio,
            
            subject: 'Teste de envio',
            text: 'Teste',
            // aqui você coloca seu codigo html
            html: '',
            
            
            };
    remetente.sendMail(emailASerEnviado, function(error){

        if (error) {
        
        console.log(error);
        
        } else {
        
        console.log('Email enviado com sucesso');
        
        }
        
        });
}