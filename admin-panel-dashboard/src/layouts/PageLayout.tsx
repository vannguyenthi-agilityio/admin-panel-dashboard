// Libraries
import { ReactNode, Suspense } from 'react';

// Components
import Loading from '@/components/commons/Loading/Loading'; // TODO: will apply alias `@components/commons/Loading` in here

const PageLayout = ({
  children,
  className = 'h-full',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`min-h-0 md:min-h-[calc(100vh)] ${className}`}>
      <div className="max-h-full">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default PageLayout;
