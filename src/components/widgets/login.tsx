import Link from "next/link";
import clsx from "clsx";

export function Login() {
  return (
    <>
      <Link
        key={"/"}
        href={"/"}
        className={clsx(
          "transition-colors hover:text-foreground/80 text-white text-base font-bold text-center medium:text-left",
        )}
      >
        로그인
      </Link>
    </>
  );
}
