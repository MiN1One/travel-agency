import { ElementProps } from "@/interfaces/utils.interface";
import classNames from "classnames";
import classes from './SectionSkeleton.module.scss';

interface SectionSkeletonProps extends ElementProps {
  title?: string;
  contentClassName?: string;
  children: React.ReactNode;
  headContent?: React.ReactNode;
  headClassName?: string;
}

function SectionSkeleton(props: SectionSkeletonProps) {
  const {
    className,
    title,
    contentClassName,
    children,
    headContent,
    headClassName,
  } = props;
  return (
    <section className={classNames(classes.section, className)}>
      <div className="container">
        {(title || headContent) && (
          <div className={classNames(classes.head, headClassName)}>
            {title && (
              <h1 className={classNames(
                classes.heading, 
                "heading heading--1 text--dark"
              )}>
                {title}
              </h1>
            )}
            {headContent}
          </div>
        )}
        <div className={classNames(classes.content, contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionSkeleton;