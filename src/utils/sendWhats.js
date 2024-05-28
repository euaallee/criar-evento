export function sendMsg({ title, link, whatsapp, infoExtra, cat, email, pwd, check, data, horaI, horaF }) {
  const delay = (0.7 + Math.random() * 2) * 1000

  let number = `+55${whatsapp}`;
  let bodyMsg = `
Nome do evento: *${title}*\n
link do evento:
${link}\n
Número para contato:
${number}\n
Informações:\n\
${infoExtra}\n\n
Categoria: ${cat}\n
Tipo de evento: ${check === true ? "Evento *Privado*" : "Evento *Público*"}
Data: ${data}
Duração: ${horaI} até ${horaF}
  `

  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (pwd == "dev@dev" && !!email) {
        resolve(`https://api.whatsapp.com/send?phone=${encodeURIComponent(+5587998118592)}&text=${encodeURIComponent(bodyMsg)}`)
      } else {
        reject({ message: "Não foi possivel enviar o formulário! Tente novamente!"})
      }
    }, delay)
  })
}