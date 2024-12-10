import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function RecentPhotos() {
  // Mock data for recent photos
  const recentPhotos = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Photos Récentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {recentPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden border"
            >
              <Image
                src={photo}
                alt={`Photo récente ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={`empty-${i}`}
              className="aspect-square rounded-lg bg-muted"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}