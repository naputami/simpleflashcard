export const getData = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
    cache: "no-store",
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
    alert("Error adding new card!");
    throw new Error("Failed to add data");
  }
};

export const deleteCard = async (cardId) => {
  console.log(cardId)

  const res = await fetch(
    fetch("https://v1.appbackend.io/v1/rows/fYhRkDmeo8iq", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([cardId]),
    })
  );

  if (!res.ok) {
    alert("Error deleting card!")
    throw new Error("Failed to delete data");
  }
};
