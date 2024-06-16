"use client";
import { PageTemplate } from "@/components/PageTemplate";
import { useState } from "react";
import { updateCard } from "@/service";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { clearServiceCache } from "@/action";
import { useCardContext } from "@/context/CardContext";

export default function EditCard() {
  const { updatedCard } = useCardContext();

  console.log(updatedCard);

  const [word, setWord] = useState(updatedCard.word);
  const [meaning, setMeaning] = useState(updatedCard.meaning);
  const [category, setCategory] = useState(updatedCard.category);
  const [error, setError] = useState({
    word: "",
    meaning: "",
  });

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
    if (word.length > 50) {
      setError({
        ...error,
        word: "Kata tidak boleh lebih dari 50 karakter",
      });
      return;
    }

    if (meaning.length > 100) {
      setError({
        ...error,
        meaning: "Makna kata tidak boleh lebih dari 100 karakter",
      });
      return;
    }
    const data = {
      ...updatedCard,
      word,
      meaning,
      category,
    };
    updateCard(data);
    Swal.fire("Berhasil mengedit flashcard!", "", "success");
    setWord("");
    setMeaning("");
    setCategory("");
    clearServiceCache().then(() => {
      router.push("/");
    });
  };

  return (
    <PageTemplate>
      <section className="container mx-auto w-4/5 md:w-1/3 mt-16">
        <h2 className="text-center font-semibold text-xl mb-6">
          Edit Data Flashcard{" "}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Masukkan kata"
              className="input input-bordered input-primary w-full"
              value={word}
              onChange={handleWordChange}
              required
            />
            {error.word && (
              <div className="label">
                <span className="label-text-alt text-error">{error.word}</span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <input
              type="text"
              placeholder="Masukkan makna kata"
              className="input input-bordered input-primary w-full"
              value={meaning}
              onChange={handleMeaningChange}
              required
            />
            {error.meaning && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {error.meaning}
                </span>
              </div>
            )}
          </label>

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
          <div className="space-x-2">
            <button className="btn" onClick={() => router.push("/")}>
              Kembali
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </PageTemplate>
  );
}
