export function generateHistoryData() {
  return [
    {
      id: "1",
      date: "2024-03-20",
      type: "portrait",
      status: "completed",
      filename: "portrait_pro_1.jpg",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      id: "2",
      date: "2024-03-19",
      type: "upload",
      status: "completed",
      filename: "photo_original_1.jpg",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: "3",
      date: "2024-03-18",
      type: "portrait",
      status: "processing",
      filename: "portrait_pro_2.jpg",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
    },
  ] as const;
}