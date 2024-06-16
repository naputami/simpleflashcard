export const getData = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
    next: { tags: ["collection"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const postNewCard = async (newCard) => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ ...newCard, is_remembered: false }]),
  });

  if (!res.ok) {
    console.log(res);
    toast.error("Terjadi kesalahan. Silakan Coba kembali");
    throw new Error("Failed to add data");
  }
};

export const deleteCard = async (cardId) => {
  const res = await fetch(
    fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([cardId]),
    })
  );
};

export const updateCard = async (data) => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
