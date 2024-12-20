export function CrossIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Close Menu"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      {...props}
    >
      <g fillRule="evenodd" opacity=".5">
        <path d="M2.222.808l16.97 16.97-1.414 1.414L.808 2.222z" />
        <path d="M.808 17.778L17.778.808l1.414 1.414-16.97 16.97z" />
      </g>
    </svg>
  );
}
