import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Users, Sparkles, Heart, Baby } from 'lucide-react';
import { Link } from 'react-router';

export function Ministries() {
  const ministries = [
    {
      title: 'Iron Man Ministry',
      description: 'The Iron Man Ministry is dedicated to empowering men to become spiritual leaders in their homes, workplaces, and communities. We focus on building strong, godly men who walk in integrity, wisdom, and power.',
      icon: Users,
      color: 'primary',
      features: [
        'Monthly men\'s gatherings and conferences',
        'Mentorship and discipleship programs',
        'Leadership development and training',
        'Prayer and accountability groups',
        'Community outreach and service projects',
      ],
    },
    {
      title: 'Woman on Fire',
      description: 'Woman on Fire ignites the fire of God in women to impact their generation. We are raising a generation of powerful women who walk in their God-given authority and purpose.',
      icon: Sparkles,
      color: 'accent',
      features: [
        'Women\'s conferences and retreats',
        'Prayer and intercession meetings',
        'Prophetic training and activation',
        'Leadership and business mentoring',
        'Community support and charity work',
      ],
    },
    {
      title: 'Youth Magnets',
      description: 'Youth Magnets is a dynamic ministry drawing young people to Christ through relevant, Spirit-filled ministry. We are raising the next generation of world-changers and kingdom builders.',
      icon: Heart,
      color: 'primary',
      features: [
        'Weekly youth services and gatherings',
        'Youth camps and festivals',
        'Talent development and arts ministry',
        'Discipleship and mentoring programs',
        'Community service and missions',
      ],
    },
    {
      title: "Children's Ministry",
      description: 'Our Children\'s Ministry builds a strong foundation of faith in the next generation. We create an engaging, safe environment where children can encounter God and grow in their relationship with Jesus.',
      icon: Baby,
      color: 'accent',
      features: [
        'Age-appropriate Sunday school classes',
        'Interactive Bible lessons and worship',
        'Character building and values training',
        'Special events and holiday programs',
        'Parent partnership and resources',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Our <span className="text-accent">Ministries</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Find your place to serve, grow, and make an impact for the Kingdom
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${
                    ministry.color === 'primary'
                      ? 'from-primary/10 to-primary/5 border-primary/20'
                      : 'from-accent/10 to-accent/5 border-accent/20'
                  } p-8 lg:p-12 hover:scale-[1.02] transition-transform`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className={`inline-flex items-center justify-center w-20 h-20 ${
                        ministry.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                      } rounded-full mb-6`}>
                        <Icon className={`w-10 h-10 ${
                          ministry.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
                        {ministry.title}
                      </h2>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {ministry.description}
                      </p>
                      <Button
                        className={ministry.color === 'primary'
                          ? 'bg-primary hover:bg-primary/90 text-white'
                          : 'bg-accent hover:bg-accent/90 text-black'
                        }
                      >
                        Learn More
                      </Button>
                    </div>

                    <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="bg-card/50 border border-white/10 rounded-lg p-6">
                        <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-4">
                          What We Offer
                        </h3>
                        <ul className="space-y-3">
                          {ministry.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-white/80">
                              <span className={`${
                                ministry.color === 'primary' ? 'text-primary' : 'text-accent'
                              } mr-3 mt-1 flex-shrink-0`}>✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Ready to Get <span className="text-accent">Involved</span>?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Whether you're a man, woman, youth, or have children, there's a place for you to grow and serve. 
            Join one of our ministries and experience the transformative power of community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/visit">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Visit Us This Sunday
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
