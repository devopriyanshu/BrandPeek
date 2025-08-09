import { apiGet, apiPost } from "./api";

const mockBrands = [
  {
    id: "1",
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    description: "Think different.",
    fullDescription:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
    category: "Technology",
    founded: "1976",
    website: "https://apple.com",
    followers: "12.5M",
  },
  {
    id: "2",
    name: "Nike",
    logo: "https://logo.clearbit.com/nike.com",
    description: "Just Do It.",
    fullDescription:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
    category: "Sports & Fashion",
    founded: "1964",
    website: "https://nike.com",
    followers: "8.9M",
  },
  {
    id: "3",
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    description: "Accelerating sustainable transport.",
    fullDescription:
      "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles.",
    category: "Automotive",
    founded: "2003",
    website: "https://tesla.com",
    followers: "15.2M",
  },
  {
    id: "4",
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    description: "Music for everyone.",
    fullDescription:
      "Spotify is a Swedish audio streaming and media services provider founded in 2006. It is one of the largest music streaming service providers, with over 365 million monthly active users.",
    category: "Music & Entertainment",
    founded: "2006",
    website: "https://spotify.com",
    followers: "6.7M",
  },
  {
    id: "5",
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    description: "Belong anywhere.",
    fullDescription:
      "Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.",
    category: "Travel & Hospitality",
    founded: "2008",
    website: "https://airbnb.com",
    followers: "4.3M",
  },
];

export async function getAllBrands() {
  try {
    const data = await apiGet("/Brands");
    return data.length ? data : mockBrands;
  } catch (error) {
    console.warn("API failed, using mock data:", error);
    return mockBrands;
  }
}

export async function getBrandById(id) {
  try {
    return await apiGet(`/Brands/${id}`);
  } catch (error) {
    console.warn("API failed, using mock data:", error);
    return mockBrands.find((b) => b.id === id) || null;
  }
}

export async function followBrand(brandId) {
  try {
    return await apiPost(`/Brands/${brandId}/follow`, {});
  } catch (error) {
    return { success: true, message: "Brand followed locally!" };
  }
}
