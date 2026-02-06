import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { 
  Crown, 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  MessageCircle,
  Volume2, 
  Music, 
  Shield, 
  Eye, 
  DollarSign, 
  ShoppingCart, 
  Scale, 
  Target,
  Handshake,
  Star
} from 'lucide-react';

export function Stewardship() {
  const faqs = [
    {
      question: 'Why is stewardship important at ECG Church?',
      answer: 'Stewardship is a divine calling to serve and lead in God\'s Kingdom. It represents a commitment to spiritual excellence, leadership development, and kingdom advancement. Stewards are trained to serve with integrity, wisdom, and prophetic insight, becoming instrumental in building the church and impacting lives.',
    },
    {
      question: 'How many registered stewards are there worldwide?',
      answer: 'ECG International Church has thousands of registered stewards across all our branches worldwide. This growing network of committed servants continues to expand as more believers answer the call to stewardship ministry.',
    },
    {
      question: 'What roles do stewards play after ordination?',
      answer: 'After ordination, stewards serve in various capacities including: church leadership positions, ministry coordination, prophetic intercession, community outreach, discipleship mentoring, administrative support, and representing the church in kingdom assignments. Stewards are deployed according to their gifts and calling.',
    },
  ];

  const tribes = [
    {
      name: 'Tribe of Asher',
      focus: 'Hospitality & Charity',
      description: 'The Tribe of Asher is dedicated to showing the love of Christ through acts of hospitality and charity. They serve by welcoming guests, caring for the needy, and ensuring everyone feels the warmth of God\'s love.',
      icon: Heart,
      color: 'primary',
      responsibilities: [
        'Guest reception and hospitality',
        'Community charity programs',
        'Welcoming and integration of new members',
        'Special events coordination',
      ],
    },
    {
      name: 'Tribe of Naphtali',
      focus: 'Evangelists & Preachers',
      description: 'Called to spread the gospel with power and boldness, the Tribe of Naphtali consists of evangelists and preachers who take the message of Jesus Christ to the streets, communities, and nations.',
      icon: Volume2,
      color: 'accent',
      responsibilities: [
        'Evangelism and outreach programs',
        'Street ministry and missions',
        'Preaching and teaching the Word',
        'Crusades and revival meetings',
      ],
    },
    {
      name: 'Tribe of Judah',
      focus: 'Worship, Audio & Visual',
      description: 'The Tribe of Judah leads in worship and manages all audio-visual aspects of services, creating an atmosphere where God\'s presence can be experienced through music and technology.',
      icon: Music,
      color: 'primary',
      responsibilities: [
        'Worship team and music ministry',
        'Sound engineering and audio production',
        'Visual media and live streaming',
        'Creative arts and stage production',
      ],
    },
    {
      name: 'Tribe of Gad',
      focus: 'Protocols, Security, Ushers',
      description: 'The Tribe of Gad ensures order, safety, and smooth operations during services and events. They serve as ushers, security, and protocol officers, creating a safe and organized environment.',
      icon: Shield,
      color: 'accent',
      responsibilities: [
        'Church security and safety',
        'Ushering and crowd management',
        'Protocol and event coordination',
        'Parking and facility management',
      ],
    },
    {
      name: 'Tribe of Simeon',
      focus: 'Watchmen',
      description: 'The Tribe of Simeon serves as spiritual watchmen, standing in prayer and intercession for the church, leadership, and the nations. They are vigilant in spiritual warfare.',
      icon: Eye,
      color: 'primary',
      responsibilities: [
        'Intercessory prayer ministry',
        'Spiritual warfare and deliverance',
        'Prayer watches and vigils',
        'Prophetic intercession',
      ],
    },
    {
      name: 'Tribe of Joseph',
      focus: 'Kingdom Financiers',
      description: 'The Tribe of Joseph comprises kingdom financiers who understand the power of financial stewardship and use their resources to advance God\'s kingdom and support the vision of the church.',
      icon: DollarSign,
      color: 'accent',
      responsibilities: [
        'Financial stewardship and giving',
        'Kingdom investment strategies',
        'Support for church projects',
        'Wealth creation training',
      ],
    },
    {
      name: 'Tribe of Zebulun',
      focus: 'Traders & Business',
      description: 'The Tribe of Zebulun is made up of entrepreneurs, traders, and business professionals who demonstrate kingdom principles in the marketplace and create wealth for God\'s glory.',
      icon: ShoppingCart,
      color: 'primary',
      responsibilities: [
        'Business networking and mentorship',
        'Marketplace ministry',
        'Entrepreneurship training',
        'Economic empowerment programs',
      ],
    },
    {
      name: 'Tribe of Dan',
      focus: 'Legal Team',
      description: 'The Tribe of Dan provides legal counsel and support to the church and its members. They ensure compliance, protect the church\'s interests, and offer legal assistance where needed.',
      icon: Scale,
      color: 'accent',
      responsibilities: [
        'Legal advice and consultation',
        'Contract review and compliance',
        'Member legal support',
        'Policy development',
      ],
    },
    {
      name: 'Tribe of Issachar',
      focus: 'Prophetic Intercessors',
      description: 'The Tribe of Issachar operates in prophetic insight and discernment, understanding the times and seasons. They intercede with prophetic wisdom and guide the church through prayer.',
      icon: Target,
      color: 'primary',
      responsibilities: [
        'Prophetic intercession and prayer',
        'Discernment and spiritual insight',
        'Understanding times and seasons',
        'Strategic prayer initiatives',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/10 rounded-full mb-6">
            <Crown className="w-12 h-12 text-accent" />
          </div>
          <h1 className="font-['Montserrat'] font-black text-4xl sm:text-6xl text-white mb-6">
            Stewardship & Tribes
          </h1>
          <p className="text-2xl text-accent font-bold mb-4">
            Bringing God's Kingdom to His People
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            A divine calling to servant leadership and prophetic ministry
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 lg:p-12">
            <h2 className="font-['Montserrat'] font-black text-3xl text-white mb-6">
              Introduction to <span className="text-accent">Stewardship</span>
            </h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Stewardship at ECG is more than a position—it's a divine calling to serve in God's Kingdom 
                with excellence, integrity, and prophetic insight. It represents a sacred trust to manage 
                the affairs of God's house and shepherd His people.
              </p>
              <p>
                As stewards, we are called to be faithful administrators of God's grace, walking in wisdom 
                and operating in the power of the Holy Spirit. This ministry is foundational to the growth 
                and advancement of ECG worldwide.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-6">
                Background & <span className="text-accent">Foundation</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  The Stewardship Ministry was introduced in 2015 by Ph.D. Prophet Shepherd Bushiri (Major 1), 
                  the founder and overseer of ECG International Church. This ministry was birthed from a divine 
                  mandate to raise leaders who would carry the prophetic vision of the church.
                </p>
                <p>
                  Stewardship is an integral part of the leadership structure and prophetic ministry of ECG. 
                  It serves as a training ground for those called to higher levels of service, leadership, 
                  and spiritual authority in the Kingdom.
                </p>
                <p>
                  Under the guidance of Major 1, stewardship has become a global movement, raising thousands 
                  of committed servants who are transforming communities and advancing the gospel worldwide.
                </p>
              </div>
            </div>

            <Card className="bg-card border-white/10 p-8">
              <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4 text-center">
                Established 2015
              </h3>
              <p className="text-white/70 text-center leading-relaxed mb-6">
                Founded by Prophet Shepherd Bushiri to raise servant leaders who would impact the world
              </p>
              <div className="bg-secondary/30 rounded-lg p-4 text-center">
                <p className="text-accent font-bold text-lg mb-1">Thousands of Stewards</p>
                <p className="text-white/60 text-sm">Serving across ECG branches worldwide</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose of Stewardship */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              Purpose of <span className="text-accent">Stewardship</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-white/10 p-8 text-center hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Servant Leadership
              </h3>
              <p className="text-white/70 leading-relaxed">
                To cultivate a heart of service and humility, following Christ's example of servant leadership
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8 text-center hover:border-accent/50 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Prophetic Training
              </h3>
              <p className="text-white/70 leading-relaxed">
                To equip believers with prophetic insight, spiritual discernment, and Kingdom wisdom
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8 text-center hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Kingdom Advancement
              </h3>
              <p className="text-white/70 leading-relaxed">
                To raise leaders who will advance God's Kingdom and transform communities worldwide
              </p>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 p-8 lg:p-12 text-center">
            <h3 className="font-['Montserrat'] font-black text-2xl sm:text-3xl text-white mb-4">
              Mission Statement
            </h3>
            <p className="text-white/90 text-xl leading-relaxed max-w-4xl mx-auto">
              "The mission of stewardship is to bring God's Kingdom to His people through faithful service, 
              prophetic ministry, and dedicated leadership that reflects the heart of Christ."
            </p>
          </Card>
        </div>
      </section>

      {/* Training & Ordination */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-12 text-center">
            Training & <span className="text-accent">Ordination Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-white/10 p-8">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-['Montserrat'] font-black text-2xl text-primary">1</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Application & Selection
              </h3>
              <p className="text-white/70 leading-relaxed">
                Interested members submit applications and undergo a selection process based on spiritual 
                maturity, character, and commitment to service.
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-['Montserrat'] font-black text-2xl text-primary">2</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Comprehensive Training
              </h3>
              <p className="text-white/70 leading-relaxed">
                Selected candidates undergo intensive training in leadership, prophetic ministry, church 
                administration, and spiritual disciplines.
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-['Montserrat'] font-black text-2xl text-accent">3</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Practical Service
              </h3>
              <p className="text-white/70 leading-relaxed">
                Trainees gain hands-on experience serving in various church ministries and departments 
                under mentorship.
              </p>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-['Montserrat'] font-black text-2xl text-accent">4</span>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                Ordination & Tribe Assignment
              </h3>
              <p className="text-white/70 leading-relaxed">
                Upon successful completion, candidates are ordained as stewards and assigned to one of the 
                12 Tribes based on their gifts and calling.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] font-black text-3xl sm:text-4xl text-white mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-white/70 text-lg">Learn more about stewardship ministry</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card border-white/10 p-8 hover:border-accent/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full flex-shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRIBES SECTION */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <h2 className="font-['Montserrat'] font-black text-4xl sm:text-5xl text-white mb-4">
              The 12 <span className="text-accent">Tribes</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              After stewardship ordination, members are assigned to one of the 12 Tribes based on their gifts, 
              calling, and area of service. Each tribe has a unique function within the body of Christ.
            </p>
          </div>

          {/* Tribes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tribes.map((tribe, index) => {
              const Icon = tribe.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-white/10 p-8 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className={`flex items-center justify-center w-16 h-16 bg-${tribe.color}/10 rounded-full mb-6`}>
                    <Icon className={`w-8 h-8 text-${tribe.color}`} />
                  </div>
                  
                  <h3 className="font-['Montserrat'] font-black text-2xl text-white mb-2">
                    {tribe.name}
                  </h3>
                  
                  <div className={`inline-block bg-${tribe.color}/20 px-3 py-1 rounded-md mb-4`}>
                    <span className={`font-['Montserrat'] font-semibold text-${tribe.color} text-sm`}>
                      {tribe.focus}
                    </span>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {tribe.description}
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-['Montserrat'] font-bold text-white text-sm mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {tribe.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-white/70 text-sm">
                          <span className={`text-${tribe.color} mr-2 flex-shrink-0 mt-0.5`}>•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* How Tribes Work Together */}
          <div className="mb-16">
            <h3 className="font-['Montserrat'] font-black text-3xl text-white mb-8 text-center">
              Working Together in <span className="text-accent">Unity</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-white/10 p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                  Collaboration
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Tribes work together seamlessly, supporting one another and ensuring all aspects of ministry 
                  are covered with excellence.
                </p>
              </Card>

              <Card className="bg-card border-white/10 p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                  Excellence
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Each tribe is committed to operating with excellence, maintaining high standards in their 
                  respective areas of service.
                </p>
              </Card>

              <Card className="bg-card border-white/10 p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-['Montserrat'] font-bold text-xl text-white mb-3">
                  Purpose
                </h4>
                <p className="text-white/70 leading-relaxed">
                  Every tribe understands their unique purpose and calling, working together to fulfill the 
                  vision of ECG TJNC Cape Town.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-black text-3xl sm:text-5xl text-white mb-6">
            Ready to Join <span className="text-accent">Stewardship</span>?
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            If you feel called to serve at a higher level and desire to be trained in prophetic ministry 
            and kingdom leadership, we invite you to learn more about the stewardship opportunity and find 
            your tribe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold">
                Apply for Stewardship
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-bold">
                Learn More About ECG
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
