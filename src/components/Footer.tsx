import { Link } from 'react-router-dom';
import { X, Linkedin, Mail, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function Footer() {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent('Check out this amazing color palette generator!');

  const socialLinks = [
    {
      name: 'X',
      icon: X,
      url: `https://X.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${shareTitle}&body=${shareUrl}`
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/image-extractor" className="text-base text-gray-500 hover:text-gray-900">
                  AI Color Extractor
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Tools
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-500 hover:text-gray-900">
                  Text to Color
                </Link>
              </li>
              <li>
                <Link to="/image-extractor" className="text-base text-gray-500 hover:text-gray-900">
                  Image Extractor
                </Link>
              </li>
            </ul>
          </div>

          {/* Share */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Share
            </h3>
            <div className="mt-4 flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          {/* Removed language selector section as it's no longer needed */}

        </div>

        {/* Embed Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Embed Palette
          </h3>
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={`<a href="${window.location.href}" target="_blank" rel="dofollow">Generated with TextToColor</a>`}
                className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`<a href="${window.location.href}" target="_blank" rel="dofollow">Generated with TextToColor</a>`);
                  toast.success('Code copied');
                }}
                className="absolute inset-y-0 right-0 px-3 flex items-center bg-gray-50 rounded-r-md border-l hover:bg-gray-100"
              >
                <Share2 className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} TextToColor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
