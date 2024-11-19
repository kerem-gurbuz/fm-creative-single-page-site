export function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Open Menu"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      {...props}
    >
      <g fill="#000" fillRule="evenodd" opacity=".5">
        <path d="M0 0h24v2H0zM0 8h24v2H0zM0 16h24v2H0z" />
      </g>
    </svg>
  );
}
