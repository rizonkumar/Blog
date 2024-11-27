import {
  Search,
  Monitor,
  Code,
  Database,
  Search as SearchEngine,
  Brain,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  const categories = [
    {
      name: "All Posts",
      path: "/posts",
      icon: <ChevronRight className="size-4" />,
      isPrimary: true,
    },
    {
      name: "Web Design",
      path: "/posts?cat=web-design",
      icon: <Monitor className="size-4" />,
    },
    {
      name: "Development",
      path: "/posts?cat=development",
      icon: <Code className="size-4" />,
    },
    {
      name: "Databases",
      path: "/posts?cat=databases",
      icon: <Database className="size-4" />,
    },
    {
      name: "Search Engines",
      path: "/posts?cat=search-engines",
      icon: <SearchEngine className="size-4" />,
    },
    {
      name: "AI",
      path: "/posts?cat=ai",
      icon: <Brain className="size-4" />,
    },
  ];

  return (
    <div className="bg-white py-3 sm:py-6">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl sm:max-w-4xl md:max-w-5xl">
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 h-16 w-16 rounded-full bg-blue-100/50 blur-2xl sm:-left-4 sm:-top-4 sm:h-24 sm:w-24" />
          <div className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-blue-100/50 blur-2xl sm:-right-4 sm:-top-4 sm:h-24 sm:w-24" />

          {/* Main content */}
          <div className="relative overflow-hidden rounded-xl border border-gray-200/50 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
            <div className="flex flex-col gap-3 sm:gap-6">
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:gap-2.5 sm:px-5 sm:py-2.5 ${
                      category.isPrimary
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-50 text-gray-700 ring-1 ring-gray-200/70 hover:bg-gray-100 hover:ring-gray-300"
                    }`}
                  >
                    <span
                      className={`transition-transform duration-200 ${
                        category.isPrimary
                          ? "text-white group-hover:scale-110"
                          : "text-blue-600 group-hover:scale-110"
                      }`}
                    >
                      {category.icon}
                    </span>
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:mx-auto sm:max-w-md">
                <div className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gray-50 px-4 py-2 ring-1 ring-gray-200/70 transition-all duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 sm:px-5 sm:py-2.5">
                  <Search className="size-4 text-gray-400 transition-colors duration-200 group-focus-within:text-blue-600" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                  {/* Animated background on focus */}
                  <div className="absolute inset-0 -z-10 translate-y-full bg-white transition-transform duration-200 group-focus-within:translate-y-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
