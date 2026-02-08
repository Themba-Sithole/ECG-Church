import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Globe, Heart, Book, Cross, Sparkles } from 'lucide-react';

export function About() {
  const beliefs = [
    {
      title: 'The Holy Bible',
      description: 'We believe the Bible is the inspired, infallible Word of God',
      icon: Book,
    },
    {
      title: 'The Trinity',
      description: 'We believe in one God existing in three persons: Father, Son, and Holy Spirit',
      icon: Cross,
    },
    {
      title: 'Salvation',
      description: 'We believe in salvation through faith in Jesus Christ alone',
      icon: Heart,
    },
    {
      title: 'The Holy Spirit',
      description: 'We believe in the baptism and gifts of the Holy Spirit',
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            The Jesus Nation Church
          </h1>
          <div className="text-2xl text-accent font-bold mb-4">ECG TJNC Cape Town</div>
          <p className="text-xl text-white/80 leading-relaxed">
            A prophetic, dynamic church spreading the gospel of Jesus Christ to the whole world
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              Our <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-white/70 text-lg">Appointed and anointed to lead God's people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Prophet Shepherd Bushiri */}
            <Card className="bg-card border-white/10 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="../images/prophet-shepherd-bushiri.jpg"
                  alt="Prophet Shepherd Bushiri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Montserrat'] font-black text-2xl text-white mb-2">
                  Prophet Shepherd Bushiri
                </h3>
                <p className="text-accent font-bold mb-4">Founder & Overseer - ECG International</p>
                <p className="text-white/80 leading-relaxed">
                  Prophet Shepherd Bushiri (Major 1) is the founder and spiritual father of ECG International Church. 
                  Under his prophetic leadership, ECG has grown into a global movement impacting millions of lives 
                  across continents with the gospel of Jesus Christ.
                </p>
              </div>
            </Card>

            {/* Apostle Tyson Elijah */}
            <Card className="bg-card border-white/10 overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src="../images/apostle-tyson-eliel.jpg"
                  alt="Apostle Tyson Elijah"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Montserrat'] font-black text-2xl text-white mb-2">
                  Apostle Tyson Elijah
                </h3>
                <p className="text-accent font-bold mb-4">Mission Head Bishop - Western Cape | Resident Pastor</p>
                <p className="text-white/80 leading-relaxed">
                  Apostle Tyson Elijah is the Mission Head Bishop in the Western Cape and resident pastor of ECG TJNC Cape Town. 
                  Appointed by Prophet Shepherd Bushiri, he leads with prophetic insight and passion for God's people, 
                  bringing the vision of ECG to Cape Town.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-6">
                Why We <span className="text-accent">Exist</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  ECG Cape Town exists to fulfill the Great Commission - to make disciples of all nations. 
                  We are called to be a light in the darkness, bringing hope, healing, and transformation 
                  to our city and beyond.
                </p>
                <p>
                  As The Jesus Nation Church, we are committed to demonstrating the love of Christ through 
                  prophetic ministry, powerful worship, and practical acts of service. We believe in the 
                  supernatural power of God to change lives, heal the sick, and restore broken families.
                </p>
                <p>
                  Our existence is rooted in the belief that the church is not just a building, but a movement 
                  of believers empowered by the Holy Spirit to advance God's Kingdom on earth.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717201611955-f7e723802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5JTIwY2h1cmNofGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & History */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-6 text-center">
              Our <span className="text-accent">Story</span>
            </h2>
            <Card className="bg-card border-white/10 p-8 lg:p-12">
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  ECG Cape Town is a proud branch of ECG International Church, a global movement that spans 
                  across continents. Our church is part of a larger family of believers united in vision, 
                  purpose, and prophetic calling.
                </p>
                <p>
                  The Enlightened Christian Gathering was founded in 2010 in Malawi by Prophet Shepherd Bushiri, 
                  also known as Major 1. What started as a small gathering has grown into one of the fastest-growing 
                  churches in the world, with branches across Africa, Europe, Asia, and beyond.
                </p>
                <p>
                  ECG Cape Town was established to bring the prophetic ministry and transformative power of God 
                  to South Africa. We serve as a beacon of hope, demonstrating God's love through miracles, 
                  signs, and wonders.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-white/10 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">Founded in 2010</h3>
              <p className="text-white/70 leading-relaxed">
                ECG International Church was birthed in Malawi by Prophet Shepherd Bushiri (Major 1), 
                and has since expanded to nations around the world, impacting millions of lives.
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">Global Presence</h3>
              <p className="text-white/70 leading-relaxed">
                With branches across Africa, Europe, Asia, and other continents, ECG continues to 
                fulfill the mandate of preaching the gospel to every nation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 p-8 lg:p-12">
              <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                "ECG exists to preach the gospel of Jesus Christ to the whole world, demonstrating the 
                Kingdom of God through signs, wonders, and miracles. We are committed to raising disciples 
                who will impact their generation and transform nations."
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 p-8 lg:p-12">
              <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-6">
                Our <span className="text-accent">Vision</span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                "To be the leading, living and dynamic prophetic church that empowers believers to walk in 
                their divine purpose, operate in supernatural power, and advance the Kingdom of God in every 
                sphere of influence."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              What We <span className="text-accent">Believe</span>
            </h2>
            <p className="text-white/70 text-lg">Our core Christian beliefs and values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <Card key={index} className="bg-card border-white/10 p-8 hover:border-accent/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">
                        {belief.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="bg-card border-white/10 p-8 lg:p-12">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6 text-center">
              Additional Core Beliefs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The virgin birth of Jesus Christ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The death, burial, and resurrection of Jesus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The second coming of Christ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Water baptism by immersion</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The gifts of the Holy Spirit for today</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Divine healing and miracles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>The Great Commission to all believers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Eternal life for believers and judgment for unbelievers</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}