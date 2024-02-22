import { User } from '@prisma/client';
import { useMemo } from 'react';

interface useFavorite {
  productId: string;
  currentUser?: User | null;
}

const useFavorite = ({ productId, currentUser }: useFavorite) => {
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return;
  }, [currentUser, productId]);
};
