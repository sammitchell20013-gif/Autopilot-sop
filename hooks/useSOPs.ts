/**
 * useSOPs Hook
 * This hook fetches and manages SOPs from the database
 * Use it in components: const { sops, loading, createSOP } = useSOPs();
 */

'use client';

import { useEffect, useState } from 'react';
import { getUserSOPs, createSOP as createSOPDb, updateSOP as updateSOPDb, deleteSOP as deleteSOPDb, SOP } from '@/lib/supabase/sops';

export function useSOPs() {
  const [sops, setSOPs] = useState<SOP[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch SOPs when component mounts
  useEffect(() => {
    loadSOPs();
  }, []);

  const loadSOPs = async () => {
    setLoading(true);
    const data = await getUserSOPs();
    setSOPs(data);
    setLoading(false);
  };

  const createSOP = async (sopData: {
    title: string;
    description?: string;
    folder?: string;
    tags?: string[];
    video_url?: string;
    steps?: any[];
  }) => {
    const result = await createSOPDb(sopData);
    if (result.success) {
      await loadSOPs(); // Refresh the list
    }
    return result;
  };

  const updateSOP = async (id: string, updates: Partial<SOP>) => {
    const result = await updateSOPDb(id, updates);
    if (result.success) {
      await loadSOPs(); // Refresh the list
    }
    return result;
  };

  const deleteSOP = async (id: string) => {
    const result = await deleteSOPDb(id);
    if (result.success) {
      await loadSOPs(); // Refresh the list
    }
    return result;
  };

  return {
    sops,
    loading,
    createSOP,
    updateSOP,
    deleteSOP,
    refresh: loadSOPs,
  };
}

