import { useInView } from "../../hooks/useInView";

export function Fade({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
        transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}