import Link from "next/link";

export function ProjectGallery() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Across the Cape Fear Coast
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From Wrightsville Beach to Southport, see the quality craftsmanship
            Breeze Roofing delivers on every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-6"
            >
              <svg
                className="w-10 h-10 text-gray-300 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <span className="text-sm font-semibold text-gray-500">
                Before &amp; After
              </span>
              <span className="text-xs text-gray-400 mt-1">Coming Soon</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg bg-navy text-white hover:bg-navy-light transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
