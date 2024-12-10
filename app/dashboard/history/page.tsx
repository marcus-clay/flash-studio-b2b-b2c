"use client"

import { Card } from '@/components/ui/card';
import { DataTable } from '@/components/dashboard/data-table';
import { columns } from '@/components/dashboard/columns';
import { generateHistoryData } from '@/lib/data';
import { PageContainer } from '@/components/dashboard/page-container';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function HistoryPage() {
  const data = generateHistoryData();

  return (
    <PageContainer
      title="Historique"
      description="Historique de vos portraits générés et photos uploadées"
    >
      <motion.div variants={fadeInUp}>
        <Card className="border border-gray-100 shadow-sm overflow-hidden">
          <DataTable columns={columns} data={data} />
        </Card>
      </motion.div>
    </PageContainer>
  );
}