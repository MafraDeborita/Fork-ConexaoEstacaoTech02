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
        await client.sendMessage(msg.from, `🌟 Quer saber mais sobre as Estações Tech? \n🌟As Estações Tech são um projeto incrível que está transformando a realidade de várias comunidades no Maranhão! 🚀💻 Com acesso à tecnologia e oportunidades para desenvolver novas habilidades, essa iniciativa é um passo importante para construir um futuro mais justo e cheio de oportunidades para todos. \n 🙌✨ Quer saber mais e se cadastrar? 
            \n🤔Acesse o site das Estações Tech para obter todas as informações detalhadas, como locais de funcionamento, programação de atividades e como participar.
`);

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'PARA SABER MAIS?\n\n Recomendo que você visite o site da Secretaria de Estado da Ciência, Tecnologia e Inovação do Maranhão (SECTI) para obter informações mais detalhadas sobre as Estações Tech, como locais de funcionamento, programação de atividades e como participar. \n Site da SECTI: https://www.secti.ma.gov.br/');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro:  https://conexao-estacao-tech.vercel.app/');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, `🌟 Capacite-se com as Estações Tech! \n🌟As Estações Tech oferecem uma variedade de cursos profissionalizantes para você se destacar no mercado de trabalho e transformar o seu futuro. Confira algumas das capacitações disponíveis:\n💻 Informática Básica
            \n🎨 Design Gráfico e Marketing Digital
            \n🚀 Maratoninha Maker
            \n💼 Empreendedorismo
            \n📝 Escrita de Projetos Culturais e Submissão de Editais
            \n💳 Operador de Caixa
            \n📊 Pacote Office
            \n🍞 Panificação
            \n✏ Design de Sobrancelhas
            \n✂ Corte e Costura
            \n🔧 Encanador
            \n💡 Eletricista
            \nQuer saber mais e se cadastrar? 🤔 Acesse o site das Estações Tech e aproveite essa oportunidade!
            \n
            👉 Link para cadastro: https://conexao-estacao-tech.vercel.app/
`);

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
        await client.sendMessage(msg.from, `🌟Capacite-se com as Estações Tech em diferentes localidades! 🌟\nAs Estações Tech estão espalhadas por várias regiões para oferecer cursos e capacitações mais perto de você. Confira as localidades onde você pode encontrar uma Estação Tech:

            \n📍 Estação Tech Jordoa
            \n📍 Estação Tech João de Deus
            \n📍 Estação Tech Forquilha
            \n📍 Estação Tech Sol e Mar
            \n📍 Estação Tech Maracanã
            \n📍 Estação Tech Itapera
            \n📍 Estação Tech Bacanga
            \n📍 Estação Tech Vila Arari
            \n📍 Estação Tech Nova Vida

            \nQuer saber mais e se cadastrar? 🤔 Acesse o site das Estações Tech e escolha a unidade mais próxima de você!

            \n👉 Link para cadastro: https://conexao-estacao-tech.vercel.app/
`);
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, `🌟 Eventos e Projetos Futuros das Estações Tech! 🌟\n Estamos animados com os próximos eventos e projetos que vão trazer ainda mais oportunidades para você! Confira o que vem por aí:\nEventos:
            \nInauguração da Estação Tech em [Localidade]
            \n📅 Data: 09 Setembro de 2024
            \n📍 Local: [Endereço]
            \n🎉 Venha celebrar conosco a inauguração da nova Estação Tech em [Localidade]! Haverá atividades, workshops e uma visita guiada às novas instalações. Não perca!
            \nFeira de Empreendedorismo e Startups
            \n📅 Data: [Data]
            \n📍 Local: [Local]
            \n🚀 Conheça startups locais, faça networking e participe de workshops sobre como começar e crescer seu próprio negócio.
`);
        
        await delay(3000);
        await client.sendMessage(msg.from, `🌟 Eventos e Projetos Futuros das Estações Tech em São Luís! 🌟
            \nEstamos entusiasmados com os próximos eventos e projetos em São Luís! Veja o que vem por aí:
            \n Eventos:
            \n1. *Inauguração da Estação Tech no Centro Histórico*
            \n- 📅 *Data:* 15 de Outubro de 2024
            \n- 📍 *Local:* Rua do Egito, 123 - Centro Histórico, São Luís, MA
            \n- 🎉 Venha celebrar conosco a inauguração da nova Estação Tech no Centro Histórico! Haverá atividades, workshops e uma visita guiada às novas instalações. 

            \n2. *Semana de Tecnologia e Inovação em São Luís*
            \n- 📅 *Data:* 1 a 5 de Novembro de 2024
            \n- 📍 *Local:* Centro de Convenções Pedro Neiva de Santana, Avenida dos Holandeses, São Luís, MA
            \n- 🌐 Participe da nossa Semana de Tecnologia e Inovação com palestras, painéis e oficinas sobre as últimas tendências em tecnologia, design e empreendedorismo.

            \n3. *Feira de Empreendedorismo e Startups*
            \n- 📅 *Data:* 20 de Novembro de 2024
            \n- 📍 *Local:* Palácio do Comércio, Praça Benedito Leite, São Luís, MA
            \n- 🚀 Conheça startups locais, faça networking e participe de workshops sobre como começar e crescer seu próprio negócio.
`)

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);

    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, `📩 Tem alguma dúvida ou precisa de mais informações? 🤔
            \n Estamos aqui para ajudar! Se precisar de qualquer esclarecimento ou mais detalhes sobre os eventos e cursos das Estações Tech, é só falar com a gente por aqui mesmo no WhatsApp. 
            \nOu, se preferir, você pode visitar nosso site para mais informações: https://conexao-estacao-tech.vercel.app/ 🌐
            \nEstamos à disposição! 😊
`);


    }
});