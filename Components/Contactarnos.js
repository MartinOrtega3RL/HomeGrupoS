import React from 'react'
import "../Styles/Contacto.css"

function Contactarnos() {
  return (
    <form className='contacto'>
      <h1>Contactate <span>Aqui</span></h1>
      <input type="text" name="name" id=""  placeholder='Ingresa tu Nombre'/>
      <input type="text" name="name" id=""  placeholder='abcd@gmail.com'/>
      <input type="text" name="name" id=""  placeholder='+54'/>
      <textarea name="message" id="" cols ="30" rows="10" placeholder='Escriba Aqui'/>
      <button type="submit">Enviar</button>
      <h3>O contactate a travez de 3704-xxxxxxx</h3>
    </form>
  )
}

export default Contactarnos