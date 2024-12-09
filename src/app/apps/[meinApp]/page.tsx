import React from "react";
import { dictionary } from "@/data/apps-info";
import Header from "@/components/ui/header/header";

interface Params {
    meinApp: number;
}

export default function AppPost({ params }: { params: Params }) {
  const appData = dictionary[params.meinApp];

  

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-10">
          {/* Header Section */}
          <Header title={appData.name} subtitle={`Vicken | ${appData.date}`} />

          <section className="space-y-12">
            {/* Blog Info Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 items-center lg:items-start">
              <div className="flex-shrink-0">
                <img
                  src={appData.imageUrl}
                  alt={`${appData.name} main illustration`}
                  className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </div>
              <div className="lg:flex-1 mt-6 lg:mt-0">
                <p className="text-lg leading-relaxed">{appData.intro}</p>
              </div>
            </div>

            {/* Row of Images */}
            {appData.images && appData.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {appData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${appData.name} additional illustration ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                  />
                ))}
              </div>
            )}
            
          </section>


          {/* Footer Section */}
          <footer className="space-y-6">
            <p className="text-lg leading-relaxed">{appData.conclusion}</p>
          </footer>
          <a
            href={appData.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent  text-lg font-medium rounded-lg border border-white shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <img
              src="/images/gp.png" // Update this path with your actual image location
              alt="Google Play Logo"
              className="w-5 h-5 mr-3"
            />
            <span className="text-sm font-semibold">Google Play</span>
          </a>
        </article>
      </main>
    </div>
  );
}
