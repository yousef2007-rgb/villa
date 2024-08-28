import Link from "next/link";

export default function Page({ params }: { params: { src: string } }) {
  return (
    <div className="bg-black h-screen">
      <Link className="cursor-pointer " href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#e8eaed"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </Link>
      <img className="w-screen" src={`/${params.src}`} alt="" />
    </div>
  );
}
