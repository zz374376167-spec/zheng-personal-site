import { PhotoDisplay } from "@/components/gallery/PhotoDisplay";
import { selectedPhotos } from "@/lib/photos";

const placements = [
  "lg:col-span-7",
  "lg:col-span-4 lg:col-start-9 lg:mt-40",
  "lg:col-span-8 lg:col-start-3 lg:mt-16",
] as const;

export function SelectedMoments() {
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
      {selectedPhotos.map((photo, index) => (
        <PhotoDisplay
          key={photo.id}
          photo={photo}
          index={index}
          className={placements[index % placements.length]}
        />
      ))}
    </div>
  );
}
