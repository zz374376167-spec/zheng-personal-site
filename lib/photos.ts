export type PhotoCategory = "travel" | "portrait" | "life";

export interface PhotoItem {
  id: string;
  src: string;
  category: PhotoCategory;
  title: string;
  year?: number;
  alt: string;
  width: number;
  height: number;
  featured?: boolean;
}

export const photos: readonly PhotoItem[] = [
  {
    id: "portrait-guangzhou",
    src: "/images/portrait/portrait-01.jpg",
    category: "portrait",
    title: "广州夜色",
    alt: "詹政在广州塔夜景前的留影",
    width: 1280,
    height: 1704,
  },
  {
    id: "life-training",
    src: "/images/life/life-01.jpg",
    category: "life",
    title: "训练之后",
    alt: "健身之后在镜子前记录日常",
    width: 1279,
    height: 1706,
    featured: true,
  },
  {
    id: "life-reflection",
    src: "/images/life/life-02.jpg",
    category: "life",
    title: "日常一刻",
    alt: "镜面中的一段日常记录",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-01",
    src: "/images/travel/travel-01.jpg",
    category: "travel",
    title: "云南行记 01",
    year: 2025,
    alt: "云南旅行中的竖幅风景记录",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-02",
    src: "/images/travel/travel-02.jpg",
    category: "travel",
    title: "云南行记 02",
    year: 2025,
    alt: "云南旅行中的竖幅生活场景",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-03",
    src: "/images/travel/travel-03.jpg",
    category: "travel",
    title: "湖边",
    year: 2025,
    alt: "云南湖边的树、远山与行人",
    width: 1706,
    height: 1279,
    featured: true,
  },
  {
    id: "travel-04",
    src: "/images/travel/travel-04.jpg",
    category: "travel",
    title: "云南行记 04",
    year: 2025,
    alt: "云南旅行中的竖幅街景",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-05",
    src: "/images/travel/travel-05.jpg",
    category: "travel",
    title: "云南行记 05",
    year: 2025,
    alt: "云南旅行中的开阔风景",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-06",
    src: "/images/travel/travel-06.jpg",
    category: "travel",
    title: "云南行记 06",
    year: 2025,
    alt: "云南旅行中的自然风景",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-07",
    src: "/images/travel/travel-07.jpg",
    category: "travel",
    title: "云南行记 07",
    year: 2025,
    alt: "云南旅行中的横幅街景",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-08",
    src: "/images/travel/travel-08.jpg",
    category: "travel",
    title: "夜晚的心愿",
    year: 2025,
    alt: "云南夜晚挂满心愿牌的街道建筑",
    width: 1706,
    height: 1279,
    featured: true,
  },
  {
    id: "travel-09",
    src: "/images/travel/travel-09.jpg",
    category: "travel",
    title: "云南行记 09",
    year: 2025,
    alt: "云南旅行中的夜间街景",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-10",
    src: "/images/travel/travel-10.jpg",
    category: "travel",
    title: "云南行记 10",
    year: 2025,
    alt: "云南旅行中的建筑与街道",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-11",
    src: "/images/travel/travel-11.jpg",
    category: "travel",
    title: "云南行记 11",
    year: 2025,
    alt: "云南旅行中的横幅景观",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-12",
    src: "/images/travel/travel-12.jpg",
    category: "travel",
    title: "云南行记 12",
    year: 2025,
    alt: "云南旅行中的竖幅风景",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-13",
    src: "/images/travel/travel-13.jpg",
    category: "travel",
    title: "云南行记 13",
    year: 2025,
    alt: "云南旅行中的自然与人文景观",
    width: 1706,
    height: 1279,
  },
  {
    id: "travel-14",
    src: "/images/travel/travel-14.jpg",
    category: "travel",
    title: "云南行记 14",
    year: 2025,
    alt: "云南旅行中的竖幅场景",
    width: 1279,
    height: 1706,
  },
  {
    id: "travel-15",
    src: "/images/travel/travel-15.jpg",
    category: "travel",
    title: "云南行记 15",
    year: 2025,
    alt: "云南旅行结束前的一幅风景记录",
    width: 1706,
    height: 1279,
  },
] as const;

export const selectedPhotos = photos.filter((photo) => photo.featured);

export function getPhotoById(id: string): PhotoItem {
  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    throw new Error(`Missing required photo: ${id}`);
  }

  return photo;
}

export function getPhotosByCategory(category: PhotoCategory) {
  return photos.filter((photo) => photo.category === category);
}
