"use client";
import { PageTemplate } from "@/components/PageTemplate";
import { useState } from "react";
import { postNewCard } from "@/service";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddNewCard() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleMeaningChange = (e) => {
    setMeaning(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      word,
      meaning,
      category,
    };
    postNewCard(newCard);
    Swal.fire("Berhasil menambahlan flashcard!", "", "success");
    setWord("");
    setMeaning("");
    setCategory("");
    router.push("/");
    router.refresh();
  };

  return (
    <PageTemplate>
      <section className="container mx-auto w-4/5 md:w-1/3 mt-16">
        <h2 className="text-center font-semibold text-xl mb-6">
          Tambah Flash Card Baru{" "}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Masukkan kata"
            className="input input-bordered input-primary w-full"
            value={word}
            onChange={handleWordChange}
            required
          />
          <input
            type="text"
            placeholder="Masukkan makna kata"
            className="input input-bordered input-primary w-full"
            value={meaning}
            onChange={handleMeaningChange}
            required
          />
          <select
            className="select select-primary w-full"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option disabled value="">
              Pilih kategori
            </option>
            <option value="noun">noun</option>
            <option value="adjective">adjective</option>
            <option value="adverb">adverb</option>
            <option value="verb">verb</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </PageTemplate>
  );
}
