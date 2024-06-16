"use client";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Swal from "sweetalert2";
import { deleteCard } from "@/service";
import { useRouter } from "next/navigation";

export const Card = ({ word, meaning, is_remembered, category, cardId }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const router = useRouter();

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleRememberButton = () => {
    Swal.fire({
      text: "Kamu keren. Ayo kita belajar lebih banyak kata!🤩",
      padding: "3em",
      width: 500,
      confirmButtonText: "OK",
    });
  };

  const handleForgettenButton = () => {
    Swal.fire({
      text: "Nggak apa-apa. Ayo kita belajar lagi!💪",
      padding: "3em",
      width: 500,
      confirmButtonText: "OK",
    });
  };

  const handleDeleteCard = () => {
    deleteCard(cardId)
    router.refresh();

  }


  return (
    <div className="w-fit">
      <ReactCardFlip isFlipped={isFlipped}>
        {/* front componen */}
        <article className="card w-[300px] h-[200px] bg-base-100 shadow-xl flex flex-col items-center justify-center relative">
          <div className="fixed top-1 left-2">
            <button onClick={handleDeleteCard}>
              <img src="/trash.svg" style={{ width: "35px" }} />
            </button>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-3xl text-center">{word}</h2>
            <div className="flex flex-col items-center gap-8 mt-3">
              <div className="flex gap-2">
                <div className="badge badge-info gap-2 badge-outline">{category}</div>
                <div
                  className={
                    is_remembered
                      ? "badge badge-success gap-2 badge-outline"
                      : "badge badge-error gap-2 badge-outline"
                  }
                >
                  {is_remembered ? "sudah hafal" : "belum hafal"}
                </div>
              </div>

              <p
                className="underline text-sm hover:cursor-pointer"
                onClick={handleFlip}
              >
                Tampilkan arti kata
              </p>
            </div>
          </div>
        </article>

        {/* back component */}
        <article className="card w-[300px] h-[200px] bg-base-100 shadow-xl flex flex-col items-center justify-center relative">
          <p className="text-base text-center p-2">{meaning}</p>
          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex gap-2">
              <button
                className="btn btn-outline btn-success"
                onClick={handleRememberButton}
              >
                Sudah hafal
              </button>
              <button
                className="btn btn-outline btn-error"
                onClick={handleForgettenButton}
              >
                Belum hafal
              </button>
            </div>

            <p
              className="underline text-sm mt-2 hover:cursor-pointer"
              onClick={handleFlip}
            >
              Tampilkan kata
            </p>
          </div>
        </article>
      </ReactCardFlip>
    </div>
  );
};
