import { useState } from "react"

export default function App() {

  const [title, setTitle] = useState("")
  const [link, setLink] = useState("")
  const [tell, setTell] = useState("")
  const [extraInfo, setExtraInfo] = useState("")
  const [cat, setCat] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [check, setCheck] = useState("")
  const [data, setData] = useState("")
  const [horaInicio, setHoraInicio] = useState("09:00")
  const [horaFinal, setHoraFinal] = useState("20:00")

  const handleTitle = (e) => {
    setTitle(e.value)
  }

  const handleLink = (e) => {
    setLink(e.value)
  }

  const handleTell = (e) => {
    setTell(e.value)
  }

  const handleInfo = (e) => {
    setExtraInfo(e.value)
  }

  const handleCat = (e) => {
    setCat(e.value)
  }

  const handleEmail = (e) => {
    setEmail(e.value)
  }

  const handlePwd = (e) => {
    setPwd(e.value)
  }

  const handleCheck = (e) => {
    setCheck(e.value)
  }

  const handleData = (e) => {
    setData(e.value)
  }

  const handleHi = (e) => {
    setHoraInicio(e.value)
  }

  const handleHf = (e) => {
    setHoraFinal(e.value)
  }

  return (
    <main className='flex flex-col bg-gradient-to-t to-zinc-950 to-20% from-zinc-200 from-80% '>
      <div id="header" className='w-full flex flex-col gap-6 pt-[5rem] pb-[8rem] px-[22rem]'>
        <h1 className='text-white text-4xl font-bold w-80 font-Archivo'>Crie e compartilhe seu evento.</h1>
        <p className='text-sky-300 font-normal text-base w-72 font-Poppins'>
          O primeiro passo, é preencher esse
          formulário de inscrição.
        </p>
      </div>
      <form action="get" className="flex flex-col gap-12 bg-zinc-50 mx-[22rem] rounded-lg mb-24">
        <div id="infoEvento" className="inline-flex p-16 pb-0 flex-col items-start gap-12">
          <h3 className="text-2xl text-indigo-950 font-Poppins font-semibold w-[48rem] pb-4 border-zinc-300 border-b-2">Informações do Evento</h3>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="titleEvent" className="text-lg font-normal font-Poppins text-zinc-700">Título do evento <span className="text-xs font-normal text-stone-400">(minimo 8 caracteres)</span></label>
            <input type="text" name="titleEvent" id="titleEvent" value={title} onChange={handleTitle} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="linkEvent" className="text-lg font-normal font-Poppins text-zinc-700">Link do evento <span className="text-xs font-normal text-stone-400">(comece com https://)</span></label>
            <input type="text" name="linkEvent" id="linkEvent" value={link} onChange={handleLink} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="tellWhats" className="text-lg font-normal font-Poppins text-zinc-700">Whatsapp para contato <span className="text-xs font-normal text-stone-400">(somente números)</span></label>
            <input type="text" name="tellWhats" id="tellWhats" value={tell} onChange={handleTell} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="extraInfo" className="text-lg font-normal font-Poppins text-zinc-700">Informações extras<span className="text-xs font-normal text-stone-400">{/*Coloque algo sobre o campo se nescessário */}</span></label>
            <textarea name="extraInfo" id="extraInfo" value={extraInfo} onChange={handleInfo} className="w-[48rem] h-[10.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4 resize-none" ></textarea>
          </div>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="cat" className="text-lg font-normal font-Poppins text-zinc-700">Categoria<span className="text-xs font-normal text-stone-400">{/*Coloque algo sobre o campo se nescessário */}</span></label>
            <input type="text" name="cat" id="cat" placeholder="Tipo do evento" value={cat} onChange={handleCat} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
        </div>
        <div id="privas" className="inline-flex px-16 flex-col items-start gap-12">
          <h3 className="text-2xl text-indigo-950 font-semibold font-Archivo w-[48rem] pb-4 border-zinc-300 border-b-2">Privacidade</h3>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="emailAdm" className="text-sm font-normal font-Poppins text-zinc-700">E-mail do administrador <span className="text-xs font-normal text-stone-400">(digite um email válido)</span></label>
            <input type="email" required name="emailAdm" id="emailAdm" value={email} onChange={handleEmail} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
          <div className="flex w-[48rem] flex-col justify-center items-start gap-2">
            <label htmlFor="pwdMember" className="text-sm font-normal font-Poppins text-zinc-700">Senha de acesso para os participantes <span className="text-xs font-normal text-stone-400">(minímo 8 caracteres)</span></label>
            <input type="password" required name="pwdMember" id="pwdMember" value={pwd} onChange={handlePwd} className="w-[48rem] h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
          </div>
          <div className="flex w-[48rem] justify-start items-center gap-2">
            <input type="checkbox" name="privi" id="privi" value={check} onChange={handleCheck} className="w-6 h-6 rounded-lg bg-zinc-50 border-zinc-300 border hover:cursor-pointer " />
            <label htmlFor="privi" className="text-sm font-normal font-Poppins text-zinc-700">Evento privado</label>
          </div>
        </div>
        <div id="dateHours" className="flex px-16 flex-col items-start gap-12">
          <h3 className="text-2xl text-indigo-950 font-semibold font-Poppins w-[48rem] pb-4 border-zinc-300 border-b-2">Dia e hora</h3>
          <div className="flex items-start gap-5">
            <div className="flex flex-col items-start gap-2 w-[25.5rem]">
              <label htmlFor="dataEvent" font-Poppins>Data</label>
              <input type="text" name="dataEvent" id="dataEvent" value={data} onChange={handleData} className="w-full h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
            </div>
            <div className="flex flex-col items-start gap-2 w-[10rem]">
              <label htmlFor="horaInicio" font-Poppins>Das</label>
              <input type="time" placeholder="9:00" name="horaInicio" id="horaInicio" value={horaInicio} onChange={handleHi} className="w-full h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
            </div>
            <div className="flex flex-col items-start gap-2 w-[10rem]">
              <label htmlFor="horaFinal" font-Poppins>Até</label>
              <input type="time" placeholder="20:00" name="horaFinal" id="horaFinal" value={horaFinal} onChange={handleHf} className="w-full h-[3.5rem] rounded-lg border-zinc-300 border bg-zinc-50 p-4" />
            </div>
          </div>
        </div>
        <div id="saveEvent" className="px-16 py-10 bg-zinc-100 rounded-b-lg">
          <button type="submit" disabled className="w-[48rem] h-[3.5rem] flex justify-center font-Poppins items-center rounded-lg transition-all bg-green-500 hover:bg-green-600 text-white font-semibold">Salvar evento</button>
        </div>
      </form>
    </main>
  )
}
