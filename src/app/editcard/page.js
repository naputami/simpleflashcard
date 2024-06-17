"use client";
import { PageTemplate } from "@/components/PageTemplate";
import { useState } from "react";
import { updateCard } from "@/service";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { clearServiceCache } from "@/action";
import { useCardContext } from "@/context/CardContext";
import { TextInput } from "@/components/TextInput";
import { SelectCategoryInput } from "@/components/SelectCategoryInput";

export default function EditCard() {
  const { updatedCard } = useCardContext();

  const [word, setWord] = useState(updatedCard.word);
  const [meaning, setMeaning] = useState(updatedCard.meaning);
  const [category, setCategory] = useState(updatedCard.category);
  const [error, setError] = useState({
    word: "",
    meaning: "",
    category: "",
  });

  const router = useRouter();

  const handleWordChange = (e) => {
    setWord(e.target.value);
    setError({
      ...error,
      word: "",
    });
  };

  const handleMeaningChange = (e) => {
    setMeaning(e.target.value);
    setError({
      ...error,
      meaning: "",
    });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setError({
      ...error,
      category: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.length == 0) {
      setError({
        ...error,
        word: "Kolom kata harus diisi.",
      });

      return;
    }

    if (meaning.length == 0) {
      setError({
        ...error,
        meaning: "Kolom makna kata harus diisi.",
      });

      return;
    }
    if (word.length > 30) {
      setError({
        ...error,
        word: "Kata tidak boleh lebih dari 30 karakter",
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

    if (category.length == 0) {
      setError({
        ...error,
        category: "Kolom kategori harus diisi",
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
          Edit Data Flashcard
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput
            value={word}
            name="word"
            placeholder="Masukkan kata"
            handleChange={handleWordChange}
            error={error}
          />
          <TextInput
            value={meaning}
            name="meaning"
            placeholder="Masukkan makna kata"
            handleChange={handleMeaningChange}
            error={error}
          />
          <SelectCategoryInput
            value={category}
            error={error}
            handleChange={handleCategoryChange}
          />

          <div className="space-x-2">
            <button
              type="button"
              className="btn"
              onClick={() => router.push("/")}
            >
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
