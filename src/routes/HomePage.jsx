import { Link } from "react-router-dom";
import { TrendingUp, BookOpen, Share2 } from "lucide-react";
import MainCategories from "../components/MainCategories";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-12 flex items-center space-x-2 text-sm text-gray-600">
            <Link
              to="/"
              className="flex items-center transition-colors hover:text-blue-800"
            >
              <span className="font-semibold text-blue-600">Home</span>
            </Link>
            <span className="text-gray-400">•</span>
            <span className="font-medium text-gray-800">
              Blogs and Articles
            </span>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col items-start justify-between gap-16 lg:flex-row">
            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl lg:leading-tight">
                  <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                    Discover Insights,
                  </span>
                  <br />
                  Share Knowledge, and
                  <br />
                  Connect with Writers
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
                  Join our community of passionate writers and readers. Explore
                  trending topics, share your expertise, and engage with
                  thoughtful content across technology, culture, and more.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <Link
                  to="/write"
                  className="group inline-flex items-center rounded-full bg-blue-800 px-8 py-4 text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium">Start Writing</span>
                </Link>
                <Link
                  to="/trending"
                  className="group inline-flex items-center rounded-full border-2 border-blue-800 bg-white px-8 py-4 text-blue-800 transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg"
                >
                  <TrendingUp className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium">Explore Trending</span>
                </Link>
              </div>
            </div>

            {/* Animated Share Button (Desktop) */}
            <div className="relative hidden lg:block">
              <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className="animate-spin-slow relative"
              >
                <path
                  id="circlePath"
                  fill="none"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  className="text-gray-600"
                />
                <text className="text-sm font-medium">
                  <textPath href="#circlePath" startOffset="0%">
                    Share Your Ideas • Connect with Others •
                  </textPath>
                </text>
              </svg>
              <button className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-800 transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
                <Share2 className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Share Button */}
          <div className="fixed bottom-8 right-8 lg:hidden">
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 shadow-lg transition-transform hover:scale-105 active:scale-95">
              <Share2 className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        {/* Categories */}
      </div>
      <MainCategories />
    </>
  );
};

export default Homepage;
