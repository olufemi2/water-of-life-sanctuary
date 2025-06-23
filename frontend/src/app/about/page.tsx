import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { HeartIcon, UsersIcon, GlobeAltIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    title: 'Love',
    description: 'We believe in showing God\'s unconditional love to everyone we meet.'
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'Building authentic relationships and creating a sense of belonging for all.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Mission',
    description: 'Sharing the Gospel locally and globally through word and action.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Service',
    description: 'Living out our faith by serving others and making a positive impact.'
  }
]

const leadership = [
  {
    name: 'Pst. Yomi Ogunlesi',
    role: 'Senior Pastor',
    bio: 'Pst. Yomi Ogunlesi has been the Senior Pastor of Water of Life Sanctuary since 2003.',
    email: 'info@wateroflifesanctuary.org.uk'
  },
  {
    name: 'Pastor Kunle Solaru',
    role: 'Assistant Pastor',
    bio: 'Pastor Kunle Solaru has been with the assembly since 2008 and serves faithfully as the Assistant Pastor.',
    email: 'info@wateroflifesanctuary.org.uk'
  },
  {
    name: 'Pastor Sarah Williams',
    role: 'Associate Pastor',
    bio: 'Pastor Sarah oversees our children\'s and family ministries. She has a heart for helping families grow together in faith and has been with our church for 8 years.',
    email: 'info@wateroflifesanctuary.org.uk'
  },
  {
    name: 'David Martinez',
    role: 'Worship Director',
    bio: 'David leads our worship team and has a passion for creating meaningful worship experiences. He has been serving in worship ministry for over 12 years.',
    email: 'info@wateroflifesanctuary.org.uk'
  },
  {
    name: 'Jennifer Chen',
    role: 'Youth Pastor',
    bio: 'Jennifer has been working with teenagers for 6 years and loves helping young people discover their purpose in Christ. She oversees all youth ministry programs.',
    email: 'info@wateroflifesanctuary.org.uk'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Water of Life Sanctuary
            </h1>
            <p className="mt-6 mx-auto max-w-3xl text-xl text-gray-600">
              A fellowship of believers, made in God&apos;s image and called as disciples of Christ to share the Good News 
              with everyone through learning, listening, praying and working together actively to reach out to our communities. 
              We are a place to believe, belong, and become!
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To clearly communicate the message of hope that we have in Jesus Christ. 
                  This hope is not found in religion or anything that we can see, but only 
                  in a personal relationship with Jesus Christ.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-lg leading-relaxed">
                  To set up churches in all nations where each person can develop a thriving 
                  relationship with God by increasing their knowledge of Him, knowing plans 
                  for the future, both here on earth and in the afterlife.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Water of Life Sanctuary is part of the Redeemed Christian Church of God (RCCG), 
                  a global church fellowship that has touched millions of lives worldwide. Our local 
                  assembly is located in Milton Keynes and serves as a beacon of hope in the community.
                </p>
                
                <p>
                  We are a fellowship of believers committed to sharing the Good News through learning, 
                  listening, praying and working together actively to reach out to our communities. 
                  Our worship services begin with the choir leading praise and worship songs - 
                  a participatory session that helps prepare hearts and sets the atmosphere for 
                  Bible teaching from our Pastor and church leaders.
                </p>
                
                <p>
                  Our church is actively involved in charitable work including monthly youth clubs 
                  with emphasis on moral instruction and character building, educational sponsorship 
                  for children in need, and providing monthly food boxes for families in need. 
                  We are committed to the advancement of the Christian religion and the relief of poverty.
                </p>
                
                <p>
                  Today, we continue to be a place where people can believe, belong, and become - 
                  developing thriving relationships with God and preparing for His second coming.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              These values guide everything we do as a church community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the dedicated leaders who guide our church community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {leadership.map((leader, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{leader.name}</CardTitle>
                      <p className="text-blue-600 font-medium">{leader.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <a 
                    href={`mailto:${leader.email}`}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    {leader.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statement of Faith */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">What We Believe</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Bible</h3>
                  <p>We believe the Bible is the inspired, infallible Word of God and our final authority for faith and practice.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">God</h3>
                  <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jesus Christ</h3>
                  <p>We believe Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, died for our sins, rose from the dead, and will come again.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Salvation</h3>
                  <p>We believe salvation is by grace through faith in Jesus Christ alone, not by works.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Church</h3>
                  <p>We believe the church is the body of Christ, made up of all believers, called to worship, fellowship, discipleship, ministry, and evangelism.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}