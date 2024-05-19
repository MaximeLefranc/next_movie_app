import prisma from '@/utils/prisma';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function POST(request, { params: { movieId } }) {
  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.update({
    where: {
      email: token.email,
    },
    data: {
      movies: {
        create: [{ movieId }],
      },
    },
  });

  return NextResponse.json(user);
}