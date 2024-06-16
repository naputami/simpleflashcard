"use client"
import { useCardContext } from "@/context/CardContext";
import { deleteCard } from "@/service";
import { clearServiceCache } from "@/action";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const DeleteCardDialog = () => {

  const {deletedId} = useCardContext()

  const router = useRouter()

  const handleDelete = () => {
    deleteCard(deletedId)
    Swal.fire("Berhasil menghapus flashcard!", "", "success");
    clearServiceCache().then(() => {
      router.push("/")
    })
  }

  return (
      <dialog id="delete-confirm" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Yakin hapus flash card ini?</h3>
          <p className="py-4">
            Data flash card akan dihapus dari database dan tidak akan bisa dikembalikan lagi.
          </p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button className="btn">Batal</button>
              <button className="btn btn-error" onClick={handleDelete}>Hapus</button>
            </form>
          </div>
        </div>
      </dialog>
  );
};
