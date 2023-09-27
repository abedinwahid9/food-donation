const getStoredDonateData = () => {
  const storedDonateData = localStorage.getItem("save-Donate-Data");

  if (storedDonateData) {
    return JSON.parse(storedDonateData);
  }

  return [];
};

const saveDonateData = (id) => {
  const storedDonateData = getStoredDonateData();

  const exists = storedDonateData.find((donateId) => donateId === id);

  if (!exists) {
    storedDonateData.push(id);
    localStorage.setItem("save-Donate-Data", JSON.stringify(storedDonateData));
  }
};

export { saveDonateData, getStoredDonateData };
