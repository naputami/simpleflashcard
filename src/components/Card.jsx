"use client";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { updateCard } from "@/service";
import { useCardContext } from "@/context/CardContext";
import { clearServiceCache } from "@/action";
import { useRouter } from "next/navigation";

export const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { setDeletedId, setIsRemembered, setUpdatedCard, updatedCard } =
    useCardContext();
  const router = useRouter();

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleRememberButton = () => {
    setIsRemembered(true);
    updateCard({
      ...data,
      is_remembered: true,
    });
    clearServiceCache().then(() => {
      router.refresh();
    });
    document.getElementById("remember-dialog").showModal();
  };

  const handleForgettenButton = () => {
    setIsRemembered(false);
    updateCard({
      ...data,
      is_remembered: false,
    });
    clearServiceCache().then(() => {
      router.refresh();
    });
    document.getElementById("remember-dialog").showModal();
  };

  const handleDeleteButtonClick = () => {
    document.getElementById("delete-confirm").showModal();
    setDeletedId(data._id);
  };

  const handleEditButtonClick = () => {
    setUpdatedCard(data);
    router.push("/editcard")
  };

  return (
    <div className="w-fit">
      <ReactCardFlip isFlipped={isFlipped}>
        {/* front componen */}
        <article className="card w-[300px] h-[200px] bg-base-200 shadow-md flex flex-col items-center justify-center relative">
          <div className="fixed top-3 left-3 flex gap-1">
            <button onClick={handleDeleteButtonClick}>
              <img src="/trash.svg" style={{ width: "28px" }} />
            </button>
            <button onClick={handleEditButtonClick}>
              <img src="/pencil.svg" style={{ width: "28px" }} />
            </button>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold text-3xl text-center">{data.word}</h2>
            <div className="flex flex-col items-center gap-8 mt-3">
              <div className="flex gap-2">
                <div className="badge badge-info gap-2 badge-outline">
                  {data.category}
                </div>
                <div
                  className={
                    data.is_remembered
                      ? "badge badge-success gap-2 badge-outline"
                      : "badge badge-error gap-2 badge-outline"
                  }
                >
                  {data.is_remembered ? "sudah hafal" : "belum hafal"}
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
        <article className="card w-[300px] h-[200px] bg-base-200 shadow-md flex flex-col items-center justify-center relative">
          <p className="text-base text-center p-2">{data.meaning}</p>
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
