import navLinks from "src/data/nav-links.json";
import { useLocale } from "src/hooks/locale.hook";
import { Link } from "../common/link";

export const NavigationLinks = () => {
  const { locale } = useLocale();

  return (
    <>
      {Object.entries(navLinks).map(([id, { en, zh }]) => (
        <Link
          key={id}
          href={"#" + id}
          className="px-4 py-2 rounded-md text-lg font-semibold text-center transition-bg hover:bg-slate-200 hover:dark:bg-slate-800 active:bg-slate-300 active:dark:bg-slate-700"
        >
          {locale === "en-US" ? en : zh}
        </Link>
      ))}
    </>
  );
};
