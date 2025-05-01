// Just export the raw data - no JSX, no React imports
export const snacks = {
  japan: [
    {
      id: 1,
      name: "Pocky",
      description: "Chocolate-coated biscuit sticks",
      iconType: "candy", // String identifier
      iconColor: "text-pink-500" // Tailwind class
    },
    {
      id: 2,
      name: "Kit Kat Matcha",
      description: "Green tea flavored Kit Kat",
      iconType: "cookie",
      iconColor: "text-emerald-500"
    }
  ],
  mexico: [
    {
      id: 3,
      name: "Takis",
      description: "Spicy rolled corn chips",
      iconType: "pizza",
      iconColor: "text-red-500"
    },
    {
      id: 4,
      name: "Mazapán",
      description: "Peanut candy",
      iconType: "croissant",
      iconColor: "text-amber-500"
    }
  ],
  italy: [
    {
      id: 5,
      name: "Baci Perugina",
      description: "Hazelnut chocolates",
      iconType: "coffee",
      iconColor: "text-rose-800"
    }
  ]
};