import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

export const PastorWelcome: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold mb-6">
            Pastor&apos;s Welcome Message
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            A Word from Our
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text">
              Lead Pastor
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Pastor's Photo */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-1 shadow-2xl float">
                <div className="w-full h-full rounded-3xl bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for pastor's photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <HeartIcon className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Pastor Yomi Ogunlesi</p>
                      <p className="text-sm">Lead Pastor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur opacity-20 pulse-bg"></div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Pastor Yomi Ogunlesi</h3>
              <p className="text-lg text-purple-600 font-semibold">Lead Pastor, RCCG Water of Life Sanctuary</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <div className="modern-card p-8 bg-white/80 backdrop-blur-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <span className="text-2xl font-bold text-purple-600">&quot;</span>
                  Welcome to the RCCG – Water of Life Sanctuary (WOLS) Church website. Whether you&apos;re just having a look, or are searching out for a place to worship, we&apos;re delighted you found us.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our goal is to clearly communicate the message of hope that we have in Jesus Christ. This hope is not found in religion or anything that we can see, but only in a personal relationship with Jesus Christ.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Mission is centred on setting up of churches in all nations where each person can develop a thriving relationship with God by increasing their knowledge of Him, knowing plans for the future, both here on earth and in the afterlife.
                  <span className="text-2xl font-bold text-purple-600">&quot;</span>
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl border-l-4 border-purple-600">
                  <p className="text-gray-600 italic text-center">
                    &quot;For I know the plans I have for you,&quot; declares the Lord, &quot;plans to prosper you and not to harm you, to give you hope and a future.&quot;
                  </p>
                  <p className="text-purple-600 font-semibold text-center mt-2">- Jeremiah 29:11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}