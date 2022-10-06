import React from 'react'

const sendMessage = () => {
  return (
    <div className="flex flex-col h-full justify-end">
        <input type="text" placeholder="Envoyer un message" className="input w-screen max-w-xs bg-black text-white" />
    </div>
  )
}

export default sendMessage