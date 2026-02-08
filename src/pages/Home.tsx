import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BroadcastLowerThird } from '../components/BroadcastLowerThird';
import { Play, Clock, Calendar, MapPin, Users, Heart, Sparkles } from 'lucide-react';

export function Home() {
  const serviceTimes = [
    {
      title: 'Sunday Service',
      day: 'Every Sunday',
      time: '8:00 AM - 2:00 PM',
      description: 'Join us for powerful worship and prophetic teaching',
    },
    {
      title: 'Midweek Service',
      day: 'Every Thursday',
      time: '6:00 PM',
      description: 'Midweek revival and prayer service',
    },
    {
      title: 'Morning Prayers',
      day: 'Daily',
      time: 'Zoom',
      description: 'Join us online for morning prayer and intercession',
      isZoom: true,
    },
  ];

  const ministries = [
    {
      title: 'Iron Man Ministry',
      description: 'Empowering men to be spiritual leaders in their homes and communities',
      icon: Users,
    },
    {
      title: 'Woman on Fire',
      description: 'Igniting the fire of God in women to impact their generation',
      icon: Sparkles,
    },
    {
      title: 'Youth Magnets',
      description: 'Drawing young people to Christ through dynamic ministry',
      icon: Heart,
    },
    {
      title: "Children's Ministry",
      description: 'Building a strong foundation of faith in our children',
      icon: Heart,
    },
  ];

  const testimonies = [
    {
      name: 'Sarah M.',
      testimony: 'I was healed from a chronic illness after prayer at ECG Cape Town. God is faithful!',
      image: 'https://images.unsplash.com/photo-1709026437503-c3a96f621119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcmF5aW5nJTIwam95ZnVsfGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'David K.',
      testimony: 'My business was on the verge of collapse, but through prophetic guidance and prayer, God turned it around completely.',
      image: 'https://images.unsplash.com/photo-1567781343935-5e408319f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBiaWJsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzAxMTEyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Grace N.',
      testimony: 'I found my purpose and calling at ECG. This is truly a house of miracles and transformation.',
      image: 'https://images.unsplash.com/photo-1717201611955-f7e723802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5JTIwY2h1cmNofGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Worship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Broadcast Lower Third Style Banner */}
          <BroadcastLowerThird 
            badges={[
              { text: 'NOW', type: 'now' },
              { text: 'SUNDAY SERVICE', type: 'label' },
              { text: 'YEAR OF VICTORY', type: 'label' },
              { text: 'LIVE', type: 'live' },
            ]}
            className="mb-8"
          />

          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            ECG TJNC CAPE TOWN
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Welcome to ECG Cape Town - The House of Miracles
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/watch-live">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Live
              </Button>
            </Link>
            <Link to="/visit">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Welcome to <span className="text-accent">The House of Miracles</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            ECG Cape Town is a branch of ECG International Church, founded by Prophet Shepherd Bushiri. 
            We are a prophetic, dynamic church committed to spreading the gospel of Jesus Christ to the whole world. 
            Experience the supernatural power of God through worship, prophetic teaching, and miracles.
          </p>
          <Link to="/about">
            <Button className="bg-accent hover:bg-accent/90 text-black font-bold px-8 py-6">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-4">
              Service Times
            </h2>
            <p className="text-white/70 text-lg">Join us for powerful times of worship and the Word</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTimes.map((service, index) => (
              <Card key={index} className="bg-card border-white/10 p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-3 text-center">
                  {service.title}
                </h3>
                <div className="space-y-2 text-center">
                  <p className="text-accent font-semibold">{service.day}</p>
                  <p className="text-white text-xl font-bold">{service.time}</p>
                  <p className="text-white/70 text-sm mt-4">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-4">
              Our Ministries
            </h2>
            <p className="text-white/70 text-lg">Find your place to serve and grow</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <Card key={index} className="bg-card border-white/10 p-6 hover:border-accent/50 transition-all hover:scale-105">
                  <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                    {ministry.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {ministry.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/ministries">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                Explore All Ministries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Sermon Highlight */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="bg-card border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Latest Sermon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-16 h-16 p-0">
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-primary px-4 py-2 rounded-md mb-4 w-fit">
                  <span className="font-['Montserrat'] font-bold text-white text-sm uppercase tracking-wide">
                    Latest Sermon
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-black text-3xl text-white mb-4">
                  Walking in Victory Through Faith
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Join Prophet as he shares powerful insights on how to walk in divine victory in every area of your life. 
                  This prophetic message will ignite your faith and activate breakthrough.
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/60 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    January 28, 2026
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    45 mins
                  </div>
                </div>
                <Link to="/watch-live">
                  <Button className="bg-accent hover:bg-accent/90 text-black font-bold">
                    Watch Now
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-4">
              Testimonies of <span className="text-accent">Miracles</span>
            </h2>
            <p className="text-white/70 text-lg">See what God is doing in the lives of our members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonies.map((testimony, index) => (
              <Card key={index} className="bg-card border-white/10 p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary mr-4">
                    <ImageWithFallback
                      src={testimony.image}
                      alt={testimony.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-white">{testimony.name}</h4>
                    <p className="text-accent text-sm">Member</p>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  "{testimony.testimony}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Experience the Power of God
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join us this Sunday and witness miracles, signs, and wonders. Your life will never be the same.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/visit">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold">
                Plan Your Visit
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}