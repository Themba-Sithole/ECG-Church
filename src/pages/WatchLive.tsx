import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router';

export function WatchLive() {
  const pastServices = [
    {
      title: 'Walking in Victory Through Faith',
      date: 'January 28, 2026',
      duration: '1:15:30',
      thumbnail: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'The Power of Prophetic Prayer',
      date: 'January 21, 2026',
      duration: '1:22:15',
      thumbnail: 'https://images.unsplash.com/photo-1567781343935-5e408319f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBiaWJsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzAxMTEyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Year of Victory - New Year Service',
      date: 'January 5, 2026',
      duration: '1:35:45',
      thumbnail: 'https://images.unsplash.com/photo-1717201611955-f7e723802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5JTIwY2h1cmNofGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Breakthrough in Worship',
      date: 'December 29, 2025',
      duration: '1:18:20',
      thumbnail: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Miracles, Signs, and Wonders',
      date: 'December 22, 2025',
      duration: '1:28:10',
      thumbnail: 'https://images.unsplash.com/photo-1709026437503-c3a96f621119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcmF5aW5nJTIwam95ZnVsfGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Faith that Moves Mountains',
      date: 'December 15, 2025',
      duration: '1:12:55',
      thumbnail: 'https://images.unsplash.com/photo-1567781343935-5e408319f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBiaWJsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzAxMTEyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary px-6 py-3 rounded-full mb-6 animate-pulse">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="font-['Montserrat'] font-black text-white text-sm tracking-wider uppercase">
              LIVE Every Sunday at 9:00 AM
            </span>
          </div>
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Watch <span className="text-accent">Live</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Experience the power of worship and the Word from anywhere in the world
          </p>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="bg-card border-white/10 overflow-hidden">
            {/* Video Player Placeholder */}
            <div className="relative bg-secondary aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6">
                  <Play className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-3">
                  Live Stream Coming Soon
                </h3>
                <p className="text-white/70 mb-6 max-w-md mx-auto">
                  Our live stream will be available here every Sunday at 9:00 AM. 
                  Connect your Facebook or YouTube account to watch.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                    Watch on Facebook Live
                  </Button>
                  <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
                    Watch on YouTube
                  </Button>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-['Montserrat'] font-black text-3xl text-accent mb-2">
                    Every Sunday
                  </div>
                  <p className="text-white/70">Regular Service</p>
                </div>
                <div>
                  <div className="font-['Montserrat'] font-black text-3xl text-accent mb-2">
                    9:00 AM SAST
                  </div>
                  <p className="text-white/70">South Africa Time</p>
                </div>
                <div>
                  <div className="font-['Montserrat'] font-black text-3xl text-accent mb-2">
                    Multi-Platform
                  </div>
                  <p className="text-white/70">Facebook & YouTube</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Service Times Reminder */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card border-primary/20 p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-['Montserrat'] font-bold text-white mb-2">Sunday Service</h4>
              <p className="text-white/70 text-sm">9:00 AM</p>
            </Card>
            <Card className="bg-card border-primary/20 p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-['Montserrat'] font-bold text-white mb-2">Midweek Service</h4>
              <p className="text-white/70 text-sm">Thursday, 6:00 PM</p>
            </Card>
            <Card className="bg-card border-primary/20 p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-['Montserrat'] font-bold text-white mb-2">Prayer Meeting</h4>
              <p className="text-white/70 text-sm">Week Days, 6:00 AM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Services */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-4">
              Past <span className="text-accent">Services</span>
            </h2>
            <p className="text-white/70 text-lg">Catch up on previous messages and worship experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastServices.map((service, index) => (
              <Card key={index} className="bg-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={service.thumbnail}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full w-16 h-16 p-0">
                      <Play className="w-8 h-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-white text-xs font-semibold">
                    {service.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {service.date}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
              Load More Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Can't Join Us <span className="text-accent">Online</span>?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            We'd love to see you in person! Experience the full atmosphere of worship, fellowship, 
            and the supernatural presence of God.
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
