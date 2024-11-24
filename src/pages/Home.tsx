import { useState, useEffect } from 'react';
import { Palette, Wand2 } from 'lucide-react';
import { generatePalette } from '../utils/colorGenerator';
import { ColorCard } from '../components/ColorCard';
import { Helmet } from 'react-helmet'; // Importing React Helmet

export default function Home() {
  const [text, setText] = useState('');
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    if (text) {
      setColors(generatePalette(text));
    }
  }, [text]);

  return (
    <>
      {/* SEO Management with Helmet */}
      <Helmet>
        <title>Color Palette Generator – Create Beautiful Color Themes for Your Website</title>
        <meta
          name="description"
          content="Generate beautiful, harmonious color palettes based on any text you input. Perfect for web design and creative projects."
        />
        <meta
          name="keywords"
          content="color palette generator, color scheme generator, create color palette, color themes, web design, color harmony"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Color Palette Generator – Create Beautiful Color Themes for Your Website" />
        <meta
          property="og:description"
          content="Generate beautiful, harmonious color palettes based on any text you input. Perfect for web design and creative projects."
        />
        <meta property="og:image" content="https://www.yourwebsite.com/your-image.jpg" /> {/* Replace with your own image URL */}
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Color Palette Generator – Create Beautiful Color Themes for Your Website" />
        <meta
          name="twitter:description"
          content="Generate beautiful, harmonious color palettes based on any text you input. Perfect for web design and creative projects."
        />
        <meta name="twitter:image" content="https://www.yourwebsite.com/your-image.jpg" /> {/* Replace with your own image URL */}
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-gray-900">Color Generator</h1>
          </div>
          <p className="mt-2 text-gray-600">Transform your text into beautiful color palettes</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Input Section */}
        <div className="relative max-w-xl mx-auto">
          <Wand2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter any text to generate a palette..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
        </div>

        {/* Color Palette Display */}
        {colors.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 h-[400px]">
            {colors.map((color, index) => (
              <ColorCard key={color} color={color} index={index} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!text && (
          <div className="mt-12 text-center">
            <div className="rounded-lg border-2 border-dashed border-gray-300 p-12">
              <Palette className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No palette generated</h3>
              <p className="mt-1 text-sm text-gray-500">Start typing to generate your unique color palette</p>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-medium text-gray-900">Unique Palettes</h3>
            <p className="mt-2 text-sm text-gray-500">Each text input generates a unique, harmonious color combination</p>
          </div>
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-medium text-gray-900">Easy Export</h3>
            <p className="mt-2 text-sm text-gray-500">Click any color to copy its hex code to your clipboard</p>
          </div>
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-medium text-gray-900">Real-time Updates</h3>
            <p className="mt-2 text-sm text-gray-500">See your palette change instantly as you type</p>
          </div>
        </div>
      </main>
      <GoogleAd />
    </>
  );
}
