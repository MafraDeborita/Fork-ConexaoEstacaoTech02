// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! ' + 'sou a TechnoMara, sua assistente virtual da Estação Tech✨. Estou aqui para ajudar você a conhecer melhor o nosso projeto de capacitação tecnológica e a encontrar informações sobre os cursos, inscrições, locais de atendimento, eventos e muito mais!, digite uma das opções abaixo:\n\n1 -🌐 Sobre a Estação Tech \n2 - 🎓 Cursos e Capacitações \n3 - 📍 Centros e Localidades \n4 - 📅 Eventos e Programação \n5 - 📋 Inscrições e Requisitos'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); 
        await delay(5000); //Delay de 5 segundos
          
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'As estações tech são um projeto inovador que buscar tranforma a realidade de comunidades maranheses, oferecendo acesso á tecnologia e promovendo o desenvolvimento de habilidades. Essa iniciativa é fundamental para construir um futuro mais justo e equitativo para todos');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'PARA SABER MAIS?\n\n Recomendo que você visite o site da Secretaria de Estado da Ciência, Tecnologia e Inovação do Maranhão (SECTI) para obter informações mais detalhadas sobre as Estações Tech, como locais de funcionamento, programação de atividades e como participar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Capacitações* Cursos profissionalizantes.\n\n Informática Básica.\n\n Design Gráfico e Marketing Digital.\n\n Maratoninha Maker. \n\n Empreendedorismo. \n\n Escrita de projetos culturais e submissão de editais. \n\n Operador de Caixa. \n\n Pacote Office. \n\n Panificação. \n\n Design de Sobrancelhas. \n\n Corte e Costura; Encanador. \n\n Eletricista.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
       // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Localidade das estações.\n\n estação tech Jordoa.\n\nEstação tech João de Deus \n\nEstação tech Forquilha \n\nEstação tech Sol e Mar \n\nEstação tech Maracanâ \n\nEstação tech Itapera \n\n Estação tech bacanga \n\nEstação tech Vila Arari \n\nEstação tech Nova Vida.');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Eventos.\n\nEntregar de novas estações tech no maranhão.');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    }
});