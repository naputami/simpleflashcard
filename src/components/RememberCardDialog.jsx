"use client"
import { useCardContext } from "@/context/CardContext";

export const RememberCardDialog = () => {
  const { isRemembered } = useCardContext();
  return (
    <>
      <dialog id="remember-dialog" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {isRemembered ? "Mantap!" : "Tetap Semangat!"}
          </h3>
          <p className="py-4">
            {isRemembered
              ? " Kamu keren. Ayo kita belajar lebih banyak kata!🤩"
              : "Nggak apa-apa. Ayo kita belajar lagi!💪"}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Tutup</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
