import React from "react";

export default function Newsletter() {
    return (
      <div className="bg-light-blue">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Stay in the loop.</h2>
            <p className="mt-2 max-w-3xl text-base text-slate-grey">
            Join our community of STR operators and stay up to date with news, tips, tricks and other helpful resources.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-blue/[.15] shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-accent-blue focus:border-accent-blue sm:max-w-xs"
                placeholder="Full name"
              />
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full mt-4 px-5 py-3 border border-blue/[.15] shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs"
                placeholder="Email address"
              />
              <div className="mt-4 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 font-semibold text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }