import { DashboardOverview } from '@/components/dashboard/dashboard-overview';
import { PhotoUploadCard } from '@/components/dashboard/photo-upload-card';
import { RecentPhotos } from '@/components/dashboard/recent-photos';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhotoUploadCard />
        <RecentPhotos />
      </div>
    </div>
  );
}