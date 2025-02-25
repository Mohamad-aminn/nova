export const states = [
  { id: 2, state: "آذربایجان شرقی" },
  { id: 3, state: "آذربایجان غربی" },
  { id: 4, state: "اردبیل" },
  { id: 5, state: "اصفهان" },
  { id: 6, state: "البرز" },
  { id: 7, state: "ایلام" },
  { id: 8, state: "بوشهر" },
  { id: 9, state: "تهران" },
  { id: 10, state: "چهار محال و بختیاری" },
  { id: 11, state: "خراسان جنوبی" },
  { id: 12, state: "خراسان رضوی" },
  { id: 13, state: "خراسان شمالی" },
  { id: 14, state: "خوزستان" },
  { id: 15, state: "زنجان" },
  { id: 16, state: "سمنان" },
  { id: 17, state: "سیستان و بلوچستان" },
  { id: 18, state: "فارس" },
  { id: 19, state: "قزوین" },
  { id: 20, state: "قم" },
  { id: 21, state: "کردستان" },
  { id: 22, state: "کرمان" },
  { id: 23, state: "کرمانشاه" },
  { id: 24, state: "کهگیلویه و بویراحمد" },
  { id: 25, state: "گلستان" },
  { id: 26, state: "گیلان" },
  { id: 27, state: "لرستان" },
  { id: 28, state: "مازندران" },
  { id: 29, state: "مرکزی" },
  { id: 30, state: "هرمزگان" },
  { id: 31, state: "همدان" },
  { id: 32, state: "یزد" },
];

// export const getStateName = (id: string) => {
//   const state = states.find((s) => s.id === Number(id));
//   if (!state) {
//     throw Error("Invalid id");
//   }

//   return state?.state;
// };

export const getStateId = (name: string) => {
  const state = states.find((s) => s.state === name.trim());

  return state?.id;
};
