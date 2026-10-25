import Image from 'next/image';
import Badge from './Badge';
import type { ProjectItem } from '@/app/props';

const ProjectCard = (props: ProjectItem) => {
  const { title, description, stack, url, image, demoUrl } = props;

  return (
    <div className="card group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300 flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="relative md:w-5/12 w-full h-56 md:h-auto overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-7/12 p-4 md:p-6 flex flex-col justify-center">
        <h3 className="font-semibold text-xl dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((item, idx) => (
            <Badge key={idx} color="gray">
              {item}
            </Badge>
          ))}
        </div>

        {(url || demoUrl) && (
          <div className="flex flex-wrap gap-4 mt-4">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            )}

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                ▶ Watch Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;