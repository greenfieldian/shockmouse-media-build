import { Link } from 'gatsby'
import React from 'react'

export default function ContactForm() {
  return (
    <div className=''>
        <div className='bg-blue text-white'>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
                <h1 className="text-4xl">Let's start a conversation</h1>
                <p className="mt-2">No matter where you are in your short term rental journey, we’d love to get to know you better.</p>
            </div>
        </div>
        <div className="border-t-8 border-accent-blue">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
                <form>
                    <div className="flex flex-col mb-6">
                        <label for="firstName" className="uppercase text-blue font-semibold">First</label>
                        <input 
                            name="firstName" 
                            className="px-3 py-3 mt-1 border border-blue/[.15]"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="lastName" className="uppercase text-blue font-semibold">Last</label>
                        <input 
                            name="lastName" 
                            className="px-3 py-3 mt-1 border border-blue/[.15]"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="email" className="uppercase text-blue font-semibold">Email</label>
                        <input 
                            name="email" 
                            className="px-3 py-3 mt-1 border border-blue/[.15]"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label for="message" className="uppercase text-blue font-semibold">Message</label>
                        <textarea 
                            name="message" 
                            className="h-36 px-3 py-3 mt-1 border border-blue/[.15]"
                            placeholder="Message"
                        />
                    </div>
                    <div className="flex flex-end">
                        <Link 
                            type="submit"
                            className="font-bold text-xl text-accent-blue ml-auto border-b-4"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
