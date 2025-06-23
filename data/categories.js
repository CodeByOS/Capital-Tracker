export const defaultCategories = [
  // Income Categories
  {
    id: "salary",
    name: "Monthly Salary",
    type: "INCOME",
    color: "#16a34a", // green-600
    icon: "Briefcase",
  },
  {
    id: "freelance",
    name: "Contract Work",
    type: "INCOME",
    color: "#0ea5e9", // sky-500
    icon: "Code",
  },
  {
    id: "investments",
    name: "Capital Gains",
    type: "INCOME",
    color: "#7c3aed", // violet-600
    icon: "LineChart",
  },
  {
    id: "business",
    name: "Business Income",
    type: "INCOME",
    color: "#e11d48", // rose-600
    icon: "Factory",
  },
  {
    id: "rental",
    name: "Property Rental",
    type: "INCOME",
    color: "#facc15", // yellow-400
    icon: "Building2",
  },
  {
    id: "other-income",
    name: "Miscellaneous Income",
    type: "INCOME",
    color: "#475569", // slate-600
    icon: "CircleDollarSign",
  },

  // Expense Categories
  {
    id: "housing",
    name: "Home & Rent",
    type: "EXPENSE",
    color: "#dc2626", // red-600
    icon: "Landmark",
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "transportation",
    name: "Transport & Commute",
    type: "EXPENSE",
    color: "#ea580c", // orange-600
    icon: "BusFront",
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  {
    id: "groceries",
    name: "Supermarket",
    type: "EXPENSE",
    color: "#65a30d", // lime-600
    icon: "ShoppingCart",
  },
  {
    id: "utilities",
    name: "Bills & Utilities",
    type: "EXPENSE",
    color: "#0d9488", // teal-600
    icon: "PlugZap",
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "entertainment",
    name: "Leisure & Fun",
    type: "EXPENSE",
    color: "#7e22ce", // purple-700
    icon: "Gamepad2",
    subcategories: ["Movies", "Games", "Streaming Services"],
  },
  {
    id: "food",
    name: "Dining Out",
    type: "EXPENSE",
    color: "#e11d48", // rose-600
    icon: "ChefHat",
  },
  {
    id: "shopping",
    name: "Retail Shopping",
    type: "EXPENSE",
    color: "#db2777", // pink-600
    icon: "ShoppingBasket",
    subcategories: ["Clothing", "Electronics", "Home Goods"],
  },
  {
    id: "healthcare",
    name: "Health & Wellness",
    type: "EXPENSE",
    color: "#0f766e", // teal-700
    icon: "Stethoscope",
    subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
  },
  {
    id: "education",
    name: "Learning & Education",
    type: "EXPENSE",
    color: "#4f46e5", // indigo-600
    icon: "BookOpenCheck",
    subcategories: ["Tuition", "Books", "Courses"],
  },
  {
    id: "personal",
    name: "Self-Care",
    type: "EXPENSE",
    color: "#c026d3", // fuchsia-600
    icon: "Sparkles",
    subcategories: ["Haircut", "Gym", "Beauty"],
  },
  {
    id: "travel",
    name: "Trips & Travel",
    type: "EXPENSE",
    color: "#0284c7", // blue-600
    icon: "Luggage",
  },
  {
    id: "insurance",
    name: "Insurance Payments",
    type: "EXPENSE",
    color: "#64748b", // slate-500
    icon: "FileShield",
    subcategories: ["Life", "Home", "Vehicle"],
  },
  {
    id: "gifts",
    name: "Charity & Gifts",
    type: "EXPENSE",
    color: "#f472b6", // pink-400
    icon: "HelpingHand",
  },
  {
    id: "bills",
    name: "Fees & Charges",
    type: "EXPENSE",
    color: "#f43f5e", // rose-500
    icon: "FileText",
    subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
  },
  {
    id: "other-expense",
    name: "Uncategorized",
    type: "EXPENSE",
    color: "#94a3b8", // slate-400
    icon: "Boxes",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
    acc[category.id] = category.color;
    return acc;
}, {});
