import React from 'react'

const Theme = () => {
  return (
    <main className="p-10 text-6xl bg-primary-lavendar">
      <p className='font-heading'>this is the <span className="font-pacifico">Heading</span></p>
      <h1 className="text-4xl font-subheading">this is the subheading</h1>
      <p className='text-2xl font-content'>this is content</p>
      <br/>
      <div className="flex items-center font-heading">
        <div className="w-min-20 p-10 bg-primary-purple text-white">Font</div>
        <div className="w-min-20 bg-primary-coral p-10 text-primary-black">Font</div>
        <div className="w-min-20 bg-accent-blue p-10">Text</div>
        <div className="w-min-20 bg-accent-lightblue p-10 text-white">Buttons</div>
      </div>
      <div className="flex items-center font-heading">
        <div className="w-min-20 p-10 text-primary-purple">Font</div>
        <div className="w-min-20 text-black p-10 ">Font</div>
        <div className="w-min-20 text-accent-blue p-10">Text</div>
        <div className="w-min-20 text-accent-lightblue p-10">Buttons</div>
      </div>
      <div className="flex items-center font-subheading text-5xl">
        <div className="w-min-20 p-10 text-primary-purple">Font</div>
        <div className="w-min-20 text-black p-10 ">Font</div>
        <div className="w-min-20 text-accent-blue p-10">Text</div>
        <div className="w-min-20 text-accent-lightblue p-10">Buttons</div>
      </div>
      <div className="flex items-center font-content text-4xl">
        <div className="w-min-20 p-10 text-primary-purple">Font</div>
        <div className="w-min-20 text-black p-10 ">Font</div>
        <div className="w-min-20 text-accent-blue p-10">Text</div>
        <div className="w-min-20 text-accent-lightblue p-10">Buttons</div>
      </div>
    </main>
  )
}

export default Theme
