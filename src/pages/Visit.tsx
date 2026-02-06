import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { MapPin, Clock, Users, Coffee, Heart, Baby, Wifi, Accessibility } from 'lucide-react';

export function Visit() {
  const whatToExpect = [
    {
      icon: Users,
      title: 'Warm Welcome',
      description: 'Our hospitality team will greet you at the entrance and help you feel right at home.',
    },
    {
      icon: Coffee,
      title: 'Refreshments',
      description: 'Enjoy complimentary refreshments before and after the service in our fellowship hall.',
    },
    {
      icon: Heart,
      title: 'Spirit-Filled Worship',
      description: 'Experience powerful worship led by our anointed worship team that will usher in God\'s presence.',
    },
    {
      icon: Baby,
      title: 'Children\'s Ministry',
      description: 'Safe, engaging programs for children of all ages during the service.',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Stay connected with complimentary WiFi throughout the building.',
    },
    {
      icon: Accessibility,
      title: 'Accessibility',
      description: 'Wheelchair accessible facilities and designated parking for guests with disabilities.',
    },
  ];

  const serviceTimes = [
    {
      day: 'Sunday',
      service: 'Main Service',
      time: '8:00 AM - 2:00 PM',
      description: 'Our primary worship service with powerful preaching and prophetic ministry',
    },
    {
      day: 'Thursday',
      service: 'Midweek Service',
      time: '6:00 PM',
      description: 'Midweek revival and prayer service for spiritual refreshing',
    },
    {
      day: 'Daily',
      service: 'Morning Prayers',
      time: 'Zoom',
      description: 'Join us online for morning prayer and intercession',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765309541707-4b2bf887e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaHVyY2glMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDAzMzEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Church Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Visit <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            We can't wait to meet you! Plan your visit to ECG Cape Town and experience the house of miracles.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-6">
                Find <span className="text-accent">Us</span>
              </h2>
              
              <Card className="bg-card border-white/10 p-8 mb-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">Address</h3>
                    <p className="text-white/80 leading-relaxed">
                      ECG TJNC Cape Town<br />
                      25 23rd Street, Elsies Industrial<br />
                      Cape Town, 7480<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-['Montserrat'] font-bold text-white mb-3">Parking Information</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Ample free parking is available on-site. Designated parking spaces for guests with 
                    disabilities are located near the main entrance.
                  </p>
                </div>
              </Card>

              <Button className="bg-accent hover:bg-accent/90 text-black font-bold w-full sm:w-auto">
                Get Directions
              </Button>
            </div>

            <div>
              {/* Google Maps Placeholder */}
              <Card className="bg-secondary border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-2">
                    Map Coming Soon
                  </h3>
                  <p className="text-white/70 mb-6">
                    Interactive map will be displayed here
                  </p>
                  <p className="text-white/60 text-sm">
                    25 23rd Street, Elsies Industrial<br />
                    Cape Town, 7480
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              Service <span className="text-accent">Times</span>
            </h2>
            <p className="text-white/70 text-lg">Choose a service that works for your schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceTimes.map((service, index) => (
              <Card key={index} className="bg-card border-white/10 p-8 text-center hover:border-primary/50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="font-['Montserrat'] font-bold text-accent text-lg mb-2">
                  {service.day}
                </div>
                <h3 className="font-['Montserrat'] font-black text-2xl text-white mb-2">
                  {service.service}
                </h3>
                <div className="text-white text-xl font-bold mb-4">
                  {service.time}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              What to <span className="text-accent">Expect</span>
            </h2>
            <p className="text-white/70 text-lg">Your first visit to ECG Cape Town</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToExpect.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card border-white/10 p-8 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 lg:p-12 mt-12">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4 text-center">
              What Should I Wear?
            </h3>
            <p className="text-white/80 text-center leading-relaxed max-w-3xl mx-auto">
              Come as you are! We have a casual, comfortable atmosphere at ECG Cape Town. Whether you prefer 
              formal or casual attire, you'll fit right in. Our focus is on encountering God, not on what 
              you're wearing.
            </p>
          </Card>
        </div>
      </section>

      {/* First-Timers */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
                First Time <span className="text-accent">Visitor</span>?
              </h2>
              <p className="text-white/80 text-lg">
                We'd love to know you're coming! Let us prepare a special welcome for you.
              </p>
            </div>

            <div className="space-y-4 text-white/80 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl flex-shrink-0">1.</span>
                <p>Arrive 15-20 minutes early to find parking and get oriented</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl flex-shrink-0">2.</span>
                <p>Visit our welcome desk in the main lobby - we have a gift for you!</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl flex-shrink-0">3.</span>
                <p>Feel free to ask our hospitality team any questions</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl flex-shrink-0">4.</span>
                <p>Children can check in at our Children's Ministry desk</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent text-xl flex-shrink-0">5.</span>
                <p>Find a seat and get ready to experience the presence of God!</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold">
                  Let Us Know You're Coming
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Ready to <span className="text-accent">Experience</span> ECG Cape Town?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Your life-changing encounter with God awaits. We look forward to welcoming you into the 
            house of miracles this Sunday!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/watch-live">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold">
                Watch Online First
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}