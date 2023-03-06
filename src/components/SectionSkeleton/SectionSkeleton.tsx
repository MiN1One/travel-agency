import { ElementProps } from "@/interfaces/utils.interface";
import classNames from "classnames";
import React from "react";
import classes from './SectionSkeleton.module.scss';

interface SectionSkeletonProps extends ElementProps {
  title?: string;
  contentClassName?: string;
  children: React.ReactNode;
  headContent?: React.ReactNode;
  headClassName?: string;
  withContainer?: boolean;
}

function SectionSkeleton(props: SectionSkeletonProps) {
  const {
    className,
    title,
    contentClassName,
    children,
    headContent,
    withContainer = true,
    headClassName,
  } = props;

  let content = (
    <React.Fragment>
      <div className={classNames(classes.content, contentClassName)}>
        {children}
      </div>
    </React.Fragment>
  );
  if (withContainer) {
    content = (
      <div className="container">
        {content}
      </div>
    );
  }

  return (
    <section className={classNames(classes.section, className)}>
      <div className="container">
        {(title || headContent) && (
          <div className={classNames(classes.head, headClassName)}>
            {title && (
              <h5 className={classNames(
                classes.heading, 
                "heading heading--1 text--dark text-overflow"
              )}>
                {title}
              </h5>
            )}
            {headContent}
          </div>
        )}
      </div>
      {content}
    </section>
  );
}

export default SectionSkeleton;