import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export function ProjectGallery() {
  return (
    <section className="py-10 md:py-16 bg-white">
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
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group motion-safe:animate-breeze-in motion-reduce:opacity-100"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 mb-4">
                {project.afterImage ? (
                  <Image
                    src={project.afterImage}
                    alt={project.title}
                    fill
                    className="object-cover motion-safe:group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-300 rounded-xl">
                    <svg
                      className="w-10 h-10 text-gray-300 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-400">
                      {project.location}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">Photos coming soon</span>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.location}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
            </article>
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
