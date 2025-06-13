import classNames from "classnames";

interface NotFoundProps {
  className?: string;
}

const NotFound = ({ className }: NotFoundProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        "h-16 w-16 mx-auto text-muted-foreground mb-4",
        className
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default NotFound;
