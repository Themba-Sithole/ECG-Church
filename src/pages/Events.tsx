import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router';

export function Events() {
  const upcomingEvents = [
    {
      title: 'Fire for Fire Prayer Night',
      date: 'February 13, 2026',
      time: '18:00 PM - 06:00 PM',
      location: 'ECG Cape Town Main ',
      description: 'A powerful two-day youth festival featuring dynamic worship, prophetic ministry, and exciting activities designed to ignite young hearts for Jesus.',
      category: 'Youth',
      image: 'src/images/events/627906075_1369594105212129_7300139840733100547_n.jpg',
    },
    {
      title: 'Women on Fire Conference',
      date: 'April 5-7, 2026',
      time: 'Friday 6:00 PM - Sunday 4:00 PM',
      location: 'ECG Cape Town',
      description: 'An empowering weekend conference for women featuring powerful teaching, prophetic activation, worship, and fellowship. Get ready to be set ablaze for God!',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1709026437503-c3a96f621119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcmF5aW5nJTIwam95ZnVsfGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Iron Men Conference',
      date: 'May 10-11, 2026',
      time: 'Friday 7:00 PM - Saturday 6:00 PM',
      location: 'ECG Cape Town',
      description: 'A transformative gathering for men to be equipped, empowered, and encouraged to become the spiritual leaders God has called them to be.',
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1567781343935-5e408319f723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5aW5nJTIwaGFuZHMlMjBiaWJsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzAxMTEyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Prophetic Night of Worship',
      date: 'February 21, 2026',
      time: '7:00 PM - 10:00 PM',
      location: 'ECG Cape Town Main Auditorium',
      description: 'Join us for an evening of prophetic worship, prayer, and divine encounters. Experience the manifest presence of God in this special night of ministry.',
      category: 'Special Service',
      image: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Easter Celebration Service',
      date: 'April 20, 2026',
      time: '9:00 AM',
      location: 'ECG Cape Town',
      description: 'Celebrate the resurrection of our Lord Jesus Christ with us! A powerful service featuring worship, communion, and a special Easter message.',
      category: 'Special Service',
      image: 'https://images.unsplash.com/photo-1613093335399-829e30811789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwaGFuZHMlMjByYWlzZWQlMjBjaHVyY2glMjBjb25jZXJ0fGVufDF8fHx8MTc3MDExMTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Stewardship Ordination Ceremony',
      date: 'June 14, 2026',
      time: '3:00 PM',
      location: 'ECG Cape Town Main Auditorium',
      description: 'Witness the ordination of new stewards as they are commissioned into ministry. A significant milestone in the life of the church.',
      category: 'Church Event',
      image: 'https://images.unsplash.com/photo-1717201611955-f7e723802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29tbXVuaXR5JTIwY2h1cmNofGVufDF8fHx8MTc3MDExMTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Youth':
        return 'bg-primary/20 text-primary';
      case 'Women':
        return 'bg-accent/20 text-accent';
      case 'Men':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-accent/20 text-accent';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Upcoming <span className="text-accent">Events</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Join us for special services, conferences, and life-changing gatherings
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-card border-white/10 overflow-hidden group hover:border-primary/50 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-4 py-2 rounded-full font-['Montserrat'] font-bold text-sm ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-['Montserrat'] font-black text-2xl text-white mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-white/70">
                      <Calendar className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <Clock className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Services Reminder */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              Regular <span className="text-accent">Services</span>
            </h2>
            <p className="text-white/70 text-lg">Join us every week for transformative worship and the Word</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">Sunday Service</h3>
              <p className="text-accent font-semibold mb-1">Every Sunday</p>
              <p className="text-white/70 mb-4">9:00 AM</p>
              <p className="text-white/60 text-sm">
                Powerful worship, prophetic teaching, and divine encounters
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">Midweek Service</h3>
              <p className="text-accent font-semibold mb-1">Every Thursday</p>
              <p className="text-white/70 mb-4">6:00 PM</p>
              <p className="text-white/60 text-sm">
                Midweek revival, prayer, and spiritual refreshing
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">Prayer Meeting</h3>
              <p className="text-accent font-semibold mb-1">Every Morning</p>
              <p className="text-white/70 mb-4">6:00 AM</p>
              <p className="text-white/60 text-sm">
                Corporate prayer, intercession, and spiritual warfare
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Don't Miss Out on <span className="text-accent">What God is Doing</span>
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Every event at ECG Cape Town is designed to encounter God's presence, receive prophetic impartation, 
            and experience breakthrough. Mark your calendar and join us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold">
                Contact Us for Info
              </Button>
            </Link>
            <Link to="/visit">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
