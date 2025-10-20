import { useEffect, useState } from 'react';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { getStoriesByCategory, getAllStories } from '@/data/sleepStories';

export function useRealtimeStories(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const configured = isFirebaseConfigured();

  useEffect(() => {
    let unsub = () => {};

    // Fallback immediately if Firebase not configured
    if (!configured) {
      const fallback = category ? getStoriesByCategory(category) : getAllStories();
      setData(fallback);
      setLoading(false);
      return () => {};
    }

    const col = collection(db, 'stories');
    const q = category ? query(col, where('category', '==', category)) : col;

    unsub = onSnapshot(q, (snap) => {
      const docs = snap.docs.map((d) => {
        const payload = d.data() || {};
        return {
          id: payload.id ?? d.id,
          title: payload.title ?? '',
          description: payload.description ?? '',
          duration: payload.duration ?? '15 min',
          image: payload.image ?? '',
          category: payload.category ?? (category || 'featured'),
          isPremium: Boolean(payload.isPremium),
          icon: payload.icon ?? '🌙',
        };
      });

      // If collection empty, fall back to static data to keep UI consistent
      if (!docs.length) {
        const fallback = category ? getStoriesByCategory(category) : getAllStories();
        setData(fallback);
      } else {
        setData(docs);
      }
      setLoading(false);
    }, () => {
      // On error, fall back to static
      const fallback = category ? getStoriesByCategory(category) : getAllStories();
      setData(fallback);
      setLoading(false);
    });

    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, [category, configured]);

  return { data, loading };
}