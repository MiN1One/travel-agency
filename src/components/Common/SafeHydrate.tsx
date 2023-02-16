import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

interface SafeHydrateProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>, 
  HTMLDivElement
> {
  children: React.ReactNode;
  releaseContent?: boolean;
}

function SafeHydrate({
  children,
  releaseContent,
  ...restProps
}: SafeHydrateProps) {
  const [contentRendered, setContentRendered] = useState(false);

  useEffect(() => {
    setContentRendered(true);
  }, []);

  if (!contentRendered) return null;

  return (
    <div
      suppressHydrationWarning
      {...restProps}
      style={{
        ...restProps.style,
        display: releaseContent ? 'contents' : undefined
      }}
    >
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

export default SafeHydrate;