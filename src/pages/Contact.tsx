import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['25 23rd Street, Elsies Industrial', 'Cape Town, 7480', 'South Africa'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['081 871 8217', 'Available during office hours'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ecgtjncapetown.org', 'We typically respond within 24 hours'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            We'd love to hear from you. Reach out with any questions, prayer requests, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-6">
                  Contact <span className="text-accent">Information</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. We're here to serve you!
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-card border-white/10 p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] font-bold text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-white/70 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Social Media */}
              <Card className="bg-card border-white/10 p-6">
                <h3 className="font-['Montserrat'] font-bold text-white mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064738237535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/ecgtjncapetown/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90 flex items-center justify-center transition-opacity"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@tjncapetownbranch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-black hover:bg-black/90 flex items-center justify-center transition-colors border border-white/20"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </Card>

              {/* WhatsApp */}
              <a href="https://wa.me/27818718217" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white w-full font-bold">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-white/10 p-8 lg:p-12">
                <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-2">
                  Send Us a <span className="text-accent">Message</span>
                </h2>
                <p className="text-white/70 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form action="https://formspree.io/f/mjgevkva" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                        placeholder="+27 123 456 789"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-white mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="bg-secondary border-white/10 text-white placeholder:text-white/40"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-secondary border-white/10 text-white placeholder:text-white/40 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto px-8 py-6 text-lg font-bold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 p-8 lg:p-12">
            <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-6 text-center">
              Office <span className="text-accent">Hours</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80">
              <div className="text-center md:text-left">
                <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-4">
                  Weekdays
                </h3>
                <p className="mb-2">Monday - Friday</p>
                <p className="text-accent font-bold text-lg">9:00 AM - 5:00 PM</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-4">
                  Weekends
                </h3>
                <p className="mb-2">Saturday - Sunday</p>
                <p className="text-accent font-bold text-lg">By Appointment Only</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/70">
                For urgent pastoral care or prayer requests outside office hours, 
                please call our emergency line at <span className="text-accent font-bold">+27 (0) 123 456 789</span>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Need <span className="text-accent">Prayer</span>?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Our prayer team is standing by to intercede for you. Submit your prayer request 
            and we will lift you up before the throne of grace.
          </p>
          <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold">
            Submit Prayer Request
          </Button>
        </div>
      </section>
    </div>
  );
}