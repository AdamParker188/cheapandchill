import Papa from "papaparse";
import { SHEET_CSV_URL } from "../config/sheet";

const toNumber = (v) => {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(String(v).replace(/[^\d.-]/g, ""));
  return Number.isFinite(n) ? n : null;
};

export async function loadPackagesFromSheet() {
  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) throw new Error("Nem sikerült betölteni a Google Sheet CSV-t.");

  const csvText = await res.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors?.length) {
    console.warn("CSV parse warning:", parsed.errors);
  }
  const buildHotels = (row) => {
  const hasRec =
    row.hotelRec_name || row.hotelRec_url || row.hotelRec_image || row.hotelRec_description || row.hotelRec_priceLabel;

  const hasBud =
    row.hotelBud_name || row.hotelBud_url || row.hotelBud_image || row.hotelBud_description || row.hotelBud_priceLabel;

  if (!hasRec && !hasBud) return undefined;

  return {
    ...(hasRec
      ? {
          recommended: {
            name: row.hotelRec_name?.trim() || "",
            description: row.hotelRec_description?.trim() || "",
            image: row.hotelRec_image?.trim() || "",
            url: row.hotelRec_url?.trim() || "",
            priceLabel: row.hotelRec_priceLabel?.trim() || "",
          },
        }
      : {}),
    ...(hasBud
      ? {
          budget: {
            name: row.hotelBud_name?.trim() || "",
            description: row.hotelBud_description?.trim() || "",
            image: row.hotelBud_image?.trim() || "",
            url: row.hotelBud_url?.trim() || "",
            priceLabel: row.hotelBud_priceLabel?.trim() || "",
          },
        }
      : {}),
  };
};


  // Normalizálás a te adatstruktúrádra
  return (parsed.data || [])
    .map((row) => ({
      id: toNumber(row.id),
      title: row.title?.trim() || "",
      image: row.image?.trim() || "",
      price: toNumber(row.price) ?? 0,
      description: row.description?.trim() || "",
      startDate: row.startDate?.trim() || "",
      endDate: row.endDate?.trim() || "",
      createdAt: row.createdAt?.trim() || "",
      location: row.location?.trim() || "",
      rating: toNumber(row.rating),
      flightUrl: row.flightUrl?.trim() || "",
      hotels: buildHotels(row),
    }))
    .filter((p) => p.id && p.title); // alap szűrés
}
