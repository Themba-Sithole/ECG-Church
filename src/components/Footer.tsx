import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Ecg-logo_refixed.png" 
              alt="ECG Logo" 
              className="h-12 w-auto mb-4"
            />
            <h3 className="font-['Montserrat'] font-bold text-lg text-white mb-4">
              ECG TJNC Cape Town
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              The Jesus Nation Church - Enlightened Christian Gathering. A prophetic church spreading the gospel of Jesus Christ to the whole world.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064738237535"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/ecgtjncapetown/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@tjncapetownbranch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/stewardship" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Stewardship & Tribes
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-primary transition-colors text-sm">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg text-white mb-4">
              Service Times
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">
                <span className="text-accent font-medium">Sunday Service:</span>
                <br />8:00 AM - 2:00 PM
              </li>
              <li className="text-white/70">
                <span className="text-accent font-medium">Midweek Service:</span>
                <br />Thursday, 6:00 PM
              </li>
              <li className="text-white/70">
                <span className="text-accent font-medium">Morning Prayers:</span>
                <br />Zoom (Daily)
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-lg text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  25 23rd Street, Elsies Industrial<br />
                  Cape Town, South Africa, 7480
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/70">081 871 8217</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/70">info@ecgtjncapetown.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} ECG TJNC Cape Town - The Jesus Nation Church. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Part of ECG International Church founded by Prophet Shepherd Bushiri
          </p>
        </div>
      </div>
    </footer>
  );
}