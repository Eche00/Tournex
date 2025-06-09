import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className=" bg-white dark:bg-[#1F1F1F]  h-screen">{children}</div>
    </div>
  );
}
