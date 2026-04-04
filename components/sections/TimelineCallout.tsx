import { Clock } from "lucide-react";

interface TimelineStep {
  phase: string;
  time: string;
}

interface TimelineCalloutProps {
  title?: string;
  duration: string;
  steps: TimelineStep[];
}

export function TimelineCallout({ title = "Project Timeline", duration, steps }: TimelineCalloutProps) {
  return (
    <section className="py-12 bg-amber/5 border-y border-amber/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-700 mb-6">
              <strong>Expected Duration:</strong> {duration}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber/20 text-amber flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{step.phase}</p>
                    <p className="text-sm text-gray-600">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
